console.log('App.js: loaded');
export class App {
  mount() {
    const formElement = document.querySelector('#js-form');
    const inputElement = document.querySelector('#js-form-input');
    formElement.addEventListener('submit', (event) => {
      //submitで送信をしないようにする。(画面更新されないように)
      event.preventDefault();
      console.log(`入力欄の値：　${inputElement.value}`);
    })
  }
}