BasicGame = {

    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check BasicGame.orientated in internal loops to know if it should pause or not */
    orientated: false,

    updateScaleRatio: function () {
        BasicGame.realWidth = Math.max(window.innerWidth,window.innerHeight);
        BasicGame.realHeight = Math.min(window.innerWidth,window.innerHeight);
        var ws = BasicGame.realWidth/(960*BasicGame.assetScale);
        var wh = BasicGame.realHeight/(540*BasicGame.assetScale);
        BasicGame.scaleRatio = Math.max(ws,wh);
    }

};

BasicGame.Boot = function (game) {
};

BasicGame.Boot.prototype = {

    init: function () {

        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;

        this.scale.forceOrientation(true,false);

        var assetScale = 1;

        BasicGame.realWidth = Math.max(window.innerWidth,window.innerHeight);
        BasicGame.realHeight = Math.min(window.innerWidth,window.innerHeight);

        if(BasicGame.realWidth>960 || BasicGame.realHeight>540){
            assetScale = 2;
        }
        var ws = BasicGame.realWidth/(960*assetScale);
        var wh = BasicGame.realHeight/(540*assetScale);
        BasicGame.assetScale = assetScale;
        BasicGame.scaleRatio = Math.max(ws,wh);
        //this.scale.setResizeCallback(this.gameResized, this);
        this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
        this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);


    },

    preload: function () {

        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        this.load.image('preloaderBackground', 'images/preloader_background.jpg');
        this.load.image('preloaderBar', 'images/preloadr_bar.png');

    },

    create: function () {

        this.state.start('Preloader');

    },

    gameResized: function (width, height) {

        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device or resizing the browser window.
        //  Note that this callback is only really useful if you use a ScaleMode of RESIZE and place it inside your main game state.
    },

    enterIncorrectOrientation: function () {

        BasicGame.orientated = false;

        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {

        BasicGame.orientated = true;

        document.getElementById('orientation').style.display = 'none';

    }

};
