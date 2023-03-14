import React from "react";
import "./App.scss";
import { TranslatorProvider } from "./provider/TranslatorProvider";
import { Text } from "./components/Text";

export const App = () => {
	return (
		<TranslatorProvider>
			<Text />
		</TranslatorProvider>
	);
};
