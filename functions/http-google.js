const axios = require('axios')
const searchJson = require('./gospel.json')
//let cx = '010614000388907958840:fi3d8gnj0ma'
let cx = searchJson.search.cx
let key = searchJson.search.key
export function getImageUrl(q) {
//const q = '찬송가 100장'
//const a = function getUmageUrl(q) {
  const query = q //encodeURIComponent(q) 
  try {
    const result = axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: key,
        cx: cx,
        q:query,
        num: 1,
        hl:'ko',
        searchType: 'image',
        imgSize: 'large'
  
      }
    })
    return result;
  }
  catch (err) {
    console.error('get error ===>>>> '+ error)
  }
  return null
}
  /*
a(q).then((result) => {
  console.log(JSON.stringify(result.data.items))
}).catch((e) => {
  console.log('eeeeeeeeeee ', e)
  */
