<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-btn @click="navigateTo('/passenger/my-tickets')">back</v-btn>
      </v-col>
      <v-col cols="6">
        <h4 class="text-center">Ticket</h4>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col>
        <v-img height="200" src="/images/ticket-1.png"></v-img>
        <p class="text-center">Ticket ID : 123ABC4DE5</p>
      </v-col>
    </v-row>
    <v-row>
      <v-divider></v-divider>
      <v-col>
        <h4>Bus 01</h4>
        <p>Jalan Gadong to Jalan RIPAS</p>
      </v-col>
    </v-row>
    <v-row>
      <v-divider></v-divider>
      <v-col>
        <p>Pickup at</p>
        <h4>Jalan Gadong Bus Stop</h4>
        <br />
        <p>Drop at</p>
        <h4>Jalan RIPAS Bus Stop</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-divider></v-divider>
      <v-col cols="9">
        <p>Amount Paid via Wallet</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <h4>$1.00</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn color="black" @click="navigateTo('/passenger/bus-live-status')">Show bus live status</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
