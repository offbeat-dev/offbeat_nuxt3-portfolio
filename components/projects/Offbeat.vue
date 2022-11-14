<script setup lang="ts">
const parsedTodos = ref();
const debug = false;
const client = useSupabaseClient();
const config = useRuntimeConfig();
const { data: todos } = await useLazyAsyncData('projects', async () => {
  const { data } = await client.from('todos').select('*');
  return data;
});
watch(todos, (newTodos) => {
  parsedTodos.value = newTodos.map((t) => {
    const a = new Date(Date.parse(t.created_at));
    return {
      ...t,
      created_at: a.getFullYear(),
    };
  });
});
</script>
<template>
  {{ parsedTodos ? '' : 'Loading...' }}
  <ul v-for="todo in parsedTodos">
    <li>{{ todo.created_at }}</li>
  </ul>
  <div v-if="debug">
    <p>{{ todos }}</p>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  align-items: center;
}
</style>
