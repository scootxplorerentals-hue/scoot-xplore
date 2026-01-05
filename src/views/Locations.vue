<template>
  <PageLayout title="Our Locations" subtitle="Find us across Thailand">
    <div class="locations-grid">
      <div class="location-card">
        <h2>Bangkok</h2>
        <p>Explore the vibrant city with ease 🚴‍♂️</p>
      </div>
      <div class="location-card">
        <h2>Pattaya</h2>
        <p>Ride by the beaches and nightlife 🌊</p>
      </div>
      <div class="location-card">
        <h2>Chiang Mai</h2>
        <p>Discover mountain trails and nature ⛰️</p>
      </div>
      <div class="location-card">
        <h2>Phuket</h2>
        <p>Enjoy coastal roads and island vibes 🏝️</p>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
export default { components: { PageLayout } };
</script>
