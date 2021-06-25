import React, {
	useContext
} from "react";
import { AiOutlineClose } from "react-icons/ai";

import {
	ToastContext
} from '../../app.js';
const Toast = () => {
		const {
			toastParams,
			setToastParams
		} = useContext(ToastContext);
		const primary = "#0083ff";
		const danger = "#f5273a";

		const warning = "#f28401";
		const success = "#5ab649";
		const todoStyle = {
			display: "inline",
			padding: "0.6rem",
			fontWeight: 600,
			opacity: 0.7,
			color: "white",
			position: "fixed",
			fontSize: "12.4px",
			background: "black",
			marginLeft: "80%",
		};

		setTimeout(() => {
			setToastParams({
				show: false
			})
		}, 8000);
		switch (toastParams.type) {
			case "success": {
				todoStyle.background = success;
				break;
			}
			case "danger": {
				todoStyle.background = danger;
				break;
			}
			case "warning": {
				todoStyle.background = warning;
				break;
			}

			default: {
				todoStyle.background = primary;
			}
		}

		return ( <> {
				toastParams.show && ( < span style = {
						todoStyle
					} >

					<span > {
						toastParams.content
					} 
					</span> 
					</span>)
				} 
				</>
			);
		};

export default Toast;