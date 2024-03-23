function main() { 
  const e = document.getElementsByTagName("head")[0], 
        t = document.getElementById("app"), 
        s = document.createElement("link"); 
  
          s.setAttribute("rel", "stylesheet"), 
          s.setAttribute("href", "./styles/loader.css"); 
  const n = document.createElement("link"); 
    n.setAttribute("rel", "stylesheet"), 
    n.setAttribute("href", "./styles/home.css"); 
  const r = document.createElement("link"); 
    r.setAttribute("rel", "stylesheet"), 
    r.setAttribute("href", "./styles/game.css"); 
  const c = document.createElement("link"); 
    c.setAttribute("rel", "stylesheet"), 
    c.setAttribute("href", "./styles/lose.css"); 
  const l = document.createElement("script"); 
    l.setAttribute("src", "./src/loader.js"); 
  const a = document.createElement("script"); 
    a.setAttribute("src", "./src/data/leaderboards.js"); 
  const d = document.createElement("script"); 
    d.setAttribute("src", "./src/data/characters.js"); 
  const i = document.createElement("script"); 
    i.setAttribute("src", "./src/CardGame.js"), 
  
  e.appendChild(s), 
  e.appendChild(n), 
  e.appendChild(r), 
  e.appendChild(c), 
  t.appendChild(a), 
  t.appendChild(d), 
  t.appendChild(i), 
  
  fetch("./pages/loader.html")
  .then((e => e.text()))
  .then((e => t.innerHTML = e))
  .then((() => t.appendChild(l))) 
} 

main();