export default class Card {
  constructor(data) {
    this._id = data.id;
    this._link = data.link;
    this._picture = {
      src: data.picture.src,
      width: data.picture.width,
      height: data.picture.height,
      alt: data.picture.alt,
    };
    this._feature = data.feature;
    this._description = {
      title: data.description.title,
      address: data.description.address,
      textprice: data.description.textprice,
      cost: data.description.cost,
      share: data.description.share,
    };
  }

  createNodeItem(template) {
    const item = template.cloneNode(true);
    const pictureContainer = item.querySelector(`.card__picture-container`);
    const cardDescription = item.querySelector(`.card__description`);
    const picture = pictureContainer.querySelector(`.card__image`);
    const feature = pictureContainer.querySelector(`.card__feature`);

    item.setAttribute(`data-id`, this._id);
    item.querySelector(`.card__link`).setAttribute(`href`, this._link);

    picture.setAttribute(`src`, this._picture.src);
    picture.setAttribute(`alt`, this._picture.alt);
    picture.setAttribute(`width`, this._picture.width);
    picture.setAttribute(`height`, this._picture.height);

    feature.innerText = this._feature;

    cardDescription.querySelector(`.card__title`).innerText = this._description.title;
    cardDescription.querySelector(`.card__address`).innerText = this._description.address;
    cardDescription.querySelector(`.card__price-text`).innerText = this._description.textprice;
    cardDescription.querySelector(`.card__cost`).innerText = this._description.cost;
    cardDescription.querySelector(`.card__share`).innerText = this._description.share;

    return item;
  }
}