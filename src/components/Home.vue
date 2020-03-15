<template>
<div>
    <h1>{{ msg }}</h1>
    <a href="/about">About</a>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home page.'
    }
  }
}
</script>
