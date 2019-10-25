<template>
  <div>
      <v-container fluid>
<v-row>
<v-col  class="d-flex justify-center">
        <v-card>
          <v-container>
            <v-row>
              <v-col>
                <v-card-title>エントリーNo.</v-card-title>
              </v-col>
            </v-row>
 <v-row>
     <v-col>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="JMoFID"
            :rules="nameRules"
            :counter="10"
            label="JMoF-ID"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="YourName"
            label="Your Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>

</v-col>
      </v-row>

      <v-row>
                <v-col class="d-flex justify-center">
                    <v-btn
                    color="info"
                    class="text-center"
                    >
                    <v-icon>mdi-vote</v-icon>投票する
                    </v-btn>
                </v-col>
      </v-row>

    </v-container>
  </v-form>
     </v-col>
 </v-row>
            <v-row>
              <v-col>
            <v-img
            v-bind:src="imagePath($route.params.entryNumber +'.jpg' )"
            ></v-img>
              </v-col>
            </v-row>
          </v-container>

        </v-card>
</v-col>
</v-row>

</v-row>



</v-container>
  </div>
</template>


<script>

//import entries from "~/assets/entries.json"
import axios from 'axios';
export default {
    data: function() {
        return {
          items:[],
        }
        }
        ,
    methods: {
    imagePath: function (filename) {
      return require("@/static/images/" + filename)
    },
    setPageObj: function(id){
        return this.items[id]
    }
},

  created: async function() {
    axios
    .get('https://script.googleusercontent.com/macros/echo?user_content_key=hjhQ7rDhgeBE1WIwSXJdGQyu7tFgoNwCurjzsUzU67ILMbZZwJHNW-TiMQnTjeRtoERqVOckj9NagCN4jUnCCQVm-ZANH0dWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnINqPvbuDU9swNJSGSkAQwdPTUkhX2Qv6TSiUiKM--2QfDY4-G96vMQ-P6jUs2z88UWY2nZ7HPw5&lib=MHChhK3vTrP4kAeUmMIpB0FnFCWH9vLiW')
    .then(response =>{
        this.items = response.data
    });
  }


}
</script>