let aleatoire = Math.ceil(Math.random()*100); //le nombre à deviner

$("button").click(function (){
    let $nb = $("#essai").val();
    if (+$nb === aleatoire){
        $("#messages").text("Bravo");
    }
    else if(+$nb > aleatoire){
        $("#messages").text("Trop grand");
        effacerNombres(+$nb, 100);
        $("#essais").append($nb + " ");
    }
    else {
        $("#messages").text("Trop petit");
        effacerNombres(0, +$nb);
        $("#essais").append($nb + " ");
    }
});

function effacerNombres(min, max){
    for (let i = min; i <= max; i++){
        $("#"+i).hide();
    }
}