(function(global){
    var LoginModel,
        app = global.app = global.app || {};
    
    LoginModel = kendo.data.ObservableObject.extend({
        
        uname:'',
        pwd:'',
        show:function()
        {
        },
        inputstatus:function()
        {
            var that = this;
            var username = that.get("uname");
            var password = that.get("pwd");
            
            if(username === "")
            {
                  alert("please enter Username.");
            }
            else if(password ==="")
            {
                 alert("please enter Password.");   
            }
            else
            {
                app.loginService.viewModel.userLogin(username,password);
            }
        },
        userLogin:function(uname,pwd)
        {
            everlive.Users.login(uname, // username
            pwd) // password
            .then(function (data) { // success callback
                apps.navigate("views/home.html");
            },
            function(error) { // error callback
                alert(error.message);
                app.loginService.viewModel.clearTextbox();
            });
        },
        clearTextbox:function()
        {
            var that = this;
            
            that.set('uname','');
            that.set('pwd','');
        },
        checkEnter:function(e)
        {
            var that = this;
            if(e.keyCode===13)
            {
                $(e.target).blur();
                that.inputstatus();
            }
        }
    });
    app.loginService = {
        viewModel:new LoginModel()
    };
})(window);