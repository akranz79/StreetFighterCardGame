function loader() { const e = document.createElement("script"); e.setAttribute("src", "./src/home.js"); let t = document.getElementById("loader"), n = document.getElementById("percent"); n.innerText = "0%"; let r = 0; const c = setInterval((function () { r <= 100 ? (t.style.width = `${r}%`, n.innerText = `${r}%`, r += 1) : (clearInterval(c), fetch("./pages/home.html").then((e => e.text())).then((e => app.innerHTML = e)), setTimeout((() => app.appendChild(e)), 1e3)) }), 40) } loader();