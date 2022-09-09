import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import './RequestHistoryPage.css';
import NavBar from '../../components/NavBar/NavBar';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';

export default function RequestHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setOrders(orders);
      setSelectedOrder(orders[0]);
    }
    getOrders();
  }, []);

  return (
    <main className="RequestHistoryPage">
      <aside>
       <NavBar />
        <Link to="/orders/new" className="button btn-sm">New Request</Link>
      </aside>
      {/* Render an OrderList component (needs to be coded) */}
      <OrderList
        orders={orders}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
      {/* Render the existing OrderDetail component */}
      <OrderDetail order={selectedOrder} />
    </main>
  );
}