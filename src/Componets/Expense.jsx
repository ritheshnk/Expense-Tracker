export default function Expense({expense}) {
    return (
        <div className="flex flex-col w-full items-center justify-center mt-4 gap-3">
            <div className=" text-center border-2 mx-auto p-4 m-4">
                <h2 className="text-2xl md:text-3xl p-4 m-4">Expense Manager</h2>
                <p className="text-left text-lg ml-8">Set your monthly Income</p>

                <div className="m-4 p-4 flex  gap-4 justify-center items-center">
                    <input 
                        type="text" 
                        placeholder="Enter your income" 
                        className="bg-black text-white border-0 border-b border-white focus:outline-none focus:ring-0"
                    />
                    <button className=" ml-7 p-4">
                        Set Income
                    </button>
                </div>
            </div>

            <div className="flex flex-row w-full items-center justify-center">
                <div className="flex flex-col  mx-2 p-2">
                    <span className="m-2 p-2 ">Income</span>
                    <span>30000</span>
                </div>
                <div className="flex flex-col  mx-2 p-2">
                    <span className="m-2 p-2 ">Expense</span>
                    <span>15000</span>
                </div>
                <div className="flex flex-col  mx-2 p-2">
                    <span className="m-2 p-2 ">Balance</span>
                    <span>15000</span>
                </div>
            </div>
        </div>
    );
}