const getData = async () => {
    console.log(222);
    const response = await fetch("data.json");
    console.log(333);
    const data = await response.json();
    console.log(data);
};

getData();
console.log(111);
