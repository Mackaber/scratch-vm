const nets = require('nets');
const injector = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTJwdCIgaGVpZ2h0PSIxN3B0IiB2aWV3Qm94PSIwIDAgMTIgMTciIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMTYiPgo8L2c+Cjwvc3ZnPgo=";

class API {
    constructor(runtime) {
        this.runtime = runtime;
        runtime.api = this;
        this.lastOutputId = "";
        this.headers = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }

    _handler(response) {
        let stage = document.getElementById("stage");
        let out = document.querySelectorAll(`[*|href="${injector}"]`);
        let outs = Array.from(document.getElementsByClassName("output_image"));

        //switch (response.type) {
        //    case 'Image': {
        let img = new Image();
        let br = document.createElement("br");
        let p = document.createElement("p");
        let container = document.createElement("div");
        let svg = "data:image/svg+xml;base64," + response.result;

        img.style.maxWidth = "100%";
        img.style.maxHeight = "276px";
        img.src = svg;

        container.style.backgroundColor = "#FFF";
        container.style.padding = "5px";
        container.style.borderRadius = "7px";
        container.style.border = "0.5px solid rgb(218, 193, 193)";
        container.style.width = "100%";

        p.style.margin = "0px 0px 5px 0px";
        p.style.fontSize = "9px";
        p.style.color = "#60788e";
        p.innerText = `Out[${response.id}]=`;

        container.prepend(p);
        container.append(img);
        stage.prepend(br);
        stage.prepend(container);

        // This is just a hack so I don't have to mess with the code of the blocks, it may be changed by regular React later
        out.forEach((el) => {
            el.setAttribute("class","output_image")
            el.setAttribute("xlink:href",svg);
        });
        outs.forEach((el) =>{
            el.setAttribute("xlink:href",svg);
        });

        this.lastOutputId = response.id;

        //    }
        //}
    }

    execute(code) {
        return new Promise(resolve => {
            nets({
                method: 'GET',
                url: `http://localhost:18000/evaluate?code=${encodeURIComponent(code)}`,
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
