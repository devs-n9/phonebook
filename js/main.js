for(var user in localStorage){
    console.log(localStorage.getItem(user), user);
    var obj = JSON.parse(localStorage.getItem(user));
    $('.phonebook').append('<li><a href="#">' + user + '</a> <a href="#" data-name="' + user + '" data-tel="'+ obj.tel +'" data-email="'+ obj.email +'" data-toggle="modal" data-target=".addcontact" class="glyphicon glyphicon-pencil editcontact"></a> <a href="#" class="glyphicon glyphicon-remove removecontact"></a></li>');
}

$('.createnew').click(function(){
    
    $('#recipient-name').data('name', '');
    
    $('.status-btn').removeClass('updcontact');
    $('.status-btn').addClass('newcontact');
    $('.status-btn').html('ADD');
        
    $('#recipient-name').val('');
    $('#recipient-tel').val('');
    $('#recipient-email').val('');
});

$(document).on('click', '.editcontact', function(){
    $('.status-btn').removeClass('newcontact');
    $('.status-btn').addClass('updcontact');
    $('.status-btn').html('EDIT');
    
    $('#recipient-name').attr('data-name', '');
    
    $('#recipient-name').val($(this).attr('data-name'));
    $('#recipient-tel').val($(this).attr('data-tel'));
    $('#recipient-email').val($(this).attr('data-email'));
    
    $('#recipient-name').attr('data-name', $(this).attr('data-name'));
    
    
});

$(document).on('click', '.newcontact' ,function () {
    var username = $('#recipient-name'),
        tel = $('#recipient-tel'),
        email = $('#recipient-email');

    var user = {
        username: username.val(),
        tel: tel.val(),
        email: email.val()
    };
    
    localStorage.setItem(username.val(), JSON.stringify(user));

    $('.phonebook').append('<li><a href="#">' + username.val() + '</a> <a href="#" data-name="' + username.val() + '" data-tel="'+ tel.val() +'" data-email="'+ email.val() +'" data-toggle="modal" data-target=".addcontact" class="glyphicon glyphicon-pencil editcontact"></a> <a href="#" class="glyphicon glyphicon-remove removecontact"></a></li>');

    username.val('');
    tel.val('');
    email.val('');

    $('.addcontact').modal('hide');
});

$(document).on('click', '.updcontact', function(){
    console.log("work upd");
    var usernameNew = $('#recipient-name').val();
    var telNew = $('#recipient-tel').val();
    var emailNew = $('#recipient-email').val();
    var username = $('#recipient-name').attr('data-name');
    var result = $('a[data-name = "' + username + '"]').prev().html(usernameNew);
    
    var newUser = {
        username: usernameNew,
        tel: telNew,
        email: emailNew
    };
    
    localStorage.removeItem(username);
    localStorage.setItem(usernameNew, JSON.stringify(newUser));
    
    $('a[data-name = "' + username + '"]').attr('data-name', usernameNew);
    $('a[data-name = "' + username + '"]').attr('data-tel', telNew);
    $('a[data-name = "' + username + '"]').attr('data-email', emailNew);
    
    
    $('.addcontact').modal('hide');
})

$(document).on('click', '.removecontact', function () {
    $(this).parent().fadeOut(function(){
       $(this).remove(); 
    });
    var username = $(this).prev().attr('data-name');
    console.log(username);
    localStorage.removeItem(username);
});