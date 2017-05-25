/*
* App
*   Container
* */

var Container = App.create({

    containerWidth: window.innerWidth,
    // containerHeight: window.innerHeight,
    containerHeight: null,
    containerEl: null,
    containerName: null,
    renderContainer: function ( containerName, color ) {
        this.createContainer( containerName, color );
    },
    createContainer: function ( containerName, color ) {

        this.containerName = containerName;

        this.containerEl = document.createElement('div');
        this.containerEl.style.height = this.containerHeight + 'px';
        this.containerEl.style.position = 'relative';
        this.containerEl.style.width = this.containerWidth + 'px';
        this.containerEl.style.backgroundColor = color;
        this.containerEl['id'] = containerName;
        document.body.insertBefore( this.containerEl, document.body.childNodes[0] );

    }

});