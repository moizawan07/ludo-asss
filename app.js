// function dial(){

// var num = Math.random();

// var num2 = Math.floor(num*6+1)

// var btn = document.getElementById("printa")

// // btn.innerHTML = num2

// }


var dice = document.getElementById("die")
var roll = document.getElementById("btn")

  const randomDice  = () => {
     var random = Math.floor(Math.random()*6 +1)

     if(random>=1 && random<=6){
        rollDice(random)
     }
     else{
        rollDice()
     }

    }
    const rollDice = random =>{
       dice.style.animation = 'rolling 4s';
       setTimeout(() => {
          switch(random){
            case 1: dice.style.transform = 
            'rotateX(0deg) rotateY(0deg)'
            break;

            case 6: dice.style.transform = 
            'rotateX(180deg) rotateY(0deg)'
            break;
           
            case 2: dice.style.transform = 
            'rotateX(-90deg) rotateY(0deg)'
            break;

            case 5: dice.style.transform = 
            'rotateX(90deg) rotateY(0deg)'
            break;

            case 3: dice.style.transform = 
            'rotateX(0deg) rotateY(90deg)'
            break;

            case 4: dice.style.transform = 
            'rotateX(0deg) rotateY(-90deg)'
            break;

            default: break
          }

          dice.style.animation = 'none';
       },4050);
    }


roll.addEventListener('click', randomDice);


