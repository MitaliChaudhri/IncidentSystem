const { PostAttachments, GetAttachments } = require("./lib/DocumentService");

module.exports = function () {
    const Attachment = this.entities.Attachment;
    this.on("PostAttachment", async (req) => {
        const { content, name, griveance_id, mime,incid } = req.data;

        if (!griveance_id || !content || !name) {
            return "Request data is missing";
        }
        try {
            const response = await PostAttachments(content, name, mime);


            if (response?.status && response?.status > 399) {
                return response.message;
            }

            await INSERT.into(Attachment).entries({
                INCID_ID: griveance_id,
                INCID_INCID:incid,
                objectId: response.properties['cmis:objectId'].value,
                name: name,
                mime: mime
            });

            return "Successfully uploaded";
        } catch ({ message }) {
            return message;
        }

    });

    this.on("PullAttachment", async (req) => {
        return await GetAttachments(req.data.id);
    })
}