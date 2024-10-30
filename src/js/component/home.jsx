import React  from "react";
import Semaforo from "./semaforo";


const Home = () => {
	const colorProps = {
        red: "red",
        yellow: "yellow",
        green: "green",
		purple: "purple"
    };

	
	return (
	<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
	<h1>Control del Semáforo</h1>
	<Semaforo colors={colorProps} /> 
</div>
);
}
		


export default Home;
