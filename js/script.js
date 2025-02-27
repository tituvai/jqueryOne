

$(function (){
    $("#hide").click (function (){
        $(".headertext").hide(1000)
    })

    $("#show").click (function (){
        $(".headertext").show(1000)
    })


    $("#click").click (function (){
        $(".headerimages").toggle(1000)
    })


    // Fade in out Part start


    $("#fadeIn").click (function (){
        $(".bannertext").fadeIn(1000)
    })

    $("#fadeOut").click (function (){
        $(".bannertext").fadeOut(1000)
    })


    $("#inout").click (function (){
        $(".bannerimages").fadeToggle(1000)
    })



    // slide Part Start

    $("#slideUp").click (function(){
        $(".serviceText").slideUp(1000)
    })

    $("#slideDown").click (function (){
        $(".serviceText").slideDown(1000)
    })

    $("#slider").click (function (){
        $(".serviceImages").slideToggle(1000)
    })


    // Asho ja Part Start

    $("#come").click (function (){
        $(".aboutText").addClass("aboutTexts")
    })

    $("#out").click (function (){
        $(".aboutText").removeClass("aboutTexts")
    })

    $("#comeOut").click (function (){
        $(".aboutImages").toggleClass("add")
    })

})




// Count Up Down Start

$('.counter').counterUp({
    delay: 10,
    time: 1000
});



// Counter Down Part Start

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/04/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());

