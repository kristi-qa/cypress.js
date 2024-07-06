describe('Покупка аватара', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/'); // Зайти на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввести логин
         cy.get('#password').type('USER_PASSWORD'); // ввести пароль
         cy.get('.auth__button').click(); // нажать Войти

         cy.get('.header__btns > :nth-child(4)').click(); // нажать кнопку Магазин
         cy.get('.available > button').first().click();   // кликаем по кнопке Купить у первого доступного аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');    // вводим номер карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');         // вводим CVV карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');       // вводим срок действия карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');      // вводим имя владельца действия карты
         cy.get('.pay-btn').click();               // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');     // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();    // нажимаем кнопку Отправить
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке

    
     })
   
 })