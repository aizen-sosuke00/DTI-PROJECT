const books = [
  {
    title: "The Name Of The Wind",
    genre: "fiction",
    cover: "f1.con.jpg",
    preview: "f1.con.pdf"
  },
  {
    title: "Bottle of Lies",
    genre: "science",
    cover: "bottle of lies.jpg",
    preview: "bottle of lies.pdf"
  },
  {
    title: "A Brief History of Time",
    genre: "science",
    cover: "a brief history of time.jpg",
    preview: "a brief history of time.pdf"
  },
    {
    title: "Infinite powers",
    genre: "science",
    cover: "infinite powers.webp",
    preview: "infinite powers.pdf"
  },
  {
    title: "Quiet Power",
    genre: "nonfiction",
    cover: "quiet power.jpeg",
    preview: "quiet power content.pdf"
  },
   {
    title: "The Dairy Of A Young Girl",
    genre: "nonfiction",
    cover: "the diary of an young girl.jpg",
    preview: "diary of a young girl.pdf"
  },
   {
    title: "Sapiens A Brief History About Human Kind",
    genre: "nonfiction",
    cover: "sapiens a brief history about human kind.jpg",
    preview: "sapiens a brief history about human kind.pdf"
  },
   {
    title: "Harry Potter",
    genre: "fiction",
    cover: "harrypotter.webp",
    preview: "harrypotter.pdf"
  },
   {
    title: "The HandMaid's Tale",
    genre: "fiction",
    cover: "handmaid.jpg",
    preview: "handmaid.pdf"
  },


];

function filterBooks(genre) {
  const container = document.getElementById("booksContainer");
  container.innerHTML = "";
  const filtered = books.filter(book => book.genre === genre);
  if (filtered.length === 0) {
    container.innerHTML = "<p>No books available in this category.</p>";
    return;
  }
  filtered.forEach(book => {
    const bookEl = document.createElement("div");
    bookEl.className = "book";
    const img = document.createElement("img");
    img.src = book.cover;
    img.alt = book.title;
    img.onclick = () => window.open(book.preview, "_blank");
    const title = document.createElement("p");
    title.textContent = book.title;
    bookEl.appendChild(img);
    bookEl.appendChild(title);
    container.appendChild(bookEl);
  });
}
