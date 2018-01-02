import './styles/float_stylesheet/black_estate.less';

//1st stage: layout pre-rendering
const layoutTemplate = require("./templates/index.handlebars");

const layoutData = require("./data/layout.json");

let resultHTML = layoutTemplate(layoutData);
document.body.innerHTML += resultHTML;
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
//STATIC TEMPLATE LOADING
const headerTemplate = require("./templates/be_header.handlebars");
const navTemplate = require("./templates/navigation.handlebars");
const tastingRoomTemplate = require("./templates/tasting-room.handlebars");

//STATIC DATA LOADING
const headerData = require("./data/headerData.json");
const navData = require("./data/navigation.json");
const tastingRoomData = require("./data/tastingRoom.json");

let pageHeaderPlace = document.body.querySelector('.layout__header');

let headerHTML = headerTemplate(headerData);
let navHTML = navTemplate(navData);
let tastingRoomHTML = tastingRoomTemplate(tastingRoomData);
// console.log(tastingRoomHTML);

pageHeaderPlace.innerHTML += require("./templates/be_header.handlebars")(require("./data/headerData.json"));
// pageHeaderPlace.innerHTML += getHTML("./templates/be_header.handlebars", "./data/headerData.json");
pageHeaderPlace.innerHTML += tastingRoomHTML;
pageHeaderPlace.innerHTML += navHTML;
//2.1 ===============================================================

// 2.2 --> main-feed rendering
let pageMainFeedPlace = document.body.querySelector('.layout__main-feed');

const imgBoxTemplate = require("./templates/img-box.handlebars");
const imgBoxData = require("./data/img-box.json");
let imgBoxHTML = imgBoxTemplate(imgBoxData);

pageMainFeedPlace.innerHTML += imgBoxHTML;

const mainTastingRoomTemplate = require("./templates/main_tasting_room.handlebars");
const mainTastingRoomData = require("./data/main_tasting_room.json");
let mainTastingRoomHTML = mainTastingRoomTemplate(mainTastingRoomData);
pageMainFeedPlace.innerHTML += mainTastingRoomHTML;

//filling info block with data
let mainTastigDataInfo = document.body.querySelector('.main-tasting-room__info_container');
mainTastigDataInfo.classList.add("different_info");
const InfoTemplate = require("./templates/different_info.handlebars");
const InfoData = require("./data/different_info");

$.extend(InfoData, tastingRoomData);
console.log(InfoData);
let InfoHTML = InfoTemplate(InfoData);
mainTastigDataInfo.innerHTML += InfoHTML;



// 2.2===============================================================
pageMainFeedPlace.innerHTML += require("./templates/gallery.handlebars")(require("./data/gallery.json"));
pageMainFeedPlace.innerHTML += require("./templates/vintage.handlebars")(require("./data/vintage.json"));
pageMainFeedPlace.innerHTML += require("./templates/wines.handlebars")(require("./data/wines.json"));
pageMainFeedPlace.innerHTML += require("./templates/reviews.handlebars")(require("./data/reviews.json"));
pageMainFeedPlace.innerHTML += require("./templates/shop_nav.handlebars")(require("./data/shop_nav.json"));

// 2.3Gallery ================

// 2.3 =======================
// 2.4 vineShop======================
// 2.4 ================================