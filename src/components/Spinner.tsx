import styles from './Spinner.module.css';

export default function SpinnerPage() {
  return (
    <div className={styles.shell}>
      <div className={styles['lds-roller']}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
