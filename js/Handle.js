/*
 * App
 *   Container
 *      Circle
 *          Handle
 * */

var Handle = Circle.create({

    handleEl: null,
    handleY: null,
    handleRadius: null,
    handleAngle: Math.PI*2, // Math.PI
    renderHandle: function ( circleX, circleY, circleRadius, handleRadius, handleAngle, circleBorderThickness, i, handleEl ) {
        this.setHandleRadius(  circleBorderThickness );
        //this.setHandlePosition( circleX, circleY, circleRadius, handleRadius, handleAngle );
        this.designHandle( handleEl, this.setHandlePosition( circleX, circleY, circleRadius, handleRadius, handleAngle ));
        this.containerEl.appendChild( handleEl );
        
    },
    createHandle: function (i) {
        this.handleEl = document.createElement('div');
        this.handleEl['id'] = 'handle_'+i;
    },
    designHandle: function ( handleEl, handlePosition ) {

        handleEl.style.height = this.handleRadius+'px';
        handleEl.style.width = this.handleRadius+'px';
        handleEl.style.position = 'absolute';
        handleEl.style.borderRadius = '50%';
        handleEl.style.backgroundColor = 'red';
        handleEl.style.zIndex = 1;
        this.positionHandle( handleEl, handlePosition );
    },
    positionHandle: function ( handleEl, handlePosition ) {
        handleEl.style.top = ( handlePosition.y - this.handleRadius/2 )+'px';
        handleEl.style.left = ( this.handleX - this.handleRadius/2 ) + 'px';
    },
    setHandleRadius: function ( circleBorderThickness ) {
        this.handleRadius = circleBorderThickness;
        return circleBorderThickness;
    },
    setHandlePosition: function ( circleX, circleY, circleRadius, handleRadius, handleAngle ) {
        this.handleX = circleX + (  circleRadius - this.handleRadius/2 ) * Math.cos( handleAngle );
        this.handleY = circleY + (  circleRadius - this.handleRadius/2 ) * Math.sin( handleAngle );
        return {
            x: circleY + (  circleRadius - this.handleRadius/2 ) * Math.cos( handleAngle ),
            y: circleY + (  circleRadius - this.handleRadius/2 ) * Math.sin( handleAngle )
        }
    },
    recalculateHandlePosition: function (e, circleX, circleY) {

        var r = this.containerEl.getBoundingClientRect(),
            mX = e.clientX - r.left,
            mY = e.clientY - r.top,
            dX = mX - circleX,
            dY = mY - circleY;

        this.handleAngle = Math.atan2(dY, dX);
        this.designHandle(
            this.handleEl,
            this.setHandlePosition(
                circleX,
                circleY,
                this.circleRadius,
                this.handleRadius,
                this.handleAngle
            )
        );

    }

});