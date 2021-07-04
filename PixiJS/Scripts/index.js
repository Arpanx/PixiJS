//import Game from './game.js';
import { Vagon1, Vagon2, Vagon3, Vagon4, Vagon5, Vagon6, Vagon7, Vagon8, Vagon9 } from './vagon.js';
import { RailwayLine1 } from './railwayLine.js';
import { Node1, Node2 } from './node-element.js';

window.app1 = {};
window.app2 = {};
window.viewport1  = {};
window.viewport2  = {};

$(document).ready(function () {
    window.app1 = new PIXI.Application({
        width: 1800,
        height: 800,
        view: document.getElementById('board1'),
        antialias: true,
        backgroundColor: 0xffffff
    });

    viewport1 = new pixi_viewport.Viewport({})

    app2 = new PIXI.Application({
        width: 1800,
        height: 1000,
        view: document.getElementById('board2'),
        antialias: true,
        backgroundColor: 0xffffff
    });

    viewport2 = new pixi_viewport.Viewport({})

    initMap1(app1, viewport1);    
});

function initMap1(app, viewport) {
    viewport
        .drag({
        })
        .decelerate({
        })
        .pinch({            
        })
        .wheel({
        })
        .clamp({
            left: true,                // whether to clamp to the left and at what value
            right: true,               // whether to clamp to the right and at what value
            top: true,                 // whether to clamp to the top and at what value
            bottom: true,              // whether to clamp to the bottom and at what value
            direction: 'all',           // (all, x, or y) using clamps of [0, viewport.worldWidth / viewport.worldHeight]; replaces left / right / top / bottom if set
            underflow: 'center',	       // where to place world if too small for screen (e.g., top - right, center, none, bottomleft)
         })
         .clampZoom({
             minScale: 0.9,                 // minimum scale
             maxScale: 4,                // minimum scale
         })

    app.stage.addChild(viewport)

    var graphics = new PIXI.Graphics();
    
    let node2 = new Node2(app, viewport);
    node2.nodeText1.text = 'Станция';
    node2.nodeText2.text = 'Гранбассейн';
    node2.color = 0x01bbff;
    node2.draw(1200, 150);

    let node3 = new Node2(app, viewport);    
    node3.nodeText1.text = 'Станция';
    node3.nodeText2.text = 'Шихта';
    node3.color = 0x01bbff; // синий
    node3.draw(1050, 300);

    let node1 = new Node1(app, viewport);   // желтый круг со стрелочками
    node1.color = 0xfcf403;
    node1.draw(950, 450);
    
    node1.setCallbackOnClick(initMap2);

    let node12 = new Node1(app, viewport);  // желтый круг со стрелочками
    node12.color = 0xfcf403;
    node12.draw(1150, 450);
    //node2.setCallbackOnClick();
    
    graphics.lineStyle(4, 0x000000, 1);
    graphics.moveTo(1010, 330);
    graphics.lineTo(970, 405);
    
    graphics.moveTo(1080, 330);
    graphics.lineTo(1130, 405);

    
    let node13 = new Node1(app, viewport);  // круг со стрелочками
    node13.color = 0xfaabd1; // розовый
    node13.draw(1300, 450);

    graphics.moveTo(1200, 178);
    graphics.lineTo(1285, 402);

    // draw a shape    
    graphics.moveTo(0, 0);
    graphics.lineTo(0, 800);
    graphics.lineTo(1800, 800);
    graphics.lineTo(1800, 0);
    graphics.closePath();
    //graphics.endFill();

    // graphics.lineStyle(1, 0xffd900, 1);
    // graphics.moveTo(0, 0);
    // graphics.lineTo(1800, 800);
    // graphics.closePath();

    // graphics.lineStyle(1, 0xffd900, 1);
    // graphics.moveTo(0, 800);
    // graphics.lineTo(1800, 0);
    // graphics.closePath();

    viewport.addChild(graphics);

    viewport.fitWorld();
    viewport.moveCenter(900, 400);
    viewport.setZoom (1, false)
    //viewport.zoo,
    // const baseTexture = new PIXI.BaseTexture('/Content/wagon_shadow15.png');
    // //var texture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(x, y, width, height));
    // const texture1 = new PIXI.Texture(baseTexture, new PIXI.Rectangle(20, 251, 168, 54));
    // const texture2 = new PIXI.Texture(baseTexture, new PIXI.Rectangle(75, 35, 60, 129));
    // const dude = viewport.addChild(new PIXI.Sprite(texture1));
    //dude.tint = 0xff0000;
    // dude.width = 186;
    // dude.height = 50;
    // dude.position.set(900, 400);

    // center the sprites anchor point
    //*dude.anchor.set(0.5);

    // move the sprite to the center of the screen
    // dude.x = 100;
    // dude.y = app.screen.height / 2;
    // dude.y = 100;
    //*viewport.addChild(dude);
    //app.stage.addChild(dude);

    // make the sprite interactive
    //dude.interactive = true;
    //dude.buttonMode = true;
    var bool = true;
    var modal = document.getElementById("myModal");

    // dude.on('pointertap', () => {
    //     bool = !bool;
    //     if (bool) {
    //         modal.style.display = "block";
    //         InitMap2();
    //         //dude.texture = texture2;
    //     } else {
    //         modal.style.display = "none";
    //         //dude.texture = texture1;
    //     }
    // });

    app.ticker.add(() => {
        // just for fun, let's rotate mr rabbit a little
        //dude.rotation += 0.1;
        //dude.x = dude.x + 1;
    });


}

