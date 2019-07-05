/*

*/
function update() {
    var x = document.getElementById('123').value;
    var ele = document.getElementById('789');
    var y = ' ';
    for(var i = 0; i < x.length; i++){
        y += x.charAt(i)
        y += ' U+';
        y += x.charCodeAt(i).toString(16).toUpperCase();
        y += '<br>';
    }
    ele.innerHTML = y;

    document.getElementById('456').innerHTML =
    document.getElementById('123').value.replace('讚友','猴子')

}

function start(e) {
    document.getElementById('123').addEventListener("input",update);
    update();
}

window.addEventListener( "load", start, false );
