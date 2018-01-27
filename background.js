chrome.commands.onCommand.addListener(function(command) {

  let numTabsInCurrentWindow;
  chrome.tabs.query({ currentWindow: true },
    function (tabs) { numTabsInCurrentWindow = tabs.length; }
  );

  switch (command) {
    case "shift-tabs-left":
      chrome.tabs.query({ currentWindow: true, highlighted: true },
        function (tabs) {
          for (let i = 0; i < tabs.length; i++) {
            shiftOneTabInDirection(tabs[i], -1);
          }
        }
      );
      break;

    case "shift-tabs-right":
      chrome.tabs.query({ currentWindow: true, highlighted: true },
        function (tabs) {
          for (let i = tabs.length - 1; i >= 0; i--) {
            shiftOneTabInDirection(tabs[i], 1);
          }
        }
      );
      break;
  }

  function shiftOneTabInDirection(tab, direction) {
    let index = tab.index + direction;
    if (index >= numTabsInCurrentWindow) index = 0;

    chrome.tabs.move(tab.id, { index: index });
  }

});
