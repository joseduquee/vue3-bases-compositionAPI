<template>
  <h1>Thanos Todo List</h1>
  <!-- <h4>Pendientes: {{ $store.state.todos.filter( t => !t.completed).length }}</h4> -->
  <h4>Pendientes: {{ pending.length }}</h4>

  <hr />

  <button :class="{ active: currentTab === 'all' }" @click="currentTab = 'all'">
    Todos
  </button>
  <button
    :class="{ active: currentTab === 'pending' }"
    @click="currentTab = 'pending'"
  >
    Pendientes
  </button>
  <button
    :class="{ active: currentTab === 'completed' }"
    @click="currentTab = 'completed'"
  >
    Completados
  </button>

  <div>
    <ul>
      <li
        v-for="todo in getTodosByCurrentTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Crear Todo</button>

  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h1>Agregar Todo</h1>
    </template>

    <template v-slot:body>
      <form @submit.prevent="createTodo(newTodoText); isOpen=false; newTodoText=''">
        <label for="todo">¿Que tienes que hacer?</label>
        <input id="todo" type="text" v-model="newTodoText" />
        <br />
        <button @click="closeModal">Cerrar</button>
        <button type="submit">Guardar</button>
      </form>
    </template>
  </modal>
</template>


<script>
import useTodos from "@/composables/useTodos";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  components: { Modal },

  setup() {
    const store = useStore();

    const isOpen = ref(false);

    const {
      currentTab,
      getTodosByCurrentTab,
      pending,

      toggleTodo,
      createTodo,
    } = useTodos();

    return {
      currentTab,
      getTodosByCurrentTab,
      pending,
      isOpen,

      toggleTodo,
      createTodo,
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
      newTodoText: ref(""),
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}

label {
  font-weight: 600;
}

input {
  margin: 10px;
}
</style>