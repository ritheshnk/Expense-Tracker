import { useState, useEffect } from "react";

export default function Expense() {
    // Initialize state from localStorage or defaults
    const [incomeInput, setIncomeInput] = useState('');
    const [reason, setReason] = useState('');
    const [amount, setAmount] = useState('');

    // Lazy initialization for income
    const [income, setIncome] = useState(() => {
        const savedIncome = localStorage.getItem('expense_income');
        return savedIncome ? parseFloat(savedIncome) : 0;
    });

    // Lazy initialization for transactions
    const [transactions, setTransactions] = useState(() => {
        const savedTransactions = localStorage.getItem('expense_transactions');
        return savedTransactions ? JSON.parse(savedTransactions) : [];
    });

    // Save to localStorage whenever income changes
    useEffect(() => {
        localStorage.setItem('expense_income', income);
    }, [income]);

    // Save to localStorage whenever transactions change
    useEffect(() => {
        localStorage.setItem('expense_transactions', JSON.stringify(transactions));
    }, [transactions]);

    const handleSetIncome = () => {
        const val = parseFloat(incomeInput);
        if (!isNaN(val) && val > 0) {
            setIncome(val);
            setIncomeInput('');
        }
    };

    const handleAddExpense = () => {
        const val = parseFloat(amount);
        if (reason.trim() !== '' && !isNaN(val) && val > 0) {
            const newTransaction = {
                id: Date.now(),
                reason: reason,
                amount: val
            };
            setTransactions([...transactions, newTransaction]);
            setReason('');
            setAmount('');
        }
    };


    const totalExpenses = transactions.reduce((acc, curr) => acc + curr.amount, 0);
    const balance = income - totalExpenses;

    return (
        <>
            <div className="flex flex-col w-full items-center justify-center mt-4 gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 m-2 md:m-4 p-2 md:p-4 gap-4 w-full max-w-6xl">
                    <div className=" text-center border-2 mx-auto p-4 m-4">
                        <h2 className="text-2xl md:text-3xl p-4 m-4">Expense Manager</h2>
                        <p className="text-left text-lg ml-8">Set your monthly Income</p>

                        <div className="m-2 p-2 md:m-4 md:p-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <input
                                type="number"
                                placeholder="Enter your income"
                                className="bg-black text-white border-0 border-b border-white focus:outline-none focus:ring-0 w-full sm:w-auto"
                                value={incomeInput}
                                onChange={e => setIncomeInput(e.target.value)}
                            />
                            <button className="p-2 md:p-4 border-2 border-white w-full sm:w-auto" onClick={handleSetIncome}>
                                Set Income
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-center border-2 m-2 p-2 md:m-4 md:p-4">
                        <div className="m-2 p-2 md:m-4 md:p-4 flex flex-col sm:flex-row w-full justify-around">
                            <div className="flex flex-col  mx-2 p-2">
                                <span className="m-2 p-2 ">Income</span>
                                <span>{income}</span>
                            </div>
                            <div className="flex flex-col  mx-2 p-2">
                                <span className="m-2 p-2">Expense</span>
                                <span>{totalExpenses}</span>
                            </div>
                            <div className="flex flex-col  mx-2 p-2">
                                <span className="m-2 p-2 ">Balance</span>
                                <span>{balance}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className="text-xl md:text-2xl p-4 m-2">Expenses</h2>
                    </div>

                    <div>
                        <span className="text-left text-xl sm:text-2xl">Add New Expense</span>

                        <div className=" flex flex-col md:flex-row justify-center items-center w-full">
                            <input value={reason} onChange={e => setReason(e.target.value)} type="text" className="mx-2 my-2 md:my-4 p-2 md:p-4 border-0 border-b border-white focus:outline-none focus:ring-0 bg-black text-white w-full md:w-auto" placeholder="Enter expense title" />
                            <input value={amount} onChange={e => setAmount(e.target.value)} type="number" className="mx-2 my-2 md:my-4 p-2 md:p-4 border-0 border-b border-white focus:outline-none focus:ring-0 bg-black text-white w-full md:w-auto" placeholder="Enter expense amount" />
                            <button className="m-2 p-2 md:p-4 border-2 border-white items-center justify-center w-full md:w-auto" onClick={handleAddExpense}>Add Expense</button>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-2xl">
                    <div className="flex justify-between items-center m-2">
                        <h2 className="text-xl md:text-2xl p-4">History</h2>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        {transactions.length > 0 ? (
                            transactions.map((t) => (
                                <div key={t.id} className="flex justify-between border-b border-gray-600 p-2">
                                    <span className="text-left text-xl">{t.reason}</span>
                                    <span className="text-right text-xl">{t.amount}</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400">No expenses added yet.</p>
                        )}
                    </div>
                </div>
            </div>

        </>

    );
}
