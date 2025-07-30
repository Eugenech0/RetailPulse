<template>
  <div class="dashboard">
    <h1>Добро пожаловать, {{ userName }}!</h1>
    
    <div class="metrics">
      <div class="metric-card">
        <div class="metric-value">24</div>
        <div class="metric-label">Новые заказы</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">₽142,560</div>
        <div class="metric-label">Выручка</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">89%</div>
        <div class="metric-label">Конверсия</div>
      </div>
    </div>

    <div class="recent-orders">
      <h2>Последние заказы</h2>
      <div class="order-list">
        <div v-for="order in orders" :key="order.id" class="order-item">
          <div>#{{ order.id }} - {{ order.customer }}</div>
          <div>{{ order.date }} | {{ order.amount }} ₽</div>
          <div :class="'status-' + order.status">{{ statusText(order.status) }}</div>
        </div>
      </div>
    </div>
    
    <div class="quick-actions">
      <button @click="$router.push('/orders/new')" class="action-btn">
        + Создать заказ
      </button>
      <button @click="$router.push('/products')" class="action-btn">
        📦 Управление товарами
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "Администратор",
      orders: [
        {id: 1025, customer: "Иван Петров", date: "01.11.2023", amount: 12400, status: "processing"},
        {id: 1024, customer: "Мария Сидорова", date: "30.10.2023", amount: 5600, status: "shipped"},
        {id: 1023, customer: "Алексей Иванов", date: "29.10.2023", amount: 18900, status: "new"}
      ]
    }
  },
  methods: {
    statusText(status) {
      const statusMap = {
        new: "Новый",
        processing: "В обработке",
        shipped: "Отправлен",
        delivered: "Доставлен"
      };
      return statusMap[status] || status;
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.metrics {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}

.metric-card {
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.metric-value {
  font-size: 24px;
  font-weight: bold;
}

.metric-label {
  color: #777;
}

.order-list {
  margin-top: 15px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #eee;
}

.order-item > div {
  flex: 1;
}

.status-new { color: #3498db; font-weight: bold; }
.status-processing { color: #f39c12; font-weight: bold; }
.status-shipped { color: #2ecc71; font-weight: bold; }

.quick-actions {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

.action-btn {
  flex: 1;
  padding: 15px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}
</style>