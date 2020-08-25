// $("button").on("click", function(){
//     console.log($(this).closest("div").find("span").text())
//   })


// $("button").on("click", function(){
//     console.log($(".container").find("p").text())
//   })
  let compID = []

$(".generator").on("click", function(){
    console.log("Processor ID: "+$(this).closest(".computer").find(".processor").attr('id'))
    console.log("Computer's data-id: "+$(this).closest(".computer").data().id)
    compID.push(cmp_ID = $(this).closest(".computer").find(".processor").attr('id'))
    console.log("BUS: "+$(this).closest(".computer").find(".BUS").text())
  })

  $(".validator").on("click", function(){
    console.log("The generator's text: "+$(this).closest(".computer").find(".generator").text())
    console.log("The MB: "+$(this).closest(".computer").find(".MB").text())
    console.log("Both QRs: "+$(this).closest(".computer").find(".QR").text())

  })
