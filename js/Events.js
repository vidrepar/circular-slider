var Events = {
    draggedHandle: null,
    handleEvent: function (e) {

        switch (e.type) {
            case 'mousedown':
                e.preventDefault();
                
                for( var i=0;i<this.circles.length;i++ ){

                    if ( !this.circles[i].isInsideHitArea(
                        e,
                        this.circles[i].circleEl,
                        this.circles[i].circleRadius,
                        this.circles[i].handleRadius
                        ) ) continue;

                    this.draggedHandle = this.circles[i];
                    this.draggedHandle.recalculateHandlePosition(
                        e,
                        this.draggedHandle
                            .getCircleCenter( this.draggedHandle.circleEl).x + this.draggedHandle.circleRadius,
                            this.draggedHandle.getCircleCenter( this.draggedHandle.circleEl).y +
                            this.draggedHandle.circleRadius -
                            this.draggedHandle.containerEl.getBoundingClientRect().top -
                            window.pageYOffset,
                        this.draggedHandle.setHandleRadius(this.draggedHandle.circleBorderThickness),
                        this.draggedHandle.handleEl,
                        this.draggedHandle.circleRadius,
                        this.draggedHandle.containerEl.getBoundingClientRect().left
                    );
                    this.draggedHandle.setTraceAngle(
                        this.draggedHandle.handleAngle,
                        this.draggedHandle.traceEl,
                        this.draggedHandle.containerEl.getBoundingClientRect().width/2,
                        this.draggedHandle.circleCenter.y + this.draggedHandle.circleRadius,
                        this.draggedHandle.circleRadius - this.draggedHandle.handleRadius/2
                    );
                    this.container.containerEl.addEventListener('mousemove', this, false);
                    this.container.containerEl.addEventListener('mouseup', this, false);
                }

                break;
            case 'mousemove':
                e.preventDefault();
                this.draggedHandle.recalculateHandlePosition(
                    e,
                    this.draggedHandle
                        .getCircleCenter( this.draggedHandle.circleEl).x + this.draggedHandle.circleRadius,
                    this.draggedHandle.getCircleCenter( this.draggedHandle.circleEl).y +
                    this.draggedHandle.circleRadius -
                    this.draggedHandle.containerEl.getBoundingClientRect().top -
                    window.pageYOffset,
                    this.draggedHandle.setHandleRadius(this.draggedHandle.circleBorderThickness),
                    this.draggedHandle.handleEl,
                    this.draggedHandle.circleRadius,
                    this.draggedHandle.containerEl.getBoundingClientRect().left
                );
                this.draggedHandle.setTraceAngle(
                    this.draggedHandle.handleAngle,
                    this.draggedHandle.traceEl,
                    this.draggedHandle.containerEl.getBoundingClientRect().width/2,
                    this.draggedHandle.circleCenter.y + this.draggedHandle.circleRadius,
                    this.draggedHandle.circleRadius - this.draggedHandle.handleRadius/2
                );
                break;
            case 'mouseup':
            case 'mouseleave':
                e.preventDefault();
                this.container.containerEl.removeEventListener('mousemove', this, false);
                this.container.containerEl.removeEventListener('mouseup', this, false);
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
        this.container.containerEl.addEventListener('mousedown', this, false);
        this.container.containerEl.addEventListener('mouseleave', this, false);
        window.addEventListener('resize', this, false);
    }
};