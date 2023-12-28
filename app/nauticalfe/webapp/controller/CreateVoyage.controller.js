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
      onFreightSimulator: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteFreightSimulator");
      },
      onChangeVoyage: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteTrChangeVoyage");
      },
      populateInputField: function (inputField, selectedValue) {
        inputField.setValue(selectedValue);
      },
      showValueHelpDialog1: function () {
        // Create a dialog
        console.log("clicked voyage");
        var oDialog = new sap.m.Dialog({
          title: "Select: Voyage Types",
          contentWidth: "60%",
          contentHeight: "60%",
          content: new sap.m.Table({
            mode: sap.m.ListMode.SingleSelectMaster,
 
            columns: [
              new sap.m.Column({
                header: new sap.m.Text({ text: "Voyage Type" }),
              }),
              new sap.m.Column({
                header: new sap.m.Text({ text: "Description" }),
              }),
            ],
 
            selectionChange: function (oEvent) {
              var oSelectedItem = oEvent.getParameter("listItem");
              var oSelectedValue = oSelectedItem.getCells()[0].getText();
              var inputVoyageType = this.getView().byId("_IDInput2"); // Input field for Voyage Type
              this.populateInputField(inputVoyageType, oSelectedValue);
              oDialog.close();
            }.bind(this),
          }),
          beginButton: new sap.m.Button({
            text: "Cancel",
            type: "Reject",
            press: function () {
              oDialog.close();
            },
          }),
 
        });
 
        let oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element
 
        oValueHelpTable.bindItems({
          path: "/VOYTYP", // Replace with your entity set
          template: new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "{VOYCD}" }),
              new sap.m.Text({ text: "{VOYDES}" }),
            ],
          }),
        });
        // Bind the dialog to the view
        this.getView().addDependent(oDialog);
 
        // Open the dialog
        oDialog.open();
      },
      showValueHelpDialog2: function () {
        // Create a dialog
        console.log("clicked Bidding type");
        var oDialog = new sap.m.Dialog({
          title: "Select: Bidding Types",
          contentWidth: "60%",
          contentHeight: "60%",
          content: new sap.m.Table({
            mode: sap.m.ListMode.SingleSelectMaster,
 
            columns: [
              new sap.m.Column({
                header: new sap.m.Text({ text: "Bidding Type" }),
              }),
              new sap.m.Column({
                header: new sap.m.Text({ text: "Description" }),
              }),
            ],
            items: [
                            new sap.m.ColumnListItem({
                                cells: [
                                    new sap.m.Text({ text: "TB" }),
                                    new sap.m.Text({ text: "2 Bid System" }),
                                ],
                            }),
                            new sap.m.ColumnListItem({
                              cells: [
                                  new sap.m.Text({ text: "SB" }),
                                  new sap.m.Text({ text: "1 Bid System" }),
                              ],
                          }),
 
                        // Add more ColumnListItems as needed
                        ],
 
            selectionChange: function (oEvent) {
              var oSelectedItem = oEvent.getParameter("listItem");
              var oSelectedValue = oSelectedItem.getCells()[0].getText();
              var inputVoyageType = this.getView().byId("_IDInput3"); // Input field for Voyage Type
              this.populateInputField(inputVoyageType, oSelectedValue);
              oDialog.close();
            }.bind(this),
          }),
          beginButton: new sap.m.Button({
            text: "Cancel",
            type: "Reject",
            press: function () {
              oDialog.close();
            },
          }),
 
        });
 
        let oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element
 
        // Bind the dialog to the view
        this.getView().addDependent(oDialog);
 
        // Open the dialog
        oDialog.open();
      },
      showValueHelpDialog3: function () {
        // Create a dialog
        console.log("clicked Cargo type");
        var oDialog = new sap.m.Dialog({
          title: "Select: Vessel Types",
          contentWidth: "60%",
          contentHeight: "60%",
          content: new sap.m.Table({
            mode: sap.m.ListMode.SingleSelectMaster,
 
            columns: [
              new sap.m.Column({
                header: new sap.m.Text({ text: "Vessel Type" }),
              }),
              new sap.m.Column({
                header: new sap.m.Text({ text: "Description" }),
              }),
            ],
 
            selectionChange: function (oEvent) {
              var oSelectedItem = oEvent.getParameter("listItem");
              var oSelectedValue = oSelectedItem.getCells()[0].getText();
              var inputVoyageType = this.getView().byId("_IDInput4"); // Input field for Voyage Type
              this.populateInputField(inputVoyageType, oSelectedValue);
              oDialog.close();
            }.bind(this),
          }),
          beginButton: new sap.m.Button({
            text: "Cancel",
            type: "Reject",
            press: function () {
              oDialog.close();
            },
          }),
 
        });
 
        let oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element
 
        oValueHelpTable.bindItems({
          path: "/CARTYP", // Replace with your entity set
          template: new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "{CARCD}" }),
              new sap.m.Text({ text: "{CARDES}" }),
            ],
          }),
        });
        // Bind the dialog to the view
        this.getView().addDependent(oDialog);
 
        // Open the dialog
        oDialog.open();
      },
      showValueHelpDialog4: function () {
        // Create a dialog
        console.log("clicked Currency type");
        var oDialog = new sap.m.Dialog({
          title: "Select: Vessel Types",
          contentWidth: "60%",
          contentHeight: "60%",
          content: new sap.m.Table({
            mode: sap.m.ListMode.SingleSelectMaster,
 
            columns: [
              new sap.m.Column({
                header: new sap.m.Text({ text: "Currency Code" }),
              }),
              new sap.m.Column({
                header: new sap.m.Text({ text: "Currency Description" }),
              }),
            ],
 
            selectionChange: function (oEvent) {
              var oSelectedItem = oEvent.getParameter("listItem");
              var oSelectedValue = oSelectedItem.getCells()[0].getText();
              var inputVoyageType = this.getView().byId("_IDInput5");
              this.populateInputField(inputVoyageType, oSelectedValue);
              oDialog.close();
            }.bind(this),
          }),
          beginButton: new sap.m.Button({
            text: "Cancel",
            type: "Reject",
            press: function () {
              oDialog.close();
            },
          }),
 
        });
 
        let oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element
 
        oValueHelpTable.bindItems({
          path: "/CURR", // Replace with your entity set
          template: new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "{NAVOYCUR}" }),
              new sap.m.Text({ text: "{NAVOYGCURDES}" }),
            ],
          }),
        });
        // Bind the dialog to the view
        this.getView().addDependent(oDialog);
 
        // Open the dialog
        oDialog.open();
      },
     
      onValueHelp: function () {
        // Create a dialog
       
        var oDialog = new sap.m.Dialog({
          title: "Select: From Port",
          contentWidth: "60%",
          contentHeight: "60%",
          content: new sap.m.Table({
            mode: sap.m.ListMode.SingleSelectMaster,
 
            columns: [
              new sap.m.Column({
                header: new sap.m.Text({ text: "To Port" }),
              }),
              new sap.m.Column({
                header: new sap.m.Text({ text: "From Port" }),
              }), new sap.m.Column({
                header: new sap.m.Text({ text: "distance" }),
              })
            ],
 
            selectionChange: function (oEvent) {
              var oSelectedItem = oEvent.getParameter("listItem");
              var oSelectedValue = oSelectedItem.getCells()[0].getText();
              var inputVoyageType = this.getView().byId("field1");
              this.populateInputField(inputVoyageType, oSelectedValue);
              oDialog.close();
            }.bind(this),
          }),
          beginButton: new sap.m.Button({
            text: "Cancel",
            type: "Reject",
            press: function () {
              oDialog.close();
            },
          }),
 
        });
 
        let oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element
 
        oValueHelpTable.bindItems({
          path: "/ZBTP_NAUTICAL_MariDistance", // Replace with your entity set
          template: new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "{from_port}" }),
              new sap.m.Text({ text: "{to_port}" }),
              new sap.m.Text({ text: "{distance}" })
            ],
          }),
        });
        // Bind the dialog to the view
        this.getView().addDependent(oDialog);
 
        // Open the dialog
        oDialog.open();
      },
 
 
 
 
      onValueHelp11:  function () {
        // Create a dialog
       
        var oDialog = new sap.m.Dialog({
          title: "Select: From Port",
          contentWidth: "60%",
          contentHeight: "60%",
          content: new sap.m.Table({
            mode: sap.m.ListMode.SingleSelectMaster,
 
            columns: [
              new sap.m.Column({
                header: new sap.m.Text({ text: "To Port" }),
              }),
              new sap.m.Column({
                header: new sap.m.Text({ text: "From Port" }),
              }), new sap.m.Column({
                header: new sap.m.Text({ text: "distance" }),
              })
            ],
 
            selectionChange: function (oEvent) {
              var oSelectedItem = oEvent.getParameter("listItem");
              var oSelectedValue = oSelectedItem.getCells()[1].getText();
              var inputVoyageType = this.getView().byId("field11");
              this.populateInputField(inputVoyageType, oSelectedValue);
              oDialog.close();
            }.bind(this),
          }),
          beginButton: new sap.m.Button({
            text: "Cancel",
            type: "Reject",
            press: function () {
              oDialog.close();
            },
          }),
 
        });
 
        let oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element
 
        oValueHelpTable.bindItems({
          path: "/ZBTP_NAUTICAL_MariDistance", // Replace with your entity set
          template: new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "{from_port}" }),
              new sap.m.Text({ text: "{to_port}" }),
              new sap.m.Text({ text: "{distance}" })
            ],
          }),
        });
        // Bind the dialog to the view
        this.getView().addDependent(oDialog);
 
        // Open the dialog
        oDialog.open();
      },
 
 
 
 
      onValueHelp1: function () {
        // Create a dialog
       
        var oDialog = new sap.m.Dialog({
          title: "Select: Port",
          contentWidth: "60%",
          contentHeight: "60%",
          content: new sap.m.Table({
            mode: sap.m.ListMode.SingleSelectMaster,
 
            columns: [
              new sap.m.Column({
                header: new sap.m.Text({ text: "To Port" }),
              }),
              new sap.m.Column({
                header: new sap.m.Text({ text: "From Port" }),
              }), new sap.m.Column({
                header: new sap.m.Text({ text: "distance" }),
              })
            ],
 
            selectionChange: function (oEvent) {
              var oSelectedItem = oEvent.getParameter("listItem");
              var oSelectedValue = oSelectedItem.getCells()[2].getText();
              var inputVoyageType = this.getView().byId("field22");
              this.populateInputField(inputVoyageType, oSelectedValue);
              oDialog.close();
            }.bind(this),
          }),
          beginButton: new sap.m.Button({
            text: "Cancel",
            type: "Reject",
            press: function () {
              oDialog.close();
            },
          }),
 
        });
 
        let oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element
 
        oValueHelpTable.bindItems({
          path: "/ZBTP_NAUTICAL_MariDistance", // Replace with your entity set
          template: new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "{from_port}" }),
              new sap.m.Text({ text: "{to_port}" }),
              new sap.m.Text({ text: "{distance}" })
            ],
          }),
        });
        // Bind the dialog to the view
        this.getView().addDependent(oDialog);
 
        // Open the dialog
        oDialog.open();
      },
 
 
 
 
 
 
 
 
      onValueHelp2: function () {
        // Create a dialog
       
        var oDialog = new sap.m.Dialog({
          title: "Select: Unit Of Measerment",
          contentWidth: "60%",
          contentHeight: "60%",
          content: new sap.m.Table({
            mode: sap.m.ListMode.SingleSelectMaster,
 
            columns: [
              new sap.m.Column({
                header: new sap.m.Text({ text: "UOM" }),
              }),
              new sap.m.Column({
                header: new sap.m.Text({ text: "UOMDES" }),
              })
            ],
 
            selectionChange: function (oEvent) {
              var oSelectedItem = oEvent.getParameter("listItem");
              var oSelectedValue = oSelectedItem.getCells()[0].getText();
              var inputVoyageType = this.getView().byId("field5");
              this.populateInputField(inputVoyageType, oSelectedValue);
              oDialog.close();
            }.bind(this),
          }),
          beginButton: new sap.m.Button({
            text: "Cancel",
            type: "Reject",
            press: function () {
              oDialog.close();
            },
          }),
 
        });
 
        let oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element
 
        oValueHelpTable.bindItems({
          path: "/NAVOYGUOM", // Replace with your entity set
          template: new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "{UOM}" }),
              new sap.m.Text({ text: "{UOMDES}" }),
             
            ],
          }),
        });
        // Bind the dialog to the view
        this.getView().addDependent(oDialog);
 
        // Open the dialog
        oDialog.open();
      },
      calculateVoyage:function(){
 
 
 
        // var portfrom =  this.getView().byId("BNAME").getValue();
        // var distance =  this.getView().byId("CODE").getValue();
        // var weather =  this.getView().byId("VALUE").getValue();
        // var cargo_size =  this.getView().byId("CVALUE").getValue();
        // var unit =  this.getView().byId("CUNIT").getValue();
        // var speed =  this.getView().byId("DATATYPE").getValue();
        // var sea_days =  this.getView().byId("TABLENAME").getValue();
        // var portdays =  this.getView().byId("TABLENAME").getValue();
        // var arrivaldate =  this.getView().byId("CUNIT").getValue();
        // var arrivaltime =  this.getView().byId("DATATYPE").getValue();
        // var departuredate =  this.getView().byId("TABLENAME").getValue();
        // var departuretime =  this.getView().byId("TABLENAME").getValue();
 
 
        var portfrom =  this.getView().byId("field1").getValue();
        var distance =  this.getView().byId("field2").getValue();
        var weather =  this.getView().byId("field3").getValue();
        var cargo_size =  this.getView().byId("field4").getValue();
        var unit =  this.getView().byId("field5").getValue();
        var speed =  this.getView().byId("field6").getValue();
        var sea_days =  this.getView().byId("field7").getValue();
        var portdays =  this.getView().byId("field8").getValue();
        var arrivaldate =  this.getView().byId("field9").getValue();
        var arrivaltime =  this.getView().byId("field10").getValue();
        var departuredate =  this.getView().byId("field11").getValue();
        var departuretime =  this.getView().byId("field12").getValue();
               
         
        var data = {
 
          BNAME: BNAME,
          CODE :CODE,
          VALUE: VALUE,
          CVALUE:CVALUE,
          CUNIT:CUNIT,  
          DATATYPE:DATATYPE,
          TABLENAME:TABLENAME,
          MULTI_CHOICE:MULTI_CHOICE
 
        };
       
        var JsonData = JSON.stringify(data)
        console.log(JsonData);
        let EndPoint = "/odata/v4/nautical/MAS";
        fetch(EndPoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JsonData
        })
          .then(function (res) {
           
            if (res.ok) {
              this.getView().getModel().refresh();
              console.log("Entity created successfully");
             
             
 
            }
            else {
              console.log("Failed");
             
            }
          })
          .catch(function (err) {
            console.log("error", err);
          })
      }
 
 
    });
  });