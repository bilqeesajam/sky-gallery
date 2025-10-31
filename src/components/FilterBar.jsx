import './Styling/FilterBar.css';

export default function FilterBar({ selected, onSelect }) {
  const filters = ['all', 'misc', 'taker', 'sal', 'ari', 'yaya'];

  return (
    <div className="filter-bar">
      {filters.map(f => (
        <button
          key={f}
          className={f === selected ? 'active' : ''}
          onClick={() => onSelect(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
