import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './OrderDetail.css';
import LineGood from '../LineGood/LineGood';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  const form = useRef();
  const [startDate, setStartDate] = useState(new Date());
  if (!order) return null;

  const lineGoods = order.lineGoods.map(good =>
    <LineGood
      lineGood={good}
      requestedOrder={order.requestedOrder}
      handleChangeQty={handleChangeQty}
      handleCheckout={handleCheckout}
      key={good._id}
    />
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_81o3piv', 'template_hwi37wd', form.current, '9O3H9k-z6K9vCtHVE')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const lines = order.lineGoods.map(lg => `Good: ${lg.good.name} / Qty: ${lg.qty}\n`).join('');

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.requestedOrder}
        <span>NEW ORDER</span>
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-good-container flex-ctr-ctr flex-col scroll-y">
        {lineGoods.length ?
          <>
            <form ref={form} onSubmit={sendEmail}>
              <span>{lineGoods}</span>
              <br />
              <input type="hidden" name="lineGoods" style={{height: 0}} defaultValue={lines} />

              <section className="total">
                {order.requestedOrder ?
                  <span className="right">TOTAL&nbsp;&nbsp;</span>
                  :
                  <button
                    className="btn-sm"
                    type="submit"
                    onClick={handleCheckout}
                    disabled={!lineGoods.length}
                  >Request Order</button>
                }
                <span>{order.totalQty}</span>
                <span className="right">${order.orderTotal.toFixed(2)}</span>
              </section>
              <br />
              <textarea name="order_notes" placeholder='Any add-ons or customizations go here' cols="20" rows="8"></textarea>
              <br />
              <span>When would you like this ready by?</span>
              <br />
              <DatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
            </form>
          </>
          :
          <div className="hungry">🛒</div>
        }
      </div>
    </div>
  );
}