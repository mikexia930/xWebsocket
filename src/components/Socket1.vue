<template>
  <div>
    <h1>socket1</h1>
    <p :key="index" v-for="(item, index) in messages">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Socket1',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.XWebsocket.sendMessage(JSON.stringify(['data', {
      test: 'single',
    }]));
    this.XWebsocket.getMessage(this.showMessage);
  },
  methods: {
    showMessage(message) {
      this.messages.push(JSON.stringify(message.data));
    },
  },
};
</script>
