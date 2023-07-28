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
        title="Wallet"
        @click="navigateTo('/passenger/wallet')"
      ></v-list-item>
      <v-list-item
        title="My tickets"
        @click="navigateTo('/passenger/my-tickets')"
      ></v-list-item>
      <v-list-item
        title="Nearby bus stops"
        @click="navigateTo('/passenger/home')"
      ></v-list-item>
      <v-list-item
        title="Search bus"
        @click="navigateTo('/passenger/search-bus')"
      ></v-list-item>
      <v-list-item title="Settings"></v-list-item>
      <v-list-item title="Contact us"></v-list-item>
      <v-list-item
        title="Logout"
        @click="navigateTo('/passenger/sign-in')"
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
