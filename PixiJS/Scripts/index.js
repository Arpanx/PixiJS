//import Game from './game.js';
import { Vagon1 } from './vagon.js';
import { RailwayLine1 } from './railwayLine.js';

$(document).ready(function () {
    var app = new PIXI.Application({
        width: 2000,
        height: 1300,
        view: document.getElementById('board'),
        antialias: true,
        backgroundColor: 0x000010
    });

    var viewport = new pixi_viewport.Viewport({
        // screenWidth: window.innerWidth,              // screen width used by viewport (eg, size of canvas)
        // screenHeight: window.innerHeight,            // screen height used by viewport (eg, size of canvas)
        //worldWidth: 500,                              // world width used by viewport (automatically calculated based on container width)
        //worldHeight: 500,                             // world height used by viewport (automatically calculated based on container height)
        // threshold: 5,                                // number of pixels to move to trigger an input event (e.g., drag, pinch) or disable a clicked event
        // passiveWheel: true,                          // whether the 'wheel' event is set to passive (note: if false, e.preventDefault() will be called when wheel is used over the viewport)
        // stopPropagation: false,                      // whether to stopPropagation of events that impact the viewport (except wheel events, see options.passiveWheel)
        // forceHitArea: null,                          // change the default hitArea from world size to a new value
        // noTicker: false,                             // set this if you want to manually call update() function on each frame
        // ticker: PIXI.Ticker.shared,                  // use this PIXI.ticker for updates
        //interaction: app.renderer.plugins.interaction,  // InteractionManager, available from instantiated WebGLRenderer/CanvasRenderer.plugins.interaction - used to calculate pointer position relative to canvas location on screen
        // divWheel: null,                              // div to attach the wheel event (uses document.body as default)
        // disableOnContextMenu: false,                 // remove oncontextmenu=() => {} from the divWheel element
    })

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
        //.clamp({
        //    left: true,                // whether to clamp to the left and at what value
        //    right: true,               // whether to clamp to the right and at what value
        //    top: true,                 // whether to clamp to the top and at what value
        //    bottom: true,              // whether to clamp to the bottom and at what value
        //    direction: 'all',           // (all, x, or y) using clamps of [0, viewport.worldWidth / viewport.worldHeight]; replaces left / right / top / bottom if set
        //    underflow: 'center',	       // where to place world if too small for screen (e.g., top - right, center, none, bottomleft)
        //})

    app.stage.addChild(viewport)

    var graphics = new PIXI.Graphics();
    // draw a shape
    //graphics.beginFill(0xFF3300);
    graphics.lineStyle(1, 0xffd900, 1);
    graphics.moveTo(0, 0);
    graphics.lineTo(0, 5000);
    graphics.lineTo(10000, 5000);
    graphics.lineTo(10000, 0);
    graphics.closePath();
    //graphics.endFill();

    graphics.lineStyle(1, 0xffd900, 1);
    graphics.moveTo(0, 0);
    graphics.lineTo(10000, 5000);
    graphics.closePath();

    graphics.lineStyle(1, 0xffd900, 1);
    graphics.moveTo(0, 5000);
    graphics.lineTo(10000, 0);
    graphics.closePath();

    viewport.addChild(graphics);

    viewport.fitWorld();

    let rw1 = new RailwayLine1(app, viewport);
    rw1.draw();
    //let v1 = new Vagon1(app, viewport);
});