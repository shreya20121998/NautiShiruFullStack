sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
 
      return BaseController.extend("nauticalfe.controller.ConfigVoyage", {
        onInit() {
        var oView = this.getView();
        var oFirstTable = oView.byId("firstTableId");
        var oNewTable = oView.byId("toHide");
 
       
        oFirstTable.setVisible(true);
        oNewTable.setVisible(false);
        },
        onBackPress: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("MastView");
          }
      });
    }
  );