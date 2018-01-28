# QuickShift Redux

Rearranging Chrome tabs with the usual drag-and-drop method is an annoying and laggy affair. When you move your mouse cursor across the tab bar, you might accidentally undock the tab and create a new browser window. Having many tabs open also forces you to be really precise with your click-and-drag motion.

To scratch my own itch, I decided to build an extension to easily and quickly rearrange Chrome tabs with keyboard shortcuts. Read on and try it for yourself! :left_right_arrow:


## Getting Started :rocket:

Simply install [QuickShift Redux](https://chrome.google.com/webstore/detail/quickshift/daiohbdbfnmpbolhbpbngdjdjcbclikm/) from the Chrome Web Store. And you're done! :tada:

> Note: Rearranging tabs in Chrome does not require any special browser permissions. Unlike some other similar extensions out there, QuickShift Redux does not unnecessarily ask you for those permissions!


## Features :sparkles:

- Move the current tab to the left or right within the same window, with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>
  - If you're so inclined, you can also select multiple tabs and move them all at once

- Undock tabs to a new window, with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd>

- Move tabs between windows, with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>

> Note: If you're using a Mac and want to _resize_ your windows (not just Chrome windows) with keyboard shortcuts, [Spectacle](https://www.spectacleapp.com) is a great app for that. If you're on Windows, you can use the existing shortcuts: <kbd>Win</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>/<kbd>Up</kbd>. With these in mind, QuickShift Redux will only deal with the _rearranging_ of Chrome tabs.


## Customizing Keyboard Shortcuts :keyboard:

1. Navigate to `chrome://extensions` from your address bar
2. Scroll all the way down and click on `Keyboard Shortcuts`
3. Look for `QuickShift Redux` and customize your shortcuts accordingly!


## Future Development :hammer_and_wrench:
- Move tabs to a specific position e.g. <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>1</kbd> through <kbd>9</kbd>
- Merge all tabs into a single window


## Acknowledgements :raised_hands:

Credits to [Nick Spreitzer](https://github.com/refactorsaurusrex/QuickShiftForChrome) for the original name and idea. I didn't refer to his old code, but decided to adopt the name so that anyone looking for [the](https://lifehacker.com/5642713/quickshift-moves-tabs-between-chrome-windows-via-keyboard-shortcuts) [original](http://www.callingallgeeks.org/quickshift-for-google-chrome-makes-browsing-easier-faster/) [extension](http://www.addictivetips.com/internet-tips/add-customizable-keyboard-shortcuts-with-quickshift-for-chrome/) can easily find this redux version.
