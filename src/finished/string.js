//文字列へのアクセス
const str = "文字列";
console.log(str[0]);
console.log(str.at(-1)); //列

//文字列の分解と結合
const splitAndjoin = (() => {
  console.log("---split_join---");
  const strings = "赤・青・緑".split("・");
  console.log(strings); //["赤", "青", "緑"]
  const str = "赤・青・緑".split("・").join(".");
  console.log(str); //赤.青.緑
})();

//文字列の一部を取得
const slice = (() => {
  const str = "ABCDE";
  console.log(str.slice()); //ABCDE
  console.log(str.slice(1, 5)); //BCDE

  const url = "https://example.com?param=1";
  const indexOfQuery = url.indexOf("?");
  const queryString = url.slice(indexOfQuery);
  console.log(queryString); // => "?param=1"
})();

//文字列の検索
const index_of = (() => {
  console.log("---文字列の検索---");
  const url = "1234567890";
  console.log(url.indexOf("1")); //0
  console.log(url.lastIndexOf("0")); //9
  //文字列の取得
  const str = "JavaScript";
  const searchWord = "Script";
  const index = str.indexOf(searchWord);
  console.log(index);
  if (index !== -1) {
    console.log(`${searchWord}あり(文字列取得)`);
  } else {
    console.log(`${searchWord}なし`);
  }
  //真偽値の取得(文字列があるかどうか)
  const str1 = "にわにはにわにわとりがいる";
  //startsWith先頭にならtrue
  console.log(str1.startsWith("にわ")); //true
  console.log(str1.startsWith("いる")); //false
  //endsWith末尾なら　true
  console.log(str1.endsWith("いる")); //true
  //include文字列が含まれるなら
  console.log(str1.includes("にわ")); //true
})();

//文字列の置換／削除
(() => {
  "use strict";
  console.log("---文字列の置換/削除---");
  //stringに対しては、'delete'は使えない
  //replaceメソッドで第一引数で検索、第二引数で置換文字列
  const str = "文字列";
  const newStr = str.replace("文字", "");
  console.log(newStr); //'列'
  //正規表現を使用して
  const str1 = "にわにはにわにわとりがいる";
  //マッチする最初
  console.log(str1.replace("にわ", "niwa")); //niwaにはにわにわとりがいる
  //マッチする最初
  console.log(str1.replace(/にわ/, "niwa")); //niwaにはにわにわとりがいる
  //マッチする全て
  console.log(str1.replace(/にわ/g, "niwa")); //niwaにはniwaniwaとりがいる
  //replaceAllで正規表現と同じ事ができる
  console.log(str1.replaceAll("にわ", "niwa")); //niwaにはniwaniwaとりがいる
  //replace,replaceAllは、第二引数にコールバック関数を呼べる
  function toDateJa(dateString) {
    return dateString.replace(
      //4桁、２桁、２桁にまっち
      /(\d{4})-(\d{2})-(\d{2})/g,
      //最初の引数はパターンに一致した文字列全体、以降は順番
      (all, year, month, day) => {
        return `${year}年${month}月${day}日`;
      }
    );
  }
  console.log(toDateJa("今日は2022-03-21です")); //今日は2017年03月01日です
})();
