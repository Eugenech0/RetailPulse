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
              :type="showPassword ? 'text' : 'password'" 
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
        <div class="social-divider">
          <span>Или зарегистрируйтесь через</span>
        </div>
        <div class="social-login">
          <button class="social-btn google">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-1.33-6.36-1.33-.26 0-.51.02-.77.04l1.25 1.25c.59-.05 1.17-.15 1.74-.32.84-.25 1.5-.73 1.91-1.41.35-.59.54-1.31.54-2.05 0-.82-.22-1.57-.6-2.21h2.65V12h-7v-2h9.24c.1.53.16 1.08.16 1.65 0 2.34-1.1 4.46-3.12 5.18z"/>
            </svg>
            Google
          </button>
          <button class="social-btn microsoft">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#0078D7" d="M2 2h9v9H2V2zm9 9h9v9h-9v-9zm-9 9h9v9H2v-9zm9 0h9v9h-9v-9z"/>
            </svg>
            Microsoft
          </button>
        </div>
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
    }
  }
};
</script>

<style scoped>
.auth-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.background-graphic {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%);
  z-index: 0;
}

.auth-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05), 0 20px 48px rgba(0, 0, 0, 0.05);
  padding: 40px;
  width: 100%;
  max-width: 450px;
  z-index: 1;
  position: relative;
  overflow: hidden;
}

.brand-header {
  text-align: center;
  margin-bottom: 32px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
}

.logo h1 {
  margin: 0;
  color: #1F2937;
  font-size: 28px;
  font-weight: 700;
}

.tagline {
  color: #6B7280;
  font-size: 16px;
  margin: 0;
}

.auth-form {
  margin-bottom: 24px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 14px;
  z-index: 2;
}

.input-with-icon input {
  width: 100%;
  padding: 14px 14px 14px 44px;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
  background-color: #F9FAFB;
  box-sizing: border-box;
}

.input-with-icon input:focus {
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  outline: none;
  background-color: white;
}

.password-toggle {
  position: absolute;
  right: 14px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

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

.terms-agree input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  height: 18px;
  width: 18px;
  background-color: #F3F4F6;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
}

.terms-agree input:checked ~ .checkmark {
  background-color: #4F46E5;
  border-color: #4F46E5;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.terms-agree input:checked ~ .checkmark:after {
  display: block;
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

.submit-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(to right, #4F46E5, #7C3AED);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(79, 70, 229, 0.25);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn.loading {
  pointer-events: none;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin: 0 auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #FEF2F2;
  color: #EF4444;
  padding: 12px;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 14px;
}

.auth-footer {
  text-align: center;
  color: #6B7280;
  font-size: 14px;
}

.auth-footer p {
  margin-bottom: 20px;
}

.auth-footer a {
  color: #4F46E5;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.auth-footer a:hover {
  color: #3730A3;
  text-decoration: underline;
}

.social-divider {
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #9CA3AF;
  font-size: 13px;
}

.social-divider::before,
.social-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #E5E7EB;
}

.social-divider span {
  padding: 0 12px;
}

.social-login {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.social-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  background: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.social-btn:hover {
  background: #F9FAFB;
  transform: translateY(-2px);
}

.social-btn.google {
  color: #EA4335;
}

.social-btn.microsoft {
  color: #0078D7;
}

@media (max-width: 480px) {
  .auth-container {
    padding: 30px 20px;
  }
  
  .social-login {
    flex-direction: column;
  }
}
</style>