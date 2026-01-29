<template>
  <li style="display:flex; align-items:center; gap:10px; padding:10px; background:#f6f6f6; border-radius:10px;">
    <input type="checkbox" :checked="task.done" @change="$emit('toggle', task.id)" />
    <span :style="{ textDecoration: task.done ? 'line-through' : 'none', opacity: task.done ? .6 : 1 }">
      {{ task.title }}
    </span>
    <button @click="$emit('remove', task.id)" style="margin-left:auto; cursor:pointer;">Supprimer</button>
  </li>
</template>

<script setup lang="ts">
defineProps<{ task: { id: string; title: string; done: boolean } }>();
defineEmits<{ (e: "toggle", id: string): void; (e: "remove", id: string): void }>();
</script>
