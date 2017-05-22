/*
 * App
 *   Container
 *      Circle
 *          Handle
 *          Handle
 *          Handle
 * */


Dialer = {

    containerNames:[],
    compose: function ( min, max, step, radius, categoriesNum, containerName ) {

        var circles = [];

        this.containerNames.push(containerName);

        Container.renderContainer(containerName);

        for ( var i=0;i<categoriesNum;i++ ) {

            circles.push(Circle.create(Handle));

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

        App.dialers.push(circles);

        for (var k = 0; k < App.dialers.length; k++) {
            App.dialers[k].offsetTop = document.getElementById(this.containerNames[k]).offsetTop;
            App.dialers[k].containerEl = document.getElementById(this.containerNames[k]);
        }

    }
};

Dialer.compose(0,0,0,60,4, 'bar');
Dialer.compose(0,0,0,60,3, 'foo');

console.log( 'App.dialers: ', App.dialers );
