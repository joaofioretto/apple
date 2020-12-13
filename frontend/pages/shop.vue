<template>
  <v-layout justify-center align-content-space-around>
    <div :class="teste" v-if="!logged_user">
      <h1>Shop here.</h1>
      <h2>Please, sign in.</h2>
    </div>
    <div v-if="logged_user">
      <h1>What makes an iPhone an iPhone?</h1>
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
</style>
