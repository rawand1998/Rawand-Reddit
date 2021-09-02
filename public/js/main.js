
const cardsContainer = document.querySelector('.content');
const navBar = document.querySelector('.nav-bar');
const form = document.querySelector('form');
const error = document.querySelector('.error')
const password = document.querySelector('#password')
const createElement = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// eslint-disable-next-line no-unused-vars
const createCards = (title, discription,user_id ,deleted,comment)=> {
  const card = createElement('div', 'posts', cardsContainer);
  const user_id1 = createElement('h3', 'user_id', card);
  user_id1.textContent = user_id;
  const title1 = createElement('h3', 'title', card);
  title1.textContent = title;
  const discription1 = createElement('p', 'discription', card);
  discription1.textContent = discription;
  // const img = createElement('img', 'image', card);
  // img.src = image;
  const deleted1 = createElement('a','delete',card)
  deleted1.textContent='deleted';
  deleted1.href='/delete'
 
//  const commentard = createElement('div','commentCard',card)
//  commentard.textContent=comment
 const comment1 = createElement('a','comment',card)
comment1.textContent='comment'
 comment1.href='/comment'

 

};
const createNavBar = (title) => {
  navBar.textContent = '';
  const logOut = document.createElement('a');
  logOut.href = '/logout';
  logOut.textContent = 'Log out';
  logOut.classList.add('btn-sign');
  const username = document.createElement('h4');
  username.textContent = title;
  username.classList.add('btn-sign');
  navBar.appendChild(logOut);
  navBar.appendChild(username);
};
form.addEventListener('submit',(e)=>{
  if (password.value.length < 6) {
    e.preventDefault();
    error.textContent = 'PASSWORD SHOULD BE 6 CHARACTERS AT LEAST';
   
  } else {
    password.style.border = '1px solid #827e7e';
  }
})