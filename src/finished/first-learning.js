const str = "文字列";
// console.log(typeof str);
// console.log(str.length);
// console.log(str[0]);
// console.log(str);

const array = [1, 2];
const [a, b] = array;
// console.log(a);
// console.log(b);
// console.log([a, b]);

const obj = {
  key: "value",
  key2: "val2"
};
const { key, ky2 } = obj;
// console.log(key,ky2);
// console.log(obj);
//三項演算子
function addPrefix(text, prefix) {
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}

// console.log(addPrefix("文字列"));
// console.log(addPrefix("文字列", "カスタム:"));

const aa = 1,
  bb = 2,
  c = aa + bb;
// console.log(c);

function isEnptyString(str) {
  return typeof str === "string" && str.length === 0;
}
console.log(isEnptyString(""));
console.log(isEnptyString(0));
console.log(isEnptyString());
