import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#003366',
            secondary: '#b0bec5',
            anchor: '#e6f2ff',
          },
        },
      },
});
