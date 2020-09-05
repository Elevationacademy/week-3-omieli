// turn our "template" into html
var source = $('#store-template').html();

// compile our template html using handlebars
var template = Handlebars.compile(source);

// fill our template with information
var newHTML = template({item: "bread", price: "3"});

// append our new html to the page
$('.items').append(newHTML);

var newHTML2 = template({item: "Cheese", price: "10"});

$('.items').append(newHTML2);


const renderFirst = function(){
  const source = $('#first-template').html();
  const template = Handlebars.compile(source);
  let newHTML = template({ text: "This gets rendered" });
  $('body').append(newHTML);  
}

const renderSecond = function(){
  const source = $('#second-template').html();
  const template = Handlebars.compile(source);
  let newHTML = template({ moreText: "This also gets rendered" });
  $('#special').append(newHTML);  
}

renderFirst()
renderSecond()