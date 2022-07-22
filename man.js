cnv = document.getElementById("mycanvas");
ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// makes array for objects
let blocks = createrandomblocksarray(2);

requestAnimationFrame(draw);

// Main loop

function draw() {
  backround("black");

  for (let p = 0; p < blocks.length; p++) {
    drawblocks(blocks[p]);
    moveblocks(blocks[p]);

    if (blocks[p].y >= cnv.height) {
      blocks[p].y = -5;
    }
  }

  requestAnimationFrame(draw);
}

// removes or adds a blocks particle via a up and down keys
