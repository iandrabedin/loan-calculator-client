import styles from './table.module.scss';

interface TableProps {
  offer: {
    principalAmount: number;
    interestAmount: number;
    totalAmount: number;
    dueDate: string;
  };
}

export const Table = (props: TableProps) => {
  const {offer} = props;

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>Amount requested</td>
          <td>{offer.principalAmount}</td>
        </tr>
        <tr>
          <td>Interest</td>
          <td>{offer.interestAmount}</td>
        </tr>
        <tr>
          <td>Return date</td>
          <td>{offer.dueDate}</td>
        </tr>
        <tr>
          <td>Total to repay</td>
          <td>{offer.totalAmount}</td>
        </tr>
      </tbody>
    </table>
  );
};
