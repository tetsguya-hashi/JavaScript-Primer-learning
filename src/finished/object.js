//オブジェクトの分割代入
const languages = {
  ja: "日本語",
  en: "英語"
};
const { ja, en } = languages;
// console.log(ja);
// console.log(en);

//変数を使ったオブジェクト作成時の省略記法
const name = "名前";
const obj = {
  name: name
};
// console.log(obj); //{name: "名前"}
const obj1 = {
  name //プロパティ名と値に指定する変数名が同じ場合は省略できる
};
// console.log(obj1); //{name: "名前"}

//プロパティの追加
const obj2 = {};
const key = "string";
obj2[key] = "val";
// console.log(obj2);
// console.log(obj2[key]); //val
// console.log(obj2.string); //val

//プロパティの削除
const obj3 = {
  key: "val1",
  key2: "val1"
};
delete obj3.key;
// console.log(obj3); //{key2: "val1"}

//プロパティの存在確認
const obj4 = {
  key: undefined
};
if ("key" in obj4) {
  // console.log("このプロパティは存在します");
}
//Optional chaining演算子
function printWidgetTitile(widget) {
  const title = widget?.window?.title ?? "未定義";
  // console.log(`ウィジェットのタイトルは${title}です`);
}
//Nullish coalescing演算子(??)によって右辺の"未定義"が変数titleのデフォルト値となる
printWidgetTitile({
  window: {
    title: "book"
  }
});
printWidgetTitile({});

const languages2 = {
  ja: {
    hello: "こんにちは"
  },
  en: {
    hello: "Hello"
  }
};
const langjJapanese = "ja";
const langKorean = "ko";
const messageKey = "hello";
// console.log(languages2?.ja?.hello);
// console.log(languages2?.[langKorean]?.[messageKey] ?? "カムサハムニダ");

const obj5 = {};
const keyObj = { a: 1 };
const keyObj2 = { b: 2 };
obj5[keyObj] = { a: 1 };
// obj5[keyObj2] = "2";
obj5.c = "3";
console.log(obj5);

//オブジェクトの列挙
const obj6 = {
  one: 1,
  two: 2,
  three: 3
};
console.log(Object.keys(obj6)); //["one", "two", "three"]

const keys = Object.keys(obj6);
keys.forEach((key) => {
  console.log(key);
});
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(`${key}は、${i + 1}番目のキーです。`);
}

//オブジェクトのマージと複製Object.assign
const objectAssign = (() => {
  const objA = {
    a: "a",
    c: "c",
    d: "d"
  };
  const objB = { b: "b" };
  //assignの第一引数にtarget(入れ物),第２引数以降は(入れる物)
  // const merged = Object.assign({}, objA, objB);
  // console.log(merged);
  //スプレッド構文
  const spreadMerged = {
    ...objA,
    ...objB
  };
  console.log(spreadMerged);
  //オブジェクトの複製
  const shallowClone = (obj) => {
    return Object.assign({}, obj);
  };
  const obj = { a: "a" };
  const obj2 = { a: "a", c: "c", d: "d" };
  const cloneObj = shallowClone(obj);
  const cloneObj2 = shallowClone(obj2);
  console.log(cloneObj);
  console.log(cloneObj2);
})();
