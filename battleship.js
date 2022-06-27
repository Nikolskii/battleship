let location1 = 3;
let location2 = 4;
let location3 = 5;
let guess;
let hits = 0;
let guesees = 0;
let isSunk = false;

while (isSunk == false) {
  guess = prompt('Готовься, целься, огонь! (Введите номер от 0 до 6):');
  if (guess < 0 || guess > 6) {
    alert('Пожалуйста, введите корретный номер клетки')
  } else {
    guesees = guesees + 1;
  }
} 