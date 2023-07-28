<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <NavMenuD />
      </v-col>
      <v-col cols="7">
        <h4 class="text-center">Breakdown Reason(s)</h4>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-item-group multiple>
      <v-row class="mx-0">
        <v-col cols="12">
          <v-item v-slot="{ isSelected, toggle }">
            <v-card :color="isSelected ? 'primary' : ''" @click="toggle">
              <v-scroll-y-transition>
                <div class="pa-3">
                  {{ isSelected ? "Engine breakdown" : "Engine breakdown" }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
      <v-row class="mx-0">
        <v-col cols="12">
          <v-item v-slot="{ isSelected, toggle }">
            <v-card :color="isSelected ? 'primary' : ''" @click="toggle">
              <v-scroll-y-transition>
                <div class="pa-3">
                  {{
                    isSelected ? "Involved in accident" : "Involved in accident"
                  }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
      <v-row class="mx-0">
        <v-col cols="12">
          <v-item v-slot="{ isSelected, toggle }">
            <v-card :color="isSelected ? 'primary' : ''" @click="toggle">
              <v-scroll-y-transition>
                <div class="pa-3">
                  {{ isSelected ? "Tire punctured" : "Tire punctured" }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
      <v-row class="mx-0">
        <v-col cols="12">
          <v-item v-slot="{ isSelected, toggle }">
            <v-card :color="isSelected ? 'primary' : ''" @click="toggle">
              <v-scroll-y-transition>
                <div class="pa-3">
                  {{ isSelected ? "Empty fuel" : "Empty fuel" }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
      <v-row class="mx-0">
        <v-col cols="12">
          <v-item v-slot="{ isSelected, toggle }">
            <v-card :color="isSelected ? 'primary' : ''" @click="toggle">
              <v-scroll-y-transition>
                <div class="pa-3">
                  {{ isSelected ? "Other reason" : "Other reason" }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
    <v-row>
      <v-col class="mt-5 d-flex justify-center">
        <v-btn color="black">Submit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
