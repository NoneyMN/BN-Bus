<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-btn @click="navigateTo('/driver/sign-in')">back</v-btn>
      </v-col>
      <v-col cols="6">
        <h4 class="text-center">Register</h4>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col>
        <v-img height="150" src="/images/green-bus.png"></v-img>
      </v-col>
      <v-col>
        <v-img height="150" src="/images/purple-bus.png"></v-img>
      </v-col>
    </v-row>
    <v-row class="mt-0">
      <v-col>
        <h2 class="text-center">Join BN Bus community</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form>
          <v-text-field label="Full Name"></v-text-field>
          <v-text-field label="Email Address"></v-text-field>
          <v-text-field label="Phone number"></v-text-field>
          <v-text-field label="Create Password"></v-text-field>
          <v-radio-group inline>
            <v-radio label="Passenger" value="1"></v-radio>
            <v-radio label="Driver" value="2"></v-radio>
          </v-radio-group>
          <div class="text-center">
            <v-btn color="primary" @click="navigateTo('/driver/sign-in')"
              >Sign up</v-btn
            >
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
