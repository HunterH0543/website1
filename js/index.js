const link = document.getElementById("link");

link.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "purple";

      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 1000);
    },
    false,
  );