let aleatoire = Math.ceil(Math.random()*100); //le nombre à deviner
let essai = 0;
let min = 0;
let max = 100;
$("button").click(function (){
    let $nb = $("#essai").val();
    if ($nb > max || $nb < min){
        $("#messages").text("Ce nombre a déjà été éliminé.");
    }
    else {
        if (+$nb === aleatoire) {
            $("#messages").text("");
            $("#reussi").text("Bravo!");
            $("#reussi").attr("class", "bg-success");
            $("#" + $nb).addClass("bg-success");
            recommencer();
        } else if (+$nb > aleatoire) {
            $("#messages").text("Trop grand!");
            effacerNombres(+$nb, max);
            max = +$nb;
            $("#essais").append($nb + " ");
            $("#reussi").text("Nope!");
        } else {
            $("#messages").text("Trop petit!");
            effacerNombres(min, +$nb);
            min = +$nb;
            $("#essais").append($nb + " ");
            $("#reussi").text("Nope!");
        }
        essai = essai + 1;
        if (essai >= 10) {
            $("#reussi").text("Predu, nombre d'essai atteint.");
            recommencer();
        }
    }
});

function recommencer(){

    $("button").text("Recommencer");
    $("button").click(function (){
        location.reload();
    });
}

function effacerNombres(min, max){
    for (let i = min; i <= max; i++){
        $("#"+i).hide();
    }
}