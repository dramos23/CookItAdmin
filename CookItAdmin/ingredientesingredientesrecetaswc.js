/*!   GeneXus C# 16_0_0-127771 on 1/30/2019 2:47:36.52
*/
gx.evt.autoSkip=!1;gx.define("ingredientesingredientesrecetaswc",!0,function(n){var t,i;this.ServerClass="ingredientesingredientesrecetaswc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV6UIdIngrediente=gx.fn.getIntegerValue("vUIDINGREDIENTE",".");this.AV6UIdIngrediente=gx.fn.getIntegerValue("vUIDINGREDIENTE",".")};this.e110w2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e140w2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e150w2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,21,22,23,24,25,26,27,28,29];this.GXLastCtrlId=29;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",20,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"ingredientesingredientesrecetaswc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit(1,21,"UIDRECETA","UId Receta","","UIdReceta","int",0,"px",9,9,"right",null,[],1,"UIdReceta",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");i.addSingleLineEdit(66,22,"UCANTIDAD","_Cantidad","","UCantidad","int",0,"px",9,9,"right",null,[],66,"UCantidad",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");i.addSingleLineEdit(67,23,"INGREDIENTESRECETAS_MEDIDA","_Medida","","IngredientesRecetas_Medida","int",0,"px",9,9,"right",null,[],67,"IngredientesRecetas_Medida",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");i.addSingleLineEdit("Update",24,"vUPDATE","","","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"TextActionAttribute",1,"WWTextActionColumn");i.addSingleLineEdit("Delete",25,"vDELETE","","","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"TextActionAttribute",1,"WWTextActionColumn");this.GridContainer.emptyText="";this.setGrid(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLETOP",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"BTNINSERT",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"GRIDCELL",grid:0};t[14]={id:14,fld:"GRIDTABLE",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[21]={id:21,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDRECETA",gxz:"Z1UIdReceta",gxold:"O1UIdReceta",gxvar:"A1UIdReceta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1UIdReceta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1UIdReceta=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UIDRECETA",n||gx.fn.currentGridRowImpl(20),gx.O.A1UIdReceta,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1UIdReceta=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UIDRECETA",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UCANTIDAD",gxz:"Z66UCantidad",gxold:"O66UCantidad",gxvar:"A66UCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A66UCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z66UCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UCANTIDAD",n||gx.fn.currentGridRowImpl(20),gx.O.A66UCantidad,0)},c2v:function(){this.val()!==undefined&&(gx.O.A66UCantidad=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UCANTIDAD",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"INGREDIENTESRECETAS_MEDIDA",gxz:"Z67IngredientesRecetas_Medida",gxold:"O67IngredientesRecetas_Medida",gxvar:"A67IngredientesRecetas_Medida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A67IngredientesRecetas_Medida=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z67IngredientesRecetas_Medida=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("INGREDIENTESRECETAS_MEDIDA",n||gx.fn.currentGridRowImpl(20),gx.O.A67IngredientesRecetas_Medida,0)},c2v:function(){this.val()!==undefined&&(gx.O.A67IngredientesRecetas_Medida=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("INGREDIENTESRECETAS_MEDIDA",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV12Update",gxold:"OV12Update",gxvar:"AV12Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV12Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(20),gx.O.AV12Update,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12Update=this.val())},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV13Delete",gxold:"OV13Delete",gxvar:"AV13Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV13Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(20),gx.O.AV13Delete,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13Delete=this.val())},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDINGREDIENTE",gxz:"Z2UIdIngrediente",gxold:"O2UIdIngrediente",gxvar:"A2UIdIngrediente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2UIdIngrediente=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2UIdIngrediente=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("UIDINGREDIENTE",gx.O.A2UIdIngrediente,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2UIdIngrediente=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("UIDINGREDIENTE",".")},nac:gx.falseFn};this.Z1UIdReceta=0;this.O1UIdReceta=0;this.Z66UCantidad=0;this.O66UCantidad=0;this.Z67IngredientesRecetas_Medida=0;this.O67IngredientesRecetas_Medida=0;this.ZV12Update="";this.OV12Update="";this.ZV13Delete="";this.OV13Delete="";this.A2UIdIngrediente=0;this.Z2UIdIngrediente=0;this.O2UIdIngrediente=0;this.A2UIdIngrediente=0;this.AV6UIdIngrediente=0;this.A1UIdReceta=0;this.A66UCantidad=0;this.A67IngredientesRecetas_Medida=0;this.AV12Update="";this.AV13Delete="";this.Events={e110w2_client:["'DOINSERT'",!0],e140w2_client:["ENTER",!0],e150w2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6UIdIngrediente",fld:"vUIDINGREDIENTE",pic:"ZZZZZZZZ9"},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""},{av:"sPrefix"},{av:"A2UIdIngrediente",fld:"UIDINGREDIENTE",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV16Pgmname",fld:"vPGMNAME",pic:""},{av:"AV6UIdIngrediente",fld:"vUIDINGREDIENTE",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("UIDINGREDIENTE","Visible")',ctrl:"UIDINGREDIENTE",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A1UIdReceta",fld:"UIDRECETA",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV6UIdIngrediente",fld:"vUIDINGREDIENTE",pic:"ZZZZZZZZ9"},{av:"A2UIdIngrediente",fld:"UIDINGREDIENTE",pic:"ZZZZZZZZ9"}],[{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"},{av:'gx.fn.getCtrlProperty("UCANTIDAD","Link")',ctrl:"UCANTIDAD",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A1UIdReceta",fld:"UIDRECETA",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV6UIdIngrediente",fld:"vUIDINGREDIENTE",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6UIdIngrediente",fld:"vUIDINGREDIENTE",pic:"ZZZZZZZZ9"},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""},{av:"A2UIdIngrediente",fld:"UIDINGREDIENTE",pic:"ZZZZZZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6UIdIngrediente",fld:"vUIDINGREDIENTE",pic:"ZZZZZZZZ9"},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""},{av:"A2UIdIngrediente",fld:"UIDINGREDIENTE",pic:"ZZZZZZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6UIdIngrediente",fld:"vUIDINGREDIENTE",pic:"ZZZZZZZZ9"},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""},{av:"A2UIdIngrediente",fld:"UIDINGREDIENTE",pic:"ZZZZZZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6UIdIngrediente",fld:"vUIDINGREDIENTE",pic:"ZZZZZZZZ9"},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""},{av:"A2UIdIngrediente",fld:"UIDINGREDIENTE",pic:"ZZZZZZZZ9"},{av:"sPrefix"}],[]];this.setVCMap("AV6UIdIngrediente","vUIDINGREDIENTE",0,"int",9,0);this.setVCMap("AV6UIdIngrediente","vUIDINGREDIENTE",0,"int",9,0);this.setVCMap("AV6UIdIngrediente","vUIDINGREDIENTE",0,"int",9,0);i.addRefreshingVar({rfrVar:"AV6UIdIngrediente"});i.addRefreshingVar({rfrVar:"AV12Update",rfrProp:"Value",gxAttId:"Update"});i.addRefreshingVar({rfrVar:"AV13Delete",rfrProp:"Value",gxAttId:"Delete"});i.addRefreshingVar(this.GXValidFnc[29]);this.Initialize()})