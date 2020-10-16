const baseUrl = 'http://article-posting.herokuapp.com/api/'
const imageUrl = 'http://article-posting.herokuapp.com/'

const API = { 
    url : baseUrl,
    imageUrl: imageUrl,
    product_list: baseUrl + 'v0/article/list/1/',
    sport_list: baseUrl + 'v0/article/list/2/',
    technology_list: baseUrl + 'v0/article/list/3/',
    leadership_list: baseUrl + 'v0/article/list/4/',
    search: baseUrl + 'v0/article/search/',
}

export default API;