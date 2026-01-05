<template>
  <div>
    <!-- Hero Section with filter -->
    <section class="hero">
      <div class="overlay container">
        <h1>FIND A BIKE RENTAL LOCATION</h1>
        <p
          style="
            margin-top: 8px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);
          "
        >
          Bike rentals starting at only $9.45*
        </p>

        <div class="searchbar" style="margin-top: 20px">
          <select aria-label="city" v-model="selectedCity">
            <option value="">All cities</option>
            <option v-for="city in cities">{{ city.city }}</option>
          </select>
          <input
            placeholder="Search places, location..."
            v-model="searchQuery"
          />
          <button
            class="btn"
            style="background: var(--accent)"
            @click="applyFilter"
          >
            Search
          </button>
        </div>
      </div>
    </section>

    <!-- // city list // -->
     <h2 class="our-locations">Our <span class="highlight">Locations</span></h2>
    <div class="city-list" style="margin-top: 18px">
      

      <div class="city-card" v-for="(item, i) in filteredcities" :key="i">
        <!-- Left Map -->
        <div class="city-map">
          <iframe
            :src="item.img"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Right Content -->
        <div class="city-content">
          <div class="city-header">
            <h3>{{ item.city.toUpperCase() }}</h3>
            <!-- <span class="flag">{{ item.flag }}</span> -->
          </div>
          <p class="city-places">{{ item.places }}</p>
        </div>
      </div>
    </div>

    <section class="section bikes">
      <div class="container">
        <h2>Our <span class="highlight">Bike Rentals</span></h2>
        <div class="cards">
           <!-- Yamaha Aerox 155  -->
          <div class="card">
            <img src="../../public/bikes/GPX Drone 150 .jpeg" alt="Yamaha GT 125" />
            <div class="card-body">
              <h3 class="card-title">GPX Drone 150</h3>
              <p class="card-sub">Per Day: 430฿</p>
              <p class="card-sub">Per Week: 2500฿</p>
              <p class="card-sub">Per Month: 5000฿</p>
            </div>
          </div>

          <!-- Yamaha Aerox 155  -->
          <div class="card">
            <img src="../../public/bikes/Yamaha Aerox 155 .jpeg" alt="Yamaha GT 125" />
            <div class="card-body">
              <h3 class="card-title">Yamaha Aerox 155 </h3>
              <p class="card-sub">Per Day: 430฿</p>
              <p class="card-sub">Per Week: 2500฿</p>
              <p class="card-sub">Per Month: 5000฿</p>
            </div>
          </div>

          <!-- Malaguti Madison 150cc -->
          <div class="card">
            <img src="../../public/bikes/Malaguti Madison 150cc.jpeg" alt="Yamaha GT 125" />
            <div class="card-body">
              <h3 class="card-title">Malaguti Madison 150cc</h3>
              <p class="card-sub">Per Day: 430฿</p>
              <p class="card-sub">Per Week: 2500฿</p>
              <p class="card-sub">Per Month: 5000฿</p>
            </div>
          </div>
          <!-- Yamaha GT 125 -->
          <div class="card">
            <img src="/bikes/Yamaha GT 125.jpg" alt="Yamaha GT 125" />
            <div class="card-body">
              <h3 class="card-title">Yamaha GT 125</h3>
              <p class="card-sub">Per Day: 350฿</p>
              <p class="card-sub">Per Week: 2000฿</p>
              <p class="card-sub">Per Month: 4000฿</p>
            </div>
          </div>

          <!-- Honda Click 125 -->
          <div class="card">
            <img src="/bikes/Honda Click 125.webp" alt="Honda Click 125" />
            <div class="card-body">
              <h3 class="card-title">Honda Click 125</h3>
              <p class="card-sub">Per Day: 400฿</p>
              <p class="card-sub">Per Week: 2200฿</p>
              <p class="card-sub">Per Month: 4400฿</p>
            </div>
          </div>

          <!-- Yamaha Aerox 155 -->
          <div class="card">
            <img src="/bikes/Yamaha Aerox 155.jpg" alt="Yamaha Aerox 155" />
            <div class="card-body">
              <h3 class="card-title">Yamaha Aerox 155</h3>
              <p class="card-sub">Per Day: 430฿</p>
              <p class="card-sub">Per Week: 2500฿</p>
              <p class="card-sub">Per Month: 5000฿</p>
            </div>
          </div>

          <!-- Yamaha Nmax 155 -->
          <div class="card">
            <img src="/bikes/Yamaha Nmax 155.jpg" alt="Yamaha Nmax 155" />
            <div class="card-body">
              <h3 class="card-title">Yamaha Nmax 155</h3>
              <p class="card-sub">Per Day: 430฿</p>
              <p class="card-sub">Per Week: 2500฿</p>
              <p class="card-sub">Per Month: 5000฿</p>
            </div>
          </div>

          <!-- Honda ADV 160 -->
          <div class="card">
            <img src="/bikes/Honda ADV 160.webp" alt="Honda ADV 160" />
            <div class="card-body">
              <h3 class="card-title">Honda ADV 160</h3>
              <p class="card-sub">Per Day: 450฿</p>
              <p class="card-sub">Per Week: 2800฿</p>
              <p class="card-sub">Per Month: 5500฿</p>
            </div>
          </div>

          <!-- Honda PCX 160 -->
          <div class="card">
            <img src="/bikes/Honda PCX 160.avif" alt="Honda PCX 160" />
            <div class="card-body">
              <h3 class="card-title">Honda PCX 160</h3>
              <p class="card-sub">Per Day: 450฿</p>
              <p class="card-sub">Per Week: 2800฿</p>
              <p class="card-sub">Per Month: 5500฿</p>
            </div>
          </div>

          <!-- GPX Demon 200GR -->
          <div class="card">
            <img src="/bikes/GPX Demon 200.webp" alt="GPX Demon 200GR" />
            <div class="card-body">
              <h3 class="card-title">GPX Demon 200GR</h3>
              <p class="card-sub">Per Day: 500฿</p>
              <p class="card-sub">Per Week: 4000฿</p>
              <p class="card-sub">Per Month: 8000฿</p>
            </div>
          </div>

          <!-- Honda CRF 250 -->
          <div class="card">
            <img src="/bikes/Honda CRF 250.jpg" alt="Honda CRF 250" />
            <div class="card-body">
              <h3 class="card-title">Honda CRF 250</h3>
              <p class="card-sub">Per Day: 700฿</p>
              <p class="card-sub">Per Week: 4500฿</p>
              <p class="card-sub">Per Month: 10,000฿</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow Section -->
    <section class="workflow container">
      <div class="workflow-card">
        <div class="workflow-number">1</div>
  <!-- <img src="../bikes/GPX Demon 200.webp" alt="Find, Book & Pay" class="workflow-img" /> -->
        <div class="workflow-body">
          <h3>FIND, <span class="highlight">BOOK</span> & PAY</h3>
          <p>
            Using the booking system above, you can quickly and easily reserve
            your bike! Make sure to book in time, as availability is limited per
            location. Want to rent a bike but still have questions? Check out
            our FAQs.
          </p>
        </div>
      </div>

      <div class="workflow-card">
        <div class="workflow-number">2</div>
  <!-- <img src="../bikes/Honda ADV 160.webp" alt="Pick-up & Enjoy" class="workflow-img" /> -->
        <div class="workflow-body">
          <h3>PICK-UP & <span class="highlight">ENJOY</span></h3>
          <p>
            Report to your rental point with your reservation number. Upon
            arrival, you will receive a brief explanation. This way, you can
            fully enjoy this fantastic activity. We wish you an adventurous
            ride!
          </p>
        </div>
      </div>

      <div class="workflow-card">
        <div class="workflow-number">3</div>
  <!-- <img src="../bikes/Honda CRF 250.jpg" alt="Return for the Next Ride" class="workflow-img" /> -->
        <div class="workflow-body">
          <h3>RETURN FOR THE <span class="highlight">NEXT</span> RIDE</h3>
          <p>
            Return the bike to the rental point on time, so others can enjoy the
            ride too. Share your adventure with a Google Review and tag us on
            TikTok, Instagram, or Facebook. We’d love to see it!
          </p>
        </div>
      </div>
    </section>

    <!-- Assistance Section -->
    <section class="assistance container">
      <div class="assistance-content">
        <h2>
          NEED ASSISTANCE WITH YOUR <span class="highlight">BOOKING?</span>
        </h2>
        <p>
          At scootXploreRentals, our rental team is dedicated to providing
          top-notch service! We’re available on weekdays from 9:00 AM to 6:00
          PM. Feel free to get in touch with us anytime.
        </p>

        <ul class="contact-info">
          <li>
            <i class="fa-solid fa-envelope"></i>
            scootxplorerentals@gmail.com
          </li>
          <li>
            <i class="fa-solid fa-phone"></i>
            +66 95 947 4520
          </li>
          <li class="hours">9:00 am – 18:00 pm (Mon – Sun)</li>
        </ul>
      </div>

      <div class="assistance-image">
        <img src="/bikes/Honda PCX 160.avif" alt="Support Bike Ride" />
      </div>
    </section>

    <!-- Happy Clients Section -->
    <section class="clients container">
      <h2>OUR <span class="highlight">HAPPY CLIENTS</span></h2>
      <p class="clients-sub">Smiles from our amazing riders!</p>

      <div class="clients-grid">
        <div class="client-card" v-for="(client, i) in clients" :key="i">
          <img :src="client.img" :alt="'Client ' + (i + 1)" />
        </div>
      </div>
    </section>



    <!-- <router-view /> -->
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      menuOpen: false,
      active: null,
      selectedCity: "",
      searchQuery: "",

      clients: [
        { img: "/happy-clients/client1.jpeg" },
        { img: "/happy-clients/client2.jpeg" },
        { img: "/happy-clients/client3.jpeg" },
        { img: "/happy-clients/client4.jpeg" },
        { img: "/happy-clients/client5.jpeg" },
        { img: "/happy-clients/client6.jpeg" },
      ],

      faqs: [
        {
          q: "WHAT IS ScootXplore?",
          a: "ScootXplore is a bike rental platform. Replace this with real answer.",
        },
        {
          q: "CAN I JOIN A GUIDED BIKE TOUR?",
          a: "Yes — you can join guided tours... replace with real details.",
        },
        {
          q: "HOW LONG CAN I RENT A BIKE FOR?",
          a: "From 1 hour to several days, depending on the location.",
        },
        {
          q: "WHAT SAFETY FEATURES ARE INCLUDED?",
          a: "Helmet, lock and safety briefing included in most rentals.",
        },
      ],

      cities: [
        {
          city: "Bangkok",
          places:
            "The Grand Palace & Wat Phra Kaew, Wat Pho (Reclining Buddha), Wat Arun (Temple of Dawn), Khao San Road, Chinatown (Yaowarat Road), Chatuchak Weekend Market, Siam Paragon / MBK Center, Asiatique The Riverfront, Jim Thompson House, Lumphini Park, Icon Siam, Bangkok Art & Culture Centre (BACC), Mandarin Oriental Bangkok, The Peninsula Bangkok, Shangri-La Hotel Bangkok, Banyan Tree Bangkok, Anantara Riverside Bangkok Resort, Centara Grand at CentralWorld, SO/ Bangkok Hotel, Chatrium Hotel Riverside, Amari Watergate Bangkok, The Sukosol Hotel ",
          img: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496115.4596391787!2d100.30343366556362!3d13.724380945381618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2s!4v1758742217690!5m2!1sen!2s",
        },
        {
          city: "Samut Prakan",
          places:
            "Ancient City, Erawan Museum, Samut Prakan Crocodile Farm & Zoo, Bang Pu Seaside Resort, Wat Asokaram, Wat Bang Phli Yai Nai, Bang Krachao (Green Lung of Bangkok), Rimkhobfa Urban Resort, Baan Paknam Hotel, Dwella Suvarnabhumi, Siam Mandarina Hotel, The Journey Hotel Bangna, Miracle Suvarnabhumi Airport Hotel",
          img: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992773.4425407642!2d99.5210884768!3d13.59551337411777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a18f2f065f59%3A0x4195afd5edd8fc0a!2sSamut%20Prakan%2C%20Thailand!5e0!3m2!1sen!2sus!4v1758747654739!5m2!1sen!2sus",
        },
      ],
    };
  },

  methods: {
    toggle(i) {
      this.active = this.active === i ? null : i;
    },
  },
  computed: {
    filteredcities() {
      return this.cities.filter((c) => {
        const matchesCity = this.selectedCity
          ? c.city === this.selectedCity
          : true;
        const matchesSearch = this.searchQuery
          ? c.places.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            c.city.toLowerCase().includes(this.searchQuery.toLowerCase())
          : true;
        return matchesCity && matchesSearch;
      });
    },
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  padding: 6px 0;
  cursor: pointer;
}
</style>
