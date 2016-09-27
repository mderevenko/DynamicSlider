$(document).ready(function () {
    $("#slider").slider({
        min: 0,
        max: 100,
        value: 4
    });

    var xmlHttp;

    function updateSlider() {

        xmlHttp = null;

        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (xmlHttp != null) {
            xmlHttp.onreadystatechange = stateChange;

            xmlHttp.open("GET", "ajaxCallResponder.aspx", true);
            xmlHttp.send(null);
        }
    }

    function stateChange() {

        //if loaded
        if (xmlHttp.readyState == 4) {
            //request was successful
            if (xmlHttp.status == 200) {
                var newSliderValue = parseInt(xmlHttp.responseText);

                $("#slider").slider("value", newSliderValue);
            }
        }
    }

    setInterval(function () {
        updateSlider();
    }, 2000);

});
