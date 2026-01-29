type Task = { id: string; title: string; done: boolean; createdAt: number };

export function useTasks() {
  const tasks = useState<Task[]>("tasks", () => []);
  const loaded = useState<boolean>("tasks_loaded", () => false);

  function load() {
    if (loaded.value) return;
    if (process.client) {
      const raw = localStorage.getItem("tasks");
      tasks.value = raw ? JSON.parse(raw) : [];
    }
    loaded.value = true;
  }

  function safeId() {
  // crypto.randomUUID est top, mais pas garanti partout
  // fallback simple et stable
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}


  function persist() {
    if (process.client) localStorage.setItem("tasks", JSON.stringify(tasks.value));
  }

  function add(title: string) {
    const t = title.trim();
    if (!t) return;
    tasks.value.unshift({ id: safeId(),
title: t, done: false, createdAt: Date.now() });
    persist();
  }

  function toggle(id: string) {
    const item = tasks.value.find(t => t.id === id);
    if (!item) return;
    item.done = !item.done;
    persist();
  }

  function remove(id: string) {
    tasks.value = tasks.value.filter(t => t.id !== id);
    persist();
  }

  return { tasks, load, add, toggle, remove };
}
