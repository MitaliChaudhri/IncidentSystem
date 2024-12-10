const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const { getDestination } = require('@sap-cloud-sdk/core');
const cds = require('@sap/cds');

module.exports = async (srv) => {
    const DESTINATION_NAME = 'INC_EMPINFO_REPLICATION';

    srv.on('loadmasterdata', async (req) => {
        try {
            const { 'COS.EMPINFO':EMPINFO } = cds.entities;
            const DESTINATION_NAME = 'INC_EMPINFO_REPLICATION';

            const destination = await getDestination('INC_EMPINFO_REPLICATION');

            const auth = 'Basic ' + Buffer.from(destination.username + ':' + destination.password).toString('base64');

            const response = await executeHttpRequest({ destinationName: DESTINATION_NAME }, {
                method: 'GET',
                url: 'ZCDS_EMPINFO',
                headers: {
                    'Authorization': auth
                }
            });

           const employeeData = response.data.value; // Assuming the data is in response.data
            if (!Array.isArray(employeeData)) {
                return req.error(400, 'The fetched data is not an array');
            }

            const entries = employeeData.map(item => ({
                empid: item.empid,
                empname: item.empname,
                emppos: item.emppos,
                division: item.division,
                dept: item.dept,
                section: item.sections,
                worklocation: item.worklocation,
                supid: item.supid,
                supname: item.supname,
                empemail: item.empemail,
                mgremail: item.mgremail
            }));
            

            await DELETE.from(EMPINFO);
            await INSERT.into(EMPINFO).entries(entries);

        //    console.log(entries);
            return response.data; // Map the response to the CAP entity

        } catch (error) {
            console.error('Error fetching ABAP RAP OData:', error.message);
            req.error(error.message);
        }
    });


    // implementation for CreateRequest Action
    srv.on("loademployeemasterdata", async (req) => {

        try {

            // connecting to Service
            const employeemasterdata = await cds.connect.to('employeemasterdata');

            //data extraction
            const payload = req.data.arrayofdata;
            payload.section = payload.sections



            const result1 = await employeemasterdata.run(
                DELETE.from('EMPINFO')
            );
            //inserting data into requests
            const result = await employeemasterdata.run(
                INSERT.into('EMPINFO').entries(payload)
            );
            //return object
            if (result) {
                return {
                    "status": "OK",
                    "code": "200",
                    "message": "Data Submitted Successfully"
                }
            }

        } catch (e) {

            // new transaction for error log
            const tx = (await cds.connect.to('employeemasterdata')).tx();

            // inserting data into error log table
            const result = await tx.run(
                INSERT.into('ErrorLog').entries({
                    "error": e.toString(),
                    "app": "Access Request",
                    "srv": "CreateRequest"
                })
            );

            // commiting the error log transaction
            tx.commit();

            // throwing the error
            req.error(500, e.toString());

        }

    });

};