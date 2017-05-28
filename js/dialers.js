
Dialer = {

    compose: function ( min, max, step, radius, categoriesNum, containerName, color, categories ) {

        var container,
            circles = [],
            events;

        container = Object.assign({}, Container);
        container.containerEl = container.createContainer(document.createElement('div'), containerName);
        container.renderContainer( container.containerEl, containerName, color );

        var dialer = {
            container: container,
            circles: circles
        };

        for ( var i=0;i<categories.length;i++ ) {

            circles.push(Object.assign( Object.create(container), Circle, Trace, Handle, {
                // Options
                circleBorderThickness: 30,
                circleRadius: radius,
                circleX: 50,
                handleAngle: Math.PI*2,
                color: color
            }));
            circles[i].handleEl = circles[i].createHandle( document.createElement('div'), i, containerName );
            circles[i].handleRadius = circles[i].setHandleRadius( circles[i].circleBorderThickness );
            circles[i].handleAngle = circles[i].setHandleAngle();
            circles[i].circleRadius = radius+i*(circles[i].circleBorderThickness+2);
            circles[i].circleEl = circles[i].createCircle( document.createElement('div'), i, containerName );
            circles[i].traceEl = circles[i].createTrace( document.createElementNS("http://www.w3.org/2000/svg", "path"), i, containerName );

            if ( circles[categories.length-1] )
                container.containerHeight = circles[categories.length-1].circleRadius*2 + circles[i].circleBorderThickness*2,
                container.containerEl.style.height = container.containerHeight+'px'
                document.getElementById('data-container_'+containerName).style.height = container.containerHeight+'px'
                ;
        }

        for ( var j=0;j<circles.length;j++ ) {

            circles[j].circleCenter = {
                x: circles[j].getCircleCenter(circles[j].circleEl).x + circles[j].circleRadius,
                y: container.containerHeight / 2 - circles[j].circleRadius
            };

            circles[j].renderCircle(
                circles[j].circleRadius,
                circles[j].containerEl,
                circles[j].circleEl,
                circles[j].circleBorderThickness,
                color
            );

            circles[j].circleEl.style.top = circles[j].circleCenter.y + 'px'; // Move to Circle class
            circles[j].circleEl.style.left = 'calc('+ circles[j].circleX +'% - '+ circles[j].circleRadius +'px)';

            circles[j].renderTrace(
                document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                circles[j].traceEl,
                container.containerEl,
                j,
                containerName,
                circles[j].containerEl.getBoundingClientRect().width/2,
                circles[j].circleCenter.y + circles[j].circleRadius,
                circles[j].circleRadius - circles[j].handleRadius/2,
                circles[j].circleBorderThickness,
                color
            );

            circles[j].renderHandle(
                circles[j].containerEl.getBoundingClientRect().width/2,
                circles[j].circleCenter.y + circles[j].circleRadius,
                circles[j].circleRadius,
                circles[j].handleRadius,
                circles[j].handleAngle,
                circles[j].circleBorderThickness,
                j,
                circles[j].handleEl,
                circles[j].containerEl,
                color
            );
        }

        events = Object.assign(Object.create(dialer), Events);
        events.bindEvents();
        
        return dialer;
        
    }
};

var bazDialer = Dialer.compose(0,0,0,60,3, 'baz', [195, 53, 79, 1], ['Shopping', 'Music']);
var barDialer = Dialer.compose(0,0,0,60,4, 'bar', [160, 100, 75, 1], ['Shopping', 'Entertainment', 'Electronics', 'Transport']);
var fooDialer = Dialer.compose(0,0,0,80,4, 'foo', [120, 93, 79, 1], ['Shopping', 'Entertainment', 'Renovation', 'Transport']);
var anotherDialer = Dialer.compose(0,0,0,40,3, 'another', [271, 68, 32, 1], ['Shopping', 'Transport']);
