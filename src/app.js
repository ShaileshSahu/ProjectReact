import React, {useState} from "react";
import "./index.css";
import "./styles/button.css";
import "./styles/theme.css";
import RightSection from "./components/rightsection/rightsection.component";
import Toast from './components/sharedcomponents/toast.component';
export const ToastContext = React.createContext();

const App = () => {
		const [toastParams, setToastParams] = useState({show: false});

	return (
		<ToastContext.Provider value={{toastParams,setToastParams}}>
			<Toast/>
			<section className="container">
				<RightSection />
			</section>
		</ToastContext.Provider>
	);
};

export default App;
