'use strict';

console.log('hello');

// if(clicked === true){
//   console.log('hello');
// }

// localStorage.setItem('btnClick', )

{
  const clicked = document.querySelectorAll('.la');
  // localStorage.setItem('click', btnClick);
  
  let num = 0;
  const btnClick = clicked.forEach(click =>
    click.addEventListener('click', () => {
      click.classList.toggle('clicked');
      num += 1;
      console.log(num);
    })
    )
  }
  // localStorage.getItem('click');
  