function sendRequest() {
    event.preventDefault();
    var migratorForm = document.getElementById('migratorForm');
    var XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    var FD = new FormData(migratorForm);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function (event) {
        alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function (event) {
        alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open("POST", "http://localhost:8080/migrate");

    XHR.setRequestHeader("Content-type", "application/json");

    // convert form data to JSON
    var object = {};
    FD.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);

    // The data sent is what the user provided in the form
    XHR.send(json);
}