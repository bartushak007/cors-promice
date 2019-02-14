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
    };
    request.onerror = () => reject(new Error(`${request.status} : ${request.statusText}`));
    request.send();
  });
}

fetch('https://tanuhaua.github.io/datas-file-json/github_users.json')
.then( response => {    
  if (response.status === 200) {
    return response.json();
  }
})    
.then(arr => {  
  arr.forEach((elem) => {        
    fetch(`https://api.github.com/users/${elem.githubName}`)
    .then((user) => {
      if (user.status === 200) {
        return user.json();
      }
    }) 
    .then(response => {      
      createHtml(elem.fullName, response.avatar_url);    
    });      
  });
}); 

httpGet('https://tanuhaua.github.io/datas-file-json/github_users.json')
.then( response => {    
  return JSON.parse(response);
})
.then(arr => {
  arr.forEach((elem) => {        
    httpGet(`https://api.github.com/users/${elem.githubName}`)
    .then(response => {
      createHtml(elem.fullName, JSON.parse(response)).avatar_url;
    });
  });
});


function random(min, max) {
  return min + Math.random() * (max - min) ;
}

function createHtml(userName, userUrl) {
  const div = document.createElement('div');
  div.classList.add('card'); 
  div.style.transform = `rotate(${random(-4, 4)}deg)`;         
  document.body.appendChild(div);

  const img = new Image;      
  img.src = userUrl;
  img.classList.add('card__img');
  div.appendChild(img);

  const title = document.createElement('h2');
  title.innerText = userName;
  title.classList.add('card__title');
  div.appendChild(title);
}

