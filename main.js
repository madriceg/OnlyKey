chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
      "Only.html", {
        innerBounds: { width: 1060, height: 840, minWidth: 1060 }
      });
});
