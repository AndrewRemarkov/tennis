# 🧱 Сайт теннисного клуба

## 🚀 Скрипты

```bash
npm run start         # Запуск в dev-режиме
npm run build         # Сборка
npm run preview       # Локальный просмотр сборки

npm run lint:js       # Проверка JS-кода
npm run lint:js:fix   # Автоисправление JS-кода
npm run lint:css      # Проверка CSS-кода
npm run lint:css:fix  # Автоисправление CSS-кода
npm run format        # Проверка форматирования
npm run format:fix    # Форматирование
npm run lint          # Полная проверка кода и форматирования без исправлений
npm run lint:fix      # Полная проверка с автоисправлением и форматированием
```

## ⚙️ Структура проекта

```csharp
├── public/               # Статичные файлы, не обрабатываемые сборщиком
├── src/
│   ├── assets/           # Изображения, иконки, фавиконки и шрифты
│   │   ├── favicons/     # Фавиконки для сайта
│   │   ├── fonts/        # Подключаемые шрифты (woff2 и пр.)
│   │   ├── icons/        # SVG-иконки (для спрайта)
│   │   └── images/       # Остальные изображения
│   │
│   ├── components/       # Мелкие переиспользуемые компоненты (Button, Input и т.п.)
│   ├── constants/        # Константы, enum’ы, конфиги, словари и пр.
│   ├── layouts/          # Структурные компоненты страницы (Header, Content, Section, Footer)
│   ├── modules/          # JavaScript-модули (например: OverlayMenu, InputMaskCollection)
│   ├── pages/            # Файлы страниц (Minista сам роутит всё отсюда)
│   ├── sections/         # Переиспользуемые секции страниц (Hero, About, Features и пр.)
│   ├── styles/           # Общие стили проекта (переменные, миксины, сбросы)
│   ├── utils/            # Утилитарные функции (например: pxToRem, debounce)
│   ├── global.jsx        # Общий layout для всех страниц (Minista Feature)
│   └── main.js           # Точка входа JavaScript-логики, запускающейся в браузере
│
├── .gitignore             # Список файлов и папок, игнорируемых Git
├── .prettierignore        # Список файлов и папок, игнорируемых Prettier
├── eslint.config.js       # Конфигурация ESLint (проверка JS/JSX-кода)
├── jsconfig.json          # Настройки путей и автодополнения для JS (используется IDE и сборщиком)
├── minista.config.js      # Конфигурация Minista
├── package.json           # Зависимости проекта, скрипты, метаинформация
├── package-lock.json      # Зафиксированные версии всех установленных пакетов
├── postcss.config.js      # Конфигурация PostCSS (preset-env, pxtorem и пр.)
├── prettier.config.js     # Настройки автоформатирования кода (Prettier)
├── README.md              # Документация по проекту (вы сейчас её читаете)
└── stylelint.config.js    # Конфигурация Stylelint (проверка CSS/SCSS)
```

## ❓ FAQ

### Почему используется JSX без React?

Благодаря Minista. Это позволяет использовать знакомый синтаксис, но без нагрузки от React — идеально для статичных и маркетинговых сайтов.

### Это можно развернуть на Netlify/Vercel?

Да. Это обычная статика — после `npm run build` можно деплоить куда угодно.
