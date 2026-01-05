<template>
  <main class="container">
    <section class="section">
      <h2>Contact <span style="color:var(--teal)">US</span></h2>
      <p style="color:var(--muted)">
        At ScootXplore, we’re passionate about making your journey in Thailand smooth,
        fun, and memorable. Whether you’re here for a short vacation or a long stay,
        our scooters and bikes are designed to give you the freedom to explore at your own pace.
      </p>

      <div class="assistance">
        <!-- Left Column -->
        <div class="assistance-content">
          <h3>Our Mission</h3>
          <p>
            We believe exploring new places should be easy and affordable. That’s why
            we provide top-quality bikes, transparent pricing, and excellent customer support.
          </p>

          <h3>Why Choose Us?</h3>
          <p>
            ✅ Reliable scooters and motorbikes <br />
            ✅ Affordable daily, weekly, and monthly rates <br />
            ✅ Friendly service and 24/7 support
          </p>
        </div>

        <!-- Right Column (Google Map) -->
        <div class="assistance-image">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019903307227!2d144.96305811531676!3d-37.81621897975182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57709e4bbdfb1e0!2sBreezyTracks!5e0!3m2!1sen!2sth!4v1678279937085!5m2!1sen!2sth"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Section */
.section h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.section p {
  font-size: 1rem;
  line-height: 1.6;
}

/* Flex layout */
.assistance {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 30px;
  gap: 30px;
}

/* Left Column */
.assistance-content {
  flex: 1;
}

.assistance-content h3 {
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: 700;
}

.assistance-content p {
  margin-top: 10px;
  color: var(--muted);
}

/* Right Column (map) */
.assistance-image {
  flex: 1;
}

.assistance-image iframe {
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .assistance {
    flex-direction: column;
  }

  .assistance-image {
    margin-top: 20px;
  }
}
</style>
