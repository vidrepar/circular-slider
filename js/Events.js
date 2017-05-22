var Events = {
    clickedHandle: null,
    clickedOffsetTop: null,
    handleEvent: function (e) {
        
        switch (e.type) {
            case 'mousedown':
                e.preventDefault();

                for( var i=0;i<App.dialers.length;i++ ){

                    for( var j=0;j<App.dialers[i].length;j++ ){

                        if ( !App.dialers[i][j].isInsideHitArea( e, App.dialers[i].offsetTop ) ) continue;
                        this.clickedOffsetTop = App.dialers[i].offsetTop;
                        this.clickedHandle = App.dialers[i][j];
                        this.clickedHandle.recalculateHandlePosition(e, this.clickedOffsetTop);
                        document.addEventListener('mousemove', this, false);
                        document.addEventListener('mouseup', this, false);

                    }

                }

                break;
            case 'mousemove':
                e.preventDefault();
                this.clickedHandle.recalculateHandlePosition(e, this.clickedOffsetTop);
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