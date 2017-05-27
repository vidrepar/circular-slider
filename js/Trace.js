
var Trace = {
    renderTrace: function ( traceContainer, traceEl, containerEl, i, containerName ) {


        this.createAndAppendTraceContainer( traceContainer, traceEl, containerEl, i, containerName );
        //this.designTrace( traceEl, i, containerName );

        this.createSvg( this.designTrace( traceEl, i, containerName ) );

    },
    createAndAppendTraceContainer: function ( traceContainer, traceEl, containerEl, i, containerName ) {
        traceContainer['id'] = 'trace_container_'+containerName+'_'+i;
        traceContainer.style.position = 'absolute';
        traceContainer.style.zIndex = '3';
        traceContainer.setAttribute('width', '500px'); // Refactor
        traceContainer.setAttribute('height', '500px'); // Refactor
        containerEl.appendChild( traceContainer );
        traceContainer.appendChild( traceEl );
    },
    designTrace: function ( traceEl, i, containerName ) {

        traceEl['id'] = 'trace_'+containerName+'_'+i;
        traceEl.style.zIndex = '3';
        traceEl.setAttribute('fill', 'none');
        traceEl.setAttribute('stroke', '#446688');
        traceEl.setAttribute('stroke-width', '20px');
        traceEl.setAttribute('d', 'M 63.39745962155614 99.99999999999999 A 100 100 0 1 0 150 50');
        return traceEl;
    },
    createSvg: function ( traceEl ) {
        function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
            var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

            return {
                x: centerX + (radius * Math.cos(angleInRadians)),
                y: centerY + (radius * Math.sin(angleInRadians))
            };
        }

        function traceArc(x, y, radius, startAngle, endAngle){

            var start = polarToCartesian(x, y, radius, endAngle);
            var end = polarToCartesian(x, y, radius, startAngle);

            var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

            var d = [
                "M", start.x, start.y,
                "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
            ].join(" ");

            return d;
        }


            //document.getElementById("arc1").setAttribute("d", traceArc(150, 150, 100, 0, 333));

    }
};