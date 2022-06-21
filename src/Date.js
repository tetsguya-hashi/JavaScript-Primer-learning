const 現在の時刻をインスタンス化する = (() => {
  const now = new Date();
  console.log(Date.now());
  console.log(now.getTime());
  console.log(now.toISOString());
})();
const 乱数を生成する = (() => {
  for (let i = 0; i < 5; i++) {
    console.log(Math.random());
  }
})();
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
// 1以上5未満の浮動小数点数を返す
console.log(getRandom(1, 5));
