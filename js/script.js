$("#click").click(function () {
    $("div").css("color", "red")
})

$("#toggle").click(function () {   
    if ($("div").hasClass("not-visible")) {
        $("div").fadeIn();
        $("div").removeClass("not-visible");       
    }
    else {
        $("div").hide();
        $("div").addClass("not-visible"); 
}
})