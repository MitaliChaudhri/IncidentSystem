const cds = require("@sap/cds");
var nodemailer = require('nodemailer');

function lPad(str, size) {
  var s = str.toString();
  while (s.length < size) {
    s = "0" + s;
  }
  return s; // return new number
}

class ReportIncident extends cds.ApplicationService {

  init() {

    const { Incident } = this.entities;
    this.before('CREATE', Incident, async (context) => {

      const db = await cds.connect.to("db");
      // var y = await db.run('SELECT COUNT(1) AS CNT FROM COS_INCIDENT WHERE DRAFTID = 1');
      // var cnt = y[0]["CNT"];

      // if (cnt === 0) {
      //   context.data.draftid = 1;
      //   console.log(cnt);
      // } else {
      //   var z = await db.run('SELECT top 1 draftid FROM COS_INCIDENT where isdraft = 1 order by draftid desc');
      //   var dftid = z[0]["DRAFTID"];
      //   //console.log(dftid);
      //   if (cnt > 0) {
      //     var dft = dftid + 1;
      //     context.data.draftid = dft;
      //   }
      // }
      var x = await db.run('SELECT "INCIDENT_IID".NEXTVAL FROM DUMMY');
      var numberfinal = x[0]["INCIDENT_IID.NEXTVAL"];
      context.data.INCID = numberfinal;

      const currentYear = new Date().getFullYear();
      if (context.data.isdraft == "0") {
        var dummy_num = 'INC-' + currentYear + '-' + lPad(numberfinal, 5);
        context.data.IncNo = dummy_num;
      } else {
        context.data.IncNo = '';
      }

    });


    this.after('CREATE', Incident, async (context) => {
      if (context.isdraft === '0') {                                                    // If record not in the draft
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'tushar.ladhe116@gmail.com',
            pass: 'hlfs hrsj adgy hgxy'
          }
        });

        var mailOptions = {
          from: 'tushar.ladhe116@gmail.com',
          to: 'mitalee.chaudhari@initiumdigital.com',
          subject: 'Report Incident',
          text: 'You have created an incident ' + context.IncNo + ' and it has been sent to your manager for the further investigation.'
        };


        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

      }
    });

    return super.init();
  }

}

module.exports = { ReportIncident };       