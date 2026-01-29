<template>
  <section>
    <h1 style="margin:0 0 8px;">Bienvenue 👋</h1>
    <p style="margin:0 0 14px; opacity:.85;">
      Projet d’entraînement Git/GitHub : branches, PR, conflits, hotfix, versions.
    </p>

    <ul>
      <li><NuxtLink to="/tasks">Aller aux tâches</NuxtLink></li>
      <li><NuxtLink to="/about">À propos</NuxtLink></li>
    </ul>

    <hr style="margin: 18px 0;" />

    <button @click="ping" style="padding:10px 14px; cursor:pointer;">
      Tester /api/ping
    </button>
    <pre style="margin-top:12px; background:#f6f6f6; padding:12px; border-radius:10px;">{{ result }}</pre>
  </section>
</template>

<script setup lang="ts">
const result = ref<string>("(pas encore appelé)");

async function ping() {
  const data = await $fetch<{ ok: boolean; time: number }>("/api/ping");
  result.value = JSON.stringify(data, null, 2);
}
</script>
