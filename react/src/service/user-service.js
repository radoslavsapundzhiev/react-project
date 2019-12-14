const userService = {
    register: function (data) {
      return fetch(`http://localhost:9999/api/user/register`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json());
    },
  
    login: function (data) {
      return fetch(`http://localhost:9999/api/user/login`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res => res.text());
    },
  
    logout: function () {
      return fetch(`http://localhost:9999/api/user/logout`, {
        method: 'POST',
        credentials: 'include'
      }).then(res => res.text());
    },

    profile: function(){
      return fetch(`http://localhost:9999/api/user/detail`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json' 
        },
        credentials: 'include'
      }).then(res => res.json());
    }
  };
  
  export default userService;