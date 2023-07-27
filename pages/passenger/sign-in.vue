<template>
    <v-container>
      <v-row>
        <v-btn @click="navigateTo('/')">back</v-btn>
      </v-row>
      <v-row>
        <v-col>
          <v-img width="100" src="/images/green-bus.png"></v-img>
          <h2>Welcome to<br />BN: Bus</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-form>
            <v-text-field label="Phone number"></v-text-field>
            <v-text-field label="Password"></v-text-field>
            <v-btn @click="navigateTo('/passenger/home')">Sign in</v-btn>
          </v-form>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>New user? <a href="/passenger/sign-up">Sign up</a></p>
        </v-col>
      </v-row>
    </v-container>
</template>
