<template>
    <v-container>
      <v-row>
        <v-btn @click="navigateTo('/passenger/sign-in')">back</v-btn>
      </v-row>
      <v-row>
        <v-col>
          <v-img width="100" src="/images/green-bus.png"></v-img>
          <h2>Join BN: Bus<br />community</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-form>
            <v-text-field label="Full Name"></v-text-field>
            <v-text-field label="Email Address"></v-text-field>
            <v-text-field label="Phone number"></v-text-field>
            <v-text-field label="Create Password"></v-text-field>
            <v-btn @click="navigateTo('/passenger/sign-in')">Sign up</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
</template>
