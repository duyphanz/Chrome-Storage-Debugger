chrome.devtools.panels.create(
  "Storage Debugger",
  "MyPanelIcon.png",
  "Panel.html",
  function (panel) {
    // code invoked on panel creation
    // chrome.storage.onChanged.addListener((changes, areaName) => {alert(areaName)});
    window.myVarzz = null;
    chrome.devtools.inspectedWindow.eval(
      `chrome.storage.onChanged.addListener((changes, areaName) => {
        console.log('changes', changes);
        console.log('areaName', areaName);
      });`,
      function (result, isException) {
        console.log(
          "🚀 ~ file: script.js ~ line 16 ~ isExceptionz",
          isException
        );
      }
    );
    chrome.devtools.inspectedWindow.eval(
      `chrome.storage.sync.get(null, function (result) {
        window.myVarzz = result
      });`,
      function (result, isException) {
        console.log(
          "🚀 ~ file: script.js ~ line 16 ~ isException",
          isException
        );
      }
    );
  }
);
