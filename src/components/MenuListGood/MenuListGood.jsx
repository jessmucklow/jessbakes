import './MenuListGood.css';

export default function MenuListGood({ menuGoods, handleAddToOrder }) {
  return (
    <div className="MenuListGood">
      <div className="emoji flex-ctr-ctr">{menuGoods.emoji}</div>
      <div className="name">{menuGoods.name}</div>
      <div className="buy">
        <span>${menuGoods.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuGoods._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}