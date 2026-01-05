<template>
  <div class="notfound-page">
    <div class="notfound-content">
      <h1 class="notfound-title">404</h1>
      <p class="notfound-message">
        Sorry, the page you are looking for cannot be found.
      </p>
      <router-link to="/" class="btn notfound-btn">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
.notfound-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* centers vertically */
  background: #fff;
  text-align: center;
  padding: 20px;
}

.notfound-content {
  max-width: 500px;
  width: 100%;
}

.notfound-title {
  font-size: 96px;
  font-weight: 800;
  margin: 0;
  color: var(--accent);
}

.notfound-message {
  font-size: 18px;
  margin: 16px 0 28px;
  color: var(--dark);
}

.notfound-btn {
  background: var(--teal);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: var(--radius);
  transition: background 0.3s ease;
}

.notfound-btn:hover {
  background: #0aa0a0;
}
</style>
