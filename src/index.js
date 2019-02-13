// 2. Написать универсальную функцию, которая принимает параметр url, будет делать асинхронные запросы по этому 
// url и возвращать промис с результатом запросов. (Не используя fetch)

// 3. Используя написанную в предыдущем задании функцию, реализовать при помощи цепочки промисов следующее:

// Получить массив пользователей гитхаба по ссылке https://tanuhaua.github.io/datas-file-json/github_users.json. 
// Вид объекта каждого пользователя:
// {
//   "fullName": "Name Surname",
//   "githubName": "github name"
// }
// Затем для каждого пользователя получить информацию по API Github по ссылке https://api.github.com/users/{githubName}
// Вывести на странице для каждого пользователя fullName и его аватарку с github
// Оформить верстку результатов (красиво:))))
// 4. Скопируйте код предыдущего задания и замените функцию, выполняющую асинхронные запросы на fetch.

function httpGet(url) {
  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();   
    request.open('GET', url, true);
    request.onload = () => {
      if (request.status === 200) {        
        resolve(request.response);
      } else {
        reject(new Error(`${request.status} : ${request.statusText}`));
      }
    }
    request.onerror = () => reject(new Error(`${request.status} : ${request.statusText}`));
    request.send()
  });
}




httpGet('https://tanuhaua.github.io/datas-file-json/github_users.json')
  .then( response => {    
    const objJsn = JSON.parse(response);
    objJsn.forEach((elem, i) => {        
      httpGet(`https://api.github.com/users/${elem.githubName}`)
        .then(response => {
          createHtml(elem, response);
        })
    })
  })
  

  // const div = document.createElement('div');
  //         div.classList.add('card');
  //         div.style.transform = `rotate(${random(-4, 4)}deg)`
          
  //         document.body.appendChild(div);
  //         document.body.appendChild(div);
  //         const x = new Image;
  //         x.classList.add('card__img');      
  //         x.src = 'https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-9/30710246_1895718487168587_3961380716582797312_n.jpg?_nc_cat=106&_nc_ht=scontent.fiev6-1.fna&oh=71103f800b8cec828e2616799cb64f67&oe=5CDE1C28';
  //         div.appendChild(x);
  // const title = document.createElement('h2');
  // title.classList.add('card__title');
  //         title.innerText = "Roman Bartushak";
  //         div.appendChild(title);



function random(min, max) {
  return min + Math.random() * (max - min) ;
}

function createHtml(elem, response) {
  const div = document.createElement('div');
  div.classList.add('card'); 
  div.style.transform = `rotate(${random(-4, 4)}deg)`;         
  document.body.appendChild(div);

  const img = new Image;      
  img.src = JSON.parse(response).avatar_url;
  img.classList.add('card__img');
  div.appendChild(img);

  const title = document.createElement('h2');
  title.innerText = elem.fullName;
  title.classList.add('card__title');
  div.appendChild(title);
}


// function httpGet(url) {
//   return new Promise((resolve, reject) => {

//     const request = new XMLHttpRequest();   
//     request.open('GET', url, true);
//     request.onload = () => {
//       if (request.status === 200) {        
//         resolve(request.response);
//       } else {
//         reject(new Error(`${request.status} : ${request.statusText}`));
//       }
//     }
//     request.onerror = () => reject(new Error(`${request.status} : ${request.statusText}`));
//     request.send()
//   });
// }