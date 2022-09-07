import OrderListGood from '../OrderListGood/OrderListGood';
import './OrderList.css';

export default function OrderList({ orders, selectedOrder, setSelectedOrder }) {
  const orderListGoods = orders.map(o =>
    <OrderListGood
      order={o}
      isSelected={o === selectedOrder}
      setSelectedOrder={setSelectedOrder}
      key={o._id}
    />
  );
  return (
    <main className="OrderList">
      {orderListGoods}
    </main>
  );
}