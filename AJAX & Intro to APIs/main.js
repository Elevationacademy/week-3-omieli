// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })



// const displayBookName = function (data)
// {
//     console.log(data.items[0].volumeInfo.authors)
// }

// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", displayBookName) 

// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user
// ﻿
//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
  
//   //log the dataconsole.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
//   console.log(`${lat}, ${long}`)
// })


const fetch = function (isbn) {
  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
      success: function (data) {
          console.log(data);
      },
      error: function (xhr, text, error) {
          console.log(text);
      }
  }); 
}

fetch(9782806269171)

const fetch1 = function (queryType, queryValue) {
  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
      success: function (data) {
          console.log(data);
      },
      error: function (xhr, text, error) {
          console.log(text);
      }
  }); 
}

fetch1("title", "The Wise Man's Fears")
fetch1("isbn", 9789814561778)


const fetch2 = function (queryType, queryValue) {
  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
      success: function (data) {
          data.items.forEach(b => console.log(`Title: ${b.volumeInfo.title}, Author: ${b.volumeInfo.authors}, ISBN: ${b.volumeInfo.industryIdentifiers[0].identifier}`))
      },
      error: function (xhr, text, error) {
          console.log(text);
      }
  }); 
}

fetch2("title", "The Wise Man's Fears")


const fetch3 = function () {
  $.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu", function (gifs) {
      console.log(gifs.data[0].embed_url)
      $(".gif").append(`<iframe src="${gifs.data[0].embed_url}">`)
  })
}

fetch3()



const fetch4 = function (input) {
  $.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`, function (gifs) {
      console.log(gifs.data[0].embed_url)
      $(".gif").append(`<iframe src="${gifs.data[0].embed_url}">`)
  })
}


$("#submit").on("click", function () {
  let input = $("#yourgif").val()
  console.log(input)
  fetch4(input)
})

