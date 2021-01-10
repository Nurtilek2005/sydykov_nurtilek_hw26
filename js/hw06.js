let first = Math.floor( Math.random() * 9 );
let second = Math.floor( Math.random() * 9 );
let result = first * second
let question = parseInt( prompt(`Сколько будет ${first} * ${second} =`) );

if(question === result) {
  alert('Отлично!\nХотите сыграть ещё? Перезагрузите страницу.');
} else {
  alert('Вы ошиблись!')
}

