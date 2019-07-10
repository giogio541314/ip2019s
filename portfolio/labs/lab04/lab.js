
$(function(){
var card = ['ace-of-club.svg',
            'ace-of-diamonds.svg',
            'ace-of-hearts.svg',
            'ace-of-spades.svg'];
function update(){
    $('.club').attr("src","./img/ace-of-club.svg");
    $('.diamonds').attr("src","./img/ace-of-diamonds.svg");
    $('.hearts').attr("src","./img/ace-of-hearts.svg");
    $('.spades').attr("src","./img/ace-of-spades.svg");
    $('.back').attr("src","./img/joker-card.svg");
    
}
function issueCard(){
for(i = 0 ; i < 16 ; i++){
    var r = Math.floor((Math.random() * 4));
    switch (r) {
        case 0 :$('#d2').append('<img id="img'+ i +'" class = "issue club" src ="./img/' + card[0] + '"> ' );
                $('#d3').append('<img class ="ref club" src ="./img/' + card[0] + '">');
                 break;
        case 1 : $('#d2').append('<img id="img'+ i +'" class = "issue diamonds" src ="./img/' + card[1] + '"> ' );
                 $('#d3').append('<img class ="ref diamonds" src ="./img/' + card[1] + '">');
                 
                 break;
        case 2 : $('#d2').append('<img id="img'+ i +'" class = "issue hearts" src ="./img/' + card[2] + '"> ' );
                 $('#d3').append('<img class ="ref hearts" src ="./img/' + card[2] + '">');
                 
                 break;
        case 3 : $('#d2').append('<img id="img'+ i +'" class = "issue spades" src ="./img/' + card[3] + '"> ' );
                 $('#d3').append('<img class ="ref spades" src ="./img/' + card[3] + '">');
                 
                 break;
    }}}
    issueCard();
    $('#b1').on('click',function(){
    $('.issue').addClass("back");
    update()
});
    filp = 0
var first = '';
var second = '';

$('.issue').on('click',function(){

filp = $('#i1').val();
$(this).removeClass('back');
$(this).addClass("selected");
$(this).addClass("aa");
update()
if(filp == 0){
    $('#i1').val(1);
    $('#i4').val(this.id);
    update();
    if($(this).hasClass("club")){
        first = 'club';
    } else if($(this).hasClass("diamonds")){
        first = 'diamonds';
    } else if($(this).hasClass("hearts")){
        first = 'hearts';
    } else {
        first = 'spades';
    }
    $('#i2').val(first);

} else if (filp == 1) {
    $('#i1').val(2);
    $('#i5').val(this.id);

    if($(this).hasClass("club")){
        second = 'club';
    } else if($(this).hasClass("diamonds")){
        second = 'diamonds';
    } else if($(this).hasClass("hearts")){
        second = 'hearts';
    } else {
        second = 'spades';
    }
    $('#i3').val(second);

    var myid1 = '#' + $('#i4').val();
    var myid2 = '#' + $('#i5').val();

    if(first == second){
        setTimeout(function(){
            $(myid1).addClass('done');
            $(myid2).addClass('done');
            first = '';
            second = '';
            $('#i2').val(first);
            $('#i3').val(second);
            $('#i1').val(0);
            $('#i4').val('');
            $('#i5').val('');
        }, 500);
    }
    else {
        setTimeout(function(){
            $(myid1).removeClass('selected');
            $(myid2).removeClass('selected');
            $(myid1).addClass('back');
            $(myid2).addClass('back');
            update()
            alert('try again!');
            first = '';
            second = '';
            $('#i2').val(first);
            $('#i3').val(second);
            $('#i1').val(0);
            $('#i4').val('');
            $('#i5').val('');
        }, 200);
    }
    } 





});
});



