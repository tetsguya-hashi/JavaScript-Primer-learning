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
    console.log(`${searchWord}あり`);
  } else {
    console.log(`${searchWord}なし`);
  }
})();
