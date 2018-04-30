var xhr = new XMLHttpRequest();

var url = 'http://localhost:7000';

const ApiService = (methods,path,data) => {
    let newUrl = url + path;
    let _Promise = new Promise((resolve, reject) => {
        if (newUrl) {
          xhr.open(methods, newUrl);
          xhr.setRequestHeader('Content-Type', 'application/json')
          xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'))
          xhr.onload = function () {
            if (this.readyState == 4 && this.status === 200) {
              resolve(JSON.parse(xhr.responseText));
            } else {
              reject(xhr.status);
            }
          };
          if(methods === 'GET'){
            xhr.send();
          }else{
            xhr.send(JSON.stringify(data));
          }       
        }
      });
    return _Promise;
} 

export default ApiService;