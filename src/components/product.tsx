import React from 'react';

import { useParams } from 'react-router-dom';

import styles from '../App.module.css';
import cx from 'classnames'

import { ShoesDetails } from '../shoedata';

function Product() {

  const { id } = useParams();

  const shoe = ShoesDetails[Number(id)]

  if (!shoe) {
    return <h2>Product not found....</h2>
  }

  return (<div className={cx(styles.grid, styles.margined)}>
    <div className={styles.item}>
      <h2>{shoe.name}</h2>
      <img height={100} src={shoe.img} alt={shoe.name} />
    </div>
    <div>
      <p className={styles.paragraph}>{shoe.description}</p>
      <p className={cx(styles.paragraph, styles.bolded)}>{shoe.cost}</p>
    </div>
  </div>);
}

export default Product;
