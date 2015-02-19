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
