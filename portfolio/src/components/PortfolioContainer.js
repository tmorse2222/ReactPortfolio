import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("AboutMe");

    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div>
                <header>
                    <h1>Tyler M.</h1>
                </header>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            <div>
            {renderPage()}
            </div>
            <div>
                <footer>
                    <p>© 2021 Tyler M.</p>
                </footer>
            </div>
        </div>
    );
}