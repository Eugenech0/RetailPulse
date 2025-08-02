<template>
  <div class="products">
    <div class="header">
      <h1>Управление товарами</h1>
      <button @click="showAddForm = true" class="btn-add">+ Добавить товар</button>
    </div>
    
    <div class="search-bar">
      <input type="text" placeholder="Поиск по названию..." v-model="searchQuery">
      <select v-model="categoryFilter">
        <option value="">Все категории</option>
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
    </div>
    
    <table class="product-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Категория</th>
          <th>Цена</th>
          <th>Остаток</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }} ₽</td>
          <td>{{ product.stock }} шт.</td>
          <td>
            <button @click="editProduct(product)" class="btn-edit">✏️</button>
            <button @click="deleteProduct(product.id)" class="btn-delete">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div v-if="showAddForm" class="modal">
      <div class="modal-content">
        <h2>{{ editingProduct ? 'Редактировать' : 'Добавить' }} товар</h2>
        <form @submit.prevent="saveProduct">
          <label>Название:</label>
          <input v-model="formData.name" required>
          
          <label>Категория:</label>
          <select v-model="formData.category" required>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
          
          <label>Цена (₽):</label>
          <input type="number" v-model="formData.price" required>
          
          <label>Количество:</label>
          <input type="number" v-model="formData.stock" required>
          
          <div class="form-actions">
            <button type="button" @click="cancelForm">Отмена</button>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      categoryFilter: '',
      showAddForm: false,
      editingProduct: null,
      formData: {
        name: '',
        category: '',
        price: 0,
        stock: 0
      },
      categories: ['Электроника', 'Одежда', 'Бытовая техника', 'Книги'],
      products: [
        {id: 1, name: "Ноутбук", category: "Электроника", price: 50000, stock: 10},
        {id: 2, name: "Смартфон", category: "Электроника", price: 30000, stock: 25},
        {id: 3, name: "Футболка", category: "Одежда", price: 1200, stock: 50}
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const categoryMatch = this.categoryFilter ? product.category === this.categoryFilter : true;
        return nameMatch && categoryMatch;
      });
    }
  },
  methods: {
    editProduct(product) {
      this.editingProduct = product;
      this.formData = {...product};
      this.showAddForm = true;
    },
    deleteProduct(id) {
      if(confirm("Удалить товар?")) {
        this.products = this.products.filter(p => p.id !== id);
      }
    },
    saveProduct() {
      if(this.editingProduct) {
        // Обновление
        const index = this.products.findIndex(p => p.id === this.editingProduct.id);
        this.products.splice(index, 1, {...this.formData});
      } else {
        // Добавление
        const newId = Math.max(...this.products.map(p => p.id), 0) + 1;
        this.products.push({...this.formData, id: newId});
      }
      this.cancelForm();
    },
    cancelForm() {
      this.showAddForm = false;
      this.editingProduct = null;
      this.formData = {name: '', category: '', price: 0, stock: 0};
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn-add {
  padding: 10px 15px;
  background: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-bar {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th, .product-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.product-table th {
  background-color: #f8f9fa;
}

.btn-edit, .btn-delete {
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

.btn-edit { background: #f39c12; color: white; }
.btn-delete { background: #e74c3c; color: white; }

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
}

form {
  display: grid;
  gap: 15px;
}

form label {
  font-weight: bold;
}

form input, form select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}
</style>