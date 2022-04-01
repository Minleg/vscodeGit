<template>
  <div class="wyr">
    
    <h2>Please make your choice </h2>

    <h3> {{question}} </h3>

    <input type="radio" v-model="choice" v-bind:value="answer1" v-on:change="choiceMade">
    <label> {{answer1}} </label>
    <input type="radio" v-model="choice" v-bind:value="answer2" v-on:change="choiceMade">
    <label> {{answer2}} </label>
  </div>
</template>

<script>
export default {
  name: 'WouldYouRather',
  props: { /* These props value are values received from the parent*/
    question: String,
    answer1: String,
    answer2: String,
    id: Number
  },
  data() {
    return {
      choice: ''
    }
  },
  methods: {
    choiceMade() {
      this.$emit('answer-changed', this.choice, this.id) //answer-changed is set as the name of the event and this.choice and this.id data is sent to the parent
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

h2 {
  text-decoration: underline;
}

.wyr {
  border: 2px black solid;
  background-color:antiquewhite;
  margin: 10px;
}
</style>
