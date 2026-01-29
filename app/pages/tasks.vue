<template>
  <section>
    <h1 style="margin:0 0 10px;">Tâches</h1>

    <form @submit.prevent="onAdd" style="display:flex; gap:10px; margin-bottom:14px;">
      <input v-model="title" placeholder="Nouvelle tâche..." style="flex:1; padding:10px; border-radius:10px; border:1px solid #ddd;" />
      <button style="padding:10px 14px; cursor:pointer;">Ajouter</button>
    </form>

    <p style="opacity:.7; margin-top:0;">
      Total: {{ tasks.length }} • Fait: {{ doneCount }}
    </p>

    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:10px;">
      <TaskItem
        v-for="t in tasks"
        :key="t.id"
        :task="t"
        @toggle="toggle"
        @remove="remove"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
const { tasks, load, add, toggle, remove } = useTasks();
const title = ref("");

onMounted(load);

const doneCount = computed(() => tasks.value.filter(t => t.done).length);

function onAdd() {
  add(title.value);
  title.value = "";
}
</script>
