export default class XWebSocket {
  socketIns;

  socketUrl = '';

  queue = []; // 未连接时的上报队列

  pingConfig; // { time: 单位秒, message: 心动内容 }

  protocols;

  reconnectTimes;

  curReconnectTimes = 0;

  constructor(
    socketUrl,
    protocols = {},
    reconnectTimes = 10,
    pingConfig = { time: 5, message: 'heartbeat' },
  ) {
    this.socketUrl = socketUrl;
    this.protocols = protocols;
    this.pingConfig = pingConfig;
    this.reconnectTimes = reconnectTimes;
  }

  /**
   * 获取请求实例
   * @return object
   */
  getSocketIns(socketUrl = '') {
    if (typeof WebSocket === 'undefined') {
      throw (new Error('not support websocket'));
    } else {
      if (!this.socketIns) {
        if (socketUrl) {
          this.socketUrl = socketUrl;
        }
        this.setSocketIns();
      }
      return this.socketIns;
    }
  }

  /**
   * 生成请求实例
   * @return object
   */
  setSocketIns() {
    if (this.protocols) {
      this.socketIns = new WebSocket(this.socketUrl, this.protocols);
    } else {
      this.socketIns = new WebSocket(this.socketUrl);
    }
    this.socketIns.onerror = () => {
      this.reconnect();
    };
    // 监听关闭状态触发
    this.socketIns.onclose = () => {
      this.clearPing();
    };
    this.socketIns.onopen = () => {
      this.curReconnectTimes = 0;
      this.ping();
      this.consumeQueue();
    };
  }

  /**
   * 当前状态
   * @return number 0、CONNECTING 1、 OPEN 2、CLOSING 3、CLOSED
   */
  getState() {
    return this.socketIns?.readyState;
  }

  /**
   * 监听服务端下发的消息
   * @param handleServeMessage function
   */
  getMessage(handleServeMessage) {
    this.socketIns.onmessage = handleServeMessage;
  }

  /**
   * 监听socket是否已连接上，并把消息添加到队列
   */
  setQueue(message) {
    this.queue.push(message);
  }

  /**
   * 消费消息队列
   */
  consumeQueue() {
    if (this.queue && this.queue.length > 0) {
      this.queue.forEach((message) => {
        this.send(message);
      });
      this.queue = [];
    }
  }

  /**
   * 客户端推送消息，主要解决同时多个推送，但又处在等待open的状态
   * @param message 推送的消息
   */
  sendMessage(message) {
    const state = this.getState();
    if (state === 1) {
      this.send(message);
    } else {
      this.setQueue(message);
      if (state === 2 || state === 3) {
        this.reconnect();
      }
    }
  }

  /**
   * socket推送消息
   * @param message 推送的消息
   */
  send(message) {
    this.socketIns.send(message);
  }

  /**
   * 关闭socket连接
   */
  close() {
    if (this.getState() === 1) {
      this.socketIns.close();
    }
  }

  /**
   * 清除实例
   */
  destroy() {
    this.socketIns = null;
  }

  /**
   * 重新连接，isConnecting标记是否处在连接中
   */
  reconnect() {
    if (this.getState() !== 0) {
      this.curReconnectTimes += 1;
      if (this.curReconnectTimes <= this.reconnectTimes) {
        this.setSocketIns();
      }
    }
  }

  /**
   * 发送心跳
   */
  pingInterval = null;

  ping() {
    if (this.pingConfig.time > 0 && !this.pingInterval) {
      this.pingInterval = setInterval(() => {
        this.sendMessage(this.pingConfig.message);
      }, (this.pingConfig.time * 1000));
    }
  }

  /**
   * 清除心跳
   */
  clearPing() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }
}
