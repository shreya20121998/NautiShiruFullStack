sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
    
  ],
  function (Controller,History,Fragment,MessageToast ) {
    "use strict";
    

    return Controller.extend("nauticalfe.controller.MasterVesselType", {

      onInit: function () {

      },
      backPress:function(){
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MastView", {}, true);
        }
      },
      // for more fragment
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
      },
      onBackPressHome: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteView1");
      },
      onExit: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("MastView");
      },
      newEntries: function () {
        this.getView().byId("createTypeTable").setVisible(false)
        this.getView().byId("entryTypeTable").setVisible(true)
        this.getView().byId("mainPageFooter").setVisible(true)
 
 
      },onSave: function () {
 
        var CARCD =  this.getView().byId("CARCD").getValue();
        var CARDES =  this.getView().byId("CARDES").getValue();
 
 
       
        var data = {
 
          CARCD: CARCD,
 
          CARDES: CARDES
 
        };
        console.log(data);
 
 
        var that = this;
        var JsonData = JSON.stringify(data)
        let EndPoint = "/odata/v4/nautical/CARTYP";
        fetch(EndPoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JsonData
        })
          .then(function (res) {
           
            if (res.ok) {
              console.log("Entity created successfully");
              MessageToast.show(`Entity created successfully`)
             
 
            }
            else {
              console.log("Failed");
              MessageToast.show(`Failed`)
            }
          })
          .catch(function (err) {
            console.log("error", err);
          })
          this.getView().byId("createTypeTable").setVisible(true)
          this.getView().byId("entryTypeTable").setVisible(false)
          this.getView().byId("mainPageFooter").setVisible(false)
          that.getView().getModel().refresh();
         
         
         
 
 
 
 
 
      },
      onCancel: function(){
        this.getView().byId("createTypeTable").setVisible(true);
        this.getView().byId("entryTypeTable").setVisible(false);
        this.getView().byId("voyCode").setValue();
        this.getView().byId("voyCodeDesc").setValue();
        this.getView().byId("mainPageFooter").setVisible(true)
 
 
 
      }

    });

  });

