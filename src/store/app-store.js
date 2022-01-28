//This module  creates store with initail value and exports the sttore

import shopItems from "./shopItems";
import shopItemsModel from "./shopItemsModel";

// create a store with default values for the two arrays defined
const store = shopItemsModel.create({
  itemsList: shopItems.products,
  itemListRendered: shopItems.products.map((item) => item.id),
});

//export the store
export default store;
