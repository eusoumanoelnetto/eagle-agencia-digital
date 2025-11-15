// Configuração do tema para ser usada externamente
window.themeConfig = {
  // Aplica o tema antes da renderização para evitar flash (FOUC)
  init: function() {
    try {
      var override = localStorage.getItem('themeOverride') || localStorage.getItem('theme');
      if (override === 'light' || override === 'dark') {
        if (override === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
        return;
      }
      // Sem override: usa horário local (06:00–18:00 claro; noite escuro)
      var hour = new Date().getHours();
      var night = !(hour >= 6 && hour < 18);
      if (night) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } catch (e) {
      // Fallback seguro
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
  }
};

// Executa imediatamente
window.themeConfig.init();