let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesees = 0;
let isSunk = false;

while (isSunk == false) {
  guess = prompt('Готовься, целься, огонь! (Введи номер от 0 до 6):');
  if (guess < 0 || guess > 6) {
    alert('Пожалуйста, введи корректный номер')
  } else {
    guesees = guesees + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert('ПОПАЛ!');
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert('Ты потопил корабль!');
      }
    } else {
      alert('ПРОМАХНУЛСЯ!');
    }
  }
} 

let stats = "Ты использовал " + guesees + " попытки, чтобы потопить корабль. " + "Точность стрельбы: " + (3/guesees) + ".";
alert(stats);