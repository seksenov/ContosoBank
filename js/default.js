var splitView;
WinJS.UI.processAll().then(function () {
    splitView = document.getElementById("rootSplitView").winControl;
    loadFragment("pages/AccountBalances.html");
});

function loadFragment(fragmentDir) {
    WinJS.Utilities.empty(splitView.contentElement);
    WinJS.UI.Fragments.renderCopy(fragmentDir, splitView.contentElement).done(function () {
        WinJS.UI.processAll(splitView.contentElement);
    });
}

/* Responsive Design Config
* 1366+ px wide:
*   - SplitView: Inline mode, peek pane 48px
*   - AppBar: top
* 800px to 1365px wide
*   - SplitView: Overlay mode, peek pane 48px
*   - AppBar: top
* 0px to 799px wide
*   - SplitView: Overlay mode, peek pane 0px 
*   - AppBar: bottom
*/
var WidthMode = {
    big: "big",
    medium: "medium",
    small: "small"
};
var mode;
function onResize() {
    var width = window.innerWidth;
    if (width >= 1366) {
        newMode = WidthMode.big;
    } else if (width >= 800) {
        newMode = WidthMode.medium;
    } else {
        newMode = WidthMode.small;
    }

    var splitView = document.getElementById("rootSplitView").winControl;
    if (mode !== newMode) {
        splitView.hiddenDisplayMode = newMode === WidthMode.small ?
            WinJS.UI.SplitView.HiddenDisplayMode.none :
            WinJS.UI.SplitView.HiddenDisplayMode.inline;
        splitView.shownDisplayMode = newMode === WidthMode.big ?
            WinJS.UI.SplitView.ShownDisplayMode.inline :
            WinJS.UI.SplitView.ShownDisplayMode.overlay;

        mode = newMode;
    }
}

window.addEventListener("resize", onResize);
