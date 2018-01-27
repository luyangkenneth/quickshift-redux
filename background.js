chrome.commands.onCommand.addListener(function(command) {

  let numTabsInCurrentWindow;
  chrome.tabs.query({ currentWindow: true },
    function (tabs) { numTabsInCurrentWindow = tabs.length; }
  );

  switch (command) {
    case "move-tabs-left":
      processHighlightedTabs(function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
          shiftOneTabInDirection(tabs[i], -1);
        }
      });
      break;

    case "move-tabs-right":
      processHighlightedTabs(function (tabs) {
        for (let i = tabs.length - 1; i >= 0; i--) {
          shiftOneTabInDirection(tabs[i], 1);
        }
      });
      break;
  }

  function processHighlightedTabs(callback) {
    chrome.tabs.query({ currentWindow: true, highlighted: true }, callback);
  }

  function shiftOneTabInDirection(tab, direction) {
    let index = tab.index + direction;
    if (index >= numTabsInCurrentWindow) {
      index = numTabsInCurrentWindow - 1;
    } else if (index < 0) {
      index = 0;
    }

    chrome.tabs.move(tab.id, { index: index });
  }

});
