/*!   GeneXus C# 16_0_0-127771 on 1/30/2019 2:47:28.59
*/
gx.evt.autoSkip=!1;gx.define("momentosdiasgeneral",!0,function(n){this.ServerClass="momentosdiasgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Uidmomentodia=function(){try{var n=gx.util.balloon.getNew("UIDMOMENTODIA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e11121_client=function(){return this.clearMessages(),this.call("momentosdias.aspx",["UPD",this.A7UIdMomentoDia]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12121_client=function(){return this.clearMessages(),this.call("momentosdias.aspx",["DLT",this.A7UIdMomentoDia]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15122_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16122_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];this.GXLastCtrlId=23;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"BTNUPDATE",grid:0};t[9]={id:9,fld:"",grid:0};t[10]={id:10,fld:"BTNDELETE",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"ATTRIBUTESTABLE",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Uidmomentodia,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDMOMENTODIA",gxz:"Z7UIdMomentoDia",gxold:"O7UIdMomentoDia",gxvar:"A7UIdMomentoDia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A7UIdMomentoDia=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z7UIdMomentoDia=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("UIDMOMENTODIA",gx.O.A7UIdMomentoDia,0)},c2v:function(){this.val()!==undefined&&(gx.O.A7UIdMomentoDia=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("UIDMOMENTODIA",".")},nac:gx.falseFn};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"svchar",len:450,dec:0,sign:!1,ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MOMENTOSDIAS_NOMBRE",gxz:"Z8MomentosDias_Nombre",gxold:"O8MomentosDias_Nombre",gxvar:"A8MomentosDias_Nombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A8MomentosDias_Nombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z8MomentosDias_Nombre=n)},v2c:function(){gx.fn.setControlValue("MOMENTOSDIAS_NOMBRE",gx.O.A8MomentosDias_Nombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A8MomentosDias_Nombre=this.val())},val:function(){return gx.fn.getControlValue("MOMENTOSDIAS_NOMBRE")},nac:gx.falseFn};this.A7UIdMomentoDia=0;this.Z7UIdMomentoDia=0;this.O7UIdMomentoDia=0;this.A8MomentosDias_Nombre="";this.Z8MomentosDias_Nombre="";this.O8MomentosDias_Nombre="";this.A7UIdMomentoDia=0;this.A8MomentosDias_Nombre="";this.Events={e15122_client:["ENTER",!0],e16122_client:["CANCEL",!0],e11121_client:["'DOUPDATE'",!1],e12121_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[{av:"AV13Pgmname",fld:"vPGMNAME",pic:""},{av:"AV6UIdMomentoDia",fld:"vUIDMOMENTODIA",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.LOAD=[[],[]];this.EvtParms["'DOUPDATE'"]=[[{av:"A7UIdMomentoDia",fld:"UIDMOMENTODIA",pic:"ZZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A7UIdMomentoDia",fld:"UIDMOMENTODIA",pic:"ZZZZZZZZ9"}],[]];this.Initialize()})