<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-btn @click="navigateTo('/passenger/my-tickets')">back</v-btn>
      </v-col>
      <v-col cols="9">
        <h4>Bus 01</h4>
        <p>Jalan Gadong to Jalan RIPAS</p>
      </v-col>
    </v-row>
    <!-- BUS ROUTE -->
    <v-row class="h-screen d-flex align-center mt-16">
      <v-col>
        <v-sheet elevation="12" rounded="lg" class="py-1">
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
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>