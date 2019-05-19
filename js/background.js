
chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {
    chrome.tabs.executeScript(details.tabId, {file: "js/content.js", runAt: 'document_end'});
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.sendMessage(tab.id, {method: "addButton"}, function (response) {
    });
});
