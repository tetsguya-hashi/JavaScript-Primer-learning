{
  //console.log('メモ')
  //let prom = nwe Promise;非同期処理を扱う関数
  //let thenProm = prom.then;非同期処理の成功時に実行する関数
  //let catchProm = thenProm.catch;非同期処理の失敗時に実行する関数
  //let finalyProm = catchProm.finaly;非同期処理後に必ず実行する関数
}
// {
//   let instance = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.floor(Math.random() * 11);
//       if (rand < 5) {
//         reject(rand);
//       } else {
//         resolve(rand);
//       }
//     }, 1000);
//   });
//   instance = instance.then((value) => {
//     console.log(`５以上の値[${value}]が渡って来ました。`);
//   });
//   instance = instance.catch((errorValue) => {
//     console.log(`５未満の値[${errorValue}]が渡ってきたためエラー`);
//   });
//   instance = instance.finally(() => {
//     console.log("処理を終了します");
//   });
// }
{
  let instance = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randDate = Date.now();
      if (randDate === 0) {
        resolve(randDate);
      } else {
        reject(randDate);
      }
    }, 1000);
  });
  instance = instance
    .then((value) => {
      console.log(`[${value}は偶数のため成功]`);
    })
    .catch((value) => {
      console.log(`[${value}は奇数のため失敗]`);
    })
    .finally(() => {});
}
