/*!   GeneXus C# 16_0_0-127771 on 1/30/2019 2:47:44.70
*/
gx.evt.autoSkip=!1;gx.define("gx0060",!1,function(){var n,t;this.ServerClass="gx0060";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7pUIdEstacion=gx.fn.getIntegerValue("vPUIDESTACION",".")};this.e120d1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]),gx.$.Deferred().resolve()};this.e110d1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UIDESTACIONFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UIDESTACIONFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUIDESTACION","Visible",!0)):(gx.fn.setCtrlProperty("UIDESTACIONFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUIDESTACION","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UIDESTACIONFILTERCONTAINER","Class")',ctrl:"UIDESTACIONFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDESTACION","Visible")',ctrl:"vCUIDESTACION",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e150d2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e160d1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29];this.GXLastCtrlId=29;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",24,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0060",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",25,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(5,26,"UIDESTACION","_Id Estacion","","UIdEstacion","int",0,"px",9,9,"right",null,[],5,"UIdEstacion",!0,0,!1,!1,"Attribute",1,"WWColumn");this.Grid1Container.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"ADVANCEDCONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"UIDESTACIONFILTERCONTAINER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"LBLUIDESTACIONFILTER",format:1,grid:0,evt:"e110d1_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUIDESTACION",gxz:"ZV6cUIdEstacion",gxold:"OV6cUIdEstacion",gxvar:"AV6cUIdEstacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6cUIdEstacion=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6cUIdEstacion=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUIDESTACION",gx.O.AV6cUIdEstacion,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6cUIdEstacion=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUIDESTACION",".")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"GRIDTABLE",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNTOGGLE",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[25]={id:25,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:24,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV5LinkSelection=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5LinkSelection=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(24),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV5LinkSelection=this.val())},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(24))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(24))},gxvar_GXI:"AV11Linkselection_GXI",nac:gx.falseFn};n[26]={id:26,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:24,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDESTACION",gxz:"Z5UIdEstacion",gxold:"O5UIdEstacion",gxvar:"A5UIdEstacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A5UIdEstacion=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z5UIdEstacion=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UIDESTACION",n||gx.fn.currentGridRowImpl(24),gx.O.A5UIdEstacion,0)},c2v:function(){this.val()!==undefined&&(gx.O.A5UIdEstacion=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UIDESTACION",n||gx.fn.currentGridRowImpl(24),".")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"BTN_CANCEL",grid:0};this.AV6cUIdEstacion=0;this.ZV6cUIdEstacion=0;this.OV6cUIdEstacion=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z5UIdEstacion=0;this.O5UIdEstacion=0;this.AV6cUIdEstacion=0;this.AV7pUIdEstacion=0;this.AV5LinkSelection="";this.A5UIdEstacion=0;this.Events={e150d2_client:["ENTER",!0],e160d1_client:["CANCEL",!0],e120d1_client:["'TOGGLE'",!1],e110d1_client:["LBLUIDESTACIONFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdEstacion",fld:"vCUIDESTACION",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLUIDESTACIONFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UIDESTACIONFILTERCONTAINER","Class")',ctrl:"UIDESTACIONFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UIDESTACIONFILTERCONTAINER","Class")',ctrl:"UIDESTACIONFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDESTACION","Visible")',ctrl:"vCUIDESTACION",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION",pic:""}]];this.EvtParms.ENTER=[[{av:"A5UIdEstacion",fld:"UIDESTACION",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV7pUIdEstacion",fld:"vPUIDESTACION",pic:"ZZZZZZZZ9"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdEstacion",fld:"vCUIDESTACION",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdEstacion",fld:"vCUIDESTACION",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdEstacion",fld:"vCUIDESTACION",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdEstacion",fld:"vCUIDESTACION",pic:"ZZZZZZZZ9"}],[]];this.setVCMap("AV7pUIdEstacion","vPUIDESTACION",0,"int",9,0);t.addRefreshingVar(this.GXValidFnc[16]);this.Initialize()});gx.createParentObj(gx0060)