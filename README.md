# Shopping Item MST Task

![Project Image]
<img src="public\Shopping Item MST task 2022-01-28 .png" >

> Shopping Item List that allow filter and sort using Mobx state tree
> <br/>
> Demo Url: https://hellosivi-mst-task.netlify.app/

---

### Table of Contents

You're sections headers will be used to reference location of destination.

- [Description](#description)
- [Approach](#approach)
- [Mobx-state-tree](#mobx-state-tree)
- [Technologies](#technologies)
- [Additional Packages](#additional-packages)
- [How To Use](#how-to-use)
- [Author Info](#author-info)

---

## Description

This Project Provides a navbar on top that has three dropdowns to filter the list using "Category", "Rating", "Price" one dropdown to sort items using "Category", "Name", "Price".
The filters are independent of one another and selecting any filter dropdown will give results only for that particular filter from mail JSON data stored.

## Approach

In this project I have used "react-bootstrap "and "material UI" to give design and resposivness.<br/>
Mobx-state-tree is used to define app state as two arrays.<br/>
One Array has all the items that will be rendered and another array will have a reference to first array and will be rendered in screen as cards in Grid Layout.<br/>
Actions are defined in shopItemsModel to filter itemListRendered that will be Displayed Each action will have a value that is checked and conditionally updates itemListRendered.
<br/>
An Action is defined to sort elements based on value provided which let the action identify the field to sort and it sorts both the array. Both arrays are sorted so RenderCard listen and update immediately and multiple renders does not change the sorting order
<br/>
RenderCard component listens to changes in itemListRendered using observer from "mobx-react-lite" and renders the Items

<a href="#">Back To The Top</a>

---

## Mobx-state-tree

"Mobx" Mobx-react-lite "mobx-state-tree" are the packages used to manage state in this project.<br/>
<b>Mobx-state-tree</b> gives structure MobX which is a state management "engine". It supports a full set of features for a modern state management system -- all in a package with zero dependencies other than MobX itself.
<br/>
It has a centralized store for all data in app and lets us mutate data using actions.
<br/>
It has built in support for refernces so data will be normalized across app but Developers can use the data in a denormalized way.
<br/>
It gives Strong Schema and throws exception if the Model is not matched and helps in debugging
<br/>
MST works great in vanilla JS and with a lot of popular JavaScript Frameworks (e.g: React, Vue, React Native)
<br/>

<a href="#">Back To The Top</a>

---

### Technologies

- HTML, CSS
- Javascript
- React

## Additional Packages

- @mui/material
- bootstrap
- react-bootstrap
- mobx-react-lite
- mobx
- mobx-state-tree

<a href="#">Back To The Top</a>

---

## How To Use

#### Installation

- npm install
- npm start

<a href="#">Back To The Top</a>

---

## Author Info

- E-mail - dvigneshkumar3@gmail.com
- LinkdedIn - https://www.linkedin.com/in/vignesh-kumar-d-959a44146/

<a href="#">Back To The Top</a>
