import './OrderDetail.css';
import LineGood from '../LineGood/LineGood';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
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


  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.requestedOrder ?
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
            <textarea name="custom" placeholder='Any add-ons or customizations go here' cols="20" rows="8"></textarea>          </>
          :
          <div className="hungry">🛒</div>
        }
      </div>
    </div>
  );
}