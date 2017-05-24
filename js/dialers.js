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

        // Refactor; Don't work with Container/Circle/Handle objects
        Container.renderContainer(containerName);
        container = Object.assign({}, Container, { containerEl: document.getElementById( containerName ) });

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

var bazDialer = Dialer.compose(0,0,0,60,4, 'bar');


console.log( 'bazDialer: ', bazDialer );
