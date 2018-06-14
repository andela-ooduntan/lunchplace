export default {
  baseUrl() {
    return `https://api.foursquare.com/v2/venues/explore?client_id=${this.clientId}&client_secret=${this.clientSecret}`;
  },
  getLunchLocation(address = '') {
    return `${this.baseUrl()}&query=lunch&near=${address}&v=20170801&limit=3`;
  },
  clientId: 'WVW43TGFNIYSVOJRG1VYY2INT322LDTEGXKZQMEYADM2YTTF', // TODO make an env variable.
  clientSecret: 'FDXADVOIN3HYSZQ0KCJU2YCVNTVXTBX3EL104E42CSH0D1RD', // TODO: make evn variable

}
