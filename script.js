const navlist = document.querySelector('.navlist');
const openbutton = document.querySelector('.open');
const closebutton = document.querySelector('.close');



openbutton.addEventListener('click', show);
closebutton.addEventListener('click', close);


function show(){
 navlist.style.display = 'flex';
 navlist.style.top = '0';
}


function close(){
  navlist.style.top = '-100%';
 }

