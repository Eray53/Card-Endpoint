function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let html = "";
      data.tailedBeasts.forEach((element) => {
        html += `<article class="characterCard">
                <div class="characterImage">
                  <img
                    src="${element.images[0]}"
                    alt="${element.name}"
                  />
                </div>
                <div class="characterInfo">
                  <div class="section">
                    <a
                      href="${element.images[0]}"
                      target="_blank"
                    >
                      <h2>${element.name}</h2>
                    </a>
                    <span class="status">
                      <span class="status-icon" style=background-color:${
                        element.personal.status === "Incapacitated"
                          ? "Grey"
                          : element.personal.status === "Deceased"
                          ? "Red"
                          : "Green"
                      }></span>
                      Tailed Beasts
                    </span>
                  </div>
                  <div class="section">
                    <span class="text-gray">Tailed Beasts Family:</span>
                    <a
                      href="${element.images[0]}"
                      target="_blank"
                      >${element.family.creator}</a
                    >
                  </div>
                  <div class="section">
                    <span class="text-gray">Jinchūriki</span>
                    <a
                      href="${element.images[0]}"
                      target="_blank"
                      >${element.personal.jinchūriki}</a
                    >
                  </div>
                </div>
              </article>`;
      });
      document.getElementById("container").innerHTML = html;
    })
    .catch((error) => console.log(error));
}

const urlPost = "https://narutodb.xyz/api/tailed-beast";

getData(urlPost);
