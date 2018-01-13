let data = [];

const getData = async () => {
    let response = await fetch("http://localhost:3000/users");
    data = await response.json();
    render(data);
}

const render  = (data) => {

};
