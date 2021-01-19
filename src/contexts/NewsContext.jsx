import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { CATEGORIES_API, CURRENCY_API, NEWS_API } from '../helpers/const';

export const newsContext = createContext()

const INIT_STATE = {
  news: [],
  economicsNews: [],
  currencies: [],
  categories: []
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, news: action.payload }
    case "GET_ECONOMICS_NEWS":
      return { ...state, economicsNews: action.payload }
    case "GET_CURRENCY":
      return { ...state, currencies: action.payload }
    case "GET_CATEGORIES":
      return {...state, categories: action.payload}
    default:
      return { state }
  }
}

const NewsContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  async function getCurrency() {
    const { data } = await axios(`${CURRENCY_API}`)
    var convert = require('xml-js');
    let xml = data
    let result2 = convert.xml2json(xml, { compact: false, spaces: 0 });
    let res3 = JSON.parse(result2)
    let { elements: [first] } = res3
    let array = first.elements
    dispatch({
      type: "GET_CURRENCY",
      payload: array
    })
  }

  async function getNews() {
    const { data } = await axios(`${NEWS_API}/posts`)
    dispatch({
      type: "GET_NEWS",
      payload: data
    })
  }

  async function getEconomicsNews() {
    const { data } = await axios(`${NEWS_API}/posts/?category=3&title_post=`)
    dispatch({
      type: "GET_ECONOMICS_NEWS",
      payload: data
    })
  }

  async function getCategories() {
    const { data } = await axios(`${CATEGORIES_API}`)
    dispatch({
      type: "GET_CATEGORIES",
      payload: data
    })
  }

  return (
    <newsContext.Provider value={{
      news: state.news,
      economicsNews: state.economicsNews,
      currencies: state.currencies,
      categories: state.categories,
      getNews,
      getEconomicsNews,
      getCurrency,
      getCategories
    }}>
      {children}
    </newsContext.Provider>
  );
};

export default NewsContextProvider;