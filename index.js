let heroi = "Thor"
let xp = 3000

function write(){
    if (xp <= 1000){
        console.log("O Herói de nome " + heroi + " está no nivel Ferro");
    }else if (xp > 1000 && xp <= 2000){
        console.log("O Herói de nome " + heroi + " está no nivel Bronze");
    }else if (xp > 2000 && xp <= 5000){
        console.log("O Herói de nome " + heroi + " está no nivel Prata");
    }else if (xp > 5000 && xp <= 7000){
        console.log("O Herói de nome " + heroi + " está no nivel Ouro");
    }else if (xp > 7000 && xp <= 8000){
        console.log("O Herói de nome " + heroi + " está no nivel Platina");
    }else if (xp > 8000 && xp <= 9000){
        console.log("O Herói de nome " + heroi + " está no nivel Ascendente");
    }else if (xp > 9000 && xp <= 10000){
        console.log("o Herói de nome " + heroi + " está no nivel Imortal");
    }else if (xp > 10000){
        console.log("o Herói de nome " + heroi + " está no nivel Radiante");
    }
}

write()