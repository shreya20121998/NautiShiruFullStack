sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/ui/core/routing/History"
    ],
    function (BaseController,History) {
      "use strict";
   
      return BaseController.extend("nauticalfe.controller.MastBidMaster", {
        onInit() {
        }, onBackPress: function () {
          const oHistory = History.getInstance();
          const sPreviousHash = oHistory.getPreviousHash();
  
          if (sPreviousHash !== undefined) {
            window.history.go(-1);
          } else {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("MastView", {}, true);
          }
        },onBackPressHome: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteView1");
        },onPressExit:function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MastView");
        }, newEntries: function () {
          this.getView().byId("createTypeTable").setVisible(false)
          this.getView().byId("entryTypeTable").setVisible(true)
          this.getView().byId("mainPageFooter").setVisible(true)
  
  
        },onSave: function () {
  
          var value1 =  this.getView().byId("CLASSFIELD").getValue();
          var value2 =  this.getView().byId("CLASSDESC").getValue();
  
  
          
          var data = {
  
            ZF_VALUE: value1,
  
            ZF_DESC: value2
  
          };
          console.log(data);
  
  
         
          var JsonData = JSON.stringify(data)
          let EndPoint = "/odata/v4/nautical/CLASS";
          fetch(EndPoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JsonData
          })
            .then(function (res) {
              
              if (res.ok) {
                location.reload();
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

        }
      });
    }
  );