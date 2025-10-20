<template>
  <div>
    <header class="header">
    <div class="container header-inner">
      <div class="brand">
        <div class="logo-circle">
          <router-link to="/">
            <img
              class="logo-img"
              src="/images/IMG_0254-removebg-preview.png"
              alt="ScootXplore Logo"
            />
          </router-link>
        </div>
      </div>

      <!-- Hamburger button -->
      <button class="menu-toggle" @click="menuOpen = !menuOpen">☰</button>

      <nav class="nav" :class="{ open: menuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu"
          >Home</router-link
        >
        <router-link to="/bike-rentals" class="nav-link" @click="closeMenu"
          >Bike tours</router-link
        >
        <router-link to="/contact" class="nav-link" @click="closeMenu"
          >Contact Us</router-link
        >
        <button class="btn lang-btn">EN</button>
      </nav>
    </div>
  </header>
  <main>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </main>

  <footer class="footer">
    <div class="footer-container">
      <!-- Stay in Touch -->
      <div class="footer-col">
        <h2 class="footer-title">STAY IN TOUCH</h2>
        <p class="footer-text">
          Do you occasionally want to be informed about upcoming events, deals
          and tips?
        </p>

        <form id="subscribe-form" @submit.prevent="submitForm">
          <input
            class="subscribe-input"
            type="email"
            v-model="subscriberEmail"
            placeholder="Your email here..."
            required
          />
          <button class="btn" type="submit">SUBSCRIBE</button>
        </form>
        <p id="subscribe-message" style="color: white">
          {{ subscribeMessage }}
        </p>
      </div>

      <!-- Contact -->
      <div class="footer-col">
        <h2 class="footer-title">CONTACT</h2>
        <p>
          <strong>Address:</strong><br />195 147 Soi Mu Ban Lully Ville 2,
          Phraeksa, Mueang Samut Prakan District, Samut Prakan 10280
        </p>
        <p>
  <strong>Phone:</strong><br />
  <a href="tel:+66959474520" class="footer-phone">+66 95 947 4520</a>
</p>

        <p><strong>Mail:</strong><br />scootxplorerentals@gmail.com</p>
      </div>

      <!-- Blogs -->
      <div class="footer-col">
        <h2 class="footer-title">BLOGS</h2>
        <ul class="footer-links">
          <li>
            <a href="#"
              >Can I Join a scootXploreRentals Tour If I’m Not an Experienced
              Cyclist?</a
            >
          </li>
          <li>
            <a href="#"
              >Why renting a bike from scootXploreRentals is a smart and
              affordable choice</a
            >
          </li>
          <li>
            <a href="#"
              >More Than a Bike Ride — What Renting a scootXploreRentals Fatbike
              Adds to Your THAILAND Trip</a
            >
          </li>
        </ul>
        <div class="footer-socials">
          <a
            href="https://www.facebook.com/profile.php?id=61569576403679&mibextid=wwXIfr&rdid=2qoRps2gtJ28AaXZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GK3U3nsuQ%2F%3Fmibextid%3DwwXIfr#"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-facebook"></i
          ></a>
          <a
            href="https://www.instagram.com/scootxplore.rentals/?igsh=M3BuYzZqdjVoNnRt&utm_source=qr#"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-instagram"></i
          ></a>
          <a
            href="https://www.tiktok.com/@scootxplorerental?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-tiktok"></i
          ></a>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="footer-bottom">
      <div class="footer-nav">
        <router-link to="/locations">Locations</router-link>
        <router-link to="/combi-deals">Combi Deals</router-link>
        <router-link to="/about-us">About Us</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/biking-rules">Biking Rules & Safety</router-link>
        <router-link to="/rental-terms">Rental Terms</router-link>
        <router-link to="/privacy-policy">Privacy Policy</router-link>
      </div>

      <p class="footer-credit">Created with <strong>LOVE</strong></p>
    </div>
  </footer>
  <WhatsappButton />
  </div>
</template>

<script>
import WhatsappButton from './components/WhatsAppButton.vue'

export default {
  name: "App",
  components : {
    WhatsappButton
  },
  mounted() {
    // Ensure we start at the top of the page on reload
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);

      // Also handle bfcache/pageshow restores in some browsers
      window.addEventListener('pageshow', (event) => {
        if (event.persisted) window.scrollTo(0, 0);
      });
    }
  },
  data() {
    return {
      menuOpen: false,
      subscriberEmail: "",
      subscribeMessage: "",
    };
  },
  methods: {
    closeMenu() {
      this.menuOpen = false;
    },

    async submitForm() {
      try {
        const formData = new FormData();
        formData.append("email", this.subscriberEmail); // ✅ correct property

        await fetch(
          "https://script.google.com/macros/s/AKfycby5WpRVv1RULYJoqNQ6VVeXm7uRvnytHLqrRY-dazJ0-rTnNsE6w1iL1a3F5wpYwcFX/exec",
          {
            method: "POST",
            mode: "no-cors", // bypasses CORS issues
            body: formData,
          }
        );

        this.subscribeMessage = "✅ Thanks! You’re subscribed.";
        this.subscriberEmail = ""; // clear input
      } catch (err) {
        console.error(err);
        this.subscribeMessage = "⚠️ Network error. Please retry.";
      }
    },
  },
};
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.25);
}

.subscribe-form {
  display: flex;
  align-items: center;
  max-width: 100%;
}

.subscribe-input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 25px 0 0 25px;
  outline: none;
  min-width: 0; /* prevents input from pushing button off-screen */
}

.btn {
  background-color: #ffb400;
  color: white;
  border: none;
  border-radius: 0 25px 25px 0;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  white-space: nowrap; /* prevents text from breaking */
}

.btn:hover {
  background-color: #e09d00;
}

/* --- RESPONSIVE FIX --- */
@media (max-width: 1024px) and (min-width: 768px) {
  .subscribe-form {
    flex-direction: column;
    align-items: stretch;
  }

  .subscribe-input {
    border-radius: 25px;
    margin-bottom: 10px;
    width: 100%;
  }

  .btn {
    border-radius: 24px;
    width: 100%;
  }

}

.footer-phone {
  color: inherit;              /* same color as normal footer text */
  text-decoration: none;       /* remove underline */
  font-weight: 500;
  transition: color 0.2s ease;
}
.footer-phone:hover {
  color: var(--accent);        /* highlight on hover */
}

</style>
