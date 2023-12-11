import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimeselect.css';

import { handleForm } from './js/requests/subscription';
import { fetchAllCategories } from './js/requests/products';
import { fetchAllProducts } from './js/requests/products';
import { refs } from './js/services/refs';
import { dataAsString } from './js/services/refs';
import './js/products/discount.js';
import './js/products/popular.js';
import { createFiltresCards, createPopularCards } from './js/services/markup';
import { handleChange } from './js/products/products';
import { handleSubmit } from './js/products/products';
import { normalizeCategory } from './js/products/products';
// Отримуємо всі категорії
import { fetchAllProductsPagination } from './js/requests/products';
import Pagination from 'tui-pagination';

import { addToCart } from './js/products/add-to-cart';
import { quantityProduct } from './js/helpers/helpers';
import { getData } from './js/services/storage';
import { common } from './js/common/common';
import { handleModal } from './js/products/modal.js';
import { checkProduct } from './js/products/check-products.js';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
fetchAllCategories().then(data => {
    let modifiedCategories = data.map(data => {
        return normalizeCategory(data);
    });
    localStorage.setItem('filter', dataAsString);
    let markupList = modifiedCategories
        .map(key => `<option value="${key}">${normalizeCategory(key)}</option>`)
        .join('');

    let additionalGender = `<option  selected  >Show all</option>`;
    refs.productsFiltersSelect.innerHTML = markupList + additionalGender;
    new SlimSelect({
        select: refs.productsFiltersSelect,
        showSearch: false,
    });
}).catch;

// Отримуємо всі продукти
fetchAllProducts()
    .then(data => {
        let test1 = createFiltresCards(data.results);
        refs.productsCards.innerHTML = test1;
        checkProduct();

    })
    .catch();

// Функція обробки submit в секції filters
refs.productsFiltersSelect.addEventListener('change', handleChange);
// Функція обробки submit в секції filters
refs.btnSubmit.addEventListener('submit', handleSubmit);

refs.productsFiltersSelect.addEventListener('change', handleChange);

// !!!!!!!
const container = refs.pagination;
const options = {
    // below default value of options
    totalItems: 100,
    itemsPerPage: 6,
    visiblePages: 3,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
            '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
        disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>',
    },
};

const pagination = new Pagination(container, options);

pagination.on('beforeMove', event => {
    const currentPage = event.page;
    const selectedOption =
        refs.productsFiltersSelect.options[
            refs.productsFiltersSelect.selectedIndex
        ];
    let local = localStorage.getItem('filter');
    let storedData = local ? JSON.parse(local) : {};
    const inputValue =
        selectedOption.textContent !== 'Show all'
            ? selectedOption.textContent
            : null;
    storedData.category = inputValue;
    let data1 = dataAsString;
    storedData.page = currentPage;
    localStorage.setItem('filter', JSON.stringify(storedData));

    if (storedData.keyword === null && storedData.category === null) {
        fetchAllProductsPagination(currentPage, storedData.limit)
            .then(data => {
                let markup = createFiltresCards(data.results);
                console.log(storedData.page);

                localStorage.setItem('filter', data1);

                // console.log(data1);
                refs.productsCards.innerHTML = markup;
            })
            .catch(error => {
                console.error(error);
                // Додаткова обробка помилки
            });
    }

    // if (currentPage === currentPage) {
    //     return console.log(currentPage);
    //     // return true;
    // }
});
refs.productsCards.addEventListener('click', event => event.preventDefault());

refs.productsCards.addEventListener('click', addToCart);
refs.popularCards.addEventListener('click', addToCart);
refs.discountCards.addEventListener('click', addToCart);

const cartArr = getData(common.CART_KEY);
quantityProduct(cartArr);

refs.productsCards.addEventListener('click', handleModal);
refs.popularCards.addEventListener('click', handleModal);
refs.discountCards.addEventListener('click', handleModal);