function initMap2(app, viewport) {
    // Нужно заморозить обработку событий на другие карты кроме этой
    
    viewport
        .drag({
            // direction: 'all',                // (x, y, or all) direction to drag
            // pressDrag: true,                 // whether click to drag is active
            // wheel: true,                     // use wheel to scroll in direction (unless wheel plugin is active)
            // wheelScroll: 1,                  // number of pixels to scroll with each wheel spin
            // reverse: false,                  // reverse the direction of the wheel scroll
            // clampWheel: false,               // clamp wheel (to avoid weird bounce with mouse wheel)
            // underflow: 'center',             // (top-left, top-center, etc.) where to place world if too small for screen
            // factor: 1,                       // factor to multiply drag to increase the speed of movement
            // mouseButtons: 'all',             // changes which mouse buttons trigger drag, use: 'all', 'left', right' 'middle', or some combination, like, 'middle-right'; you may want to set viewport.options.disableOnContextMenu if you want to use right-click dragging
            // keyToPress: null,                // array containing https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code codes of keys that can be pressed for the drag to be triggered, e.g.: ['ShiftLeft', 'ShiftRight'}
            // ignoreKeyToPressOnTouch: false,  // ignore keyToPress for touch events
            // lineHeight: 20,                  // scaling factor for non-DOM_DELTA_PIXEL scrolling events (used for firefox mouse scrolling)
        })
        .decelerate({
            // friction: 0.95,              // percent to decelerate after movement
            // bounce: 0.8,                 // percent to decelerate when past boundaries (only applicable when viewport.bounce() is active)
            // minSpeed: 0.01,              // minimum velocity before stopping/reversing acceleration
        })
        .pinch({
            // noDrag: false,               // disable two-finger dragging
            // percent: 1,                  // percent to modify pinch speed
            // factor: 1,                   // factor to multiply two-finger drag to increase the speed of movement
            // center: null,                // place this point at center during zoom instead of center of two fingers
            // axis: 'all',                 // axis to zoom
        })
        .wheel({
            // percent: 0.1,                // smooth the zooming by providing the number of frames to zoom between wheel spins
            // interrupt: true,             // stop smoothing with any user input on the viewport
            // reverse: false,              // reverse the direction of the scroll
            // center: null,                // place this point at center during zoom instead of current mouse position
            // lineHeight: 20,	            // scaling factor for non-DOM_DELTA_PIXEL scrolling events
            // axis: 'all',                 // axis to zoom
        })
        .clamp({
           left: true,                // whether to clamp to the left and at what value
           right: true,               // whether to clamp to the right and at what value
           top: true,                 // whether to clamp to the top and at what value
           bottom: true,              // whether to clamp to the bottom and at what value
           direction: 'all',          // (all, x, or y) using clamps of [0, viewport.worldWidth / viewport.worldHeight]; replaces left / right / top / bottom if set
           underflow: 'center',	      // where to place world if too small for screen (e.g., top - right, center, none, bottomleft)
        })
        .clampZoom({
            minScale: 0.7,            // minimum scale
            maxScale: 5,              // minimum scale
        })

    app.stage.addChild(viewport)

    var graphics = new PIXI.Graphics();
    // draw a shape
    //graphics.beginFill(0xFF3300);
    graphics.lineStyle(10, 0x0062ff, 1);
    graphics.moveTo(0, 0);
    graphics.lineTo(0, 1800);
    graphics.lineTo(1800, 1800);
    graphics.lineTo(1800, 0);
    graphics.closePath();
    //graphics.endFill();

    // graphics.lineStyle(1, 0xffd900, 1);
    // graphics.moveTo(0, 0);
    // graphics.lineTo(5000, 2500);
    // graphics.closePath();

    // graphics.lineStyle(1, 0xffd900, 1);
    // graphics.moveTo(0, 2500);
    // graphics.lineTo(5000, 0);
    // graphics.closePath();

    viewport.addChild(graphics);

    viewport.fitWorld();
    viewport.moveCenter(500, 200);
    viewport.setZoom (1, false)
    debugger
    drawRailwayLine0(app, viewport);
    let rw1 = drawRailwayLine1(app, viewport);
    let rw2 = drawRailwayLine2(app, viewport);
    let rw3 = drawRailwayLine3(app, viewport);
    
    rw1.refresh();
    rw2.refresh();
    rw3.refresh();
}

