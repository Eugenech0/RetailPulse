<template>
  <form @submit.prevent="login">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required>

    <label for="password">Пароль:</label>
    <input type="password" id="password" v-model="password" required>

    <button type="submit">Войти</button>
    <p v-if="loginError" class="error">{{ loginError }}</p>
  </form>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      loginError: null
    };
  },
  methods: {
    async login() {
      this.loginError = null;
      try {
        // Вызов API для входа
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          this.loginError = errorData.message || 'Ошибка входа';
          return;
        }
          // Обработка успешного входа (например, сохранение токена)
        const data = await response.json();
        localStorage.setItem('token', data.token);
        this.$router.push('/profile'); // Перенаправление на страницу профиля
      } catch (error) {
        this.loginError = 'Ошибка сети';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>