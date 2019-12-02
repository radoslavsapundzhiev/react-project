const carService = {
    load: function(id){
        return fetch('localhost:8000/all').then(res => res.json());
    }
};

export default carService;