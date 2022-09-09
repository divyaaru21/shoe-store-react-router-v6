import React from 'react';

import { Link } from 'react-router-dom';

import styles from '../App.module.css';

import { ShoesDetails } from '../shoedata';

function ProductItems() {

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Products</h1>
      <div className={styles.grid}>
        {ShoesDetails.map((shoe, idx) => (
          <Link to={`/products/${idx}`} className={styles.link}><div className={styles.item}>
            <img src={shoe.img} alt={shoe.name} />
            <p>{shoe.name}</p>
            <p className={styles.bolded}>{shoe.cost}</p>
          </div></Link>)
        )}
      </div>
    </div>
  );
}

export default ProductItems;
