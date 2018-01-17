
class JsonActions {
    constructor(data_name) {
        this.data_name = data_name;
    }
    async getData() {
        let response = await fetch("http://localhost:3000/" + this.data_name);
        let data = await response.json();
        return data;
    }

    async addData(data) {
        await fetch("http://localhost:3000/" + this.data_name, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }

    async editData(data, id) {
        await fetch("http://localhost:3000/" + this.data_name + "/" + id, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }

    async deleteData(id) {
        await fetch("http://localhost:3000/" + this.data_name + "/" + id,
            {method: "DELETE"}
        );
    }
}

export default JsonActions;