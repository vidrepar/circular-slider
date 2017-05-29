

var Container = {

    renderContainer: function ( containerEl, containerName, color ) {
        this.createMainContainer( containerEl, this.createDataContainer( color, containerName ), containerName );
    },
    createContainer: function ( containerEl, containerName ) {

        containerEl.style.position = 'relative';
        containerEl['id'] = containerName;
        containerEl['className'] = 'dialer-container';
        document.body.appendChild( containerEl );
        return containerEl;

    },
    createMainContainer: function ( containerEl, dataContainer, containerName ) {
        var mainContainer = document.createElement('div');
        mainContainer['id'] = 'main-container_'+containerName;
        mainContainer['className'] = 'main-container';
        this.insertAfter( document.getElementById('title'), mainContainer );
        mainContainer.appendChild( containerEl );
        mainContainer.appendChild( dataContainer );

    },
    createDataContainer: function ( color, containerName ) {
        var dataContainer = document.createElement('div');
        dataContainer['id'] = 'data-container_'+containerName;
        dataContainer['className'] = 'data-container';
        dataContainer.style.backgroundColor = 'hsla('+color[0]+', '+color[1]+'%, '+color[2]+'%, 0.2)';
        dataContainer.style.borderRadius = '5px';
        return dataContainer;
    },
    insertAfter: function ( refNode, newNode ) {
        refNode.parentNode.insertBefore( newNode, refNode.nextSibling );
    }

};