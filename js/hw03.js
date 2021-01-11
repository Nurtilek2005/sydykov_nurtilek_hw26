let login = prompt('Введите логин');
while(true) {
  if(login === 'root') {
    let pass = prompt('Введите пароль');
    if(pass === 'secret') {
      alert('Добро пожаловать!');
      break;
    }
    if(pass === null){
      alert('Вход отменен!');
      break;
      } else {
      alert('Неверный пароль!');
      continue;
    }
  }
  if(login === null) {
    alert('Вход отменен!');
    break;
  } else {
    alert('Неизвестный пользователь');
    break;
  }
}