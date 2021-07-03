export class nodeElementAbstract {
    constructor(app, viewport) {
        this.app = app;
        this.viewport = viewport;
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
        this.nodeText = new PIXI.Text('',{fontFamily : 'Arial', fontSize: 16, fill : 0x000000, align : 'center'});        
        this.nodeText.width = 30;
        this.nodeText.height = 15;
        this.nodeText.position.set(this.startX, this.startY);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;     
        this.graphics.lineStyle(4, this.color, 1);

        //this.rectangle.tint = this.barColor;
    }

    setText(text) {
        this.text.text = text;
    }
}


export class Node1 extends nodeElementAbstract {
    constructor(app, viewport){ //Квадратный вагон с толстой платформой
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);

        this.graphics.beginFill(0xfcf403);
        this.graphics.drawCircle(this.startX, this.startY, 200);   // (x, y, radius)  // 1 колесо
        this.graphics.endFill();
        
        // стрелка влево
        this.graphics.beginFill(0xffffff);
        this.graphics.moveTo(this.startX + 100, this.startY - 50); 
        this.graphics.lineTo(this.startX + 0, this.startY - 110);
        this.graphics.lineTo(this.startX - 0, this.startY - 80);
        this.graphics.lineTo(this.startX - 100, this.startY - 80);
        this.graphics.lineTo(this.startX - 100, this.startY - 20);
        this.graphics.lineTo(this.startX + 0, this.startY - 20);
        this.graphics.lineTo(this.startX + 0, this.startY + 10);
        this.graphics.lineTo(this.startX + 100, this.startY - 50);

        var texture = this.app.renderer.generateTexture(this.graphics);
        var nodeSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(nodeSprite);
        nodeSprite.width = 100;
        nodeSprite.height = 100;
        nodeSprite.position.set(this.startX, this.startY);
        this.nodeText.position.set(this.startX + 10, this.startY + 10);        
        this.viewport.addChild(this.nodeText);        
    }
}