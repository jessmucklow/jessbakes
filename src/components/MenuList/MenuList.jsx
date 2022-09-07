import './MenuList.css';
import MenuListGood from '../MenuListGood/MenuListGood';

export default function MenuList({ menuGoods, handleAddToOrder }) {
  const goods = menuGoods.map(good =>
    <MenuListGood
      key={good._id}
      menuGood={good}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      { goods }
    </main>
  );
}