import styles from './LineGame.module.scss';

export default function LineGame({ lineGame, isPaid, handleChangeQty }) {
return (
  <div className={styles.LineGame}>
    <div className="flex-ctr-ctr flex-col">
      <span className="align-ctr">{lineGame.game.name}</span>
      <span>{lineGame.game.price.toFixed(2)}</span>
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineGame.game._id, lineGame.qty - 1)}
        >−</button>
      }
      <span>{lineGame.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineGame.game._id, lineGame.qty + 1)}
        >+</button>
      }
    </div>
    <div className={styles.extPrice}>${lineGame.extPrice.toFixed(2)}</div>
  </div>
);
}