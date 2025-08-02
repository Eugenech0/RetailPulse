<template>
  <div class="dashboard-view">
    <header class="dashboard-header">
      <div class="header-content">
        <h1 class="logo">RetailPulse</h1>
        <nav class="nav-links">
          <router-link to="/dashboard" class="nav-link active">Главная</router-link>
          <router-link to="/analytics" class="nav-link">Аналитика</router-link>
          <router-link to="/products" class="nav-link">Товары</router-link>
          <router-link to="/customers" class="nav-link">Клиенты</router-link>
        </nav>
        <div class="user-menu">
          <div class="user-info">
            <span class="user-name">Demo User</span>
            <span class="user-role">Администратор</span>
          </div>
          <button class="logout-btn" @click="logout">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main class="dashboard-main">
      <div class="welcome-banner">
        <h2>Добро пожаловать, Demo User!</h2>
        <p>Последний вход: сегодня в 14:30</p>
      </div>

      <section class="dashboard-stats">
        <div class="stat-card">
          <div class="stat-icon sales">💰</div>
          <div class="stat-info">
            <h3>Продажи</h3>
            <p class="stat-value">124,560 ₽</p>
            <p class="stat-change positive">+12% за неделю</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon customers">👥</div>
          <div class="stat-info">
            <h3>Клиенты</h3>
            <p class="stat-value">1,248</p>
            <p class="stat-change positive">+5% за месяц</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon inventory">📦</div>
          <div class="stat-info">
            <h3>Запасы</h3>
            <p class="stat-value">84%</p>
            <p class="stat-change negative">-3% за неделю</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon conversion">📈</div>
          <div class="stat-info">
            <h3>Конверсия</h3>
            <p class="stat-value">24.8%</p>
            <p class="stat-change positive">+2.1%</p>
          </div>
        </div>
      </section>

      <section class="dashboard-content">
        <div class="recent-activity">
          <h3>Последние операции</h3>
          <div class="activity-list">
            <div class="activity-item">
              <div class="activity-icon">🛒</div>
              <div class="activity-details">
                <p>Новая продажа #ORD-1289</p>
                <small>Сегодня в 14:28 • 12,450 ₽</small>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">📥</div>
              <div class="activity-details">
                <p>Поступление товара #INV-0451</p>
                <small>Сегодня в 11:15 • 24 позиции</small>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">👤</div>
              <div class="activity-details">
                <p>Новый клиент зарегистрирован</p>
                <small>Вчера в 18:40 • Иван Петров</small>
              </div>
            </div>
          </div>
        </div>
        
        <div class="quick-actions">
          <h3>Быстрые действия</h3>
          <div class="actions-grid">
            <button class="action-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Новая продажа
            </button>
            <button class="action-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Добавить товар
            </button>
            <button class="action-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Новый клиент
            </button>
            <button class="action-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Создать отчет
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.dashboard-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.dashboard-header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2a5298;
  margin: 0;
}

.nav-links {
  display: flex;
  gap: 2rem;
  margin-left: 3rem;
}

.nav-link {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s;
}

.nav-link.active {
  color: #2a5298;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #2a5298;
  border-radius: 2px;
}

.nav-link:hover {
  color: #2a5298;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-name {
  font-weight: 600;
  color: #1f2937;
}

.user-role {
  font-size: 0.85rem;
  color: #6b7280;
}

.logout-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  color: #6b7280;
}

.logout-btn:hover {
  background: #f3f4f6;
  color: #ef4444;
}

.dashboard-main {
  flex: 1;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  width: 100%;
}

.welcome-banner {
  background: linear-gradient(135deg, #2a5298, #1a2a6c);
  color: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.welcome-banner h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.8rem;
}

.welcome-banner p {
  margin: 0;
  opacity: 0.9;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  padding: 1.5rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
}

.stat-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon.sales {
  background: rgba(79, 209, 197, 0.15);
  color: #0d9488;
}

.stat-icon.customers {
  background: rgba(129, 140, 248, 0.15);
  color: #4f46e5;
}

.stat-icon.inventory {
  background: rgba(252, 165, 165, 0.15);
  color: #ef4444;
}

.stat-icon.conversion {
  background: rgba(167, 243, 208, 0.15);
  color: #10b981;
}

.stat-info h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.1rem;
  color: #4b5563;
}

.stat-value {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.stat-change {
  margin: 0.3rem 0 0 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.stat-change.positive {
  color: #10b981;
}

.stat-change.negative {
  color: #ef4444;
}

.dashboard-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.recent-activity, .quick-actions {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.recent-activity h3, .quick-actions h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #1f2937;
  font-size: 1.3rem;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.activity-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid #f3f4f6;
}

.activity-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.activity-icon {
  font-size: 1.5rem;
  margin-top: 0.2rem;
}

.activity-details p {
  margin: 0 0 0.3rem 0;
  font-weight: 500;
  color: #1f2937;
}

.activity-details small {
  color: #6b7280;
  font-size: 0.9rem;
}

.actions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.action-btn {
  background: #f9fafb;
  border: 1px dashed #d1d5db;
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: #4b5563;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
}

.action-btn:hover {
  background: #f3f4f6;
  border-color: #9ca3af;
  transform: translateY(-3px);
}

.action-btn svg {
  color: #4f46e5;
}

@media (max-width: 992px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }
  
  .nav-links {
    gap: 1.2rem;
    margin-left: 1.5rem;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .nav-links {
    margin: 1rem 0 0 0;
    width: 100%;
    justify-content: center;
  }
  
  .user-menu {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>