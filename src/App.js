import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";

function App() {
    // State for the card data
    const [cardsData, setCardsData] = useState([
        { id: 1, bgcolour: "#8272DA", title: "25°C", subtitle: "Temperature" },
        { id: 2, bgcolour: "#FD6663", title: getCurrentDate(), subtitle: getCurrentTime() }, // Initial date/time
        { id: 3, bgcolour: "#FCA201", title: "Build Using", subtitle: "React" },
    ]);

    // Update date and time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCardsData((prevData) => [
                { ...prevData[0] }, // No change for the first card
                { ...prevData[1], title: getCurrentDate(), subtitle: getCurrentTime() }, // Update date and time dynamically
                { ...prevData[2] }, // No change for the third card
            ]);
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []); // Empty dependency array means this effect runs only once on mount

    // Function to get the current date in "DD/MM/YYYY" format
    function getCurrentDate() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0'); // Add leading zero if single digit
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Add leading zero if single digit
        const year = now.getFullYear();
        return `${day}/${month}/${year}`; // Format as "DD/MM/YYYY"
    }

    // Function to get the current time in "HH:MM:SS" format
    function getCurrentTime() {
        return new Date().toLocaleTimeString(); // Format as "HH:MM:SS"
    }

    return (
        <div className="bg-black p-16">
            <div className="bg-white p-10 border rounded-md">
                {/* Header */}
                <Header />
                
                {/* Cards */}
                <div className="flex flex-wrap justify-between gap-7 my-5">
                    {cardsData.map((card) => (
                        <Cards
                            key={card.id}
                            bgcolour={card.bgcolour}
                            title={card.title}
                            subtitle={card.subtitle}
                        />
                    ))}
                </div>

                {/* Manage Activity */}
                <TodoContainer />
            </div>
        </div>
    );
}

export default App;
