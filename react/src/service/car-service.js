const carService = {
    load: function(id, limit){
        return fetch(`http://localhost:9999/api/car/all${id ? `/${id}` : ''}${limit ? `?limit=${limit}` : ''}`).then(res => res.json());
    },

    detail: function(id){
      const apiRequestDetail = fetch(`http://localhost:9999/api/car/detail/${id}`).then(res => res.json());
      const apiRequestComments = fetch(`http://localhost:9999/api/comment/${id}/all`).then(res => res.json());
      const combinedData = {"apiRequestDetail": {}, "apiRequestComments": {}};
      return Promise.all([apiRequestDetail, apiRequestComments]).then(function(values){
          combinedData["apiRequestDetail"] = values[0];
          combinedData["apiRequestComments"] = values[1];
          return combinedData;
      });  
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
        return fetch(`http://localhost:9999/api/car/create`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include'
        }).then(res => res.json());
    },

    edit: function(data, id) {
      return fetch(`http://localhost:9999/api/car/edit/${id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
      }).then(res => res.json());
  },

    delete: function(id) {
    return fetch(`http://localhost:9999/api/car/delete/${id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res => res.json());
},

};

export default carService;