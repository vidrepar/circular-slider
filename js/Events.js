var Events = {
    draggedHandle: null,
    handleEvent: function (e) {
        
        switch (e.type) {
            case 'mousedown':
                e.preventDefault();
                
                for( var i=0;i<this.circles.length;i++ ){

                    if ( !this.circles[i].isInsideHitArea(e) ) continue;
                    this.draggedHandle = this.circles[i];
                    this.draggedHandle.recalculateHandlePosition(
                        e,
                        this.circles[i].getCircleCenter(this.circles[i].circleEl).x + this.circles[i].circleRadius,
                        this.circles[i].getCircleCenter(this.circles[i].circleEl).y + this.circles[i].circleRadius - this.draggedHandle.containerEl.getBoundingClientRect().top - window.pageYOffset
                    );
                    this.container.containerEl.addEventListener('mousemove', this, false);
                    this.container.containerEl.addEventListener('mouseup', this, false);

                }

                break;
            case 'mousemove':
                e.preventDefault();
                this.draggedHandle.recalculateHandlePosition(
                    e,
                    this.draggedHandle.getCircleCenter(this.draggedHandle.circleEl).x + this.draggedHandle.circleRadius,
                    this.draggedHandle.getCircleCenter(this.draggedHandle.circleEl).y + this.draggedHandle.circleRadius - this.draggedHandle.containerEl.getBoundingClientRect().top - window.pageYOffset
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

                    // console.log(this.circles[0].containerEl.getBoundingClientRect().width/2);

                    this.circles[j].setHandlePosition(
                        this.circles[j].containerEl.getBoundingClientRect().width/2,
                        this.circles[j].circleY,
                        this.circles[j].circleRadius,
                        this.circles[j].handleRadius,
                        this.circles[j].handleAngle,
                        this.circles[j].circleBorderThickness,
                        j,
                        this.circles[j].handleEl
                    );
                    this.circles[j].positionHandle(
                        this.circles[j].handleEl,
                        this.circles[j].circleBorderThickness
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