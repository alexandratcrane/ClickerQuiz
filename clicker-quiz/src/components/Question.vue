<template>
    <div>
        <v-form
      ref="form"
      v-model="valid"
      >
        <v-col
            v-for="q in JsonData"
            :key="q.question"
            cols="3"
             align="center"  
        >
        
          <v-card
            :color="q.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="q.question"
                ></v-card-title>
                <input v-model="q.answer" placeholder="Your answer">
                <p>Your answer: {{ q.answer }}</p>

                </div>
              </div>
            </v-card>
    </v-col>
    <v-btn
        :disabled="!valid"
        color="success"
        type="submit"
        class="mr-4"
        v-on:click="editJSON"
      >
      
      </v-btn>
        </v-form>
     
    </div>
</template>

<script>
import Json from '../json/data.json'

export default {
    data() {
        return{
           JsonData: Json.json
        }
    },
    methods: {
        editJSON(){
        const data = JSON.stringify(this.JsonData)
    
    try { alert(data) }
    catch(e) { alert('user input not saved'); }
        }
    }

}
</script>

<style scoped>

</style>