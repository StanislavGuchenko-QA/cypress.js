 describe('Домашнее задание', function () {

    it('1.1 Проверка на позитивный кейс авторизации QA Studio', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type ('german@dolnikov.ru');
       cy.get('#pass').type ('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })
    
    it('1.2 Проверка восстановление пароля QA Studio', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type ('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
        
    it('1.3 Проверка на ввод неправильного пароля QA Studio', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
        
    it('1.4 Проверка на ввод неправильного логина QA Studio', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('german@dolniko.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
        
    it('1.5 Проверка на негативный кейс валидации QA Studio', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('germandolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        })

    it('1.6 Проверка на привидение к строчным буквам QA Studio', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('GerMan@Dolnikov.ru');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('2.0 Проврека на оформление покупки', function () {
        cy.reload();
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click().click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('#cart-modal > .off-modal-layer').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type ('Иван');
        cy.get('#billing_last_name').type ('Иванов');
        cy.get('#billing_company').type ('Джорджия');
        cy.get('#billing_address_1').type ('Красная площадь, дом 3');
        cy.get('#billing_address_2').type ('2 этаж');
        cy.get('#billing_city').type ('г. Москва');
        cy.get('#billing_state').type ('Тверской район');
        cy.get('#billing_postcode').type ('109012');
        cy.get('#billing_phone').type ('+79777777777');
        cy.get('#billing_email').type ('ivanov@mail.ru');
        cy.get('#order_comments').type ('С Уважением, Иванов Иван!');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
        })
})