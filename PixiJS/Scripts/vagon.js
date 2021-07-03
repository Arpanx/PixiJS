export class VagonAbstract {
    constructor(app, viewport) {
        this.app = app;
        this.viewport = viewport;
        //this.graphics = graphics;
        this.graphics = new PIXI.Graphics();
        this.startX = 0;
        this.startY = 0;

        // Rectangle
        this.rectangle = PIXI.Sprite.from(PIXI.Texture.WHITE);
        this.rectangle.width = 45;
        this.rectangle.height = 10;
        this.rectangle.tint = 0xFF0000;
        this.rectangle.position.set(this.startX, this.startY - 50);
        //this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;

        // Number Vagon
        this.vagonText = new PIXI.Text('2264',{fontFamily : 'Arial', fontSize: 16, fill : 0x000000, align : 'center'});
        //this.viewport.addChild(this.text);
        this.vagonText.width = 30;
        this.vagonText.height = 15;
        this.vagonText.position.set(this.startX, this.startY);
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


export class Vagon1 extends VagonAbstract {
    constructor(app, viewport){ //Квадратный вагон с толстой платформой
      super(app, viewport);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;
        this.graphics.lineStyle(10, 0x000000, 1);
        //this.graphics.lineStyle(3, 0x000000,1.0,0.5,false);
        //this.graphics.lineStyle(10, 0x000000, 8);
        this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        this.graphics.moveTo(-26, -24); // установка
        this.graphics.lineTo(-26, -214);
        this.graphics.lineTo(310, -214);
        this.graphics.lineTo(310, -24);
        this.graphics.moveTo(-26, -48);
        this.graphics.lineTo(310, -48);        
        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 50;
        vagonSprite.position.set(this.startX, this.startY);
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.rectangle.position.set(this.startX + 2, this.startY - 17);
        this.viewport.addChild(this.vagonText);
        this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;
    }
}

export class Vagon2 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с вертикальной штриховкой
      super(app, viewport);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;
        this.graphics.lineStyle(10, 0x000000, 1);
        this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        this.graphics.moveTo(-26, -24); // установка
        this.graphics.lineTo(-26, -100);
        this.graphics.lineTo(310, -100);
        this.graphics.lineTo(310, -24);

        this.graphics.moveTo(20, -24); // вертикальные линии вагона
        this.graphics.lineTo(20, -100);

        this.graphics.moveTo(60, -24);
        this.graphics.lineTo(60, -100);

        this.graphics.moveTo(100, -24);
        this.graphics.lineTo(100, -100);

        this.graphics.moveTo(140, -24);
        this.graphics.lineTo(140, -100);

        this.graphics.moveTo(180, -24);
        this.graphics.lineTo(180, -100);

        this.graphics.moveTo(220, -24);
        this.graphics.lineTo(220, -100);

        this.graphics.moveTo(260, -24);
        this.graphics.lineTo(260, -100);

        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 25;
        vagonSprite.position.set(this.startX, this.startY + 25 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.rectangle.position.set(this.startX + 2, this.startY - 17);
        this.viewport.addChild(this.vagonText);
        this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;
    }
}

export class Vagon3 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с крест на крест штриховкой
      super(app, viewport);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;
        this.graphics.lineStyle(10, 0x000000, 1);
        this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        this.graphics.moveTo(-26, -24); // установка
        this.graphics.lineTo(-26, -100);
        this.graphics.lineTo(310, -100);
        this.graphics.lineTo(310, -24);

        this.graphics.moveTo(-30, -24); // вертикальные линии вагона
        this.graphics.lineTo(310, -100);
        this.graphics.moveTo(-30, -100); // вертикальные линии вагона
        this.graphics.lineTo(310, -24);

        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 25;
        vagonSprite.position.set(this.startX, this.startY + 25 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.rectangle.position.set(this.startX + 2, this.startY - 17);
        this.viewport.addChild(this.vagonText);
        this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;
    }
}

