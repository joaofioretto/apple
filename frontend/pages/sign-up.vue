<template>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
    <v-toolbar
      color="gray"
      cards
      dark
      flat
    >
      <v-card-title class="title font-weight-regular">
        Sign up
      </v-card-title>
      <v-spacer />
    </v-toolbar>
    <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-6"
    >
      <v-text-field
        v-model="first_name"
        filled
        color="white"
        label="First name"
      />
      <v-text-field
        v-model="last_name"
        filled
        color="white"
        label="Last name"
      />
      <v-text-field
        v-model="username"
        filled
        color="white"
        label="Username"
      />
      <v-text-field
        v-model="email"
        :rules="[rules.email]"
        filled
        color="white"
        label="Email address"
        type="email"
      />
      <v-text-field
        v-model="password"
        :rules="[rules.password, rules.length(8)]"
        filled
        color="white"
        counter="8"
        label="Password"
        style="min-height: 96px"
        type="password"
      />
      <v-checkbox
        v-model="agreement"
        :rules="[rules.required]"
        color="blue"
      >
        <template v-slot:label>
          I agree to the&nbsp;
          <a
            href="#"
            @click.stop.prevent="dialog = true"
          >Terms of Service</a>
          &nbsp;and&nbsp;
          <a
            href="#"
            @click.stop.prevent="dialog = true"
          >Privacy Policy</a>*
        </template>
      </v-checkbox>
    </v-form>
    <v-divider />
    <v-card-actions>
      <v-btn
        text
        @click="$refs.form.reset()"
      >
        Clear
      </v-btn>
      <v-spacer />
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="green"
        depressed
        @click="signup()"
      >
        Submit
      </v-btn>
    </v-card-actions>
    <v-dialog
      v-model="dialog"
      absolute
      max-width="400"
      persistent
    >
      <v-card>
        <v-card-title class="headline grey darken-3">
          Legal
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn
            text
            @click="agreement = false, dialog = false"
          >
            No
          </v-btn>
          <v-spacer />
          <v-btn
            class="white--text"
            color="green"
            @click="agreement = true, dialog = false"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>

import api from '~api'

export default {
  data: () => ({
    agreement: false,
    dialog: false,
    error: false,
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    form: false,
    loading: false,
    rules: {
      email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required'
    }
  }),
  methods: {
    async signup () {
      this.loading = true
      this.error = false
      await api.signup(this.first_name, this.last_name, this.username, this.email, this.password)
      const user = await api.login(this.username, this.password)
      if (user) {
        this.$store.commit('auth/setCurrentUser', user)
        this.loading = false
        this.dialog = false
        this.$router.push({name: 'shop'})
      } else {
        this.error = true
      }
      this.loading = false
    }
  }
}
</script>

<style>
h1 {
  font-size: 162px;
  color: white;
}
</style>
