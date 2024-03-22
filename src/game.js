function game() { 
  const e = document.createElement("script"); e.setAttribute("src", "./src/lose.js"); 
  const l = document.createElement("script"); l.setAttribute("src", "./src/home.js"); 
  const t = document.getElementById("play"), s = document.getElementById("confirm"), 
  n = document.getElementById("game-area"), 
  a = document.getElementById("timer"), 
  r = document.getElementById("input"), 
  i = document.getElementById("input-area"), 
  c = document.getElementById("modal-card"), 
  d = document.getElementById("modal-card-title"), 
  o = document.getElementById("modal-card-area"), 
  p = document.getElementById("cards-player"), 
  m = document.getElementById("score-player"), 
  u = document.getElementById("player-turn"), 
  y = document.getElementById("cards-cpu"), 
  f = document.getElementById("score-cpu"), 
  k = document.getElementById("cpu-turn"), 
  v = ["RYU_HADOUKEN_THEME_0", "CHUNLI_THEME_SF6", "KEN_THEME_SF6", "MENU_THEME_SF6", "CAMMY_THEME_SF5", "RYU_HADOUKEN_PRAIA", 
       "LOBBY_THEME_SF6", "RASHID_THEME_SF5", "ZANGIEF_THEME_SF4", "SAGAT_THEME_SF4", "EVIL_RYU_THEME_SF4", "DHALSIM_THEME_SF5","GUILE_THEME_NM"  ], 
  g = document.querySelector("#game"), T = ["BG", "BG2", "BG3", "BG4", "BG5", "BG6"], 
  h = T[Math.floor(Math.random() * T.length)]; let C, E, I, L = 0; 
  
  const P = new CardGame(characters); 
  
  function x() { 0 === L ? (u.classList.add("turn"), k.classList.remove("turn")) : 1 === L && (u.classList.remove("turn"), k.classList.add("turn")) } 
  
  function $() { const e = document.querySelector(".card-flip-player"), l = (e, l, t) => e.style.setProperty(l, t), t = t => { let s = e.offsetWidth, n = t.pageX - e.offsetLeft, a = 5 * (.5 - (t.pageY - e.offsetTop) / s); l(e, "--dy", `${7 * -(.5 - n / s)}deg`), l(e, "--dx", `${a}deg`) }; e.addEventListener("mousemove", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", (() => { e.style.setProperty("--dy", "0"), e.style.setProperty("--dx", "0") }), !1) } 
  
  function S(e, l) { 
    const t = e[0], s = document.createElement("div"); s.classList.add(`card-flip-${l}-fliped`, `card-flip-${l}`); 
    const a = document.createElement("div"); let r, i; a.classList.add("card-inner"), "player" === l && (s.onclick = () => s.classList.remove("card-flip-player-fliped")), 
    r = `\n      <div id="${t.id}" class="card-${l}" style="background-image: url(${t.cover});">      
         \n        <img class="card-avatar-${l}" src="${t.avatar}" alt="${t.name}" />
         \n      <img class="info-${l}" src="./assets/images/info.svg">
         \n        <div class="card-info">\n          <span class="name"><h2>${t.name}</h2></span>
         \n          <img class="class" src='${t.class}'>
         \n          <ul class="list-cards">
         \n            <li class="skill-${l}">
         \n              <span>RANGE</span>
         \n              <span>${t.skills.range}</span>
         \n            </li>
         \n            <li class="skill-${l}">
         \n              <span>HEALTH</span>
         \n              <span>${t.skills.health}</span>
         \n            </li>
         \n            <li class="skill-${l}">
         \n              <span>POWER</span>
         \n              <span>${t.skills.power}</span>
         \n            </li>
         \n            <li class="skill-${l}">
         \n              <span>MOBILITY</span>
         \n              <span>${t.skills.mobility}</span>
         \n            </li>
         \n            </li>
         \n            <li class="skill-${l}">
         \n              <span>TECH</span>
         \n              <span>${t.skills.tech}</span>
         \n            </li>
         \n          </ul>
         \n        </div>
         \n      </div>
         \n      `, 
         i = '\n      <div \n        class="card-back" \n        style="background-image: url(\'./assets/images/BG card back 3.png\');">\n      </div>\n      ', a.innerHTML += '\n      <div \n        class="card-back" \n        style="background-image: url(\'./assets/images/BG card back 3.png\');">\n      </div>\n      ', a.innerHTML += r, s.appendChild(a), n.appendChild(s) } 
  
  function B(e) { "player" === e ? document.querySelectorAll(`.skill-${e}`).forEach((e => { e.onclick = () => { m.innerText = e.children[1].innerText, P.skillsPlayer.name = e.children[0].innerText, P.skillsPlayer.skill = parseInt(e.children[1].innerText) } })) : "cpu" === e && document.querySelectorAll(`.skill-${e}`).forEach((e => { e.children[0].innerText === P.skillsPlayer.name && (P.skillsCPU.name = e.children[0].innerText, P.skillsCPU.skill = parseInt(e.children[1].innerText)) })) } 
  
  
  
  function q() { f.innerText = "00", m.innerText = "00", p.innerText = P.PlayerCards.length, y.innerText = P.CPUCards.length } 
  
  function U() { let e = document.querySelector(".card-flip-cpu"), l = document.querySelector(".card-flip-player"); e.classList.contains("card-flip-cpu-fliped") && e.classList.remove("card-flip-cpu-fliped"), l.classList.contains("card-flip-player-fliped") && l.classList.remove("card-flip-player-fliped"), f.innerText = P.skillsCPU.skill, m.innerText = P.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-cpu-left"), S(P.CPUCards, "cpu") }), 2e3), L = 1, setTimeout((() => { e.remove(), G(), x(), q(), M() }), 3e3) } 
  
  function b() { let e = document.querySelector(".card-flip-player"); e.classList.contains("card-flip-player-fliped") && e.classList.remove("card-flip-player-fliped"), f.innerText = P.skillsCPU.skill, m.innerText = P.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-player-right"), S(P.PlayerCards, "player") }), 2e3), L = 0, setTimeout((() => { x(), q(), e.remove(), $(), G(), B("player") }), 3e3) } 
  
  function A() { const l = P.gameEnded(); "player lose" === l ? (q(), I.pause(), fetch("./pages/lose.html").then((e => e.text())).then((e => app.innerHTML = e)), setTimeout((() => app.appendChild(e)), 1e3)) : "cpu lose" === l && (r.style.opacity = "1", r.style.visibility = "visible", i.style.top = "15%", clearInterval(C), clearInterval(E), q()) } 
  
  function M() { const e = parseInt(document.querySelector(".card-cpu").id), l = parseInt(document.querySelector(".card-player").id); let t, s = 0; P.CPUCards.forEach((l => { if (l.id === e) for (skillItem in l.skills) l.skills[skillItem] > s && l.skills[skillItem] <= 7 && (s = l.skills[skillItem], t = skillItem) })), P.skillsPlayer.name = t, P.skillsCPU.name = t, P.skillsCPU.skill = s, P.PlayerCards.forEach((e => { e.id === l && (P.skillsPlayer.skill = e.skills[t]) })); const n = P.compareSkills(); if ("playerWin" === n) U(); else if ("cpuWin" === n) b(); else { let e = document.querySelector(".card-flip-cpu"), l = document.querySelector(".card-flip-player"); l.classList.contains("card-flip-player-fliped") && l.classList.remove("card-flip-player-fliped"), e.classList.remove("card-flip-cpu-fliped"), f.innerText = P.skillsCPU.skill, m.innerText = P.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-cpu-right"), l.classList.add("remove-player-left"), S(P.CPUCards, "cpu"), S(P.PlayerCards, "player") }), 2e3), L = 0, setTimeout((() => { q(), e.remove(), l.remove(), B("player"), G(), G(), $(), x() }), 3e3) } setTimeout(A, 2500) } 
  
  function G() { const e = document.querySelector(".info-player"), l = document.querySelector(".info-cpu"), t = parseInt(document.querySelector(".card-player").id), s = parseInt(document.querySelector(".card-cpu").id), n = document.createElement("div"); 
  
  function a(e) { characters.forEach((l => { l.id === e && (n.innerText = l.bio, o.appendChild(n), d.innerText = l.name, c.style.display = "block") })) } function r() { c.style.display = "none", o.removeChild(o.lastElementChild) } n.setAttribute("id", "modal-card-content"), e.onmouseover = () => a(t), l.onmouseover = () => a(s), e.onmouseleave = () => r(), l.onmouseleave = () => r() } 
  
  function H() { const e = v[Math.floor(Math.random() * v.length)]; I = new Audio(`./assets/audios/${e}.mp3`), I.volume = 1, I.addEventListener("ended", (() => H())), I.play() } P.shuffleCards(), P.getCards(), s.onclick = e => { e.preventDefault(); const t = document.getElementsByTagName("input")[0], s = a.innerText, n = { name: t.value, time: s }; t.value.length >= 3 && (leaders.unshift(n), r.style.opacity = "0", r.style.visibility = "hidden", i.style.top = "-100%", I.pause(), setTimeout((() => { fetch("./pages/home.html").then((e => e.text())).then((e => app.innerHTML = e)).then(app.appendChild(l)) }), 1e3)) }, t.onclick = e => { e.preventDefault(), 
  
  function () { if (parseInt(m.innerText) > 0) { B("cpu"); const e = P.compareSkills(); if ("playerWin" === e) U(); else if ("cpuWin" === e) b(); else { let e = document.querySelector(".card-flip-cpu"), l = document.querySelector(".card-flip-player"); e.classList.remove("card-flip-cpu-fliped"), f.innerText = P.skillsCPU.skill, m.innerText = P.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-cpu-right"), l.classList.add("remove-player-left"), S(P.CPUCards, "cpu"), S(P.PlayerCards, "player"), $() }), 2e3), L = 1, setTimeout((() => { q(), e.remove(), l.remove(), G(), x(), M() }), 3e3) } setTimeout(A, 2500) } }() }, S(P.PlayerCards, "player"), $(), S(P.CPUCards, "cpu"), 
  
  function () { let e = 0, l = 0; E = setInterval((() => e++), 1e3), C = setInterval((() => { l++; let t = e % 60 < 10 ? "0" + e % 60 : e % 60, s = Math.floor(e / 60) < 10 ? "0" + Math.floor(e / 60) : e / 60; a.innerText = `${s}:${t}.0${l % 10}` }), 100) }(), x(), q(), G(), B("player"), g.style.background = `url('./assets/images/${h}.png')`, g.classList.add("loaded"), H() } game();