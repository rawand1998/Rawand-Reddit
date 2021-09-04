


const CreateHomeCards = (array) => {
  for (let i = 0; i < array.length; i += 1) {

    createCards(array[i].title, array[i].discription, array[i].name, array[i].image, array[i].deleted, array[i].comment);
  }
};
const createComment = (array2) => {
  for (let i = 0; i < array2.length; i += 1) {
    createComments(array2[i].content, array2[i].name)

  }
}
fetch('/post')
  .then((respond) => respond.json())
  .then((res) => {
    CreateHomeCards(res);
  })
  .catch(() => console.log)


fetch('/check-user').then((respond) => respond.json()).then((name) => {
  createNavBar(name);
});
fetch('/getComment')
  .then((respond) => respond.json())
  .then((res) => {
    createComment(res)
  })

  .catch((error) => console.log(error))