sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller) {
      "use strict";
   
      return Controller.extend("nauticalfe.controller.UOMMaster", {
        onInit() {
        },onBackPress: function () {
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