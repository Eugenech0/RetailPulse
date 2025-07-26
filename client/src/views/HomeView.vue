<template>
  <div class="home-view">
    <header class="header">
      <div class="header-content">
        <h1 class="logo">RetailPulse</h1>
        <nav class="auth-links">
          <router-link to="/login" class="auth-link">Вход</router-link>
          <router-link to="/register" class="auth-link auth-link--primary">Регистрация</router-link>
        </nav>
      </div>
      <div class="header-tagline">
        <h2>Аналитика для розничной торговли</h2>
        <p>Инструменты для управления продажами, запасами и клиентами</p>
      </div>
    </header>

    <main class="main-content">
      <section class="features">
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Аналитика продаж</h3>
          <p>Отслеживайте динамику продаж в реальном времени</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📦</div>
          <h3>Управление запасами</h3>
          <p>Контролируйте остатки и автоматизируйте заказы</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h3>Клиентская база</h3>
          <p>Анализируйте поведение покупателей и повышайте лояльность</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>Мобильный доступ</h3>
          <p>Управляйте бизнесом с любого устройства</p>
        </div>
      </section>

      <section class="advantages-section">
    <h2 class="section-title">Наши преимущества</h2>
    
    <div class="carousel-container">
      <div class="carousel-track" :style="{ transform: `translateX(${position}%)` }">
        <div 
          v-for="(advantage, index) in advantages" 
          :key="index"
          class="advantage-card"
          :class="{ active: currentIndex === index }"
        >
          <div class="advantage-icon">{{ advantage.icon }}</div>
          <h3 class="advantage-title">{{ advantage.title }}</h3>
          <p class="advantage-description">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
    
    <div class="carousel-indicators">
      <button 
        v-for="(_, index) in advantages" 
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
        aria-label="Перейти к слайду"
      ></button>
    </div>
    
    <div class="carousel-controls">
      <button class="control-btn prev" @click="prevSlide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button class="control-btn next" @click="nextSlide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </div>
  </section>

      <section class="cta-section">
        <h2>Начните использовать RetailPulse уже сегодня!</h2>
        <router-link to="/register" class="cta-button">Попробовать бесплатно</router-link>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>RetailPulse</h4>
          <p>© 2025 RetailPulse. Все права защищены.</p>
        </div>
        
        <div class="footer-section">
          <h4>Контакты</h4>
          <p>Email: support@retailpulse.ru</p>
          <p>Телефон: +7 (800) 123-45-67</p>
        </div>
        
        <div class="footer-section">
          <h4>Ресурсы</h4>
          <ul>
            <li><router-link to="/docs">Документация</router-link></li>
            <li><router-link to="/blog">Блог</router-link></li>
            <li><router-link to="/support">Поддержка</router-link></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>RetailPulse - система для автоматизации розничной торговли</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  
  name: 'AdvantagesSection',
  data() {
    return {
      currentIndex: 0,
      position: 0,
      interval: null,
      advantages: [
        {
          icon: '🎯',
          title: 'Персонализированные предложения',
          description: 'Создавайте уникальные акции для разных сегментов покупателей на основе их поведения и предпочтений.'
        },
        {
          icon: '🔍',
          title: 'Удобный поиск',
          description: 'Мощная система фильтрации товаров по различным параметрам с мгновенными результатами.'
        },
        {
          icon: '⚡',
          title: 'Быстрое оформление',
          description: 'Ускоренный процесс заказа в 3 клика с сохранением истории покупок и персональных настроек.'
        },
        {
          icon: '📱',
          title: 'Мобильный доступ',
          description: 'Полный контроль над бизнесом с любого устройства в любое время.'
        },
        {
          icon: '📊',
          title: 'Детальная аналитика',
          description: 'Подробные отчеты и визуализация ключевых показателей эффективности.'
        }
      ]
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoSlide() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.position = -index * 100;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.advantages.length;
      this.position = -this.currentIndex * 100;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.advantages.length) % this.advantages.length;
      this.position = -this.currentIndex * 100;
    }
  }
}
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, #1a2a6c, #2a5298);
  color: white;
  padding: 1rem 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
}

.auth-links {
  display: flex;
  gap: 1rem;
}

.auth-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.auth-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.auth-link--primary {
  background-color: #4CAF50;
}

.auth-link--primary:hover {
  background-color: #45a049;
}

.header-tagline {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 2rem;
  text-align: center;
}

.header-tagline h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.header-tagline p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  width: 100%;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.advantages-section {
  position: relative;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 20px;
  margin: 5rem auto;
  max-width: 1200px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}


.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 1rem 0;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.advantage-card {
  flex: 0 0 100%;
  min-width: 100%;
  padding: 2.5rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.5s ease;
  transform: scale(0.9);
  opacity: 0.7;
  position: relative;
  z-index: 1;
}

.advantage-card.active {
  transform: scale(1);
  opacity: 1;
  z-index: 2;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.advantage-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  transition: transform 0.5s ease;
}

.advantage-card.active .advantage-icon {
  transform: scale(1.15) rotate(5deg);
  animation: pulse 2s infinite;
}

.advantage-title {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.2rem;
  position: relative;
  display: inline-block;
}

.advantage-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #3498db;
  border-radius: 2px;
  transition: width 0.5s ease;
}

.advantage-card.active .advantage-title::after {
  width: 100px;
}

.advantage-description {
  font-size: 1.1rem;
  color: #7f8c8d;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
  transition: all 0.5s ease;
}

.advantage-card.active .advantage-description {
  color: #34495e;
  font-size: 1.15rem;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.8rem;
}

.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #bdc3c7;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicators button.active {
  background: #3498db;
  transform: scale(1.3);
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  transform: translateY(-50%);
  z-index: 3;
}

.control-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background: #3498db;
  transform: scale(1.1);
}

.control-btn:hover svg {
  fill: white;
}

.control-btn svg {
  width: 24px;
  height: 24px;
  fill: #3498db;
  transition: fill 0.3s ease;
}

/* Анимации */
@keyframes pulse {
  0% { transform: scale(1.15) rotate(5deg); }
  50% { transform: scale(1.25) rotate(0); }
  100% { transform: scale(1.15) rotate(5deg); }
}

/* Адаптивность */
@media (min-width: 768px) {
  .advantage-card {
    flex: 0 0 50%;
    min-width: 50%;
  }
}

@media (min-width: 992px) {
  .advantage-card {
    flex: 0 0 33.333%;
    min-width: 33.333%;
  }
  
  .carousel-controls {
    padding: 0 2rem;
  }

  .control-btn {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 767px) {
  .advantages-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .advantage-card {
    padding: 1.8rem;
  }
  
  .advantage-title {
    font-size: 1.5rem;
  }
  
  .carousel-controls {
    display: none;
  }
}

.cta-section {
  text-align: center;
  margin: 4rem 0;
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.cta-section h2 {
  margin-bottom: 1.5rem;
}

.cta-button {
  display: inline-block;
  background-color: #2a5298;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #1a2a6c;
}

/* Footer Styles */
.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem 0 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-section {
  margin-bottom: 2rem;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #3498db;
}

.footer-section p {
  margin: 0.5rem 0;
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  display: block;
  margin: 0.5rem 0;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #3498db;
}

.footer-bottom {
  background-color: #1a252f;
  padding: 1rem 0;
  text-align: center;
  margin-top: 2rem;
}

.footer-bottom p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>