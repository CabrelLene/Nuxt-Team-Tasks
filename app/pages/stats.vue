<template>
  <section>
    <h1 style="margin:0 0 10px;">Stats</h1>

    <div style="display:grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap:12px; margin-bottom:14px;">
      <div style="padding:12px; border-radius:12px; background:#f6f6f6;">
        <div style="opacity:.7; font-size:13px;">Total</div>
        <div style="font-size:24px; font-weight:700;">{{ total }}</div>
      </div>
      <div style="padding:12px; border-radius:12px; background:#f6f6f6;">
        <div style="opacity:.7; font-size:13px;">Complétées</div>
        <div style="font-size:24px; font-weight:700;">{{ done }}</div>
      </div>
      <div style="padding:12px; border-radius:12px; background:#f6f6f6;">
        <div style="opacity:.7; font-size:13px;">À faire</div>
        <div style="font-size:24px; font-weight:700;">{{ todo }}</div>
      </div>
      <div style="padding:12px; border-radius:12px; background:#f6f6f6;">
        <div style="opacity:.7; font-size:13px;">Progression</div>
        <div style="font-size:24px; font-weight:700;">{{ percent }}%</div>
      </div>
    </div>

    <button
      @click="resetDone"
      :disabled="done === 0"
      style="padding:10px 14px; cursor:pointer;"
    >
      Supprimer les tâches complétées
    </button>

    <p style="margin-top:12px; opacity:.7;">
      Astuce: ces stats viennent du même store que /tasks (useTasks).
    </p>
  </section>
</template>

<script setup lang="ts">
const { tasks, load } = useTasks();

onMounted(load);

const total = computed(() => tasks.value.length);
const done = computed(() => tasks.value.filter(t => t.done).length);
const todo = computed(() => total.value - done.value);
const percent = computed(() => (total.value === 0 ? 0 : Math.round((done.value / total.value) * 100)));

function resetDone() {
  // simple, mais volontairement "brutal" : on va l'améliorer plus tard
  tasks.value = tasks.value.filter(t => !t.done);
  if (process.client) localStorage.setItem("tasks", JSON.stringify(tasks.value));
}
</script>
