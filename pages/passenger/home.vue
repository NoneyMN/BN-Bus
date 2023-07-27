<template>
  <!-- <div>Nearby Bus Stops</div>
    <div>Buses Approaching</div>
    <div>Bus Route</div>
    <div>Book Ticket</div> -->
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-btn @click="navigateTo('/passenger/sign-in')">menu</v-btn>
      </v-col>
      <v-col cols="6">
        <h4 class="text-center">Nearby Bus Stops</h4>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-text-field label="Tap to add destination"></v-text-field>
    </v-row>
    <!-- RECENT TICKET -->
    <v-row class="h-screen d-flex align-center">
      <v-col>
        <v-sheet elevation="12" rounded="lg" class="py-1">
          <v-row class="px-4">
            <v-col cols="8">
              <h4>Recent Ticket Booked</h4>
            </v-col>
            <v-col cols="4" class="d-flex justify-end">
              <h5>View All</h5>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-sheet elevation="3" rounded="lg" class="ma-4">
            <v-card-item title="Bus 01"></v-card-item>
            <v-divider></v-divider>
            <v-row class="my-1">
              <v-col cols="9">
                <v-card-subtitle>Jalan Ripas</v-card-subtitle>
                <v-card-subtitle>Jalan Gadong</v-card-subtitle>
              </v-col>
              <v-col cols="3" class="d-flex align-center">QR</v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="ma-1">
              <v-col cols="6">
                <h5>Live Status</h5>
              </v-col>
              <v-col cols="6" class="d-flex justify-end">
                <h5>Ticket Details</h5>
              </v-col>
            </v-row>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
