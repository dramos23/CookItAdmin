/*!   GeneXus C# 16_0_0-127771 on 1/30/2019 2:47:45.38
*/
gx.evt.autoSkip=!1;gx.define("gx0070",!1,function(){var n,t;this.ServerClass="gx0070";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV13pUIdReceta=gx.fn.getIntegerValue("vPUIDRECETA",".")};this.e18081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]),gx.$.Deferred().resolve()};this.e11081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UIDRECETAFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UIDRECETAFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUIDRECETA","Visible",!0)):(gx.fn.setCtrlProperty("UIDRECETAFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUIDRECETA","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UIDRECETAFILTERCONTAINER","Class")',ctrl:"UIDRECETAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDRECETA","Visible")',ctrl:"vCUIDRECETA",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e12081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UIDMOMENTODIAFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UIDMOMENTODIAFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUIDMOMENTODIA","Visible",!0)):(gx.fn.setCtrlProperty("UIDMOMENTODIAFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUIDMOMENTODIA","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UIDMOMENTODIAFILTERCONTAINER","Class")',ctrl:"UIDMOMENTODIAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDMOMENTODIA","Visible")',ctrl:"vCUIDMOMENTODIA",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e13081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UIDESTACIONFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UIDESTACIONFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUIDESTACION","Visible",!0)):(gx.fn.setCtrlProperty("UIDESTACIONFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUIDESTACION","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UIDESTACIONFILTERCONTAINER","Class")',ctrl:"UIDESTACIONFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDESTACION","Visible")',ctrl:"vCUIDESTACION",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e14081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UDIFICULTADFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UDIFICULTADFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUDIFICULTAD","Visible",!0)):(gx.fn.setCtrlProperty("UDIFICULTADFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUDIFICULTAD","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UDIFICULTADFILTERCONTAINER","Class")',ctrl:"UDIFICULTADFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUDIFICULTAD","Visible")',ctrl:"vCUDIFICULTAD",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e15081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UTIEMPOPREPARACIONFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UTIEMPOPREPARACIONFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUTIEMPOPREPARACION","Visible",!0)):(gx.fn.setCtrlProperty("UTIEMPOPREPARACIONFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUTIEMPOPREPARACION","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UTIEMPOPREPARACIONFILTERCONTAINER","Class")',ctrl:"UTIEMPOPREPARACIONFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUTIEMPOPREPARACION","Visible")',ctrl:"vCUTIEMPOPREPARACION",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e16081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UCANTPLATOSFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UCANTPLATOSFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUCANTPLATOS","Visible",!0)):(gx.fn.setCtrlProperty("UCANTPLATOSFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUCANTPLATOS","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UCANTPLATOSFILTERCONTAINER","Class")',ctrl:"UCANTPLATOSFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUCANTPLATOS","Visible")',ctrl:"vCUCANTPLATOS",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e17081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("UCANTCALORIASFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("UCANTCALORIASFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUCANTCALORIAS","Visible",!0)):(gx.fn.setCtrlProperty("UCANTCALORIASFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUCANTCALORIAS","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("UCANTCALORIASFILTERCONTAINER","Class")',ctrl:"UCANTCALORIASFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUCANTCALORIAS","Visible")',ctrl:"vCUCANTCALORIAS",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e21082_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e22081_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,85,86,87,88,89,90,91,92,93,94,95,96,97];this.GXLastCtrlId=97;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",84,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0070",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",85,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(1,86,"UIDRECETA","_Id Receta","","UIdReceta","int",0,"px",9,9,"right",null,[],1,"UIdReceta",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(7,87,"UIDMOMENTODIA","UId Momento Dia","","UIdMomentoDia","int",0,"px",9,9,"right",null,[],7,"UIdMomentoDia",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(5,88,"UIDESTACION","UId Estacion","","UIdEstacion","int",0,"px",9,9,"right",null,[],5,"UIdEstacion",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(19,89,"UDIFICULTAD","_Dificultad","","UDificultad","int",0,"px",9,9,"right",null,[],19,"UDificultad",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(20,90,"UTIEMPOPREPARACION","_Tiempo Preparacion","","UTiempoPreparacion","int",0,"px",9,9,"right",null,[],20,"UTiempoPreparacion",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addBlob(21,91,"RECETAS_FOTO","_Foto","Recetas_Foto","bitstr",0,60,0,"px","px",!0,!1,"WWColumn OptionalColumn");t.addSingleLineEdit(22,92,"UCANTPLATOS","_Cant Platos","","UCantPlatos","int",0,"px",9,9,"right",null,[],22,"UCantPlatos",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(23,93,"UCANTCALORIAS","_Cant Calorias","","UCantCalorias","int",0,"px",9,9,"right",null,[],23,"UCantCalorias",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(24,94,"RECETAS_COSTO","_Costo","","Recetas_Costo","int",0,"px",18,18,"right",null,[],24,"Recetas_Costo",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");this.Grid1Container.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"ADVANCEDCONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"UIDRECETAFILTERCONTAINER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"LBLUIDRECETAFILTER",format:1,grid:0,evt:"e11081_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUIDRECETA",gxz:"ZV6cUIdReceta",gxold:"OV6cUIdReceta",gxvar:"AV6cUIdReceta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6cUIdReceta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6cUIdReceta=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUIDRECETA",gx.O.AV6cUIdReceta,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6cUIdReceta=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUIDRECETA",".")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"UIDMOMENTODIAFILTERCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"LBLUIDMOMENTODIAFILTER",format:1,grid:0,evt:"e12081_client"};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUIDMOMENTODIA",gxz:"ZV7cUIdMomentoDia",gxold:"OV7cUIdMomentoDia",gxvar:"AV7cUIdMomentoDia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7cUIdMomentoDia=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV7cUIdMomentoDia=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUIDMOMENTODIA",gx.O.AV7cUIdMomentoDia,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7cUIdMomentoDia=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUIDMOMENTODIA",".")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"UIDESTACIONFILTERCONTAINER",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"LBLUIDESTACIONFILTER",format:1,grid:0,evt:"e13081_client"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUIDESTACION",gxz:"ZV8cUIdEstacion",gxold:"OV8cUIdEstacion",gxvar:"AV8cUIdEstacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8cUIdEstacion=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8cUIdEstacion=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUIDESTACION",gx.O.AV8cUIdEstacion,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8cUIdEstacion=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUIDESTACION",".")},nac:gx.falseFn};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"UDIFICULTADFILTERCONTAINER",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"LBLUDIFICULTADFILTER",format:1,grid:0,evt:"e14081_client"};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUDIFICULTAD",gxz:"ZV9cUDificultad",gxold:"OV9cUDificultad",gxvar:"AV9cUDificultad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9cUDificultad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV9cUDificultad=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUDIFICULTAD",gx.O.AV9cUDificultad,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV9cUDificultad=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUDIFICULTAD",".")},nac:gx.falseFn};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"UTIEMPOPREPARACIONFILTERCONTAINER",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"LBLUTIEMPOPREPARACIONFILTER",format:1,grid:0,evt:"e15081_client"};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUTIEMPOPREPARACION",gxz:"ZV10cUTiempoPreparacion",gxold:"OV10cUTiempoPreparacion",gxvar:"AV10cUTiempoPreparacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10cUTiempoPreparacion=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10cUTiempoPreparacion=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUTIEMPOPREPARACION",gx.O.AV10cUTiempoPreparacion,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10cUTiempoPreparacion=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUTIEMPOPREPARACION",".")},nac:gx.falseFn};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"UCANTPLATOSFILTERCONTAINER",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"LBLUCANTPLATOSFILTER",format:1,grid:0,evt:"e16081_client"};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUCANTPLATOS",gxz:"ZV11cUCantPlatos",gxold:"OV11cUCantPlatos",gxvar:"AV11cUCantPlatos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11cUCantPlatos=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11cUCantPlatos=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUCANTPLATOS",gx.O.AV11cUCantPlatos,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11cUCantPlatos=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUCANTPLATOS",".")},nac:gx.falseFn};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"UCANTCALORIASFILTERCONTAINER",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"LBLUCANTCALORIASFILTER",format:1,grid:0,evt:"e17081_client"};n[73]={id:73,fld:"",grid:0};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCUCANTCALORIAS",gxz:"ZV12cUCantCalorias",gxold:"OV12cUCantCalorias",gxvar:"AV12cUCantCalorias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12cUCantCalorias=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV12cUCantCalorias=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCUCANTCALORIAS",gx.O.AV12cUCantCalorias,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12cUCantCalorias=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCUCANTCALORIAS",".")},nac:gx.falseFn};n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"GRIDTABLE",grid:0};n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"BTNTOGGLE",grid:0};n[82]={id:82,fld:"",grid:0};n[83]={id:83,fld:"",grid:0};n[85]={id:85,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV5LinkSelection=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5LinkSelection=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(84),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV5LinkSelection=this.val())},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(84))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(84))},gxvar_GXI:"AV17Linkselection_GXI",nac:gx.falseFn};n[86]={id:86,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDRECETA",gxz:"Z1UIdReceta",gxold:"O1UIdReceta",gxvar:"A1UIdReceta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1UIdReceta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1UIdReceta=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UIDRECETA",n||gx.fn.currentGridRowImpl(84),gx.O.A1UIdReceta,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1UIdReceta=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UIDRECETA",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[87]={id:87,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDMOMENTODIA",gxz:"Z7UIdMomentoDia",gxold:"O7UIdMomentoDia",gxvar:"A7UIdMomentoDia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A7UIdMomentoDia=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z7UIdMomentoDia=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UIDMOMENTODIA",n||gx.fn.currentGridRowImpl(84),gx.O.A7UIdMomentoDia,0)},c2v:function(){this.val()!==undefined&&(gx.O.A7UIdMomentoDia=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UIDMOMENTODIA",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[88]={id:88,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDESTACION",gxz:"Z5UIdEstacion",gxold:"O5UIdEstacion",gxvar:"A5UIdEstacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A5UIdEstacion=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z5UIdEstacion=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UIDESTACION",n||gx.fn.currentGridRowImpl(84),gx.O.A5UIdEstacion,0)},c2v:function(){this.val()!==undefined&&(gx.O.A5UIdEstacion=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UIDESTACION",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[89]={id:89,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UDIFICULTAD",gxz:"Z19UDificultad",gxold:"O19UDificultad",gxvar:"A19UDificultad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A19UDificultad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z19UDificultad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UDIFICULTAD",n||gx.fn.currentGridRowImpl(84),gx.O.A19UDificultad,0)},c2v:function(){this.val()!==undefined&&(gx.O.A19UDificultad=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UDIFICULTAD",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[90]={id:90,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UTIEMPOPREPARACION",gxz:"Z20UTiempoPreparacion",gxold:"O20UTiempoPreparacion",gxvar:"A20UTiempoPreparacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A20UTiempoPreparacion=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z20UTiempoPreparacion=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UTIEMPOPREPARACION",n||gx.fn.currentGridRowImpl(84),gx.O.A20UTiempoPreparacion,0)},c2v:function(){this.val()!==undefined&&(gx.O.A20UTiempoPreparacion=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UTIEMPOPREPARACION",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[91]={id:91,lvl:2,type:"bitstr",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECETAS_FOTO",gxz:"Z21Recetas_Foto",gxold:"O21Recetas_Foto",gxvar:"A21Recetas_Foto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A21Recetas_Foto=n)},v2z:function(n){n!==undefined&&(gx.O.Z21Recetas_Foto=n)},v2c:function(n){gx.fn.setGridControlValue("RECETAS_FOTO",n||gx.fn.currentGridRowImpl(84),gx.O.A21Recetas_Foto,0)},c2v:function(){this.val()!==undefined&&(gx.O.A21Recetas_Foto=this.val())},val:function(n){return gx.fn.getGridControlValue("RECETAS_FOTO",n||gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};n[92]={id:92,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UCANTPLATOS",gxz:"Z22UCantPlatos",gxold:"O22UCantPlatos",gxvar:"A22UCantPlatos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A22UCantPlatos=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z22UCantPlatos=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UCANTPLATOS",n||gx.fn.currentGridRowImpl(84),gx.O.A22UCantPlatos,0)},c2v:function(){this.val()!==undefined&&(gx.O.A22UCantPlatos=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UCANTPLATOS",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[93]={id:93,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UCANTCALORIAS",gxz:"Z23UCantCalorias",gxold:"O23UCantCalorias",gxvar:"A23UCantCalorias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A23UCantCalorias=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z23UCantCalorias=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UCANTCALORIAS",n||gx.fn.currentGridRowImpl(84),gx.O.A23UCantCalorias,0)},c2v:function(){this.val()!==undefined&&(gx.O.A23UCantCalorias=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UCANTCALORIAS",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[94]={id:94,lvl:2,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RECETAS_COSTO",gxz:"Z24Recetas_Costo",gxold:"O24Recetas_Costo",gxvar:"A24Recetas_Costo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A24Recetas_Costo=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z24Recetas_Costo=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RECETAS_COSTO",n||gx.fn.currentGridRowImpl(84),gx.O.A24Recetas_Costo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A24Recetas_Costo=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("RECETAS_COSTO",n||gx.fn.currentGridRowImpl(84),".")},nac:gx.falseFn};n[95]={id:95,fld:"",grid:0};n[96]={id:96,fld:"",grid:0};n[97]={id:97,fld:"BTN_CANCEL",grid:0};this.AV6cUIdReceta=0;this.ZV6cUIdReceta=0;this.OV6cUIdReceta=0;this.AV7cUIdMomentoDia=0;this.ZV7cUIdMomentoDia=0;this.OV7cUIdMomentoDia=0;this.AV8cUIdEstacion=0;this.ZV8cUIdEstacion=0;this.OV8cUIdEstacion=0;this.AV9cUDificultad=0;this.ZV9cUDificultad=0;this.OV9cUDificultad=0;this.AV10cUTiempoPreparacion=0;this.ZV10cUTiempoPreparacion=0;this.OV10cUTiempoPreparacion=0;this.AV11cUCantPlatos=0;this.ZV11cUCantPlatos=0;this.OV11cUCantPlatos=0;this.AV12cUCantCalorias=0;this.ZV12cUCantCalorias=0;this.OV12cUCantCalorias=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z1UIdReceta=0;this.O1UIdReceta=0;this.Z7UIdMomentoDia=0;this.O7UIdMomentoDia=0;this.Z5UIdEstacion=0;this.O5UIdEstacion=0;this.Z19UDificultad=0;this.O19UDificultad=0;this.Z20UTiempoPreparacion=0;this.O20UTiempoPreparacion=0;this.Z21Recetas_Foto="";this.O21Recetas_Foto="";this.Z22UCantPlatos=0;this.O22UCantPlatos=0;this.Z23UCantCalorias=0;this.O23UCantCalorias=0;this.Z24Recetas_Costo=0;this.O24Recetas_Costo=0;this.AV6cUIdReceta=0;this.AV7cUIdMomentoDia=0;this.AV8cUIdEstacion=0;this.AV9cUDificultad=0;this.AV10cUTiempoPreparacion=0;this.AV11cUCantPlatos=0;this.AV12cUCantCalorias=0;this.AV13pUIdReceta=0;this.AV5LinkSelection="";this.A1UIdReceta=0;this.A7UIdMomentoDia=0;this.A5UIdEstacion=0;this.A19UDificultad=0;this.A20UTiempoPreparacion=0;this.A21Recetas_Foto="";this.A22UCantPlatos=0;this.A23UCantCalorias=0;this.A24Recetas_Costo=0;this.Events={e21082_client:["ENTER",!0],e22081_client:["CANCEL",!0],e18081_client:["'TOGGLE'",!1],e11081_client:["LBLUIDRECETAFILTER.CLICK",!1],e12081_client:["LBLUIDMOMENTODIAFILTER.CLICK",!1],e13081_client:["LBLUIDESTACIONFILTER.CLICK",!1],e14081_client:["LBLUDIFICULTADFILTER.CLICK",!1],e15081_client:["LBLUTIEMPOPREPARACIONFILTER.CLICK",!1],e16081_client:["LBLUCANTPLATOSFILTER.CLICK",!1],e17081_client:["LBLUCANTCALORIASFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdReceta",fld:"vCUIDRECETA",pic:"ZZZZZZZZ9"},{av:"AV7cUIdMomentoDia",fld:"vCUIDMOMENTODIA",pic:"ZZZZZZZZ9"},{av:"AV8cUIdEstacion",fld:"vCUIDESTACION",pic:"ZZZZZZZZ9"},{av:"AV9cUDificultad",fld:"vCUDIFICULTAD",pic:"ZZZZZZZZ9"},{av:"AV10cUTiempoPreparacion",fld:"vCUTIEMPOPREPARACION",pic:"ZZZZZZZZ9"},{av:"AV11cUCantPlatos",fld:"vCUCANTPLATOS",pic:"ZZZZZZZZ9"},{av:"AV12cUCantCalorias",fld:"vCUCANTCALORIAS",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLUIDRECETAFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UIDRECETAFILTERCONTAINER","Class")',ctrl:"UIDRECETAFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UIDRECETAFILTERCONTAINER","Class")',ctrl:"UIDRECETAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDRECETA","Visible")',ctrl:"vCUIDRECETA",prop:"Visible"}]];this.EvtParms["LBLUIDMOMENTODIAFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UIDMOMENTODIAFILTERCONTAINER","Class")',ctrl:"UIDMOMENTODIAFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UIDMOMENTODIAFILTERCONTAINER","Class")',ctrl:"UIDMOMENTODIAFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDMOMENTODIA","Visible")',ctrl:"vCUIDMOMENTODIA",prop:"Visible"}]];this.EvtParms["LBLUIDESTACIONFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UIDESTACIONFILTERCONTAINER","Class")',ctrl:"UIDESTACIONFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UIDESTACIONFILTERCONTAINER","Class")',ctrl:"UIDESTACIONFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUIDESTACION","Visible")',ctrl:"vCUIDESTACION",prop:"Visible"}]];this.EvtParms["LBLUDIFICULTADFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UDIFICULTADFILTERCONTAINER","Class")',ctrl:"UDIFICULTADFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UDIFICULTADFILTERCONTAINER","Class")',ctrl:"UDIFICULTADFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUDIFICULTAD","Visible")',ctrl:"vCUDIFICULTAD",prop:"Visible"}]];this.EvtParms["LBLUTIEMPOPREPARACIONFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UTIEMPOPREPARACIONFILTERCONTAINER","Class")',ctrl:"UTIEMPOPREPARACIONFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UTIEMPOPREPARACIONFILTERCONTAINER","Class")',ctrl:"UTIEMPOPREPARACIONFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUTIEMPOPREPARACION","Visible")',ctrl:"vCUTIEMPOPREPARACION",prop:"Visible"}]];this.EvtParms["LBLUCANTPLATOSFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UCANTPLATOSFILTERCONTAINER","Class")',ctrl:"UCANTPLATOSFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UCANTPLATOSFILTERCONTAINER","Class")',ctrl:"UCANTPLATOSFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUCANTPLATOS","Visible")',ctrl:"vCUCANTPLATOS",prop:"Visible"}]];this.EvtParms["LBLUCANTCALORIASFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("UCANTCALORIASFILTERCONTAINER","Class")',ctrl:"UCANTCALORIASFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("UCANTCALORIASFILTERCONTAINER","Class")',ctrl:"UCANTCALORIASFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUCANTCALORIAS","Visible")',ctrl:"vCUCANTCALORIAS",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION",pic:""}]];this.EvtParms.ENTER=[[{av:"A1UIdReceta",fld:"UIDRECETA",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV13pUIdReceta",fld:"vPUIDRECETA",pic:"ZZZZZZZZ9"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdReceta",fld:"vCUIDRECETA",pic:"ZZZZZZZZ9"},{av:"AV7cUIdMomentoDia",fld:"vCUIDMOMENTODIA",pic:"ZZZZZZZZ9"},{av:"AV8cUIdEstacion",fld:"vCUIDESTACION",pic:"ZZZZZZZZ9"},{av:"AV9cUDificultad",fld:"vCUDIFICULTAD",pic:"ZZZZZZZZ9"},{av:"AV10cUTiempoPreparacion",fld:"vCUTIEMPOPREPARACION",pic:"ZZZZZZZZ9"},{av:"AV11cUCantPlatos",fld:"vCUCANTPLATOS",pic:"ZZZZZZZZ9"},{av:"AV12cUCantCalorias",fld:"vCUCANTCALORIAS",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdReceta",fld:"vCUIDRECETA",pic:"ZZZZZZZZ9"},{av:"AV7cUIdMomentoDia",fld:"vCUIDMOMENTODIA",pic:"ZZZZZZZZ9"},{av:"AV8cUIdEstacion",fld:"vCUIDESTACION",pic:"ZZZZZZZZ9"},{av:"AV9cUDificultad",fld:"vCUDIFICULTAD",pic:"ZZZZZZZZ9"},{av:"AV10cUTiempoPreparacion",fld:"vCUTIEMPOPREPARACION",pic:"ZZZZZZZZ9"},{av:"AV11cUCantPlatos",fld:"vCUCANTPLATOS",pic:"ZZZZZZZZ9"},{av:"AV12cUCantCalorias",fld:"vCUCANTCALORIAS",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdReceta",fld:"vCUIDRECETA",pic:"ZZZZZZZZ9"},{av:"AV7cUIdMomentoDia",fld:"vCUIDMOMENTODIA",pic:"ZZZZZZZZ9"},{av:"AV8cUIdEstacion",fld:"vCUIDESTACION",pic:"ZZZZZZZZ9"},{av:"AV9cUDificultad",fld:"vCUDIFICULTAD",pic:"ZZZZZZZZ9"},{av:"AV10cUTiempoPreparacion",fld:"vCUTIEMPOPREPARACION",pic:"ZZZZZZZZ9"},{av:"AV11cUCantPlatos",fld:"vCUCANTPLATOS",pic:"ZZZZZZZZ9"},{av:"AV12cUCantCalorias",fld:"vCUCANTCALORIAS",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cUIdReceta",fld:"vCUIDRECETA",pic:"ZZZZZZZZ9"},{av:"AV7cUIdMomentoDia",fld:"vCUIDMOMENTODIA",pic:"ZZZZZZZZ9"},{av:"AV8cUIdEstacion",fld:"vCUIDESTACION",pic:"ZZZZZZZZ9"},{av:"AV9cUDificultad",fld:"vCUDIFICULTAD",pic:"ZZZZZZZZ9"},{av:"AV10cUTiempoPreparacion",fld:"vCUTIEMPOPREPARACION",pic:"ZZZZZZZZ9"},{av:"AV11cUCantPlatos",fld:"vCUCANTPLATOS",pic:"ZZZZZZZZ9"},{av:"AV12cUCantCalorias",fld:"vCUCANTCALORIAS",pic:"ZZZZZZZZ9"}],[]];this.setVCMap("AV13pUIdReceta","vPUIDRECETA",0,"int",9,0);t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingVar(this.GXValidFnc[46]);t.addRefreshingVar(this.GXValidFnc[56]);t.addRefreshingVar(this.GXValidFnc[66]);t.addRefreshingVar(this.GXValidFnc[76]);this.Initialize()});gx.createParentObj(gx0070)