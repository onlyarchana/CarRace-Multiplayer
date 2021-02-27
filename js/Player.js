class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
    this.ended = false;
  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    })
  }

  getCarsAtEnd() {
    database.ref('CarsAtEnd').on("value", (data) => {
      carsAtEnd = data.val();
    })
  }

  static updateCarsAtEnd(rank) {
    database.ref('/').update({
      CarsAtEnd: rank
    })
  }


  updateRank(rank) {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      rank: rank
    })
  }

}