function drawRailwayLine0(app, viewport){
    var graphics = new PIXI.Graphics();
    // draw a shape
    //graphics.beginFill(0xFF3300);
    graphics.lineStyle(5, 0x000000, 1);
    graphics.moveTo(400, 500);
    graphics.lineTo(1400, 500);

    graphics.moveTo(300, 700);
    graphics.lineTo(1500, 700);

    graphics.moveTo(100, 900);
    graphics.lineTo(1700, 900);

    graphics.lineStyle(3, 0x000000, 1);
    graphics.moveTo(200, 900);
    graphics.lineTo(400, 500);

    graphics.lineStyle(3, 0x000000, 1);
    graphics.moveTo(200, 890);
    graphics.lineTo(200, 910);

    graphics.moveTo(300, 690);
    graphics.lineTo(300, 710);

    graphics.moveTo(1400, 500);
    graphics.lineTo(1600, 900);

    graphics.moveTo(1500, 690);
    graphics.lineTo(1500, 710);

    graphics.moveTo(1600, 890);
    graphics.lineTo(1600, 910);

    //graphics.closePath();
    //graphics.endFill();

    viewport.addChild(graphics);
}

function drawRailwayLine1(app, viewport){

    let rw1 = new RailwayLine1(app, viewport);
    rw1.offsetStart = 100; // отсут размещения вагонов от начала
    rw1.draw(500, 500, 800); // startX, startY, endX
    let va1 = new Vagon9(app, viewport);
    va1.vagonText.text ='1234';
    // let va12 = new Vagon1(app, viewport);
    // va12.vagonText.text ='5678';
    let va2 = new Vagon9(app, viewport);
    va2.vagonText.text ='9012';
    va2.color = 0x00ff00;
    va2.isBar = false;

    let va3 = new Vagon2(app, viewport);
    va3.vagonText.text ='3456';
    va3.isBar = true;
    va3.barColor = 0x00ff00;

    let va4 = new Vagon6(app, viewport);
    va4.vagonText.text ='7890';
    va4.barColor = 0xfff703;
    
    let va5 = new Vagon8(app, viewport);
    va5.vagonText.text ='1234';

    let va6 = new Vagon4(app, viewport);
    va6.vagonText.text ='5678';
    va6.isBar = false;

    let va7 = new Vagon7(app, viewport);
    va7.vagonText.text ='9012';
    va7.barColor = 0xff03e6;

    let va8 = new Vagon5(app, viewport);
    va8.vagonText.text ='3456';

    let va9 = new Vagon1(app, viewport);
    va9.color = 0x0000ff;
    va9.vagonText.text ='7890';

    let va10 = new Vagon1(app, viewport);
    va10.color = 0x0000ff;
    va10.vagonText.text ='7890';
    
    rw1.addVagon(va1);

    //rw1.addVagon(va12);
    rw1.addVagon(va2);
    rw1.addVagon(va3);
    rw1.addVagon(va4);
    rw1.addVagon(va5);
    rw1.addVagon(va6);
    rw1.addVagon(va7);
    rw1.addVagon(va8);
    rw1.addVagon(va9);
    rw1.addVagon(va10);

    return rw1;
}

