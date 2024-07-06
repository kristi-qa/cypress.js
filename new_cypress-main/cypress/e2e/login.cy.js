describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio//'); // Зайти на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввести пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Отображается текст Успешной авторизации
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio//'); // зайти на сайт
        cy.get('#forgotEmailButton').click(); // Нажать Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввести почту
        cy.get('#restoreEmailButton').click(); // Нажать Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Отображается текст отправки пароля
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })
     it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio//'); // Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести логин
        cy.get('#pass').type('iLoveqastudio'); // Ввести пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Отображается текст ошибки
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })
    it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio//'); // Зайти на сайт
        cy.get('#mail').type('german@dolnikova.ru'); // Ввести логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввести пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Отображается текст ошибки
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })
    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio//'); // Зайти на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввести пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Отображается текст ошибки
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })
    it('Проверка на приведение к строчным буквам логина', function () {
        cy.visit('https://login.qa.studio//'); // Зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввести пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Отображается текст Успешной авторизации
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })
 })
 