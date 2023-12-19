sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.TransView", {
        onInit() {
        },
        onChange: function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteTrChangeVoyage");
      },
      VoyageOptions:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("TrVoyageOptions")
}

      });
    }
  );
  