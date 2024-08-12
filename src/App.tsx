import React, { useState } from 'react';
import DataTable from './components/DataTable';
import { data } from './data';
import './index.css';
import LoginForm from './types/LoginForm';

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [waiting, setWaiting] = useState(false);
	const [attemptCount, setAttemptCount] = useState(0);

	const handleLogin = (username: string, password: string) => {
		const correctUsername = 'AdminPersonel';
		const correctPassword = 'Victory123';

		if (waiting) {
			setErrorMessage('Please wait before trying again.');
			return;
		}

		if (attemptCount >= 3) {
			setErrorMessage('Maximum attempts reached. Please try again in 15 minutes.');
			setWaiting(true);
			setTimeout(() => {
				setWaiting(false);
				setAttemptCount(0);
				setErrorMessage('');
			}, 15 * 60 * 1000);
			return;
		}

		if (username === correctUsername && password === correctPassword) {
			setIsAuthenticated(true);
			setErrorMessage('');
		} else {
			setAttemptCount((prevCount) => prevCount + 1);
			setErrorMessage(`Invalid credentials. ${3 - attemptCount - 1} attempt(s) remaining.`);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-primary text-font">
			{isAuthenticated ? (
				<div className="w-full lg:w-3/4 md:w-5/6 sm:w-11/12 px-4">
					<div className="overflow-x-auto overflow-y-auto max-h-screen">
						<DataTable
							data={data}
							searchBar
							excelExport
							pageSizeControl
							pagination
							removableRows
						/>
					</div>
				</div>
			) : (
				<div className="w-full lg:w-1/3 md:w-1/2 sm:w-3/4 px-4">
					<h2 className="text-xl font-semibold mb-4">Test the Application</h2>
					<p className="mb-4">
						Use the following credentials to log in and explore the features:
					</p>
					<ul className="mb-4">
						<li><strong>Username:</strong> AdminPersonel</li>
						<li><strong>Password:</strong> Victory123</li>
					</ul>
					<LoginForm onLogin={handleLogin} errorMessage={errorMessage} />
				</div>
			)}
		</div>
	);
};

export default App;
