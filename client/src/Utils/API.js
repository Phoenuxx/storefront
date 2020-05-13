import axios from "axios";

export default {
  getInv: function () {
    return axios.get("/api/all");
  },
  getSpecificProduct: function (cat, subcat, product) {
    console.log(cat);
    console.log(subcat);
    console.log(product);
    return axios.get("/api/" + cat + "/" + subcat + "/" + product);
  },
  getCategory: function (category) {
    console.log(category);
    return axios.get("/api/" + category);
  },
  getSubCategory: function (cat, subcat) {
    console.log(cat);
    console.log(subcat);
    return axios.get("/api/" + cat + "/" + subcat);
  },
  getFeaturedProducts: function (cat) {
    console.log(cat)
    return axios.get('/api/featured/' + cat)
  }
}
