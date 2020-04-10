"use strict";

const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        handleClick(event);
    });
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        product_name: cardNode.querySelector('.product_name'),
        description: cardNode.querySelector('.description'),
        button: cardNode.querySelector('button'),
    };

    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.product_name
 * @param {HTMLButtonElement} card.button
 */

function hideMoreText(card) {
    card.img.style.display = 'block';
    card.description.style.display = 'none';
    card.button.innerText = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.product_name
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    card.img.style.display = 'none';
    card.description.style.display = 'block';
    card.button.innerText = 'Отмена';
}