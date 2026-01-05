<template>
  <a
    href="https://wa.me/66959474520"
    class="whatsapp-float"
    target="_blank"
    aria-label="Chat on WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      class="whatsapp-icon"
    >
      <path
        fill="#fff"
        d="M19.11 17.09c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.65.15-.19.3-.75.92-.92 1.11-.17.19-.34.21-.63.06-.29-.15-1.21-.45-2.31-1.45-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.13-.17.17-.3.26-.49.09-.19.04-.36-.02-.51-.06-.15-.65-1.56-.89-2.14-.23-.55-.46-.48-.63-.49-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.45 0 1.45 1.02 2.85 1.17 3.05.15.19 1.99 3.03 4.82 4.25.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.69-.69 1.93-1.35.24-.66.24-1.22.17-1.35-.07-.13-.26-.21-.55-.36zM16.01 4.45c-6.39 0-11.56 5.17-11.56 11.56 0 2.04.53 4.03 1.54 5.77l-1.64 6.01 6.14-1.61a11.52 11.52 0 0 0 5.52 1.38h.01c6.39 0 11.56-5.17 11.56-11.56 0-3.09-1.2-6-3.38-8.18a11.5 11.5 0 0 0-8.19-3.37zM16 26.07h-.01a9.02 9.02 0 0 1-4.59-1.25l-.33-.2-3.64.96.97-3.56-.21-.36a9.04 9.04 0 0 1-1.36-4.77 9.09 9.09 0 0 1 9.08-9.08 9.07 9.07 0 0 1 6.44 2.67 9.08 9.08 0 0 1-6.35 15.59z"
      />
    </svg>
    <span class="whatsapp-text">Contact Us</span>
  </a>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  transition: all 0.3s ease;
}

.whatsapp-float:hover {
  background-color: #20ba5a;
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.whatsapp-icon {
  width: 26px;
  height: 26px;
}

.whatsapp-text {
  color: #fff;
  letter-spacing: 0.3px;
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .whatsapp-float {
    padding: 10px 14px;
    font-size: 14px;
    bottom: 15px;
    right: 15px;
  }
  .whatsapp-icon {
    width: 22px;
    height: 22px;
  }
}
</style>
