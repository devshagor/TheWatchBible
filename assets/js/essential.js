// ==================================================
// Project Name   :  Assesemnt for WordPress FullStack Developer
// File           :  JS Base
// Version        :  1.0.0
// Author         :  devshagor
// Author URL     :  http://themeforest.net/user/froxtheme/
// ==================================================

(function($) {
  "use strict";

  // $(".nav1 .active").on("click",function(){
  //   $(".tab-wrapper").toggleClass('tabone');
  // })
  // $(".nav2").on("click",function(){
  //   $(".tab-wrapper").addClass('tabtwo');
  // })


  $('.tab-a').click(function(e){  
    e.preventDefault();
    $(".tab").addClass('tab-a');
    $(".tab").removeClass('tab-b');
    // $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    // $(".tab-a").removeClass('active-a');
    // $(this).parent().find(".tab-a").addClass('active-a');
  });
  $('.tab-b').click(function(e){  
    e.preventDefault();
    $(".tab").removeClass('tab-a');
    $(".tab").addClass('tab-b');
    // $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    // $(".tab-a").removeClass('active-a');
    // $(this).parent().find(".tab-a").addClass('active-a');
  });

})(jQuery);