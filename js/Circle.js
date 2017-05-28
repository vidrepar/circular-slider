
var Circle = {

    renderCircle: function ( circleRadius, containerEl, circleEl, circleBorderThickness, color ) {

        circleEl.style.height = circleRadius*2 + 'px';
        circleEl.style.width = circleRadius*2 + 'px';
        circleEl.style.position = 'absolute';
        circleEl.style.borderRadius = '50%';
        circleEl.style.border = circleBorderThickness+'px solid '+ 'hsla('+color[0]+', '+color[1]+'%, '+color[2]+'%, 0.4)';
        circleEl.style.boxSizing = 'border-box';
        circleEl.style.zIndex = 1;
        containerEl.appendChild( circleEl );
    },
    createCircle: function ( circleEl, i, containerName ) {
        circleEl['id'] = 'circle_'+containerName+'_'+i;
        return circleEl;
    },
    getCircleCenter: function ( el ) {
        var box = el.getBoundingClientRect();
        return {
            y: box.top + window.pageYOffset,
            x: box.left + window.pageXOffset
        };
    },
    isInsideHitArea: function ( e, circleEl, circleRadius, handleRadius ) {

        var circleCenterX = this.getCircleCenter( circleEl ).x + circleRadius,
            circleCenterY = this.getCircleCenter( circleEl ).y + circleRadius;

        return  Math.sqrt( Math.pow( circleCenterX - e.pageX, 2 ) + Math.pow( circleCenterY - e.pageY, 2 ) ) < circleRadius &&
                Math.sqrt( Math.pow( circleCenterX - e.pageX, 2 ) + Math.pow( circleCenterY - e.pageY, 2 ) ) + handleRadius > circleRadius;
    }

};