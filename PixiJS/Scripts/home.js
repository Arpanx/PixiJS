
var MyApp = (function () {   
    
    var app;

    $(document).ready(function () {
        init();
    });

    return {
        getMyName: function () { return MyName;},
        setMyName: function (name) { MyName = name},
        init: init,
        calculate: calculate,
        draw: draw,
        clearMap: clearMap,
        ExportSolutions: exportSolutions,
    }
}());

function init(Viewport) {    
    const app = new PIXI.Application()


    app.renderer.view.style.position = "absolute"
    app.renderer.view.style.width = 800 + "px";
    app.renderer.view.style.height = 800 + "px";
    app.renderer.view.style.display = "block";

    document.body.appendChild(app.view)

    //let Viewport2 = new pixi_viewport.Viewport({
    //    screenWidth: 800,
    //    screenHeight: 800,
    //    worldWidth: 200,
    //    worldHeight: 200,
    //    //interaction: app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    //});

    var viewport = new pixi_viewport.Viewport({
        // screenWidth: window.innerWidth,              // screen width used by viewport (eg, size of canvas)
        // screenHeight: window.innerHeight,            // screen height used by viewport (eg, size of canvas)
        worldWidth: 800,                        // world width used by viewport (automatically calculated based on container width)
        worldHeight: 800,                      // world height used by viewport (automatically calculated based on container height)
        // threshold: 5,                                // number of pixels to move to trigger an input event (e.g., drag, pinch) or disable a clicked event
        // passiveWheel: true,                          // whether the 'wheel' event is set to passive (note: if false, e.preventDefault() will be called when wheel is used over the viewport)
        // stopPropagation: false,                      // whether to stopPropagation of events that impact the viewport (except wheel events, see options.passiveWheel)
        // forceHitArea: null,                          // change the default hitArea from world size to a new value
        // noTicker: false,                             // set this if you want to manually call update() function on each frame
        // ticker: PIXI.Ticker.shared,                  // use this PIXI.ticker for updates
        interaction: app.renderer.plugins.interaction,   // InteractionManager, available from instantiated WebGLRenderer/CanvasRenderer.plugins.interaction - used to calculate pointer position relative to canvas location on screen
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
        .clamp({
             left: true,                // whether to clamp to the left and at what value
             right: false,               // whether to clamp to the right and at what value
             top: false,                 // whether to clamp to the top and at what value
             bottom: false,              // whether to clamp to the bottom and at what value
             direction: 'all',           // (all, x, or y) using clamps of [0, viewport.worldWidth / viewport.worldHeight]; replaces left / right / top / bottom if set
             underflow: 'center',	       // where to place world if too small for screen (e.g., top - right, center, none, bottomleft)
        })

    // viewport.bounce({
    //     sides: 'all',                // all, horizontal, vertical, or combination of top, bottom, right, left(e.g., 'top-bottom-right')
    //     friction: 0.5,               // friction to apply to decelerate if active
    //     time: 150,                   // time in ms to finish bounce
    //     bounceBox: null,             // use this bounceBox instead of { x: 0, y: 0, width: viewport.worldWidth, height: viewport.worldHeight }
    //     ease: 'easeInOutSine',       // ease function or name (see http://easings.net/ for supported names)
    //     underflow: 'center',         // (top/bottom/center and left/right/center, or center) where to place world if too small for screen
    // })

    // viewport.animate({
    //     time: 1000,                     // time to animate
    //     position: null,                 // position to move viewport
    //     width: null,                    // desired viewport width in world pixels (use instead of scale; aspect ratio is maintained if height is not provided)
    //     height: null,                   // desired viewport height in world pixels(use instead of scale; aspect ratio is maintained if width is not provided)
    //     scale: null,                    // scale to change zoom(scale.x = scale.y)
    //     scaleX: null,                   // independently change zoom in x - direction
    //     scaleY: null,                   // independently change zoom in y - direction
    //     ease: 'linear',                 // easing function to use
    //     callbackOnComplete: null,       // callback when animate is complete
    //     removeOnInterrupt: false,	   // removes this plugin if interrupted by any user input
    // })

     //viewport.clamp({
     //    left: false,                // whether to clamp to the left and at what value
     //    right: false,               // whether to clamp to the right and at what value
     //    top: false,                 // whether to clamp to the top and at what value
     //    bottom: false,              // whether to clamp to the bottom and at what value
     //    direction: 'all',           // (all, x, or y) using clamps of [0, viewport.worldWidth / viewport.worldHeight]; replaces left / right / top / bottom if set
     //    underflow: 'center',	       // where to place world if too small for screen (e.g., top - right, center, none, bottomleft)
     //})

    // viewport.clampZoom({
    //     minWidth: null,                 // minimum width
    //     minHeight: null,                // minimum height
    //     maxWidth: null,                 // maximum width
    //     maxHeight: null,                // maximum height
    //     minScale: null,                 // minimum scale
    //     maxScale: null,                 // minimum scale
    // })

    // target.start()  // starts the target moving
    // viewport.follow(target.get(), {
    //     speed: 0,           // speed to follow in pixels/frame (0=teleport to location)
    //     acceleration: null, // set acceleration to accelerate and decelerate at this rate; speed cannot be 0 to use acceleration
    //     radius: null,       // radius (in world coordinates) of center circle where movement is allowed without moving the viewport
    // })

    // viewport.mouseEdges({
    //     radius: null,           // distance from center of screen in screen pixels
    //     distance: 20,           // distance from all sides in screen pixels
    //     top: null,              // alternatively, set top distance (leave unset for no top scroll)
    //     bottom: null,           // alternatively, set bottom distance (leave unset for no top scroll)
    //     left: null,             // alternatively, set left distance (leave unset for no top scroll)
    //     right: null,            // alternatively, set right distance (leave unset for no top scroll)
    //     speed: 8,               // speed in pixels/frame to scroll viewport
    //     reverse: false,         // reverse direction of scroll
    //     noDecelerate: false,    // don't use decelerate plugin even if it's installed
    //     linear: false,          // if using radius, use linear movement (+/- 1, +/- 1) instead of angled movement (Math.cos(angle from center), Math.sin(angle from center))
    //     allowButtons: false,    // allows plugin to continue working even when there's a mousedown event
    // })

    // viewport.snap({
    //     topLeft: false,             // snap to the top-left of viewport instead of center
    //     friction: 0.8,              // friction/frame to apply if decelerate is active
    //     time: 1000,                 // time for snapping in ms
    //     ease: 'easeInOutSine',      // ease function or name (see http://easings.net/ for supported names)
    //     interrupt: true,            // pause snapping with any user input on the viewport
    //     removeOnComplete: false,    // removes this plugin after snapping is complete
    //     removeOnInterrupt: false,   // removes this plugin if interrupted by any user input
    //     forceStart: false,          // starts the snap immediately regardless of whether the viewport is at the desired location
    // })

    // viewport.snapZoom({
    //     width: 0,                   // the desired width to snap (to maintain aspect ratio, choose only width or height)
    //     height: 0,                  // the desired height to snap(to maintain aspect ratio, choose only width or height)
    //     time: 1000,                 // time for snapping in ms
    //     ease: 'easeInOutSine',      // ease function or name(see http://easings.net/ for supported names)
    //     center: null,               // place this point at center during zoom instead of center of the viewport
    //     interrupt: true,            // pause snapping with any user input on the viewport
    //     removeOnComplete: false,    // removes this plugin after snapping is complete
    //     removeOnInterrupt: false,   // removes this plugin if interrupted by any user input
    //     forceStart: false,          // starts the snap immediately regardless of whether the viewport is at the desired zoom
    //     noMove: false,              // zoom but do not move
    // })

   
    // add the viewport to the stage
    app.stage.addChild(viewport)

   
        
    // add a red box
    const sprite = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE))
    sprite.tint = 0xff0000
    sprite.width = sprite.height = 100
    sprite.position.set(100, 100)
    
}

