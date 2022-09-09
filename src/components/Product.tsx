import React from 'react';

import { useParams } from 'react-router-dom';
import cx from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from '../App.module.css';

import { ShoesDetails } from '../static/shoedata';

const Product = () => {

  const { id } = useParams();

  const shoe = ShoesDetails[Number(id)]

  if (!shoe) {
    return <h2>Product not found....</h2>
  }

  return (<div className={cx(styles.grid, styles.margined)}>
    <div className={styles.item}>
      <h2>{shoe.name}</h2>
      <LazyLoadImage className={styles.img} src={shoe.img} alt={shoe.name} effect="blur" />
    </div>
    <div>
      <p className={styles.paragraph}>{shoe.description}</p>
      <p className={cx(styles.paragraph, styles.bolded)}>{shoe.cost}</p>
    </div>
  </div>);
}

export default Product;
