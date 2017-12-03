/**
 * Copyright (c) 2011 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */


var speakKeyStr;

function speakSelection() {
  var focused = document.activeElement;
  var selectedText;
  if (focused) {
    try {
      selectedText = focused.value.substring(
          focused.selectionStart, focused.selectionEnd);
    } catch (err) {
    }
  }
  if (selectedText == undefined) {
    var sel = window.getSelection();
    var selectedText = sel.toString();
  }

  // when the extension is clicked
  var xhr = new XMLHttpRequest();

 xhr.open("GET", "http://localhost:3000/click_button/" + selectedText, false);
 xhr.send();

var result = xhr.responseText;

console.log(xhr.responseText)

 // here they click a button, xhr.responseText = some text we are using input.

  chrome.extension.sendRequest({'speak': selectedText});

  // where this points i need to go
}

function onExtensionMessage(request) {

  // gets passed {'init': true} from
  // chrome.extension.sendRequest({'init': true}, onExtensionMessage);
  if (request['speakSelection'] != undefined) {
    
    if (!document.hasFocus()) {
      
      // request = speakSelection: true
      // request['speakSelection'] returns true when somethign is selected
      // it is saying something
      return;
    }
    // here is where its ran when somethign is highlighted
    speakSelection();
  } else 
    if (request['key'] != undefined) {
      speakKeyStr = request['key'];
      console.log('th', request)
      // page has loaded
      // or not talking
  }
}

function initContentScript() {
  chrome.extension.onRequest.addListener(onExtensionMessage);
  chrome.extension.sendRequest({'init': true}, onExtensionMessage);
  // the page has loaded  

  document.addEventListener('keydown', function(evt) {
    if (!document.hasFocus()) {
      return true;
    }
    var keyStr = keyEventToString(evt);
    if (keyStr == speakKeyStr && speakKeyStr.length > 0) {
      speakSelection();
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }, false);
}

initContentScript();
