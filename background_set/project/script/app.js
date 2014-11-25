(function(global){
    var app = global.app = global.app || {};
    
    document.addEventListener('deviceready',function(){

            everlive = new Everlive({
            apiKey:'A2azjtvl9QKIkTUf',
            scheme:'http'
        });
    },false);
    
    apps = new kendo.mobile.Application(document.body,
                                                        {
                                                            layout:'default',
                                                            skin:'flat',
                                                            transition:'zoom',
                                                            initial:'views/home.html'
                                                        }
    );
})(window);