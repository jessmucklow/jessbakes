import './LineGood.css';

export default function LineGood({ lineGood, requestOrder, handleChangeQty }) {
  return (
    <div className="LineGood">
      <div className="flex-ctr-ctr">{lineGood.good.emoji}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineGood.good.name}</span>
        <span>{lineGood.good.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: requestOrder && 'center' }}>
        {!requestOrder &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineGood.good._id, lineGood.qty - 1)}
          >−</button>
        }
        <span>{lineGood.qty}</span>
        {!requestOrder &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineGood.good._id, lineGood.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineGood.extPrice.toFixed(2)}</div>
    </div>
  );
}