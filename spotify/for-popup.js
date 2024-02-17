document.getElementById('retrieve-songs').addEventListener('click', function () {
  chrome.runtime.sendMessage({ action: 'retrieveSongs' });
});