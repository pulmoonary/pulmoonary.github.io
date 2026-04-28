const tiles = document.querySelectorAll(".tile");
const container = document.getElementById("tiles");

let draggedTile = null;

tiles.forEach(tile => {
  tile.addEventListener("dragstart", () => {
    draggedTile = tile;
  });

  tile.addEventListener("dragover", e => {
    e.preventDefault();
  });

  tile.addEventListener("drop", () => {
    if (draggedTile !== tile) {
      let temp = tile.innerHTML;
      tile.innerHTML = draggedTile.innerHTML;
      draggedTile.innerHTML = temp;
    }
  });
});

function checkOrder() {
  const correct = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5"
  ];

  const current = [...document.querySelectorAll(".tile")]
    .map(tile => tile.innerHTML);

  const result = document.getElementById("result");

  if (JSON.stringify(correct) === JSON.stringify(current)) {
    result.innerHTML = "✅ Correct!";
  } else {
    result.innerHTML = "❌ Try Again!";
  }
}