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
    designHandle: function (handleEl) {

        handleEl.style.height = this.handleRadius+'px';
        handleEl.style.width = this.handleRadius+'px';
        handleEl.style.position = 'absolute';
        handleEl.style.borderRadius = '50%';
        handleEl.style.backgroundColor = 'red';
        handleEl.style.top = ( this.handleY - this.handleRadius/2 )+'px';
        handleEl.style.left = ( this.handleX - this.handleRadius/2 ) + 'px';
        handleEl.style.zIndex = 1;
    },
    setHandleRadius: function ( circleBorderThickness ) {
        return this.handleRadius = circleBorderThickness;
    },
    setHandlePosition: function ( circleX, circleY, circleRadius, handleRadius, handleAngle ) {
        this.handleX = this.circleCenterX + (  circleRadius - this.handleRadius/2 ) * Math.cos( handleAngle );
        this.handleY = this.circleCenterY + (  circleRadius - this.handleRadius/2 ) * Math.sin( handleAngle );
    },
    recalculateHandlePosition: function (e) {

        // console.log( 'this.circleCenterY: ', this.circleCenterY );
        // console.log( 'e.pageY: ', e.pageY );

        var r = this.containerEl.getBoundingClientRect(),
            mX = e.clientX - r.left,
            mY = e.clientY - r.top,
            dX = mX - this.circleCenterX,
            dY = mY - this.circleCenterY;

        this.handleAngle = Math.atan2(dY + 10, dX);

        this.setHandlePosition( this.circleX, this.circleY, this.circleRadius, this.handleRadius, this.handleAngle );
        this.designHandle( this.handleEl ); // Should change just top and left values, refactor

    }

});