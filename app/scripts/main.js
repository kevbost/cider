console.log('\'Allo \'Allo!');

Parse.initialize("5eOgcGTYbeD2jj7TdWnP2fdvuWoMwnoGx5WFkcgS", "jwUm5MJaPuETwtHVZZ70wfnGw6LcPi55MEiyWi5o");
var editable = Parse.Object.extend("editabletest");
var editable = new editable();
var query = new Parse.Query(editable);

var identification = function(ident, classname){
  var main = query.equalTo("identification", ident);
  query.first({
    success: function(results) {
      $(classname).text(results.get('textvalue'));
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

var savesomething = function(ident, value){
  var main = query.equalTo("identification", ident);
  query.first({
    success: function(results) {
      results.set('textvalue', value);
      results.save()
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}
var updateDatabase = function(ident, classname){

}

$(function(){
  // var main = query.equalTo("identification", "main-header");
  // var mainBody = query.equalTo("identification", "main-body");
  // $('.main-header').text(main.textvalue);
  identification("main-header", ".main-header");
  identification("main-body", ".main-body");

});

$(document).on('click', '.save-button', function(){
    var value = $('.testrun').val();
    editable.save({content: value}).then(function(object) {
      console.log("i saved '" + value + "' to " + editable);
    });
  })
  .on('click', '.main-body', function(){
    var value = $('.main-body').text();
    var newValue;
    $('.main-body').after("<div class='edit-container'><input class='form-control main-body-edit-input' value='" + value + "'><button class='btn btn-default field-save-button'>save</button></div>");
    $('.field-save-button').on('click', function(){
      newValue = $('.main-body-edit-input').val();
      $('.main-body').text(newValue);
      $('.edit-container').remove();
      console.log('test')
      savesomething('main-body', newValue)
    })
  })
;
