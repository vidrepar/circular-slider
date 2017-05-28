
var Value = {

    renderValue: function ( containerEl, valueElContainer, valueSymbolContainer, valueSymbol, valueNameEl, valueEl ) {


        containerEl.appendChild( valueElContainer );
        valueElContainer.appendChild( valueSymbolContainer );
        valueSymbolContainer.appendChild( valueSymbol );
        valueElContainer.appendChild( valueNameEl );
        valueElContainer.appendChild( valueEl );


    },
    createValueContainer: function ( valueElContainer, i, containerName, valueName ) {
        valueElContainer['id'] = 'value_container_'+containerName+'_'+i;
        valueElContainer['className'] = 'value-container';
        return valueElContainer;
    },
    createValueSymbol: function ( valueSymbolContainer, valueSymbol, i, containerName ) {
        valueSymbolContainer['className'] = 'value-symbol';
        valueSymbolContainer.appendChild( valueSymbol );
        valueSymbol['id'] = 'value_symbol_'+containerName+'_'+i;
        valueSymbol['className'] = 'value-symbol-abs';
        return {
            valueSymbolContainer: valueSymbolContainer,
            valueSymbol: valueSymbol
        };
    },
    createValueName: function ( valueNameEl, valueName ) {
        valueNameEl['className'] = 'value-name';
        valueNameEl.innerHTML = valueName;
        return valueNameEl;
    },
    createValue: function ( valueEl, value ) {
        valueEl['className'] = 'value';
        valueEl.innerHTML = value+' €';
        return valueEl;
    }

};