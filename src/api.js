const nets = require('nets');

class API {
    constructor(runtime) {
        this.runtime = runtime;
        runtime.api = this;
        this.headers = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }

    _handler(response) {
        let stage = document.getElementById("stage");

        //switch (response.type) {
        //    case 'Image': {
                let img = new Image();
                img.src = "data:image/PNG;base64," + response.result;
                stage.prepend(img);
        //    }
        //}
    }

    execute(code) {
        return new Promise(resolve => {
            nets({
                method: 'GET',
                url: `http://localhost:18000/evaluate?code=${code}`,
                headers: this.headers
            }, (err, resp, body) => {
                const json = JSON.parse(body);
                this._handler(json);
                //resolve("something...");
            })
        });
    }
}

module.exports = API;
