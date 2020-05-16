import axios from "axios";

export default {
  getInv: function () {
    return axios.get("/api/all");
  },
  getSpecificProduct: function (cat, subcat, product) {
    // console.log(cat);
    // console.log(subcat);
    // console.log(product);
    console.log('Client API: ' + product)
    return axios.get("/" + cat + "/" + subcat + "/" + product);
  },
  getCategory: function (category) {
    // console.log(category);
    console.log('Client API: ' + category)
    return axios.get("/" + category);
  },
  getSubCategory: function (cat, subcat) {
    // console.log(cat);
    // console.log(subcat);
    console.log('Client API: ' + subcat)
    return axios.get("/" + cat + "/" + subcat);
  },
  getFeaturedProducts: function (cat) {
    // console.log(cat)
    console.log('Client API: feature- ' + cat)
    return axios.get('/featured/' + cat)
  }
}
