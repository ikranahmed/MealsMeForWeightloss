// meal-tracker.js

// Helper function to ensure we're working with valid JSON data
function getStorageItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  
  // User profile and goals
  const userProfile = {
    setGoal: (weightGoal) => {
      localStorage.setItem('weightGoal', JSON.stringify(weightGoal));
    },
    getGoal: () => {
      return getStorageItem('weightGoal');
    },
    setCalorieGoal: (calorieGoal) => {
      localStorage.setItem('calorieGoal', JSON.stringify(calorieGoal));
    },
    getCalorieGoal: () => {
      return getStorageItem('calorieGoal');
    }
  };
  
  // Weight tracking
  const weightTracker = {
    addEntry: (date, weight) => {
      const entries = getStorageItem('weightEntries') || [];
      entries.push({ date, weight });
      localStorage.setItem('weightEntries', JSON.stringify(entries));
    },
    getEntries: () => {
      return getStorageItem('weightEntries') || [];
    },
    clearEntries: () => {
      localStorage.removeItem('weightEntries');
    }
  };
  
  // Meal tracking
  const mealTracker = {
    addMeal: (date, mealType, food, calories) => {
      const meals = getStorageItem('meals') || [];
      meals.push({ date, mealType, food, calories });
      localStorage.setItem('meals', JSON.stringify(meals));
    },
    getMeals: (date) => {
      const meals = getStorageItem('meals') || [];
      return date ? meals.filter(meal => meal.date === date) : meals;
    },
    clearMeals: () => {
      localStorage.removeItem('meals');
    }
  };
  