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
  console.log("プロトタイプオブジェクト");
  function fn() {}
  console.log(typeof fn.prototype === "object"); //true
  class MyClass {}
  console.log(typeof MyClass.prototype === "object"); //true
}
{
  console.log("---super---");
  class Parent {
    constructor(...args) {
      console.log("Parentコンストラクタの処理", ...args);
    }
  }
  //Parentを継承したクラスの定義
  class Child extends Parent {
    constructor(...args) {
      //Parentのコンストラクタ処理を呼び出す
      super(...args);
      console.log("Childコンストラクタの処理", ...args);
    }
  }
  const child = new Child("引数１", "引数２");

  //コンストラクタの処理順は親クラスから小クラスへ
  class Parent1 {
    constructor() {
      this.name = "Parent";
    }
  }
  class Child1 extends Parent1 {
    constructor() {
      //thisの前に親要素を呼びだす
      super();
      //小クラスのコンストラクタ処理（上書き）
      this.name = "Child";
    }
  }
  const parent1 = new Parent1();
  console.log(parent1.name); //parent
  const child1 = new Child1();
  console.log(child1.name); //Child

  //superプロパティ
  console.log("---super---");
  class Parent2 {
    method() {
      console.log("Parent.prototype.method");
    }
  }
  class Child2 extends Parent2 {
    method() {
      console.log("Child.portotype.method");
      super.method();
    }
  }
  const child2 = new Child2();
  child2.method();
}
{
  //継承の判定
  class Parent {}
  class Child extends Parent {}

  const parent = new Parent();
  const child = new Child();
  //ParentのインスタンスはParentのみを継承したインスタンス
  console.log(parent instanceof Parent); //true
  console.log(parent instanceof Child); //false
  //ChildのインスタンスはChildとParentを継承したインスタンス
  console.log(child instanceof Parent); //true
  console.log(child instanceof Child); //true
}
{
  //ビルトインオブジェクトの継承
  class MyArray extends Array {
    get first() {
      return this.at(0);
    }
    get last() {
      return this.at(-1);
    }
  }
  const array = MyArray.from([1, 2, 3, 4, 5, 6]);
  console.log(array.length); //6
  console.log(array.first); //1
  console.log(array.last); //6
}
