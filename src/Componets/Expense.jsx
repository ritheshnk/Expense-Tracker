
import { useState } from "react";

export default function Expense({expense}) {
const [income, setIncome] = useState('');
const [reason, setReason] = useState('');
const [amount, setAmount] = useState('');
    return (
        <>

            

            <div className="flex flex-col w-full items-center justify-center mt-4 gap-3">
                <div className="grid grid-cols-2 m-4 p-4 gap-4">
                        <div className=" text-center border-2 mx-auto p-4 m-4">
                             <h2 className="text-2xl md:text-3xl p-4 m-4">Expense Manager</h2>
                            <p className="text-left text-lg ml-8">Set your monthly Income</p>

                             <div className="m-4 p-4 flex  gap-4 justify-center items-center">
                                <input 
                                type="text" 
                                placeholder="Enter your income" 
                                className="bg-black text-white border-0 border-b border-white focus:outline-none focus:ring-0"
                                value={income}
                                onChange={ e=> setIncome(e.target.value)}
                            />
                            <button className=" ml-7 p-4 border-2 border-white" onClick={() => console.log(income)}>
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
                                <span>15000</span>
                            </div>
                            <div className="flex flex-col  mx-2 p-2">
                                <span className="m-2 p-2 ">Balance</span>
                                <span>15000</span>
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
                            <input value={reason}  onChange={e=> setReason(e.target.value)} type="text" className="mx-2 my-4 p-4 border-0 border-b border-white focus:outline-none focus:ring-0 bg-black text-white" placeholder="Enter expense title" />
                            <input value={amount}  onChange={e=> setAmount(e.target.value)} type="text" className="mx-2 my-4 p-4 border-0 border-b border-white focus:outline-none focus:ring-0 bg-black text-white"  placeholder="Enter expense amount" />
                            <button className=" m-2 p-4 border-2 border-white items-center justify-center" onClick={()=>{ console.log(reason, amount)}}>Add Expense</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className="text-xl md:text-2xl p-4 m-2">History</h2>
                    </div>
                    <div>
                        <span className="text-left text-xl">{reason+" "+amount}</span>
                    </div>
                </div>
            </div>
        
        </>
        
    );
}