/*
 * App
 *   Container
 *      Circle
 *          Handle
 *          Handle
 *          Handle
 * */


Dialer = {

    compose: function ( min, max, step, radius, categoriesNum, containerName, color ) {

        var container,
            circles = [],
            events;

        container = Object.assign({}, Container);
        container.renderContainer(containerName, color);

        var dialer = {
            container: container,
            circles: circles
        };

        for ( var i=0;i<categoriesNum;i++ ) {

            circles.push(Object.assign( Object.create(container), Circle, Handle ));

            circles[i].circleRadius = radius+i*(circles[i].circleBorderThickness+2);
            circles[i].renderCircle( circles[i].circleRadius );
            circles[i].index = i;

            if ( circles[categoriesNum-1] )
                container.containerEl.style.height = ( circles[categoriesNum-1].circleRadius*2 + circles[i].circleBorderThickness*2)+'px',
                container.containerHeight = circles[categoriesNum-1].circleRadius*2 + circles[i].circleBorderThickness*2 ;

        }

        for ( var j=0;j<circles.length;j++ ) {

            circles[j].circleY = container.containerHeight/2;
            circles[j].circleX = circles[j].circleCenterX;
            circles[j].circleEl.style.top = ( container.containerHeight/2 - circles[j].circleRadius ) + 'px';

            circles[j].createHandle(j);
            circles[j].renderHandle(
                circles[j].circleX,
                circles[j].circleY,
                circles[j].circleRadius,
                circles[j].handleRadius,
                circles[j].handleAngle,
                circles[j].circleBorderThickness,
                j,
                circles[j].handleEl
            );
        }

        events = Object.assign(Object.create(dialer), Events);
        events.bindEvents();

        return dialer;
        
    }
};

var bazDialer = Dialer.compose(0,0,0,60,2, 'baz', 'lightblue');
var barDialer = Dialer.compose(0,0,0,60,4, 'bar', 'aquamarine');
var fooDialer = Dialer.compose(0,0,0,80,5, 'foo', 'lightgreen');
var anotherDialer = Dialer.compose(0,0,0,40,3, 'another', 'lightyellow');
