$(document).ready(function(){
  $('body').on('click', '.btn-follow', function(e){
    e.preventDefault();

    var url = $(this).attr('href');
    var method = $(this).data('method');

    $.ajax({
      url: url,
      method: method,
      dataType: 'JSON'
    })
    .done(function(data) {
      $('.block-follow').html(data.form_follow)
    })

    return false;
  });
});