function upload() {
    //e.preventDefault();
    //var files = document.getElementById('uploadFile').files;
    var files = this.files;
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(files[0]) // you could also read images and other binaries
    
    //if (files.length > 0) {
    //    if (window.FormData !== undefined) {
    //        var data = new FormData();
    //        for (var x = 0; x < files.length; x++) {
    //            var body = reader.readAsText(files[x]) // you could also read images and other binaries
    //            //data.append("file" + x, files[x]);
    //        }

    //        $.ajax({
    //            type: "POST",
    //            url: '/Home/Upload',
    //            contentType: false,
    //            processData: false,
    //            data: data,
    //            success: function (result) {
    //                debugger
    //                alert(result);
    //            },
    //            error: function (xhr, status, p3) {
    //                alert(xhr.responseText);
    //            }
    //        });
    //    } else {
    //        alert("Браузер не поддерживает загрузку файлов HTML5!");
    //    }
    //}
}

function handleFileLoad(event) {    
    //document.getElementById('fileContent').textContent = event.target.result;
    //localStorage.setItem('solutionData', JSON.stringify(event.target.result;));
    localStorage.setItem('solutionData', event.target.result);
    let solutionData = JSON.parse(localStorage.getItem('solutionData'));

    initDatagrid();
    fillDatagrid(solutionData.item2);

    const textContentOutput = document.getElementById("textContentOutput");
    if (solutionData.item3) {
        textContentOutput.innerHTML = solutionData.item3;
    } else {
        textContentOutput.innerHTML = 'None';
    }

    var center = { lat: 46.61618, lng: 31.02424 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: center
    });

    draw(solutionData.item1, map);
}

