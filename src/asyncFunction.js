//asyncFunction概要
//通常の関数とは異なり、必ずPromiseインスタンスを返す関数
{
  //記述方法
  //通常関数宣言
  async function fn1() {}
  //関数式
  const fn2 = async function () {};
  //Arrow Function
  const fn3 = async () => {};
  //メソッドの短縮記法
  const obj = { async method() {} };
}
const AsyncFunctionはPromiseを返す = () => {
  //１．Async Functionが値をreturnした場合、その返り値を持つFulfilledなPromiseを返す
  //２．Async FunctionがPromiseをreturnした場合、その返り値のPromiseをそのまま返す
  //３．Async Function内で例外が発生した場合は、そのエラーを持つRejectedなPromiseを返す
  //1
  async function resolveFn() {
    return "返り値";
  }
  resolveFn().then((value) => {
    console.log(value); // => "返り値"
  });
  //2
  async function rejectFn() {
    return Promise.reject(new Error("エラーメッセージ"));
  }
  rejectFn().catch((error) => {
    console.log(error.message); // => "エラーメッセージ"
  });
  //3
  async function exceptionFn() {
    throw new Error("例外が発生しました");
    //例外が発生したため、この行は実行されません
  }
  exceptionFn().catch((error) => {
    console.log(error.message); // => "例外が発生しました"
  });
};

const Promiseチェーンをawait式で表現する = () => {
  //awaitは右辺のPromiseインスタンスが終わるまで、非同期処理の完了を待ちます。
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
  //リソースAとリソースBを順番に取得する
  function fetchAB() {
    const results = [];
    return dummyFetch("/resource/A")
      .then((response) => {
        results.push(response.body);
        return dummyFetch("/resource/B");
      })
      .then((response) => {
        results.push(response.body);
        return results;
      });
  }
  fetchAB().then((results) => {
    console.log(results);
  });
};

const 上の処理をAsyncFunctionで書くと = (() => {
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/resource")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT Found"));
        }
      }, 1000 * Math.random());
    });
  }
  async function fetchAB() {
    const results = [];
    const responseA = await dummyFetch("/resource/A");
    results.push(responseA.body);
    const responseB = await dummyFetch("/resource/B");
    results.push(responseB.body);
    return results;
  }
  fetchAB().then((results) => {
    console.log(results);
  });
})();
