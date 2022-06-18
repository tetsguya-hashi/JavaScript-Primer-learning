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
