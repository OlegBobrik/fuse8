import './css/normalize.css';
import './scss/global/fonts.scss';
import './scss/main.scss';

import { is_ie as isIE } from './js/ie-detect';
import { downloadData } from './js/download';
import Card from './js/card';
import List from './js/component.list';

const DEFAULT_CARDS = 3;
const SEE_MORE_CARDS = 6;

let pointer = 0;

const list = new List(document.querySelector(`.development__list`));
const cards = [];
const seeMore = document.querySelector(`.development__button`);

let template = isIE ? template =
  document
    .querySelector(`#development-template`)
    .querySelector(`.development__item`) :
  document
    .querySelector(`#development-template`)
    .content
    .querySelector(`.development__item`);

const ready = async () => {
  await downloadData()
    .then(data => data.forEach(data => {
      const cardObj = new Card(data);
      cards.push(cardObj);
    }))
    .catch(error => console.error(error));
}

const createElementCard = (cards, start, count) => {
  const items = [];
  for (let i = start; i < start + count && i < cards.length; i++ , pointer++) {
    const newCard = cards[i].createNodeItem(template);
    items.push(newCard);
  }
  renderCard(items);
}

const renderCard = items => {
  items.forEach(item => list.addItem(item));
  list.showList();
}

document.addEventListener(`DOMContentLoaded`, async () => {
  await ready();
  createElementCard(cards, pointer, DEFAULT_CARDS);
});

seeMore.addEventListener(`click`, () => {
  createElementCard(cards, pointer, SEE_MORE_CARDS);
});
