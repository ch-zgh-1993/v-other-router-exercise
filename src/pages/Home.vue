<template>
  <div id="first">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'first',
    data () {
      return {
        msg: "hello world"
      }
    }
  };
</script>

<style>
  #first {
    height: 50px;
    background: #fefefe;
  }
  h1 {
    color: orange;
  }
</style>
