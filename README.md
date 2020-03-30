# Решение тестового задания

Существует Printerest (https://www.pinterest.ru/).
Делается главная страница для аналогичного сервиса, но только для поиска текста.

Предполагалось, что каждый может на этом сайте зарегистрироваться и:
 - Добавить новую запись (позже будет описано, что это такое)
 - Просматривать контент от других пользователей, оценивать его (про оценку тоже ниже)
 - Подписаться на новые записи от других пользователей
 - Отметить интересные для себя темы, после чего посмотреть, какие темы для него рекомендует сервис
 
 ------
 
## Новая запись
Каждый может оставить новую запись. Для этого необходимо заполнить:
- Заголовок
- Текст
- Источник, откуда взят текст
- Тема (на выбор из списка)
- Иллюстрация в виде картинки


## Оценка чужого контента
Каждый зарегистрированный пользоватлеь может оставить отзыв одним из следующих способов:
- Оставить комментарий
- Поставить звездочку
- Оставить жалобу

Если пользователь просмотрел запись – то автоматически увеличивается кол-во просмотров

------

Для верстки страниц в качестве библиотек компонентов использовался Semantic UI.
Для навигации по сайту – React Router.
Для сборки необходимо установить `yarn` и `nodejs` 10-ой версии.

Сайт в режиме разработки откроется командой:
```
yarn
yarn start
```

Production-версия сайта развернута на https://mipt-mil-test.kyzyl-ool.org
