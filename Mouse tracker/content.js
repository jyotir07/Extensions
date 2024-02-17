document.addEventListener("mousemove", function (e) {
  const data = {
    x: e.clientX,
    y: e.clientY,
    timestamp: Date.now(),
  };

  chrome.runtime.sendMessage({ action: "addMouseData", data });
});
