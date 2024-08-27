import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className="type">{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
// TransactionHistory.propTypes = {
//   id: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.string.isRequired,
// };

export default TransactionHistory;
