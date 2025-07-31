<template>
  <div class="home-view">
    <header class="header">
      <div class="header-content">
        <h1 class="logo">RetailPulse</h1>
        <nav class="auth-links">
          <router-link to="/login" class="auth-link">Вход</router-link>
          <router-link to="/register" class="auth-link auth-link--primary">Регистрация</router-link>
          <router-link to="/dashboard" class="dashboard">Следующее окно</router-link>
        </nav>
      </div>
      <div class="header-tagline">
        <h2>Увеличьте прибыль вашего магазина на 30% за 3 месяца</h2>
        <p>Автоматизация розничных продаж, управление запасами и лояльностью клиентов в одной системе</p>
      </div>
    </header>

    <main class="main-content">
      <!-- Блок с цифрами -->
      <section class="stats-section">
        <div class="stat-card">
          <div class="stat-value">+27%</div>
          <div class="stat-label">Средний чек</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">+40%</div>
          <div class="stat-label">Повторные покупки</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">-15%</div>
          <div class="stat-label">Логистические расходы</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">3000+</div>
          <div class="stat-label">Довольных клиентов</div>
        </div>
      </section>

      <!-- Блок фич -->
      <section class="features">
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Аналитика продаж</h3>
          <p>Отслеживайте динамику продаж в реальном времени, выявляйте топ-товары и мертвый груз</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📦</div>
          <h3>Управление запасами</h3>
          <p>Автоматический расчет оптимальных остатков и заказов поставщикам</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h3>Лояльность клиентов</h3>
          <p>Персональные предложения, бонусные программы и автоматические напоминания</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>Мобильный доступ</h3>
          <p>Управление бизнесом с телефона кассира или планшета управляющего</p>
        </div>
      </section>

      <!-- Социальное доказательство -->
      <section class="trusted-section">
        <h2 class="section-title">Нам доверяют лидеры рынка</h2>
        <div class="trusted-logos">
          <div class="logo-item">🛒 Сеть "Продмаркет" (35 магазинов)</div>
          <div class="logo-item">👔 Бутик "Elegance"</div>
          <div class="logo-item">💊 Аптека "Здоровье+"</div>
          <div class="logo-item">📱 ГаджетЛэнд</div>
          <div class="logo-item">👟 СпортХаб</div>
        </div>
        <div class="testimonial">
          <p class="quote">«После внедрения RetailPulse средний чек вырос на 27%, а повторные покупки - на 40%. Система окупилась за первый месяц!»</p>
          <p class="author">— Ольга Смирнова, владелец сети «Продмаркет»</p>
        </div>
      </section>

      <!-- Карусель преимуществ -->
      <section class="advantages-section">
        <h2 class="section-title">Почему выбирают RetailPulse</h2>
        
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
          <button class="control-btn prev" @click="prevSlide" aria-label="Предыдущий слайд">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button class="control-btn next" @click="nextSlide" aria-label="Следующий слайд">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </section>

      <!-- Демо-видео -->
      <section class="demo-section">
        <div class="demo-content">
          <div class="demo-text">
            <h2>Увидите как RetailPulse увеличит вашу прибыль</h2>
            <p>Посмотрите 90-секундный обзор ключевых возможностей:</p>
            <ul class="demo-features">
              <li><span class="check-icon">✓</span> Автоматизация заказов поставщикам</li>
              <li><span class="check-icon">✓</span> Персональные предложения клиентам</li>
              <li><span class="check-icon">✓</span> Контроль кассовой дисциплины</li>
              <li><span class="check-icon">✓</span> Мобильное управление бизнесом</li>
            </ul>
            <button class="demo-button" @click="showVideo = true">
              ▶ Смотреть демо-ролик
            </button>
          </div>
          <div class="demo-video" @click="showVideo = true">
            <div class="video-placeholder">
              <div class="play-icon">▶</div>
              <div class="video-label">Видеодемонстрация RetailPulse</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Сравнение тарифов -->
      <section class="pricing-section">
        <h2 class="section-title">Выберите оптимальный тариф</h2>
        <div class="pricing-cards">
          <div class="pricing-card">
            <h3>Старт</h3>
            <div class="price">Бесплатно</div>
            <ul class="features-list">
              <li>До 100 транзакций/месяц</li>
              <li>Базовая аналитика</li>
              <li>1 пользователь</li>
              <li>Email поддержка</li>
            </ul>
            <router-link to="/register" class="pricing-button">Начать</router-link>
          </div>
          
          <div class="pricing-card popular">
            <div class="popular-badge">САМЫЙ ВЫГОДНЫЙ</div>
            <h3>Профи</h3>
            <div class="price">4 900₽ <span>/месяц</span></div>
            <ul class="features-list">
              <li>Безлимитные транзакции</li>
              <li>Расширенная аналитика</li>
              <li>До 5 пользователей</li>
              <li>Мобильное приложение</li>
              <li>Приоритетная поддержка</li>
            </ul>
            <router-link to="/register" class="pricing-button">Попробовать 14 дней</router-link>
          </div>
          
          <div class="pricing-card">
            <h3>Бизнес</h3>
            <div class="price">12 900₽ <span>/месяц</span></div>
            <ul class="features-list">
              <li>Безлимитные транзакции</li>
              <li>Персональная аналитика</li>
              <li>Неограниченные пользователи</li>
              <li>Интеграции с 1С и эквайрингом</li>
              <li>Персональный менеджер</li>
            </ul>
            <router-link to="/register" class="pricing-button">Заказать демо</router-link>
          </div>
        </div>
      </section>

      <!-- Финальный CTA -->
      <section class="cta-section">
        <h2>Начните увеличивать прибыль уже сегодня!</h2>
        <p class="cta-subtitle">Подключитесь за 5 минут без установки и обучения</p>
        <div class="cta-buttons">
          <router-link to="/register" class="cta-button">Попробовать бесплатно</router-link>
          <button class="cta-button secondary" @click="showDemoForm = true">Заказать демонстрацию</button>
        </div>
        <div class="guarantee">
          <div class="guarantee-icon">✓</div>
          <div class="guarantee-text">Гарантия возврата денег в течение 30 дней</div>
        </div>
      </section>
    </main>

    <!-- Модальное окно для видео -->
    <div v-if="showVideo" class="video-modal" @click.self="showVideo = false">
      <div class="modal-content">
        <button class="close-btn" @click="showVideo = false">×</button>
        <div class="video-container">
          <div class="video-placeholder-large">
            <p>Видеодемонстрация RetailPulse CRM</p>
            <p>В реальной реализации здесь будет embed-видео с YouTube/Vimeo</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Форма заказа демо -->
    <div v-if="showDemoForm" class="demo-modal" @click.self="showDemoForm = false">
      <div class="modal-content">
        <button class="close-btn" @click="showDemoForm = false">×</button>
        <h2>Закажите персональную демонстрацию</h2>
        <p>Наш специалист покажет как RetailPulse решит именно ваши задачи</p>
        
        <form class="demo-form">
          <div class="form-group">
            <label>Ваше имя</label>
            <input type="text" placeholder="Иван Иванов">
          </div>
          <div class="form-group">
            <label>Телефон</label>
            <input type="tel" placeholder="+7 (999) 999-99-99">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="ivan@company.ru">
          </div>
          <div class="form-group">
            <label>Ваш бизнес</label>
            <select>
              <option>Продуктовый магазин</option>
              <option>Одежда и обувь</option>
              <option>Электроника</option>
              <option>Аптека</option>
              <option>Другое</option>
            </select>
          </div>
          <button type="submit" class="submit-btn">Заказать демонстрацию</button>
        </form>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>RetailPulse</h4>
          <p>© 2025 RetailPulse. Все права защищены.</p>
        </div>
        
        <div class="footer-section">
          <h4>Ресурсы</h4>
          <ul>
            <li><router-link to="/docs">Документация</router-link></li>
            <li><router-link to="/blog">Блог для ритейла</router-link></li>
            <li><router-link to="/support">Поддержка 24/7</router-link></li>
          </ul>
        </div>
        
        <address class="footer-section">
          <h4>Контакты</h4>
          <p>Email: support@retailpulse.ru</p>
          <p>Телефон: +7 (800) 123-45-67</p>
          <p>Москва, ул. Розничная, 15</p>
        </address>
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
      showVideo: false,
      showDemoForm: false,
      advantages: [
        {
          icon: '🎯',
          title: 'Персональные предложения',
          description: 'Автоматическое создание индивидуальных скидок на основе истории покупок'
        },
        {
          icon: '📈',
          title: 'Прогнозирование спроса',
          description: 'Точный расчет оптимальных остатков для предотвращения затоваривания'
        },
        {
          icon: '⏱️',
          title: 'Экономия времени',
          description: 'Сокращение ручных операций на 70% за счет автоматизации'
        },
        {
          icon: '📱',
          title: 'Мобильный доступ',
          description: 'Управление магазином с телефона в любой точке мира'
        },
        {
          icon: '🔒',
          title: 'Контроль касс',
          description: 'Мониторинг кассовых операций и предотвращение недостач'
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
    window.removeEventListener('resize', this.calculateSlidesPerView);
    this.stopAutoSlide();
  },
  methods: {
    calculateSlidesPerView() {
      const width = window.innerWidth;
      if (width >= 992) {
        this.slidesPerView = 3;
      } else if (width >= 768) {
        this.slidesPerView = 2;
      } else {
        this.slidesPerView = 1;
      }
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
      this.stopAutoSlide();
      this.currentIndex = index;
      this.updatePosition();
      this.startAutoSlide();
    },
    nextSlide() {
      if (this.currentIndex < this.advantages.length - this.slidesPerView) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.updatePosition();
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.advantages.length - this.slidesPerView;
      }
      this.updatePosition();
    },
    updatePosition() {
      this.position = -(this.currentIndex * (100 / this.slidesPerView));
    }
  }
}
</script>

