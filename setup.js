const fs = require("fs");
let hbs = require("handlebars");
const codeTemplate = fs.readFileSync("./code.hbs", "utf8");
const codePage = hbs.compile(codeTemplate);
const codes = require("./codes.json");

codes.list.forEach((c) => {

    let page = `${c.code}.html`;
    c.selected = true;
    c.img = c.pic;
    c.status = c.code;

    const codeOutput = codePage(c);

    fs.writeFileSync(`./codes/${page}`, codeOutput);

});
