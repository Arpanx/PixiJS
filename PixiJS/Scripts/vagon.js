export default class Vagon {
    constructor(app, viewport, graphics) {
        this.app = app;
        this.viewport = viewport;
        this.graphics = graphics;
    }

    draw() {
        debugger
        var gr = new PIXI.Graphics();
        gr.lineStyle(3, 0xffffff, 3);
        gr.drawCircle(0,   0, 20);   // (x, y, radius)  // 1 колесо
        gr.drawCircle(50,  0, 20);   // (x, y, radius)  // 2 колесо
        gr.drawCircle(250, 0, 20);   // (x, y, radius)  // 3 колесо
        gr.drawCircle(300, 0, 20);   // (x, y, radius)  // 4 колесо

        gr.moveTo(-40, -24);
        gr.lineTo(328, -24); // горизонтальная линия платформы
        gr.moveTo(-26, -24); // установка
        gr.lineTo(-26, -214);
        gr.lineTo(310, -214);
        gr.lineTo(310, -24);
        gr.moveTo(-26, -48);
        gr.lineTo(310, -48);

        //gr.closePath();

        var texture = this.app.renderer.generateTexture(gr);
        var circle = new PIXI.Sprite(texture);

        //app.stage.addChild(circle);
        this.viewport.addChild(circle);

        circle.width = 50;
        circle.height = 50;
        circle.position.set(200, 200);
    }
}