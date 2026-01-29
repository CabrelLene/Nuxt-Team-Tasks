<template>
  <div style="max-width: 900px; margin: 0 auto; padding: 24px; font-family: system-ui;">
    <header style="display:flex; gap:14px; align-items:center; margin-bottom:18px;">
      <strong>Nuxt Team Tasks</strong>
      <nav style="display:flex; gap:12px;">
        <NuxtLink to="/">Home</NuxtLink>
+ <NuxtLink to="/about">About</NuxtLink>

        <NuxtLink to="/">Home</NuxtLink>
        <!-- On va volontairement modifier ce menu dans plusieurs branches -> conflits réalistes -->
      </nav>
      <span style="margin-left:auto; opacity:.7; font-size: 13px;">
        {{ new Date().toLocaleString() }}
      </span>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
