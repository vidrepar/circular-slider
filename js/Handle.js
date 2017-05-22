/*
 * App
 *   Container
 *      Circle
 *          Handle
 * */

var Handle = Circle.create({

    handleEl: null,
    handleX: null,
    handleY: null,
    handleRadius: null,
    handleAngle: Math.PI*2, // Math.PI
    renderHandle: function ( circleX, circleY, circleRadius, handleRadius, handleAngle, circleBorderThickness, i, handleEl ) {
        this.setHandleRadius(  circleBorderThickness );
        this.setHandlePosition( circleX, circleY, circleRadius, handleRadius, handleAngle );
        this.designHandle(handleEl);
        this.containerEl.appendChild(this.handleEl);
    },
    createHandle: function (i) {
        this.handleEl = document.createElement('div');
        this.handleEl['id'] = 'handle_'+i;
    },
    designHandle: function (handleEl, offsetTop) {

        console.log( offsetTop );

        handleEl.style.height = this.handleRadius+'px';
        handleEl.style.width = this.handleRadius+'px';
        handleEl.style.position = 'absolute';
        handleEl.style.borderRadius = '50%';
        handleEl.style.backgroundColor = 'red';
        handleEl.style.top = ( this.handleY - this.handleRadius/2 )+'px';
        handleEl.style.left = ( this.handleX - this.handleRadius/2 ) + 'px';
    },
    setHandleRadius: function ( circleBorderThickness ) {
        return this.handleRadius = circleBorderThickness;
    },
    setHandlePosition: function ( circleX, circleY, circleRadius, handleRadius, handleAngle ) {
        this.handleX = circleX + (  circleRadius - this.handleRadius/2 ) * Math.cos( handleAngle );
        this.handleY = circleY + (  circleRadius - this.handleRadius/2 ) * Math.sin( handleAngle );
    },
    recalculateHandlePosition: function (e, offsetTop) {

        console.log(offsetTop);

        var r = this.containerEl.getBoundingClientRect(),
            mX = e.clientX - r.left,
            mY = e.clientY - r.top,
            dX = mX - this.circleX,
            dY = mY - this.circleY;

        this.handleAngle = Math.atan2(dY, dX);

        this.setHandlePosition( this.circleX, this.circleY, this.circleRadius, this.handleRadius, this.handleAngle, offsetTop );
        this.designHandle( this.handleEl, offsetTop ); // Should change just top and left values, refactor

    }

});