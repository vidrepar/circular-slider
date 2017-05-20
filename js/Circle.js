/*
 * App
 *   Container
 *      Circle
 * */

var Circle = Container.create({

    circleEl: null,
    circleX: 200,
    circleY: 200,
    circleRadius: 100,
    renderCircle: function () {

        this.circleEl = document.createElement('div');
        this.circleEl.style.height = this.circleRadius*2 + 'px';
        this.circleEl.style.width = this.circleRadius*2 + 'px';
        this.circleEl.style.position = 'absolute';
        this.circleEl.style.borderRadius = '50%';
        // this.circleEl.style.border = '10px solid black';
        this.circleEl.style.backgroundColor = 'black';
        this.circleEl.style.top = ( this.circleY - this.circleRadius )+'px';
        this.circleEl.style.left = ( this.circleX - this.circleRadius )+'px';
        document.body.appendChild(this.circleEl);

    }

});

Circle.renderCircle();