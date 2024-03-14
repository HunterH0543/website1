const link = document.getElementById("link");

link.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "purple";
    },
    false,
  );
  Result