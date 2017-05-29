
Dialer = {

    compose: function ( min, max, step, radius, containerName, color, categories ) {

        var container,
            circles = [],
            events;

        container = Object.assign({}, Container);
        container.containerEl = container.createContainer(document.createElement('div'), containerName);
        container.renderContainer( container.containerEl, containerName, color );

        var dialer = {
            container: container,
            circles: circles
        };

        for ( var i=0;i<categories.length;i++ ) {

            circles.push(Object.assign( Object.create(container), Circle, Trace, Handle, Value, {
                // Options
                circleBorderThickness: 30,
                circleRadius: radius,
                circleX: 50,
                handleAngle: Math.PI*2,
                color: color,
                dataContainer: document.getElementById('data-container_'+containerName),
                minValue: min,
                maxValue: max,
                step: step
            }));

            var c = circles[i];

            c.circleEl = c.createCircle( document.createElement('div'), i, containerName );
            c.traceEl = c.createTrace( document.createElementNS("http://www.w3.org/2000/svg", "path"), i, containerName );
            c.handleEl = c.createHandle( document.createElement('div'), i, containerName );
            c.valueElContainer = c.createValueContainer( document.createElement('div'), i, containerName, categories[i] );
            c.valueElSymbolContainer = c.createValueSymbol( document.createElement('div'), document.createElement('div'), i, containerName, color ).valueSymbolContainer;
            c.valueElSymbol = c.createValueSymbol( document.createElement('div'), document.createElement('div'), i, containerName, color ).valueSymbol;
            c.valueElName = c.createValueName( document.createElement('div'), categories[i] );
            c.valueEl = c.createValue( document.createElement('div'), c.handleAngle );

            c.handleRadius = c.setHandleRadius( c.circleBorderThickness );
            c.handleAngle = c.setHandleAngle();
            c.circleRadius = radius+i*(c.circleBorderThickness+2);

            if ( circles[categories.length-1] )
                container.containerHeight = circles[categories.length-1].circleRadius*2 + c.circleBorderThickness*2,
                container.containerEl.style.height = container.containerHeight+'px',
                document.getElementById('data-container_'+containerName).style.height = container.containerHeight+'px'
                ;
        }

        for ( var j=0;j<circles.length;j++ ) {

            var c = circles[j];

            c.renderValue(
                c.dataContainer,
                c.valueElContainer,
                c.valueElSymbolContainer,
                c.valueElSymbol,
                c.valueElName,
                c.valueEl,
                c.handleAngle,
                c.minValue,
                c.maxValue,
                c.step
            );

            c.circleCenter = {
                x: c.getCircleCenter(c.circleEl).x + c.circleRadius,
                y: container.containerHeight / 2 - c.circleRadius
            };

            c.renderCircle(
                c.circleRadius,
                c.containerEl,
                c.circleEl,
                c.circleBorderThickness,
                color
            );

            c.circleEl.style.top = c.circleCenter.y + 'px'; // Move to Circle class
            c.circleEl.style.left = 'calc('+ c.circleX +'% - '+ c.circleRadius +'px)';

            c.renderTrace(
                document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                c.traceEl,
                container.containerEl,
                j,
                containerName,
                c.containerEl.getBoundingClientRect().width/2,
                c.circleCenter.y + c.circleRadius,
                c.circleRadius - c.handleRadius/2,
                c.circleBorderThickness,
                color
            );

            c.renderHandle(
                c.containerEl.getBoundingClientRect().width/2,
                c.circleCenter.y + c.circleRadius,
                c.circleRadius,
                c.handleRadius,
                c.handleAngle,
                c.circleBorderThickness,
                j,
                c.handleEl,
                c.containerEl,
                color
            );
        }

        events = Object.assign(Object.create(dialer), Events);
        events.bindEvents();
        
        return dialer;
        
    }
};

Dialer.compose( 0, 1000, 20, 60, 'baz', [195, 53, 79, 1], ['Shopping', 'Music'] );
Dialer.compose( 50, 200, 5, 60, 'bar', [160, 100, 75, 1], ['Shopping', 'Entertainment', 'Electronics', 'Transport'] );
Dialer.compose( 280, 850, 17, 70, 'foo', [120, 93, 79, 1], ['Shopping', 'Entertainment', 'Renovation', 'Transport'] );
Dialer.compose( 15, 45, 2.5, 40, 'another', [271, 68, 32, 1], ['Shopping', 'Transport'] );
