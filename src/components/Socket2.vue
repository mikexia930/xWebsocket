<template>
  <div>
    <h1>socket2</h1>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'Socket2',
  mounted() {
    for (let i = 0; i < 10; i += 1) {
      this.XWebsocket.sendMessage(JSON.stringify(['data', {
        test: '345',
      }]));
    }
  },
};
</script>
