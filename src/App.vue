<template>
  <div id="app">
    <a href="#" class="add-todo-btn" @click="showForm = !showForm">+ new todo</a>
    <div class="todo-list" v-for="(todo, index) in todos" :key='todo.id'>
      <input class="todo-list-child checkbox" type="checkbox" v-model="todo.done">
      <span class="todo-list-child title">{{ todo["title"] }}</span>
      <span class="todo-list-child due-date">[due: {{ todo["dueDate"] }}]</span>
      <a href="#" class="todo-list-child todo-menu delete" @click="deleteTodo(index)">delete</a>
    </div>
      <form class="form" v-if="showForm" @submit="addTodo">
        <input class="form-element form-text" type="text" v-model="form.text">
        <input class="form-element form-date" type="date" v-model="form.dueDate">
        <button class="form-element form-submit-btn">add</button>
      </form>
  </div>
</template>

<script>
import date from 'date-and-time'

export default {
  name: 'app',
  data () {
    return {
      uuid: 0,
      showForm: false,
      todos: [],
      form: {
        text: '',
        dueDate: date.format(new Date(), 'YYYY-MM-DD'),
      }
    }
  },
  methods: {
    createTodo: function(title, dueDate) {
      return {
        id: this.uuid,
        done: false,
        title: title,
        important: false,
        dueDate: dueDate,
        toggleImportant() {
          this.important = !this.important;
        }
      }
    },
    addTodo: function(evt){
      evt.preventDefault();
      this.uuid += 1;
      this.todos.push(this.createTodo(this.form.text,this.form.dueDate))
      console.log(this.uuid);
      this.showForm = false;
      this.form.text = '';
      this.form.dueDate = date.format(new Date(), 'YYYY-MM-DD');
    },
    deleteTodo: function(index){
      this.todos.splice(index,1);
      console.log(this.todos);
    }
  },
  mounted: function() {
    this.$nextTick(function () {
      this.todos.push(this.createTodo('New todo', '2019-09-1', 'Happy birthday!'));
    })
  }
}
</script>

<style lang="scss">
  @import 'main.scss';
</style>
