chrome.commands.onCommand.addListener(function(command) {

  var numTabsInCurrentWindow;
  chrome.tabs.query({ currentWindow: true },
    function (tabs) { numTabsInCurrentWindow = tabs.length; }
  );

  switch (command) {
    case "shift-tabs-left":
      chrome.tabs.query({ currentWindow: true, highlighted: true },
        function (tabs) {
          for (var i = 0; i < tabs.length; i++) {
            shiftOneTabInDirection(tabs[i], -1);
          }
        }
      );
      break;

    case "shift-tabs-right":
      chrome.tabs.query({ currentWindow: true, highlighted: true },
        function (tabs) {
          for (var i = tabs.length - 1; i >= 0; i--) {
            shiftOneTabInDirection(tabs[i], 1);
          }
        }
      );
      break;

	case "move-tabs-to-next-win":
	  chrome.windows.getAll( {windowTypes: ["normal"], populate: true }, 
		function(wins) {
		  var nextWinID=chrome.windows.WINDOW_ID_CURRENT;
		  var nextWinTabCnt=0;

		  for( var i=0; i< wins.length; i++) {
			console.log(wins[i]);
			if (wins[i].focused) {
				//found the current focus window. So, get next window info
				nextWinID = wins[(i+1)%wins.length].id;
				nextWinTabCnt = wins[(i+1)%wins.length].tabs.length;
				break;
			}
		  }

		  if (nextWinID===chrome.windows.WINDOW_ID_CURRENT)
			  return;
		  chrome.windows.update(nextWinID, {focused:true});
		  chrome.tabs.query({ currentWindow: true, highlighted: true },
			function (tabs) {
			  for (var j = 0; j < tabs.length; j++) {
			    chrome.tabs.move(tabs[j].id, {index: -1, windowId: nextWinID});
			    chrome.tabs.highlight({tabs: [nextWinTabCnt], windowId: nextWinID});
			  }
			}
		  );
		}
	  );
      break;
  }

  function shiftOneTabInDirection(tab, direction) {
    var index = tab.index + direction;
    if (index >= numTabsInCurrentWindow) index = 0;

    chrome.tabs.move(tab.id, { index: index });
  }

});
