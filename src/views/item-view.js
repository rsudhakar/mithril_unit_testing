var m = require("mithril")

module.exports = {
  controller: function(data) {
    return data
  },
  view: function(data) {
    return <div>{data.name} for {data.cost}</div>
  }
}
