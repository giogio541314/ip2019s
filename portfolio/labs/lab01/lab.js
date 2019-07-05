/*

*/


function start(e) {
    var name =[
    {
        char: '陳',
        big5: 'B3AF',
        cns: '1-5D73',
        unicode: '9673'
    },
    {
        char: '驄',
        big5: 'F67B',
        cns: '2-6C69',
        unicode: '9A44'
    },
    {
        char: '漢',
        big5: 'BA7E',
        cns: '1-6947',
        unicode: '6F22'
    }
    ];
    
    var ele = document.getElementById('123');
    for (var i = 0; i < 3; i++)
    {
        ele.innerHTML += name[i].char;
        ele.innerHTML += '  big5 = ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += '  cns = ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += '  unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>' ;
    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
