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
// {
//   function promiseFactory2(count) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         count += 2;
//         console.log(count);
//         if (6 <= count) {
//           reject(count);
//         } else {
//           resolve(count);
//         }
//       }, 1000);
//     });
//   }
//   promiseFactory2(-2)
//     .then((count) => {
//       return promiseFactory2(count);
//     })
//     .then((count) => {
//       return promiseFactory2(count);
//     })
//     .then((count) => {
//       return promiseFactory2(count);
//     })
//     .then((count) => {
//       return promiseFactory2(count);
//     })
//     .catch((erroCount) => {
//       console.log("７以上になりました");
//     })
//     .finally(() => {
//       console.log("処理を終了します。");
//     });
// }
// {
//   console.log("---並列処理Promise.all---");
//   function wait(ms) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(`${ms}msの処理が完了しました`);
//         resolve(ms);
//       });
//     });
//   }
//   const wait400 = wait(400);
//   const wait500 = wait(500);
//   const wait600 = wait(600);

//   Promise.all([wait500, wait600, wait400]).then(
//     ([resolved500, resolved600, resolved400]) => {
//       console.log("全てのPromiseが完了しました。");
//       console.log(resolved500, resolved600, resolved400)
//     }
//   );
// }
// function delay(timeoutMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, timeoutMs);
//   });
// }
// delay(10).then(() => {
//   console.log("10ミリ秒後に呼ばれる");
// });
// {
//   const fulfilledPromise = Promise.resolve(42);
//   fulfilledPromise.then((value) => {
//     console.log(value);
//   });
// }
// const promise = new Promise((resolve) => {
//   console.log("1,rsolveします");
//   resolve();
// });
// promise.then(() => {
//   console.log("3,コールバック関数が実行されました");
// });
// console.log("2,同期的な処理が実行されました");

//エラーreject
// {
//   Promise.reject(new Error("エラー")).catch(() => {
//     console.log("2. コールバック関数が実行されました");
//   });
//   console.log("1. 同期的な処理が実行されました");
// }

const aaa = () => {
  console.log("---Promeseチェーン---");

  Promise.resolve()
    .then(() => {
      console.log(1);
    })
    .then(() => {
      console.log(2);
    });
};

const bbb = () => {
  function asyncTask() {
    return Math.random() > 0.5
      ? Promise.resolve("成功")
      : Promise.reject(new Error("失敗"));
  }
  asyncTask()
    .then(function onFulfilled(value) {
      console.log(value);
    })
    .catch(function ONRejected(error) {
      console.log(error.message);
    });
};
const PromiseCallbackCallback = () => {
  Promise.resolve(1)
    .then((value) => {
      console.log(value); //1
      return value * 2;
    })
    .then((value) => {
      console.log(value); //2
      return value * 2;
    })
    .then((value) => {
      console.log(value); //4
      //returがないので、undefinedを返す
    })
    .then((value) => {
      console.log(value); //undefined
    });
};
const ddd = () => {
  //catchの後はthenにつながる、
  //最初がthenの中がrejectになるとcatchへ行く
  Promise.resolve()
    .then(function onFulfilledA() {
      return Promise.reject(new Error("失敗"));
    })
    .then(function onFulfilledB() {
      console.log("onFulfilledBは呼び出されません");
    })
    .catch(function onRejected(error) {
      console.log(error.message);
    })
    .then(function onFulfilledC() {
      console.log("onFulfilldeCは呼び出されます");
    });
};
const eee = () => {
  function main() {
    return Promise.reject(new Error("エラー"));
  }
  main()
    .catch((error) => {
      console.log(error.message);
      return Promise.reject(error);
    })
    .then(() => {
      //前のcatchがRejectedなPromiseのため実行されない
      console.log("成功");
    })
    .catch((error) => {
      console.log("メインの処理が失敗した");
    });
};

const PromiseFinally = () => {
  const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
  promise
    .then(() => {
      console.log("Promiseのthenメソッド");
    })
    .catch((error) => {
      console.log("Promiseのcatch");
    })
    .finally(() => {
      console.log("Promiseのfinally");
    });
};
const iii = () => {
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/resource")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }
  let isLOading = true;
  dummyFetch("/resource/A")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      isLOading = false;
      console.log("Promiseのfinally");
    });
};
const eeee = () => {
  console.log("---Promiseチェーンで逐次処理---");
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/resource")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }

  const results = [];
  dummyFetch("/resource/A")
    .then((response) => {
      results.push(response.body);
      return dummyFetch("/resource/B");
    })
    .then((response) => {
      results.push(response.body);
    })
    .then(() => {
      console.log(results);
    });
};
const PromiseAll = (() => {
  function delay(timeoutMs) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(timeoutMs);
      }, timeoutMs);
    });
  }
  const promise1 = delay(1);
  const promise2 = delay(2);
  const promise3 = delay(3);

  Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
  });
})();
