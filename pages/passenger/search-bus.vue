<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <NavMenuP />
      </v-col>
      <v-col cols="6">
        <h4 class="text-center">Search Bus</h4>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Enter bus number"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="h-screen d-flex align-center mt-16">
      <v-col>
        <v-sheet elevation="12" rounded="lg" class="py-1">
          <v-row class="px-4 mt-0">
            <v-col>
              <h4>Buses Approaching</h4>
            </v-col>
          </v-row>
          <v-row class="px-4">
            <v-divider></v-divider>
            <v-col cols="9">
              <h4>Bus 01</h4>
              <p>Jalan Gadong to Jalan RIPAS</p>
            </v-col>
            <v-col class="d-flex align-center">
              <p>5 mins</p>
            </v-col>
          </v-row>
          <v-row class="px-4 mb-0">
            <v-divider></v-divider>
            <v-col cols="9">
              <h4>Bus 02</h4>
              <p>Jalan RIPAS to Jalan Gadong</p>
            </v-col>
            <v-col class="d-flex align-center">
              <p>5 mins</p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>