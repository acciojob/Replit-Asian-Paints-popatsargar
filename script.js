//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

function resetGrid() {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
    });
}

changeBtn.addEventListener("click", () => {
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    resetGrid();

    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    }
});

resetBtn.addEventListener("click", resetGrid);
