import './MenuListGood.css';

export default function MenuListGood({ menuGood, handleAddToOrder }) {
  return (
    <div className="MenuListGood">
      <div className="emoji flex-ctr-ctr">{menuGood.emoji}</div>
      <div className="name">{menuGood.name}</div>
      <div className="buy">
        <span>${menuGood.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuGood._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}