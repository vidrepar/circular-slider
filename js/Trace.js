
var Trace = {
    renderTrace: function (
        traceContainer,
        traceEl,
        containerEl,
        i,
        containerName,
        circleX,
        circleY,
        circleRadius,
        circleBorderThickness
    ) {

        this.appendTraceContainer( traceContainer, traceEl, containerEl, containerName, i );
        this.designTrace( traceEl, i, containerName, circleX, circleY, circleRadius, circleBorderThickness );
    },
    createTrace: function ( traceEl, i, containerName ) {
        traceEl['id'] = 'trace_'+containerName+'_'+i;
        return traceEl;
    },
    appendTraceContainer: function ( traceContainer, traceEl, containerEl, containerName, i ) {
        this.designTraceContainer( traceContainer, traceEl, containerName, i );
        containerEl.appendChild( traceContainer );
        traceContainer.appendChild( traceEl );
    },
    designTraceContainer: function ( traceContainer, containerName, i ) {

        traceContainer['id'] = 'trace_container_'+containerName+'_'+i;
        traceContainer.style.position = 'absolute';
        traceContainer.style.zIndex = '2';
        traceContainer.style.left = '0';
        traceContainer.setAttribute('width', '500px'); // Refactor
        traceContainer.setAttribute('height', '500px'); // Refactor
    },
    designTrace: function ( traceEl, i, containerName, circleX, circleY, circleRadius, circleBorderThickness, handleAngle ) {
        traceEl['id'] = 'trace_'+containerName+'_'+i;
        traceEl.style.zIndex = '3';
        traceEl.setAttribute('fill', 'none');
        traceEl.setAttribute('stroke', '#446688');
        traceEl.setAttribute('stroke-width', circleBorderThickness+'px');
        this.setTraceAngle( handleAngle, traceEl, circleX, circleY, circleRadius );
        return traceEl;
    },
    setTraceAngle: function ( handleAngle, traceEl, circleX, circleY, circleRadius ) {

        if ( !handleAngle ) handleAngle = -Math.PI/2;
        traceEl.setAttribute('d', this.traceArc( circleX, circleY, circleRadius, -Math.PI/2, handleAngle )); // Change 4 to this.handleAngle

    },
    traceArc: function ( x, y, radius, startAngle, endAngle ) {

        var start = this.polarToCartesianCoords( x, y, radius, endAngle );
        var end = this.polarToCartesianCoords( x, y, radius, startAngle );
        var largeArcFlag = endAngle - startAngle <= Math.PI
            ? ( endAngle - startAngle ) < 0 && ( endAngle - startAngle ) > -Math.PI/2
                ? '1'
                : '0'
            : '1'
            ;
        return [
            'M', start.x, start.y,
            'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(' ');
    },
    polarToCartesianCoords: function ( centerX, centerY, radius, angleInDegrees ) {
        return {
            x: centerX + (radius * Math.cos( angleInDegrees )),
            y: centerY + (radius * Math.sin( angleInDegrees ))
        };
    }
};