const carService = {
    load: function(id, limit){
        return fetch(`http://localhost:9999/api/car${id ? `/${id}` : ''}${limit ? `?limit=${limit}` : ''}`).then(res => res.json());
    }
};

export default carService;