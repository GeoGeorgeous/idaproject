### Тестовое задание для idaproject
Задание: https://frontend-test.idalite.com/

#### Скрипты:
Для запуска проекта на локальной машине:
```
gh repo clone GeoGeorgeous/idaproject
npm install
npm run dev
```
После клонирования и установки зависимостей проект будет доступен на http://localhost:8080/

Чтобы создать production сборку:
```
npm run build
```

#### Сборка:
* Сборщик: [Webpack 5](https://webpack.js.org/)
* Транспиляция JS: [Babel](https://babeljs.io/)
* HTML: [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)
* CSS: [PostCSS](https://postcss.org/), [autoprefixer](https://github.com/postcss/autoprefixer) (вендорные префиксы), [cssnano](https://github.com/cssnano/cssnano) (минификация), [css-loader](https://webpack.js.org/loaders/css-loader/), [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
* Очистка: [CleanWebPackPlugin](https://github.com/johnagan/clean-webpack-plugin)

