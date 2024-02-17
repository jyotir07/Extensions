chrome.runtime.onMessage.addListener(function (message) {
  if (message.action === 'retrieveSongs') {
    chrome.tabs.create({ url: 'http://your-server-url' });
  }
});
