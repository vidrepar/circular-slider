

var Container = App.create({

    renderContainer: function ( containerEl ) {
        this.createMainContainer( containerEl, this.createDataContainer() );
    },
    createContainer: function ( containerEl, containerName, color ) {

        containerEl.style.position = 'relative';
        containerEl.style.backgroundColor = color;
        containerEl['id'] = containerName;
        containerEl['className'] = 'dialer-container';
        document.body.appendChild( containerEl );
        return containerEl;

    },
    createMainContainer: function ( containerEl, dataContainer ) {
        var mainContainer = document.createElement('div');
        mainContainer['className'] = 'main-container';
        document.body.insertBefore( mainContainer, document.body.childNodes[0] );
        mainContainer.appendChild( containerEl );
        mainContainer.appendChild( dataContainer );

    },
    createDataContainer: function () {
        var dataContainer = document.createElement('div');
        dataContainer['className'] = 'data-container';
        return dataContainer;
    }

});