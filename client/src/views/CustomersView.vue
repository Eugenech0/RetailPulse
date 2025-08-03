<template>
  <div class="customers">
    <h1>Управление клиентами</h1>
    
    <div class="search-bar">
      <input type="text" placeholder="Поиск клиента..." v-model="searchQuery">
      <button click="showAddForm = true" class="btn-add">+ Добавить клиента</button>
    </div>
    
    <table class="customer-table">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Заказов</th>
          <th>Общая сумма</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filteredCustomers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.ordersCount }}</td>
          <td>{{ customer.totalSpent }} ₽</td>
          <td>
            <button click="editCustomer(customer)">✏️</button>
            <button @click="viewCustomer(customer)">👁️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      showAddForm: false,
      customers: [
        {id: 1, name: "Иван Петров", email: "ivan@example.com", phone: "+7 999 123-45-67", ordersCount: 5, totalSpent: 54200},
        {id: 2, name: "Мария Сидорова", email: "maria@example.com", phone: "+7 912 345-67-89", ordersCount: 3, totalSpent: 16800},
        {id: 3, name: "Алексей Иванов", email: "alex@example.com", phone: "+7 987 654-32-10", ordersCount: 7, totalSpent: 120500}
      ]
    }
  },
  computed: {
    filteredCustomers() {
      return this.customers.filter(customer => 
        customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        customer.phone.includes(this.searchQuery)
      )
    
  },
  methods: {
    editCustomer(customer) {
      console.log("Редактировать клиента:", customer);
    },
    viewCustomer(customer) {
      this.$router.push(`/customer/${customer.id}`);
    }
  }
}
}

</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 15px;
  margin: 20px 0;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-add {
  padding: 10px 15px;
  background: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.customer-table {
  width: 100%;
  border-collapse: collapse;
}

.customer-table th, .customer-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.customer-table th {
  background-color: #f8f9fa;
}
</style>