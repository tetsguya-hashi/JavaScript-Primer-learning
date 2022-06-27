export class EventEmitter {
  //登録する[イベント名、Set（リスナー関数）]を管理するMap
  #Listeners = new Map();
  /**
   * 指定したイベントが実行された時に呼び出されるリスナー関数を登録する
   * @param {string} type イベント名
   * @param {function} listener イベントリスナー
   */
  addEventListener(type, listener) {
    //指定したイベントに対するSetを作成したリスナー関数を登録する
    if (!this.#Listeners.has(type)) {
      this.#Listeners.set(type, new Set());
    }
    const listener = this.#Listeners.get(type);
    listenerSet.add(listener);
  }
}