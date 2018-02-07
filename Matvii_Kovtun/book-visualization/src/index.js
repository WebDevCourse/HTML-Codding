import * as d3 from "d3";
import "../style/common.less";

const colorMap = d3.interpolateRgb(
    d3.rgb('#d6e685'),
    d3.rgb('#1e6823')
);



const root  = document.querySelector("#root");

const buildGraphic = () => {
    root.innerHTML = "";

    const dat = new Array(1000).fill().map(() => Math.random());
    const vis = d3.select("#root")
        .selectAll("div")
        .data(dat);

    vis
        .enter()
        .append("div")
        .style("background-color", (d) => {
            return d == 0 ? '#eee' : colorMap(d)
        })
        .attr("class", "box");
};


document.body.addEventListener("click", (ev) => {
    console.log(ev);
    if (ev.target.classList.contains("box")) ev.target.remove();
    else buildGraphic();
}, false);

buildGraphic();