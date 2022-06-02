//配列か判断
const arrayJadge = (() => {
  const obj = {};
  const array = [];
  console.log(Array.isArray(obj));
  console.log(Array.isArray(array));
})();
//インデックスを取得
const array1 = ["Java", "JavaScript", "Ruby"];
const indexOfJS = array1.indexOf("JavaScript");
console.log(indexOfJS); //1
console.log(array1[indexOfJS]); //JavaScript

const colors = [{ color: "red" }, { color: "green" }, { color: "blue" }];
//colorプロパティblueのオブジェクトのインデックスを取得
const indexOfBlue = colors.findIndex((obj) => {
  return obj.color === "blue";
});
console.log(indexOfBlue); //2 インデックスを取得
console.log(colors[indexOfBlue]); //{color: "blue"}

//条件に一致する要素を取得find
const blueColor = colors.find((obj) => {
  return obj.color === "blue";
});
console.log(blueColor); //{color: "blue"}

//指定範囲の要素を取得(第２引数省略で全件取得)
const sliceMethod = (() => {
  const array = ["A", "B", "C", "D", "E"];
  console.log(array.slice(1, 4)); //["B", "C", "D"]
  console.log(array.slice(-1)); //["E"]
})();

//追加と削除
const addArray = (() => {
  const array = ["A", "B", "C"];
  array.push("D");
  console.log(array); //["A", "B", "C", "D"]
  //最後の要素を取得し返す
  const popItem = array.pop();
  console.log(popItem); //D
  console.log(array); //["A", "B", "C"]
  //先頭に追加
  array.unshift("s");
  console.log(array); //["s", "A", "B", "C"]
  //先頭を削除
  const shiftItem = array.shift(); //先頭を取得し削除
  console.log(shiftItem); //s
  console.log(array); //["A", "B", "C"]
})();

//配列の結合
const concattArray = (() => {
  const array = ["A", "B", "C"];
  const newArray = array.concat(["D", "E"]);
  console.log(newArray); // ["A", "B", "C", "D", "E"]
  const stringArray = array.concat("new!!");
  console.log(stringArray); //["A", "B", "C", "new!!"]
})();

//配列の展開(Spred構文)
const SpredArray = (() => {
  const array = ["A", "B", "C"];
  const newArray = ["X", "Y", "Z", ...array];
  console.log(newArray); //["X", "Y", "Z", "A", "B", "C"]
  const newArray2 = ["X", ...array, "Y", "Z"];
  console.log(newArray2); //途中挿入もできる
})();

//多次元配列をフラットに　　flat
const flatArray = (() => {
  const array = [[["A"], "B"], "C"];
  console.log(array.flat()); //[Array(1), "B", "C"]1段階
  console.log(array.flat(1)); //[Array(1), "B", "C"]1段階
  console.log(array.flat(2)); //["A", "B", "C"]２段階
  console.log(array.flat(Infinity)); //["A", "B", "C"]全段階
})();

//要素を削除  splice
const spliceArray = (() => {
  //array.splice(インデックス, 削除する要素数);
  // 削除と同時に要素の追加もできる
  //array.splice(インデックス, 削除する要素数, ...追加する要素);
  console.log("-----splece-----");
  const array0 = ["a", "b", "c"];
  //index[1]から一つ削除
  console.log(array0);
  array0.splice(1, 1);
  console.log(array0);
  //すべて削除
  array0.splice(0, array0.length);
  console.log(array0.length);
})();

//配列の反復処理
console.log("------反復処理-------");
const forForeackArry = (() => {
  const array = [1, 2, 3];
  console.log("forEach");
  array.forEach((current, index, array) => {
    console.log(current, index, array);
  });
  console.log("map (非破壊)");
  const newArray = array.map((current, index, array) => {
    return current * 10;
  });
  console.log(newArray);
  console.log("map(非破壊)");
  const nArray = array.filter((current, index, array) => {
    return current % 2 === 1;
  });
  console.log(nArray);
  console.log("reduce");
  const totalValue = array.reduce((accumlator, current, index, array) => {
    return accumlator + current;
  }, 0);
  console.log(totalValue);
  function myFunc() {
    // Array-likeオブジェクトを配列へ変換
    const argumentsArray = Array.from(arguments);
    console.log(Array.isArray(argumentsArray)); // => true
    console.log(argumentsArray);
    // 配列のメソッドを利用できる
    argumentsArray.forEach((arg) => {
      console.log(arg);
    });
  }
  myFunc("a", "b", "c");
  const ECMAScriptVersions = [
    { name: "ECMAScript 1", year: 1997 },
    { name: "ECMAScript 2", year: 1998 },
    { name: "ECMAScript 3", year: 1999 },
    { name: "ECMAScript 5", year: 2009 },
    { name: "ECMAScript 5.1", year: 2011 },
    { name: "ECMAScript 2015", year: 2015 },
    { name: "ECMAScript 2016", year: 2016 },
    { name: "ECMAScript 2017", year: 2017 }
  ];
  const versionNames = ECMAScriptVersions.filter(
    (ECMAScript) => ECMAScript.year <= 2000
  ).map((ECMAScript) => ECMAScript.name);
  console.log(versionNames);
})();
