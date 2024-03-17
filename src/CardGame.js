class CardGame {
  constructor(s) {
    this.cards = s;
    this.cardsShuffle = [];
    this.PlayerCards = [];
    this.CPUCards = [];
    this.skillsPlayer = { name: "", skill: 0 };
    this.skillsCPU = { name: "", skill: 0 };
  }

  shuffleCards(s = this.cards) {
    for (let i = s.length - 1; i > 0; i--) {
      const l = Math.floor(Math.random() * (i + 1));
      [s[i], s[l]] = [s[l], s[i]];
    }
    this.cardsShuffle = s;
  }

  getCards(s = this.cardsShuffle) {
    s.forEach((i) =>
      s.indexOf(i) % 2 == 0 ? this.PlayerCards.push(i) : this.CPUCards.push(i)
    );
  }

  discard(s, i) {
    s.push(i.shift());
  }

  compareSkills() {
    return this.skillsPlayer.skill > this.skillsCPU.skill
      ? (this.discard(this.PlayerCards, this.CPUCards), "playerWin")
      : this.skillsPlayer.skill < this.skillsCPU.skill
      ? (this.discard(this.CPUCards, this.PlayerCards), "cpuWin")
      : (this.PlayerCards.push(this.PlayerCards.shift()),
        void this.CPUCards.push(this.CPUCards.shift()));
  }

  gameEnded() {
    return 0 === this.PlayerCards.length
      ? "player lose"
      : 0 === this.CPUCards.length
      ? "cpu lose"
      : void 0;
  }
}
