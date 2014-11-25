(function(global){
    var SignupModel,
        app = global.app = global.app || {};
    
    SignupModel = kendo.data.ObservableObject.extend({
        
        user_name:'',
        user_pwd:'',
        user_mail:'',
        name:'',
        
        show:function()
        {
            app.signupService.viewModel.clearTextbox();
        },
        registerField:function()
        {
            var that = this;
            var register =[];
            register['rusername'] = that.get("user_name");
            register['rpassword'] = that.get("user_pwd");
            register['rmail'] = that.get("user_mail");
            register['rname'] = that.get("name");
            
            if(register['rusername'] === "")
            {
                  alert("please enter Username.");
            }
            else if(register['rpassword'] ==="")
            {
                 alert("please enter Password.");   
            }
            else if(register['rmail'] ==="")
            {
                alert("please enter Mail id.");       
            }
            else if(register['rname'] ==="")
            {
                alert("please enter your name.");   
            }
            else
            {
               app.signupService.viewModel.register(register);
            }
        },
        register:function(data)
        {
            everlive.Users.register(data.rusername, // username
            data.rpassword, // password
                {
                  Email:data.rmail,
                  DisplayName:data.rname
                },
            function (data) { // success callback
                if(data['result']['Id']!=="")
                {
                  apps.navigate("views/home.html");   
                }
            },
            function(error) { // error callback
                alert(error.message);
                console.log(error);
            });
        },
        clearTextbox:function()
        {
            var that = this;
            
            that.set('user_name','');
            that.set('user_pwd','');
            that.set('user_mail','');
            that.set('name','');
        },
        checkREnter:function(e)
        {
            if(e.keyCode===13)
            {
               app.signupService.viewModel.registerField();
            }
        }
    });
    app.signupService = {
        viewModel:new SignupModel()
    };
})(window);