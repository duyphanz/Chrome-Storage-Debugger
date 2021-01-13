const styledLog = 'color: green; font-size: x-medium'

chrome.devtools.panels.create(
  "Storage Debugger",
  "MyPanelIcon.png",
  "Panel.html",
  function (panel) {
    chrome.devtools.inspectedWindow.eval(
      `chrome.storage.sync.get(null, function (result) {
         console.log('%c+ Current storage %o', 'color: green; font-weight: bold; font-size: x-medium', result);
      });`,
      function (result, isException) {
        console.error(isException)
      }
    );
    chrome.devtools.inspectedWindow.eval(
      `chrome.storage.onChanged.addListener((changes, areaName) => {
        const table = Object.keys(changes).map(key => {
          return {
            key,
            oldValue: changes[key].oldValue,
            newValue: changes[key].newValue,
          }
        })
        console.group();
          console.log('%c+ Changes on areaName: %s', 'color: green; font-weight: bold; font-size: x-medium', areaName);
          console.table(table)
          console.table(this)
        console.groupEnd();
      });`,
      function (result, isException) {
        console.error(isException)
      }
    );
  }
);

