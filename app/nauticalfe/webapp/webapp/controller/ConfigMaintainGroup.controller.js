sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.ConfigMaintainGroup", {
        onInit() {
        var oView = this.getView();
        var oFirstTable = oView.byId("firstTableId");
        
        },
        onBackPress: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("MastView");
          },
          onBackPress: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("MastView");
          },onBackPressHome: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView1");
          },onPressExit:function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("MastView");
          }
      });
    }
  );