sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageBox","sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,n,i,s,o){"use strict";return e.extend("cosincidentportal.controller.IncidentPortalLanding",{onInit:function(){const e=new i({Incident_Details:[{IncNo:"",supname:"",incType:"",incDate:"",incStatus:"",incCategory:""}]});this.getView().setModel(e,"localModel");const t=new i(e.getData());this.getView().setModel(t,"oMasterData");const n=this.getOwnerComponent().getModel().getServiceUrl();$.ajax({type:"GET",contentType:"application/json",url:n+"IncMData",success:function(e){console.log("Success:",e);t.setProperty("/MasterData",e.value)}})},onSearch:function(e){const t=[];const n=this.byId("Multi5").getSelectedKey();const i=this.byId("Multi3").getSelectedKey();const o=this.byId("Multi4").getSelectedKey();const c=this.byId("Multi6").getSelectedKey();const a=this.byId("Multi8").getSelectedKey();if(n!=="")t.push(new s("incType","EQ",n));if(i!=="")t.push(new s("incCategory","EQ",i));if(o!=="")t.push(new s("incStatus","EQ",o));if(c!=="")t.push(new s("IncNo","EQ",c));if(a!=="")t.push(new s("empid","EQ",a));const l=this.byId("table");const r=l.getBinding("items");r.filter(t)},OnPressIncNo:function(e){var t=e.getSource().getBindingContext().getObject();var n=this.getOwnerComponent().getModel("globalModel");this.getOwnerComponent().getRouter(this).navTo("RouteIncidentPortal",{ID:t.ID,INCID:t.INCID});n.setProperty("/keys",{ID:t.ID,INCID:t.INCID});n.setProperty("/sIncidentStat",e.getSource().getBindingContext().getObject().incStatus)},formatIncidentType:function(e){if(!e)return"";const t=this.getView().getModel("oMasterData");const n=t.getProperty("/MasterData"),i=n.find(t=>t.mid==e);return i.text||""},onClear:function(){var e=this.getView().getModel("oMasterData");const t=this.byId("Multi5").setSelectedKey("");const n=this.byId("Multi3").setSelectedKey("");const i=this.byId("Multi4").setSelectedKey("");const s=this.byId("Multi6").setSelectedKey("");const o=this.byId("Multi8").setSelectedKey("");this.oTable=this.getView().byId("table");this.oTable.getBinding("items").filter([])}})});
//# sourceMappingURL=IncidentPortalLanding.controller.js.map