import { useRef, useState } from 'react';

import './ListHeader.scss';

function ListHeader({ filterChange, count }) {
  const filterRef = useRef();
  const [allSelect, setAllSelect] = useState(true);

  /**
   * Send the latest filter data to parent component
   * @param {*} event - Filter change event
   */
  const onFilterChange = (event) => {
    const selectedOption = event.target.dataset.filter;
    const options = [...filterRef.current.children];
    for (const option of options) {
      if (selectedOption === 'all') {
        if (option.dataset.filter !== 'all') {
          option.classList.remove('active');
        } else {
          option.classList.add('active');
          setAllSelect(true);
        }
      } else if (selectedOption === option.dataset.filter) {
        if (option.classList.contains('active')) {
          option.classList.remove('active');
        } else {
          option.classList.add('active');
        }
        setAllSelect(false);
      } else if (option.dataset.filter === 'all') {
        option.classList.remove('active');
        setAllSelect(false);
      }
    }
    const opt = options.filter((option) => option.classList.contains('active'));
    const mapFilterData = opt.map((data) => data.dataset.filter);
    filterChange(mapFilterData);
  };
  return (
    <div className="control-header">
      <h2>{(allSelect ? 'All Products' : 'Others') + ` (${count})`}</h2>
      <div className="filter">
        <span>FILTERS:</span>
        <div onClick={onFilterChange} ref={filterRef} className="filterlist">
          <div data-filter="all" className="active">
            All Products
          </div>
          <div data-filter="T-shirt">Tee Shirt</div>
          <div data-filter="Denim">Denim</div>
          <div data-filter="Sweatshirts">Sweatshirts</div>
          <div data-filter="polo">Polo Tee Shirt</div>
          <div data-filter="shirt">Shirt</div>
        </div>
      </div>
      <div className="sortlist"></div>
    </div>
  );
}

export default ListHeader;
