<template>
  <div class="analytics-view">
    <div class="header">
      <h1>Аналитика</h1>
      <router-link to="/dashboard" class="back-btn">
        ← Назад к дашборду
      </router-link>
    </div>

    <div class="content">
      <div class="section">
        <h2>Продажи</h2>
        <div class="placeholder-chart">График продаж будет здесь</div>
      </div>
      
      <div class="section">
        <h2>Топ товары</h2>
        <div class="placeholder-chart">Диаграмма популярных товаров будет здесь</div>
      </div>
      
      <div class="section">
        <h2>География заказов</h2>
        <div class="placeholder-chart">Карта заказов будет здесь</div>
      </div>
      
      <div class="metrics-grid">
        <div class="metric">
          <h3>Конверсия</h3>
          <div class="placeholder-value">24%</div>
        </div>
        <div class="metric">
          <h3>Средний чек</h3>
          <div class="placeholder-value">₽2,450</div>
        </div>
        <div class="metric">
          <h3>Повторные покупки</h3>
          <div class="placeholder-value">32%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.analytics-view {
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.back-btn {
  background: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.section {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 1.5rem;
}

.placeholder-chart {
  height: 300px;
  background: #f9fafb;
  border: 2px dashed #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 1.2rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.metric {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  text-align: center;
}

.placeholder-value {
  font-size: 2rem;
  font-weight: bold;
  color: #3b82f6;
  margin-top: 1rem;
}
</style>