let timeout = 5;

let timer = setTimeout(function() {
    window.location='../'
}, ((timeout) *1000)  );

let x = setInterval(function() {
    document.getElementById("seconden").innerHTML = timeout-1;
    timeout--
}, 1000)


