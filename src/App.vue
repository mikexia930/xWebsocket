<template>
  <div id="app">
    <div class="view">
      <router-view/>
    </div>
    <div class="btn">
      <router-link to="/socket1">socket1 [单条上报]</router-link>
      <router-link to="/socket2">socket2 [并发上报]</router-link>
      <router-link to="/other1">other1 [无socket]</router-link>
      <router-link to="/other2">other2 [无socket]</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.initSocket();
  },
  beforeUpdate() {
    this.initSocket();
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    initSocket() {
      if (this.$route.name === 'Socket1' || this.$route.name === 'Socket2') {
        this.getSocket();
      } else if (this.XWebsocket.getState() === 1) {
        this.XWebsocket.close();
      }
    },
    getSocket() {
      try {
        this.XWebsocket.getSocketIns();
      } catch (err) {
        console.log('socket:', err);
      }
    },
  },
};
</script>

<style scoped>
  .view {
    border: 1px seagreen solid;
    padding: 10px;
    height: 500px;
    width: 500px;
    overflow: auto;
  }
  .btn{
    padding: 20px 0;
  }
  .btn a {
    display: inline-block;
    margin: 0 10px;
  }
</style>
