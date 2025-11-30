import './FilterButtons.css'

const FilterButtons = ({ filter, setFilter, categories }) => {
  const categoryLabels = {
    all: 'All',
    nature: 'Nature',
    architecture: 'Architecture',
    people: 'People'
  }

  return (
    <div className="filter-buttons">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${filter === category ? 'active' : ''}`}
          onClick={() => setFilter(category)}
          aria-label={`Filter by ${categoryLabels[category]}`}
        >
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons

