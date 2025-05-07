fetch(`https://notinsanejustmad.tumblr.com/rss`)
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
