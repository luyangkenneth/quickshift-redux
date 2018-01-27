# QuickShift Redux

Rearranging Chrome tabs with the usual drag-and-drop method is an annoying and laggy affair. When you move your mouse cursor across the tab bar, you might accidentally undock the tab and create a new browser window. Having many tabs open also forces you to be really precise with your click-and-drag motion.

To scratch my own itch, I decided to build [QuickShift Redux](https://chrome.google.com/webstore/detail/quickshift/daiohbdbfnmpbolhbpbngdjdjcbclikm/), a Chrome extension that lets you easily and quickly rearrange tabs with keyboard shortcuts. Read on and try it for yourself! :left_right_arrow:


## Getting Started

1. Install [QuickShift Redux](https://chrome.google.com/webstore/detail/quickshift/daiohbdbfnmpbolhbpbngdjdjcbclikm/) from the Chrome Web Store.

2. That's it, you're done! :tada: Now you can rearrange your Chrome tabs with the keyboard shortcuts `Ctrl + Shift + Left` and `Ctrl + Shift + Right`. You know, like, _controlling_ where to _shift_ your tabs? :smirk:

> Note: Rearranging tabs in Chrome does not require any special browser permissions. Unlike other similar extensions out there, QuickShift Redux does not unnecessarily ask you for those permissions!


## Features

- Move the current tab to the left or right, within the same window.
  - If you're so inclined, you can also select multiple tabs and move them all at once.

This seems really sparse at the moment, but I wanted to just get this out there and ship a simple yet functional first iteration. More features to come!


## Future Development
- Allow for customization of shortcuts
- Move tabs to a specific position e.g. `Ctrl + Shift + 1` through `9`
- Move tabs between windows
- Merge all tabs into a single window

> Note: If you're using a Mac and want to _resize_ your windows (not just Chrome windows) with keyboard shortcuts, try [Spectacle](https://www.spectacleapp.com). If you're on Windows, you can use the existing shortcuts: `Win + Left/Right/Up`. With these in mind, QuickShift Redux will only deal with the _rearranging_ of Chrome tabs.


## Acknowledgements

Credits to [Nick Spreitzer](https://github.com/refactorsaurusrex/QuickShiftForChrome) for the original name and idea. I didn't refer to his old code, but decided to adopt the name so that anyone looking for [the](https://lifehacker.com/5642713/quickshift-moves-tabs-between-chrome-windows-via-keyboard-shortcuts) [original](http://www.callingallgeeks.org/quickshift-for-google-chrome-makes-browsing-easier-faster/) [extension](http://www.addictivetips.com/internet-tips/add-customizable-keyboard-shortcuts-with-quickshift-for-chrome/) can easily find this redux version.
