export class nodeElementAbstract {
    constructor(app, viewport) {
        this.app = app;
        this.viewport = viewport;
        var self = this;
        this.callback = {};
        this.setCallbackOnClick =  function (c) {self.callback = c;}
        this.graphics = new PIXI.Graphics();
        this.startX = 0;
        this.startY = 0;
        this.color = 0x000000;
        
        // this.isBar = true;
        // this.barColor = 0xff0000;

        // Rectangle
        // this.rectangle = PIXI.Sprite.from(PIXI.Texture.WHITE);
        // this.rectangle.width = 45;
        // this.rectangle.height = 10;
        // this.rectangle.tint = this.barColor;
        // this.rectangle.position.set(this.startX, this.startY - 50);
        // //this.viewport.addChild(this.rectangle);
        // this.rectangle.visible = true;

        // Number Vagon
        this.nodeText1 = new PIXI.Text('',{fontFamily : 'Arial', fontSize: 16, fill : 0x000000, align : 'center'});        
        this.nodeText1.width = 50;
        this.nodeText1.height = 25;
        this.nodeText1.position.set(this.startX, this.startY);

        this.nodeText2 = new PIXI.Text('',{fontFamily : 'Arial', fontSize: 16, fill : 0x000000, align : 'center'});        
        this.nodeText2.width = 50;
        this.nodeText2.height = 25;
        this.nodeText2.position.set(this.startX, this.startY);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;     
        this.graphics.lineStyle(4, this.color, 1);
        
        this.nodeText1.width = 50;
        this.nodeText1.height = 25;
        this.nodeText1.position.set(this.startX - 20, this.startY - 20);

        this.nodeText2.width = 50;
        this.nodeText2.height = 25;
        this.nodeText2.position.set(this.startX - 20, this.startY - 20);

        //this.rectangle.tint = this.barColor;
    }

    setText(text) {
        this.text.text = text;
    }
}


export class Node1 extends nodeElementAbstract {
    constructor(app, viewport){ // Желтый круг с 2 стрелками
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);

        this.graphics.beginFill(this.color); // 0xfcf403 - желтый
        this.graphics.lineStyle(4, 0x000000, 1);
        this.graphics.drawCircle(this.startX, this.startY, 200);
        this.graphics.endFill();
        
        // стрелка влево
        this.graphics.beginFill(0x000000);
        this.graphics.moveTo(this.startX + 100, this.startY - 50); 
        this.graphics.lineTo(this.startX + 0, this.startY - 110);
        this.graphics.lineTo(this.startX - 0, this.startY - 80);
        this.graphics.lineTo(this.startX - 100, this.startY - 80);
        this.graphics.lineTo(this.startX - 100, this.startY - 20);
        this.graphics.lineTo(this.startX + 0, this.startY - 20);
        this.graphics.lineTo(this.startX + 0, this.startY + 10);
        this.graphics.lineTo(this.startX + 100, this.startY - 50);
        this.graphics.closePath();
        
        this.graphics.moveTo(this.startX - 110, this.startY + 80); 
        this.graphics.lineTo(this.startX + 0, this.startY + 140);
        this.graphics.lineTo(this.startX + 0, this.startY + 110);
        this.graphics.lineTo(this.startX + 100, this.startY + 110);
        this.graphics.lineTo(this.startX + 100, this.startY + 50);
        this.graphics.lineTo(this.startX + 0, this.startY + 50);
        this.graphics.lineTo(this.startX + 0, this.startY + 20);
        this.graphics.closePath();

        var texture = this.app.renderer.generateTexture(this.graphics);
        var nodeSprite = new PIXI.Sprite(texture);

        nodeSprite.anchor.set(0.5);

        this.viewport.addChild(nodeSprite);
        nodeSprite.width = 90;
        nodeSprite.height = 100;
        nodeSprite.position.set(this.startX, this.startY);

        this.nodeText1.width = 100;
        this.nodeText1.height = 25;
        this.nodeText1.position.set(this.startX - 20, this.startY - 50);
        this.viewport.addChild(this.nodeText1);     
        
        
        nodeSprite.interactive = true;
        nodeSprite.buttonMode = true;
        var bool = true;
        var modal = document.getElementById("myModal");
    
        nodeSprite.on('pointertap', () => {
            bool = !bool;
            if (bool) {
                if(typeof this.callback === "function"){
                    var tt = this;
                    modal.style.display = "block";        
                    // Нужно заморозить обработку событий другим окнам
                    var board1 = document.getElementById('board1');
                    //window.viewport1.interactive = false;
                    //window.viewport1.options.passiveWheel = false;
                    window.viewport1.options.divWheel = board1;
                    this.callback.call(this, window.app2, window.viewport2);
                    //this.callback.call(scope, param1, param2);
                } else {
                    console.log('callback function is null');
                }
                //dude.texture = texture2;
            } else {
                modal.style.display = "none";
                //dude.texture = texture1;
            }
        });

    }
}

