import React from "react"; 
import Header from "./Header.js";
import Footer from "./Footer.js";
import SearchBar from "./SearchBar.js";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <SearchBar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;