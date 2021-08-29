
const cardsContainer = document.querySelector('.content');
const createElement = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// eslint-disable-next-line no-unused-vars
const createCards = (title, discription,  user_id ,image) => {
  const card = createElement('div', 'posts', cardsContainer);
  const img = createElement('img', 'image', card);
  img.src = image;
  const title1 = createElement('h3', 'title', card);
  title1.textContent = title;
  const user_id1 = createElement('h3', 'user_id', card);
  user_id1.textContent = user_id;
  const discription1 = createElement('p', 'discription', card);
  discription1.textContent = discription;
};