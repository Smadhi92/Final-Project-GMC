window.sr = ScrollReveal({ reset: true });
//Services Events
window.sr = ScrollReveal({ duration: 1000 });
        sr.reveal('.left', { origin : "left", distance: '50%'});
        sr.reveal('.right', { origin : "right", distance: '80%'});
        sr.reveal('.foo-3', {rotate: { x: 100, y: 100, z: 0 }, duration: 1000});

//Portfolio + Service events
$("document").ready(function(){
    $("#portfolio-item").toggle();
    $("#Equipe").toggle();
    $("#Dammakdom").toggle();
    $("#pdammakdom").toggle();
});

$("#Equipes").click(function(){
    $("#Equipe").toggle(300);
});

$("#pdammak").click(function(){
    $("#pdammakdom").toggle(300);
    $("#pdammakdom").addClass("fadeInDown animated");
});

$("#Dammak").click(function(){
    $("#Dammakdom").toggle(300);
    $("#Dammakdom").addClass("fadeInLeft animated");
});

$(".img-click").click(function(){
    $('#portfolio-item').show();
    $("#img-replace").attr("src",$(this).find(".prj-img").attr('src'));

});

$('#ret').click(function(){
    $('#portfolio-item').toggle();
});