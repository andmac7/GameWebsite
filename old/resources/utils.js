function init() {
    var sep = "col-md-3";
    var menu =
    "<div class='row'>"+

    "<div onclick='scrollTo(#status-message)' class='menu-item "+sep+"'>.news</div>"+
    "<div onclick='scrollTo()' class='menu-item "+sep+"'>.games</div>"+
    "<div onclick='scrollTo()' class='menu-item "+sep+"'>.about</div>"+
    "<div onclick='scrollTo()' class='menu-item "+sep+"'>.contact</div>"+
    
    "</div>";



    $("#status-message").hide();
    $("#status-message").click(function(){
        equalize();
    });
    //wait until the dom is loaded
    $(document).ready(function () {
        //adds menu.html content into any "#menu" element
        $('#menu-items').html(menu);
    });
}

function scrollTo(elmnt){
    $(window).load(function() {
        $("html, body").animate({ scrollTop: $(elmnt).scrollTop() }, 1000);        
    });
      console.log("scrolled");
}

function save_data() {
    var data = $("#txt-user-input")[0].value;
    if (data !== "") {
        
        success_msg("Thank you for your message! :)");
    } else {
        error_msg("You need to write something.");
    }
}

function error_msg (msg) {
    $("#txt-status-message").text(msg);
    $("#status-message").addClass("status-red");
    $("#status-message").removeClass("status-green");
    $("#status-message").slideDown();
}

function success_msg (msg) {
    $("#txt-status-message").text(msg);
    $("#status-message").addClass("status-green");
    $("#status-message").removeClass("status-red");
    $("#status-message").slideDown();
}

function equalize () {
    $("#status-message").slideUp();
}