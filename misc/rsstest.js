const RSS_URL = `https://notinsanejustmad.tumblr.com/rss`;
cors: {
origin: [`https://notinsanejustmad.github.io`],
methods: `GET,HEAD,PUT,PATCH,DELETE`,
}
fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <article>
          el.querySelector("text")
        </article>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });
