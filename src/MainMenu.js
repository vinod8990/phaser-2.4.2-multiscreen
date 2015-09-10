
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		///this.music = this.add.audio('titleMusic');
		//this.music.play();


		this.group = this.game.add.group();
        this.group.create(0,0,'bg'+BasicGame.assetScale);

        this.group.scale.setTo(BasicGame.scaleRatio);
        this.group.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.group.scale.y/2;
        this.group.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.group.scale.x/2;

		this.scale.setResizeCallback(this.gameResized, this);

	},

	gameResized: function (width,height) {
		BasicGame.updateScaleRatio();
		this.group.scale.setTo(BasicGame.scaleRatio);
        this.group.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.group.scale.y/2;
        this.group.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.group.scale.x/2;
	},
	update: function () {

		//	Do some nice funky main menu effect here
	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	}

};
