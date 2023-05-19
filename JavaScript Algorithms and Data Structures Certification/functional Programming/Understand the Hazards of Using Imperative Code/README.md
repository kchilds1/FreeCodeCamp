# Objective
Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

Change Window.prototype.tabClose so that it removes the correct tab.

# Steps
- first I looked at the console.log(finalTabs.tabs) and saw that Vine and Work mail were missing.
- Next I look at how browser windows were created and console log variables to make sure const is correct.
- console.log(this.tabs) before creating variable tabsBeforeIndex and had [ 'Netflix', 'YouTube', 'Vimeo', 'Vine' ] [ 'GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp' ]
- console.log(tabsBeforeIndex) and noticed that Vine was missing.  The splice method was mutating the original array. The second call to it was calling a modified array.
- I replaced this.tabs.splice(0, index); for this.tabs.slice(0, index)