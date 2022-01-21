<template>
  <v-app>
      <v-navigation-drawer app>
      <v-list>
        <v-list-item v-for="item in navItems"
          :key="item.text"
          :to="item.link"
          nuxt
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>
      <v-app-bar color="primary" dense app>
        <v-toolbar-title class="mr-5 align-center">
          <span class="title">Marine Litter DB</span>
        </v-toolbar-title>
      </v-app-bar>
      <v-main>
          <v-container fluid>
            <Nuxt />
          </v-container>
      </v-main>
      <v-footer app>
        foo
      </v-footer>
  </v-app>
</template>


<script>
  export default {
    data() {
      return {
        navItems: [
          { icon: "mdi-home", text: "Dashboard", link: "/" },
          { icon: "mdi-beach", text: "Sites", link: "/site" },
          { icon: "mdi-clipboard-text-multiple-outline", text: "Litter Types", link: "/litterTypes" },
          { icon: "mdi-account", text: "Profile", link: "/profile" },
          { icon: "mdi-chart-line", text: "Reports", link: "/reports" },
        ],
      };
    }
  };
</script>