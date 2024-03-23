function home() { 
  const e = document.getElementById("play-now"), 
  t = document.getElementById("rules"), 
  n = document.getElementById("about"), 
  a = document.getElementById("leaderboards"), 
  i = document.getElementById("close"), 
  o = document.createElement("script"); 
  let r; 
  o.setAttribute("src", "./src/game.js"); 
  const s = document.querySelector(".char-1"), 
  c = document.querySelector(".char-2"), 
  l = [...characters], [d] = l.splice(Math.floor(Math.random() * l.length), 1), [h] = l.splice(Math.floor(Math.random() * characters.length), 1), 
  p = document.getElementById("modal"), 
  m = document.getElementById("modal-area"), 
  u = document.getElementById("modal-title"), 
  y = document.getElementById("modal-content"); 
  t.onclick = e => { e.preventDefault(); 
    p.style.opacity = "1"; 
    p.style.visibility = "visible"; 
    m.style.top = "15%"; 
    u.innerText = "Rules"; 
    fetch("../pages/rules_content.html").then(response => response.text()).then(data => {
      y.innerHTML = data;
    });
  }; 
  n.onclick = e => { 
    e.preventDefault(); 
    p.style.opacity = "1"; 
    p.style.visibility = "visible"; 
    m.style.top = "20%"; 
    u.innerText = "About"; 
    fetch("../pages/about_content.html").then(response => response.text()).then(data => {
        y.innerHTML = data;
    }); 
};

  a.onclick = e => { 
    e.preventDefault(); 
    const t = document.createElement("div"); 
    leaders.forEach((e => { 
      const n = document.createElement("div"); 
      n.setAttribute("id", "leaderItem"); 
      const a = document.createElement("span"); 
      a.innerText = "//" + e.name; 
      const i = document.createElement("span"); 
      i.innerText = e.time; 
      n.appendChild(a); 
      n.appendChild(i); 
      t.appendChild(n); 
    })); 
    y.innerHTML = ""; 
    y.appendChild(t); 
    p.style.opacity = "1"; 
    p.style.visibility = "visible"; 
    m.style.top = "15%"; 
    u.innerText = "Leaderboards"; 
  }; 
  i.onclick = () => { 
    p.style.opacity = "0"; 
    p.style.visibility = "hidden"; 
    m.style.top = "-100%"; 
  }; 
  window.onclick = e => { 
    if ("modal" === e.target.id) { 
      p.style.opacity = "0"; 
      p.style.visibility = "hidden"; 
      m.style.top = "-100%"; 
    } 
  }; 
  e.onclick = e => { 
    e.preventDefault(); 
    r.pause(); 
    fetch("./pages/game.html").then((e => e.text())).then((e => app.innerHTML = e)); 
    setTimeout((() => app.appendChild(o)), 1e3); 
  }; 
  r = new Audio("./assets/audios/MIND THE DROP.mp3"); 
  r.volume = 1; 
  r.loop = !0; 
  r.play(); 
  s.setAttribute("src", `${d.avatar}`); 
  s.classList.add("loaded"); 
  c.setAttribute("src", `${h.avatar}`); 
  c.classList.add("loaded"); 
} 

home();
