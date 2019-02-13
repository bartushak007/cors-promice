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
      } 
    }
    request.onerror = () => reject(new Error("Network Error"));
    request.send()
  });
}
httpGet('https://tanuhaua.github.io/datas-file-json/github_users.json')
  .then( response => {    
    const objJsn = JSON.parse(response);
    objJsn.forEach((elem, i) => {        
      httpGet(`https://api.github.com/users/${elem.githubName}`)
        .then(response => {
          const div = document.createElement('div');
          div.classList.add('card');          
          document.body.appendChild(div);

          const img = new Image;      
          img.src = JSON.parse(response).avatar_url;
          div.appendChild(img);

          const title = document.createElement('div');
          title.innerText = elem.fullName;
          div.appendChild(title);
        })
    })
  })
  // .catch(res => console.error(res))

  // const div = document.createElement('div');
  //         div.classList.add('card');
          
  //         document.body.appendChild(div);
  //         document.body.appendChild(div);
  //         const x = new Image;      
  //         x.src = 'https://cdn.xgqfrms.xyz/logo/logo.png';
  //         div.appendChild(x);