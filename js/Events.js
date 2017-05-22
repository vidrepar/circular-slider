var Events = {
    clickedHandle: null,
    handleEvent: function (e) {
        
        switch (e.type) {
            case 'mousedown':
                e.preventDefault();

                for( var i=0;i<circles.length;i++ ){

                    if ( !circles[i].isInsideHitArea( e, circles[i].circleRadius ) ) continue;
                    this.clickedHandle = circles[i];
                    this.clickedHandle.recalculateHandlePosition(e);
                    document.addEventListener('mousemove', this, false);
                    document.addEventListener('mouseup', this, false);

                }

                break;
            case 'mousemove':
                e.preventDefault();
                this.clickedHandle.recalculateHandlePosition(e);
                break;
            case 'mouseup':
                e.preventDefault();
                document.removeEventListener('mousemove', this, false);
                document.removeEventListener('mouseup', this, false);
                break;
        }
    },
    bindEvents: function () {
        document.addEventListener('mousedown', this, false);
    }
};

Events.bindEvents();