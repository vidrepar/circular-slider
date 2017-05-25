/*
 * App
 *   Container
 *      Circle
 *          Handle
 *          Handle
 *          Handle
 * */


Dialer = {

    compose: function ( min, max, step, radius, categoriesNum, containerName ) {

        var container,
            circles = [],
            events;

        container = Object.assign({}, Container);
        container.renderContainer(containerName);

        var dialer = {
            container: container,
            circles: circles
        };

        for ( var i=0;i<categoriesNum;i++ ) {

            circles.push(Object.assign( Object.create(container) , {}, Circle, Handle ));

            circles[i].circleRadius = radius+i*(circles[i].circleBorderThickness+2);
            circles[i].renderCircle( circles[i].circleRadius );
            circles[i].createHandle(i);
            circles[i].renderHandle(
                circles[i].circleX,
                circles[i].circleY,
                circles[i].circleRadius,
                circles[i].handleRadius,
                circles[i].handleAngle,
                circles[i].circleBorderThickness,
                i,
                circles[i].handleEl
            );
            circles[i].index = i;

        }

        events = Object.assign(Object.create(dialer), Events);
        events.bindEvents();

        return dialer;
        
    }
};

var bazDialer = Dialer.compose(0,0,0,60,2, 'baz');
var barDialer = Dialer.compose(0,0,0,60,4, 'bar');
var fooDialer = Dialer.compose(0,0,0,80,5, 'foo');
var anotherDialer = Dialer.compose(0,0,0,40,3, 'another');
