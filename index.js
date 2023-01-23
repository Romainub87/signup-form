$(".err").hide();

$(".bouton").on("click", () => {
  if ($(".input").val() == "") {
    $(".input").css({
      border: "1px solid red",
      "margin-bottom": "1px"
    });
    $(".err").show();
  }
});
