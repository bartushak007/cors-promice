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
      JSON.parse(response).forEach(elem => {        
        httpGet(`https://api.github.com/users/${elem.githubName}`)
          .then(response => {
          const x = new Image;      
          x.src = JSON.parse(response).avatar_url;
          document.body.appendChild(x);
        })
      })
  })
  // .catch(res => console.error(res))