
var circles = [];
var circlesNum = 4;

for ( var i=0;i<circlesNum;i++ ) {

    circles.push(Circle.create(Handle));

    circles[i].circleRadius = circles[i].circleRadius+i*(circles[i].circleBorderThickness+2);
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