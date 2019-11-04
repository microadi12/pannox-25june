function next(no){/* 
    $('#tab'+no).removeClass('active show');
    $('#'+no).removeClass('active show'); */
    console.log(no);
    var num = no;
    num = num+1;
    console.log(num);
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
    /*$('#'+num).trigger('click');
$('#tab'+num).addClass('active show');
    $('#tab'+num).addClass('active show'); */
    /* $('#'+num).addClass('active show'); */
    console.log($('#tab'+num));
    console.log("nxt work");
    
}
function prev(no){
   /* 
    $('#tab'+no).removeClass('active show');
    $('#'+no).removeClass('active show'); */
   console.log(no);
   var num = no;
    num = num-1;
    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
             /*    $('#tab'+num).addClass('active show');
    $('#'+num).addClass('active show'); */
   console.log("previous");
}