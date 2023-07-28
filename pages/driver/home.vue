<template>
  <!-- <div>Driver Home Page</div>
    <div>Bus Route - Start Trip, Navigate, End Trip</div> -->
  <v-container>
    <v-row>
      <v-col cols="3">
        <NavMenuD />
      </v-col>
      <v-col cols="5">
        <h4 class="text-center">Bus Route</h4>
      </v-col>
      <v-col cols="4">
        <v-btn color="green">Start Trip</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-expansion-panels class="h-screen d-flex align-center">
    <v-expansion-panel>
      <v-expansion-panel-title>Bus Route</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row>
      <v-col cols="3">
        <p>12.30pm</p>
        <p>12.35pm</p>
        <p>12.40pm</p>
        <p>12.45pm</p>
        <p>12.50pm</p>
      </v-col>
      <v-col cols="9">
        <h4 class="text-grey">Jalan Gadong</h4>
        <h4 class="text-grey">Jalan Gadong 1</h4>
        <h4 class="text-grey">Jalan Gadong 2</h4>
        <h4>Jalan Gadong 3</h4>
        <h4>Jalan RIPAS</h4>
      </v-col>
    </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels> -->
  <v-navigation-drawer v-model="drawer" location="bottom" temporary>
    <v-row class="px-4 mt-0">
      <v-col>
        <h4>Bus Route</h4>
      </v-col>
    </v-row>
    <v-row class="px-4 mb-0">
      <v-divider></v-divider>
      <v-col cols="3">
        <p>12.30pm</p>
        <p>12.35pm</p>
        <p>12.40pm</p>
        <p>12.45pm</p>
        <p>12.50pm</p>
      </v-col>
      <v-col>
        <h4 class="text-grey">Jalan Gadong</h4>
        <h4 class="text-grey">Jalan Gadong 1</h4>
        <h4 class="text-grey">Jalan Gadong 2</h4>
        <h4>Jalan Gadong 3</h4>
        <h4>Jalan RIPAS</h4>
      </v-col>
    </v-row>
  </v-navigation-drawer>
  <v-app-bar location="bottom">
    <v-row @click.stop="drawer = !drawer">
        <v-col cols="8">
            <h4 class="px-4 mt-0">Bus Route</h4>
        </v-col>
        <v-col cols="4" class="d-flex justify-end">
            <p class="px-4 mt-0">Expand</p>
        </v-col>
    </v-row>
  </v-app-bar>
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
