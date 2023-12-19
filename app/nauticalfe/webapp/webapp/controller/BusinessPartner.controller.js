sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.BusinessPartner", {
        onInit() {
        },
        onBPDetailpress: function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteBPMasterDetails")
        },
        onVendorDataPress: function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteVendorDataSyncing");
        }
     
      });
    }
  );
  