<template>
  <ul id="Lista Compra">
    <li v-for="item in items" :key="item.id">
      Producto:
      {{ item.name }}
      {{ item.ammount }}
      </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "Lista",
  data() {
    return { items: [] };
  },
  created() {
    axios.get("http://localhost:3005/items").then((response) => {
      this.items = response.data;
    });
  },
};
</script>