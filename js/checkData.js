var checks = [
	{"checkNumber":1001, "amount":20.54, "date": "2/16/2015", "photo":"../images/check.jpg"},
	{"checkNumber":1002, "amount":120.13, "date": "2/17/2015", "photo":"../images/check.jpg"}
];

//Show the flyout
function showChecksFlyout(eventInfo) {
    var image = document.getElementById(eventInfo.detail.itemIndex);
    document.getElementById("checkFlyout").winControl.show(image);
}

WinJS.Namespace.define("CheckData.ListView", {
    data: new WinJS.Binding.List(checks),    
    showChecksFlyout: showChecksFlyout
});
WinJS.UI.processAll();