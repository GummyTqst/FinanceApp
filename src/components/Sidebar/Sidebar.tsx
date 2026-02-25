import { useState } from "react";
import { Link } from "@tanstack/react-router";
// If you are using TanStack's file-based routing, 
// the 'to' paths will be strictly checked against your route tree.

// Icons
import IconOverview from "../../assets/images/icon-nav-overview.svg";
import IconTransaction from "../../assets/images/icon-nav-transactions.svg";
import IconBudgets from "../../assets/images/icon-nav-budgets.svg";
import IconPots from "../../assets/images/icon-nav-pots.svg";
import IconBills from "../../assets/images/icon-nav-recurring-bills.svg";
import IconMinimize from "../../assets/images/icon-minimize-menu.svg";

import "./Sidebar.sass"

// Define the shape of our menu items
interface MenuItem {
    name: string;
    path: "/" | "/transactions" | "/budgets" | "/pots" | "/bills";
    icon: string;
}

const Sidebar = () => {
    const [isMinimized, setIsMinimized] = useState<boolean>(false);

    const menuItems: MenuItem[] = [
        { name: "Overview", path: "/", icon: IconOverview },
        { name: "Transactions", path: "/transactions", icon: IconTransaction },
        { name: "Budgets", path: "/budgets", icon: IconBudgets },
        { name: "Pots", path: "/pots", icon: IconPots },
        { name: "Recurring bills", path: "/bills", icon: IconBills },
    ];

    return (
        <aside className={`sidebar ${isMinimized ? "minimized" : ""}`}>
            <div className="sidebar__logo-container">
                <h1 className="sidebar__logo-text">Finance</h1>
            </div>

            <nav className="sidebar__nav">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        // TanStack's 'activeProps' replaces the manual className logic
                        activeProps={{
                            className: "sidebar__nav-item--active",
                        }}
                        className="sidebar__nav-item"
                    >
                        <img src={item.icon} alt="" className="sidebar__nav-icon" />
                        {!isMinimized && (
                            <span className="sidebar__nav-label">{item.name}</span>
                        )}
                    </Link>
                ))}
            </nav>

            <button
                className="sidebar__minimize-btn"
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? "Expand menu" : "Minimize menu"}
            >
                <img 
                    src={IconMinimize} 
                    alt=""
                    className={`sidebar__minimize-icon ${isMinimized ? 'sidebar__minimize-icon--collapsed' : ''}`} 
                />
                {!isMinimized && <span className="sidebar__minimize-label">Minimize Menu</span>}
            </button>
        </aside>
    );
};

export default Sidebar;