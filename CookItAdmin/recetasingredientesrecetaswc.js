/*!   GeneXus C# 16_0_0-127771 on 1/30/2019 2:47:30.86
*/
gx.evt.autoSkip=!1;gx.define("recetasingredientesrecetaswc",!0,function(n){var t,i;this.ServerClass="recetasingredientesrecetaswc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV6UIdReceta=gx.fn.getIntegerValue("vUIDRECETA",".");this.AV6UIdReceta=gx.fn.getIntegerValue("vUIDRECETA",".")};this.e130n2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e140n2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,13,14,15,16,17,18,19];this.GXLastCtrlId=19;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",12,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"recetasingredientesrecetaswc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit(2,13,"UIDINGREDIENTE","UId Ingrediente","","UIdIngrediente","int",0,"px",9,9,"right",null,[],2,"UIdIngrediente",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");i.addSingleLineEdit(66,14,"UCANTIDAD","_Cantidad","","UCantidad","int",0,"px",9,9,"right",null,[],66,"UCantidad",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");i.addSingleLineEdit(67,15,"INGREDIENTESRECETAS_MEDIDA","_Medida","","IngredientesRecetas_Medida","int",0,"px",9,9,"right",null,[],67,"IngredientesRecetas_Medida",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");this.GridContainer.emptyText="";this.setGrid(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"GRIDCELL",grid:0};t[6]={id:6,fld:"GRIDTABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[13]={id:13,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDINGREDIENTE",gxz:"Z2UIdIngrediente",gxold:"O2UIdIngrediente",gxvar:"A2UIdIngrediente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2UIdIngrediente=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2UIdIngrediente=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UIDINGREDIENTE",n||gx.fn.currentGridRowImpl(12),gx.O.A2UIdIngrediente,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2UIdIngrediente=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UIDINGREDIENTE",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[14]={id:14,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UCANTIDAD",gxz:"Z66UCantidad",gxold:"O66UCantidad",gxvar:"A66UCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A66UCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z66UCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UCANTIDAD",n||gx.fn.currentGridRowImpl(12),gx.O.A66UCantidad,0)},c2v:function(){this.val()!==undefined&&(gx.O.A66UCantidad=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("UCANTIDAD",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[15]={id:15,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"INGREDIENTESRECETAS_MEDIDA",gxz:"Z67IngredientesRecetas_Medida",gxold:"O67IngredientesRecetas_Medida",gxvar:"A67IngredientesRecetas_Medida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A67IngredientesRecetas_Medida=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z67IngredientesRecetas_Medida=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("INGREDIENTESRECETAS_MEDIDA",n||gx.fn.currentGridRowImpl(12),gx.O.A67IngredientesRecetas_Medida,0)},c2v:function(){this.val()!==undefined&&(gx.O.A67IngredientesRecetas_Medida=gx.num.intval(this.val()))},val:function(n){return gx.fn.getGridIntegerValue("INGREDIENTESRECETAS_MEDIDA",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UIDRECETA",gxz:"Z1UIdReceta",gxold:"O1UIdReceta",gxvar:"A1UIdReceta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1UIdReceta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1UIdReceta=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("UIDRECETA",gx.O.A1UIdReceta,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1UIdReceta=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("UIDRECETA",".")},nac:gx.falseFn};this.Z2UIdIngrediente=0;this.O2UIdIngrediente=0;this.Z66UCantidad=0;this.O66UCantidad=0;this.Z67IngredientesRecetas_Medida=0;this.O67IngredientesRecetas_Medida=0;this.A1UIdReceta=0;this.Z1UIdReceta=0;this.O1UIdReceta=0;this.A1UIdReceta=0;this.AV6UIdReceta=0;this.A2UIdIngrediente=0;this.A66UCantidad=0;this.A67IngredientesRecetas_Medida=0;this.Events={e130n2_client:["ENTER",!0],e140n2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6UIdReceta",fld:"vUIDRECETA",pic:"ZZZZZZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.START=[[{av:"AV14Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("UIDRECETA","Visible")',ctrl:"UIDRECETA",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6UIdReceta",fld:"vUIDRECETA",pic:"ZZZZZZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6UIdReceta",fld:"vUIDRECETA",pic:"ZZZZZZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6UIdReceta",fld:"vUIDRECETA",pic:"ZZZZZZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6UIdReceta",fld:"vUIDRECETA",pic:"ZZZZZZZZ9"},{av:"sPrefix"}],[]];this.setVCMap("AV6UIdReceta","vUIDRECETA",0,"int",9,0);this.setVCMap("AV6UIdReceta","vUIDRECETA",0,"int",9,0);this.setVCMap("AV6UIdReceta","vUIDRECETA",0,"int",9,0);i.addRefreshingVar({rfrVar:"AV6UIdReceta"});this.Initialize()})