export class Vagon4 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с открытым верхом
      super(app, viewport);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;
        this.graphics.lineStyle(10, 0x000000, 1);
        this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        this.graphics.moveTo(-26, -24); // установка
        this.graphics.lineTo(-26, -100);
        //this.graphics.lineTo(310, -100);
        this.graphics.moveTo(310, -100); // установка
        this.graphics.lineTo(310, -24);


        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 25;
        vagonSprite.position.set(this.startX, this.startY + 25 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.rectangle.position.set(this.startX + 2, this.startY - 17);
        this.viewport.addChild(this.vagonText);
        this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;
    }
}

export class Vagon5 extends VagonAbstract {
    constructor(app, viewport){ //Квадратный вагон
      super(app, viewport);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;
        this.graphics.lineStyle(10, 0x000000, 1);
        this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        this.graphics.moveTo(-26, -24); // установка
        this.graphics.lineTo(-26, -214);
        this.graphics.lineTo(310, -214);
        this.graphics.lineTo(310, -24);
        // this.graphics.moveTo(-26, -48);
        // this.graphics.lineTo(310, -48);
        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 50;
        vagonSprite.position.set(this.startX, this.startY);
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.rectangle.position.set(this.startX + 2, this.startY - 17);
        this.viewport.addChild(this.vagonText);
        this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;
    }
}

export class Vagon6 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с открытым полукругом
      super(app, viewport);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;
        this.graphics.lineStyle(10, 0x000000, 1);
        this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        this.graphics.moveTo(-26, -24); // установка
        this.graphics.lineTo(-26, -100);
        //this.graphics.lineTo(310, -100);
        this.graphics.moveTo(310, -100); // установка
        this.graphics.lineTo(310, -24);
        //this.graphics.moveTo(310, -48); // установка
        
        //this.graphics.arc(0, 24, 350, 1, 2);
        //this.graphics.arcTo(50, -48, -0, -58, 100);   //(x1, y1, x2, y2, radius)
        this.graphics.moveTo(-24, -90); // установка
        this.graphics.quadraticCurveTo(130, 30, 310, -90);
        //this.graphics.bezierCurveTo(-200, 200, -200, 100, -100, 0);
        //this.graphics.arc(100, -75, 150, 0, Math.PI);
        //this.graphics.arc(0, -100, 500, 1, 2, false);   //cx, cy, radius, startAngle, endAngle, anticlockwise


        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 25;
        vagonSprite.position.set(this.startX, this.startY + 25 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.rectangle.position.set(this.startX + 2, this.startY - 17);
        this.viewport.addChild(this.vagonText);
        this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;
    }
}

export class Vagon7 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с без штриховки низкая платформа
      super(app, viewport);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;
        this.graphics.lineStyle(10, 0x000000, 1);
        this.graphics.drawCircle(25,   0, 20);   // (x, y, radius)  // 1 колесо
        // this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        // this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(260, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        this.graphics.moveTo(-26, -24); // установка
        this.graphics.lineTo(-26, -70);
        this.graphics.lineTo(310, -70);
        this.graphics.lineTo(310, -24);

        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 20;
        vagonSprite.position.set(this.startX, this.startY + 30 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.rectangle.position.set(this.startX + 2, this.startY - 17);
        this.viewport.addChild(this.vagonText);
        this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;
    }
}



export class Vagon8 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с крест на крест штриховкой
      super(app, viewport);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;
        this.graphics.lineStyle(10, 0x000000, 1);
        this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24);
        this.graphics.moveTo(-26, -24);
        this.graphics.lineTo(-26, -100);
        this.graphics.lineTo(310, -100);
        this.graphics.lineTo(310, -24);
        this.graphics.moveTo(-26, -40);
        this.graphics.lineTo(310, -40);
        
        this.graphics.beginFill(0x000000);
        this.graphics.drawRect(90, 2, 20, -20);
        this.graphics.drawRect(190, 2, 20, -20);
        this.graphics.endFill();

        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 25;
        vagonSprite.position.set(this.startX, this.startY + 25 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.rectangle.position.set(this.startX + 2, this.startY - 17);
        this.viewport.addChild(this.vagonText);
        this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;
    }
}