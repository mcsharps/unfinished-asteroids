app.game.hud = {

  render: function(delta) {

    var player = app.game.players[0];

    this.renderBar(16, 16, 80, 10, player.hp / player.maxHp, "#08f");
    this.renderScore(500, 40, 80, 50, player.score, "#08f");
  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);
    
  },

  renderScore: function(x, y, width, height, score, color){
  	app.layer.fillStyle("#fff").font("24px Arial").textAlign("left").fillText("score: " + score + "", x, y);

  }

};