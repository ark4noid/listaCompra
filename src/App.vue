<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
      <Menu />
    </v-navigation-drawer>
    <Header />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "./components/menu";
import Header from "./components/header";
export default {
  name: "App",
  components: {
    Menu,
    Header,
  },
};
</script>
