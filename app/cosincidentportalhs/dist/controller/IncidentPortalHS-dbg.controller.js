
sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/m/Dialog",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageBox, MessageToast, JSONModel, Fragment, Dialog) {
    "use strict";

    return Controller.extend("cosincidentportalhs.controller.IncidentPortalHS", {
      onInit: function () {


        const model = new JSONModel({

          Notes: {
            addedby: "",
            addedon: "",
            IncNotes: "",
            NotesType: -1,
            NotesReview: -1,
            INCI_ID: "",
            INCI_INCID: ""

          },


          Payload: {
            InvestigationBy: "",
            DateInvest: "",
            EmpRTW: -1,
            InvStatDetails: "",
          InvstStatus: "",
            INCI_ID: "",
            INCI_INCID: ""

          },

          CorrectAction:
          {
            AssignTo: "",
            DueDate: "",
            CAStatus: "",
            Comments: ""
          },
          FollowUp:
          {
            followcrdate: "",
            followupcrby: "",
            folloupduedate: "",
            followupstat: "",
            followupcrfor: "",
            followupnotes: "",
            compdate: "",
            followupflg: ""

          },
          Payload2: {

            ReqAccom: -1,
            isaccomgttendays: -1,
            reasonforref: -1,
            Other: "",
            IssueHistory: "",
            INCI_ID: "",
            INCI_INCID: ""
          },
          Payload3: {

            stdate: "",
            Antienddate: "",
            Union: "",
            AccoPosDept: "",
            date: "",
            INCI_ID: "",
            INCI_INCID: "",
          },
          Payload4: {

            WCB: {},

            "inj": [{
              primaryinj: "",
              bodypart: "",
              side: "",
            }],
          },
          "IncidentCategorys": [{
            CatId: "1",
            Cattext: "Injury/Illness"
          },
          {
            CatId: "2",
            Cattext: "Property /Equipment Damage"
          },
          {
            CatId: "3",
            Cattext: "Near Miss"
          },
          {
            CatId: "4",
            Cattext: "Dangerous Occurrence"
          },
          {
            CatId: "5",
            Cattext: "Environment"
          },
          {
            CatId: "6",
            Cattext: "Security"
          }],
          "IncidentTypes": [{
            TypeId: "1",
            IncText: "Non-Occupational"
          },
          {
            TypeId: "2",
            IncText: "No Treatment"
          },
          {
            TypeId: "3",
            IncText: "First Aid"
          },
          {
            TypeId: "4",
            IncText: "Medical Consultation"
          },
          {
            TypeId: "5",
            IncText: "Medical Aid"
          },
          {
            TypeId: "6",
            IncText: "Modified Work"
          },
          {
            TypeId: "7",
            IncText: "Lost time Incident"
          },
          {
            TypeId: "8",
            IncText: "Psychological"
          },
          {
            TypeId: "9",
            IncText: "Fatality"
          }],
          "TypeofEvents": [{
            eventId: "1",
            eventtext: "Corporate"
          },
          {
            eventId: "2",
            eventtext: "Private"
          },
          {
            eventId: "3",
            eventtext: "Charity"
          }],
          "IncSevirity": [{
            SevId: "1",
            Sevtext: "Critical"
          },
          {
            SevId: "2",
            Sevtext: "Major"
          },
          {
            SevId: "3",
            Sevtext: "Minor"
          }],
          "WCBInjuryCategory": [{
            InjCatID: "1",
            InjCatText: "Acute Injury"
          },
          {
            InjCatID: "2",
            InjCatText: "Chronic Injury"
          }],
          "WCBInjurySubCategory": [{
            InjSubCatID: "1",
            InjSubCatText: "Fractures"
          },
          {
            InjSubCatID: "2",
            InjSubCatText: "Sprains"
          },
          {
            InjSubCatID: "3",
            InjSubCatText: "Spinal Cord Injury"
          },
          {
            InjSubCatID: "4",
            InjSubCatText: "Dislocation"
          }],
          "WCBInjuryStatus": [{
            InjStatID: "1",
            InjStatText: "Active"
          },
          {
            InjStatID: "2",
            InjStatText: "Healing"
          },
          {
            InjStatID: "3",
            InjStatText: "Recovered"
          },
          {
            InjStatID: "4",
            InjStatText: "Recurrent"
          }],
          "WCBClaimStatus": [{
            ClaimStatID: "1",
            ClaimStatText: "Sbumitted"
          },
          {
            ClaimStatID: "2",
            ClaimStatText: "Under Review"
          },
          {
            ClaimStatID: "3",
            ClaimStatText: "Pending"
          },
          {
            ClaimStatID: "4",
            ClaimStatText: "Rejected"
          }],
          "InjureSide": [{
            InjureSideID: "1",
            InjureSideText: "Upper"
          },
          {
            InjureSideID: "2",
            InjureSideText: "Lower"
          },
          {
            InjureSideID: "3",
            InjureSideText: "Right"
          },
          {
            InjureSideID: "4",
            InjureSideText: "Left"
          }],
          "InjuryType": [{
            InjuryTypeID: "1",
            InjuryTypeText: "Primary"
          },
          {
            InjuryTypeID: "2",
            InjuryTypeText: "Secondary"
          },
          ],

          EmpSupNames: [
            {
              name: "Stephan Lie",
              id: "1001"
            },
            {
              name: "Fay Van Damme",
              id: "1002"
            },
            {
              name: "Brevin Dice",
              id: "1003"
            },
            {
              name: "Regina Oleveria",
              id: "1004"
            },
            {
              name: "John Mathew",
              id: "1005"
            },
            {
              name: "Jim Parker",
              id: "1006"
            },
            {
              name: "Sophia Ran",
              id: "1007"
            },
            {
              name: "Wendi Blake",
              id: "1008"
            },
            {
              name: "Lois Lane",
              id: "1009"
            },
            {
              name: "Mary Magdalene",
              id: "1010"
            },
            {
              name: "Simon Cyrene",
              id: "1011"
            },
          ],

          Payload1: {
            incident: {},
            wasIncOnCosloc: -1,
            noncosvehinvol: -1,
            isinvestreq: -1,
            shift: -1,
            wascosvehused: -1,
            isdraft: false,
            maxDate: new Date(),
            COSEmployee: {},


            "COSEquipment": [{
              EquipNo: ""

            }],
            "witness": [],
            "addwellness": 1,
            "isCOSEmp": -1,
            "COSEmployee": [],
            "Contractor": [],
            "Member": [],
            "child1": false,
            "child2": false,
            "child3": false,

          },
          "ButtonVisibility": "1",
          "child5": false,
          "child6": false,
          "child7": false,
        "isSeparatorVisible": true
        });

        this.getView().setModel(model, "localModel");
        const oMasterData = new JSONModel(model.getData());
        this.getView().setModel(oMasterData, "oMasterData");

        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("RouteIncidentPortalHS").attachMatched(this._onObjectMatched, this);


      },

      _onObjectMatched: function (oEvent) {
        const model = new JSONModel({

          Notes: {
            addedby: "",
            addedon: "",
            IncNotes: "",
            NotesType: -1,
            NotesReview: -1,
            INCI_ID: "",
            INCI_INCID: ""

          },


          Payload: {
            InvestigationBy: "",
            DateInvest: "",
            EmpRTW: -1,
            InvStatDetails: "",
          InvstStatus: "",
            INCI_ID: "",
            INCI_INCID: ""

          },

          CorrectAction:
          {
            AssignTo: "",
            DueDate: "",
            CAStatus: "",
            Comments: ""
          },
          FollowUp:
          {
            followcrdate: "",
            followupcrby: "",
            folloupduedate: "",
            followupstat: "",
            followupcrfor: "",
            followupnotes: "",
            compdate: "",
            followupflg: ""

          },
          Payload2: {

            ReqAccom: -1,
            isaccomgttendays: -1,
            reasonforref: -1,
            Other: "",
            IssueHistory: "",
            INCI_ID: "",
            INCI_INCID: ""
          },
          Payload3: {

            stdate: "",
            Antienddate: "",
            Union: "",
            AccoPosDept: "",
            date: "",
            INCI_ID: "",
            INCI_INCID: "",
          },
          Payload4: {

            WCB: {},

            "inj": [{
              primaryinj: "",
              bodypart: "",
              side: "",
            }],
          },
          "IncidentCategorys": [{
            CatId: "1",
            Cattext: "Injury/Illness"
          },
          {
            CatId: "2",
            Cattext: "Property /Equipment Damage"
          },
          {
            CatId: "3",
            Cattext: "Near Miss"
          },
          {
            CatId: "4",
            Cattext: "Dangerous Occurrence"
          },
          {
            CatId: "5",
            Cattext: "Environment"
          },
          {
            CatId: "6",
            Cattext: "Security"
          }],
          "IncidentTypes": [{
            TypeId: "1",
            IncText: "Non-Occupational"
          },
          {
            TypeId: "2",
            IncText: "No Treatment"
          },
          {
            TypeId: "3",
            IncText: "First Aid"
          },
          {
            TypeId: "4",
            IncText: "Medical Consultation"
          },
          {
            TypeId: "5",
            IncText: "Medical Aid"
          },
          {
            TypeId: "6",
            IncText: "Modified Work"
          },
          {
            TypeId: "7",
            IncText: "Lost time Incident"
          },
          {
            TypeId: "8",
            IncText: "Psychological"
          },
          {
            TypeId: "9",
            IncText: "Fatality"
          }],
          "TypeofEvents": [{
            eventId: "1",
            eventtext: "Corporate"
          },
          {
            eventId: "2",
            eventtext: "Private"
          },
          {
            eventId: "3",
            eventtext: "Charity"
          }],
          "IncSevirity": [{
            SevId: "1",
            Sevtext: "Critical"
          },
          {
            SevId: "2",
            Sevtext: "Major"
          },
          {
            SevId: "3",
            Sevtext: "Minor"
          }],
          "WCBInjuryCategory": [{
            InjCatID: "1",
            InjCatText: "Acute Injury"
          },
          {
            InjCatID: "2",
            InjCatText: "Chronic Injury"
          }],
          "WCBInjurySubCategory": [{
            InjSubCatID: "1",
            InjSubCatText: "Fractures"
          },
          {
            InjSubCatID: "2",
            InjSubCatText: "Sprains"
          },
          {
            InjSubCatID: "3",
            InjSubCatText: "Spinal Cord Injury"
          },
          {
            InjSubCatID: "4",
            InjSubCatText: "Dislocation"
          }],
          "WCBInjuryStatus": [{
            InjStatID: "1",
            InjStatText: "Active"
          },
          {
            InjStatID: "2",
            InjStatText: "Healing"
          },
          {
            InjStatID: "3",
            InjStatText: "Recovered"
          },
          {
            InjStatID: "4",
            InjStatText: "Recurrent"
          }],
          "WCBClaimStatus": [{
            ClaimStatID: "1",
            ClaimStatText: "Sbumitted"
          },
          {
            ClaimStatID: "2",
            ClaimStatText: "Under Review"
          },
          {
            ClaimStatID: "3",
            ClaimStatText: "Pending"
          },
          {
            ClaimStatID: "4",
            ClaimStatText: "Rejected"
          }],
          "InjureSide": [{
            InjureSideID: "1",
            InjureSideText: "Upper"
          },
          {
            InjureSideID: "2",
            InjureSideText: "Lower"
          },
          {
            InjureSideID: "3",
            InjureSideText: "Right"
          },
          {
            InjureSideID: "4",
            InjureSideText: "Left"
          }],
          "InjuryType": [{
            InjuryTypeID: "1",
            InjuryTypeText: "Primary"
          },
          {
            InjuryTypeID: "2",
            InjuryTypeText: "Secondary"
          },
          ],

          EmpSupNames: [
            {
              name: "Stephan Lie",
              id: "1001"
            },
            {
              name: "Fay Van Damme",
              id: "1002"
            },
            {
              name: "Brevin Dice",
              id: "1003"
            },
            {
              name: "Regina Oleveria",
              id: "1004"
            },
            {
              name: "John Mathew",
              id: "1005"
            },
            {
              name: "Jim Parker",
              id: "1006"
            },
            {
              name: "Sophia Ran",
              id: "1007"
            },
            {
              name: "Wendi Blake",
              id: "1008"
            },
            {
              name: "Lois Lane",
              id: "1009"
            },
            {
              name: "Mary Magdalene",
              id: "1010"
            },
            {
              name: "Simon Cyrene",
              id: "1011"
            },
          ],

          Payload1: {
            incident: {},
            wasIncOnCosloc: -1,
            noncosvehinvol: -1,
            isinvestreq: -1,
            shift: -1,
            wascosvehused: -1,
            isdraft: false,
            maxDate: new Date(),
            COSEmployee: {},


            "COSEquipment": [{
              EquipNo: ""

            }],
            "witness": [],
            "addwellness": 1,
            "isCOSEmp": -1,
            "COSEmployee": [],
            "Contractor": [],
            "Member": [],
            "child1": false,
            "child2": false,
            "child3": false,

          },
          "ButtonVisibility": "1",
          "child5": false,
          "child6": false,
          "child7": false,
        "isSeparatorVisible": true
        });

        this.getView().setModel(model, "localModel");


        var argument = oEvent.getParameters().arguments;
        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = argument;
        globalModel.setProperty("/keys", argument);
        const ID = argument.ID;
        const INCID = argument.INCID;
        // const selectedIncidentID = keys.ID;
        var url = this.getOwnerComponent().getModel().getServiceUrl();
        var oIconTab = this.getView().byId("icontabbar1");
        oIconTab.setSelectedKey("icon1");
        const localModel = this.getView().getModel("localModel");

        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();

        this.getView().byId("correctiveActionTable").getBinding("items").filter([new sap.ui.model.Filter("INCI_ID", "EQ", ID)])
        this.getView().byId("NotesTable").getBinding("items").filter([new sap.ui.model.Filter("INCI_ID", "EQ", ID)])
        this.getView().byId("FL1").getBinding("items").filter([new sap.ui.model.Filter("INCI_ID", "EQ", ID)])

        $.ajax({
          url: url + "/Incident(" + "ID=" + keys.ID + ",INCID=" + keys.INCID + ")",
          success: function (response) {
           // debugger
          }
        }),
          $.ajax({
            type: "GET",
            contentType: "application/json",

            url: serviceurl + "Incident" + '(ID=' + ID + ',INCID=' + INCID + ')?$expand=CosEquip,Witn,cos_emp,contract,public',
            success: function (response) {
              console.log("Success:", response);
              response.wascosvehused = parseInt(response.wascosvehused);
              response.wasIncOnCosloc = parseInt(response.wasIncOnCosloc);
              response.noncosvehinvol = parseInt(response.noncosvehinvol);
              response.isinvestreq = parseInt(response.isinvestreq);
              response.yearexppos = parseInt(response.yearexppos);
              response.shift = parseInt(response.shift);
              response.COSEmployee = response.cos_emp;
              response.COSEquipment = response.CosEquip;
              response.witness = response.Witn;
              response.Contractor = response.contract;
              response.Member = response.public;
              response.addwellness = parseInt(response.addmentalhealth);

              if (response.otherpeopinv !== undefined && response.otherpeopinv !== null && response.otherpeopinv !== '') {

                response.child1 = response.otherpeopinv.split(',')[0] === '1' ? true : false;
                response.child2 = response.otherpeopinv.split(',')[1] === '1' ? true : false;
                response.child3 = response.otherpeopinv.split(',')[2] === '1' ? true : false;
              }

              localModel.setProperty("/Payload1", response);
              // localModel.setData(response);
              //console.log(response.value);
              // debugger;
            },
          }),
          $.ajax({
            type: "GET",
            contentType: "application/json",
            // url: serviceurl + "Investigation" ,
            // url: serviceurl + "Investigation" +'?$filter=INCI_ID eq ' +'+ID+' ,
            url: serviceurl + "Investigation" + '?$filter=INCI_ID eq %27' + ID + '%27',
            success: function (response) {
              console.log("Success:", response);
            if (response.value.length > 0) {
              response.value[0].EmpRTW = parseInt(response.value[0].EmpRTW || -1);
              localModel.setProperty("/Payload", response.value[0]);
              defaultModel.refresh();
              // debugger;
            } else {
              localModel.setProperty("/Payload", {});
            }
            },
            error: function () { },
          }),
          $.ajax({
            type: "GET",
            contentType: "application/json",
            // url: serviceurl + "Investigation" ,
            // url: serviceurl + "Investigation" +'?$filter=INCI_ID eq ' +'+ID+' ,
            url: serviceurl + "EHSRef" + '?$filter=INCI_ID eq %27' + ID + '%27',
            success: function (response) {
              console.log("Success:", response);
              response.value[0].isaccomgttendays = parseInt(response.value[0].isaccomgttendays || -1);
              response.value[0].ReqAccom = parseInt(response.value[0].ReqAccom || -1);
              response.value[0].reasonforref = parseInt(response.value[0].reasonforref || -1);

              localModel.setProperty("/Payload2", response.value[0]);

              // debugger;
            },
            error: function () { },
          }),

          $.ajax({

            type: "GET",
            contentType: "application/json",
            // url: serviceurl + "Investigation" ,
            // url: serviceurl + "Investigation" +'?$filter=INCI_ID eq ' +'+ID+' ,
            url: serviceurl + "RTW" + '?$filter=INCI_ID eq %27' + ID + '%27',
            success: function (response) {
              console.log("Success:", response);

              localModel.setProperty("/Payload3", response.value[0]);

              // debugger;
            },
            error: function () { },
          }),
          $.ajax({
            type: "GET",
            contentType: "application/json",

            // url: serviceurl + "WCB" + '?$filter=INCI_ID eq %27' + ID + '%27',
            // url: serviceurl + "WCB" + '(ID=' + ID + ')?$expand=inj',
            // url: serviceurl + "WCB?$filter=INCI_ID eq '"+ ID +"'&$expand=inj",
            url: serviceurl + "WCB" + '?$filter=INCI_ID eq %27' + ID + '%27&$expand=inj',
            success: function (response) {
            if (response.value.length > 0) {
              response.value[0].Notimeloss = parseInt(response.value[0].Notimeloss || -1);
              localModel.setProperty("/Payload4", response.value[0] === undefined ? { inj: [] } : response.value[0]);
            } else {
              localModel.setProperty("/Payload4", {});
            }

            }
          })
      const EmpRTW = localModel.getProperty("/Payload/EmpRTW");
      if (EmpRTW !== -1) {
        var bShowTab = EmpRTW === 0;
        var oTab = this.byId("rtwid");
        console.log(oTab);
        oTab.setVisible(bShowTab);
        if (bShowTab) {
          const localModel = this.getView().getModel("localModel");
          localModel.setProperty("/isSeparatorVisible", true);
        } else {
          const localModel = this.getView().getModel("localModel");
          localModel.setProperty("/isSeparatorVisible", false);
        }

      }
      },

      //To update Incident
      onUpdateIncident: function (oEvent) {

        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = keys.INCID;
        const localModel = this.getView().getModel("localModel");

        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();

        const IncNo = localModel.getProperty("/Payload1/IncNo");
        const Title = localModel.getProperty("/Payload1/Title");
        const empname = localModel.getProperty("/Payload1/empname");
        const empid = localModel.getProperty("/Payload1/empid");
        const emppos = localModel.getProperty("/Payload1/emppos");
        const division = localModel.getProperty("/Payload1/division");
        const dept = localModel.getProperty("/Payload1/dept");
        const section = localModel.getProperty("/Payload1/section");
        const incDate = localModel.getProperty("/Payload1/incDate");
        const inctime = localModel.getProperty("/Payload1/inctime");
        const incDaterep = localModel.getProperty("/Payload1/incDaterep");
        const inctimerep = localModel.getProperty("/Payload1/inctimerep");
        const supid = localModel.getProperty("/Payload1/supid");
        const supname = localModel.getProperty("/Payload1/supname");
        const yearexppos = localModel.getProperty("/Payload1/yearexppos");
        const wasIncOnCosloc = localModel.getProperty("/Payload1/wasIncOnCosloc");
        const shift = localModel.getProperty("/Payload1/shift");
        const latitude = localModel.getProperty("/Payload1/latitude");
        const longitude = localModel.getProperty("/Payload1/longitude");
        const wascosvehused = localModel.getProperty("/Payload1/wascosvehused");
        const addmentalhealth = localModel.getProperty("/Payload1/addwellness");
        const busno = localModel.getProperty("/Payload1/busno");
        const noncosvehinvol = localModel.getProperty("/Payload1/noncosvehinvol");
        const policereportno = localModel.getProperty("/Payload1/policereportno");
        const incCategory = localModel.getProperty("/Payload1/incCategory");
        const incType = localModel.getProperty("/Payload1/incType");
        const eventtype = localModel.getProperty("/Payload1/eventtype");
        const actincseverity = localModel.getProperty("/Payload1/actincseverity");
        const potseverity = localModel.getProperty("/Payload1/potseverity");
        const isinvestreq = localModel.getProperty("/Payload1/isinvestreq");
        let otherpeopinv = localModel.getProperty("/Payload1/child1") === true ? '1' : '0';
        otherpeopinv += ',';
        otherpeopinv += localModel.getProperty("/Payload1/child2") === true ? '1' : '0';
        otherpeopinv += ',';
        otherpeopinv += localModel.getProperty("/Payload1/child3") === true ? '1' : '0';
        const incdesc = localModel.getProperty("/Payload1/incdesc");
        const isdraft = localModel.getProperty("/Payload1/isdraft");


        const COSEquipments = localModel.getProperty("/Payload1/COSEquipment");
        const witness = localModel.getProperty("/Payload1/witness");
        const COSEmployee = localModel.getProperty("/Payload1/COSEmployee");
        const Contractor = localModel.getProperty("/Payload1/Contractor");
        const Member = localModel.getProperty("/Payload1/Member");


        const date = new Date();
        var d = new Date(date),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;


        const payload = {
          INCID: localModel.getProperty('/Payload1/INCID'),
          IncNo: IncNo,
          Title: Title,
          empname: empname,
          empid: empid,
          emppos: emppos,
          division: division,
          dept: dept,
          section: section,
          incDate: incDate,
          inctime: inctime,
          incDaterep: incDaterep,
          inctimerep: inctimerep,
          supid: supid,
          supname: supname,
          yearexppos: parseInt(yearexppos, 10) || 0,
          wasIncOnCosloc: wasIncOnCosloc.toString(),
          shift: shift.toString(),
          latitude: latitude,
          longitude: longitude,
          wascosvehused: wascosvehused.toString(),
          addmentalhealth: addmentalhealth.toString(),
          busno: busno,
          noncosvehinvol: noncosvehinvol.toString(),
          policereportno: policereportno,
          incCategory: incCategory,
          incType: incType,
          eventtype: eventtype,
          actincseverity: actincseverity,
          potseverity: potseverity,
          isinvestreq: isinvestreq.toString(),
          otherpeopinv: otherpeopinv,
          incdesc: incdesc,
          isdraft: '0',
          CosEquip: COSEquipments.map((item) => {
            item.EquipNo = parseInt(item.EquipNo, 10);
            return item;
          }),
          Witn: witness,
          cos_emp: COSEmployee,
          contract: Contractor,
          public: Member
        };

        if (oEvent.oSource.mProperties.text === 'Submit') {

          payload.isdraft = "0";

        } else {

          payload.isdraft = "1";

        }

        payload.ID = localModel.getProperty('/Payload1/ID');



        $.ajax({
          type: "PUT",
          contentType: "application/json",
          //url: '/odata/v4/union-rep/Grievance('+payload.ID+')',
          url: serviceurl + 'Incident(ID=' + ID + ',INCID=' + INCID + ')',
          data: JSON.stringify(payload),
          success: function (response) {

            MessageBox.success("Incident " + IncNo + " Updated Successfully.");

          },
        });



      },

      onAddCOSEquip: function () {
        const localModel = this.getView().getModel("localModel");
        const COSEquipment = localModel.getProperty("/Payload1/COSEquipment");

        COSEquipment.push({
          EquipNo: ""
        });
        localModel.setProperty("/Payload1/COSEquipment", COSEquipment);
      },
      onDeleteCOS: function (oEvent) {
        const index = oEvent
          .getSource()
          .getBindingContext("localModel")
          .getPath()
          .slice(-1);

        const localModel = this.getView().getModel("localModel");
        const COSEquipment = localModel.getProperty("/Payload1/COSEquipment");

        if (COSEquipment.length > 1) {
          COSEquipment.splice(index, 1);
        }
        localModel.setProperty("/Payload1/COSEquipment", COSEquipment);

      },
      onAddWitness: function () {
        const localModel = this.getView().getModel("localModel");
        const witness = localModel.getProperty("/Payload1/witness");

        witness.push({
        });
        localModel.setProperty("/Payload1/witness", witness);
      },
      onDelete: function (oEvent) {
        const index = oEvent
          .getSource()
          .getBindingContext("localModel")
          .getPath()
          .slice(-1);

        const localModel = this.getView().getModel("localModel");
        const witness = localModel.getProperty("/Payload1/witness");

        witness.splice(index, 1);
        localModel.setProperty("/Payload1/witness", witness);
      },
      onAddCOSEmployee: function () {
        const localModel = this.getView().getModel("localModel");
        const COSEmployee = localModel.getProperty("/Payload1/COSEmployee");

        COSEmployee.push({

        });
        localModel.setProperty("/Payload1/COSEmployee", COSEmployee);
      },
      onDeleteCOSEmp: function (oEvent) {
        const index = oEvent
          .getSource()
          .getBindingContext("localModel")
          .getPath()
          .slice(-1);

        const localModel = this.getView().getModel("localModel");
        const COSEmployee = localModel.getProperty("/Payload1/COSEmployee");

        COSEmployee.splice(index, 1);
        localModel.setProperty("/Payload1/COSEmployee", COSEmployee);

      },
      onAddContractor: function () {
        const localModel = this.getView().getModel("localModel");
        const Contractor = localModel.getProperty("/Payload1/Contractor");

        Contractor.push({
        });
        localModel.setProperty("/Payload1/Contractor", Contractor);
      },
      onDeleteContarctor: function (oEvent) {
        const index = oEvent
          .getSource()
          .getBindingContext("localModel")
          .getPath()
          .slice(-1);

        const localModel = this.getView().getModel("localModel");
        const Contractor = localModel.getProperty("/Payload1/Contractor");

        Contractor.splice(index, 1);
        localModel.setProperty("/Payload1/Contractor", Contractor);

      },
      onAddMember: function () {
        const localModel = this.getView().getModel("localModel");
        const Member = localModel.getProperty("/Payload1/Member");

        Member.push({
        });
        localModel.setProperty("/Payload1/Member", Member);

      },
      onDeleteMember: function (oEvent) {
        const index = oEvent
          .getSource()
          .getBindingContext("localModel")
          .getPath()
          .slice(-1);

        const localModel = this.getView().getModel("localModel");
        const Member = localModel.getProperty("/Payload1/Member");

        Member.splice(index, 1);
        localModel.setProperty("/Payload1/Member", Member);
      },



      //Create/Update Investigation: 
      onSubmitInvestigation: function (oEvent) {
        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = parseInt(keys.INCID);
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();

      const IncNo = localModel.getProperty("/Payload1/IncNo");
      const payload = localModel.getProperty("/Payload");
      const InvStatus = localModel.getProperty("/Payload/InvstStatus");
      const WCBFLAG = localModel.getProperty("/Payload4/wcbflag");

      if (payload.ID !== undefined && payload.ID !== null && payload.ID !== "") {
        if (InvStatus === "31") {

          MessageBox.warning("Investigation for incident " + IncNo + " is already Completed.");
        } else {
          if (WCBFLAG !== '1') {
            MessageBox.warning("You cannot Complete Investigation before finalizing your review for WCB. Please finalize your Review to Complete Investigation.");

            localModel.refresh();
          } else {
            $.ajax({
              type: "PATCH",
              contentType: "application/json",
              url: serviceurl + 'Investigation(ID=' + payload.ID + ')',
              data: JSON.stringify({
                InvstStatus: "31"
              }),
              success: function (response, second) {

                MessageBox.information("Investigation for incident " + IncNo + " is Completed Succesfully");

                defaultModel.refresh();
              },
              error: function () { },
            });
            $.ajax({
              type: "PATCH",
              contentType: "application/json",
              url: serviceurl + 'Incident(ID=' + ID + ',INCID=' + INCID + ')',
              data: JSON.stringify({
                incStatus: "26"
              }),
              success: function (response, second) {



                defaultModel.refresh();
              },
              error: function () { },
            });
          }
        };
      } else {
        MessageBox.warning("Investigation is not yet for " + IncNo + " is not yet filled by Manager.");
      }
    },
    //Add New Fragment


      onDefaultDialogPress: function () {

        if (!this.__oMPDialog) {
          const localModel = this.getView().getModel("localModel");
          localModel.setProperty("/child5", true);
          localModel.setProperty("/child6", false);
          // localModel.setProperty("/ButtonVisibility", "1");
          this.__oMPDialog = sap.ui.xmlfragment("cosincidentportalhs.fragments.CorrectiveAction", this);
        }
        this.getView().addDependent(this.__oMPDialog);
        this.getView().getModel("localModel").setProperty("/CorrectAction", {});
        this.__oMPDialog.open();
      },

      //Submit New Record
      onFragSubmit: function (oEvent) {

        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = parseInt(keys.INCID);
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        const IncNo = localModel.getProperty("/Payload1/IncNo");
        const CorrectAction = localModel.getProperty("/CorrectAction");
        CorrectAction.INCI_ID = ID;
        CorrectAction.INCI_INCID = INCID;
        const that = this;

        $.ajax({
          type: "POST",
          contentType: "application/json",
          url: serviceurl + "CorrectAction",
          data: JSON.stringify(CorrectAction),
          success: function (response, second) {
            MessageBox.information("Corrective Action created for Incident  " + IncNo);
            defaultModel.refresh();
            that.onCancelFragment();
          },
          error: function () { },
        });
      },
      // },


      //On Edit Button Fragment - 1


      onDefaultDialogPressCA: function (oEvent) {

        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();


        localModel.setProperty("/child5", false);
        localModel.setProperty("/child6", true);
        var CAACTID = oEvent.getSource().getBindingContext().getObject().ID;


        if (!this.__oMPDialog) {
          this.__oMPDialog = sap.ui.xmlfragment("cosincidentportalhs.fragments.CorrectiveAction", this);
        }
        this.getView().addDependent(this.__oMPDialog);
        this.getView().getModel("localModel").setProperty("/CorrectAction", {});
        this.__oMPDialog.open();




        $.ajax({
          type: "GET",
          contentType: "application/json",
          url: serviceurl + "CorrectAction" + '?$filter=ID eq ' + CAACTID + '',

          success: function (response) {
            console.log("Success:", response);


            localModel.setProperty("/CorrectAction", response.value[0]);

            // debugger;
          },
          error: function () { },
        });
      },


      //Update New Record
      onFragUpdate: function (oEvent) {


        // var CAACTID = oEvent.getSource().getBindingContext().getObject().ID;
        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = keys.INCID;
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        const CAACTID = localModel.getProperty("/CorrectAction/ID");
        const CorrectAction = localModel.getProperty("/CorrectAction");
        const IncNo = localModel.getProperty("/Payload1/IncNo");
        // CorrectAction.INCI_ID = ID;
        // CorrectAction.INCI_INCID = INCID;
        const AssignTo = CorrectAction.AssignTo;
        const that = this;

        $.ajax({
          type: "PUT",
          contentType: "application/json",
          url: serviceurl + "CorrectAction" + '(ID=' + CAACTID + ')',
          data: JSON.stringify(CorrectAction),
          success: function (response, second) {
            MessageBox.information("Corrective Action for Incident  " + IncNo + "  Re-assignd to " + AssignTo + " Successfully.")

            that.onCancelFragment();
            defaultModel.refresh();

          },
          error: function () { },
        });
      },
      onCancelFragment: function () {

        this.__oMPDialog.close();
      },



      onDeleteCA: function (oEvent) {



        var CAACTID = oEvent.getSource().getBindingContext().getObject().ID;
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        const CorrectAction = localModel.getProperty("/CorrectAction");
        const IncNo = localModel.getProperty("/Payload1/IncNo");

        sap.m.MessageBox.confirm("Are you sure you want delete Corrective Action for Incident " + IncNo + " ?", {

          actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
          onClose: function (oAction) {
            if (oAction === sap.m.MessageBox.Action.OK) {

              $.ajax({
                type: "DELETE",
                contentType: "application/json",
                url: serviceurl + "CorrectAction" + '(ID=' + CAACTID + ')',
                data: JSON.stringify(CorrectAction),
                success: function (response, second) {
                  MessageBox.information("Corrective Action Incident " + IncNo + " deleted Successfully.");
                  defaultModel.refresh();
                },
                error: function () { },
              });

            }

          }


        })


      },


      // Fragment - 2
      onNotesDialogPress: function () {

        const localModel = this.getView().getModel("localModel");

        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        localModel.setProperty("/child5", true);
        localModel.setProperty("/child6", false);
        if (!this.oMPDialogNotes) {
          this.oMPDialogNotes = sap.ui.xmlfragment("cosincidentportalhs.fragments.Notes", this);
        }
        this.getView().addDependent(this.oMPDialogNotes);
        this.getView().getModel("localModel").setProperty("/Notes", {
          NotesReview: -1
        });
        this.oMPDialogNotes.open();
      },


      //Submit New Notes Record
      OnSubmitNotes: function (oEvent) {

        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = parseInt(keys.INCID);
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        const that = this;
        const Notes = localModel.getProperty("/Notes");
        const IncNo = localModel.getProperty("/Payload1/IncNo");
        Notes.INCI_ID = ID;
        Notes.INCI_INCID = INCID;
        Notes.NotesReview = Notes.NotesReview === -1 ? "" : Notes.NotesReview.toString();
        $.ajax({

          type: "POST",
          contentType: "application/json",
          url: serviceurl + "Notes",
          data: JSON.stringify(Notes),
          success: function (response, second) {
            MessageBox.information("Notes Created for Incident " + IncNo + " Succesfully.");
            defaultModel.refresh();
            that.OnCancelNotesFragment();
          },
          error: function () { },
        });
      },
      //On Edit Button Fragment


      onEditNotes: function (oEvent) {
        var NOTEID = oEvent.getSource().getBindingContext().getObject().ID;
        const localModel = this.getView().getModel("localModel");

        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        localModel.setProperty("/child5", false);
        localModel.setProperty("/child6", true);
        if (!this.oMPDialogNotes) {
          this.oMPDialogNotes = sap.ui.xmlfragment("cosincidentportalhs.fragments.Notes", this);
        }
        this.getView().addDependent(this.oMPDialogNotes);
        this.getView().getModel("localModel").setProperty("/Notes", {
          NotesReview: -1
        });
        this.oMPDialogNotes.open();



        $.ajax({
          type: "GET",
          contentType: "application/json",
          url: serviceurl + "Notes" + '?$filter=ID eq ' + NOTEID + '',

          success: function (response) {
            console.log("Success:", response);
            // debugger;
            response.value[0].NotesReview = parseInt(response.value[0].NotesReview || -1);
            localModel.setProperty("/Notes", response.value[0]);

            // debugger;
          },
          error: function () { },
        });
      },

      //Update New Record
      OnUpdateNotes: function (oEvent) {
        // var CAACTID = oEvent.getSource().getBindingContext().getObject().ID;
        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = keys.INCID;
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        const NOTEID = localModel.getProperty("/Notes/ID");
        const Notes = localModel.getProperty("/Notes");
        const IncNo = localModel.getProperty("/Payload1/IncNo");
        Notes.NotesReview = Notes.NotesReview === -1 ? "" : Notes.NotesReview.toString();
        // CorrectAction.INCI_ID = ID;
        // CorrectAction.INCI_INCID = INCID;

        const that = this;

        $.ajax({
          type: "PUT",
          contentType: "application/json",
          url: serviceurl + "Notes" + '(ID=' + NOTEID + ')',
          data: JSON.stringify(Notes),
          success: function (response, second) {
            MessageBox.information("Notes Updated for Incident " + IncNo+ " Succesfully.");
            defaultModel.refresh();
            that.OnCancelNotesFragment();
          },
          error: function () { },
        });
      },
      OnCancelNotesFragment: function () {

        this.oMPDialogNotes.close();
      },

      onDeleteNotes: function (oEvent) {
        var NOTEID = oEvent.getSource().getBindingContext().getObject().ID;
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        const Notes = localModel.getProperty("/Notes");
        const IncNo = localModel.getProperty("/Payload1/IncNo");
        sap.m.MessageBox.confirm("Are you sure you want delete Notes for Incident " + IncNo + " ?", {

          actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
          onClose: function (oAction) {
            if (oAction === sap.m.MessageBox.Action.OK) {
              $.ajax({
                type: "DELETE",
                contentType: "application/json",
                url: serviceurl + "Notes" + '(ID=' + NOTEID + ')',
                data: JSON.stringify(Notes),
                success: function (response, second) {
                  MessageBox.information("Notes for Incident " + IncNo + " deleted Succesfully  ");
                  defaultModel.refresh();
                },
                error: function () { },
              });
            }

          }


        })
      },
      onPressValuHelp: function (oEvent) {
        const text = oEvent.getParameters().selectedItem.getTitle();
        const textid = oEvent.getParameters().selectedItem.getDescription();
        this.getView()
          .getModel("localModel")
          .setProperty(this._inputPath, text);


      },
      handleValueHelp: function (oEvent) {
        var sInputValue = oEvent.getSource().getValue(),
          oView = this.getView();
        this._sInputId = oEvent.getSource().getId();

        this._inputPath = oEvent.getSource().getBindingInfo("value").parts[0].path;
        // debugger;
        if (!this._pValueHelpDialog) {
          this._pValueHelpDialog = Fragment.load({
            id: oView.getId(),
            name: "cosincidentportalhs.fragments.InvestigationBy",
            controller: this,
          }).then(function (oDialog) {
            oView.addDependent(oDialog);
            return oDialog;
          });
        }
        this._pValueHelpDialog.then(function (oDialog) {
          // Create a filter for the binding
          // Open ValueHelpDialog filtered by the input's value
          oDialog.open();
        });
      },


      // Fragment - 3
      onFollowUpDialogPress: function () {

        if (!this.oMPDialogFollow) {
          this.oMPDialogFollow = sap.ui.xmlfragment("cosincidentportalhs.fragments.FollowUp", this);
        }
        this.getView().addDependent(this.oMPDialogFollow);
        this.getView().getModel("localModel").setProperty("/FollowUp", {});
        this.oMPDialogFollow.open();
      },
      //Submit New Record
      OnSubmitFollowUp: function (oEvent) {

        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = parseInt(keys.INCID);
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        const that = this;
        const FollowUp = localModel.getProperty("/FollowUp");
        FollowUp.INCI_ID = ID;
        FollowUp.INCI_INCID = INCID;

        FollowUp.followupflg = "1";


        $.ajax({
          type: "POST",
          contentType: "application/json",
          url: serviceurl + "Followup",
          data: JSON.stringify(FollowUp),
          success: function (response, second) {
            MessageBox.information("FollowUp created with  " + response.ID);
            defaultModel.refresh();
            that.OnCancelFollowUpFragment();
          },
          error: function () { },
        });
      },

      OnUpdateFollowUp: function (oEvent) {
        var NOTEID = oEvent.getSource().getBindingContext().getObject().ID;


        if (!this.oMPDialogFollow) {
          this.oMPDialogFollow = sap.ui.xmlfragment("cosincidentportalhs.fragments.Notes", this);
        }
        this.getView().addDependent(this.oMPDialogFollow);
        this.getView().getModel("localModel").setProperty("/FollowUp", {});
        this.oMPDialogFollow.open();

        const localModel = this.getView().getModel("localModel");

        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();

        $.ajax({
          type: "GET",
          contentType: "application/json",
          url: serviceurl + "FollowUp" + '?$filter=ID eq ' + NOTEID + '',

          success: function (response) {
            console.log("Success:", response);
            localModel.setProperty("/FollowUp", response.value[0]);

            // debugger;
          },
          error: function () { },
        });
      },

      OnCancelFollowUpFragment: function () {

        this.oMPDialogFollow.close();
      },

      OncompleteFollowUp: function (oEvent) {



        var oTable = this.getView().byId("FL1");
        var oIconTab = this.getView().byId("icontabbar1");
        var selectedItem = this.getView().byId("FL1").getSelectedItem();

        // const F5 = this.byId("Multi8").setSelectedKey('');
        // this.getView().byId("FL1").getSelectedItem();
        if (!selectedItem) {
          sap.m.MessageBox.warning("Select an item");
          return;
        }

      const localModel = this.getView().getModel("localModel");
      const defaultModel = this.getView().getModel();
      const serviceurl = defaultModel.getServiceUrl();
      const IncNo = localModel.getProperty("/Payload1/IncNo");
      const FollowUp = localModel.getProperty("/FollowUp");

      if (FollowUp !== undefined && FollowUp !== '' && FollowUp !== null) {
        var FollowUpId = selectedItem.getBindingContext().getObject();
        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = parseInt(keys.INCID);
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        const IncNo = localModel.getProperty("/Payload1/IncNo");
        const FollowUp = localModel.getProperty("/FollowUp");
        FollowUp.INCI_ID = ID;
        FollowUp.INCI_INCID = INCID;

        // var msgbox = confirm("Are you sure you want to Mark follow up for " + IncNo + " as 'Complete'?");


        if (FollowUpId.followupstat === '28') {
          MessageBox.warning("Follow Up for Incident " + IncNo + " is already Completed.");
        } else {

          sap.m.MessageBox.confirm("Are you sure you want to Mark follow up for " + IncNo + " as 'Complete'?", {
            actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
            onClose: function (oAction) {
              if (oAction === sap.m.MessageBox.Action.OK) {
                $.ajax({
                  type: "PATCH",
                  contentType: "application/json",
                  // url: serviceurl + "Followup",
                  url: serviceurl + "Followup(" + FollowUpId.ID + ")",
                  data: JSON.stringify({
                    followupflg: "1",
                    followupstat: "28"
                  }),
                  success: function (response, second) {
                    MessageBox.success("Follow Up for Incident " + IncNo + " is Completed Succesfully.");
                    defaultModel.refresh();

                    oTable.removeSelections();

                  },
                  error: function () { },
                });
              }
            }
          })

        }
      } else {
        MessageBox.success("Follow Up for Incident " + IncNo + " is  .");
        }
      },
      onSubmitEHSRfrl: function (oEvent) {
        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = parseInt(keys.INCID);
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        const ReqAccom = localModel.getProperty("/ReqAccom");
        const isaccomgttendays = localModel.getProperty("/isaccomgttendays");
        // const reasonforref = localModel.getProperty("/reasonforref");
        const Other = localModel.getProperty("/Other");
        const IssueHistory = localModel.getProperty("/IssueHistory");
        // const reasonforref = oModel.getProperty("/child1") === true ? '1' : '0';

        // const radioGroup1 = this.getView().byId("radioGroup11");
        // const selectedIndex1 = radioGroup1.getSelectedIndex();
        // const selectedRadioButton1 = radioGroup1.getButtons()[selectedIndex1];
        // const selectedValue1 = selectedRadioButton1.getText();

        // const radioGroup2 = this.getView().byId("radioGroup12");
        // const selectedIndex2 = radioGroup2.getSelectedIndex();
        // const selectedRadioButton2 = radioGroup2.getButtons()[selectedIndex2];
        // const selectedValue2 = selectedRadioButton2.getText();

        const payload2 = localModel.getProperty("/Payload2");
        payload2.ReqAccom = payload2.ReqAccom === -1 ? "" : payload2.ReqAccom.toString();
        payload2.isaccomgttendays = payload2.isaccomgttendays === -1 ? "" : payload2.isaccomgttendays.toString();
        payload2.reasonforref = payload2.reasonforref === -1 ? "" : payload2.reasonforref.toString();


        payload2.INCI_INCID = INCID;
        payload2.INCI_ID = ID;

        if (payload2.ID !== undefined && payload2.ID !== null && payload2.ID !== "") {

          $.ajax({
            type: "PUT",
            contentType: "application/json",
            url: serviceurl + 'EHSRef(ID=' + payload2.ID + ')',
            data: JSON.stringify(payload2),
            success: function (response, second) {

              MessageBox.information("EHSRef Updated with  " + response.ID);
            },
            error: function () { },
          });

        } else {



          $.ajax({
            type: "POST",
            contentType: "application/json",
            url: serviceurl + "EHSRef",
            data: JSON.stringify(payload2),
            success: function (response, second) {

              MessageBox.information("EHSRef created with  " + response.ID);
            },
            error: function () { },
          })

        }
      },
      onSubmitRTW: function (oEvent) {
        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = parseInt(keys.INCID);
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();
        const stdate = localModel.getProperty("/stdate");
        const Antienddate = localModel.getProperty("/Antienddate");

        const AccoPosDept = localModel.getProperty("/AccoPosDept");
        const date = localModel.getProperty("/date");

        const payload3 = localModel.getProperty("/Payload3");

        payload3.INCI_INCID = INCID;
        payload3.INCI_ID = ID;

        if (payload3.ID !== undefined && payload3.ID !== null && payload3.ID !== "") {

          $.ajax({
            type: "PUT",
            contentType: "application/json",
            url: serviceurl + 'RTW(ID=' + payload3.ID + ')',
            data: JSON.stringify(payload3),
            success: function (response, second) {

              MessageBox.information("RTW Updated with  " + response.ID);
            },
            error: function () { },
          });

        } else {



          $.ajax({
            type: "POST",
            contentType: "application/json",
            url: serviceurl + "RTW",
            data: JSON.stringify(payload3),
            success: function (response, second) {

              MessageBox.information("RTW created with  " + response.ID);
            },
            error: function () { },
          })

        }
      },

      onPressStartDate: function () {
        MessageBox.information("Note: Make sure the date you are mentioning here will be consider as your Return to work Date");
      },
      onPressDate: function () {
        MessageBox.information("Note: Make sure the date you are selecting is today's date and will be consider as your request finalizing date");
      },

      onPressAnticipatedDate: function () {
        MessageBox.information("Note: In case of any emergency if you unable to return to work on mentioned date, then what will be your extended return to work date? ");
      },

      onSubmitwcb: function (oEvent) {

        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = keys.INCID;
        const localModel = this.getView().getModel("localModel");

        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();

        const injdate = localModel.getProperty("/Payload4/injdate");
        const WCBInjcat = localModel.getProperty("/Payload4/WCBInjcat");
        const WCBInjsubcat = localModel.getProperty("/Payload4/WCBInjsubcat");
        const InjDesc = localModel.getProperty("/Payload4/InjDesc");

        const Injstatus = localModel.getProperty("/Payload4/Injstatus");
        const Comments = localModel.getProperty("/Payload4/Comments");
        const Datereptosup = localModel.getProperty("/Payload4/Datereptosup");
        const Datereptohr = localModel.getProperty("/Payload4/Datereptohr");

        const Datereptowcb = localModel.getProperty("/Payload4/Datereptowcb");
        const firstdaylosttime = localModel.getProperty("/Payload4/firstdaylosttime");
        const Datertw = localModel.getProperty("/Payload4/Datertw");
        const claimstatus = localModel.getProperty("/Payload4/claimstatus");

        const whydenied = localModel.getProperty("/Payload4/whydenied");
        const Claimno = localModel.getProperty("/Payload4/Claimno");
        const letterrecwcb = localModel.getProperty("/Payload4/letterrecwcb");
        const Notimeloss = localModel.getProperty("/Payload4/Notimeloss");
        const Notes = localModel.getProperty("/Payload4/Notes");


        const inj = localModel.getProperty("/Payload4/inj");




        const payload = {

          injdate: injdate,
          WCBInjcat: WCBInjcat,
          WCBInjsubcat: WCBInjsubcat,
          InjDesc: InjDesc,
          Injstatus: Injstatus,
          Comments: Comments,
          Datereptosup: Datereptosup,
          Datereptohr: Datereptohr,
          Datereptowcb: Datereptowcb,
          firstdaylosttime: firstdaylosttime,
          Datertw: Datertw,
          claimstatus: claimstatus,
          whydenied: whydenied,
          Claimno: Claimno,
          letterrecwcb: letterrecwcb,
          // Notimeloss: Notimeloss.toString(),
          Notimeloss: Notimeloss.toString(),
          INCI_INCID: parseInt(INCID),
          INCI_ID: ID,

          Notes: Notes,
          inj: inj,

        };
        
        payload.ID = localModel.getProperty('/Payload4/ID');


        if (payload.ID !== undefined && payload.ID !== null && payload.ID !== "") {

          $.ajax({
            type: "PUT",
            contentType: "application/json",

            // url: serviceurl + 'WCB',
            url: serviceurl + 'WCB(ID=' + payload.ID + ')',
            data: JSON.stringify(payload),
            success: function (response) {

              MessageBox.success("WCB form " + response.ID + "  Submitted  Successfully.");

            },
          });



        } else {


          $.ajax({
            type: "POST",
            contentType: "application/json",

            url: serviceurl + 'WCB',
            data: JSON.stringify(payload),
            success: function (response) {

              MessageBox.success("WCB form " + response.ID + "  Submitted  Successfully.");

            },
          });

        }
      },
      onAddInjury: function () {
        const localModel = this.getView().getModel("localModel");
        const inj = localModel.getProperty("/Payload4/inj");

        inj.push({});
        localModel.setProperty("/Payload4/inj", inj);
      },

      onDeleteInjury: function (oEvent) {
        const index = oEvent
          .getSource()
          .getBindingContext("localModel")
          .getPath()
          .slice(-1);

        const localModel = this.getView().getModel("localModel");
        const inj = localModel.getProperty("/Payload4/inj");

        if (inj.length > 1) {
          inj.splice(index, 1);
        }
        localModel.setProperty("/Payload4/inj", inj);

      },



      onFinalReviewtwcb: function (oEvent) {



        var globalModel = this.getOwnerComponent().getModel("globalModel"),
          keys = globalModel.getProperty("/keys");
        const ID = keys.ID;
        const INCID = parseInt(keys.INCID);
        const localModel = this.getView().getModel("localModel");
        const defaultModel = this.getView().getModel();
        const serviceurl = defaultModel.getServiceUrl();

        const wcbflag = localModel.getProperty("/Payload4/wcbflag");
        const WCBID = localModel.getProperty("/Payload4/ID");
        const IncNo = localModel.getProperty("/Payload1/IncNo");

        if (wcbflag === '1') {
          MessageBox.warning("WCB form for  " + IncNo + " is already reviewed.");
        } else {

          if (WCBID !== undefined && WCBID !== null && WCBID !== "") {
            $.ajax({
              type: "PATCH",
              contentType: "application/json",
              // url: serviceurl + "Followup",
              url: serviceurl + "WCB(ID=" + WCBID + ")",
              data: JSON.stringify({
                wcbflag: "1",

              }),
              success: function (response, second) {
                MessageBox.success("Review for WCB form for " + IncNo + " is successfully completed.");
                defaultModel.refresh();

              },
              error: function () { },
            });
          } else {
            MessageBox.warning("WCB form for " + IncNo + " is not yet filled by Manager.");
          }
        }
      },
    OnselectIconTab: function (oEvent) {
      var globalModel = this.getOwnerComponent().getModel("globalModel"),
        keys = globalModel.getProperty("/keys");
      const ID = keys.ID;
      const INCID = parseInt(keys.INCID);
      const localModel = this.getView().getModel("localModel");
      const defaultModel = this.getView().getModel();
      const serviceurl = defaultModel.getServiceUrl();

      var oTabItem = oEvent.getParameter("item");
      var sTabKey = oTabItem.getKey();
      $.ajax({
        type: "GET",
        contentType: "application/json",
        url: serviceurl + "WCB" + '?$filter=INCI_ID eq %27' + ID + '%27&$expand=inj',
        success: function (response) {
          //debugger;
          response.value[0].Notimeloss = parseInt(response.value[0].Notimeloss || -1);
          localModel.setProperty("/Payload4", response.value[0] === undefined ? { inj: [] } : response.value[0]);

        }
      })
    }
    });
  });


