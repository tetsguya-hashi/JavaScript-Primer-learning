//ブロックスコープ
(() => {
  const array = [1, 2, 3, 4, 5];
  // constで宣言されているがエラーがでないのは、ループごとに新しいブロックスコープを作成する
  for (const element of array) {
    console.log(element);
  }
})();
//即時実行関数は、varのため
//letとconstはブロックスコープで汚染を防げる
{
  let str = "aaa";
  var str2 = "bbb";
  console.log(str);
}
console.log(str2); //bbb
// console.log(str);/エラー
