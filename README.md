# x-websocket
>
>WebSocket的前端封装。
> 
>消息发送，采用队列模式，避免open和error时候，上报的数据丢失。
> 
> 内置的心跳采用定时器，可以设置time为0，不使用内置心跳。
>
[Demo](https://mikexia930.github.io/xWebsocket/)
## 版本
- v1.0.5

## 基于
- websocket

## 安装
```
npm install x-websocket
```
或者
```
github下载源码
```
## 使用
**直接用script引入**
```
<script src="xWebsocket/lib/xwebsocket.umd.js"></script>
```
#### Vue示例
**在main.js引入**
```
import XWebsocketd from 'x-websocket';
```
**挂载到Vue原型上**
```
Vue.prototype.XWebsocket = new XWebSocket(
  参数1：socket地址,
  参数2：协议protocols ｜ null,
  参数3：重连次数，默认10（数值类型，错误重试次数）,
  参数4：心跳设置 {
    time: 5 （数值类型，单位/秒，心跳发送次数，为0表示不自动发送心跳）,
    message: 'heartbeat' （字符串类型，心跳上报的内容）,
  } （heartbeat配置),
);
```

**在组件中使用，建立连接**
```
// 可以不传也可以使用socketUrl参数覆盖new时候的socket地址
try {
    this.XWebsocket.getSocketIns(socketUrl?);
} catch (err) {
    console.log('socket:', err);
}
```
**发送消息**
```
this.XWebsocket.sendMessage(消息内容);
```
**接收消息**
```
this.XWebsocket.getMessage((message) => {
  接收的消息
});
```
**关闭连接**
```
this.XWebsocket.close();
```
**获取当前状态**
```
this.XWebsocket.getState(); // undefined：无实例，0：连接中 1：已连接 2：关闭中 3：已关闭
```
**销毁当前实例**
```
this.XWebsocket.destroy();
```
