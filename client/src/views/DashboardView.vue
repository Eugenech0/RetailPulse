<template>
  <div class="dashboard-view">
    <div class="welcome-banner">
      <h2>Добро пожаловать, {{ userName }}!</h2>
      <p>Последний вход: {{ lastLogin }}</p>
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
        <div class="section-header">
          <h3>Последние операции</h3>
          <router-link to="/orders" class="view-all">Все операции</router-link>
        </div>
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
          <button class="action-btn" @click="$router.push('/orders/new')">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            Новая продажа
          </button>
          <button class="action-btn" @click="$router.push('/products/new')">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            Добавить товар
          </button>
          <button class="action-btn" @click="$router.push('/customers/new')">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            Новый клиент
          </button>
          <button class="action-btn" @click="$router.push('/analytics')">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            Создать отчет
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      userName: 'Администратор',
      lastLogin: 'сегодня в 14:30'
    }
  }
}
</script>

<style scoped>
.dashboard-view {
  padding-bottom: 2rem;
}

.welcome-banner {
  background: linear-gradient(135deg, #2a5298, #1a2a6c);
  color: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.welcome-banner h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.8rem;
}

.welcome-banner p {
  margin: 0;
  opacity: 0.9;
  font-size: 1.1rem;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
}

.stat-icon {
  font-size: 2.5rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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

.stat-info {
  flex-grow: 1;
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
  display: flex;
  align-items: center;
  gap: 0.3rem;
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

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-header h3 {
  margin: 0;
  color: #1f2937;
  font-size: 1.3rem;
}

.view-all {
  color: #4f46e5;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
}

.view-all:hover {
  text-decoration: underline;
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
  min-width: 30px;
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
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 120px;
  text-align: center;
}

.action-btn:hover {
  background: #f3f4f6;
  border-color: #9ca3af;
  transform: translateY(-3px);
  border-style: solid;
}

.action-btn svg {
  color: #4f46e5;
  font-size: 1.5rem;
}

@media (max-width: 1200px) {
  .dashboard-content {
    gap: 1.5rem;
  }
}

@media (max-width: 992px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }
  
  .welcome-banner {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .dashboard-stats {
    grid-template-columns: 1fr 1fr;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .dashboard-stats {
    grid-template-columns: 1fr;
  }
  
  .stat-card {
    padding: 1.2rem;
  }
  
  .stat-icon {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
  }
}
</style>