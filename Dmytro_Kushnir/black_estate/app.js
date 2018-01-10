import './styles/float_stylesheet/black_estate.less';

// const Handlebars = require("handlebars");
// import './java_script/helpers';
let Handlebars = require('handlebars/runtime'); // this thing is here to coupe with "handlebars-loader" approach from the webpack config

let NumeralHelper = require("handlebars.numeral");
NumeralHelper.registerHelpers(Handlebars);


// Handlebars.registerHelper('myHelper', myHelperFunction);

Handlebars.registerHelper("if_even", function(conditional, options) {
        if((conditional % 2) === 0) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    }
);

Handlebars.registerHelper("equals", function(arg1, arg2, options) {
        if (arg1 === arg2) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
    }
);
Handlebars.registerHelper("switch", function(value, options) {
    this._switch_value_ = value;
    var html = options.fn(this); // Process the body of the switch block
    delete this._switch_value_;
    return html;
});

Handlebars.registerHelper("case", function(value, options) {
    if (value == this._switch_value_) {
        return options.fn(this);
    }
});
Handlebars.registerHelper("gridColomnStyle", function(index) {
    switch (index) {
        case 0:
            return " grid_2 prefix_1 alpha";
        case 1:
            return "grid_2 prefix_1";
        case 2:
            return "grid_1 prefix_2";
        case 3:
            return "grid_2 prefix_2";
        case 4:
            return "grid_2 prefix_1 omega";
    }
});

// LAYOUT
document.body.innerHTML += require("./templates/index.handlebars")(require("./data/layout.json"));
// =================================================================

//TODO use AJAX and promise, fetch etc...
//TODO make this thing work
// function getHTML(templateURL, dataURL) {
//     const template = require(templateURL);
//     const data = require("./data/headerData.json");
//     return template(data);
// }

// 2nd stage: blocks rendering

// 2.1 --> header loading
const tastingRoomData = require("./data/tastingRoom.json");

let pageHeaderPlace = document.body.querySelector('.layout__header');
pageHeaderPlace.innerHTML += require("./templates/be_header.handlebars")(require("./data/headerData.json"));
pageHeaderPlace.innerHTML += require("./templates/tasting-room.handlebars")(require("./data/tastingRoom.json"));
pageHeaderPlace.innerHTML += require("./templates/navigation.handlebars")(require("./data/navigation.json"));
//2.1 ===============================================================

// 2.2 --> main-feed rendering
let pageMainFeedPlace = document.body.querySelector('.layout__main-feed');

pageMainFeedPlace.innerHTML += require("./templates/img-box.handlebars")(require("./data/img-box.json"));
pageMainFeedPlace.innerHTML += require("./templates/main_tasting_room.handlebars")(require("./data/main_tasting_room.json"));

//filling info block with data
let mainTastigDataInfo = document.body.querySelector('.main-tasting-room__info_container');
mainTastigDataInfo.classList.add("different_info");
let InfoData = require("./data/different_info");
let InfoHTML = require("./templates/different_info.handlebars")($.extend(InfoData, tastingRoomData));
mainTastigDataInfo.innerHTML += InfoHTML;


const wineTemplate=require("./templates/wines.handlebars");
let wineData = require("./data/wines.json");
let vintageData = require("./data/vintage.json");
Handlebars.registerPartial("wines", wineTemplate);


// let vintageData = ;
// 2.2===============================================================
pageMainFeedPlace.innerHTML += require("./templates/gallery.handlebars")(require("./data/gallery.json"));

pageMainFeedPlace.innerHTML +=
    require("./templates/vintage.handlebars")
    ($.extend(vintageData, wineData));

pageMainFeedPlace.innerHTML += require("./templates/reviews.handlebars")(require("./data/reviews.json"));
pageMainFeedPlace.innerHTML += require("./templates/shop_nav.handlebars")(require("./data/shop_nav.json"));



// 3 footer
let footerContent = document.body.querySelector(".layout__footer");
footerContent.innerHTML+= require("./templates/communication.handlebars")(require("./data/communication.json"));
footerContent.innerHTML+= require("./templates/footer_nav.handlebars")(require("./data/footer_nav.json"));
footerContent.innerHTML+= require("./templates/license.handlebars")(require("./data/license.json"));
