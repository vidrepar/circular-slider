

var Container = App.create({

    containerWidth: null,
    containerHeight: null,
    containerEl: null,
    containerName: null,
    renderContainer: function ( containerName, color ) {
        this.createContainer( containerName, color );
        this.createDialerContainer();
        this.createDataContainer();
    },
    createContainer: function ( containerName, color ) {

        this.containerName = containerName;

        this.containerEl = document.createElement('div');
        this.containerEl.style.height = this.containerHeight + 'px';
        this.containerEl.style.position = 'relative';
        this.containerEl.style.backgroundColor = color;
        this.containerEl['id'] = containerName;
        document.body.appendChild( this.containerEl );

    },
    createDataContainer: function () {
        this.dataContainerEl = document.createElement('div');
        this.dataContainerEl['className'] = 'data-container';
        document.body.insertBefore( this.dataContainerEl, document.body.childNodes[0] );
    },
    createDialerContainer: function () {
        this.dialerContainerEl = document.createElement('div');
        this.dialerContainerEl['className'] = 'dialer-container';
        document.body.insertBefore( this.dialerContainerEl, document.body.childNodes[0] );
        this.dialerContainerEl.appendChild(this.containerEl);
    }

});