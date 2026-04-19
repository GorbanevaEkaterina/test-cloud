# Тестовое задание

Адаптивное веб-приложение с интерактивным интерфейсом. Сборка настроена на Webpack 5 с автоматическим деплоем на GitHub Pages.

## Стек технологий

- HTML5, CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript (ES6+)
- Webpack 5, Babel, PostCSS (Autoprefixer, cssnano)
- gh-pages для публикации

## Требования

- Node.js (рекомендуется LTS версия)
- npm (идёт в комплекте с Node.js)

## Установка и запуск

1. Склонируйте репозиторий и перейдите в папку проекта:

```bash
git clone https://github.com/gorbanevaekaterina/test-cloud.git
cd test-cloud
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите локальный сервер для разработки:

```bash
npm run dev
```

Сервер откроется на `http://localhost:8080`. Изменения в коде автоматически обновляют страницу.

## Доступные команды

- `npm run dev` — запуск сервера разработки с горячей перезагрузкой
- `npm run build` — создание оптимизированной продакшен-сборки в папку `dist/`
- `npm run deploy` — публикация сборки на GitHub Pages (автоматически запускает `build`)

## Настройка деплоя на GitHub Pages

Выполните `npm run deploy`. Сайт станет доступен по ссылке через 1–2 минуты. Не забудьте очистить кэш браузера (`Ctrl + Shift + R`) после обновления.
https://gorbanevaekaterina.github.io/test-cloud/

## Структура проекта

```
src/
├── pages/          # Глобальные стили (переменные, основные стили)
├── components/     # UI-компоненты и логика
├── images/         # Статические ресурсы
├── index.html      # HTML-шаблон
└── index.js        # Точка входа приложения
dist/               # Готовая сборка (создаётся автоматически)
webpack.config.js   # Конфигурация Webpack
package.json        # Зависимости и скрипты
```
