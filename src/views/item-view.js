var m = require("mithril")

module.exports = {
  controller: function(data) {
    return data
  },
  view: function(data) {
    // return <div class="item"><b>{data.name}</b> : {data.cost}/-</div>
    return m(".item",[
      m("b", data.name), ` : ${data.cost}/-`
    ])
  }
}
