import ExpanseInput from './ExpanseInput';
import ExpanseHistory from './ExpanseHistory';
import IncomeExpanse from './IncomeExpanse';
import Balance from './Balance';

function ContextExpanseTracker() {





    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="w-2/5 p-5 flex flex-col items-center justify-center gap-1.5 rounded-xl border shadow-xl">
                <Balance />
                {/* Income / Expense Cards */}
                <IncomeExpanse />

                {/* Add Transaction Form */}
                <ExpanseInput />

                {/* Transactions Table */}
                <ExpanseHistory />
            </div>
        </div>
    )
}

export default ContextExpanseTracker;
