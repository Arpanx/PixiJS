export class VagonAbstract {
    constructor(app, viewport) {
        this.app = app;
        this.viewport = viewport;
        //this.graphics = graphics;
        this.graphics = new PIXI.Graphics();
        this.startX = 0;
        this.startY = 0;
        this.color = 0x000000;
        this.isBar = true;
        this.barColor = 0xff0000;

        // Rectangle
        this.rectangle = PIXI.Sprite.from(PIXI.Texture.WHITE);
        this.rectangle.width = 45;
        this.rectangle.height = 10;
        this.rectangle.tint = this.barColor;
        this.rectangle.position.set(this.startX, this.startY - 50);
        //this.viewport.addChild(this.rectangle);
        this.rectangle.visible = true;

        // Number Vagon
        this.vagonText = new PIXI.Text('',{fontFamily : 'Arial', fontSize: 16, fill : 0x000000, align : 'center'});        
        this.vagonText.width = 30;
        this.vagonText.height = 15;
        this.vagonText.position.set(this.startX, this.startY);
    }

    draw(startX, startY) {
        this.startX =  startX;
        this.startY =  startY;     
        this.graphics.lineStyle(10, this.color, 1);

        this.rectangle.tint = this.barColor;
        
        if(this.isBar){
            this.rectangle.position.set(this.startX + 2, this.startY - 17);
            this.viewport.addChild(this.rectangle);
            this.rectangle.visible = true;
        } else {
            this.rectangle.visible = false;
        }
    }

    setText(text) {
        this.text.text = text;
    }
}


export class Vagon1 extends VagonAbstract {
    constructor(app, viewport){ //Квадратный вагон с толстой платформой
      super(app, viewport);
      this.isMove = false;
    }

    draw(startX, startY) {
        super.draw(startX, startY);
        
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
        vagonSprite.interactive = true;
        vagonSprite.buttonMode = true;
        
        vagonSprite.vagonText = this.vagonText.text;
        vagonSprite.on('pointertap',function(e) {
            var vagonText = e.target.vagonText;
            alert(vagonText);
        });

        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 50;
        vagonSprite.position.set(this.startX, this.startY - 3);
        this.vagonText.position.set(this.startX + 10, this.startY + 10);        
        this.viewport.addChild(this.vagonText);
        let distance = 0;
        this.app.ticker.add((delta) => {
            if(this.isMove){
                if (this.startX < 1300 && distance < 60){
                    distance = distance + 0.2;
                    vagonSprite.position.set(this.startX = this.startX + 0.2, this.startY - 3);
                    this.vagonText.position.set((this.startX = this.startX + 0.2) + 10, this.startY + 5);
                    this.rectangle.position.set(this.startX = this.startX + 0.2, this.startY - 25);
                } else {
                    if (this.startX < 1035){
                        distance = 0;
                    }
                    vagonSprite.position.set(this.startX = this.startX - 0.2, this.startY - 3);
                    this.vagonText.position.set((this.startX = this.startX - 0.2) + 10, this.startY + 5);
                    this.rectangle.position.set(this.startX = this.startX - 0.2, this.startY - 25);
                }
            }
        });
    }
}

export class Vagon2 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с вертикальной штриховкой
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);

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
        vagonSprite.position.set(this.startX, this.startY + 22 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.viewport.addChild(this.vagonText);
    }
}

export class Vagon3 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с крест на крест штриховкой
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);

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
        vagonSprite.position.set(this.startX, this.startY + 22 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);        
        this.viewport.addChild(this.vagonText);
    }
}

export class Vagon4 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с открытым верхом
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);
        
        this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        this.graphics.moveTo(-26, -24); // установка
        this.graphics.lineTo(-26, -100);
        this.graphics.moveTo(310, -100); // установка
        this.graphics.lineTo(310, -24);

        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 25;
        vagonSprite.position.set(this.startX, this.startY + 22 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.rectangle.position.set(this.startX + 2, this.startY - 17);
        this.viewport.addChild(this.vagonText);
    }
}

export class Vagon5 extends VagonAbstract {
    constructor(app, viewport){ //Квадратный вагон
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);
        
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
        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 50;
        vagonSprite.position.set(this.startX, this.startY - 3);
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.viewport.addChild(this.vagonText);
    }
}

export class Vagon6 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с открытым полукругом
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);
        
        this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        this.graphics.moveTo(-26, -24); // установка
        this.graphics.lineTo(-26, -100);
        this.graphics.moveTo(310, -100); // установка
        this.graphics.lineTo(310, -24);
        this.graphics.moveTo(-24, -90); // установка
        this.graphics.quadraticCurveTo(130, 30, 310, -90);
        
        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 25;
        vagonSprite.position.set(this.startX, this.startY + 22 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.viewport.addChild(this.vagonText);
    }
}

export class Vagon7 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с без штриховки низкая платформа
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);
        
        this.graphics.drawCircle(25,   0, 20);   // (x, y, radius)  // 1 колесо
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
        vagonSprite.position.set(this.startX, this.startY + 27 );  
        this.vagonText.position.set(this.startX + 10, this.startY + 10);      
        this.viewport.addChild(this.vagonText);        
    }
}



export class Vagon8 extends VagonAbstract {
    constructor(app, viewport){ // низкий полувагон с двумя черными ящиками под вагоном
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);
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
        vagonSprite.position.set(this.startX, this.startY + 22 );
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.viewport.addChild(this.vagonText);
    }
}

export class Vagon9 extends VagonAbstract {
    constructor(app, viewport){ //Конусный вагон
      super(app, viewport);
    }

    draw(startX, startY) {
        super.draw(startX, startY);      
        this.graphics.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        this.graphics.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        this.graphics.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        this.graphics.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо
        
        this.graphics.moveTo(-40, -24);
        this.graphics.lineTo(328, -24); // горизонтальная линия платформы
        
        this.graphics.moveTo(60, -24); // установка
        this.graphics.lineTo(-25, -250);
        this.graphics.lineTo(320, -250);
        this.graphics.lineTo(235, -24);

        this.graphics.lineStyle(20, this.color, 1);
        this.graphics.moveTo(40, -70); // установка
        this.graphics.lineTo(255, -70);
        this.graphics.lineStyle(10, this.color, 1);        
        var texture = this.app.renderer.generateTexture(this.graphics);
        var vagonSprite = new PIXI.Sprite(texture);
        this.viewport.addChild(vagonSprite);
        vagonSprite.width = 50;
        vagonSprite.height = 50;
        vagonSprite.position.set(this.startX, this.startY - 3);
        this.vagonText.position.set(this.startX + 10, this.startY + 10);
        this.viewport.addChild(this.vagonText);
    }
}