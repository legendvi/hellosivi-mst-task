//Model for all shop items that will be rendered in screen
//This also dispatches different actions which can be used to modify the state iTemsList Rendered
// import shopItems from "./shopItems";
import { types } from "mobx-state-tree";
import item from "./item";
const shopItemsModel = types
  .model("shopItems", {
    itemsList: types.array(item),
    itemListRendered: types.array(types.reference(item)),
    // reference type is used to store only Id of the array items and Mobx alows us to use it like a copy
  }) //all actions are defined below that allows to modify ItemList and ItemListRendered
  .actions((self) => ({
    //categoryHandler checks for value given and filters itemsListRendered based on category
    categoryHandler(value) {
      self.itemListRendered = self.itemsList.map((item) => item.id);
      if (value === "MC")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.category === "Mens Casualwear"
        );
      if (value === "WC")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.category === "Womens Casualwear"
        );
      if (value === "MF")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.category === "Mens Formalwear"
        );
      if (value === "WF")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.category === "Womens Formalwear"
        );
      if (value === "MFT")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.category === "Mens Footwear"
        );
      if (value === "WFT")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.category === "Womens Footwear"
        );
    },
    //ratingHandler checks for value given and filters itemsListRendered based on rating Range
    ratingHandler(value) {
      self.itemListRendered = self.itemsList.map((item) => item.id);
      if (value === "BelowFour")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.rating < 4
        );
      if (value === "UptoFourAndHalf")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.rating >= 4 && item.rating <= 4.5
        );
      if (value === "AboveFourAndHalf")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.rating > 4.5
        );
    },
    //priceHandler checks for value given and filters itemsListRendered based on price Range

    priceHandler(value) {
      self.itemListRendered = self.itemsList.map((item) => item.id);
      if (value === "UptoFifty")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.price <= 50
        );
      if (value === "UptoOneFifty")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.price > 50 && item.price <= 150
        );
      if (value === "AboveOneFifty")
        self.itemListRendered = self.itemListRendered.filter(
          (item) => item.price > 150
        );
    },
    //sortHandler sorts itemsListRendered & itemsList based on the value provided

    sortHandler(value) {
      if (value === "Category") {
        self.itemListRendered = self.itemListRendered.sort((a, b) =>
          a.category > b.category ? 1 : b.category > a.category ? -1 : 0
        );
        self.itemsList = self.itemsList.sort((a, b) =>
          a.category > b.category ? 1 : b.category > a.category ? -1 : 0
        );
      }
      if (value === "Name") {
        self.itemListRendered = self.itemListRendered.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        self.itemsList = self.itemsList.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      }
      if (value === "Price") {
        self.itemListRendered = self.itemListRendered.sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
        self.itemsList = self.itemsList.sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
      }
      if (value === "NoSort") {
        self.itemListRendered = self.itemListRendered.sort((a, b) =>
          +a.id > +b.id ? 1 : +b.id > +a.id ? -1 : 0
        );
        self.itemsList = self.itemsList.sort((a, b) =>
          +a.id > +b.id ? 1 : +b.id > +a.id ? -1 : 0
        );
      }
    },
  }));

export default shopItemsModel;
