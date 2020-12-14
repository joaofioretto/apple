<template>
  <v-layout justify-center align-content-space-around>
    <div v-if="!logged_user">
      <h1>Shop here.</h1>
      <h2>Please, sign in.</h2>
    </div>
    <div v-if="logged_user">
      <h1>What makes an iPhone an iPhone?</h1>
      <div id="row1">
        <div id="column1">
          <img src="Iphonexr.png" width="400px" height="400px">
        </div>
        <div id="column2">
          <h2>iPhone XR</h2>
          <h2>Blast past fast.</h2>
          <h2>From $19.12/mo. or $499 before trade‑in</h2>
          <br>
          <v-btn color="blue">buy</v-btn>
        </div>
      </div>
      <div id="row2">
        <div id="column1">
          <img src="iphone7.png" width="350px" height="350px">
        </div>
        <div id="column2">
          <h2>iPhone 7</h2>
          <h2>Practically magic.</h2>
          <h2>From $14.12/mo. or $299 before trade‑in</h2>
          <br>
          <v-btn color="blue">buy</v-btn>
        </div>
      </div>
      <br>
      <h1>Your next computer is not a computer.</h1>
      <div id="row1">
        <div id="column1">
          <img src="ipad.png" width="350px" height="350px">
        </div>
        <div id="column2">
          <h2>iPad Pro</h2>
          <h2>Anything you can do, you can do better.</h2>
          <h2>From $66.58/mo. or $799</h2>
          <br>
          <v-btn color="blue">buy</v-btn>
        </div>
      </div>
      <br>
      <h1>The best for the brightest. Power to the pro.</h1>
      <div id="row1">
        <div id="column1">
          <img src="macbook.png" width="550px" height="350px">
        </div>
        <div id="column2">
          <h2>MacBook Pro</h2>
          <h2>Light. Years ahead.</h2>
          <h2>From $108.25/mo. or $1299</h2>
          <br>
          <v-btn color="blue">buy</v-btn>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>

export default {
  layout: 'shop-layout',
  props: ['state'],
  data () {
    return {}
  },
  computed: {
    logged_user () {
      return this.$store.state.auth.currentUser
    }
  }
}
</script>

<style>
#row1{
  position: relative;
  display:flex;
  flex-direction: row;
  justify-content: left;
}

#row2{
  position: relative;
  display:flex;
  flex-direction: row;
  justify-content: left;
}

#column1{
  display:flex;
  flex-direction:column;
}

#column2{
  position: absolute;
  bottom: 25px;
  right: 450px;
}
</style>
