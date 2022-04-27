import { Component } from 'react'

const styles = {
  logo: {
    fontWeight: '900',
    fontSize: '2rem',
  }
}

class Logo extends Component {
  render() {
    return (
      <div style={styles.logo}>
        TIENDA
      </div>
    )
  }
}

export default Logo
