require(["jquery-1.11.2", "carousel"], function($, Carousel){
    var imgs1 = ["img/img1.jpg", "img/img2.jpg","img/img3.jpg"];
    var setting1 = {
        selector : "#hobby-container",
        imgArr : imgs1,
        speed : 2500,
        buttonStyle : "circle",//
        arrowsPos : "center"//
    };

    var carousel1 = new Carousel(setting1);
    carousel1.init();
});
 
$(function(){
    $("#top").on("click",function(){
        $("html").animate({scrollTop:0},500);
    });

    var entries = [ 
        { label: 'HTML', url: 'http://codepen.io/', target: '_top' },
        { label: 'CSS', url: 'http://threejs.org/', target: '_top' },
        { label: '数据结构', url: 'http://jscompress.com/', target: '_top' },
        { label: 'JavaScript', url: 'https://tinypng.com/', target: '_top' },
        { label: 'Can I Use', url: 'http://caniuse.com/', target: '_top' },
        { label: 'URL shortener', url: 'https://goo.gl/', target: '_top' },
        { label: 'Twitter', url: 'https://twitter.com/', target: '_top' },
        { label: 'Gulp', url: 'http://gulpjs.com/', target: '_top' },
        { label: 'Browsersync', url: 'https://www.browsersync.io/', target: '_top' },
        { label: 'GitHub', url: 'https://github.com/', target: '_top' },
        { label: 'Shadertoy', url: 'https://www.shadertoy.com/', target: '_top' },
        { label: 'jsPerf', url: 'http://jsperf.com/', target: '_top' },
        { label: 'Foundation', url: 'http://foundation.zurb.com/', target: '_top' },
        { label: 'CreateJS', url: 'http://createjs.com/', target: '_top' },
        { label: 'Velocity.js', url: 'http://julian.com/research/velocity/', target: '_top' },
        { label: 'jQuery', url: 'https://jquery.com/', target: '_top' },
    ];  
    $( '#tag-cloud' ).svg3DTagCloud( {entries: entries} );   
})