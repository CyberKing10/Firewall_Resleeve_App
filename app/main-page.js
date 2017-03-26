var frameModule = require("ui/frame");

exports.pageLoaded = function() {

};

exports.enter_gamemaster = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/gamemaster/gamemaster_menu");
};

exports.enter_player = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/player/player_menu");
}; 

exports.enter_about = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/about/about");
}; 

