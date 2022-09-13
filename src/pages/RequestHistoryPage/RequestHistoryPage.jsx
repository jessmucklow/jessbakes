import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './RequestHistoryPage.css';
import OrderDetailHistory from '../../components/OrderDetailHistory/OrderDetailHistory';
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
      <OrderList
        orders={orders}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
      <OrderDetailHistory order={selectedOrder} />
    </main>
  );
}