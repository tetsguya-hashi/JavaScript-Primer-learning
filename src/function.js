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
{
  //メゾットとして定義した関数を変数へ入れるとthisを参照できなくなる
  const person = {
    fullName: "Brendan Eich",
    sayName: function () {
      return this.fullName;
    }
  };
  console.log(person.sayName()); // => "Brendan Eich"
  const say = person.sayName;
  //say(); // => TypeError: Cannot read property 'fullName' of undefined

  //thisを明示的に指定する
  ("use strict");
  function say1(message) {
    return `${message} ${this.fullName}！`;
  }
  const person1 = {
    fullName: "Brendan Eich"
  };
  //callを使用、第一引数にthisに使用するもの、第二引数に関数の引数
  console.log(say1.call(person1, "こんにちは"));
  //applyを使用、第一引数にthisに使用するもの、第二引数に関数の引数を配列で渡す
  console.log(say.apply(person1, ["こんにちは"])); // => "こんにちは Brendan Eich！"
}
{
  console.log("---bind---");
  function say(message) {
    return `${message} ${this.fullName}！`;
  }
  const person = {
    fullName: "Brendan Eich"
  };
  //新しくsayPreson関数を作る。thisと引数を束縛した関数を作る
  const sayPreson = say.bind(person, "こんにちは");
  console.log(sayPreson());
}
{
  const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
      // Arrayの`map`メソッドは第二引数に`this`となる値を渡せる
      return strings.map(function (str) {
        // `this`が第二引数の値と同じになる
        // つまり`prefixArray`メソッドと同じ`this`となる
        return this.prefix + "-" + str;
      }, this);
    }
  };
  // `prefixArray`メソッドにおける`this`は`Prefixer`
  const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
  console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]
}
{
  //アロー関数で上記と同じことをする
  console.log("--arrow function--");
  const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
      return strings.map((str) => {
        //アロー関数は、thisを持たないため外側のprefixArrayのthisを参照
        //prefixArrayのthisはPrefixerです
        return this.prefix + "-" + str;
      });
    }
  };
  //ベースオブジェクトはPrefixerとなるためthisが使える
  const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
  console.log(prefixedStrings);

  //アロー関数は　thisを持たないので、アロー関数の定義時に静的に決まる
  //Arrow Functionにおけるthisは「Arrow Function自身の外側のスコープに定義されたもっとも近い関数のthisの値」
}
