import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((product) => {
        return product.price;
      });
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: {
          ...state.filters,
          price: maxPrice,
          maxPrice: maxPrice,
        },
      };

    case SET_GRIDVIEW:
      return {
        ...state,
        gridView: true,
      };

    case SET_LISTVIEW:
      return {
        ...state,
        gridView: false,
      };

    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];

      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
          // return current.price - next.price;
        });
      }

      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((current, next) => {
          return next.price - current.price;
        });
      }

      if (sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }

      if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return {
        ...state,
        filteredProducts: tempProducts,
      };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case FILTER_PRODUCTS:
      const { allProducts } = state;
      const { text, category, company, color, price, shipping } = state.filters;

      let tempProductsFilter = [...allProducts];
      // filtering
      // text
      if (text) {
        tempProductsFilter = tempProductsFilter.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }
      // category
      if (category !== 'all') {
        tempProductsFilter = tempProductsFilter.filter((product) => {
          return product.category === category;
        });
      }
      // company
      if (company !== 'all') {
        tempProductsFilter = tempProductsFilter.filter((product) => {
          return product.company === company;
        });
      }
      // color
      if (color !== 'all') {
        tempProductsFilter = tempProductsFilter.filter((product) => {
          return product.colors.find((productColor) => productColor === color);
        });
      }
      // price
      tempProductsFilter = tempProductsFilter.filter((product) => {
        return product.price <= price;
      });

      // shipping
      if (shipping) {
        tempProductsFilter = tempProductsFilter.filter((product) => {
          return product.shipping === true;
        });
      }

      return {
        ...state,
        filteredProducts: tempProductsFilter,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          price: state.filters.maxPrice,
          shipping: false,
        },
      };

    default:
      break;
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
