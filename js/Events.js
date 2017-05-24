var Events = {
    clickedHandle: null,
    handleEvent: function (e) {
        
        switch (e.type) {
            case 'mousedown':
                e.preventDefault();

                console.log( 'foobarbaz' );

                document.addEventListener('mousemove', this, false);
                document.addEventListener('mouseup', this, false);

                console.log( 'this: ', this.circles );
                
                /*for( var i=0;i<this.circles.length;i++ ){

                }*/

                /*for( var i=0;i<App.dialers.length;i++ ){

                    for( var j=0;j<App.dialers[i].length;j++ ){

                        if ( !App.dialers[i][j].isInsideHitArea( e, App.dialers[i].offsetTop ) ) continue;
                        this.clickedOffsetTop = App.dialers[i].offsetTop;
                        this.clickedHandle = App.dialers[i][j];
                        this.clickedHandle.recalculateHandlePosition(e, this.clickedOffsetTop);

                    }

                }*/

                break;
            case 'mousemove':
                e.preventDefault();
                console.log( this.clickedHandle );
                this.clickedHandle.recalculateHandlePosition(e);
                break;
            case 'mouseup':
                e.preventDefault();
                document.removeEventListener('mousemove', this, false);
                document.removeEventListener('mouseup', this, false);
                this.clickedHandle = null;
                break;
        }
    },
    bindEvents: function () {
        document.getElementById( 'bar' ).addEventListener('mousedown', this, false);
    }
};