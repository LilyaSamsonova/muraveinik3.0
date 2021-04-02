$(document).ready(function(){

function activateFilterAnimation() {
  $("body").toggleClass("animated1");
}

$(".bt1").on("click", activateFilterAnimation);


let arm1 = 0;

  $(".btarm").click(function () {
    if (arm1 < 5) {
      arm1++;
    } else {
      arm1 = 0;
    }
    $(".arm").css('background-position', 100 * arm1 + "% 0");
  });

  let head = 0;

    $(".bthead").click(function () {
      if (head < 5) {
        head++;
      } else {
        head = 0;
      }
      $(".head").css('background-position', 100 * head + "% 0");
    });

    let hand = 0;

      $(".bthand").click(function () {
        if (hand < 5) {
          hand++;
        } else {
          hand = 0;
        }
        $(".hand").css('background-position', 100 * hand + "% 0");
      });

      let leg = 0;

        $(".btleg").click(function () {
          if (leg < 5) {
            leg++;
          } else {
            leg = 0;
          }
          $(".leg").css('background-position', 100 * leg + "% 0");
        });

        $( function() {
            $( ".text1, .text2, .text3, .text4, .text5, .text6, .text7, .text8, .text9, .text10, .text11, .text12" ).draggable();
          } );

          $('.remotecontroller').on('click', function(){
            $('#audio')[0].play()
          });

          $('.leg').click(function () {
            $('#audio')[0].pause();
            });
});

// $('.bt2').on('click', function(){
// $('#audio')[0].play();}
//
// if(counter == 45){
//      $('.vtoroykanal').css("visibility","visible");
//      $('#audio')[0].play();
//   }else{
//     $('.vtoroykanal').css("visibility","hidden");
//    $('#audio')[0].pause();
//   }

// $(document).ready(function(){
//
// function activateFilterAnimation() {
//   $(".second").toggleClass("animated2");
// }
//
// $(".bt2").on("click", activateFilterAnimation);
// })
