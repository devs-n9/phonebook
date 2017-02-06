$('.createnew').click(function(){
    $('.status-btn').removeClass('updcontact');
    $('.status-btn').addClass('newcontact');
    $('.status-btn').html('ADD');
});

$(document).on('click', '.editcontact', function(){
    $('.status-btn').removeClass('newcontact');
    $('.status-btn').addClass('updcontact');
    $('.status-btn').html('EDIT');
    
    
    $('#recipient-name').val($(this).data('name'));
    $('#recipient-tel').val($(this).data('tel'));
    $('#recipient-email').val($(this).data('email'));
    
    
});

$(document).on('click', '.newcontact' ,function () {
    var username = $('#recipient-name'),
        tel = $('#recipient-tel'),
        email = $('#recipient-email');


    $('.phonebook').append('<li><a href="#">' + username.val() + '</a> <a href="#" data-name="' + username.val() + '" data-tel="'+ tel.val() +'" data-email="'+ email.val() +'" data-toggle="modal" data-target=".addcontact" class="glyphicon glyphicon-pencil editcontact"></a> <a href="#" class="glyphicon glyphicon-remove removecontact"></a></li>');

    username.val('');
    tel.val('');
    email.val('');

});

$(document).on('click', '.removecontact', function () {
    $(this).parent().remove();
});