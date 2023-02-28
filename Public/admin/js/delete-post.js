{
  let articlesBlock = document.querySelector(".articles-list");
  // e stands for Event
  articlesBlock.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
      let id = e.target.parentNode.parentNode.querySelector(".id").value;

      fetch("http://localhost:3000/posts/" + id, {
        method: "DELETE",
      })
        .then((response) => response.text())
        .then(() => window.history.go());
    }
  });
}
