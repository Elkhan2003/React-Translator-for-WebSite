import React, { useContext, useEffect, useState } from "react";
import { TranslatorContext } from "../provider/TranslatorProvider";
import "./Text.scss";

export const Text = () => {
	const { t, changeLanguage } = useContext(TranslatorContext);
	const [currentLanguage, setCurrentLanguage] = useState(
		localStorage.getItem("i18nextLng") || navigator.language
	);

	const handleLanguageChange = (lang) => {
		changeLanguage(lang);
		setCurrentLanguage(lang);
		localStorage.setItem("i18nextLng", lang);
	};

	const isLanguage = (lang) => {
		return currentLanguage.startsWith(lang);
	};

	useEffect(() => {
		// Update the language when the component mounts
		changeLanguage(currentLanguage);
	}, []);

	return (
		<>
			<div className="text__fsefer">
				<button
					onClick={() => handleLanguageChange("en")}
					className={isLanguage("en") ? "button active" : "button"}>
					EN
				</button>
				<button
					onClick={() => handleLanguageChange("ru")}
					className={isLanguage("ru") ? "button active" : "button"}>
					RU
				</button>
				<button
					onClick={() => handleLanguageChange("cn")}
					className={isLanguage("cn") ? "button active" : "button"}>
					CN
				</button>
				<div>{t("text")}</div>
				<div>{t("hello")}</div>
			</div>
		</>
	);
};
