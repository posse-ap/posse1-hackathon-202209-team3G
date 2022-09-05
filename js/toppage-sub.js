'use strict';

let input_checked = document.querySelector("input[type=checkbox]");

window.onload = () => {

  input_checked.addEventListener('change',function(){
    console.log(this.checked);
    localStorage.setItem('data', this.checked);
  });

  const clicked = document.querySelectorAll('.la');

  const btnClick = clicked.forEach(click =>
    click.addEventListener('click', () => {
      click.classList.toggle('clicked');
    })
    );
  }

  const data = localStorage.getItem('data');
  const save = localStorage.getItem('save');  
  let i = 0;
  if(data === 'true'){
    const clicked = document.querySelectorAll('.la');

    clicked.forEach(click => 
      click.setAttribute('class', 'la clicked')
      )
      input_checked.setAttribute('checked', 'checked')
    }

// window.onload = () => {
  
//   input_checked.addEventListener('change',function(){
//     console.log(this.checked);
//     localStorage.setItem('data1', this.checked);
//     localStorage.setItem('data2', this.checked);
//   });
  
//   const clicked1 = document.getElementById('3-1');

//   const clicked2 = document.getElementById('3-2');
  
//   const btnClick1 = clicked1.addEventListener('click', () => {
//     clicked1.classList.toggle('clicked');
//   });
//   const btnClick2 = clicked1.addEventListener('click', () => {
//     clicked2.classList.toggle('clicked');
//   });
// }

// const data1 = localStorage.getItem('data1');
// const data2 = localStorage.getItem('data2');

// if(data1 === 'true'){
//   const clicked1 = document.getElementById('3-1');
  
//   clicked1.setAttribute('class', 'la clicked');
  
//   input_checked.setAttribute('checked', 'checked')
// }

// if(data2 === 'true'){
// const clicked2 = document.getElementById('3-2');
// clicked2.setAttribute('class', 'la clicked');
// input_checked.setAttribute('checked', 'checked')
// }