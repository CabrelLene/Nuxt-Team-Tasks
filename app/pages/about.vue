<template>
  <section>
    <h1 style="margin:0 0 10px;">À propos</h1>
    <p style="opacity:.85; margin:0 0 14px;">
      Repo d'entraînement Git/GitHub : branches, PR, conflits, versions.
    </p>

    <ul>
      <li>Branches & PR</li>
      <li>Conflits</li>
      <li>Tags & releases</li>
      <li>Hotfix</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: "About • Nuxt Team Tasks",
  meta: [
    { name: "description", content: "Training repo for Git/GitHub workflows with Nuxt." }
  ],
});
</script>
