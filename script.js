// Comment form
const form = document.getElementById("comment-form");
const list = document.getElementById("comment-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  const item = document.createElement("li");
  item.className = "comment-item";

  const author = document.createElement("p");
  author.className = "comment-author";
  author.textContent = document.getElementById("comment-name").value;

  const date = document.createElement("p");
  date.className = "comment-date";
  date.textContent = "Just now";

  const body = document.createElement("p");
  body.className = "comment-body";
  body.textContent = document.getElementById("comment-text").value;

  item.append(author, date, body);
  list.append(item);
  document.getElementById("comment-count").textContent = list.children.length;

  form.reset();
  form.classList.remove("was-validated");
});
