const nets = require('nets');

class WolframImageManipulation {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getPrimitives () {
        return {
            current_image: this.currentImage
        };
    }

    currentImage () {
        const runtime = this.runtime;
        console.log(runtime);


        // Super Hacky!, but I don't know how Scratch 3.0 works...
        let stage = document.getElementById('stage');
        let img = new Image();
        stage.children[0].children[0].style.display = 'none';
        stage.children[0].appendChild(img)

        nets({method: 'GET',
            url: `http://localhost:18000/evaluate?code=CurrentImage[]`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }, (err, resp, body) => {
            const json = JSON.parse(body);
            console.log(json);
            img.src= "data:image/PNG;base64," + json.result;
            this.lastOutputId = json.id;
        });
    }
}

module.exports = WolframImageManipulation;
