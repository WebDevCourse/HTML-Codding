const fs = require("fs");
const {promisify} = require("util");
const kmeans = require('ml-kmeans');


const path = "C:/Users/matvii.kovtun/Desktop/ST-dynamics/image-anomaly-detection/data/anomalies"; // add images to current directory

const readDir = promisify(fs.readdir);
const getPixelss = promisify(getPixels);
readDir(path).then((files) => {
    Promise.all(files.slice(1, 100).map(file =>
        getPixelss(path + "/" + file)
            .then(pixels => {
                const intArray = [];
                for (const value of pixels.data.values()) {
                    intArray.push(value);
                }
                return intArray;
            })))
        .then((res) => {
            console.log(res[0].length);

        });
});

