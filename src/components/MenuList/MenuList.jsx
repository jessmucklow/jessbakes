import './MenuList.css';
import MenuListGood from '../MenuListGood/MenuListGood';

export default function MenuList({ menuGoods, handleAddToOrder }) {
  const good = menuGoods.map(good =>
    <MenuListGood
      key={good._id}
      menuGoods={good}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      { good }
    </main>
  );
}