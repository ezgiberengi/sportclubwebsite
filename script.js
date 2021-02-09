

$(".set-bg").each(function() {
  var bg = $(this).data("setbg");
  $(this).css("background-image","url(" + bg + ")");
});

AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
    
})