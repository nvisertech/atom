<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title> Nviser Atom </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="`${link.label}-header-link`"
      text
      rounded
      :to="link.url"
    >
      {{ link.label }}
    </v-btn>
    <v-btn @click="toggleTheme" text rounded>
      Toggle Theme
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Login",
          url: "/login"
        },
        {
          label: "Dashboard",
          url: "/dashboard"
        },
        {
          label: "Register",
          url: "/register"
        }
      ]
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = "#41B883";
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
