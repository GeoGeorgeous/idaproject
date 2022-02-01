# Тестовое задание для idaproject
#### Тестовое задание для [Idaproject](https://idaproject.com/)
- [Описание задания](https://github.com/GeoGeorgeous/idaproject/blob/main/TAKS.md)
- [Макет](https://www.figma.com/file/pDYoKTprsV7DOigFGPOZpG/Junior-frontend-developer-test-%28Copy%29?node-id=0:1) (figma)

> Задание было выполнено без использования Vue.js

## Скрипты:
#### Development
Для запуска проекта на локальной машине:
```
gh repo clone GeoGeorgeous/idaproject
npm install
npm run dev
```

>После клонирования и установки зависимостей проект будет доступен на http://localhost:8080/

#### Production
Чтобы создать production сборку:
```
npm run build
```

#### Deploy
Проект [задеплоен на GitHub Pages](https://geogeorgeous.github.io/idaproject/)
Для деплоя использованы скрипты predeploy и deploy

## Сборка:
* Сборщик: [Webpack 5](https://webpack.js.org/)
* Транспиляция JS: [Babel](https://babeljs.io/)
* HTML: [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)
* CSS: [PostCSS](https://postcss.org/), [autoprefixer](https://github.com/postcss/autoprefixer) (вендорные префиксы), [cssnano](https://github.com/cssnano/cssnano) (минификация), [css-loader](https://webpack.js.org/loaders/css-loader/), [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
* Очистка: [CleanWebPackPlugin](https://github.com/johnagan/clean-webpack-plugin)

## Файловая структура
* Так как проект был выполнен без использования React/Vue, то CSS стили хранятся в папке **blocks** используя методологию [nested](https://ru.bem.info/methodology/filestructure/#nested);
* В папке **components** хранятся ООП компоненты: **Section** (рендер и сортировка товаров), **Product** (карточка с товаром), **FormValidator** (live валидация формы), **Notification** (всплывающие уведомления);
* **images** для изображений;
* В **pages** — используемые страницы, в проекте она одна.
* **utils** — константы и предзагруженные товары;
* **vendor** — материалы сторонних разработчиков: шрифт *SourceSansPro* и *normalize.css*
