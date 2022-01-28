import { types } from "mobx-state-tree";
//This is the Model for an item in List of Items
export default types.model("item", {
  id: types.identifier,
  //identifier helps to refer this uniquely when this Model is given as a refernce
  name: types.string,
  category: types.string,
  price: types.number,
  imageUrl: types.string,
  rating: types.number,
  stock: types.number,
});
