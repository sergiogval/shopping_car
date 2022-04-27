import { Component } from 'react'

const styles = {
  layout: {
    backgroundColor: '#c5c5c5',
    color: '#0A283E',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height:'100vh',
  },
  container: {
    width: '1200px',
  }
}
class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
