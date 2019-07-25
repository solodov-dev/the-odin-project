function genGrid(size) {
  const pixelSize = Math.round(560 / size);
  const container = document.querySelector("#container");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");

    row.style.height = `${pixelSize}px`;

    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.style.backgroundColor = "magenta";
      cell.style.display = "inline-block";
      cell.style.height = `${pixelSize}px`;
      cell.style.width = `${pixelSize}px`;
      cell.style.padding = "0";
      cell.style.margin = "0";
      row.appendChild(cell);
    }

    container.appendChild(row);
  }

  const divs = document.querySelectorAll(".cell");
  divs.forEach(div =>
    div.addEventListener("mouseenter", function(e) {
      e.target.style.backgroundColor = "black";
    })
  );
}

function refreshGrid() {
  let size = prompt("Please ander the number of pixels", "16");
  if (size == null || size == "" || size > 550) return;
  genGrid(size);
}

genGrid(16);
