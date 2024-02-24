chrome.commands.onCommand.addListener(function(command) {

  let numTabsInCurrentWindow;
  chrome.tabs.query({ currentWindow: true },
    function (tabs) { numTabsInCurrentWindow = tabs.length; }
  );

  switch (command) {
    case "move-tabs-left":
      processHighlightedTabs(function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
          moveOneTabInDirection(tabs[i], -1);
        }
      });
      break;

    case "move-tabs-right":
      processHighlightedTabs(function (tabs) {
        for (let i = tabs.length - 1; i >= 0; i--) {
          moveOneTabInDirection(tabs[i], 1);
        }
      });
      break;

    case "undock-tabs-to-new-window":
      let activeTab;
      chrome.tabs.query({ currentWindow: true, active: true },
        function (tabs) { activeTab = tabs[0]; }
      );

      processHighlightedTabs(function (tabs) {
        chrome.windows.create({ tabId: tabs[0].id }, function (window) {
          tabs.shift();
          if (tabs.length > 0) {
            chrome.tabs.move(tabs.map(tab => tab.id), { windowId: window.id, index: 1 });
            chrome.tabs.update(activeTab.id, { active: true });
          }
        });
      });
      break;

    case "move-tabs-between-windows":
      chrome.windows.getAll({ populate: true },
        function (windows) {
          if (windows.length < 2) return;

          chrome.windows.getCurrent(
            function (currentWindow) {
              let nextWindowIndex = windows.map(window => window.id).indexOf(currentWindow.id) + 1;
              if (nextWindowIndex >= windows.length) nextWindowIndex = 0;
              let nextWindow = windows[nextWindowIndex];

              processHighlightedTabs(function (tabs) {
                chrome.tabs.query({ currentWindow: true, active: true },
                  function (activeTabs) {
                    let activeTab = activeTabs[0];
                    chrome.tabs.move(tabs.map(tab => tab.id), { windowId: nextWindow.id, index: nextWindow.tabs.length });
                    chrome.tabs.update(activeTab.id, { active: true });
                    chrome.windows.update(nextWindow.id, { focused: true });
                  }
                );
              });
            }
          );
        }
      );
      break;
  }

  function processHighlightedTabs(callback) {
    chrome.tabs.query({ currentWindow: true, highlighted: true }, callback);
  }

  function moveOneTabInDirection(tab, direction) {
    let index = tab.index + direction;
    if (index >= numTabsInCurrentWindow) {
      index = numTabsInCurrentWindow - 1;
    } else if (index < 0) {
      index = 0;
    }

    chrome.tabs.move(tab.id, { index: index });
  }

});
