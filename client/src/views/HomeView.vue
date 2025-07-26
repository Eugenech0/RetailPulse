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
              :class="{ 
                active: currentIndex === index,
                prev: currentIndex - 1 === index,
                next: currentIndex + 1 === index
              }"
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
  data() {
    return {
      currentIndex: 0,
      position: 0,
      interval: null,
      slidesPerView: 1,
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
    this.calculateSlidesPerView();
    window.addEventListener('resize', this.calculateSlidesPerView);
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
    window.removeEventListener('resize', this.calculateSlidesPerView);
  },
  methods: {
    calculateSlidesPerView() {
      const width = window.innerWidth;
      if (width >= 1400) this.slidesPerView = 3;
      else if (width >= 900) this.slidesPerView = 2;
      else this.slidesPerView = 1;
      
      // Пересчет позиции при изменении размера экрана
      this.goToSlide(this.currentIndex);
    },
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
      // Ограничение индекса
      if (index < 0) index = 0;
      if (index > this.advantages.length - this.slidesPerView) {
        index = this.advantages.length - this.slidesPerView;
      }
      
      this.currentIndex = index;
      // Новый расчет позиции с учетом количества видимых слайдов
      this.position = -index * (100 / this.slidesPerView);
    },
    nextSlide() {
      let nextIndex = this.currentIndex + 1;
      
      // Если достигли конца - начинаем сначала
      if (nextIndex > this.advantages.length - this.slidesPerView) {
        nextIndex = 0;
      }
      
      this.goToSlide(nextIndex);
    },
    prevSlide() {
      let prevIndex = this.currentIndex - 1;
      
      // Если достигли начала - переходим в конец
      if (prevIndex < 0) {
        prevIndex = this.advantages.length - this.slidesPerView;
      }
      
      this.goToSlide(prevIndex);
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
  background-color: #f8fafc;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, #1a2a6c, #2a5298);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
  background: linear-gradient(90deg, #ffffff, #a0d2ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.auth-links {
  display: flex;
  gap: 1.5rem;
}

.auth-link {
  color: white;
  text-decoration: none;
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 1.1rem;
}

.auth-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.auth-link--primary {
  background-color: #4CAF50;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.auth-link--primary:hover {
  background-color: #45a049;
  transform: translateY(-2px) scale(1.05);
}

.header-tagline {
  max-width: 1400px;
  margin: 4rem auto 3rem;
  padding: 0 2rem;
  text-align: center;
}

.header-tagline h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.header-tagline p {
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 2rem;
  width: 100%;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin: 4rem 0;
}

.feature-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  padding: 2.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  border: 1px solid #f0f4f8;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.12);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));
}

.feature-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.feature-card h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.feature-card p {
  font-size: 1.2rem;
  color: #5a6d80;
  line-height: 1.7;
  margin-bottom: 0;
}

/* Advantages Section */
.advantages-section {
  position: relative;
  padding: 5rem 2rem;
  background: white;
  border-radius: 25px;
  margin: 6rem auto;
  max-width: 1400px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid #edf2f7;
}

.section-title {
  text-align: center;
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 4rem;
  position: relative;
  font-weight: 700;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 5px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 3px;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 2rem 0;
  margin: 0 auto;
}

.carousel-track {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000);
  padding: 0 10%;
}

.advantage-card {
  flex: 0 0 33.333%;
  min-width: 33.333%;
  padding: 3rem;
  background: white;
  border-radius: 25px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.6s ease;
  position: relative;
  z-index: 1;
  margin: 0 15px;
  border: 1px solid #f0f5ff;
  opacity: 0.8;
  transform: scale(0.95);
}

.advantage-card.prev,
.advantage-card.next {
  opacity: 0.9;
  transform: scale(0.98);
}

.advantage-card.active {
  transform: scale(1.05);
  opacity: 1;
  z-index: 3;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  border-color: #e1eeff;
}

.advantage-card.active::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 5px 5px 0 0;
}

.advantage-icon {
  font-size: 5rem;
  margin-bottom: 2rem;
  transition: all 0.5s ease;
  display: inline-block;
}

.advantage-card.active .advantage-icon {
  transform: scale(1.15);
  animation: float 3s ease-in-out infinite;
}

