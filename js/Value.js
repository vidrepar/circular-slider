
var Value = {

    renderValue: function ( containerEl, valueElContainer, valueSymbolContainer, valueSymbol, valueNameEl, valueEl, angle, outMin, outMax, step ) {

        this.angleToMoney( angle, valueEl, outMin, outMax, step );
        containerEl.appendChild( valueElContainer );
        valueElContainer.appendChild( valueSymbolContainer );
        valueSymbolContainer.appendChild( valueSymbol );
        valueElContainer.appendChild( valueNameEl );
        valueElContainer.appendChild( valueEl );
    },
    createValueContainer: function ( valueElContainer, i, containerName ) {
        valueElContainer['id'] = 'value_container_'+containerName+'_'+i;
        valueElContainer['className'] = 'value-container';
        return valueElContainer;
    },
    createValueSymbol: function ( valueSymbolContainer, valueSymbol, i, containerName, color ) {
        valueSymbolContainer['className'] = 'value-symbol';
        valueSymbolContainer.appendChild( valueSymbol );
        valueSymbol['id'] = 'value_symbol_'+containerName+'_'+i;
        valueSymbol['className'] = 'value-symbol-abs';
        this.designValueSymbol( valueSymbol, color, i );
        return {
            valueSymbolContainer: valueSymbolContainer,
            valueSymbol: valueSymbol
        };
    },
    designValueSymbol: function ( valueSymbol, color, i ) {
        valueSymbol.style.backgroundColor = 'hsla('+color[0]/(1+i*2.7)+', '+color[1]+'%, '+color[2]+'%, 1)';
    },
    createValueName: function ( valueNameEl, valueName ) {
        valueNameEl['className'] = 'value-name';
        valueNameEl.innerHTML = valueName;
        return valueNameEl;
    },
    createValue: function ( valueEl ) {
        valueEl['className'] = 'value';
        return valueEl;
    },
    angleToMoney: function ( angle, valueEl, outMin, outMax, step ) {

        var rounded = this.roundByStep(
            this.mapValues(
                this.fixAngle( angle ),
                0,
                Math.PI*2,
                outMin,
                outMax ),
            step
        );
        valueEl.innerHTML = rounded+' €';
        return rounded;
    },
    mapValues: function ( angle, inMin, inMax, outMin, outMax ) {
        return ( ( angle - inMax ) * ( outMax - outMin ) / ( inMax - inMin ) + outMax );
    },
    roundByStep: function ( number, increment, offset ) {
        return Math.ceil( ( number ) / increment ) * increment;
    },
    fixAngle: function ( angle ) {

        var fix;
        if ( angle < 0 && angle >= -Math.PI/2 ) fix = Math.abs( -Math.PI/2 - angle );
        if ( angle > 0 ) fix = Math.PI/2 + angle;
        if ( angle > -Math.PI && angle < -Math.PI/2 ) fix = Math.PI*2 + Math.PI/2 + angle;
        return fix;
    }

};