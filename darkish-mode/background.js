'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#6699cc'}, function() {
        console.log("This is your color now.");
    })
})