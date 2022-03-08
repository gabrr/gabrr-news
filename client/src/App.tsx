import React from 'react';
import { Routes } from 'routes'
import { AppContextProvider } from 'contexts';

const App = () => (
	<AppContextProvider>
		<Routes />
	</AppContextProvider>
)

export default App;
