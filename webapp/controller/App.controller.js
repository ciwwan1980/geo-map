
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel",
   "sap/ui/Device",
   "sap/m/MessageToast"
], function (Controller, JSONModel, Device, MessageToast) {
   "use strict";


   return Controller.extend("sap.ui.demo.controller.App", {

      onInit: function () {
         var oModel = new JSONModel("./Data.json");
         this.getView().setModel(oModel);
         // set the device model
         var oDeviceModel = new JSONModel(Device);
         oDeviceModel.setDefaultBindingMode("OneWay");
         this.getView().setModel(oDeviceModel, "device");
      },

      onClickItem: function (evt) {
         MessageToast.show("Here is onClick");
      },
      onPressResize: function () {
         if (this.byId("btnResize").getTooltip() == "Minimize") {
            if (sap.ui.Device.system.phone) {
               this.byId("vbi").minimize(132, 56, 1320, 560);// Height: 3,5 rem; Width: 8,25 rem
            } else {
               this.byId("vbi").minimize(168, 72, 1680, 720);// Height: 4,5 rem; Width: 10,5 rem
            }
            this.byId("btnResize").setTooltip("Maximize");
         } else {
            this.byId("vbi").maximize();
            this.byId("btnResize").setTooltip("Minimize");
			}
		},
	 
	});


}, );