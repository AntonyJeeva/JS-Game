document.addEventListener("DOMContentLoaded", function(event) {
  const player = document.getElementById("player");
  const target = document.getElementById("target");
  let score = 0;

  // Move the player left or right
  document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
          player.style.left = parseInt(player.style.left) - 10 + "px";
      } else if (event.key === "ArrowRight") {
          player.style.left = parseInt(player.style.left) + 10 + "px";
      }
  });

  // Check if the player catches the falling target
  setInterval(function() {
      const playerRect = player.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      if (playerRect.left < targetRect.right &&
          playerRect.right > targetRect.left &&
          playerRect.top < targetRect.bottom &&
          playerRect.bottom > targetRect.top) {
          score++;
          target.style.top = "0";
          target.style.left = Math.random() * (400 - 30) + "px";
      }

      document.getElementById("score").innerHTML = "Score: " + score;
  }, 10);
});
