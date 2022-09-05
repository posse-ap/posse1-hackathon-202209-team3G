'use strict';
// sakino
{
  const state1 = { count: 0 };

  const btn1 = document.getElementById('heart1');
  btn1.addEventListener('click', () => {
    const counter1 = document.getElementById('counter1');
    const count1 = ++state1.count;
    const addup1 = Number(count1)+Number(value1);
    counter1.innerHTML = addup1;
    localStorage.setItem('save1', addup1);
  });
  const value1 = localStorage.getItem('save1');
  counter1.innerHTML = value1;
  // localStorage.clear();
}
{
  const state2 = { count: 0 };
  
  const btn2 = document.getElementById('heart2');
  btn2.addEventListener('click', () => {
    const counter2 = document.getElementById('counter2');
    const count2 = ++state2.count;
    const addup2 = Number(count2)+Number(value2);
    counter2.innerHTML = addup2;
    localStorage.setItem('save2', addup2);
  });
  const value2 = localStorage.getItem('save2');
  counter2.innerHTML = value2;
  // localStorage.clear();
}

{
  const state3 = { count: 0 };
  
  const btn3 = document.getElementById('heart3');
  btn3.addEventListener('click', () => {
    const counter3 = document.getElementById('counter3');
    const count3 = ++state3.count;
    const addup3 = Number(count3)+Number(value3);
    counter3.innerHTML = addup3;
    localStorage.setItem('save3', addup3);
  });
  const value3 = localStorage.getItem('save3');
  counter3.innerHTML = value3;
  // localStorage.clear();
}

{
  const state4 = { count: 0 };
  
  const btn4 = document.getElementById('heart4');
  btn4.addEventListener('click', () => {
    const counter4 = document.getElementById('counter4');
    const count4 = ++state4.count;
    const addup4 = Number(count4)+Number(value4);
    counter4.innerHTML = addup4;
    localStorage.setItem('save4', addup4);
  });
  const value4 = localStorage.getItem('save4');
  counter4.innerHTML = value4;
  // localStorage.clear();
}

/*入力フォームの内容を保存*/



{
//   const numbers = [1,2,3,4];


//   numbers.map(number => {
//     return `<div class="likes_counter">
//     <p id="counter${number}">0</p>
//     <p>　likes</p>
//   </div>
//   <div class="likes_button" value="save" id="heart${number}">
//     <img src="../img/heart.png" alt="heart" class="heart_btn">
//   </div>`;
// })
// console.log(numbers);
// }

// {
  // const likes = document.querySelectorAll('.likes');
  // likes.forEach(like => {
  //   like.innerHTML = `<div class="likes_counter">
  //   <p class="counter">${states[].count}</p>
  //   <p>　likes</p>
  //   </div>
  //   <div class="likes_button heart" value="save">
  //   <img src="../img/heart.png" alt="heart" class="heart_btn">
  //   </div>`;
    // likes.innerHTML = `<div class="likes_counter">
    //   <p id="counter">0</p>
    //   <p>　likes</p>
    // </div>
    // <div class="likes_button" value="save" id="heart">
    //   <img src="../img/heart.png" alt="heart" class="heart_btn">
    // </div>`;
  // })
}

{
  // const states = [
  //   {id: 1, count: 0},
  //   {id: 2, count: 0},
  //   {id: 3, count: 0},
  //   {id: 4, count: 0},
  // ];
  
  // const btns = document.querySelectorAll('.heart');
  // btns.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     const counters = document.querySelectorAll('.counter');
  //     const counts = ++states[selectNumber].count;
      
  //   })
  // })

}


// miu

// fumiya

""
const all_profile = [
  {
    id: 1,
    
    nick_name: "さきの",
    birthday: "3月28日",
    
    
  },
  {
    id: 2,
    nick_name: "みう",
    birthday: "11月29日",
    
  },
  {
    id: 3,
    nick_name: "ふみや",
    birthday: "1月24日",
    card: ""
    
  }
];


// <div class="set">
//   <div id="profile">
//     <div id="pro_img"></div>
//     <div id="pro_name"></div>
//     <div id="pro_date"></div>
//   </div>
//   <div id="card_message">
//     <div ></div>
//     <div></div>
//   </div>
// </div>

window.addEventListener("scroll", () => {
  const bottomBtn = document.getElementById("main_bottom");
  let scroll = window.scrollY;
  if (scroll > 200) {
    bottomBtn.style.position = fixed;
  } else {bottomBtn.style.display = none;}
});

