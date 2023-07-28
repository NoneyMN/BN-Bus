<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <NavMenu />
      </v-col>
      <v-col cols="6">
        <h4 class="text-center">Wallet</h4>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col>
        <p>Available Balance</p>
        <h4>$50.00</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn>Send to bank</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-btn>Topup</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h4>Recent Transactions</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-divider></v-divider>
      <v-col cols="8">
        <h4>Bus 02</h4>
        <p>Jalan RIPAS<br />to Jalan Gadong</p>
      </v-col>
      <v-col cols="4">
        <p>29 Jul, 4.40pm</p>
        <h4 class="text-red">$1.00</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-divider></v-divider>
      <v-col cols="8">
        <h4>Bus 01</h4>
        <p>Jalan Gadong<br />to Jalan RIPAS</p>
      </v-col>
      <v-col cols="4">
        <p>29 Jul, 12.20pm</p>
        <h4 class="text-red">$1.00</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-divider></v-divider>
      <v-col cols="8">
        <h4>Money Added</h4>
        <p>BIBD Transfer<br />(****1234)</p>
      </v-col>
      <v-col cols="4">
        <p>28 Jul, 9.40am</p>
        <h4 class="text-green">$52.00</h4>
      </v-col>
    </v-row>
  </v-container>
</template>
