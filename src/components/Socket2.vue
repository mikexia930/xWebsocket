<template>
  <div>
    <h1>socket2</h1>
    <p :key="index" v-for="(item, index) in messages">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Socket2',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    for (let i = 0; i < 10; i += 1) {
      this.XWebsocket.sendMessage(JSON.stringify(['data', {
        test: `multi_${i + 1}`,
      }]));
    }
    this.XWebsocket.getMessage(this.showMessage);
  },
  methods: {
    showMessage(message) {
      this.messages.push(JSON.stringify(message.data));
    },
  },
};
</script>
