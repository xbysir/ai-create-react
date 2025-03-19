import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ],
  shortcuts: {
    'nav-link': 'text-gray-600 hover:text-primary transition-all duration-200',
    'nav-link-active': 'text-primary font-medium border-b-2 border-primary',
    'nav-item': 'relative py-2 px-1 text-[15px] transition-all duration-200',
    'nav-item-active': 'text-primary font-medium border-b-2 border-primary',
    'nav-item-hover': 'hover:text-primary hover:border-b-2 hover:border-primary/30',
    'mobile-menu-overlay': 'fixed inset-0 bg-black/30 z-40',
    'mobile-menu-drawer': 'fixed right-0 top-0 bottom-0 w-64 bg-white shadow-xl z-50 transform transition-transform duration-300',
    'mobile-menu-item': 'block px-4 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors duration-200',
    'mobile-menu-item-active': 'bg-primary/5 text-primary font-medium border-l-4 border-primary',
    'header-container': 'py-5 px-4 w-full flex justify-between items-center border-b border-gray-100',
    'main-content': 'flex-grow p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm',
    'footer-container': 'bg-gray-800 py-8 text-white'
  },
  theme: {
    colors: {
      primary: '#1677ff',
      success: '#52c41a',
      warning: '#faad14',
      error: '#ff4d4f',
      info: '#1677ff'
    }
  }
});