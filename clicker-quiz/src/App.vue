<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h1> hi </h1>
    </v-app-bar>

    <v-content>
      <Question/>
    </v-content>
  </v-app>
</template>

<script>
import Question from './components/Question';

export default {
  name: 'App',

  components: {
    Question,
  },

  data: () => ({
    //
  }),
};
</script>
