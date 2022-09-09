import React from 'react';
import { IShoeDetails } from '../shoedata';
import styles from '../App.module.css';
import { Link } from 'react-router-dom';

const Item: React.FC<{ shoe: IShoeDetails }> = ({ shoe }) => {
  return (
    <Link to={`/products/${shoe.id}`} className={styles.link}>
      <div className={styles.item}>
        <img src={shoe.img} alt={shoe.name} />
        <p>{shoe.name}</p>
        <p className={styles.bolded}>{shoe.cost}</p>
      </div>
    </Link>
  );

}
export default Item;