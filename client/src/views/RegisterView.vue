<template>
  <section class="auth-view">
    <div class="background-graphic"></div>
    
    <section class="auth-container">
      <div class="brand-header">
        <div class="logo">
          <svg width="40" height="40" viewBox="0 0 24 24">
            <path fill="#4F46E5" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-8 8z"/>
          </svg>
          <h1>RetailPulse</h1>
        </div>
        <p class="tagline">Создайте свой аккаунт</p>
      </div>
      
      <form @submit.prevent="register" class="auth-form">
        <div class="input-group">
          <label for="name">Имя</label>
          <div class="input-with-icon">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24">
              <path fill="#9CA3AF" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <input 
              type="text" 
              id="name" 
              v-model="name" 
              placeholder="Ваше имя"
              required
              @focus="focusField('name')"
              @blur="blurField"
            >
          </div>
        </div>
        
        <div class="input-group">
          <label for="email">Email</label>
          <div class="input-with-icon">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24">
              <path fill="#9CA3AF" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              placeholder="your@email.com"
              required
              @focus="focusField('email')"
              @blur="blurField"
            >
          </div>
        </div>
        
        <div class="input-group">
          <label for="password">Пароль</label>
          <div class="input-with-icon">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24">
              <path fill="#9CA3AF" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              placeholder="••••••••"
              required
              @focus="focusField('password')"
              @blur="blurField"
            >
            <button type="button" class="password-toggle" @click="togglePasswordVisibility">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path v-if="showPassword" fill="#9CA3AF" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                <path v-else fill="#9CA3AF" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
              </svg>
            </button>
          </div>
          <div class="password-strength">
            <div class="strength-bar" :class="passwordStrengthClass"></div>
            <span class="strength-text">{{ passwordStrengthText }}</span>
          </div>
        </div>
        
        <div class="input-group">
          <label for="confirmPassword">Подтвердите пароль</label>
          <div class="input-with-icon">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24">
              <path fill="#9CA3AF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
            <input 
              type="password" 
              id="confirmPassword" 
              v-model="confirmPassword" 
              placeholder="••••••••"
              required
              @focus="focusField('confirmPassword')"
              @blur="blurField"
            >
          </div>
        </div>
        
        <div class="form-checkbox">
          <label class="terms-agree">
            <input type="checkbox" v-model="agreeTerms">
            <span class="checkmark"></span>
            Я принимаю <router-link to="/terms">условия использования</router-link>
          </label>
        </div>
        
        <button type="submit" class="submit-btn" :class="{ loading: isLoading }">
          <span v-if="!isLoading">Создать аккаунт</span>
          <div v-else class="spinner"></div>
        </button>
        
        <div v-if="registerError" class="error-message">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#EF4444" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          {{ registerError }}
        </div>
      </form>
      
      <div class="auth-footer">
        <p>Уже есть аккаунт? <router-link to="/login">Войти</router-link></p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
      showPassword: false,
      activeField: null,
      isLoading: false,
      registerError: null
    };
  },
  computed: {
    passwordStrength() {
      if (this.password.length === 0) return 0;
      if (this.password.length < 6) return 1;
      
      const hasNumber = /\d/.test(this.password);
      const hasLetter = /[a-zA-Z]/.test(this.password);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
      
      let strength = 1;
      if (this.password.length >= 8) strength++;
      if (hasNumber) strength++;
      if (hasLetter) strength++;
      if (hasSpecial) strength++;
      
      return Math.min(strength, 4);
    },
    passwordStrengthClass() {
      const strength = this.passwordStrength;
      if (strength === 0) return '';
      return `strength-${strength}`;
    },
    passwordStrengthText() {
      const strength = this.passwordStrength;
      switch(strength) {
        case 1: return 'Слабый';
        case 2: return 'Средний';
        case 3: return 'Хороший';
        case 4: return 'Сильный';
        default: return '';
      }
    }
  },
  methods: {
    async register() {
      this.isLoading = true;
      this.registerError = null;
      
      if (!this.agreeTerms) {
        this.registerError = 'Необходимо принять условия использования';
        this.isLoading = false;
        return;
      }
      
      if (this.password !== this.confirmPassword) {
        this.registerError = 'Пароли не совпадают';
        this.isLoading = false;
        return;
      }
      
      try {
        // Симуляция задержки сети
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // В реальном приложении здесь будет fetch запрос
        localStorage.setItem('userEmail', this.email);
        this.$router.push('/email-verification');
      } catch (error) {
        this.registerError = error.message || 'Ошибка регистрации';
      } finally {
        this.isLoading = false;
      }
    },
    focusField(field) {
      this.activeField = field;
    },
    blurField() {
      this.activeField = null;
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      const passwordInput = document.getElementById('password');
      passwordInput.type = this.showPassword ? 'text' : 'password';
    }
  }
};
</script>

<style scoped>
/* Общие стили из LoginView */

.password-strength {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.strength-bar {
  height: 6px;
  border-radius: 3px;
  flex-grow: 1;
  background: #E5E7EB;
  overflow: hidden;
}

.strength-bar::after {
  content: '';
  display: block;
  height: 100%;
  width: 0;
  transition: width 0.3s ease, background-color 0.3s ease;
}

.strength-bar.strength-1::after {
  width: 25%;
  background: #EF4444;
}

.strength-bar.strength-2::after {
  width: 50%;
  background: #F59E0B;
}

.strength-bar.strength-3::after {
  width: 75%;
  background: #10B981;
}

.strength-bar.strength-4::after {
  width: 100%;
  background: #10B981;
}

.strength-text {
  font-size: 12px;
  color: #6B7280;
  min-width: 60px;
  text-align: right;
}

.form-checkbox {
  margin-bottom: 20px;
}

.terms-agree {
  display: flex;
  align-items: center;
  color: #4B5563;
  font-size: 14px;
  cursor: pointer;
}

.terms-agree a {
  color: #4F46E5;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.terms-agree a:hover {
  color: #3730A3;
  text-decoration: underline;
}
</style>