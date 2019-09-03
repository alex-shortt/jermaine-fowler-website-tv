import mixpanel from "mixpanel-browser"

mixpanel.init("f6d866d19096c7c81d6572d1ba6e5583")

const isProduction = process.env.NODE_ENV === "production"

const actions = {
  identify: id => {
    if (isProduction) {
      mixpanel.identify(id)
    } else {
      console.log(`Mixpanel || Identify: ${id}`)
    }
  },
  alias: id => {
    if (isProduction) {
      mixpanel.alias(id)
    } else {
      console.log(`Mixpanel || Alias Set: ${id}`)
    }
  },
  track: (name, props) => {
    if (isProduction) {
      mixpanel.track(name, props)
    } else {
      console.log(`Mixpanel || Log: ${name} - ${JSON.stringify(props)}`)
    }
  },
  people: {
    set: props => {
      if (isProduction) {
        mixpanel.people.set(props)
      } else {
        console.log(`Mixpanel || People Set: ${JSON.stringify(props)}`)
      }
    }
  }
}

export default actions
