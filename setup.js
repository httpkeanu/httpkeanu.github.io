const fs = require("fs");
let hbs = require("handlebars");
const codeTemplate = fs.readFileSync("./code.hbs", "utf8");
const codePage = hbs.compile(codeTemplate);
const codes = require("./codes.json");
const indexPage = require("./index.hbs");
const indexOutput = indexPage(codes);
fs.writeFileSync("./docs/index.html", indexOutput);

codes.list.forEach((c) => {

    let page = `${c.code}.html`;
    c.selected = true;
    c.img = c.pic;
    c.status = c.code;

    const codeOutput = codePage(c);

    fs.writeFileSync(`./docs/codes/${page}`, codeOutput);

});