export class Node2 extends nodeElementAbstract {
    constructor(app, viewport){ // Квадратный станция
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);

        this.graphics.beginFill(this.color);
        //x, y, width, height, radius)
        this.graphics.lineStyle(1, 0x000000, 1);
        var nodeSprite2 = this.graphics.drawRoundedRect(this.startX, this.startY, 200, 50, 20);
        this.graphics.endFill();
        
        // стрелка влево
        //this.graphics.beginFill(0xffffff);
        // this.graphics.moveTo(this.startX + 100, this.startY - 50); 
        // this.graphics.lineTo(this.startX + 0, this.startY - 110);
        //this.graphics.closePath();
        var texture = this.app.renderer.generateTexture(this.graphics);
        var nodeSprite = new PIXI.Sprite(texture);

        nodeSprite.anchor.set(0.5);
        this.viewport.addChild(nodeSprite);
        nodeSprite.width = 180;
        nodeSprite.height = 60;
        nodeSprite.position.set(this.startX, this.startY);
        
        this.nodeText1.width = 80;
        this.nodeText1.height = 17;
        this.nodeText1.position.set(this.startX - 40, this.startY - 21);
        this.viewport.addChild(this.nodeText1);

        this.nodeText2.width = 100;
        this.nodeText2.height = 20;
        this.nodeText2.position.set(this.startX - 55, this.startY + 1 );
        this.viewport.addChild(this.nodeText2);
        
        nodeSprite.interactive = true;
        nodeSprite.buttonMode = true;
        var bool = true;
        var modal = document.getElementById("myModal");
    
        nodeSprite.on('pointertap', () => {
            bool = !bool;
            if (bool) {
                if(typeof this.callback === "function"){
                    this.callback.call();
                    modal.style.display = "block";
                    //this.callback.call(scope, param1, param2);
                } else {
                    console.log('callback function is null');
                }
                //dude.texture = texture2;
            } else {
                modal.style.display = "none";
                //dude.texture = texture1;
            }
        });

    }
}

export class RailwayDeadEnd extends nodeElementAbstract {
    constructor(app, viewport){ // Квадратный станция
      super(app, viewport);
      this.angle = 90;
    }

    draw(startX, startY) {
        super.draw(startX, startY);

        //this.graphics.beginFill(this.color);
        //x, y, width, height, radius)
        //this.graphics.endFill();
        this.graphics.lineStyle(10, 0x000000, 1);

        switch (this.angle) {
            case 0:
                // up
                this.graphics.moveTo(this.startX - 30, this.startY - 30); 
                this.graphics.lineTo(this.startX - 30, this.startY);
                this.graphics.lineTo(this.startX + 30, this.startY);
                this.graphics.lineTo(this.startX + 30, this.startY - 30);
                this.graphics.moveTo(this.startX, this.startY); 
                this.graphics.lineTo(this.startX, this.startY - 80);
              break;
            case 90:
                // left
                this.graphics.moveTo(this.startX + 40, this.startY - 30); 
                this.graphics.lineTo(this.startX, this.startY - 30);
                this.graphics.lineTo(this.startX, this.startY + 30);
                this.graphics.lineTo(this.startX + 40, this.startY + 30);
                this.graphics.moveTo(this.startX, this.startY); 
                this.graphics.lineTo(this.startX + 80, this.startY);
              break;
            case 180:
                // down
                this.graphics.moveTo(this.startX + 40, this.startY - 30); 
                this.graphics.lineTo(this.startX, this.startY - 30);
                this.graphics.lineTo(this.startX, this.startY + 30);
                this.graphics.lineTo(this.startX + 40, this.startY + 30);
                this.graphics.moveTo(this.startX, this.startY); 
                this.graphics.lineTo(this.startX + 80, this.startY);
                break;
            case 270:
                // right
                this.graphics.moveTo(this.startX - 40, this.startY - 30); 
                this.graphics.lineTo(this.startX, this.startY - 30);
                this.graphics.lineTo(this.startX, this.startY + 30);
                this.graphics.lineTo(this.startX - 40, this.startY + 30);
                this.graphics.moveTo(this.startX, this.startY); 
                this.graphics.lineTo(this.startX - 80, this.startY);
              break;
            default:
              console.log(`Sorry, we are out of this.angle`);
        }
        
        //var nodeSprite2 = this.graphics.drawRoundedRect(this.startX, this.startY, 200, 50, 20);
        
        
        // стрелка влево
        //this.graphics.beginFill(0xffffff);
        // this.graphics.moveTo(this.startX + 100, this.startY - 50); 
        // this.graphics.lineTo(this.startX + 0, this.startY - 110);
        //this.graphics.closePath();
        var texture = this.app.renderer.generateTexture(this.graphics);
        var nodeSprite = new PIXI.Sprite(texture);

        nodeSprite.anchor.set(0.5);
        this.viewport.addChild(nodeSprite);
        nodeSprite.width = 50;
        nodeSprite.height = 60;
        nodeSprite.position.set(this.startX, this.startY);
    }
}