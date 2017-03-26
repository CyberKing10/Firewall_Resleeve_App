// To import the "ui/frame" module:
var frameModule = require("ui/frame");

function onNavBtnTap() {
    // This code will be called only in Android.
    console.log("Navigation button tapped!");
    var topmost = frameModule.topmost();
    topmost.goBack();
}
exports.onNavBtnTap = onNavBtnTap;
 
exports.enter_storyline_settings = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/gamemaster/storyline_settings");
};
