import React from "react"; 
import Header from "./Header.js";
import Footer from "./Footer.js";

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;