function exportSolutions() {
    var text = localStorage.getItem('solutionData');

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'solutionData');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    console.log(res);
}

function clear(){
    for (var i = app.stage.children.length - 1; i >= 0; i--)
    {
        app.stage.removeChild(app.stage.children[i]);
    };
}

function draw(data, map) {

    if (Window.flightPath) {
        Window.flightPath.setMap(null);
    }
    

    for (index = 0; index < data.length; ++index) {

        var trackArray = data[index].track;
        trackArray2 = trackArray.map(function (item) {

            return { lat: item.lat, lng: item.lng }
        })

        Window.flightPath = new google.maps.Polyline({
            path: trackArray2,
            //path: [
            //    { lat: data.item1[index].portFrom.lat, lng: data.item1[index].portFrom.lng },
            //    { lat: data.item1[index].portTo.lat, lng: data.item1[index].portTo.lng },
            //],
            geodesic: true,
            strokeColor: data[index].hexColor,
            //strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 3,
            //map: map,
        });

        Window.flightPath.setMap(map);
    }
}

function clearMap() {
    debugger


    Window.flightPath.setMap(null);
    var center = { lat: 46.61618, lng: 31.02424 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: center
    });

    google.maps.event.addListener(map, 'zoom_changed', function () {

        zoom = map.getZoom();
        console.log(zoom);
    });
}

function calculate(id){
    //clear();
    console.log(id);
    //init();

    $.ajax({
        type: "GET",
        url: "/api/VRP",
        //data: { name: "John", location: "Boston" },
        //dataType: 'json', // type of response data
        //timeout: 500,     // timeout milliseconds
        success: function (data, status, xhr) {   // success callback function
            window.solutionData = data;
            localStorage.setItem('solutionData', JSON.stringify(data));
            //let solutionData = JSON.parse(localStorage.getItem('solutionData'));
            initDatagrid();
            fillDatagrid(data.item2);
            console.log(data.item2);

            const textContentOutput = document.getElementById("textContentOutput");
            if (data.item3) {
                textContentOutput.innerHTML = data.item3;
            } else {
                textContentOutput.innerHTML = 'None';
            }

            var center = { lat: 46.61618, lng: 31.02424 };
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: center
            });

            draw(solutionData.item1, map);
        },
        error: function (jqXhr, textStatus, errorMessage) { // error callback 
            $('p').append('Error: ' + errorMessage);
        }
    });
}

