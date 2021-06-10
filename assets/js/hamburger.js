$(".hamburger").hide();
// $("#hamburger").on("click", function (e) {
//   e.preventDefault();
//   $("#hamburger").addClass("d-none");
//   $("#hamburgercross").addClass("rotate");
//   $("#hamburgercross").removeClass("d-none");
//   $(".hamburger").toggle();
// });
// $("#hamburgercross").on("click", function (e) {
//   e.preventDefault();
//   $("#hamburger").removeClass("d-none");
//   $("#hamburgercross").removeClass("rotate");
//   $("#hamburgercross").addClass("d-none");
//   $(".hamburger").toggle();
// });
$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
    $(".hamburger").toggle();
  });
});
