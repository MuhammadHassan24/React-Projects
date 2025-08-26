import React from 'react'
import ExpanseBalance from './ExpanseBalance'
import ExpanseInput from './ExpanseInput'
import IncomeExpanse from './ExpanseIncome'
import ExpanseHistory from './ExpanseList'

function Tracker() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="w-2/5 p-5 flex flex-col items-center justify-center gap-1.5 rounded-xl border shadow-xl">
                <ExpanseBalance />
                <IncomeExpanse />
                <ExpanseInput />
                <ExpanseHistory />
            </div>
        </div>
    )
}

export default Tracker
