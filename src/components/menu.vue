<template>
  <v-navigation-drawer class="botones_menu">
    <router-link to="/lista">
     <v-btn>
      <span>Crear lista</span>
    </v-btn>
    </router-link>
  </v-navigation-drawer>
</template>

<script>
export default {
    name: 'Menu',
}
</script>
