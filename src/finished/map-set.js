const mapの要素の追加と取り出し = (() => {
  const map = new Map();
  //新しい要素の追加
  map.set("key", "value1");
  console.log(map.size); //2
  console.log(map.get("key")); //value1
  //要素の上書き
  map.set("key", "value2");
  console.log(map.get("key")); //value2
  //キーの存在確認
  console.log(map.has("key")); //true
  console.log(map.has("foo")); //false
})();
const マップの反復処理 = (() => {
  const map = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
  ]);
  const results = [];
  map.forEach((value, key) => {
    results.push(`${key}:${value}`);
  });
  console.log(results); //["key1:value1", "key2:value2"]
})();
const セットの作成と初期化 = (() => {
  const set = new Set();
  console.log(set.size); //0
})();

const set値の追加と取り出し = (() => {
  const set = new Set();
  set.add("a");
  console.log(set.size);
  //同じ値は追加されない
  set.add("a");
  console.log(set.size);
  //値の確認
  console.log(set.has("a")); //true
  console.log(set.has("b")); //false
})();
const setの反復処理 = (() => {
  const set = new Set(["a", "b"]);
  const results = [];
  set.forEach((value) => {
    results.push(value);
  });
  console.log(results); //['a','b']
})();
const setのforOf = () => {
  const set = new Set(["a", "b"]);
  const results = [];
  for (const value of set) {
    results.push(value);
  }
  console.log(results);
};
