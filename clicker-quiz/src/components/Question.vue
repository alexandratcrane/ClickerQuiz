<template>
    <div>
        <v-form
            ref="form"
            v-model="valid">
     
            <v-col>

                <v-card
                     v-for="q in fill"
                    :key="q.question"
                    raised
                    class="mx-auto">

                    <div>

                        <v-card-title
                            class="Headline"
                            v-text="q.question">
                        </v-card-title>


                        <v-text-field  outlined v-model="q.answer" placeholder="Your answer" class="mx-auto"></v-text-field>
                        <p style="text-align: center" v-bind="questionForm" id="correct" >Your answer: {{ q.answer }}</p>     

                    </div>
                </v-card>
 
                
                
                <v-card
                    v-for="b in multChoiceOne"
                    :key="b.question"
                    raised
                    class="mx-auto">
                    
                    <v-radio-group v-model="multChoiceOneAnswer">

                        <v-card-title>{{b.question}} </v-card-title>

                        <v-radio 
                            class="ml-7"
                            v-for="n in b.button"
                            :key="n" 
                            :label="`${n}`" >
                        </v-radio>
                    </v-radio-group>
                </v-card> 

                <v-card
                    v-for="b in multChoicetwo"
                    :key="b.question"
                    raised
                    class="mx-auto">
                    
                    <v-radio-group v-model="multChoiceTwoAnswer">

                        <v-card-title>{{b.question}}</v-card-title>

                        <v-radio 
                            class="ml-7"
                            v-for="n in b.button"
                            :key="n" 
                            :label="`${n}`" >
                        </v-radio>
                    </v-radio-group>
                </v-card> 

                <v-card
                    v-for="b in trueFalse"
                    :key="b.question"
                    raised
                    class="mx-auto">
           
                    <v-radio-group v-model="TFAnswer">
                        <v-card-title>{{b.question}} </v-card-title>

                        <v-radio 
                            class="ml-7"
                            v-for="n in b.options"
                            :key="n" 
                            :label="`${n}`">
                        </v-radio>

                    </v-radio-group>
                </v-card> 
                   
            </v-col>
        </v-form>   
    <v-btn
        outlined color="success"
        type="submit"
        class="mx auto"
        extra large
        v-on:click="validateJSON()">
        Submit
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
           multChoiceOne: Json.multChoice1,
           multChoicetwo: Json.multChoice2,
           trueFalse: Json.TF,

           multChoiceOneAnswer: '',
           multChoiceTwoAnswer: '',
           TFAnswer: ''
        }
    },
    methods: {
        validateJSON(){
        const data = JSON.stringify(this.fill)

       
       
    
    try { alert(data)
        
        alert(this.multChoiceOneAnswer)
        alert(this.multChoiceTwoAnswer)
        alert(this.TFAnswer) }
    catch(e) { alert('json not saved'); }
        },

        correctAnswer(){
            document.getElementById('correct').style.color="green";
        }
    
    } 
    

}
</script>

<style scoped>
.v-card__text, .v-card__title {
  word-break: normal; 
  color:black;

}

.v-btn {
    margin-bottom:5%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
}


.v-card{
    margin-left: 50%;
    margin-right: 50%;
    width: 450px;
    padding: 10px 20px;
    
}
    

</style>