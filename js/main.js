let boxes = document.querySelectorAll(".our-work .box");
let lis = document.querySelectorAll(".our-work ul li");

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.contains("active") ? li.classList.remove("active") : "";
    });
    e.target.classList.add("active");
    boxes.forEach((box) => {
      box.parentElement.style.display = "none";
    });
    document
      .querySelectorAll(`.our-work .box.${e.target.dataset.li}`)
      .forEach((img) => {
        img.parentElement.style.display = "block";
      });
  });
});
