{
  console.log("setTimeoutで非同期処理");
  function blockTime(timeout) {
    const startTime = Date.now();
    while (true) {
      const diffTime = Date.now() - startTime;
      if (diffTime >= timeout) {
        return;
      }
    }
  }
  // console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行します");
  // setTimeout(() => {
  //   console.log("3. ブロックする処理を開始します");
  //   blockTime(1000);
  //   console.log("4. ブロックする処理が完了しました");
  // }, 10);
  // console.log("2. 同期的な処理を実行します");
  //1. setTimeoutのコールバック関数を10ミリ秒後に実行します
  //2. 同期的な処理を実行します
  //3. ブロックする処理を開始します
  //4. ブロックする処理が完了しました
}
{
  console.log("---------------------");
  function blockTime(timeout) {
    const startTime = Date.now();
    while (true) {
      const diffTime = Date.now() - startTime;
      if (diffTime >= timeout) {
        return; //指定時間ブロック
      }
    }
  }
  const startTime = Date.now();
  // setTimeout(() => {
  //   const endTime = Date.now();
  //   console.log(
  //     `非同期処理のコールバックが呼ばれるまで${
  //       endTime - startTime
  //     }ミリ秒かかりました`
  //   );
  // }, 10);
  // console.log("ブロックする処理を開始します");
  // blockTime(1000);
  // console.log("ブロックする処理が完了しました");
}
{
  console.log("エラーファーストコールバック");
  function dummyFetch(path, callback) {
    setTimeout(() => {
      //先頭が引数に一致するのか/success
      if (path.startsWith("/success")) {
        //collbackに２つ引数を返す
        callback(null, { body: `Response body of ${path}` });
      } else {
        callback(new Error("NOT FOUND"));
      }
    }, 1000 * Math.random());
  }
  dummyFetch("/success/data", (error, response) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(response);
    }
  });
}
{
  console.log("---Promise---");
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/success")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }
  dummyFetch("/succss/data").then(
    function onFulfillde(response) {
      console.log(response);
    },
    function onRejected(error) {
      console.log(error);
    }
  );
}
