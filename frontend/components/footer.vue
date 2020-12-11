<template>
  <div>
    <v-footer color="space-grey" height="34px" class="white--text" app>
      <span class="text">More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</span>
      <v-spacer />
      <span class="text">Copyright © 2020 Apple Inc. All rights reserved.</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  props: ['state']
}
</script>

<style>
.text {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>
