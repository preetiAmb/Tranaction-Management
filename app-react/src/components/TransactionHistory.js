import React, { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

const TransactionHistory = () => {
  const { transactionsHistory } = useContext(TransactionsContext);

  const storedTransaction = localStorage.getItem("transactionsHistory");

  const transactionObj = JSON.parse(storedTransaction) || [];

  return (
    <>
      <h4 className="mb-3">Transaction amount (deposit)</h4>
      {transactionObj &&
      transactionObj.account_id &&
      transactionObj.to_account_id &&
      transactionObj.amount >= 0 ? (
        <div>
          {" "}
          <span className="mr-4">
            Transferred: {transactionObj.amount}Kr to account
          </span>
          <span className="mx-2">
            {transactionObj.to_account_id} from account
          </span>
          <span className="mx-2"> {transactionObj.account_id}</span>
        </div>
      ) : (
        <p>No transaction history available.</p>
      )}
    </>
  );
};

export default TransactionHistory;
