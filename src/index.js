const supportObserver = !!wx.createIntersectionObserver

Component({
  data: {
    showed: false,
    errorImage: ''
  },

  externalClasses: ['image-class', 'image-container-class'],

  ready() {
    this.addObserver()
  },

  detached() {
    this.clean()
  },

  properties: {
    src: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    webp: {
      type: Boolean,
      value: false
    },
    showMenuByLongpress: {
      type: Boolean,
      value: false
    },
    styles: {
      type: String,
      value: ''
    },
    viewport: {
      type: Object,
      value: {bottom: 0}
    }
  },

  methods: {
    clean() {
      if (this.observer) {
        this.observer.disconnect()
      }
      this.observer = null
    },
    onError(e) {
      this.triggerEvent('error', {
        detail: e.detail
      })
    },
    onLoad(e) {
      this.triggerEvent('load', {
        detail: e.detail
      })
    },
    addObserver() {
      if (!supportObserver) {
        return this.setData({
          showed: true
        })
      }
      if (this.observer) {
        return false
      }
      try {
        const observer = this.createIntersectionObserver()
        observer
          .relativeToViewport(this.properties.viewport)
          .observe('.lazy-image-comp', () => {
            this.setData({
              showed: true
            })
            this.clean()
          })
        this.observer = observer
        return true
      } catch (e) {
        this.setData({
          showed: true
        })
        return false
      }
    }
  }
})
