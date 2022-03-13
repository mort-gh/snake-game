function initializeCanvas() {
  for (let top = 0; top < ROWS; top += 1) {
    for (let left = 0; left < COLS; left += 1) {
      const pixel = document.createElement("div");

      pixel.style.position = "absolute";
      pixel.style.border = "0.5px solid darkolivegreen";
      pixel.style.left = left * PIXEL + "px";
      pixel.style.top = top * PIXEL + "px";
      pixel.style.width = PIXEL + "px";
      pixel.style.height = PIXEL + "px";

      const key = toKey([top, left]);

      canvas.appendChild(pixel);
      pixels.set(key, pixel);
    }
  }
}

function drawCanvas() {
  for (let top = 0; top < ROWS; top += 1) {
    for (let left = 0; left < COLS; left += 1) {
      const key = toKey([top, left]);
      const pixel = pixels.get(key);
      let background = "#529752";

      if (key === currentFoodKey) {
        background = "orangered";
        pixel.style.borderRadius = "50%";
      } else if (currentSnakeKeys.has(key)) {
        const transformSet = [...currentSnakeKeys];
        const head = transformSet[transformSet.length - 1];

        pixel.style.borderRadius = "3px";

        if (key === head) {
          background = "#fff";
          pixel.style.borderRadius = "50%";
        } else {
          background = "#315831";
        }
      } else {
        pixel.style.borderRadius = "0";
      }

      pixel.style.background = background;
    }
  }
}