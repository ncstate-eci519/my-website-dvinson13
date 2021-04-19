$(document).ready(function(){
  $("#toggler").click(function(){
    $(".form-group").toggle();
    $("form").submit(function(){
      event.preventDefault();
      var webform = $.post("https://maker.ifttt.com/trigger/webform/with/key/cIMCLpyvyaP1uljIYwyhUN"), JSON.stringify({"value1": $("email").val(), "value2": $("problem").val()});
    })
  });
});