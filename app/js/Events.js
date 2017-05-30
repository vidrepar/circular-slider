var Events = {
    draggedHandle: null,
    handleEvent: function (e) {

        var event = e;
        if ( e.type === 'touchstart' ||
             e.type === 'touchmove' ) event = event.targetTouches[0];

        switch ( e.type ) {
            case 'touchstart':
            case 'mousedown':
                
                for( var i=0;i<this.circles.length;i++ ){

                    if ( !this.circles[i].isInsideHitArea(
                        event,
                        this.circles[i].circleEl,
                        this.circles[i].circleRadius,
                        this.circles[i].handleRadius
                        ) ) continue;

                    this.draggedHandle = this.circles[i];
                    this.draggedHandle.recalculateHandlePosition(
                        event,
                        this.draggedHandle
                            .getCircleCenter( this.draggedHandle.circleEl).x + this.draggedHandle.circleRadius - pageXOffset,
                            this.draggedHandle.getCircleCenter( this.draggedHandle.circleEl).y +
                            this.draggedHandle.circleRadius -
                            this.draggedHandle.containerEl.getBoundingClientRect().top -
                            window.pageYOffset,
                        this.draggedHandle.setHandleRadius(this.draggedHandle.circleBorderThickness),
                        this.draggedHandle.handleEl,
                        this.draggedHandle.circleRadius,
                        this.draggedHandle.containerEl.getBoundingClientRect().left,
                        this.draggedHandle.color
                    );
                    this.draggedHandle.setTraceAngle(
                        this.draggedHandle.handleAngle,
                        this.draggedHandle.traceEl,
                        this.draggedHandle.containerEl.getBoundingClientRect().width/2,
                        this.draggedHandle.circleCenter.y + this.draggedHandle.circleRadius,
                        this.draggedHandle.circleRadius - this.draggedHandle.handleRadius/2
                    );
                    this.draggedHandle.angleToMoney(
                        this.draggedHandle.handleAngle,
                        this.draggedHandle.valueEl,
                        this.draggedHandle.minValue,
                        this.draggedHandle.maxValue,
                        this.draggedHandle.step
                    );
                    this.container.containerEl.addEventListener('touchmove', this, false);
                    this.container.containerEl.addEventListener('touchend', this, false);
                    this.container.containerEl.addEventListener('touchcancel', this, false);
                    this.container.containerEl.addEventListener('mousemove', this, false);
                    this.container.containerEl.addEventListener('mouseup', this, false);
                }

                if ( null !== this.draggedHandle ) e.preventDefault();

                break;
            case 'touchmove':
            case 'mousemove':

                this.draggedHandle.recalculateHandlePosition(
                    event,
                    this.draggedHandle.getCircleCenter( this.draggedHandle.circleEl).x + this.draggedHandle.circleRadius - pageXOffset,
                    this.draggedHandle.getCircleCenter( this.draggedHandle.circleEl).y +
                    this.draggedHandle.circleRadius -
                    this.draggedHandle.containerEl.getBoundingClientRect().top -
                    window.pageYOffset,
                    this.draggedHandle.setHandleRadius(this.draggedHandle.circleBorderThickness),
                    this.draggedHandle.handleEl,
                    this.draggedHandle.circleRadius,
                    this.draggedHandle.containerEl.getBoundingClientRect().left,
                    this.draggedHandle.color
                );
                this.draggedHandle.setTraceAngle(
                    this.draggedHandle.handleAngle,
                    this.draggedHandle.traceEl,
                    this.draggedHandle.containerEl.getBoundingClientRect().width/2,
                    this.draggedHandle.circleCenter.y + this.draggedHandle.circleRadius,
                    this.draggedHandle.circleRadius - this.draggedHandle.handleRadius/2
                );
                this.draggedHandle.angleToMoney(
                    this.draggedHandle.handleAngle,
                    this.draggedHandle.valueEl,
                    this.draggedHandle.minValue,
                    this.draggedHandle.maxValue,
                    this.draggedHandle.step
                );
                e.preventDefault();
                break;
            case 'touchend':
            case 'touchcancel':
            case 'mouseup':
            case 'mouseleave':
                e.preventDefault();
                this.container.containerEl.removeEventListener('mousemove', this, false);
                this.container.containerEl.removeEventListener('mouseup', this, false);
                this.container.containerEl.removeEventListener('touchmove', this, false);
                this.container.containerEl.removeEventListener('touchend', this, false);
                this.container.containerEl.removeEventListener('touchcancel', this, false);
                this.draggedHandle = null;
                break;
            case 'resize':

                for( var j=0;j<this.circles.length;j++ ){

                    this.circles[j].positionHandle(
                        this.circles[j].handleEl,
                        this.circles[j].setHandlePosition(
                            this.circles[j].containerEl.getBoundingClientRect().width/2,
                            this.circles[j].circleY,
                            this.circles[j].circleRadius,
                            this.circles[j].setHandleRadius(this.circles[j].circleBorderThickness),
                            this.circles[j].handleAngle
                        ),
                        this.circles[j].setHandleRadius(this.circles[j].circleBorderThickness)
                    );
                }
        }
    },
    bindEvents: function () {
        this.container.containerEl.addEventListener('touchstart', this, false);
        this.container.containerEl.addEventListener('mousedown', this, false);
        this.container.containerEl.addEventListener('mouseleave', this, false);
        window.addEventListener('resize', this, false);
    }
};