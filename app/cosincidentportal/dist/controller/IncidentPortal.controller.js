sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageBox","sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/core/Fragment","sap/m/Dialog"],function(e,t,o,n,a,i){"use strict";return e.extend("cosincidentportal.controller.IncidentPortal",{onInit:function(){const e=new n({Notes:{addedby:"",addedon:"",IncNotes:"",NotesType:-1,NotesReview:-1,INCI_ID:"",INCI_INCID:""},Payload:{InvestigationBy:"",DateInvest:"",EmpRTW:-1,InvStatDetails:"",INCI_ID:"",INCI_INCID:""},CorrectAction:{AssignTo:"",DueDate:"",CAStatus:"",Comments:""},FollowUp:{followcrdate:"",followupcrby:"",folloupduedate:"",followupstat:"",followupcrfor:"",followupnotes:"",compdate:"",followupflg:""},Payload2:{ReqAccom:-1,isaccomgttendays:-1,reasonforref:-1,Other:"",IssueHistory:"",INCI_ID:"",INCI_INCID:""},Payload3:{stdate:"",Antienddate:"",Union:"",AccoPosDept:"",date:"",INCI_ID:"",INCI_INCID:""},Payload4:{WCB:{},inj:[{primaryinj:"",bodypart:"",side:""}]},IncidentCategorys:[{CatId:"1",Cattext:"Injury/Illness"},{CatId:"2",Cattext:"Property /Equipment Damage"},{CatId:"3",Cattext:"Near Miss"},{CatId:"4",Cattext:"Dangerous Occurrence"},{CatId:"5",Cattext:"Environment"},{CatId:"6",Cattext:"Security"}],IncidentTypes:[{TypeId:"1",IncText:"Non-Occupational"},{TypeId:"2",IncText:"No Treatment"},{TypeId:"3",IncText:"First Aid"},{TypeId:"4",IncText:"Medical Consultation"},{TypeId:"5",IncText:"Medical Aid"},{TypeId:"6",IncText:"Modified Work"},{TypeId:"7",IncText:"Lost time Incident"},{TypeId:"8",IncText:"Psychological"},{TypeId:"9",IncText:"Fatality"}],TypeofEvents:[{eventId:"1",eventtext:"Corporate"},{eventId:"2",eventtext:"Private"},{eventId:"3",eventtext:"Charity"}],IncSevirity:[{SevId:"1",Sevtext:"Critical"},{SevId:"2",Sevtext:"Major"},{SevId:"3",Sevtext:"Minor"}],WCBInjuryCategory:[{InjCatID:"1",InjCatText:"Acute Injury"},{InjCatID:"2",InjCatText:"Chronic Injury"}],WCBInjurySubCategory:[{InjSubCatID:"1",InjSubCatText:"Fractures"},{InjSubCatID:"2",InjSubCatText:"Sprains"},{InjSubCatID:"3",InjSubCatText:"Spinal Cord Injury"},{InjSubCatID:"4",InjSubCatText:"Dislocation"}],WCBInjuryStatus:[{InjStatID:"1",InjStatText:"Active"},{InjStatID:"2",InjStatText:"Healing"},{InjStatID:"3",InjStatText:"Recovered"},{InjStatID:"4",InjStatText:"Recurrent"}],WCBClaimStatus:[{ClaimStatID:"1",ClaimStatText:"Sbumitted"},{ClaimStatID:"2",ClaimStatText:"Under Review"},{ClaimStatID:"3",ClaimStatText:"Pending"},{ClaimStatID:"4",ClaimStatText:"Rejected"}],InjureSide:[{InjureSideID:"1",InjureSideText:"Upper"},{InjureSideID:"2",InjureSideText:"Lower"},{InjureSideID:"3",InjureSideText:"Right"},{InjureSideID:"4",InjureSideText:"Left"}],InjuryType:[{InjuryTypeID:"1",InjuryTypeText:"Primary"},{InjuryTypeID:"2",InjuryTypeText:"Secondary"}],EmpSupNames:[{name:"Stephan Lie",id:"1001"},{name:"Fay Van Damme",id:"1002"},{name:"Brevin Dice",id:"1003"},{name:"Regina Oleveria",id:"1004"},{name:"John Mathew",id:"1005"},{name:"Jim Parker",id:"1006"},{name:"Sophia Ran",id:"1007"},{name:"Wendi Blake",id:"1008"},{name:"Lois Lane",id:"1009"},{name:"Mary Magdalene",id:"1010"},{name:"Simon Cyrene",id:"1011"}],Payload1:{incident:{},wasIncOnCosloc:-1,noncosvehinvol:-1,isinvestreq:-1,shift:-1,wascosvehused:-1,isdraft:false,maxDate:new Date,COSEmployee:{},COSEquipment:[{EquipNo:""}],witness:[],addwellness:1,isCOSEmp:-1,COSEmployee:[],Contractor:[],Member:[],child1:false,child2:false,child3:false},ButtonVisibility:"1",child5:false,child6:false,child7:false,isSeparatorVisible:true});this.getView().setModel(e,"localModel");const t=new n(e.getData());this.getView().setModel(t,"oMasterData");var o=sap.ui.core.UIComponent.getRouterFor(this);o.getRoute("RouteIncidentPortal").attachMatched(this._onObjectMatched,this)},_onObjectMatched:function(e){const t=new n({Notes:{addedby:"",addedon:"",IncNotes:"",NotesType:-1,NotesReview:-1,INCI_ID:"",INCI_INCID:""},Payload:{InvestigationBy:"",DateInvest:"",EmpRTW:-1,InvStatDetails:"",INCI_ID:"",INCI_INCID:""},CorrectAction:{AssignTo:"",DueDate:"",CAStatus:"",Comments:""},FollowUp:{followcrdate:"",followupcrby:"",folloupduedate:"",followupstat:"",followupcrfor:"",followupnotes:"",compdate:"",followupflg:""},Payload2:{ReqAccom:-1,isaccomgttendays:-1,reasonforref:-1,Other:"",IssueHistory:"",INCI_ID:"",INCI_INCID:""},Payload3:{stdate:"",Antienddate:"",Union:"",AccoPosDept:"",date:"",INCI_ID:"",INCI_INCID:""},Payload4:{WCB:{},inj:[{primaryinj:"",bodypart:"",side:""}]},IncidentCategorys:[{CatId:"1",Cattext:"Injury/Illness"},{CatId:"2",Cattext:"Property /Equipment Damage"},{CatId:"3",Cattext:"Near Miss"},{CatId:"4",Cattext:"Dangerous Occurrence"},{CatId:"5",Cattext:"Environment"},{CatId:"6",Cattext:"Security"}],IncidentTypes:[{TypeId:"1",IncText:"Non-Occupational"},{TypeId:"2",IncText:"No Treatment"},{TypeId:"3",IncText:"First Aid"},{TypeId:"4",IncText:"Medical Consultation"},{TypeId:"5",IncText:"Medical Aid"},{TypeId:"6",IncText:"Modified Work"},{TypeId:"7",IncText:"Lost time Incident"},{TypeId:"8",IncText:"Psychological"},{TypeId:"9",IncText:"Fatality"}],TypeofEvents:[{eventId:"1",eventtext:"Corporate"},{eventId:"2",eventtext:"Private"},{eventId:"3",eventtext:"Charity"}],IncSevirity:[{SevId:"1",Sevtext:"Critical"},{SevId:"2",Sevtext:"Major"},{SevId:"3",Sevtext:"Minor"}],WCBInjuryCategory:[{InjCatID:"1",InjCatText:"Acute Injury"},{InjCatID:"2",InjCatText:"Chronic Injury"}],WCBInjurySubCategory:[{InjSubCatID:"1",InjSubCatText:"Fractures"},{InjSubCatID:"2",InjSubCatText:"Sprains"},{InjSubCatID:"3",InjSubCatText:"Spinal Cord Injury"},{InjSubCatID:"4",InjSubCatText:"Dislocation"}],WCBInjuryStatus:[{InjStatID:"1",InjStatText:"Active"},{InjStatID:"2",InjStatText:"Healing"},{InjStatID:"3",InjStatText:"Recovered"},{InjStatID:"4",InjStatText:"Recurrent"}],WCBClaimStatus:[{ClaimStatID:"1",ClaimStatText:"Sbumitted"},{ClaimStatID:"2",ClaimStatText:"Under Review"},{ClaimStatID:"3",ClaimStatText:"Pending"},{ClaimStatID:"4",ClaimStatText:"Rejected"}],InjureSide:[{InjureSideID:"1",InjureSideText:"Upper"},{InjureSideID:"2",InjureSideText:"Lower"},{InjureSideID:"3",InjureSideText:"Right"},{InjureSideID:"4",InjureSideText:"Left"}],InjuryType:[{InjuryTypeID:"1",InjuryTypeText:"Primary"},{InjuryTypeID:"2",InjuryTypeText:"Secondary"}],EmpSupNames:[{name:"Stephan Lie",id:"1001"},{name:"Fay Van Damme",id:"1002"},{name:"Brevin Dice",id:"1003"},{name:"Regina Oleveria",id:"1004"},{name:"John Mathew",id:"1005"},{name:"Jim Parker",id:"1006"},{name:"Sophia Ran",id:"1007"},{name:"Wendi Blake",id:"1008"},{name:"Lois Lane",id:"1009"},{name:"Mary Magdalene",id:"1010"},{name:"Simon Cyrene",id:"1011"}],Payload1:{incident:{},wasIncOnCosloc:-1,noncosvehinvol:-1,isinvestreq:-1,shift:-1,wascosvehused:-1,isdraft:false,maxDate:new Date,COSEmployee:{},COSEquipment:[{EquipNo:""}],witness:[],addwellness:1,isCOSEmp:-1,COSEmployee:[],Contractor:[],Member:[],child1:false,child2:false,child3:false},ButtonVisibility:"1",child5:false,child6:false,child7:false,isSeparatorVisible:true});this.getView().setModel(t,"localModel");var o=e.getParameters().arguments;var a=this.getOwnerComponent().getModel("globalModel"),i=o;a.setProperty("/keys",o);const s=o.ID;const r=o.INCID;var c=this.getOwnerComponent().getModel().getServiceUrl();var l=this.getView().byId("icontabbar1");l.setSelectedKey("icon1");const d=this.getView().getModel("localModel");d.setProperty("/isSeparatorVisible",false);const p=this.getView().getModel();const g=p.getServiceUrl();this.getView().byId("correctiveActionTable").getBinding("items").filter([new sap.ui.model.Filter("INCI_ID","EQ",s)]);this.getView().byId("NotesTable").getBinding("items").filter([new sap.ui.model.Filter("INCI_ID","EQ",s)]);this.getView().byId("FL1").getBinding("items").filter([new sap.ui.model.Filter("INCI_ID","EQ",s)]);var I=this;$.ajax({url:c+"/Incident("+"ID="+i.ID+",INCID="+i.INCID+")",success:function(e){}}),$.ajax({type:"GET",contentType:"application/json",url:g+"Incident"+"(ID="+s+",INCID="+r+")?$expand=CosEquip,Witn,cos_emp,contract,public",success:function(e){console.log("Success:",e);e.wascosvehused=parseInt(e.wascosvehused);e.wasIncOnCosloc=parseInt(e.wasIncOnCosloc);e.noncosvehinvol=parseInt(e.noncosvehinvol);e.isinvestreq=parseInt(e.isinvestreq);e.yearexppos=parseInt(e.yearexppos);e.shift=parseInt(e.shift);e.COSEmployee=e.cos_emp;e.COSEquipment=e.CosEquip;e.witness=e.Witn;e.Contractor=e.contract;e.Member=e.public;e.addwellness=parseInt(e.addmentalhealth);if(e.otherpeopinv!==undefined&&e.otherpeopinv!==null&&e.otherpeopinv!==""){e.child1=e.otherpeopinv.split(",")[0]==="1"?true:false;e.child2=e.otherpeopinv.split(",")[1]==="1"?true:false;e.child3=e.otherpeopinv.split(",")[2]==="1"?true:false}d.setProperty("/Payload1",e)}}),$.ajax({type:"GET",contentType:"application/json",url:g+"Investigation"+"?$filter=INCI_ID eq %27"+s+"%27",success:function(e){if(e.value.length>0){e.value[0].EmpRTW=parseInt(e.value[0].EmpRTW||-1,10);d.setProperty("/Payload",e.value[0]);p.refresh()}else{d.setProperty("/Payload",{EmpRTW:-1})}},error:function(){}});$.ajax({type:"GET",contentType:"application/json",url:g+"EHSRef"+"?$filter=INCI_ID eq %27"+s+"%27",success:function(e){console.log("Success:",e);if(e.value.length){e.value[0].isaccomgttendays=parseInt(e.value[0].isaccomgttendays||-1);e.value[0].ReqAccom=parseInt(e.value[0].ReqAccom||-1);e.value[0].reasonforref=parseInt(e.value[0].reasonforref||-1);d.setProperty("/Payload2",e.value[0])}},error:function(){}}),$.ajax({type:"GET",contentType:"application/json",url:g+"RTW"+"?$filter=INCI_ID eq %27"+s+"%27",success:function(e){console.log("Success:",e);d.setProperty("/Payload3",e.value[0]||{})},error:function(){}}),$.ajax({type:"GET",contentType:"application/json",url:g+"WCB"+"?$filter=INCI_ID eq %27"+s+"%27&$expand=inj",success:function(e){if(e.value.length){e.value[0].Notimeloss=parseInt(e.value[0].Notimeloss||-1);d.setProperty("/Payload4",e.value[0]===undefined?{inj:[]}:e.value[0])}else{d.setProperty("/Payload4",{Notimeloss:-1,inj:[]})}}})},onUpdateIncident:function(e){var o=this.getOwnerComponent().getModel("globalModel"),n=o.getProperty("/keys");const a=n.ID;const i=n.INCID;const s=this.getView().getModel("localModel");const r=this.getView().getModel();const c=r.getServiceUrl();const l=s.getProperty("/Payload1/IncNo");const d=s.getProperty("/Payload1/Title");const p=s.getProperty("/Payload1/empname");const g=s.getProperty("/Payload1/empemail");const I=s.getProperty("/Payload1/empid");const y=s.getProperty("/Payload1/emppos");const u=s.getProperty("/Payload1/division");const P=s.getProperty("/Payload1/dept");const f=s.getProperty("/Payload1/section");const C=s.getProperty("/Payload1/incDate");const m=s.getProperty("/Payload1/inctime");const h=s.getProperty("/Payload1/incDaterep");const D=s.getProperty("/Payload1/inctimerep");const S=s.getProperty("/Payload1/supid");const M=s.getProperty("/Payload1/supname");const w=s.getProperty("/Payload1/yearexppos");const v=s.getProperty("/Payload1/wasIncOnCosloc");const N=s.getProperty("/Payload1/shift");const T=s.getProperty("/Payload1/latitude");const j=s.getProperty("/Payload1/longitude");const x=s.getProperty("/Payload1/wascosvehused");const O=s.getProperty("/Payload1/addwellness");const b=s.getProperty("/Payload1/busno");const V=s.getProperty("/Payload1/noncosvehinvol");const E=s.getProperty("/Payload1/policereportno");const A=s.getProperty("/Payload1/incCategory");const _=s.getProperty("/Payload1/incType");const R=s.getProperty("/Payload1/eventtype");const U=s.getProperty("/Payload1/actincseverity");const B=s.getProperty("/Payload1/potseverity");const F=s.getProperty("/Payload1/isinvestreq");let W=s.getProperty("/Payload1/child1")===true?"1":"0";W+=",";W+=s.getProperty("/Payload1/child2")===true?"1":"0";W+=",";W+=s.getProperty("/Payload1/child3")===true?"1":"0";const q=s.getProperty("/Payload1/incdesc");const k=s.getProperty("/Payload1/isdraft");const J=s.getProperty("/Payload1/incStatus");const H=s.getProperty("/Payload1/COSEquipment");const L=s.getProperty("/Payload1/witness");const G=s.getProperty("/Payload1/COSEmployee");const K=s.getProperty("/Payload1/Contractor");const Q=s.getProperty("/Payload1/Member");const z=new Date;var Y=new Date(z),X=""+(Y.getMonth()+1),Z=""+Y.getDate(),ee=Y.getFullYear();if(X.length<2)X="0"+X;if(Z.length<2)Z="0"+Z;const te={INCID:s.getProperty("/Payload1/INCID"),incStatus:J,IncNo:l,Title:d,empname:p,empemail:g,empid:I,emppos:y,division:u,dept:P,section:f,incDate:C,inctime:m,incDaterep:h,inctimerep:D,supid:S,supname:M,yearexppos:parseInt(w,10)||0,wasIncOnCosloc:v.toString(),shift:N.toString(),latitude:T,longitude:j,wascosvehused:x.toString(),addmentalhealth:O.toString(),busno:b,noncosvehinvol:V.toString(),policereportno:E,incCategory:A,incType:_,eventtype:R,actincseverity:U,potseverity:B,isinvestreq:F.toString(),otherpeopinv:W,incdesc:q,isdraft:"0",CosEquip:H.map(e=>{e.EquipNo=parseInt(e.EquipNo,10);return e}),Witn:L,cos_emp:G,contract:K,public:Q};te.ID=s.getProperty("/Payload1/ID");$.ajax({type:"PUT",contentType:"application/json",url:c+"Incident(ID="+a+",INCID="+i+")",data:JSON.stringify(te),success:function(e){t.success("Incident "+l+" Updated Successfully.")}})},onAddCOSEquip:function(){const e=this.getView().getModel("localModel");const t=e.getProperty("/Payload1/COSEquipment");t.push({EquipNo:""});e.setProperty("/Payload1/COSEquipment",t)},onDeleteCOS:function(e){const t=e.getSource().getBindingContext("localModel").getPath().slice(-1);const o=this.getView().getModel("localModel");const n=o.getProperty("/Payload1/COSEquipment");if(n.length>1){n.splice(t,1)}o.setProperty("/Payload1/COSEquipment",n)},onAddWitness:function(){const e=this.getView().getModel("localModel");const t=e.getProperty("/Payload1/witness");t.push({});e.setProperty("/Payload1/witness",t)},onDelete:function(e){const t=e.getSource().getBindingContext("localModel").getPath().slice(-1);const o=this.getView().getModel("localModel");const n=o.getProperty("/Payload1/witness");n.splice(t,1);o.setProperty("/Payload1/witness",n)},onAddCOSEmployee:function(){const e=this.getView().getModel("localModel");const t=e.getProperty("/Payload1/COSEmployee");t.push({});e.setProperty("/Payload1/COSEmployee",t)},onDeleteCOSEmp:function(e){const t=e.getSource().getBindingContext("localModel").getPath().slice(-1);const o=this.getView().getModel("localModel");const n=o.getProperty("/Payload1/COSEmployee");n.splice(t,1);o.setProperty("/Payload1/COSEmployee",n)},onAddContractor:function(){const e=this.getView().getModel("localModel");const t=e.getProperty("/Payload1/Contractor");t.push({});e.setProperty("/Payload1/Contractor",t)},onDeleteContarctor:function(e){const t=e.getSource().getBindingContext("localModel").getPath().slice(-1);const o=this.getView().getModel("localModel");const n=o.getProperty("/Payload1/Contractor");n.splice(t,1);o.setProperty("/Payload1/Contractor",n)},onAddMember:function(){const e=this.getView().getModel("localModel");const t=e.getProperty("/Payload1/Member");t.push({});e.setProperty("/Payload1/Member",t)},onDeleteMember:function(e){const t=e.getSource().getBindingContext("localModel").getPath().slice(-1);const o=this.getView().getModel("localModel");const n=o.getProperty("/Payload1/Member");n.splice(t,1);o.setProperty("/Payload1/Member",n)},onSubmitInvestigation:function(e){var o=this.getOwnerComponent().getModel("globalModel"),n=o.getProperty("/keys");const a=n.ID;const i=parseInt(n.INCID);const s=this.getView().getModel("localModel");const r=this.getView().getModel();const c=r.getServiceUrl();const l=s.getProperty("/DateInvest");const d=s.getProperty("/InvestigationBy");const p=s.getProperty("/EmpRTW");const g=s.getProperty("/InvStatDetails");const I=s.getProperty("/Payload1/IncNo");const y=this.getView().byId("radioGroup9");const u=y.getSelectedIndex();const P=y.getButtons()[u];const f=P.getText();const C=s.getProperty("/Payload");C.EmpRTW=C.EmpRTW.toString();C.INCI_INCID=i;C.INCI_ID=a;C.InvstStatus="30";if(C.ID!==undefined&&C.ID!==null&&C.ID!==""){$.ajax({type:"PUT",contentType:"application/json",url:c+"Investigation(ID="+C.ID+")",data:JSON.stringify(C),success:function(e,o){t.information("Investigation for incident "+I+" Updated Succesfully");r.refresh()},error:function(){}})}else{$.ajax({type:"POST",contentType:"application/json",url:c+"Investigation",data:JSON.stringify(C),success:function(e,o){e.EmpRTW=parseInt(e.EmpRTW||-1);s.setProperty("/Payload",e);t.information("Investigation created for Incident  "+I);r.refresh()},error:function(){}});$.ajax({type:"PATCH",contentType:"application/json",url:c+"Incident(ID="+a+",INCID="+i+")",data:JSON.stringify({incStatus:"24"}),success:function(e,t){r.refresh()},error:function(){}})}},onDefaultDialogPress:function(){if(!this.__oMPDialog){const e=this.getView().getModel("localModel");e.setProperty("/child5",true);e.setProperty("/child6",false);this.__oMPDialog=sap.ui.xmlfragment("cosincidentportal.fragments.CorrectiveAction",this)}this.getView().addDependent(this.__oMPDialog);this.getView().getModel("localModel").setProperty("/CorrectAction",{});this.__oMPDialog.open()},onFragSubmit:function(e){var o=this.getOwnerComponent().getModel("globalModel"),n=o.getProperty("/keys");const a=n.ID;const i=parseInt(n.INCID);const s=this.getView().getModel("localModel");const r=this.getView().getModel();const c=r.getServiceUrl();const l=s.getProperty("/Payload1/IncNo");const d=s.getProperty("/CorrectAction");d.INCI_ID=a;d.INCI_INCID=i;d.CAStatus="25";const p=this;$.ajax({type:"POST",contentType:"application/json",url:c+"CorrectAction",data:JSON.stringify(d),success:function(e,o){t.information("Corrective Action created for Incident  "+l);r.refresh();p.onCancelFragment()},error:function(){}})},onDefaultDialogPressCA:function(e){const t=this.getView().getModel("localModel");const o=this.getView().getModel();const n=o.getServiceUrl();t.setProperty("/child5",false);t.setProperty("/child6",true);var a=e.getSource().getBindingContext().getObject().ID;if(!this.__oMPDialog){this.__oMPDialog=sap.ui.xmlfragment("cosincidentportal.fragments.CorrectiveAction",this)}this.getView().addDependent(this.__oMPDialog);this.getView().getModel("localModel").setProperty("/CorrectAction",{});this.__oMPDialog.open();$.ajax({type:"GET",contentType:"application/json",url:n+"CorrectAction"+"?$filter=ID eq "+a+"",success:function(e){console.log("Success:",e);t.setProperty("/CorrectAction",e.value[0])},error:function(){}})},onFragUpdate:function(e){var o=this.getOwnerComponent().getModel("globalModel"),n=o.getProperty("/keys");const a=n.ID;const i=n.INCID;const s=this.getView().getModel("localModel");const r=this.getView().getModel();const c=r.getServiceUrl();const l=s.getProperty("/CorrectAction/ID");const d=s.getProperty("/CorrectAction");const p=s.getProperty("/Payload1/IncNo");const g=this;$.ajax({type:"PUT",contentType:"application/json",url:c+"CorrectAction"+"(ID="+l+")",data:JSON.stringify(d),success:function(e,o){t.information("Corrective Action for Incident  "+p+" updated Successfully.");g.onCancelFragment();r.refresh()},error:function(){}})},onCancelFragment:function(){this.__oMPDialog.close()},onDeleteCA:function(e){var o=e.getSource().getBindingContext().getObject().ID;const n=this.getView().getModel("localModel");const a=this.getView().getModel();const i=a.getServiceUrl();const s=n.getProperty("/CorrectAction");const r=n.getProperty("/Payload1/IncNo");sap.m.MessageBox.confirm("Are you sure you want delete Corrective Action for Incident "+r+" ?",{actions:[sap.m.MessageBox.Action.OK,sap.m.MessageBox.Action.CANCEL],onClose:function(e){if(e===sap.m.MessageBox.Action.OK){$.ajax({type:"DELETE",contentType:"application/json",url:i+"CorrectAction"+"(ID="+o+")",data:JSON.stringify(s),success:function(e,o){t.information("Corrective Action Incident "+r+" deleted Successfully.");a.refresh()},error:function(){}})}}})},onNotesDialogPress:function(){const e=this.getView().getModel("localModel");const t=this.getView().getModel();const o=t.getServiceUrl();e.setProperty("/child5",true);e.setProperty("/child6",false);if(!this.oMPDialogNotes){this.oMPDialogNotes=sap.ui.xmlfragment("cosincidentportal.fragments.Notes",this)}this.getView().addDependent(this.oMPDialogNotes);this.getView().getModel("localModel").setProperty("/Notes",{NotesReview:-1});this.oMPDialogNotes.open()},OnSubmitNotes:function(e){var o=this.getOwnerComponent().getModel("globalModel"),n=o.getProperty("/keys");const a=n.ID;const i=parseInt(n.INCID);const s=this.getView().getModel("localModel");const r=this.getView().getModel();const c=r.getServiceUrl();const l=this;const d=s.getProperty("/Notes");const p=s.getProperty("/Payload1/IncNo");d.INCI_ID=a;d.INCI_INCID=i;d.NotesReview=d.NotesReview===-1?"":d.NotesReview.toString();$.ajax({type:"POST",contentType:"application/json",url:c+"Notes",data:JSON.stringify(d),success:function(e,o){t.information("Notes created for Incident "+p);r.refresh();l.OnCancelNotesFragment()},error:function(){}})},onEditNotes:function(e){var t=e.getSource().getBindingContext().getObject().ID;const o=this.getView().getModel("localModel");const n=this.getView().getModel();const a=n.getServiceUrl();o.setProperty("/child5",false);o.setProperty("/child6",true);if(!this.oMPDialogNotes){this.oMPDialogNotes=sap.ui.xmlfragment("cosincidentportal.fragments.Notes",this)}this.getView().addDependent(this.oMPDialogNotes);this.getView().getModel("localModel").setProperty("/Notes",{NotesReview:-1});this.oMPDialogNotes.open();$.ajax({type:"GET",contentType:"application/json",url:a+"Notes"+"?$filter=ID eq "+t+"",success:function(e){console.log("Success:",e);e.value[0].NotesReview=parseInt(e.value[0].NotesReview||-1);o.setProperty("/Notes",e.value[0])},error:function(){}})},OnUpdateNotes:function(e){var o=this.getOwnerComponent().getModel("globalModel"),n=o.getProperty("/keys");const a=n.ID;const i=n.INCID;const s=this.getView().getModel("localModel");const r=this.getView().getModel();const c=r.getServiceUrl();const l=s.getProperty("/Payload1/IncNo");const d=s.getProperty("/Notes/ID");const p=s.getProperty("/Notes");p.NotesReview=p.NotesReview===-1?"":p.NotesReview.toString();const g=this;$.ajax({type:"PUT",contentType:"application/json",url:c+"Notes"+"(ID="+d+")",data:JSON.stringify(p),success:function(e,o){t.information("Notes Updated for Incident "+l);r.refresh();g.OnCancelNotesFragment()},error:function(){}})},OnCancelNotesFragment:function(){this.oMPDialogNotes.close()},onDeleteNotes:function(e){var o=e.getSource().getBindingContext().getObject().ID;const n=this.getView().getModel("localModel");const a=this.getView().getModel();const i=a.getServiceUrl();const s=n.getProperty("/Notes");const r=n.getProperty("/Payload1/IncNo");sap.m.MessageBox.confirm("Are you sure you want delete Notes for Incident "+r+" ?",{actions:[sap.m.MessageBox.Action.OK,sap.m.MessageBox.Action.CANCEL],onClose:function(e){if(e===sap.m.MessageBox.Action.OK){$.ajax({type:"DELETE",contentType:"application/json",url:i+"Notes"+"(ID="+o+")",data:JSON.stringify(s),success:function(e,o){t.information("Notes for Incident "+r+" deleted Succesfully  ");a.refresh()},error:function(){}})}}})},onPressValuHelp:function(e){const t=e.getParameters().selectedItem.getTitle();const o=e.getParameters().selectedItem.getDescription();this.getView().getModel("localModel").setProperty(this._inputPath,t)},handleValueHelp:function(e){var t=e.getSource().getValue(),o=this.getView();this._sInputId=e.getSource().getId();this._inputPath=e.getSource().getBindingInfo("value").parts[0].path;if(!this._pValueHelpDialog){this._pValueHelpDialog=a.load({id:o.getId(),name:"cosincidentportal.fragments.InvestigationBy",controller:this}).then(function(e){o.addDependent(e);return e})}this._pValueHelpDialog.then(function(e){e.open()})},onFollowUpDialogPress:function(){if(!this.oMPDialogFollow){this.oMPDialogFollow=sap.ui.xmlfragment("cosincidentportal.fragments.FollowUp",this)}this.getView().addDependent(this.oMPDialogFollow);this.getView().getModel("localModel").setProperty("/FollowUp",{});this.oMPDialogFollow.open()},OnSubmitFollowUp:function(e){var o=this.getOwnerComponent().getModel("globalModel"),n=o.getProperty("/keys");const a=n.ID;const i=parseInt(n.INCID);const s=this.getView().getModel("localModel");const r=this.getView().getModel();const c=r.getServiceUrl();const l=s.getProperty("/Payload1/IncNo");const d=this;const p=s.getProperty("/FollowUp");p.INCI_ID=a;p.INCI_INCID=i;p.followupstat="27";p.followupflg="1";$.ajax({type:"POST",contentType:"application/json",url:c+"Followup",data:JSON.stringify(p),success:function(e,o){t.information("FollowUp Created for Incident "+l);r.refresh();d.OnCancelFollowUpFragment()},error:function(){}})},OnUpdateFollowUp:function(e){var t=e.getSource().getBindingContext().getObject().ID;if(!this.oMPDialogFollow){this.oMPDialogFollow=sap.ui.xmlfragment("cosincidentportal.fragments.Notes",this)}this.getView().addDependent(this.oMPDialogFollow);this.getView().getModel("localModel").setProperty("/FollowUp",{});this.oMPDialogFollow.open();const o=this.getView().getModel("localModel");const n=this.getView().getModel();const a=n.getServiceUrl();$.ajax({type:"GET",contentType:"application/json",url:a+"FollowUp"+"?$filter=ID eq "+t+"",success:function(e){console.log("Success:",e);o.setProperty("/FollowUp",e.value[0])},error:function(){}})},OnCancelFollowUpFragment:function(){this.oMPDialogFollow.close()},OncompleteFollowUp:function(e){var o=this.getView().byId("FL1").getSelectedItem();if(!o){sap.m.MessageBox.warning("Select an item");return}var n=o.getBindingContext().getObject();var a=this.getOwnerComponent().getModel("globalModel"),i=a.getProperty("/keys");const s=i.ID;const r=parseInt(i.INCID);const c=this.getView().getModel("localModel");const l=this.getView().getModel();const d=l.getServiceUrl();const p=c.getProperty("/FollowUp");p.INCI_ID=s;p.INCI_INCID=r;p.followupflg="1";$.ajax({type:"PATCH",contentType:"application/json",url:d+"Followup("+n.ID+")",data:JSON.stringify({followupflg:"1"}),success:function(e,o){t.information("FollowUp created with  "+e.ID)},error:function(){}})},onSubmitEHSRfrl:function(e){var o=this.getOwnerComponent().getModel("globalModel"),n=o.getProperty("/keys");const a=n.ID;const i=parseInt(n.INCID);const s=this.getView().getModel("localModel");const r=this.getView().getModel();const c=r.getServiceUrl();const l=s.getProperty("/ReqAccom");const d=s.getProperty("/isaccomgttendays");const p=s.getProperty("/Other");const g=s.getProperty("/IssueHistory");const I=s.getProperty("/Payload1/IncNo");const y=s.getProperty("/Payload2");y.ReqAccom=y.ReqAccom===-1?"":y.ReqAccom.toString();y.isaccomgttendays=y.isaccomgttendays===-1?"":y.isaccomgttendays.toString();y.reasonforref=y.reasonforref===-1?"":y.reasonforref.toString();y.INCI_INCID=i;y.INCI_ID=a;if(y.ID!==undefined&&y.ID!==null&&y.ID!==""){$.ajax({type:"PUT",contentType:"application/json",url:c+"EHSRef(ID="+y.ID+")",data:JSON.stringify(y),success:function(e,o){t.information("EHSRef Updated for Incident  "+I)},error:function(){}})}else{$.ajax({type:"POST",contentType:"application/json",url:c+"EHSRef",data:JSON.stringify(y),success:function(e,o){t.information("EHSRef Created for Incident  "+I)},error:function(){}})}},onSubmitRTW:function(e){var o=this.getOwnerComponent().getModel("globalModel"),n=o.getProperty("/keys");const a=n.ID;const i=parseInt(n.INCID);const s=this.getView().getModel("localModel");const r=this.getView().getModel();const c=r.getServiceUrl();const l=s.getProperty("/stdate");const d=s.getProperty("/Antienddate");const p=s.getProperty("/AccoPosDept");const g=s.getProperty("/date");const I=s.getProperty("/Payload3");const y=s.getProperty("/Payload1/IncNo");I.INCI_INCID=i;I.INCI_ID=a;if(I.ID!==undefined&&I.ID!==null&&I.ID!==""){$.ajax({type:"PUT",contentType:"application/json",url:c+"RTW(ID="+I.ID+")",data:JSON.stringify(I),success:function(e,o){t.information("RTW form Updated for Incident  "+y)},error:function(){}})}else{$.ajax({type:"POST",contentType:"application/json",url:c+"RTW",data:JSON.stringify(I),success:function(e,o){t.information("RTW form Submitted for Incident  "+y)},error:function(){}})}},onPressStartDate:function(){t.information("Note: Make sure the date you are mentioning here will be consider as your Return to work Date")},onPressDate:function(){t.information("Note: Make sure the date you are selecting is today's date and will be consider as your request finalizing date")},onPressAnticipatedDate:function(){t.information("Note: In case of any emergency if you unable to return to work on mentioned date, then what will be your extended return to work date? ")},onSubmitwcb:function(e){var o=this.getOwnerComponent().getModel("globalModel"),n=o.getProperty("/keys");const a=n.ID;const i=n.INCID;const s=this.getView().getModel("localModel");const r=this.getView().getModel();const c=r.getServiceUrl();const l=s.getProperty("/Payload1/IncNo");const d=s.getProperty("/Payload4/injdate");const p=s.getProperty("/Payload4/WCBInjcat");const g=s.getProperty("/Payload4/WCBInjsubcat");const I=s.getProperty("/Payload4/InjDesc");const y=s.getProperty("/Payload4/Injstatus");const u=s.getProperty("/Payload4/Comments");const P=s.getProperty("/Payload4/Datereptosup");const f=s.getProperty("/Payload4/Datereptohr");const C=s.getProperty("/Payload4/Datereptowcb");const m=s.getProperty("/Payload4/firstdaylosttime");const h=s.getProperty("/Payload4/Datertw");const D=s.getProperty("/Payload4/claimstatus");const S=s.getProperty("/Payload4/whydenied");const M=s.getProperty("/Payload4/Claimno");const w=s.getProperty("/Payload4/letterrecwcb");const v=s.getProperty("/Payload4/Notimeloss");const N=s.getProperty("/Payload4/Notes");const T=s.getProperty("/Payload4/inj");const j={injdate:d,WCBInjcat:p,WCBInjsubcat:g,InjDesc:I,Injstatus:y,Comments:u,Datereptosup:P,Datereptohr:f,Datereptowcb:C,firstdaylosttime:m,Datertw:h,claimstatus:D,whydenied:S,Claimno:M,letterrecwcb:w,Notimeloss:v.toString(),INCI_INCID:parseInt(i),INCI_ID:a,Notes:N,inj:T};j.ID=s.getProperty("/Payload4/ID");if(j.ID!==undefined&&j.ID!==null&&j.ID!==""){$.ajax({type:"PUT",contentType:"application/json",url:c+"WCB(ID="+j.ID+")",data:JSON.stringify(j),success:function(e){t.success("WCB form for Incident "+l+"  Updated  Successfully.");r.refresh()}})}else{$.ajax({type:"POST",contentType:"application/json",url:c+"WCB",data:JSON.stringify(j),success:function(e){t.success("WCB form for Incident "+l+"  Submitted  Successfully and send to H&S Team for Review.");r.refresh()}})}},onAddInjury:function(){const e=this.getView().getModel("localModel");const t=e.getProperty("/Payload4/inj");t.push({});e.setProperty("/Payload4/inj",t)},onDeleteInjury:function(e){const t=e.getSource().getBindingContext("localModel").getPath().slice(-1);const o=this.getView().getModel("localModel");const n=o.getProperty("/Payload4/inj");if(n.length>1){n.splice(t,1)}o.setProperty("/Payload4/inj",n)}})});
//# sourceMappingURL=IncidentPortal.controller.js.map