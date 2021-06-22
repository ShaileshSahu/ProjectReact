import React from "react";
import Corona from "../corona/corona.component";
import Signup from "../users/signup.component";
import Management from '../management/management.component';
const LeftSection = () => {
	return (
		<>
		<section>
	<Management/>
		<Signup/>
			<Corona />
		</section>
		</>
	);
};
export default LeftSection;
