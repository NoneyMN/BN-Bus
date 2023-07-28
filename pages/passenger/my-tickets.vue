<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <NavMenu />
      </v-col>
      <v-col cols="6">
        <h4 class="text-center">My Tickets</h4>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet elevation="3" rounded="lg" class="ma-1">
          <v-card-item title="Bus 01"></v-card-item>
          <v-divider></v-divider>
          <v-row class="my-1">
            <v-col cols="8">
              <v-card-subtitle>Jalan Gadong</v-card-subtitle>
              <v-card-subtitle>to</v-card-subtitle>
              <v-card-subtitle>Jalan RIPAS</v-card-subtitle>
            </v-col>
            <v-col cols="4" class="d-flex align-center">
              <v-img height="60" src="/images/ticket-1.png"></v-img>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="ma-1">
            <v-col cols="6">
              <h5
                class="text-primary"
                @click="navigateTo('/passenger/bus-live-status')"
              >
                Live Status
              </h5>
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
              <h5
                class="text-primary"
                @click="navigateTo('/passenger/scan-ticket')"
              >
                Ticket Details
              </h5>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet elevation="3" rounded="lg" class="ma-1">
          <v-card-item title="Bus 02"></v-card-item>
          <v-divider></v-divider>
          <v-row class="my-1">
            <v-col cols="8">
              <v-card-subtitle>Jalan RIPAS</v-card-subtitle>
              <v-card-subtitle>to</v-card-subtitle>
              <v-card-subtitle>Jalan Gadong</v-card-subtitle>
            </v-col>
            <v-col cols="4" class="d-flex align-center">
              <v-img height="60" src="/images/ticket-2.png"></v-img>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="ma-1">
            <v-col cols="6">
              <h5
                class="text-primary"
                @click="navigateTo('/passenger/bus-live-status')"
              >
                Live Status
              </h5>
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
              <h5
                class="text-primary"
                @click="navigateTo('/passenger/scan-ticket')"
              >
                Ticket Details
              </h5>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
