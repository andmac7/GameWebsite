function init() {
    $("#status-message").hide();
    $("#status-message").click(function(){
        equalize();
    });
    /*$.ajax ({
        type: "GET",
        url: "http://localhost:8080/test",
        success: function(){
            alert("Worked!");
        },
        error: function(msg){
            alert("Nope lol");
        }
    });*/
}

function save_data() {
    var data = $("#txt-user-input")[0].value;
    if (data !== "") {
        success_msg("Thank you for your submission!");
    } else {
        error_msg("You need to provide data.");
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