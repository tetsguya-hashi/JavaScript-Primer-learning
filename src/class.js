{
  class Point {
    constructor(x, y) {
      //コンストラクタ関数のthisはインスタンスを示すオブジェクト
      //インスタンスのx,yに代入
      this.x = x;
      this.y = y;
    }
  }
  //new演算子でインスタンス化、引数を渡せて、その引数はコンストラクタ関数の引数に渡る
  const point = new Point(3, 4);
  console.log(point.x);
  console.log(point.y);
}
{
  console.log("---getter,setter---");
  class NumberWrapper {
    constructor(value) {
      this._value = value;
    }
    get value() {
      console.log("getter");
      return this._value;
    }
    set value(newValue) {
      console.log("setter");
      this._value = newValue;
    }
  }
  const numberWrapper = new NumberWrapper(1);
  console.log(numberWrapper.value);
  numberWrapper.value = 42;
  console.log(numberWrapper.value);
}
{
  console.log("---クラスフィールドとconstructor---");
  class MyClass {
    // publicField = 1;//es2022のたサポート外
    constructor(arg) {
      this.property = arg;
    }
  }
  const myClass = new MyClass(2);
  console.log(myClass.publicField); //1,es2022のたサポート外
  console.log(myClass.property); //2
}
{
  class Counter {
    constructor(count) {
      this._count = count;
      this.up = this.increment;
    }
    increment() {
      this._count++;
    }
  }
  const counter = new Counter(0);
  // counter._count = 0;
  counter.up();
  console.log(counter._count);
}
{
  console.log("---クラスフィールドでのthis、アロー関数---");
  class Counter {
    constructor(count = 0) {
      this._count = count;
      this.up = () => {
        this.increment();
      };
    }
    increment() {
      this._count++;
    }
  }
  const counter = new Counter();
  //アロー関数は、thisがクラスのインスタンスに固定される
  const up = counter.up;
  up();
  console.log(counter._count); //1
  //普通に呼び出すとundefinedになる
  const increment = counter.increment;
}
{
  console.log("---静的メゾット---");
  //クラスをインスタンス化せずに利用する
}
{
  console.log("プロトタイプオブジェクト");
  function fn() {}
  console.log(typeof fn.prototype === "object"); //true
  class MyClass {}
  console.log(typeof MyClass.prototype === "object"); //true
}
