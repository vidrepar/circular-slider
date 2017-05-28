
var Handle = {

    renderHandle: function ( circleX, circleY, circleRadius, handleRadius, handleAngle, circleBorderThickness, i, handleEl, containerEl, color ) {

        this.designHandle(
            handleEl,
            this.setHandlePosition( circleX, circleY, circleRadius, handleRadius, handleAngle ),
            handleRadius,
            color,
            i
        );
        containerEl.appendChild( handleEl );

    },
    createHandle: function ( el, i, containerName ) {
        el['id'] = 'handle_'+containerName+'_'+i;
        return el;
    },
    designHandle: function ( handleEl, handlePosition, handleRadius, color, i ) {

        handleEl.style.height = handleRadius+'px';
        handleEl.style.width = handleRadius+'px';
        handleEl.style.position = 'absolute';
        handleEl.style.borderRadius = '50%';
        handleEl.style.backgroundColor = 'hsla('+color[0]/(1+i*2.7)+', '+color[1]+'%, '+color[2]+'%, 1)';
        handleEl.style.border = '8px solid #fff';
        handleEl.style.boxSizing = 'border-box';
        handleEl.style.boxShadow = '1px #000';
        handleEl.style.zIndex = 3;
        this.positionHandle( handleEl, handlePosition, handleRadius );
    },
    positionHandle: function ( handleEl, handlePosition, handleRadius ) {
        handleEl.style.top = ( handlePosition.y - handleRadius/2 )+'px';
        handleEl.style.left = ( handlePosition.x - handleRadius/2 ) + 'px';
    },
    setHandleRadius: function ( circleBorderThickness ) {
        return circleBorderThickness;
    },
    setHandlePosition: function ( circleX, circleY, circleRadius, handleRadius, handleAngle ) {
        return {
            x: circleX + (  circleRadius - handleRadius/2 ) * Math.cos( handleAngle ),
            y: circleY + (  circleRadius - handleRadius/2 ) * Math.sin( handleAngle )
        }
    },
    setHandleAngle: function ( e, circleX, circleY ) {

        if ( !e ) return -Math.PI/2;

        var r = this.containerEl.getBoundingClientRect(),
            mX = e.clientX,
            mY = e.clientY - r.top,
            dX = mX - circleX,
            dY = mY - circleY;

        this.handleAngle = Math.atan2(dY, dX); // For dynamic positioning during resizing; refactor in the future;
        return Math.atan2(dY, dX);
    },
    recalculateHandlePosition: function ( e, circleX, circleY, handleRadius, handleEl, circleRadius, containerLeftMargin, color ) {
        this.designHandle(
            handleEl,
            this.setHandlePosition(
                circleX-containerLeftMargin,
                circleY,
                circleRadius,
                handleRadius,
                this.setHandleAngle( e, circleX, circleY )
            ),
            handleRadius,
            color
        );
    }
};