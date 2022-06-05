//ブロックスコープ
(() => {
  const array = [1, 2, 3, 4, 5];
  // constで宣言されているがエラーがでないのは、ループごとに新しいブロックスコープを作成する
  for (const element of array) {
    console.log(element);
  }
})();
//即時実行関数は、varのため
//letとconstはブロックスコープで汚染を防げる
{
  let str = "aaa";
  var str2 = "bbb";
  console.log(str);
}
console.log(str2); //bbb
// console.log(str);/エラー
{
  console.log("---this---");
  const obj = {
    method1: function () {
      return this;
    },
    method2: function () {
      return this;
    }
  };
  console.log(obj.method1()); //objの中身が帰って来る{method1: ƒ method1(), method2: ƒ method2()}
  const person = {
    fullName: "Brendan Eich",
    sayName: function () {
      return this.fullName;
    }
  };
  console.log(person.sayName());
  const obj1 = {
    obj2: {
      obj3: {
        method() {
          return this;
        }
      }
    }
  };
  //thisは自分の親を指す、祖オブジェクトではない
  console.log(obj1.obj2.obj3.method() === obj1.obj2.obj3); //true
}
