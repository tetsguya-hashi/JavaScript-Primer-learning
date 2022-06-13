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
// {
//   let instance = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randDate = Date.now();
//       if (randDate % 2 === 0) {
//         resolve(randDate);
//       } else {
//         reject(randDate);
//       }
//     }, 1000);
//   });
//   instance = instance
//     .then((value) => {
//       console.log(`[${value}は偶数のため成功]`);
//     })
//     .catch((value) => {
//       console.log(`[${value}は奇数のため失敗]`);
//     })
//     .finally(() => {});
// }
// {
//   console.log("---Promiseチェーン---");
//   function promiseFactory(count) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         count++;
//         console.log(
//           `${count}回目のコールです。時刻：[${new Date().toTimeString()}]`
//         );
//         if (count === 3) {
//           reject(count);
//         } else {
//           resolve(count);
//         }
//       }, 1000);
//     });
//   }
//   promiseFactory(0)
//     .then((count) => {
//       return promiseFactory(count);
//     })
//     .then((count) => {
//       return promiseFactory(count);
//     })
//     .then((count) => {
//       return promiseFactory(count);
//     })
//     .then((count) => {
//       return promiseFactory(count);
//     })
//     .catch((errorCount) => {
//       console.error(`エラーに飛びました。現在のカウントは${errorCount}です。`);
//     })
//     .finally(() => {
//       console.log("処理を終了します。");
//     });
// }
{
  function promiseFactory2(count) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        count += 2;
        console.log(count);
        if (6 <= count) {
          reject(count);
        } else {
          resolve(count);
        }
      }, 1000);
    });
  }
  promiseFactory2(-2)
    .then((count) => {
      return promiseFactory2(count);
    })
    .then((count) => {
      return promiseFactory2(count);
    })
    .then((count) => {
      return promiseFactory2(count);
    })
    .then((count) => {
      return promiseFactory2(count);
    })
    .catch((erroCount) => {
      console.log("７以上になりました");
    })
    .finally(() => {
      console.log("処理を終了します。");
    });
}
