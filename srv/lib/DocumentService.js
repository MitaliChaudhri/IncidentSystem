const axios = require("axios"),
    TOKENURL = "https://development-oc58dg9d.authentication.us10.hana.ondemand.com/oauth/token",
    CLIENTID = "sb-503e434b-87bd-4569-98f9-0a80f99a727d!b264940|sdm-di-DocumentManagement-sdm_integration!b6332",
    CLIENTSECRET = "2zYNI8/Ajks3OdSy7T6dNTzNKtI=",
    DOCUMENTEXTRACTBASEURL = "https://api-sdm-di.cfapps.us10.hana.ondemand.com",
    documentManagementClient = axios.create({
        baseURL: `${DOCUMENTEXTRACTBASEURL}/browser/4fcaeb5f-6a64-44a4-8ab9-4de4ceb92c1b/root`
    })

let token = null;

async function _FetchDocumentManagementToken() {
    const urlParams = new URLSearchParams()
    urlParams.append('grant_type', 'client_credentials')

    try {
        const response = await axios.post(TOKENURL, urlParams.toString(), {
            headers: {
                Authorization: `Basic ${Buffer.from(`${CLIENTID}:${CLIENTSECRET}`).toString('base64')}`
            }
        })

        const { access_token } = response.data

        return access_token
    } catch (error) {
        console.error('Error fetching access token:', error)
        throw error
    }
}

async function getAccessToken() {
    if (!token) {
        token = await _FetchDocumentManagementToken()
    }
    return token
}

documentManagementClient.interceptors.request.use(
    async (config) => {
        try {
            const token = await getAccessToken()
            config.headers['Authorization'] = `Bearer ${token}`
        } catch (error) {
            console.error('Error in request interceptor:', error)
            return Promise.reject(error)
        }
        return config
    },
    (error) => {
        console.error('Error intercepting request:', error)
        return Promise.reject(error)
    }
)

async function PostAttachments(content, fileName, mime) {
    const formData = new FormData();
    const payload = {
        "propertyId[0]": "cmis:objectTypeId",
        "propertyValue[0]": "cmis:document",
        "propertyId[1]": "cmis:name",
        "propertyValue[1]": fileName.replace(/\./, Math.floor(Math.random() * 1000)),
        "cmisaction": "createDocument",
        "file": await _ArrayBufferToFile(content, fileName, mime)
    };

    for (const key in payload) {
        formData.append(key, payload[key]);
    }
    try {
        const { data } = await documentManagementClient.post('/INCGRV', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return data;
    } catch (err) {
        return err;
    }
}

async function GetAttachments(objectId) {
    try {
        const { data } = await documentManagementClient.get('?objectId=' + objectId, {
            responseType: 'arraybuffer'
        }),
            base64String = Buffer.from(data).toString('base64');
        return base64String;
    } catch (err) {
        return err;
    }
}

function _ArrayBufferToFile(content, fileName, mimeType) {
    return new Promise((resolve, reject) => {
        try {
            const byteArray = new Uint8Array(content),
                blob = new Blob([byteArray], { type: mimeType });
            // file = new File([blob], fileName, { type: mimeType })

            resolve(blob);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    PostAttachments,
    GetAttachments,
    documentManagementClient
}
