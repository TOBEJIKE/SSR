import '../assets/styles/footer.styl'
export default {
  data() {
    return {
      author: 'jk'
    }
  },
  render() {
    return (
      <div id='footer'>
        <span>learn webpack by {this.author}</span>
      </div>
    )
  }
}