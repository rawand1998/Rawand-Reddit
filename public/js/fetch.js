
const CreateHomeCards = (array) => {
    for (let i = 0; i < array.length; i += 1) {
      
      createCards(array[i].title, array[i].discription, array[i].user_id,array[i].image);
    }
  };
  // eslint-disable-next-line no-shadow

  // const getFetch=()=>{
  //    fetch('/post')
  //    .then((respond) => respond.json())
  //     // .then((res) => {
  //     //   CreateHomeCards(res);
  //     // })
  //     .catch((error) => error);
  // }
  //  getFetch()
  fetch('/post')
  .then((respond) => respond.json())
    .then((res) => {
        CreateHomeCards(res);
      })
  .catch(()=>console.log)