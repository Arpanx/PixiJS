import { Vagon1, VagonAbstract } from './vagon.js';

export class RailwayLineAbstract {
    
    constructor(app, viewport) {
        // var _name1 = name1
        // this.setName = function(name1) { _name1 = name1; }
        // this.getName = function() { return _name1; }

        this.app = app;
        this.viewport = viewport;
        //this.graphics = graphics;
        this.vagonArray = new Array(0);
        //this.vagonArray = new VagonAbstract(this.app, this.viewport)[1];

        this.graphics = new PIXI.Graphics();

        // Rectangle
        this.rectangle = PIXI.Sprite.from(PIXI.Texture.WHITE);
        this.rectangle.width = 45;
        this.rectangle.height = 10;
        this.rectangle.tint = 0xFF0000;
        this.rectangle.position.set(202, 180);
        //this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;

        // Number Vagon
        this.text = new PIXI.Text('2264',{fontFamily : 'Arial', fontSize: 16, fill : 0xffffff, align : 'center'});
        //this.viewport.addChild(this.text);
        this.text.width = 40;
        this.text.height = 30;
        this.text.position.set(205, 202);

        var startX = 0;
        var startY = 0;
        var endX = 0;
    }

    draw() {        
        // this.graphics.lineStyle(3, 0xffffff, 3);
        // this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        // this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        // this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        // this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо

        // this.graphics.moveTo(-40, -24);
        // this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        // this.graphics.moveTo(-26, -24); // установка
        // this.graphics.lineTo(-26, -214);
        // this.graphics.lineTo(310, -214);
        // this.graphics.lineTo(310, -24);
        // this.graphics.moveTo(-26, -48);
        // this.graphics.lineTo(310, -48);
        // var texture = this.app.renderer.generateTexture(this.graphics);
        // var circle = new PIXI.Sprite(texture);
        // this.viewport.addChild(circle);
        // circle.width = 50;
        // circle.height = 50;
        // circle.position.set(200, 200);
        
        // this.viewport.addChild(this.text);
        // this.viewport.addChild(this.rectangle);
        // this.rectangle.visible = true;
    }

    setText(text) {
        this.text.text = text;
    }
}


export class RailwayLine1 extends RailwayLineAbstract {
    constructor(app, viewport){
      super(app, viewport);
    }

    draw(startX, startY, endX) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;

        this.graphics.lineStyle(2, 0xff1900, 2);
        
        this.graphics.moveTo(this.startX, this.startY);
        this.graphics.lineTo(this.endX, this.startY); // горизонтальная линия платформы

        var texture = this.app.renderer.generateTexture(this.graphics);
        var railwayLine = new PIXI.Sprite(texture);
        this.viewport.addChild(railwayLine);
        railwayLine.width = this.endX;
        railwayLine.height = 4;
        railwayLine.position.set(this.startX, this.startY);
    }

    addVagon(vagon){
        this.vagonArray.push(vagon);
    }

    refresh(){
        let offset = 55;
        for (let index = 0; index < this.vagonArray.length; ++index) {
            let vagon = this.vagonArray[index];
            let offsetResult = this.startX + offset * index;
            vagon.draw(offsetResult, 200);
            // if (tt === 1){
            //     let v1 = new Vagon1(this.app, this.viewport);
            //     v1.draw();
            // }
        }
    }
}