function initDatagrid(data) {
    var center = { lat: 46.61618, lng: 31.02424 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: center
    });

    $('#dg').datagrid({
        url: 'datagrid_data.json',
        columns: [[
            { field: 'ch', checkbox: true/*,singleSelect:false*/ },
            /*{ field: 'vehicleId', title: 'VId', width: 30, align: 'center' },*/
            { field: 'vehicleIdInBase', title: 'VId', width: 30, align: 'center' },
            { field: 'capacityT', title: 'Cap_T', width: 60, align: 'right' },
            { field: 'capacityA', title: 'Cap_A', width: 60, align: 'right' },
            {
                field: 'capacityB', title: 'Cap_B', width: 60, align: 'right',
                formater: function (val, row) {
                    debugger
                    var tt = (Math.round(val * 1000) / 1000).toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                    return tt;
                }
            },
            /*{ field: 'capacityC', title: 'Cap_C', width: 60, align: 'right' },*/
            { field: 'demandsT', title: 'Dem_T', width: 60, align: 'right' },
            { field: 'demandsA', title: 'Dem_A', width: 60, align: 'right' },
            { field: 'demandsB', title: 'Dem_B', width: 60, align: 'right' },
            /*{ field: 'demandsC', title: 'Dem_C', width: 60, align: 'right' },*/
            { field: 'distance', title: 'Distance', width: 60, align: 'right' },
            /*{ field: 'movingCosts', title: 'MovingCosts', width: 70, align: 'right' },*/
            { field: 'getArcCostForVehicle', title: 'ArcCostForVehicle', width: 70, align: 'right' },
            { field: 'holdCount', title: 'Hold', width: 30, align: 'right' },
            {
                field: 'shipsSVG', title: 'shipsSVG', width: 220, align: 'left',
                formatter: function (value, row, index) {
                    var result = '';
                    for (var i = 0; i < value.length; i++) {                        
                        if (value.charAt(i) === 'A') {
                            result = result + '<span class="bluebox"></span>';
                        } 
                        if (value.charAt(i) === 'B') {
                            result = result + '<span class="redbox"></span>';
                        }
                    }

                    return result;
                }
            },
            {
                field: 'сostTonByMile', title: 'СostTonByMile', width: 70, align: 'right',
                formatter: function (value, row, index) {

                    return (Math.round(value * 10000) / 100).toFixed(2);
                }
            },
            { field: 'namePort', title: 'NamePort', width: 800, align: 'left' },
            {
                field: 'ratio', title: 'Ratio', width: 50, align: 'right',
                formatter: function (value, row, index) {

                    return (Math.round(value * 100) / 100).toFixed(2);
                }
            },
            /*{ field: 'hexColor', title: 'HexColor', width: 20, align: 'right' },*/
        ]],
        onSelect: function (rowIndex, rowData) {
            let solutionData = JSON.parse(localStorage.getItem('solutionData'));

            zoom = map.getZoom();
            var center = map.getCenter();

            //var mapObject = new google.maps.Map(document.getElementById("map"));
            //var zoom = mapObject.getZoom();

            //var center = { lat: 46.61618, lng: 31.02424 };
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: zoom,
                center: center
            });
            //var itemszz = solutionData.item1.filter(element => element.vehicleId == rowData.vehicleId);
            var rows = $('#dg').datagrid('getSelections');
            var vehicleIds = rows.map(function (item) {
                return item.vehicleId;
            });
            var itemszzz = solutionData.item1.filter(element => vehicleIds.includes(element.vehicleId));
            draw(itemszzz, map);
        },
        onUnselect: function (index, row) {
            let solutionData = JSON.parse(localStorage.getItem('solutionData'));

            zoom = map.getZoom();
            var center = map.getCenter();

            //var mapObject = new google.maps.Map(document.getElementById("map"));
            //var zoom = mapObject.getZoom();

            //var center = { lat: 46.61618, lng: 31.02424 };
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: zoom,
                center: center
            });
            //var itemszz = solutionData.item1.filter(element => element.vehicleId == rowData.vehicleId);
            var rows = $('#dg').datagrid('getSelections');
            var vehicleIds = rows.map(function (item) {
                return item.vehicleId;
            });
            var itemszzz = solutionData.item1.filter(element => vehicleIds.includes(element.vehicleId));
            draw(itemszzz, map);
        }
    });
}

function fillDatagrid(data) {
    console.log(data);
    $('#dg').datagrid('loadData', data);
}

function printRoute(data) {
    data.forEach(drawOneRoute);
}

function printDataTableOne(item, index) {
    debugger
    
}

function drawOneRoute(item, index) {
    let hex = this.colors[item.vehicle];;
    drawLine(item.from, item.to, hex)
}
    
