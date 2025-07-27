<template>
  <form @submit.prevent="register">
    <label for="username">Имя пользователя:</label>
    <input type="text" id="username" v-model="username" required>

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required>

    <label for="password">Пароль:</label>
    <input type="password" id="password" v-model="password" required>

    <button type="submit">Зарегистрироваться</button>
    <p v-if="registrationError" class="error">{{ registrationError }}</p>
  </form>
</template>

<script>
export default {
  name: 'RegisterView',   
  data() {
    return {
      username: '',
      email: '',
      password: '',
      registrationError: null
    };
  },
  methods: {
    async register() {
      this.registrationError = null;
      try {
        // Вызов API для регистрации
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          this.registrationError = errorData.message || 'Ошибка регистрации';
          return;
        }
        // Обработка успешной регистрации (например, перенаправление на страницу входа)
        this.$router.push('/login');
      } catch (error) {
        this.registrationError = 'Ошибка сети';
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