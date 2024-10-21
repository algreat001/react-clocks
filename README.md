# Getting Started with Clocks App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Комментарии по заданию

Не реализовал, но мог (нет в задании, нет серверной части) : поддержки CI/CD (gitlab action), тесты, docker-container.
Webpack - не стал делать eject (но он под капотом, использовал только утилиту craco для настройки локальных путей)
По css - так как проект достаточно простой, то не использовал препроцессоры.

Если бы не жесткое условие на redux и webpack - использовал бы mobx и vite соответственно (обсуждаемо)

Почему обновление всех часов в одном таймере?
1. Отдельные таймеры запущенные асинхронно создают рассинхронизацию отсчетов секунд - смотрится ужасно - решается более частым запуском таймера (100мс хватило) 
2. Экономия ресурсов - один таймер на все часы, а не на каждый (но в данном случае это слабый аргумент

## Структура проекта
- src
  - components - компоненты
  - pages - страницы
  - helpers - вспомогательные функции
  - stories - хранилище редукс
  - models - модель данных


