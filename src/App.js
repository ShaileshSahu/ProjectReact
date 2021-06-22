import React, {useState} from "react";
import "./index.css";
import LeftSection from "./components/leftsection/leftsection.component";
import RightSection from "./components/rightsection/rightsection.component";
import Toast from './components/sharedcomponents/toast.component';

export const ToastContext = React.createContext();

const App = () => {
		const [toastParams, setToastParams] = useState({show: false});

	return (
		<ToastContext.Provider value={{toastParams,setToastParams}}>
			<Toast/>
			<section className="container">
			
				<LeftSection />
				<RightSection />
			</section>
		</ToastContext.Provider>
	);
};

export default App;
