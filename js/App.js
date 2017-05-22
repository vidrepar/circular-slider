var App = {

    dialers: [],
    create: function(values, array) {
        var instance = Object.create(this);
        instance.arguments = array;
        Object.keys(values).forEach(function (key) {
            instance[key] = values[key];
        });
        return instance;
    }

};