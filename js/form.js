'use strict';

/*入力フォームの内容を保存*/

let speeches = [];
const info = document.getElementById('info');
let num = 0;

const showMessage = () => {
  num += 1;
  num += Number(number);
  number = 0;

  const title = document.getElementById("titles").value;
  document.getElementById("output-title").textContent = title;
  
  const name = document.getElementById("names").value;
  document.getElementById("output-name").textContent = name;
  
  const textbox = document.getElementById("input-message");
  const inputValue = textbox.value;
  
  //テキストボックスの値を使って、出力するメッセージを生成する
  const outputMessage = inputValue;
  //出力用のp要素にメッセージを表示
  document.getElementById("output-message").innerHTML = outputMessage;

  const createHtml = 
    `<div class="speech">
    <p id="output-title${num}">${title}</p>
    <p id="output-name${num}">${name}</p>
    <p id="output-message${num}">${outputMessage}</p>
    </div>`;
    
  speeches.push( createHtml );

  localStorage.setItem('num', num);
  localStorage.setItem('array', speeches);
}

let number = localStorage.getItem('num');

const information = localStorage.getItem('array');
speeches.push(information);

info.innerHTML = speeches;
  // localStorage.clear();
  