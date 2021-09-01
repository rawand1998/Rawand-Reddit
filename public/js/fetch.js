
const CreateHomeCards = (array) => {
    for (let i = 0; i < array.length; i += 1) {
      
      createCards(array[i].title, array[i].discription, array[i].name,array[i].image,array[i].deleted);
    }
  };

  fetch('/post')
  .then((respond) => respond.json())
    .then((res) => {
        CreateHomeCards(res);
      })
  .catch(()=>console.log)

    
fetch('/check-user').then((respond) => respond.json()).then((name) => {
  createNavBar(name);
});