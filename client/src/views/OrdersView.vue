<template>
  <div class="orders">
    <h1>Управление заказами</h1>
    
    <div class="filters">
      <select v-model="statusFilter">
        <option value="">Все статусы</option>
        <option v-for="status in orderStatuses" :key="status.value" :value="status.value">
          {{ status.text }}
        </option>
      </select>
      <input type="date" v-model="startDate">
      <input type="date" v-model="endDate">
      <button @click="applyFilters">Применить</button>
    </div>
    
    <table class="order-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Клиент</th>
          <th>Дата</th>
          <th>Сумма</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in filteredOrders" :key="order.id">
          <td>#{{ order.id }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.amount }} ₽</td>
          <td>
            <select v-model="order.status" @change="updateStatus(order)">
              <option v-for="status in orderStatuses" :key="status.value" :value="status.value">
                {{ status.text }}
              </option>
            </select>
          </td>
          <td>
            <button @click="viewOrder(order)">Просмотр</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <button @click="createNewOrder" class="btn-new-order">+ Новый заказ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusFilter: '',
      startDate: '',
      endDate: '',
      orderStatuses: [
        {value: 'new', text: 'Новый'},
        {value: 'processing', text: 'В обработке'},
        {value: 'shipped', text: 'Отправлен'},
        {value: 'delivered', text: 'Доставлен'},
        {value: 'cancelled', text: 'Отменен'}
      ],
      orders: [
        {id: 1025, customer: "Иван Петров", date: "01.11.2023", amount: 12400, status: "processing"},
        {id: 1024, customer: "Мария Сидорова", date: "30.10.2023", amount: 5600, status: "shipped"},
        {id: 1023, customer: "Алексей Иванов", date: "29.10.2023", amount: 18900, status: "new"}
      ]
    }
  },
  computed: {
    filteredOrders() {
      return this.orders.filter(order => {
        const statusMatch = this.statusFilter ? order.status === this.statusFilter : true;
        // Здесь можно добавить фильтрацию по дате
        return statusMatch;
      });
    }
  },
  methods: {
    applyFilters() {
      console.log("Фильтры применены");
    },
    updateStatus(order) {
      console.log(`Статус заказа #${order.id} изменен на: ${order.status}`);
    },
    viewOrder(order) {
      this.$router.push(`/order/${order.id}`);
    },
    createNewOrder() {
      this.$router.push('/orders/new');
    }
  }
}
</script>

<style scoped>
.filters {
  display: flex;
  gap: 15px;
  margin: 20px 0;
}

.filters select, .filters input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
}

.order-table th, .order-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.order-table th {
  background-color: #f8f9fa;
}

.btn-new-order {
  margin-top: 20px;
  padding: 12px 20px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>