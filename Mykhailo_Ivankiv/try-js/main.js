let testString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda beatae, commodi dolore dolorum ea ex incidunt iure libero maxime nemo nostrum quidem quisquam reiciendis, tempore temporibus velit. Voluptas, voluptate!";

class Statistics {
  constructor (testString)  {
    this.data = [testString];
    this.statistics = this.updateStatistics (testString, {});
  }

  updateStatistics  (testString, statistics) {
    return testString
      .split("")
      .map ( char => char.toLowerCase())
      .reduce ( (accum, next) => {
        accum[next] = accum[next] + 1 || 1;
        return accum;
      } , statistics)
  }

  addData (testString) {
    this.data.push(testString);
    this.updateStatistics (testString, this.statistics);
  }
}
const stat = new Statistics(testString);

stat.addData("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")

stat.addData("nimi, assumenda beatae, commodi dolore dolorum ea ex incidunt iure libero maxime nemo nostrum quidem quisquam reiciendis,")

console.log(
  stat.statistics,
  stat.data
);