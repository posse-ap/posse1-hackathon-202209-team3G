'use strict';
// sakino
{
  const state = { count: 0 };
  
  const btn = document.getElementById('heart');
  btn.addEventListener('click', () => {
    const counter = document.getElementById('counter');
    const counts = ++state.count;
    const addup = Number(counts)+Number(value);
    counter.innerHTML = addup;
    localStorage.setItem('save', addup);
  });
  const value = localStorage.getItem('save');
  counter.innerHTML = value;
}

{
  const likes = document.('')
}

// miu

// fumiya
window.addEventListener("scroll",fuction () {
  const bottomBtn = document.getElementById("main_bottom");
  const scroll = window.pageYOffset;
  if (scroll > 2000) {
    bottomBtn.style.opacity = 0.5;
  } else btn.style.opacity = 0;
});