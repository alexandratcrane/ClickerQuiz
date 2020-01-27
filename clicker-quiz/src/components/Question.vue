<template>
    <div>
        <v-form
      ref="form"
      v-model="valid">
        <v-col
            v-for="q in test"
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
                <input v-model="q.answer" placeholder="Your answer" required>
                <p>Your answer: {{ answer }}</p>

                </div>
              </div>
            </v-card>
    </v-col>
    <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>
        </v-form>
     
    </div>
</template>

<script>
export default {
    data() {
        return{
            test:[
                { question: 1, answer: '', color: 'blue'},
                { question: 2, answer: '',color: 'blue'},
                { question: 3, answer: '',color: 'blue'},
                { question: 4, answer: '',color: 'blue'},
                { question: 5, answer: '',color: 'blue'},
                { question: 6, answer: '',color: 'blue'}
            ]
        }
    }
}
</script>

<style scoped>

</style>