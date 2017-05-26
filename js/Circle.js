/*
 * App
 *   Container
 *      Circle
 * */

var Circle = Container.create({

    circleX: 50,
    circleY: 200,
    circleCenterX: null,
    circleCenterY: null,
    circleBorderThickness: 30,
    renderCircle: function ( circleRadius, containerEl ) {

        this.circleEl = document.createElement('div');
        this.circleEl.style.height = circleRadius*2 + 'px';
        this.circleEl.style.width = circleRadius*2 + 'px';
        this.circleEl.style.position = 'absolute';
        this.circleEl.style.borderRadius = '50%';
        this.circleEl.style.border = this.circleBorderThickness+'px solid blue';
        this.circleEl.style.boxSizing = 'border-box';
        this.circleEl.style.top = ( this.circleCenterY - circleRadius )+'px';
        this.circleEl.style.left = 'calc('+ this.circleX +'% - '+ circleRadius +'px)';
        containerEl.appendChild(this.circleEl);

        this.circleCenterX = this.getCircleCenter(this.circleEl).x + this.circleRadius;
        this.circleCenterY = this.getCircleCenter(this.circleEl).y + this.circleRadius;

    },
    getCircleCenter: function ( el ) {
        var box = el.getBoundingClientRect();
        return {
            y: box.top + window.pageYOffset,
            x: box.left + window.pageXOffset
        };
    },
    isInsideHitArea: function ( e, circleY, circleX ) {

        this.circleCenterX = this.getCircleCenter(this.circleEl).x + this.circleRadius;
        this.circleCenterY = this.getCircleCenter(this.circleEl).y + this.circleRadius;

        // This works
        /*console.log( 'isInside', ( Math.sqrt( Math.pow( circleX - e.pageX, 2 ) + Math.pow( circleY - e.pageY, 2 ) ) < this.circleRadius && Math.sqrt( Math.pow( circleX - e.pageX, 2 ) + Math.pow( circleY - e.pageY, 2 ) ) + this.handleRadius > this.circleRadius
        ) );*/
        
        return  Math.sqrt( Math.pow( this.circleCenterX - e.pageX, 2 ) + Math.pow( this.circleCenterY - e.pageY, 2 ) ) < this.circleRadius &&
                Math.sqrt( Math.pow( this.circleCenterX - e.pageX, 2 ) + Math.pow( this.circleCenterY - e.pageY, 2 ) ) + this.handleRadius > this.circleRadius;


    }

});