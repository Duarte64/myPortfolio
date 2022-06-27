$(document).ready(function(){
    // Mostra e nascondi view-news
    var active = "align__mobile";
    console.log(active);
    $('a.view-list-item').click(function () {
        if (active == this.name) {
            return;
        }
        var divname = this.name;
        console.log(divname);
        $("#"+active ).hide( "slide", {times: 10, distance: 1500}, 300);
        $("#"+divname).delay(300).show( "slide", {times: 10, distance: 1500, direction: "right"}, 1000);
        active = divname;
    });
});