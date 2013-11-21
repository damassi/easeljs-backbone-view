/**
 * Extended Backbone.js view to be used as an EaselJS view superclass
 *
 * @author damassi.pappas@popagency.com
 * @since  11.17.13
 */


var EaselView = Backbone.View.extend({


  /**
   * A ref to the primary stage located on AppController
   * @type {c.Stage}
   */
  stage: null,


  /**
   * The views display object container
   * @type {c.Container}
   */
  container: null,


  /**
   * An array of all child display objects contained within `container`
   * @type {Array}
   */
  children: [],



  initialize: function (options) {
    _.extend( this, options || {} )
    _.bindAll( this )

    this.container = new c.Container()
  },



  render: function (data) {
    if (! this.template)
      return

    data = data || this.data || {}

    if (data instanceof Backbone.Model)
      data = this.data.toJSON()

    this.stage.addChild( this.container )
    this._bindCanvasEvents()

    return this
  },



  //+ PUBLIC METHODS
  //--------------------------------------


  show: function (options) {
    options = options || {}
  },



  hide: function (options) {
    options = options || {}

    if (options.remove)
      this.remove()
  },



  remove: function (options) {
    this.stage.removeChild( this.container )
  },



  addChildren: function (children) {
    for (var i = 0, len = children.length; i < len; ++i)
      this.container.addChild( children[i] )

  },



  //+ EVENT HANDLERS
  //--------------------------------------



  //+ PRIVATE METHODS
  //--------------------------------------



  _bindCanvasEvents: function() {
    var self = this

    _.defer(function() {
      if (typeof self.canvasEvents !== 'undefined') {
        for (event in self.canvasEvents) {
          var evtName = event.split(' ')
            , displayObject = evtName.shift()
            , handler = self.canvasEvents[event]

          if (self[displayObject]) {
            self[displayObject].on(evtName, self[handler])
          }
        }
      }
    })
  }

})

module.exports = EaselView

