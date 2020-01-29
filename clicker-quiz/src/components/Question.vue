<template>
    <div>
        <v-form
            ref="form"
            v-model="valid">
     
            <v-col
                v-for="q in fill"
                :key="q.question">

                <v-card
                    raised
                    max-width="400"
                    class="mx-auto">

                    <div>

                        <v-card-title
                            class="Headline"
                            v-text="q.question">
                        </v-card-title>


                        <input v-model="q.answer" placeholder="Your answer">
                        <p>Your answer: {{ q.answer }}</p>     

                    </div>
                </v-card>
            
            </v-col>
                
                
                <v-col
                v-for="b in button"
                :key="b.question">

                <v-card
                    raised
                    max-width="400"
                    class="mx-auto">
                    <v-radio-group v-model="radioGroup">
                    <p> {{b.question}} </p>

      <v-radio
         v-for="n in b.button"
         :key="n" 
         :label="`${n}`"
      ></v-radio>
    </v-radio-group>
                </v-card>
        </v-col>

    

        <v-btn
            :disabled="!valid"
           outlined color="success"
            type="submit"
            class="mx-auto text-center"
            extra large
            v-on:click="editJSON">

        Export 
        </v-btn>
    </v-form>   
</div>
</template>


<script>
import Json from '../json/data.json'

export default {
    data() {
        return{
           fill: Json.filled,
           button: Json.buttons,
        }
    },
    methods: {
        editJSON(){
        const data = JSON.stringify(this.fill)
        const button_options = JSON.stringify(this.button)
       
    
    try { alert(data), alert(button_options) }
    catch(e) { alert('json not saved'); }
        },

    },
    selectButton(){

    }

}
</script>

<style scoped>
.v-card__text, .v-card__title  {
  word-break: normal; 
  
  text-align: center;
}

.v-btn{
    margin-bottom: 5%;

    margin-left: 50%;
}
</style>