import React from 'react';
import { IShoeDetails } from '../static/shoedata';
import styles from '../App.module.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Item: React.FC<{ shoe: IShoeDetails, idx: number }> = ({ shoe, idx }) => {
  return (
    <Link to={`/products/${idx}`} className={styles.link} key={idx}>
      <div className={styles.item}>
        <LazyLoadImage className={styles.img} src={shoe.img} alt={shoe.name} effect="blur" />
        <p>{shoe.name}</p>
        <p className={styles.bolded}>{shoe.cost}</p>
      </div>
    </Link>
  );

}
export default Item;