<style scoped>
/* Глобальные стили */
.home-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f8f9fa;
  line-height: 1.6;
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
  color: white;
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
  font-weight: 500;
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
  margin: 4rem auto 3rem;
  padding: 0 2rem;
  text-align: center;
}

.header-tagline h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.3;
}

.header-tagline p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
}

/* Статистика */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a2a6c;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: #555;
}

/* Features */
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
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: #2c3e50;
}

.feature-card p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

/* Trusted Section */
.trusted-section {
  background: linear-gradient(to right, #f8f9fa, #ffffff);
  padding: 4rem 2rem;
  margin: 5rem 0;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
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
  font-weight: 700;
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

.trusted-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 3rem auto;
  max-width: 1000px;
}

.logo-item {
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.logo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
}

.testimonial {
  max-width: 700px;
  margin: 3rem auto 0;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #3498db;
}

.quote {
  font-size: 1.2rem;
  font-style: italic;
  color: #2c3e50;
  line-height: 1.6;
}

.author {
  font-weight: 600;
  color: #3498db;
  margin-top: 1rem;
  text-align: right;
}

/* Advantages Carousel */
.advantages-section {
  position: relative;
  padding: 4rem 0;
  margin: 5rem 0;
  overflow: hidden;
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
  gap: 30px;
  padding: 0 15px;
}

.advantage-card {
  flex: 0 0 calc(100% - 30px);
  min-width: calc(100% - 30px);
  padding: 2.5rem 1.5rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: relative;
  z-index: 1;
  opacity: 0.7;
  transform: scale(0.95);
  transition: all 0.6s ease;
}

.advantage-card.active {
  opacity: 1;
  transform: scale(1);
  z-index: 2;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.advantage-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  transition: transform 0.5s ease;
}

.advantage-card.active .advantage-icon {
  animation: pulse 2s infinite;
}

.advantage-title {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.2rem;
  position: relative;
  display: inline-block;
  font-weight: 600;
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
  color: #555;
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

/* Demo Section */
.demo-section {
  background: linear-gradient(135deg, #1a2a6c, #2a5298);
  color: white;
  border-radius: 16px;
  overflow: hidden;
  margin: 6rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.demo-content {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
}

.demo-text {
  flex: 1;
  padding-right: 3rem;
}

.demo-text h2 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}

.demo-text p {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.demo-features {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.demo-features li {
  padding: 0.8rem 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.check-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #4CAF50;
  color: white;
  border-radius: 50%;
  margin-right: 10px;
}

.demo-button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
}

.demo-button:hover {
  background: #45a049;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.demo-video {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-placeholder {
  width: 100%;
  height: 300px;
  background: linear-gradient(45deg, #2c3e50, #4a6491);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.video-placeholder::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="rgba(255,255,255,0.2)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>');
  background-size: 30%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.3;
}

.play-icon {
  font-size: 5rem;
  color: rgba(255, 255, 255, 0.8);
  z-index: 2;
  transition: all 0.3s ease;
}

.video-placeholder:hover .play-icon {
  color: white;
  transform: scale(1.1);
}

.video-label {
  margin-top: 1rem;
  font-size: 1.1rem;
  opacity: 0.8;
  z-index: 2;
}

/* Pricing Section */
.pricing-section {
  padding: 4rem 0;
  margin: 5rem 0;
  text-align: center;
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
}

.pricing-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.pricing-card.popular {
  border: 2px solid #3498db;
  transform: scale(1.05);
  z-index: 1;
}

.pricing-card.popular:hover {
  transform: scale(1.05) translateY(-10px);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #3498db;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.pricing-card h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a2a6c;
  margin-bottom: 1.5rem;
}

.price span {
  font-size: 1rem;
  font-weight: normal;
  color: #777;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
}

.features-list li {
  padding: 0.7rem 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}

.features-list li:before {
  content: '✓';
  color: #4CAF50;
  margin-right: 10px;
  font-weight: bold;
}

.pricing-button {
  display: block;
  background: #3498db;
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
}

.pricing-button:hover {
  background: #2980b9;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* CTA Section */
.cta-section {
  text-align: center;
  margin: 6rem 0 4rem;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a2a6c, #2a5298);
  border-radius: 16px;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.cta-section h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 1rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid white;
}

.cta-button:hover {
  background-color: #45a049;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.cta-button.secondary:hover {
  background: rgba(255,255,255,0.1);
}

.guarantee {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 10px;
  font-size: 1.1rem;
}

.guarantee-icon {
  background: #4CAF50;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* Video Modal */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.demo-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  padding: 2.5rem;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  color: #777;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s;
}

.close-btn:hover {
  color: #333;
}

.modal-content h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.modal-content p {
  text-align: center;
  color: #777;
  margin-bottom: 2rem;
}

.demo-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
}

.form-group input, .form-group select {
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s;
}

.form-group input:focus, .form-group select:focus {
  border-color: #3498db;
  outline: none;
}

.submit-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.video-container {
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.video-placeholder-large {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

/* Footer Styles */
.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 3rem 0 0;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-section {
  margin-bottom: 2rem;
}

.footer-section h4 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #3498db;
  position: relative;
  padding-bottom: 0.5rem;
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
  margin: 0.8rem 0;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
  display: inline-block;
}

.footer-section a:hover {
  color: #3498db;
  transform: translateX(5px);
}

.footer-bottom {
  background-color: #1a252f;
  padding: 1.5rem 0;
  text-align: center;
  margin-top: 3rem;
}

.footer-bottom p {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.8;
}

/* Анимации */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Адаптивность */
@media (min-width: 768px) {
  .advantage-card {
    flex: 0 0 calc(50% - 30px);
    min-width: calc(50% - 30px);
  }
}

@media (min-width: 992px) {
  .advantage-card {
    flex: 0 0 calc(33.333% - 30px);
    min-width: calc(33.333% - 30px);
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
  .header-content {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .header-tagline {
    margin: 2rem auto;
  }
  
  .header-tagline h2 {
    font-size: 2rem;
  }
  
  .advantages-section {
    padding: 3rem 0;
    margin: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .carousel-controls {
    display: none;
  }
  
  .cta-section {
    padding: 3rem 1.5rem;
  }
  
  .cta-section h2 {
    font-size: 1.8rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .demo-content {
    flex-direction: column;
  }

  .pricing-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .features {
    grid-template-columns: 1fr;
  }
  
  .header-tagline h2 {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .advantage-title {
    font-size: 1.5rem;
  }
  
  .advantage-description {
    font-size: 1rem;
  }
  
  .carousel-track {
    gap: 15px;
    padding: 0 10px;
  }
  
  .advantage-card {
    flex: 0 0 calc(100% - 20px);
    min-width: calc(100% - 20px);
    padding: 1.5rem;
  }
}
</style>