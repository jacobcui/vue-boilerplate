<template>
<div class="about">
    <h1>{{ msg }}</h1>
    <a href="/">Home</a>
</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to About page.'
    }
  }
}
</script>
