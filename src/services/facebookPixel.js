import ReactPixel from "react-facebook-pixel"

const options = {
  autoConfig: true,
  debug: false
}

ReactPixel.init("350956038990358", options)

const isProduction = process.env.NODE_ENV === "production"

const actions = {
  track: (event, data) => {
    if (isProduction) {
      ReactPixel.track(event, data)
    } else {
      console.log(`Facebook Pixel || Track: ${event} - ${data}`)
    }
  },
  trackCustom: (event, data) => {
    if (isProduction) {
      ReactPixel.track(event, data)
    } else {
      console.log(`Facebook Pixel || Track Custom: ${event} - ${data}`)
    }
  },
  pageView: (name, props) => {
    if (isProduction) {
      ReactPixel.pageView()
    } else {
      console.log("Facebook Pixel || Pageview")
    }
  }
}

export default actions
