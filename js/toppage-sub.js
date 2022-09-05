'use strict';

  let input_checked = document.querySelector("input[type=checkbox]");
  
  window.onload = () => {
    
    input_checked.addEventListener('change',function(){
      console.log(this.checked);
      localStorage.setItem('data', this.checked);
    });
    
    console.log(data)
    if(data === 'true'){
      const save = input_checked.classList.add('input[type=checkbox]:checked');
      localStorage.setItem('save', save);
      console.log('hello world');
    }
    
    const clicked = document.querySelectorAll('.la');
    
    const btnClick = clicked.forEach(click =>
      click.addEventListener('click', () => {
        click.classList.toggle('clicked');
      })
      )

    }
    
    const data = localStorage.getItem('data');
    const save = localStorage.getItem('save');  
    
    if(data === 'true'){
      console.log('number')
      const clicked = document.querySelectorAll('.la');
      clicked.forEach(click => 
        click.setAttribute('class', 'la clicked')
        )
        input_checked.setAttribute('checked', 'checked')
      }
