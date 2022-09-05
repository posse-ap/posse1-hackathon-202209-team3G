'use strict';

/*入力フォームの内容を保存*/
// {
  // function buttonClick(event){
  //   msg.innerText = 'お名前は' + content.value + 'さんですね';
  // }
  
  // let checkButton = document.getElementById('checkButton');
  // checkButton.addEventListener('click', buttonClick);
  
  // let title = document.getAttribute('data-title');
  // title.addEventListener('change', inputChange);
  // let name = document.getAttribute('data-name');
  // name.addEventListener('change', inputChange);
  // let content = document.getElementById('content');
  // content.value = 'なまえ';
  // let msg = document.getElementById('msg');
  // function buttonClick(){
  //   msg.innerText = 'お名前は' + nameText.value + 'さんですね';
  // }
  
  // let nameText = document.getElementById('nameText');
  // nameText.value = '名前';
  // let msg = document.getElementById('msg');
  
  // let checkButton = document.getElementById('checkButton');
  // checkButton.addEventListener('click', buttonClick);
  
  // }
{
  const showMessage = () => {
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

    localStorage.setItem('save', title, name, outputMessage);
  }
  const value4 = localStorage.getItem('save4');
  counter4.innerHTML = value4;
}