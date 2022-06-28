import axios from 'axios';
import ExpensesSummary from '../components/expenses/ExpensesSummary';

const BACKEND_URL = 'https://con-expense-tracker-default-rtdb.firebaseio.com';

export const fetchExpenses = async () => {
	const response = await axios.get(`${BACKEND_URL}/expenses.json`);

	const expenses = [];

	for (const key in response.data) {
		const expenseObj = {
			expenseId: key,
			description: response.data[key].description,
			date: response.data[key].date,
			amount: response.data[key].amount
		};

		expenses.push(expenseObj);
	}

	return expenses;
};
