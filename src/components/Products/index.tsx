import React from 'react';

import styles from '../App.module.css';

import { ShoesDetails } from '../../static/shoedata';
import Item from '../Item';

const ProductItems = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Products</h1>
      <div className={styles.grid}>
        {ShoesDetails.map((shoe, idx) => <Item shoe={shoe} idx={idx} />)}
      </div>
    </div>
  );
}

export default ProductItems;
