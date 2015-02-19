var checks = [
	{"checkNumber":1001, "amount":20.54, "date": "2/16/2015", "photo":"../images/check.jpg"},
	{"checkNumber":1002, "amount":120.13, "date": "2/17/2015", "photo":"../images/check.jpg"}
];

//Show the flyout
function showChecksFlyout(eventInfo) {
    var listview = eventInfo.srcElement.WinControl;
    var image = listview.elementFromIndex(eventInfo.detail.itemIndex);
    document.getElementById("checkFlyout").winControl.show(image);
}

WinJS.Namespace.define("CheckData.ListView", {
    data: new WinJS.Binding.List(checks),    
    showChecksFlyout: WinJS.Utilities.markSupportedForProcessing(showChecksFlyout)
});
WinJS.UI.processAll();