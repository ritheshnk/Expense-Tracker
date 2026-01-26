import React from "react";

export default function NavBar() {
    return (
        <>
            <nav className="mx-auto flex w-full max-w-4xl  justify-center items-center gap-6 p-4">
                <h2 className="text-lg font-mono hover:text-yellow-500 hover:text-xl transition-all duration-300">Expense Tracker</h2>

                <ul className="ml-auto flex gap-4 items-center ">
                    <li><a href="#" className="hover:text-yellow-500">Expenses</a></li>
                    <li><a href="#" className="hover:text-yellow-500">About</a></li>
                    <li><a href="#" className="hover:text-yellow-500">Refresh</a></li>
                </ul>
            </nav>
        </>
    )
}