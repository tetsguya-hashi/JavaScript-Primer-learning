async function main() {
  try {
    const userId = getUserId();
    const userInfo = await fetchUserInfo('userId');
    const view = createView(userInfo);
    displayView(view);
  } catch (error) {
    console.error(`エラーが発生しました(${error})`);
  }
}

function fetchUserInfo(userId) {
  //fetchメソッドでURLからデータを取得、fetchの返り値のPromiseをreturnする
  return fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    //fetchはPromiseを返すのでthenでつなぐ
    .then(response => {
      console.log(response.status);
      //responseオブジェクトのokプロパティがtrueかfalseを判定
      //trueじゃなければエラー
      if (!response.ok) {
        //エラーレスポンスからRejectedなPromiseを作成して返す
        return Promise.reject(new Error(`${response.status}:${response.statusText}`));
      } else {
        //JSONオブジェクトで解決されるPromiseを返す
        return response.json();
      }
    });
}

const getUserId = () => {
  document.getElementById('userId').value;
}

function createView(userInfo) {
  return escapeHTML`
    <h4>${userInfo.name} (@${userInfo.login})</h4>
    <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
    <dl>
        <dt>Location</dt>
        <dd>${userInfo.location}</dd>
        <dt>Repositories</dt>
        <dd>${userInfo.public_repos}</dd>
    </dl>
    `;
}

function displayView(view) {
  const result = document.getElementById('result');
  result.innerHTML = view;
}

function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}

