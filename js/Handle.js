/*
 * App
 *   Container
 *      Circle
 *          Handle
 * */

var Handle = Circle.create({

    handleEl: null,
    handleX: null,
    handleY: null,
    handleRadius: 30,
    handleAngle: Math.PI*2, // Math.PI
    renderHandle: function () {

        this.setHandlePosition( this.handleAngle );

        this.handleEl = document.createElement('div');
        this.designHandle();
        document.body.appendChild(this.handleEl); // Or document.body

    },
    designHandle: function () {
        this.handleEl.style.height = this.handleRadius+'px';
        this.handleEl.style.width = this.handleRadius+'px';
        this.handleEl.style.position = 'absolute';
        this.handleEl.style.borderRadius = '50%';
        this.handleEl.style.backgroundColor = 'red';
        this.handleEl.style.top = ( this.handleY - this.handleRadius/2 )+'px';
        this.handleEl.style.left = ( this.handleX - this.handleRadius/2 ) + 'px';
    },
    setHandlePosition: function ( handleAngle ) {

        this.handleX = this.circleX + this.circleRadius * Math.cos( handleAngle );
        this.handleY = this.circleY + this.circleRadius * Math.sin( handleAngle );

    },
    calculateNewHandlePosition: function (e) {

        var r = this.containerEl.getBoundingClientRect(),
            mx = e.clientX - r.left,
            my = e.clientY - r.top;

        var dx = mx - this.circleX,
            dy = my - this.circleY;

        this.handleAngle = Math.atan2(dy, dx);

        this.setHandlePosition( this.handleAngle );
        this.designHandle();

    }

});

Handle.renderHandle();

document.body.addEventListener('click', Handle.calculateNewHandlePosition.bind(Handle)); // Listeners with bind cannot be removed
// document.body.addEventListener('mousemove', Handle.calculateNewHandlePosition.bind(Handle));

/*if ( Math.sqrt( Math.pow( this.circle.x - e.clientX, 2 ) + Math.pow( this.circle.y - e.clientY, 2 ) ) - this.slider.radius < this.circle.radius && Math.sqrt( Math.pow( this.circle.x - e.clientX, 2 ) + Math.pow( this.circle.y - e.clientY, 2 ) ) + this.slider.radius > this.circle.radius
 ) { }*/