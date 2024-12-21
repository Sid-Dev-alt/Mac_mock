import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MacBookProPage = () => {
  const [selectedSize, setSelectedSize] = useState('14" MacBook Pro');
  const [selectedChip, setSelectedChip] = useState('All chips');

  const macbooks = [
    { id: 1, size: '14"', chip: 'M4', color: 'Space Black' },
    { id: 2, size: '14"', chip: 'M4 Pro', color: 'Space Black' },
    { id: 3, size: '14"', chip: 'M4 Max', color: 'Space Black' },
    { id: 4, size: '16"', chip: 'M4', color: 'Space Black' },
    { id: 5, size: '16"', chip: 'M4 Pro', color: 'Space Black' },
    { id: 6, size: '16"', chip: 'M4 Max', color: 'Space Black' },
  ];

  const filteredMacbooks = macbooks.filter((macbook) => {
    return (
      (selectedSize.includes(macbook.size) || selectedSize === 'All') &&
      (macbook.chip === selectedChip || selectedChip === 'All chips')
    );
  });

  return (
    <div className="container text-center mt-5">
      <h1>Choose your new MacBook Pro.</h1>
      <p>
        Have questions about buying a Mac? <a href="#">Chat with a Mac Specialist</a>
      </p>

      {/* Size Selection */}
      <div className="btn-group mb-4" role="group">
        <button
          className={`btn btn-outline-primary ${selectedSize === '14" MacBook Pro' ? 'active' : ''}`}
          onClick={() => setSelectedSize('14" MacBook Pro')}
        >
          14" MacBook Pro
        </button>
        <button
          className={`btn btn-outline-primary ${selectedSize === '16" MacBook Pro' ? 'active' : ''}`}
          onClick={() => setSelectedSize('16" MacBook Pro')}
        >
          16" MacBook Pro
        </button>
      </div>

      {/* Chip Filter */}
      <div className="mb-4">
        <button
          className={`btn btn-outline-secondary ${selectedChip === 'All chips' ? 'active' : ''}`}
          onClick={() => setSelectedChip('All chips')}
        >
          All chips
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedChip === 'M4' ? 'active' : ''}`}
          onClick={() => setSelectedChip('M4')}
        >
          M4
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedChip === 'M4 Pro' ? 'active' : ''}`}
          onClick={() => setSelectedChip('M4 Pro')}
        >
          M4 Pro
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedChip === 'M4 Max' ? 'active' : ''}`}
          onClick={() => setSelectedChip('M4 Max')}
        >
          M4 Max
        </button>
      </div>

      {/* MacBook Cards */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {filteredMacbooks.map((macbook) => (
          <div className="col" key={macbook.id}>
            <div className="card h-100">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295"
                className="card-img-top"
                alt="MacBook"
              />
              <div className="card-body">
                <h5 className="card-title">{macbook.size} - {macbook.chip}</h5>
                <p className="card-text">Color: {macbook.color}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MacBookProPage;
