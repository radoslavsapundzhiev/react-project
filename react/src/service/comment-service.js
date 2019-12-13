const commentService = {
    // load: function(carId){
    //     return fetch(`http://localhost:9999/api/comment/${carId}/all`).then(res => res.json());
    // },

    // detail: function(id){
    //   return fetch(`http://localhost:9999/api/car/detail/${id}`).then(res => res.json());
    // },

    // myCars: function(){
    //   return fetch(`http://localhost:9999/api/car/myCars`, {
    //     method: 'GET',
    //     headers: {
    //       'Content-type': 'application/json',
    //       'Accept': 'application/json' 
    //     },
    //     credentials: 'include'
    //   }).then(res => res.json());
    // },
    create: function(data, carId) {
        return fetch(`http://localhost:9999/api/comment/${carId}/create`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials: 'include'
        }).then(res => res.json());
    }
};

export default commentService;