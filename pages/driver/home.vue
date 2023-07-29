<template>
  <!-- <div>Driver Home Page</div>
    <div>Bus Route - Start Trip, Navigate, End Trip</div> -->
  <div class="content-section">
    <v-container>
      <v-row>
        <v-col cols="3">
          <NavMenuD />
        </v-col>
        <v-col cols="5">
          <h4 class="text-center">Bus Route</h4>
        </v-col>
        <v-col cols="4">
          <v-btn v-if="isActive" color="green" @click="toggleSwitch(false)">
            Start trip
          </v-btn>
          <v-btn v-else color="red" @click="toggleSwitch(true)">
            End trip
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <div class="map-container">
      <GoogleMaps />
    </div>
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
          <p>12.32pm</p>
          <p>12.34pm</p>
          <p>12.36pm</p>
          <p>12.40pm</p>
        </v-col>
        <v-col>
          <h4 class="text-grey">Mall Gadong</h4>
          <h4 class="text-grey">Jalan Satu</h4>
          <h4 class="text-grey">Jalan Dua</h4>
          <h4>Jalan Tiga</h4>
          <h4>RIPAS Hospital</h4>
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
  </div>
</template>

<script>
import GoogleMaps from "@/components/GoogleMaps.vue";

export default {
  components: {
    GoogleMaps,
  },
  data() {
    return {
      drawer: null,
      isActive: true,
    };
  },
  methods: {
    toggleSwitch(value) {
      // Handle the toggle action
      this.isActive = value;
      console.log("Toggle state:", this.isActive);
    },
  },
  computed: {
    // Computed property to determine the current state of the toggle button
    // This can be useful if you want to style the buttons based on the state.
    isActiveState() {
      return this.isActive ? "on" : "off";
    },
  },
};
</script>
<style>
.map-container {
  position: absolute;
  top: 1;
  left: 0;
  width: 100%;
  height: 100%;
}

.content-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
