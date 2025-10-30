# Naive UI Table Demo (Vue 3 + TS)

## Запуск

```bash
npm install
npm run dev
```

## Функции

- Таблица `n-data-table` с редактируемыми колонками (`n-switch`, `n-date-picker`, `n-input-number`).
- Пересчёт цены с НДС: `price = priceNotNds + (priceNotNds * nds / 100)`.
- Логирование состояния строки в консоль при любом изменении.
- Темы: светлая/тёмная, переключатель в шапке. Русская локаль (`ruRU`, `dateRuRU`).

## Архитектура

- `src/components/PricesTable.vue` — таблица и бизнес‑логика.
- Алиас `@` → `src` (см. `vite.config.ts`, `tsconfig.json`).

## Кодстайл

- ESLint (Vue 3 + TypeScript) и Prettier.
- Команды:

```bash
npm run lint
npm run format
```

- Редакторы: `.editorconfig` для единообразных отступов и конца строк.

## Тесты

- Юнит и компонентные тесты на Vitest + Vue Test Utils.
- Команды:

```bash
npm run test
npm run test:ui
```


```

Примечание: `vite.config.ts` автоматически подставит корректную `base` на CI.

## Примечания

- Используется JSX/TSX в рендерах колонок. Сборка настроена через `@vitejs/plugin-vue-jsx`, а TypeScript — через `jsxImportSource: "vue"`.
