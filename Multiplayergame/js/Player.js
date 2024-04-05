class Player {
    constructor() {
      this.name = null;
      this.index = null;
      this.positionX = 0;
      this.positionY = 0;
      this.rank = 0;
      this.energy = 185;
      this.score = 0;
    }


    addPlayer() {
        var runnerIndex = "players/player" + this.index;
    
        if (this.index === 1) {
          this.positionX = width / 2 - 100;
        } else {
          this.positionX = width / 2 + 100;
        }
    
        database.ref(runnerIndex).set({
          name: this.name,
          positionX: this.positionX,
          positionY: this.positionY,
          rank: this.rank,
          score: this.score
        });
      }

      getDistance() {
        var runnerDistanceRef = database.ref("players/player" + this.index);
        runnerDistanceRef.on("value", data => {
          var data = data.val();
          this.positionX = data.positionX;
          this.positionY = data.positionY;
        });
      }

      getCount() {
        var runnerCountRef = database.ref("playerCount");
        runnerCountRef.on("value", data => {
          playerrCount = data.val();
        });
      }

      updateCount(count) {
        database.ref("/").update({
          playerCount: count
        });
      }
    
}