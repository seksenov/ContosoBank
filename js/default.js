WinJS.UI.processAll().done(function() {


function loadFragment(fragmentDir, fragmentDiv) {

  WinJS.UI.Fragments.renderCopy(fragmentDir, fragmentDiv)
    .done(
        function() {
          console.log("successfully loaded fragment");
        },
        function(error) {
          console.log(error);
        }
    );

}

var checksCashedFragment = document.getElementById('checksCashedFragment');

loadFragment('/pages/ChecksCashed.html', checksCashedFragment);

});

(function () {
    WinJS.UI.processAll();

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
})();