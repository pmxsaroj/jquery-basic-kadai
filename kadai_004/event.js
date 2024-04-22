$(function(){
    $(window).on('load scroll',function (e)  {
        if (e.type === 'load'){
        console.log('loadイベントを発生しました。');
        }
        if (e.type === 'scroll'){
        console.log('scrollイベントを発生しました');
        }
    });
});