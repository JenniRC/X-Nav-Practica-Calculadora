$(document).keydown(function(tecla){
        var a = tecla.keyCode;
              if (a>47 && a<58) {
                 p=a-48;
                 $(".screen").append(p);
                 $(".outcome").append(p);
                 $(".outcome").val($(".outcome").val() + p);
                 //$(".screen").html(eval($(".outcome").val()));
                           }
              if (a>95 && a<106) {
                 p=a-96;
                $(".screen").append(p);
                $(".outcome").append(p);
                $(".outcome").val($(".outcome").val() + p);
                 }

               if (a==107){
                  $(".screen").append("+");
                  $(".outcome").append("+");
                  $(".outcome").val($(".outcome").val() + "+");
                //  $(".screen").html(eval($(".outcome").val()));
                 //$(".val").get(0).click();
               }
               if (a==109){
                 $(".screen").append("-");
                 $(".outcome").append("-");
                 $(".outcome").val($(".outcome").val() + "-");
               }
               if (a==106){
                 $(".screen").append("*");
                 $(".outcome").append("*");
                 $(".outcome").val($(".outcome").val() + "*");
               }
               if (a==111){
                  $(".screen").append("/");
                  $(".outcome").append("/");
                  $(".outcome").val($(".outcome").val() + "/");
               }
               if (a==110||a==190){
                  $(".screen").append(".");
                  $(".outcome").append(".");
                  $(".outcome").val($(".outcome").val() + ".");
               }
               if (a==46) { //Tecla borrado total: "supr"
                  document.getElementById("clear").click();
               }
               if (a==13) { //Tecla borrado total: "intro"
                  document.getElementById("equal").click();
               }
               if (a==73) { //Para factorial" -> i
                  $(".screen").append("!");
                  $(".outcome").append("!");
                document.getElementById("fact").click();
                }
                if (a==82) { //Para raiz" -> r
                $(".screen").append("V");
                $(".outcome").append("V");
                document.getElementById("raiz").click();
                }
                if (a==80) { //Para porcentaje" -> p
                $(".screen").append("%");
                $(".outcome").append("%");
                document.getElementById("porcent").click();
                }
                if (a==77) { //Para invertido" -> m
                document.getElementById("invert").click();
                $(".screen").html(eval($(".outcome").val()));
                }
                if (a==90) { //Para opuesto" -> z
                document.getElementById("opuest").click();
                $(".screen").html(eval($(".outcome").val()));
                }
                if (a==69) { //Para elevado" -> e
                document.getElementById("elev").click();
                $(".screen").html(eval($(".outcome").val()));
                }
                if (a==220) { //Para borrado parcial -> <
                document.getElementById("equal").click();
                document.getElementById("cone").click();
                document.getElementById("equal").click();
                }
});

$(function(){
    $(".val").click(function(e){
         e.preventDefault();
          var a = $(this).attr("href");
          $(".screen").append(a);
          $(".outcome").val($(".outcome").val() + a);
    });

     $(".equal").click(function(){
          $(".outcome").val(eval($(".outcome").val()));
          $(".screen").html(eval($(".outcome").val()));
     });

     $(".clear").click(function(){
          $(".outcome").val("");
          $(".screen").html("");
     });

     $(".min").click(function(){
         $(".cal").stop().animate({width: "0px", height: "0px", marginLeft: "700px", marginTop: "1000px"}, 500);
        setTimeout(function(){$(".cal").css("display", "none")}, 600);
     });
     $(".raiz").click(function(e){
          e.preventDefault();
           var a = $(".outcome").val();
           var x = Math.sqrt(a);
           $(".outcome").val(x);
     });

     $(".porcent").click(function(e){
          e.preventDefault();
          var a = $(".outcome").val();
          var x=a/100;
          $(".outcome").val(x);
        });

        $(".invert").click(function(e){
             e.preventDefault();
             var a = $(".outcome").val();
             var x=(1/a);
             $(".outcome").val(x);
             //$(".screen").html(eval($(".outcome").val()));
           });

           $(".opuest").click(function(e){
                e.preventDefault();
                var a = $(".outcome").val();
                var x=(-a);
                $(".outcome").val(x);
              });
              $(".elev").click(function(e){
                   e.preventDefault();
                   var a = $(".outcome").val();
                   var result =Math.pow(2.7183,a);
                   $(".outcome").val(result);
                   $(".screen").html(eval($(".outcome").val()));
                 });

              $(".cone").click(function(e){
                e.preventDefault();
                var a = $(".outcome").val();
                var b = a.length;
                br = a.substr(b-1,b)
                a = a.substr(0,b-1) //quitar el ultimo caracter
                if (a=="") {a="0";} //si ya no quedan caracteres, pondremos el 0
                $(".outcome").val(a);
                $(".screen").html(eval($(".outcome").val()));
              });

              var calc = function() {
                  var factorial = function(val) {
                      if ($.isNumeric(val)) {
                          val = parseInt(val);
                          if (val < 0) {
                              return "invalid value";
                          } else if (val === 1 || val === 0) {
                              return 1;
                          } else {
                              return val * factorial(val - 1);
                          }
                      }
                      return "value passed is not valid";
                  };

                  return {
                      factorial: factorial
                  };
              }();
              $(".fact").click(function(e){
                   e.preventDefault();
                   var a = $(".outcome").val();
                   var x=calc.factorial(a);
                   $(".outcome").val(x);
                 });

     $(".close").click(function(){
          $(".cal").css("display", "none");
     })

})
