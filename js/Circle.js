/*
 * App
 *   Container
 *      Circle
 * */

var Circle = Container.create({

    circleEl: null,
    circleX: 400,
    circleY: 300,
    circleRadius: 200,
    circleBorderThickness: 30,
    renderCircle: function ( circleRadius ) {

        this.circleEl = document.createElement('div');
        this.circleEl.style.height = circleRadius*2 + 'px';
        this.circleEl.style.width = circleRadius*2 + 'px';
        this.circleEl.style.position = 'absolute';
        this.circleEl.style.borderRadius = '50%';
        this.circleEl.style.border = this.circleBorderThickness+'px solid blue';
        this.circleEl.style.boxSizing = 'border-box';
        this.circleEl.style.top = ( this.circleY - circleRadius )+'px';
        this.circleEl.style.left = ( this.circleX - circleRadius )+'px';
        document.body.appendChild(this.circleEl);

    },
    isInsideHitArea: function ( e ) {
        return ( Math.sqrt( Math.pow( this.circleX - e.clientX, 2 ) + Math.pow( this.circleY - e.clientY, 2 ) ) < this.circleRadius && Math.sqrt( Math.pow( this.circleX - e.clientX, 2 ) + Math.pow( this.circleY - e.clientY, 2 ) ) + this.handleRadius > this.circleRadius
        )

    }

});