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
  name: 'HomeView'
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