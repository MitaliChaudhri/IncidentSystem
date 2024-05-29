sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageBox","sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,n,s,i,o){"use strict";return e.extend("cosincidentportalhs.controller.IncidentPortalLandingHS",{onInit:function(){const e=new s({Incident_Details:[{IncNo:"",supname:"",incType:"",incDate:"",incStatus:"",incCategory:""}]});this.getView().setModel(e,"localModel");const t=new s(e.getData());this.getView().setModel(t,"oMasterData");const n=this.getOwnerComponent().getModel().getServiceUrl();$.ajax({type:"GET",contentType:"application/json",url:n+"IncMData",success:function(e){console.log("Success:",e);t.setProperty("/MasterData",e.value);debugger}})},onSearch:function(e){const t=[];const n=this.byId("Multi5").getSelectedKey();const s=this.byId("Multi3").getSelectedKey();const o=this.byId("Multi4").getSelectedKey();const c=this.byId("Multi6").getSelectedKey();const a=this.byId("Multi8").getSelectedKey();if(n!=="")t.push(new i("incType","EQ",n));if(s!=="")t.push(new i("incCategory","EQ",s));if(o!=="")t.push(new i("incStatus","EQ",o));if(c!=="")t.push(new i("IncNo","EQ",c));if(a!=="")t.push(new i("empid","EQ",a));const l=this.byId("table");const r=l.getBinding("items");r.filter(t)},OnPressIncNo:function(e){var t=e.getSource().getBindingContext().getObject();var n=this.getOwnerComponent().getModel("globalModel");this.getOwnerComponent().getRouter(this).navTo("RouteIncidentPortalHS",{ID:t.ID,INCID:t.INCID});n.setProperty("/keys",{ID:t.ID,INCID:t.INCID})},formatIncidentType:function(e){if(!e)return"";const t=this.getView().getModel("oMasterData");const n=t.getProperty("/MasterData"),s=n.find(t=>t.mid==e);return s.text||""},onClear:function(){var e=this.getView().getModel("oMasterData");const t=this.byId("Multi5").setSelectedKey("");const n=this.byId("Multi3").setSelectedKey("");const s=this.byId("Multi4").setSelectedKey("");const i=this.byId("Multi6").setSelectedKey("");const o=this.byId("Multi8").setSelectedKey("");this.oTable=this.getView().byId("table");this.oTable.getBinding("items").filter([])}})});
//# sourceMappingURL=IncidentPortalLandingHS.controller.js.map