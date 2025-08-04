<template>
  <div class="app-layout">
    <!-- Навигация для авторизованных пользователей -->
    <header v-if="showNavigation" class="dashboard-header">
      <div class="header-content">
        <h1 class="logo">RetailPulse</h1>
        <nav class="nav-links">
          <router-link 
            to="/dashboard" 
            class="nav-link"
            :class="{ 'active': $route.name === 'Dashboard' }"
          >
            Главная
          </router-link>
          <router-link 
            to="/analytics" 
            class="nav-link"
            :class="{ 'active': $route.name === 'Analytics' }"
          >
            Аналитика
          </router-link>
          <router-link 
            to="/products" 
            class="nav-link"
            :class="{ 'active': $route.name === 'Products' }"
          >
            Товары
          </router-link>
          <router-link 
            to="/customers" 
            class="nav-link"
            :class="{ 'active': $route.name === 'Customers' }"
          >
            Клиенты
          </router-link>
          <router-link 
            to="/orders" 
            class="nav-link"
            :class="{ 'active': $route.name === 'Orders' }"
          >
            Заказы
          </router-link>
        </nav>
        <div class="user-menu">
          <div class="user-info">
            <span class="user-name">{{ userName }}</span>
            <span class="user-role">{{ userRole }}</span>
          </div>
          <button class="logout-btn" @click="logout">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userName: 'Администратор',
      userRole: 'Admin'
    }
  },
  computed: {
    showNavigation() {
      const authRoutes = ['Login', 'Register', 'NotFound']
      return !authRoutes.includes(this.$route.name)
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
/* Глобальные стили */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  max-width: 1400px;
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
  gap: 1.5rem;
  margin-left: 2rem;
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
  font-weight: 600;
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

.nav-link:hover:not(.active) {
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

.main-content {
  flex: 1;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 2rem;
  width: 100%;
}

/* Анимации переходов */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Адаптивные стили */
@media (max-width: 1200px) {
  .header-content {
    padding: 1rem;
  }
  
  .nav-links {
    gap: 1rem;
    margin-left: 1rem;
  }
}

@media (max-width: 992px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    margin: 1rem 0 0 0;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .user-menu {
    width: 100%;
    justify-content: center;
    margin-top: 0.5rem;
  }
  
  .user-info {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .logo {
    font-size: 1.5rem;
  }
  
  .nav-links {
    gap: 0.8rem;
  }
  
  .nav-link {
    font-size: 0.9rem;
  }
  
  .main-content {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .user-menu {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>