const renderData = (data, name) => {
    let templateName = name + "Template";
    let source = document.getElementById(templateName);
    if (source != null) {
        if (name == "comments") {
            data['comments'].reverse();
        }
        let template = Handlebars.compile(source.innerHTML);
        let output = template(data);
        source.insertAdjacentHTML('afterEnd', output);
    }
};

const loadJSON = (callback) => {
    fetch('data/data.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
            if (response.ok) {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                return response.text();
            }
        }).then(function(text){
        callback(text);
    });
}

const init = () => {
    loadJSON(async function (response) {
        // Parse JSON string into object
        let actual_JSON = JSON.parse(response);
        for (let element in actual_JSON) {
            let data = {};
            data[element] = actual_JSON[element];
            await renderData(data, element);
        }
    });
}
init();
