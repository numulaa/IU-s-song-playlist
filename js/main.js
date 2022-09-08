document.querySelector("#clickMe").addEventListener("click", makeReq);

async function makeReq() {
  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?album=${userName}`);
  const data = await res.json();

  console.log(data);
  for (let i = 0; i < data.detail.length; i++) {
    // let songTitle = document.querySelector("#personName").innerText;
    // songTitle = data.detail[i].title;
    // let videoLink = document.querySelector("#videoLink").src;
    // videoLink = data.detail[i].videoLink;
    let url = data.detail[i].videoLink;
    let newUrl = url.replace("watch?v=", "embed/", url);
    document.querySelector("#after-container").insertAdjacentHTML(
      "afterend",
      `<div>
      <h2 id="personName">${data.detail[i].title.toUpperCase()}</h2>
    <iframe src="${newUrl}" title="video place" allowfullscreen></iframe>
    </div>`
    );
  }
}
