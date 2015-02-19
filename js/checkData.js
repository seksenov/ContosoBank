var checks = [
	{"checkNumber":1001, "amount":20.54, "date": "2/16/2015", "photo":"../images/check.jpg"},
	{"checkNumber":1002, "amount":120.13, "date": "2/17/2015", "photo":"../images/check.jpg"}
];

WinJS.Namespace.define("CheckData.ListView", {
    data: new WinJS.Binding.List(checks)
});
WinJS.UI.processAll();