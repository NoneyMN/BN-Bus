<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-btn @click="navigateTo('/')">back</v-btn>
      </v-col>
      <v-col cols="6">
        <h4 class="text-center">Login</h4>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col>
        <v-img height="150" src="/images/purple-bus.png"></v-img>
        <h2 class="text-center">
          BN Bus <br />
          Driver
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form>
          <v-text-field label="Phone number"></v-text-field>
          <v-text-field label="Password"></v-text-field>
          <div class="text-center">
            <v-btn color="primary" @click="navigateTo('/passenger/home')"
              >Sign in</v-btn
            >
          </div>
        </v-form>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <p>
          New user?
          <a class="text-primary" href="/driver/sign-up">Sign up</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
