import type { Category } from '../api/shopApi';
import '../styles/categoryList.css';

interface Props {
  categories: Category[];
  selected: number;
  onSelect: (id: number) => void;
}

export default function CategoryList({ categories, selected, onSelect }: Props) {
  return (
    <div className="category-list">
      {categories.map((cat) => (
        <div key={cat.id} onClick={() => onSelect(cat.id)} className={`category-item ${selected === cat.id ? 'selected' : ''}`}>
          <img src={cat.image_url} alt={cat.name} />
          <div>{cat.name}</div>
        </div>
      ))}
    </div>
  );
}
