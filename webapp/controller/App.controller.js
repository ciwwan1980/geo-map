
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(Controller, JSONModel, Device) {
	"use strict";


	return Controller.extend("sap.ui.demo.controller.App", {

		onInit: function() {
			// set the device model
			// var oDeviceModel = new JSONModel(Device);
			// oDeviceModel.setDefaultBindingMode("OneWay");
			// this.getView().setModel(oDeviceModel, "device");
		},
	onClickSpot: function(evt) {
			MessageToast.show("onClickSpot " + evt.getSource().getBindingContext().getProperty("tooltip"));
		},

      // onPressLegend: function() {
		// 	if (this.byId("vbi").getLegendVisible() == true) {
		// 		this.byId("vbi").setLegendVisible(false);
		// 		this.byId("btnLegend").setTooltip("Show legend");
		// 	} else {
		// 		this.byId("vbi").setLegendVisible(true);
		// 		this.byId("btnLegend").setTooltip("Hide legend");
		// 	}
		// },


      

	});

   

});



// sap.ui.define([
// 	"sap/ui/core/mvc/Controller"
// ], function (Controller) {
// 	"use strict";
// 	var URL_GOOGLE_MAP_API_URL = "https://mt.google.com/vt/lyrs=m&x={X}&y={Y}&z={LOD}";
// 	return Controller.extend("sap.ui.demo.controller.App",{
// 		onInit: function () {
// 			var oGeoMap = this.getView().byId("GeoMap");
// 			var oMapConfig = {
// 				"MapProvider": [{
// 					"name": "GMAP",
// 					"type": "",
// 					"description": "Hello",
// 					"tileX": "10",
// 					"tileY": "256",
// 					"maxLOD": "30",
// 					"copyright": "Tiles Courtesy of Google Maps",
// 					"Source": [{
// 						"id": "s1",
// 						"url": URL_GOOGLE_MAP_API_URL
// 					}]
// 				}],
// 				"MapLayerStacks": [{
// 					"name": "GOOGLE",
// 					"MapLayer": {
// 						"name": "layer2",
// 						"refMapProvider": "GMAP",
// 						"opacity": "6.0",
// 						"colBkgnd": "RGB(255,255,255)"
// 					}
// 				}]
// 			};


// 			var geojsonFeature = {


// 				"type": "Feature",
// 				"geometry": {
// 					"type": "Point",
// 					"coordinates": [125.6, 10.1]
// 				},
// 				"properties": {
// 					"name": "Dinagat Islands"
// 				}


// 			};
// 			oGeoMap.addGeoJsonLayer(new sap.ui.vbm.GeoJsonLayer({
// 				data: geojsonFeature,
// 				defaultFillColor: "rgba(186, 193, 196, 0.5)",
// 				defaultBorderColor: "rgba(255, 255, 255, 1.0)",
// 				defaultLineWidth: 5
// 			}));
// 			oGeoMap.setMapConfiguration(oMapConfig);
// 			oGeoMap.setRefMapLayerStack("GOOGLE");
// 		}
// 	});
// });