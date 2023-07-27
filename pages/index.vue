<template>
  <v-container>
    <h1 class="text-center">BN: Bus</h1>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="10">
        <!-- PASSENGER -->
        <v-card
          class="mx-auto my-10 bg-grey-lighten-2 rounded-circle d-flex justify-center"
          elevation="12"
          width="230"
          height="230"
          @click="navigateTo('/passenger/sign-in')"
        >
          <v-card-item>
            <v-img width="150" src="/images/green-bus.png"></v-img>
            <v-card-title class="text-center font-weight-bold"
              >Passenger</v-card-title
            >
          </v-card-item>
        </v-card>

        <!-- DRIVER -->
        <v-card
          class="mx-auto my-10 bg-grey-lighten-2 rounded-circle d-flex justify-center"
          elevation="12"
          width="230"
          height="230"
          @click="navigateTo('/driver/sign-in')"
        >
          <v-card-item>
            <v-img width="150" src="/images/purple-bus.png"></v-img>
            <v-card-title class="text-center font-weight-bold"
              >Driver</v-card-title
            >
          </v-card-item>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
