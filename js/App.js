var App = {

    create: function(values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function (key) {
            instance[key] = values[key];
        });
        return instance;
    },
    handleDown: function () {
        
    },
    handleMove: function () {
        
    },
    handleUp: function () {
        
    },
    bindMouseEvents: function () {

        document.body.addEventListener('mousemove', this.handleMove);

    }

};