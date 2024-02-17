document.addEventListener("DOMContentLoaded", function () {
  const generateGraphButton = document.getElementById("generateGraph");
  const mouseGraphCanvas = document.getElementById("mouseGraph");
  const errorDisplay = document.getElementById("errorDisplay");
  const ctx = mouseGraphCanvas.getContext("2d");

  generateGraphButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "getMouseData" }, function (data) {
      if (chrome.runtime.lastError) {
        handleError("Error communicating with the background script.");
      } else {
        drawMouseGraph(data);
      }
    });
  });

  function drawMouseGraph(data) {
    ctx.clearRect(0, 0, mouseGraphCanvas.width, mouseGraphCanvas.height);

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.beginPath();

    // Start the path at the first data point
    ctx.moveTo(data[0].x, data[0].y);

    // Loop through the data points and draw lines between them
    for (let i = 1; i < data.length; i++) {
      ctx.lineTo(data[i].x, data[i].y);
    }

    // Stroke the path to draw the graph
    ctx.stroke();
  }

  function handleError(message) {
    errorDisplay.textContent = message;
  }
});
