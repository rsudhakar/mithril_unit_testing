var m = require("mithril")
var data = require("../models/cart")
var itemView = require("./item-view")

module.exports = {
  view: function() {
    return <div class="container">
      <div class="header">My Cart ({data.items.length} items)</div>
      <div class="items">
        {this.getItems()}
      </div>
      <div class="summary">
        Total : {data.total()}/-
      </div>
    </div>
  },
  getItems() {
    return data.items.map(function(d) {
      return m(itemView, d)
    })
  }
}
