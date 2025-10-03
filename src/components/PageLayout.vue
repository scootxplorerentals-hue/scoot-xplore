<template>
  <div class="page-container">
    <header class="page-header">
      <h1>{{ title }}</h1>
      <p v-if="subtitle" class="page-subtitle">{{ subtitle }}</p>
    </header>

    <section class="page-content">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: "PageLayout",
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: "" }
  }
};
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: auto;
  padding: 3rem 1rem;
  color: #fff;
}

.page-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #ffcc00; /* accent color */
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
}

.page-content {
  font-size: 1.1rem;
  line-height: 1.7;
}
</style>
