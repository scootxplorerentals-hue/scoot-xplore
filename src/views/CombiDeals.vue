<template>
  <PageLayout title="Combi Deals" subtitle="Save more with bundled offers">
    <div class="deals-container">
      <div class="deal-card">
        <h3>Weekend Ride</h3>
        <p>2 days rental + Free helmet</p>
        <span class="deal-price">฿900</span>
      </div>
      <div class="deal-card">
        <h3>Family Pack</h3>
        <p>4 bikes for 3 days</p>
        <span class="deal-price">฿2500</span>
      </div>
      <div class="deal-card">
        <h3>Explorer Bundle</h3>
        <p>7-day rental + free lock & lights</p>
        <span class="deal-price">฿3500</span>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../components/PageLayout.vue";
export default { components: { PageLayout } };
</script>
