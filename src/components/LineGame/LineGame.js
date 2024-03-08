import styles from './LineGame.module.scss'

export default function LineGame({ lineGame, isPaid, handleChangeQty,  }) {

return (
  <div className={styles.LineGame}>

    <div className="flex-ctr-ctr flex-col">
      <span className={styles.lineGameName}>{lineGame.game.name}</span>
      <span className={styles.lineGamePrice}>{lineGame.game.price.toFixed(2)}</span>
    </div>

    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className={styles.button}
          onClick={() => handleChangeQty(lineGame.game._id, lineGame.qty - 1)}
        >−</button>
      }
      <span className={styles.currentQty}>{lineGame.qty}</span>
      {!isPaid &&
        <button
          className={styles.button}
          onClick={() => handleChangeQty(lineGame.game._id, lineGame.qty + 1)}
        >+</button>
      }
    </div>

    <div className={styles.extPrice}>${lineGame.extPrice.toFixed(2)}</div>
  </div>
);
}