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


                        <v-text-field outlined v-model="q.answer" placeholder="Your answer" class="mx-auto"></v-text-field>
                        <p  v-bind="questionForm" id="correct" >Your answer: {{ q.answer }}</p>     

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
                <v-card-title>{{b.question}} </v-card-title>

      <v-radio 
         class="ml-7"
         v-for="n in b.button"
         :key="n" 
         :label="`${n}`"
      ></v-radio>
    </v-radio-group>
                </v-card>       
        </v-col>

    </v-form>   
    <v-btn
            
           outlined color="success"
            type="submit"
         
           class="justify-center"
            
            extra large

            v-on:click="correctAnswer()"
            
            >
        Export 
        </v-btn>
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
       
    
    try { alert(data) }
    catch(e) { alert('json not saved'); }
        },

        correctAnswer(){
            document.getElementById('correct').style.color="green";
        }
    
    } //methods
    

}
</script>

<style scoped>
.v-card__text, .v-card__title  {
  word-break: normal; 
  color:black;
  text-align: center;
}

.v-btn{
   margin-bottom:10pt;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    
}
.v-text-field{
    width:350px;

    }

</style>