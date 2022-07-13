const form = document.querySelector("#searchForm");
const imagesDiv = document.querySelector("#images");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  clearImages();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  displayImages(res.data);
  form.elements.query.value = "";
});

function displayImages(shows) {
  for (let result of shows) {
    if (result.show.image) {
      console.log(result.show);

      const a = document.createElement("a");
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      a.append(img);
      imagesDiv.append(a);
      a.href = result.show.url;
    }
  }
}

function clearImages() {
  imagesDiv.innerHTML = "";
}
