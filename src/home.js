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
        
        l = [...characters],
        [d] = l.splice(Math.floor(Math.random() * l.length), 1),
        [h] = l.splice(Math.floor(Math.random() * characters.length), 1),
        p = document.getElementById("modal"),
        m = document.getElementById("modal-area"),
        u = document.getElementById("modal-title"),
        y = document.getElementById("modal-content");

  t.onclick = e => {
      e.preventDefault();
      p.style.opacity = "1";
      p.style.visibility = "visible";
      m.style.top = "15%";
      u.innerText = "Rules";
      y.innerHTML = "<h3>GOAL</h3>\n    <br>\n    Win all the cards in the deck.\n    <br>\n    <br>\n    <br>\n    <h3>THE GAME</h3>\n    <br>\n    The game is based on comparing the values ​​of your card with those of the other player. For your card to win, the chosen characteristic must have a higher value than your opponent's card.\n    When your card wins, you win your opponent's card and the next card in your pile appears for a new turn.\n    <br>\n    <br>\n    <br>\n    <h3>SCOREBOARD</h3>\n    <br>\n    The scoreboard shows the number of cards you and your opponents have. The score changes automatically with each round.\n    In case of a tie, the cards are returned to the bottom of each player's pile and a new round begins.\n    <br>\n    <br>\n    <br>\n    <h3>HOW TO PLAY</h3>\n    <br>\n    1. To start, choose from the information on your card the one that you think has the value capable of beating your opponents' cards.\n    <br><br>\n    If you win - the other player's card will go to the back of your pile of cards and you continue choosing the information for your next card.\n    If the other player wins - his card will go behind his pile of cards and the turn to choose passes to him.\n    In case of a tie - the cards will go behind each player's pile and a new dispute is held, with the player who chose the cards that tied must choose again.\n    <br><br>\n    2. The game ends when one of the players wins all the cards in the deck\n    <br><br>";
  };

  n.onclick = e => {
      e.preventDefault();
      p.style.opacity = "1";
      p.style.visibility = "visible";
      m.style.top = "20%";
      u.innerText = "About";
      y.innerHTML = "Amid the creative effervescence of the academic universe, a unique project emerges that seeks to unite the passion for software development with the electrifying atmosphere of a strategy game. Inspired by the classic Super Trunfo and immersed in the intriguing universe of Valorant, this initiative's fundamental purpose is to transcend the limits of the classroom, transforming learning into an engaging experience.\n  <br><br>\n  Each meticulously written line of code aims to create a faithful and exciting adaptation of the Valorant universe, transforming theoretical concepts into a practical and dynamic experience. The aim is not only to provide entertainment, but also to offer academics the opportunity to apply their knowledge in a playful way, developing strategic and cognitive skills in an innovative way.\n  <br><br>\n  Instead of simply replicating, the project seeks to enrich the experience of participants, providing a deep dive into the nuances of the game. Each card developed represents not only an element of Valorant, but also an opportunity for scholars to explore the intricacies of game programming. Authenticity is key, and every detail aims to create a unique symbiosis between technical learning and the virtual universe.\n  <br><br>\n  Ultimately, this academic project aims to go beyond the traditional boundaries of teaching, integrating theoretical knowledge with the engaging and exciting practice of electronic games. By combining the creativity of academics with the richness of the Valorant universe, the initiative aims not only to train competent professionals, but also to stimulate a new way of learning, where fun and education go hand in hand in an electrifying and academic challenge.\n  <br><br>";
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
      fetch("./pages/game.html")
          .then((e => e.text()))
          .then((e => app.innerHTML = e));

      setTimeout((() => app.appendChild(o)), 1e3);
  };

  r = new Audio("./assets/audios/RYU_HADOUKEN_THEME_0.mp3");
  r.volume = 1;
  r.loop = true;
  r.play();

  s.setAttribute("src", `${d.avatar}`);
  s.classList.add("loaded");
  c.setAttribute("src", `${h.avatar}`);
  c.classList.add("loaded");
}

home();
