/*!   GeneXus C# 16_0_0-127771 on 1/30/2019 2:47:43.44
*/
gx.evt.autoSkip=!1;gx.define("gx0020",!1,function(){var n,t;this.ServerClass="gx0020";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV9pUIdPasoReceta=gx.fn.getIntegerValue("vPUIDPASORECETA",".");this.AV10pUIdReceta=gx.fn.getIntegerValue("vPUIDRECETA",".")};this.e14071_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]),gx.$.Deferred().resolve()};this.e11071_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UIDPASORECETAFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UIDPASORECETAFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUIDPASORECETA","Visible",!0)):(gx.fn.setCtrlProperty("UIDPASORECETAFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUIDPASORECETA","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UIDPASORECETAFILTERCONTAINER","Class")',ctrl:"UIDPASORECETAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDPASORECETA","Visible")',ctrl:"vCUIDPASORECETA",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e12071_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UIDRECETAFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UIDRECETAFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUIDRECETA","Visible",!0)):(gx.fn.setCtrlProperty("UIDRECETAFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUIDRECETA","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UIDRECETAFILTERCONTAINER","Class")',ctrl:"UIDRECETAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDRECETA","Visible")',ctrl:"vCUIDRECETA",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e13071_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UTIEMPORELOJFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UTIEMPORELOJFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUTIEMPORELOJ","Visible",!0)):(gx.fn.setCtrlProperty("UTIEMPORELOJFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUTIEMPORELOJ","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UTIEMPORELOJFILTERCONTAINER","Class")',ctrl:"UTIEMPORELOJFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUTIEMPORELOJ","Visible")',ctrl:"vCUTIEMPORELOJ",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e17072_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18071_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52];this.GXLastCtrlId=52;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",44,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0020",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",45,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(13,46,"UIDPASORECETA","_Id Paso Receta","","UIdPasoReceta","int",0,"px",9,9,"right",null,[],13,"UIdPasoReceta",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(1,47,"UIDRECETA","UId Receta","","UIdReceta","int",0,"px",9,9,"right",null,[],1,"UIdReceta",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(63,48,"UTIEMPORELOJ","_Tiempo Reloj","","UTiempoReloj","int",0,"px",9,9,"right",null,[],63,"UTiempoReloj",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addBlob(65,49,"PASORECETAS_FOTO","_Foto","PasoRecetas_Foto","bitstr",0,60,0,"px","px",!0,!1,"WWColumn OptionalColumn");this.Grid1Container.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"ADVANCEDCONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"UIDPASORECETAFILTERCONTAINER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"LBLUIDPASORECETAFILTER",format:1,grid:0,evt:"e11071_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUIDPASORECETA",gxz:"ZV6cUIdPasoReceta",gxold:"OV6cUIdPasoReceta",gxvar:"AV6cUIdPasoReceta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6cUIdPasoReceta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6cUIdPasoReceta=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUIDPASORECETA",gx.O.AV6cUIdPasoReceta,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6cUIdPasoReceta=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUIDPASORECETA",".")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"UIDRECETAFILTERCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"LBLUIDRECETAFILTER",format:1,grid:0,evt:"e12071_client"};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUIDRECETA",gxz:"ZV7cUIdReceta",gxold:"OV7cUIdReceta",gxvar:"AV7cUIdReceta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7cUIdReceta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV7cUIdReceta=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUIDRECETA",gx.O.AV7cUIdReceta,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7cUIdReceta=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUIDRECETA",".")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"UTIEMPORELOJFILTERCONTAINER",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"LBLUTIEMPORELOJFILTER",format:1,grid:0,evt:"e13071_client"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUTIEMPORELOJ",gxz:"ZV8cUTiempoReloj",gxold:"OV8cUTiempoReloj",gxvar:"AV8cUTiempoReloj",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8cUTiempoReloj=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8cUTiempoReloj=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUTIEMPORELOJ",gx.O.AV8cUTiempoReloj,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8cUTiempoReloj=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUTIEMPORELOJ",".")},nac:gx.falseFn};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"GRIDTABLE",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"BTNTOGGLE",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[45]={id:45,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV5LinkSelection=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5LinkSelection=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV5LinkSelection=this.val())},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(44))},gxvar_GXI:"AV14Linkselection_GXI",nac:gx.falseFn};n[46]={id:46,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDPASORECETA",gxz:"Z13UIdPasoReceta",gxold:"O13UIdPasoReceta",gxvar:"A13UIdPasoReceta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A13UIdPasoReceta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z13UIdPasoReceta=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UIDPASORECETA",n||gx.fn.currentGridRowImpl(44),gx.O.A13UIdPasoReceta,0)},c2v:function(){this.val()!==undefined&&(gx.O.A13UIdPasoReceta=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UIDPASORECETA",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDRECETA",gxz:"Z1UIdReceta",gxold:"O1UIdReceta",gxvar:"A1UIdReceta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1UIdReceta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1UIdReceta=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UIDRECETA",n||gx.fn.currentGridRowImpl(44),gx.O.A1UIdReceta,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1UIdReceta=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UIDRECETA",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UTIEMPORELOJ",gxz:"Z63UTiempoReloj",gxold:"O63UTiempoReloj",gxvar:"A63UTiempoReloj",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A63UTiempoReloj=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z63UTiempoReloj=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UTIEMPORELOJ",n||gx.fn.currentGridRowImpl(44),gx.O.A63UTiempoReloj,0)},c2v:function(){this.val()!==undefined&&(gx.O.A63UTiempoReloj=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UTIEMPORELOJ",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"bitstr",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PASORECETAS_FOTO",gxz:"Z65PasoRecetas_Foto",gxold:"O65PasoRecetas_Foto",gxvar:"A65PasoRecetas_Foto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A65PasoRecetas_Foto=n)},v2z:function(n){n!==undefined&&(gx.O.Z65PasoRecetas_Foto=n)},v2c:function(n){gx.fn.setGridControlValue("PASORECETAS_FOTO",n||gx.fn.currentGridRowImpl(44),gx.O.A65PasoRecetas_Foto,0)},c2v:function(){this.val()!==undefined&&(gx.O.A65PasoRecetas_Foto=this.val())},val:function(n){return gx.fn.getGridControlValue("PASORECETAS_FOTO",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"BTN_CANCEL",grid:0};this.AV6cUIdPasoReceta=0;this.ZV6cUIdPasoReceta=0;this.OV6cUIdPasoReceta=0;this.AV7cUIdReceta=0;this.ZV7cUIdReceta=0;this.OV7cUIdReceta=0;this.AV8cUTiempoReloj=0;this.ZV8cUTiempoReloj=0;this.OV8cUTiempoReloj=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z13UIdPasoReceta=0;this.O13UIdPasoReceta=0;this.Z1UIdReceta=0;this.O1UIdReceta=0;this.Z63UTiempoReloj=0;this.O63UTiempoReloj=0;this.Z65PasoRecetas_Foto="";this.O65PasoRecetas_Foto="";this.AV6cUIdPasoReceta=0;this.AV7cUIdReceta=0;this.AV8cUTiempoReloj=0;this.AV9pUIdPasoReceta=0;this.AV10pUIdReceta=0;this.AV5LinkSelection="";this.A13UIdPasoReceta=0;this.A1UIdReceta=0;this.A63UTiempoReloj=0;this.A65PasoRecetas_Foto="";this.Events={e17072_client:["ENTER",!0],e18071_client:["CANCEL",!0],e14071_client:["'TOGGLE'",!1],e11071_client:["LBLUIDPASORECETAFILTER.CLICK",!1],e12071_client:["LBLUIDRECETAFILTER.CLICK",!1],e13071_client:["LBLUTIEMPORELOJFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdPasoReceta",fld:"vCUIDPASORECETA",pic:"ZZZZZZZZ9"},{av:"AV7cUIdReceta",fld:"vCUIDRECETA",pic:"ZZZZZZZZ9"},{av:"AV8cUTiempoReloj",fld:"vCUTIEMPORELOJ",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLUIDPASORECETAFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UIDPASORECETAFILTERCONTAINER","Class")',ctrl:"UIDPASORECETAFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UIDPASORECETAFILTERCONTAINER","Class")',ctrl:"UIDPASORECETAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDPASORECETA","Visible")',ctrl:"vCUIDPASORECETA",prop:"Visible"}]];this.EvtParms["LBLUIDRECETAFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UIDRECETAFILTERCONTAINER","Class")',ctrl:"UIDRECETAFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UIDRECETAFILTERCONTAINER","Class")',ctrl:"UIDRECETAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDRECETA","Visible")',ctrl:"vCUIDRECETA",prop:"Visible"}]];this.EvtParms["LBLUTIEMPORELOJFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UTIEMPORELOJFILTERCONTAINER","Class")',ctrl:"UTIEMPORELOJFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UTIEMPORELOJFILTERCONTAINER","Class")',ctrl:"UTIEMPORELOJFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUTIEMPORELOJ","Visible")',ctrl:"vCUTIEMPORELOJ",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION",pic:""}]];this.EvtParms.ENTER=[[{av:"A13UIdPasoReceta",fld:"UIDPASORECETA",pic:"ZZZZZZZZ9",hsh:!0},{av:"A1UIdReceta",fld:"UIDRECETA",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV9pUIdPasoReceta",fld:"vPUIDPASORECETA",pic:"ZZZZZZZZ9"},{av:"AV10pUIdReceta",fld:"vPUIDRECETA",pic:"ZZZZZZZZ9"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdPasoReceta",fld:"vCUIDPASORECETA",pic:"ZZZZZZZZ9"},{av:"AV7cUIdReceta",fld:"vCUIDRECETA",pic:"ZZZZZZZZ9"},{av:"AV8cUTiempoReloj",fld:"vCUTIEMPORELOJ",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdPasoReceta",fld:"vCUIDPASORECETA",pic:"ZZZZZZZZ9"},{av:"AV7cUIdReceta",fld:"vCUIDRECETA",pic:"ZZZZZZZZ9"},{av:"AV8cUTiempoReloj",fld:"vCUTIEMPORELOJ",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdPasoReceta",fld:"vCUIDPASORECETA",pic:"ZZZZZZZZ9"},{av:"AV7cUIdReceta",fld:"vCUIDRECETA",pic:"ZZZZZZZZ9"},{av:"AV8cUTiempoReloj",fld:"vCUTIEMPORELOJ",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdPasoReceta",fld:"vCUIDPASORECETA",pic:"ZZZZZZZZ9"},{av:"AV7cUIdReceta",fld:"vCUIDRECETA",pic:"ZZZZZZZZ9"},{av:"AV8cUTiempoReloj",fld:"vCUTIEMPORELOJ",pic:"ZZZZZZZZ9"}],[]];this.setVCMap("AV9pUIdPasoReceta","vPUIDPASORECETA",0,"int",9,0);this.setVCMap("AV10pUIdReceta","vPUIDRECETA",0,"int",9,0);t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);this.Initialize()});gx.createParentObj(gx0020)