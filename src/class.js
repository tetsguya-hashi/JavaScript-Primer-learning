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
