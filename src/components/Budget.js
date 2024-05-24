import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
 
        if (newBudget >= 20000) {
            alert("The Budget value cannot exceed £20000");
            return;
        }

        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });

    }

    return (

<div className='alert alert-secondary' style={{ height: '5' }}>
<span>
Budget: {currency}
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</span>
</div>
    );
};

export default Budget;

