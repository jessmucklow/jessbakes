import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as goodsAPI from '../../utilities/goods-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
// import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuGoods, setMenuGoods] = useState([]);
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getGoods() {
      const goods = await goodsAPI.getAll();
      categoriesRef.current = [...new Set(goods.map(good => good.category.name))];
      setMenuGoods(goods);
    }
    getGoods();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // an empty dependency array causes the effect
  // to run once after the first render only

  /*--- Event Handlers ---*/

  async function handleAddToOrder(goodId) {
    // 1. Call the addGoodToCart function in ordersAPI, passing to it the goodId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addGoodToCart(goodId);
    // 2. Update the cart state with the updatedCart received from the server
    setCart(updatedCart);
  }
}