import { element, render } from "./view/html-util.js";

export class App {
  mount() {
    const formElement = document.querySelector('#js-form');
    const inputElement = document.querySelector('#js-form-input');
    const containerElement = document.querySelector('#js-todo-list');
    const todoItemCountElement = document.querySelector('#js-todo-count');
    //TodoリストをまとめるList要素
    const todoListElement = element`<ul />`;
    //Todoアイテム数
    let todoItemCount = 0;
    formElement.addEventListener('submit', (event) => {
      //submitで送信をしないようにする。(画面更新されないように)
      event.preventDefault();
      //追加するTodoアイテムの要素(li要素)を作成する
      const todoItemElement = element`<li>${inputElement.value}</li>`;
      //TodoアイテムをtodoListElementに追加する
      todoListElement.appendChild(todoItemElement);
      //コンテナ要素の中身をTodoリストをまとめるList要素で上書きする
      render(todoListElement, containerElement);
      //Todoアイテム数を＋１し、表示されているテキストを更新する
      todoItemCount += 1;
      todoItemCountElement.textContent = `Todoアイテム数： ${todoItemCount}`;
      //入力欄を空文字にしてリセットする
      inputElement.value = "";
    });
  }
}