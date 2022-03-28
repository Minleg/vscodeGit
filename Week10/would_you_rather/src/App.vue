<template>
  <div id="app">

    <h1>Would you rather...</h1>

    <would-you-rather 
    v-bind:question="wyrQuestion"
    v-bind:answer1="wyrAnswer1"
    v-bind:answer2="wyrAnswer2"
    v-on:answer-changed="answerChanged"
    ></would-you-rather>

    <p> {{ userSelectionMessage }} </p>

  </div>
</template>

<script>
import WouldYouRather from './components/WouldYouRather.vue'

export default {
  name: 'App',
  components: {
    WouldYouRather
  },
  data(){
    return {
      wyrQuestion: 'Would you rather live in a house shaped like a triangle or a house shaped like a circle?',
      wyrAnswer1: 'Triangle house',
      wyrAnswer2: 'Circle house',
      userSelectionMessage: ''
    }
  },
  methods: {
    answerChanged(choice) {
      this.userSelectionMessage = `Thanks! you chose ${choice}`
    }
  }
}
</script>

<style>

body {
  background: burlywood ;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color:darksalmon;
}
</style>
