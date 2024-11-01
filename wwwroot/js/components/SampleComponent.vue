<template>
  <div>
    <h2>Hello from Vue Component</h2>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "This is a Vue component inside a .NET Razor app!!!",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Message changed!";
    },
  },
};
</script>
<style scoped>
h2 {
  color: #42b983;
}
</style>
