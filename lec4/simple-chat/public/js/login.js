// 1) submitting form results into an ajax request to /login/auth
// 2) if response is 401 - display a message or just clear the input fields
// 3) if response is 200 - store jwt token to sessionStorage and redirect to home page

$(function () {
    $('#submit').on('click', function(event) {
        event.preventDefault();
        $(this).attr("disabled", "disabled");
        let user = $("#username").val();
        var data = {
            username: user,
            password: $("#password").val()
        }
        console.log('button clicked');

        $(this).removeAttr('disabled');
        
        $.ajax({
            url: "/login/auth",
            method: "POST",
            data: JSON.stringify(data),
            success: function(res){
                sessionStorage.token = res;
                sessionStorage.username = user;
                window.location.href = "/";
            },
            contentType: 'application/json'
        })
    });
});