var Events = {
    draggedHandle: null,
    handleEvent: function (e) {
        
        console.log( 'e.type: ', e.type );
        
        switch (e.type) {
            case 'mousedown':
                e.preventDefault();
                
                console.log( 'this: ', this );

                for( var i=0;i<this.circles.length;i++ ){

                    if ( !this.circles[i].isInsideHitArea(e) ) continue;
                    this.draggedHandle = this.circles[i];
                    this.draggedHandle.recalculateHandlePosition(e);
                    this.container.containerEl.addEventListener('mousemove', this, false);
                    this.container.containerEl.addEventListener('mouseup', this, false);
                }

                break;
            case 'mousemove':
                e.preventDefault();
                this.draggedHandle.recalculateHandlePosition(e);
                break;
            case 'mouseup':
            case 'mouseleave':
                e.preventDefault();
                this.container.containerEl.removeEventListener('mousemove', this, false);
                this.container.containerEl.removeEventListener('mouseup', this, false);
                this.draggedHandle = null;
                break;
        }
    },
    bindEvents: function () {
        this.container.containerEl.addEventListener('mousedown', this, false);
        this.container.containerEl.addEventListener('mouseleave', this, false);
    }
};