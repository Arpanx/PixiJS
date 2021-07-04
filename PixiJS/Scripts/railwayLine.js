import { Vagon1, Vagon2, Vagon3, Vagon4, Vagon5, Vagon6, Vagon7, Vagon8, Vagon9 } from './vagon.js';

export class RailwayLineAbstract {
    
    constructor(app, viewport) {
        // var _name1 = name1
        // this.setName = function(name1) { _name1 = name1; }
        // this.getName = function() { return _name1; }

        this.app = app;
        this.viewport = viewport;
        //this.graphics = graphics;
        this.vagonArray = new Array(0);
        this.offset = 55; // Ширина вагона 55 
        this.offsetStart = 100; // Отступ от начала ЖД линии
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

    draw(startX, startY, endX) {  
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
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
        super.draw(startX, startY, endX);
        
        this.graphics.lineStyle(2, 0xff1900, 2);
        this.graphics.moveTo(this.startX, this.startY);
        this.graphics.lineTo(this.endX, this.startY); // горизонтальная линия платформы

        var texture = this.app.renderer.generateTexture(this.graphics);
        var railwayLine = new PIXI.Sprite(texture);
        this.viewport.addChild(railwayLine);
        railwayLine.width = this.endX;
        railwayLine.height = 6;
        railwayLine.position.set(this.startX, this.startY - 3);
    }

    addVagon(vagon){
        this.vagonArray.push(vagon);
    }

    refresh(){
        for (let index = 0; index < this.vagonArray.length; ++index) {
            let vagon = this.vagonArray[index];
            let offsetResult = this.offsetStart + this.startX + this.offset * index;
            vagon.draw(offsetResult, this.startY - 52);
            
        }
    }
}