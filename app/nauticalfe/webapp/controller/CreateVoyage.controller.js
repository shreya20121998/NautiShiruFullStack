sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
 
        return Controller.extend("nauticalfe.controller.CreateVoyage", {
            onInit: function () {
                var oView = this.getView();

      // Button event handlers
      // oView.byId("_IDGenButton1").attachPress(function () {
      //   alert("Create Voyage button clicked!");
      // });
      
      

      // oView.byId("_IDGenButton3").attachPress(function () {
      //   alert("Calculate button clicked!");
      // });

      // oView.byId("_IDGenButton4").attachPress(function () {
      //   alert("Refresh button clicked!");
      // });
    },
    onFreightSimulator: function() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("RouteFreightSimulator");
    },
    onChangeVoyage: function() {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("RouteTrChangeVoyage");
    },

    
  });
});
 
            
        
    
