import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as goodsAPI from '../../utilities/goods-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import MenuList from '../../components/MenuList/MenuList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function NewOrderPage({ user, setUser }) {
  const [menuGoods, setMenuGoods] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function() {
    async function getGoods() {
      const goods = await goodsAPI.getAll();
      setMenuGoods(goods);
    }
    getGoods();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(goodId) {
    const updatedCart = await ordersAPI.addGoodToCart(goodId);
    setCart(updatedCart);
  }
  async function handleChangeQty(goodId, newQty) {
    const updatedCart = await ordersAPI.setGoodQtyInCart(goodId, newQty);
    setCart(updatedCart);
  }

  return (
    <main className="NewOrderPage">
      <MenuList
        handleAddToOrder={handleAddToOrder} menuGoods={menuGoods}
      />
      {/* <aside>
        <Link to="/orders/cart" className="button btn-sm">cart</Link>
      </aside> */}
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
      />
    </main>
  );
}