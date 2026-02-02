import { useState } from "react";

export default function Expense() {
    const [incomeInput, setIncomeInput] = useState('');
    const [income, setIncome] = useState(0);
    const [reason, setReason] = useState('');
    const [amount, setAmount] = useState('');
    const [transactions, setTransactions] = useState([]);

    const handleSetIncome = () => {
        const val = parseFloat(incomeInput);
        if (!isNaN(val) && val > 0) {
            setIncome(val);
            setIncomeInput(''); // Optional: clear input or keep it? Keeping logic simple for now.
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
                <div className="grid grid-cols-2 m-4 p-4 gap-4">
                    <div className=" text-center border-2 mx-auto p-4 m-4">
                        <h2 className="text-2xl md:text-3xl p-4 m-4">Expense Manager</h2>
                        <p className="text-left text-lg ml-8">Set your monthly Income</p>

                        <div className="m-4 p-4 flex  gap-4 justify-center items-center">
                            <input
                                type="number"
                                placeholder="Enter your income"
                                className="bg-black text-white border-0 border-b border-white focus:outline-none focus:ring-0"
                                value={incomeInput}
                                onChange={e => setIncomeInput(e.target.value)}
                            />
                            <button className=" ml-7 p-4 border-2 border-white" onClick={handleSetIncome}>
                                Set Income
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-row  items-center justify-center border-2 m-4 p-4">
                        <div className="m-4 p-4 flex flex-row">
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

                        <div className=" flex flex-row justify-center">
                            <input value={reason} onChange={e => setReason(e.target.value)} type="text" className="mx-2 my-4 p-4 border-0 border-b border-white focus:outline-none focus:ring-0 bg-black text-white" placeholder="Enter expense title" />
                            <input value={amount} onChange={e => setAmount(e.target.value)} type="number" className="mx-2 my-4 p-4 border-0 border-b border-white focus:outline-none focus:ring-0 bg-black text-white" placeholder="Enter expense amount" />
                            <button className=" m-2 p-4 border-2 border-white items-center justify-center" onClick={handleAddExpense}>Add Expense</button>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-2xl">
                    <div>
                        <h2 className="text-xl md:text-2xl p-4 m-2">History</h2>
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
