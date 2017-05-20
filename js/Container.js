/*
* App
*   Container
* */

var Container = App.create({

    containerWidth: window.innerWidth,
    containerHeight: window.innerHeight,
    containerEl: null,
    renderContainer: function () {
        this.createContainer();
    },
    createContainer: function () {

        this.containerEl = document.createElement('div');
        this.containerEl.style.height = this.containerHeight + 'px';
        this.containerEl.style.width = this.containerWidth + 'px';
        this.containerEl.style.backgroundColor = 'cornflowerblue';
        document.body.insertBefore( this.containerEl, document.body.childNodes[0] );

    }

});

Container.renderContainer();