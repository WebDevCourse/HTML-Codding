const renderData = async (data, name) => {
    let templateName = name + "Template";
    let source = document.getElementById(templateName);
    if(source!=null){
        let template = Handlebars.compile(source.innerHTML);
        let output = template(data);
        console.log(data);
        source.insertAdjacentHTML('afterEnd',output);
    }
};

const loadJSON = async (callback)=> {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data/data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

const init = async ()=> {
    loadJSON(function (response) {
        // Parse JSON string into object
        let actual_JSON = JSON.parse(response);
        for (let element in actual_JSON){
            let data = {};
            data[element] = actual_JSON[element];
            renderData(data,element);
        }

    });
}

init();
