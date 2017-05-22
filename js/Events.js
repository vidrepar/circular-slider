var Events = {
    clickedHandle: null,
    handleEvent: function (e) {
        
        switch (e.type) {
            case 'mousedown':
                e.preventDefault();

                for( var i=0;i<App.dialers.length;i++ ){
                    
                    for( var j=0;j<App.dialers[i].length;j++ ){

                        if ( !App.dialers[i][j].isInsideHitArea( e, App.dialers[i].offsetTop ) ) continue;

                        this.clickedHandle = App.dialers[i][j];
                        this.clickedHandle.recalculateHandlePosition(e, App.dialers[i].offsetTop);
                        document.addEventListener('mousemove', this, false);
                        document.addEventListener('mouseup', this, false);

                    }

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