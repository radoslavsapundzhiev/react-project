const carService = {
    load: function(id, limit){
        return fetch(`http://localhost:9999/api/car/all${id ? `/${id}` : ''}${limit ? `?limit=${limit}` : ''}`).then(res => res.json());
    },

    detail: function(id){
      return fetch(`http://localhost:9999/api/car/detail/${id}`).then(res => res.json());
    },

    myCars: function(){
      return fetch(`http://localhost:9999/api/car/myCars`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json' 
        },
        credentials: 'include'
      }).then(res => res.json());
    },
    create: function(data) {
        return fetch(`http://localhost:9999/api/car/`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include'
        }).then(res => res.json());
    }
};

export default carService;