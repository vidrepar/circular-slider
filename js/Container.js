/*
* App
*   Container
* */

var Container = App.create({

    containerWidth: window.innerWidth,
    // containerHeight: window.innerHeight,
    containerHeight: 400,
    containerEl: null,
    containerName: null,
    renderContainer: function (containerName) {
        this.createContainer(containerName);
    },
    createContainer: function (containerName) {

        this.containerName = containerName;
        
        this.containerEl = document.createElement('div');
        this.containerEl.style.height = this.containerHeight + 'px';
        this.containerEl.style.position = 'relative';
        this.containerEl.style.width = this.containerWidth + 'px';
        this.containerEl.style.backgroundColor = 'cornflowerblue';
        this.containerEl['id'] = containerName;
        document.body.insertBefore( this.containerEl, document.body.childNodes[0] );

    }

});