function drawRailwayLine2(app, viewport){
    
    let rw2 = new RailwayLine1(app, viewport);
    rw2.offsetStart = 50;

    rw2.draw(400, 700, 1000); // startX, startY, endX
    let va1 = new Vagon1(app, viewport);
    va1.vagonText.text ='1234';
    // let va12 = new Vagon1(app, viewport);
    // va12.vagonText.text ='5678';
    let va2 = new Vagon2(app, viewport);
    va2.vagonText.text ='9012';
    va2.color = 0x00ff00;
    va2.isBar = false;

    let va3 = new Vagon3(app, viewport);
    va3.vagonText.text ='3456';
    va3.isBar = true;
    va3.barColor = 0x00ff00;

    let va4 = new Vagon4(app, viewport);
    va4.vagonText.text ='7890';
    va4.barColor = 0xfff703;
    
    let va5 = new Vagon5(app, viewport);
    va5.vagonText.text ='1234';

    let va6 = new Vagon6(app, viewport);
    va6.vagonText.text ='5678';
    va6.isBar = false;

    let va7 = new Vagon7(app, viewport);
    va7.vagonText.text ='9012';
    va7.barColor = 0xff03e6;

    let va8 = new Vagon8(app, viewport);
    va8.vagonText.text ='3456';

    let va9 = new Vagon9(app, viewport);
    va9.color = 0x0000ff;
    va9.vagonText.text ='7890';
    
    rw2.addVagon(va1);    
    rw2.addVagon(va2);
    rw2.addVagon(va3);
    rw2.addVagon(va4);
    rw2.addVagon(va5);
    rw2.addVagon(va6);
    rw2.addVagon(va7);
    rw2.addVagon(va8);
    rw2.addVagon(va9);

    return rw2;
}

function drawRailwayLine3(app, viewport){
    
    let rw3 = new RailwayLine1(app, viewport);
    rw3.offsetStart = 300;

    rw3.draw(500, 900, 1000); // startX, startY, endX
    let va1 = new Vagon1(app, viewport);
    va1.vagonText.text ='1234';
    // let va12 = new Vagon1(app, viewport);
    // va12.vagonText.text ='5678';
    let va2 = new Vagon2(app, viewport);
    va2.vagonText.text ='9012';
    va2.color = 0x00ff00;
    va2.isBar = false;

    let va3 = new Vagon3(app, viewport);
    va3.vagonText.text ='3456';
    va3.isBar = true;
    va3.barColor = 0x00ff00;

    let va4 = new Vagon4(app, viewport);
    va4.vagonText.text ='7890';
    va4.barColor = 0xfff703;
    
    let va5 = new Vagon5(app, viewport);
    va5.vagonText.text ='1234';

    let va6 = new Vagon6(app, viewport);
    va6.vagonText.text ='5678';
    va6.isBar = false;

    let va7 = new Vagon7(app, viewport);
    va7.vagonText.text ='9012';
    va7.barColor = 0xff03e6;

    let va8 = new Vagon8(app, viewport);
    va8.vagonText.text ='3456';

    let va9 = new Vagon9(app, viewport);
    va9.color = 0x0000ff;
    va9.vagonText.text ='7890';
    
    rw3.addVagon(va1);    
    rw3.addVagon(va2);
    rw3.addVagon(va3);
    rw3.addVagon(va4);
    rw3.addVagon(va5);
    rw3.addVagon(va6);
    rw3.addVagon(va7);
    rw3.addVagon(va8);
    rw3.addVagon(va9);

    return rw3;
}