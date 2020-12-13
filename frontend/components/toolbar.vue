<template>
  <v-app-bar color="#171A1D" background dark fixed app clipped-right>
    <!-- <v-app-bar-nav-icon @click.stop="state.drawer = !state.drawer" /> -->
    <v-btn icon v-on="on" class="ma-0 ml-5">
      <router-link :to="{ name: 'index'}">
        <div>
          <img src="apple-logo-1.png" width="22px" height="26px">
        </div>
      </router-link>
    </v-btn>
    <v-toolbar-title>
      <h4 />
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon v-on="on" class="ma-0 ml-5">
      <router-link :to="{ name: 'shop'}">
        <div>
          <img src="bag-icon.png" width="26px" height="26px">
        </div>
      </router-link>
    </v-btn>
    <v-btn icon link v-if="!logged_user" @click="open_login_dialog($event)">
      <span>Sign in</span>
    </v-btn>

    <!-- <template v-slot:activator="{ on }"><v-btn v-on="on"> -->
    <v-menu v-if="logged_user" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="ma-0 ml-5">
          <v-avatar size="36px">
            <img src="user-icon.png" width="22px" height="22px">
          </v-avatar>
        </v-btn>
      </template>
      <v-card class="no-padding">
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar>
                <img src="user-icon.png">
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{logged_user.first_name}} {{logged_user.last_name}}</v-list-item-title>
              <v-list-item-subtitle>{{logged_user.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-content>
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-app-bar-nav-icon @click.stop="state.drawerRight = !state.drawerRight" />
    <login-dialog ref="login_dialog" />
  </v-app-bar>
</template>

<script>
import loginDialog from '~/components/login-dialog.vue'
import Snacks from '~/helpers/Snacks.js'
import api from '~api'

export default {
  components: {
    loginDialog
  },
  props: ['state'],
  computed: {
    logged_user () {
      return this.$store.state.auth.currentUser
    }
  },
  methods: {
    open_login_dialog (evt) {
      this.$refs.login_dialog.open()
      evt.stopPropagation()
    },
    async logout () {
      await api.logout()
      this.$store.commit('auth/setCurrentUser', null)
      Snacks.show(this.$store, {text: 'See you soon!'})
    }
  }
}
</script>

<style>
  h4 {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 22px;
  }
</style>
