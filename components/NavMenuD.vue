<template>
  <!-- icon="mdi:mdi-menu" -->
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/women/90.jpg"
      title="Jane Doe"
      subtitle="View profile"
    ></v-list-item>
    <v-list density="compact" nav>
      <v-list-item
        title="Bus Route"
        @click="navigateTo('/driver/home')"
      ></v-list-item>
      <v-list-item
        title="Bus Breakdown"
        @click="navigateTo('/driver/bus-breakdown')"
      ></v-list-item>
      <v-list-item title="Call for help"></v-list-item>
      <v-list-item
        title="Logout"
        @click="navigateTo('/driver/sign-in')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar-nav-icon
    variant="text"
    @click.stop="drawer = !drawer"
  ></v-app-bar-nav-icon>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
