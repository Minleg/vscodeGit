<template>
  <div id="app">

    <h1>Would you rather...</h1>
   <!--we bind the data in props of the child element WouldYouRather to the data in its parent, when answer-changed event defined in child element happens, it calls the answerChanged method defined here in the parent element--> 
    <would-you-rather 
    v-for="question in questions" v-bind:key="question.id"
    v-bind:question="question.wyrQuestion"
    v-bind:answer1="question.wyrAnswer1"
    v-bind:answer2="question.wyrAnswer2"
    v-bind:id="question.id"
    v-on:answer-changed="answerChanged">
    </would-you-rather>

<!-- creates an unordered list and displays the anwer picked by the user-->
    <ul class="unordered-list">
    <li v-for="choice in userChoices" v-bind:key="choice">
      {{choice}}
    </li>
    </ul>
    

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
      questions: [
        {
        id:0,
        wyrQuestion: 'Would you rather travel the world or stay all your life in your dream country?',
        wyrAnswer1: 'Travel the world',
        wyrAnswer2: 'Stay whole life in dream country'
        },
        {
        id: 1,
        wyrQuestion: 'Would you rather meet Batman or Spiderman',
        wyrAnswer1: 'Batman',
        wyrAnswer2: 'Spiderman'
        },
        {
        id: 2,
        wyrQuestion: 'Would you rather be invisible or being able to read mind?',
        wyrAnswer1: 'Invisible',
        wyrAnswer2: 'Read Mind'
        }

        ],
      userChoices: [], // store the answers user selected
      userSelectionMessage: ''
    }
  },
  mounted() {
    this.questions.forEach(q => { // if answers have not been chosen, it displays this message for each question
      this.userChoices.push(`You have not made a selection for ${q.wyrQuestion}`)
    })
  },
  methods: {
    answerChanged(choice,id) {
      
      // sets key value as id and value value as choice in the userChoices array
      this.userChoices[id] = choice
      
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

/* centers the display of list */ 
.unordered-list { 
  display: table;
  margin: 0 auto;
  text-align: left;
}

h1 {
  color: cadetblue;
}
</style>