function drawGrid(){

    let line = new PIXI.Graphics();
    
    for (let i = 1; i <= 10; i++) {
        line.lineStyle(2, 0x000000, 1);
        line.moveTo(0, i*100);
        line.lineTo(1000, i*100);
        line.x = 0;
        line.y = 0;
        app.stage.addChild(line);    
    }

    for (let i = 1; i <= 10; i++) {        
        line.lineStyle(2, 0x000000, 1);
        line.moveTo(i * 100, 0);
        line.lineTo(i * 100, 1000);
        line.x = 0;
        line.y = 0;
        app.stage.addChild(line);
    }
}

function drawCircleOne(app, x, y, message){
    let xGrid = (5 + x) * 100;
    let yGrid = (5 - y) * 100
    // 0
    let circle0 = new PIXI.Graphics();
    if(message === '0'){
        circle0.beginFill(0x000000); // black
    } else{
        circle0.beginFill(0x4286f4); // blue
    }
    
    circle0.drawCircle(0, 0, 30);
    circle0.endFill();
    circle0.x = xGrid;
    circle0.y = yGrid;
    app.stage.addChild(circle0);

    let circleAdd0 = new PIXI.Graphics();
    circleAdd0.beginFill(0xFFFFFF);
    circleAdd0.drawCircle(0, 0, 24);
    circleAdd0.endFill();
    circleAdd0.x = xGrid;
    circleAdd0.y = yGrid;
    app.stage.addChild(circleAdd0);

    let style0 = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 22,
        fill: "white",
        stroke: '#ff3300',
        strokeThickness: 4,
        dropShadow: false,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    });

    let message0 = new PIXI.Text(message, style0);
    if (message.length  > 1){
        message0.position.set(xGrid-16, yGrid-15);
    } else {
        message0.position.set(xGrid-8, yGrid-15);
    }
    
    app.stage.addChild(message0);
}

function drawCircle(app){
    // 0
    let circle0 = new PIXI.Graphics();
    circle0.beginFill(0x000000);
    circle0.drawCircle(0, 0, 30);
    circle0.endFill();
    circle0.x = 500;
    circle0.y = 500;
    app.stage.addChild(circle0);

    let circleAdd0 = new PIXI.Graphics();
    circleAdd0.beginFill(0xFFFFFF);
    circleAdd0.drawCircle(0, 0, 24);
    circleAdd0.endFill();
    circleAdd0.x = 500;
    circleAdd0.y = 500;
    app.stage.addChild(circleAdd0);

    let style0 = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 36,
        fill: "white",
        stroke: '#ff3300',
        strokeThickness: 4,
        dropShadow: false,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    });

    let message0 = new PIXI.Text("0", style0);
    message0.position.set(487, 476);
    app.stage.addChild(message0);


    //1
    let circle1 = new PIXI.Graphics();
    circle1.beginFill(0x4286f4);
    circle1.drawCircle(0, 0, 30);
    circle1.endFill();
    circle1.x = 400;
    circle1.y = 400;
    app.stage.addChild(circle1);

    let circleAdd1 = new PIXI.Graphics();
    circleAdd1.beginFill(0xFFFFFF);
    circleAdd1.drawCircle(0, 0, 24);
    circleAdd1.endFill();
    circleAdd1.x = 400;
    circleAdd1.y = 400;
    app.stage.addChild(circleAdd1);

    let style1 = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 36,
        fill: "white",
        stroke: '#ff3300',
        strokeThickness: 4,
        dropShadow: false,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    });

    let message1 = new PIXI.Text("1", style1);
    message1.position.set(387, 376);
    app.stage.addChild(message1);
}

function drawLine(from, to, hex){
    //debugger
    let starPoint = this.points.find(x => x.id === from);
    let endPoint = this.points.find(x => x.id === to);    
    // 4a. Create a line
    var line = new PIXI.Graphics();
      
    // Define line style (think stroke)
    // width, color, alpha
    line.lineStyle(10, hex, 1);
        // Draw line
    let x1 = (5 + starPoint.x) * 100;
    let y1 = (5 - starPoint.y) * 100;
    let x2 = (5 + endPoint.x) * 100;
    let y2 = (5 - endPoint.y) * 100;
    line.moveTo(x1, y1);
    line.lineTo(x2, y2);

    //line.moveTo(0, 0);
    //line.lineTo(100, 100);

    this.app.stage.addChild(line);
}
