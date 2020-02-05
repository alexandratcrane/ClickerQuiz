<template>
    <div>
        <v-form
            ref="form">
     
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

                        <v-card-subtitle
                        v-if="displayAnswer == true"
                        v-text="'correct answer: ' + q.answer"
                        v-bind:style=" q.correct ? 'background-color: green' : 'background-color: red' "> 
                        
                        </v-card-subtitle>

                        <v-text-field  outlined v-model="q.input" placeholder="Your answer" class="mx-auto"
                        
                        ></v-text-field>

                        <p style="text-align: center" id="correct" >Your answer: {{ q.input }}</p>     

                    </div>
                </v-card>
 
                
                
                <v-card
                    v-for="b in multChoiceOne"
                    :key="b.question"
                    raised
                    class="mx-auto">


                    <v-card-subtitle
                    v-if="displayAnswer == true"
                    v-text="'correct answer:' + b.answer"
                    v-bind:style=" b.correct ? 'background-color: green' : 'background-color: red' ">
                    </v-card-subtitle>

                    <v-radio-group v-model="b.input">

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
                    v-for="b in multChoiceTwo"
                    :key="b.question"
                    raised
                    class="mx-auto">
                    <v-card-subtitle
                    v-if="displayAnswer == true"
                    v-text="'correct answer: ' + b.answer"
                    v-bind:style=" b.correct ? 'background-color: green' : 'background-color: red' ">
                    </v-card-subtitle>

                    <v-radio-group v-model="b.input">

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

                     <v-card-subtitle
                    v-if="displayAnswer == true"
                    v-text="'correct answer: ' + b.answer"
                    v-bind:style=" b.correct ? 'background-color: green' : 'background-color: red' ">
                    </v-card-subtitle>

                    
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

           multChoiceOne: Json.multChoice1,
           multChoiceTwo: Json.multChoice2,
           trueFalse: Json.TF,

           multChoiceOneAnswer: '',
           multChoiceTwoAnswer: '',
           TFAnswer: '',

           displayAnswer: false,
           
           
        }
    },
    methods: {
        processInput(input){
        input = input.toLowerCase();
        input = input.replace(/['"]+/g, '')
        
        if (input == "" || /\s/.test(input)){
            alert('No spaces in your input. This answer will not be accepted.')
            input = ''
            return;
        } else { 
            return input;
            }
        },

    checkAgainstAnswerFill(questionNumber, answer){

        const input = this.processInput(JSON.stringify(this.fill[questionNumber].input))
        
        if (input == answer){
            this.fill[questionNumber].correct = true
        } else {
            this.fill[questionNumber].correct = false
        }
    },

    checkAgainstAnswerMultChoice(){

        alert(JSON.stringify(this.multChoiceOne))

        if (JSON.stringify(this.multChoiceOne) == JSON.stringify(this.multChoiceOne.answer)){
            this.multChoiceOne.correct = true
            alert(JSON.stringify(this.multChoiceOne.answer))
        } else {
            this.multChoiceOne.correct = false
        }


       // alert(JSON.stringify(this.multChoiceOne.input))
    },




    validateJSON(){


    try { 
        
    this.checkAgainstAnswerFill(0, this.processInput(JSON.stringify(this.fill[0].answer)))
    this.checkAgainstAnswerFill(1, this.processInput(JSON.stringify(this.fill[1].answer)))
    this.checkAgainstAnswerFill(2, this.processInput(JSON.stringify(this.fill[2].answer)))
    this.checkAgainstAnswerFill(3, this.processInput(JSON.stringify(this.fill[3].answer)))



//TODO: Create JS funct to validate multiple choice answers! 
/*
    if (this.multChoiceOne.answer == this.multChoiceOne.input){
            this.multChoiceOne.correct = true
            alert(this.multChoiceOne.input)
        } else {
            this.multChoiceOne.correct = false
        }


     if (JSON.stringify(this.multChoiceTwo.answer) == JSON.stringify(this.multChoiceTwo.input)){
            this.multChoiceTwo.correct = true
            alert(JSON.stringify(this.multChoiceOne.input))
        } else {
            this.multChoiceTwo.correct = false
        }

/*
    if (this.TFAnswer == JSON.stringify(this.multChoiceTwo.answer)){
            this.multChoiceTwo.correct = true
            alert(JSON.stringify(this.multChoiceOne.answer))
        } else {
            this.multChoiceTwo.correct = false
        }
*/
  this.displayAnswer =  true

    }catch(e) { alert(e); }



    
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
    margin-top: 20px;
    
}
    

</style>