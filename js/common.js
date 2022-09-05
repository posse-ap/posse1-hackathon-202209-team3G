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
