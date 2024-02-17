let mouseData = [];

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "addMouseData") {
    mouseData.push(request.data);
  } else if (request.action === "getMouseData") {
    sendResponse(mouseData);
  }
});
