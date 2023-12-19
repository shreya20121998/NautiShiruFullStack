sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment"
 
  ],
  function (Controller,JSONModel,MessageBox,Fragment) {
    "use strict";
 
    return Controller.extend("nauticalfe.controller.PortLocMaster", {
      onInit: function () {
       
      },onCreatePress: function () {
     
        this.getView().byId("firstTableId").setVisible(false)
        this.getView().byId("newTableId").setVisible(true)
   },createEntry:function(){
    // var value1 =  this.getView().byId("Countryedit1").getValue();
    // var value2 =  this.getView().byId("Countryedit2").getValue();
    // var value3 =  this.getView().byId("Countryedit3").getValue();
    // var value4 =  this.getView().byId("Countryedit4").getValue();
    // var value5 =  this.getView().byId("Countryedit5").getValue();
    // var value6 =  this.getView().byId("Countryedit6").getValue();
    // var value7 =  this.getView().byId("Countryedit7").getValue();
    // var value8 =  this.getView().byId("Countryedit8").getValue();
   
    // var data = {
    //   Country:value1,
    //   Portc:value2,
    //   Portn:value3,
    //   Reancho:value4,
    //   Latitude:value5,
    //   Longitude:value6,
    //   Countryn:value7,
    //   Locid:value8
 
    // // };
 
    var data = {
        Country:"CN",
        Portc:"chmn",
        Portn:"humen",
        Reancho:"dsa",
        Latitude:"22.84406",
        Longitude:"122.84406",
        Countryn:"abc",
        Locid:""
 
       };
      var odataModel = this.getView().getModel("MARINE_TRAFFIC_API_SRV");
      console.log(odataModel);
      odataModel.create("/PortMasterSet",data,{
        success:function(){
          console.log(data)
          MessageBox.success("Data created")
          odataModel.refresh();
        },
        error:function(error){
         
          MessageBox.error("Error:",error.message)
        }
      })
     
      this.getView().byId("firstTableId").setVisible(true)
      this.getView().byId("newTableId").setVisible(false)
      }, onBackPress: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("MastView");
      },onBackPressHome: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteView1");
      },onPressExit:function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("MastView");
      },
      onPress: function () {
        var oView = this.getView(),
          oButton = oView.byId("button");
        if (!this._oMenuFragment) {
          this._oMenuFragment = Fragment.load({
            name: "nauticalfe.fragments.MastOptionsDropDown",
                        id: oView.getId(),
            controller: this
          }).then(function(oMenu) {
            oMenu.openBy(oButton);
            this._oMenuFragment = oMenu;
            return this._oMenuFragment;
          }.bind(this));
        } else {
          this._oMenuFragment.openBy(oButton);
        }
      }
    });
  }
);