.advantage-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  font-weight: 600;
}

.advantage-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: #3498db;
  border-radius: 2px;
  transition: width 0.5s ease;
}

.advantage-card.active .advantage-title::after {
  width: 120px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
}

.advantage-description {
  font-size: 1.3rem;
  color: #5a6d80;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  transition: all 0.5s ease;
}

.advantage-card.active .advantage-description {
  color: #2c3e50;
  font-size: 1.3rem;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 1rem;
}

.carousel-indicators button {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #cbd5e0;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicators button.active {
  background: #3498db;
  transform: scale(1.4);
  box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.2);
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
  z-index: 10;
}

.control-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  border: none;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 11;
}

.control-btn:hover {
  background: #3498db;
  transform: scale(1.1);
}

.control-btn:hover svg {
  fill: white;
}

.control-btn svg {
  width: 28px;
  height: 28px;
  fill: #3498db;
  transition: fill 0.3s ease;
}

/* CTA Section */
.cta-section {
  text-align: center;
  margin: 5rem 0;
  padding: 4rem;
  background: linear-gradient(135deg, #2a5298, #1a2a6c);
  border-radius: 20px;
  color: white;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.cta-section h2 {
  font-size: 2.8rem;
  margin-bottom: 2rem;
  font-weight: 700;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.3;
}

.cta-button {
  display: inline-block;
  background: #4CAF50;
  color: white;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-button:hover {
  background: #45a049;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}

/* Footer Styles */
.footer {
  background: linear-gradient(to bottom, #2c3e50, #1a252f);
  color: #ecf0f1;
  padding: 4rem 0 0;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-section {
  margin-bottom: 2rem;
}

.footer-section h4 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #3498db;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: #3498db;
  border-radius: 2px;
}

.footer-section p {
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #bdc3c7;
  line-height: 1.6;
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  display: block;
  margin: 1rem 0;
  transition: color 0.3s;
  font-size: 1.2rem;
}

.footer-section a:hover {
  color: #3498db;
  transform: translateX(5px);
}

.footer-bottom {
  background-color: #0d1520;
  padding: 1.5rem 0;
  text-align: center;
  margin-top: 3rem;
}

.footer-bottom p {
  margin: 0;
  font-size: 1.1rem;
  color: #7f8c8d;
}

/* Анимации */
@keyframes float {
  0% { transform: translateY(0) scale(1.15); }
  50% { transform: translateY(-15px) scale(1.18); }
  100% { transform: translateY(0) scale(1.15); }
}

@keyframes pulse {
  0% { transform: scale(1.15); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1.15); }
}

/* Адаптивность */
@media (max-width: 1200px) {
  .carousel-track {
    padding: 0 5%;
  }
  
  .advantage-card {
    flex: 0 0 50%;
    min-width: 50%;
    padding: 2.5rem;
  }
}

@media (max-width: 900px) {
  .header-content {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .header-tagline h2 {
    font-size: 2.5rem;
  }
  
  .header-tagline p {
    font-size: 1.3rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .advantage-card {
    flex: 0 0 100%;
    min-width: 100%;
    margin: 0 30px;
  }
  
  .cta-section h2 {
    font-size: 2.3rem;
  }
}

@media (max-width: 768px) {
  .header-tagline h2 {
    font-size: 2.2rem;
  }
  
  .header-tagline p {
    font-size: 1.1rem;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .carousel-controls {
    padding: 0;
  }
  
  .control-btn {
    width: 50px;
    height: 50px;
  }
  
  .cta-section {
    padding: 3rem 2rem;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 0 1rem;
  }
  
  .logo {
    font-size: 2rem;
  }
  
  .auth-links {
    gap: 0.8rem;
  }
  
  .auth-link {
    padding: 0.6rem 1rem;
    font-size: 1rem;
  }
  
  .header-tagline {
    padding: 0 1rem;
  }
  
  .header-tagline h2 {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .advantage-title {
    font-size: 1.6rem;
  }
  
  .advantage-description {
    font-size: 1.1rem;
  }
  
  .cta-section h2 {
    font-size: 1.7rem;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
}
</style>