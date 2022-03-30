<template>
  <div id="app">

    <new-student-form v-on:student-added="newStudentAdded"></new-student-form>
    <student-table v-bind:students="students" 
      v-on:student-arrived-or-left="studentArrivedOrLeft"
      v-on:delete-student="studentDeleted"></student-table>
    <student-message v-bind:student="mostRecentStudent"></student-message>
  </div>
 
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentMessage from './components/StudentMessage.vue'
import StudentTable from './components/StudentTable.vue'

export default {
  name: 'App',
  components: {
    NewStudentForm,
    StudentMessage,
    StudentTable
  },
  data() {
    return {
      students: [],
      mostRecentStudent: {}
    }
  },
  methods: {
    newStudentAdded(student) {
       this.students.push(student)
       this.students.sort(function(s1,s2){
         return s1.name.toLowerCase() < s2.name.toLowerCase() ? -1 : 1
       })
    },
    studentArrivedOrLeft(student,present) {
      // find student in array of students
      let updateStudent = this.students.find(function(s){
        if(s.name === student.name && s.starID === student.starID){
          // this is the student to update
          return true
        }
      })

      // update present attribute
      if(updateStudent){
        updateStudent.present = present
        this.mostRecentStudent = updateStudent
      }

    },
    studentDeleted(student){
      // filter returns a new array of all students for whom the function returns true
      this.students = this.students.filter(function(s){
        if(s != student){
          return true
        }
      })

      // clear welcome/goodbye
      this.mostRecentStudent = {}
    }

  }
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>
