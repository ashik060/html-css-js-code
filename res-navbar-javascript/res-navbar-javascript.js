// --------------- For Extra Small Screen ---------------

const menu = document.getElementsByClassName('menu');
const close = document.getElementsByClassName('close');
let onenmenu = () => {
  menu[0].style.display = 'block';
  const close = document.getElementsByClassName('close');
  close[0].style.display = 'block';
};

let closemenu = () => {
  menu[0].style.display = 'none';
  close[0].style.display = 'none';
};

