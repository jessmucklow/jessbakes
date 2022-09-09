import { useState } from "react";
import './OrderDetail.css';
import LineGood from '../LineGood/LineGood';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty }) {
  if (!order) return null;

  const lineGoods = order.lineGoods.map(good =>
    <LineGood
      lineGood={good}
      requestOrder={order.requestOrder}
      handleChangeQty={handleChangeQty}
      key={good._id}
    />
  );
  
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.requestOrder ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-good-container flex-ctr-ctr flex-col scroll-y">
        {lineGoods.length ?
          <>
            {lineGoods}
            <section className="total">
              {order.requestOrder ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  // onClick={}
                  disabled={!lineGoods.length}
                >Request Order</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </>
          :
          <div className="hungry">🛒</div>
        }
      </div>
    </div>
  );
}