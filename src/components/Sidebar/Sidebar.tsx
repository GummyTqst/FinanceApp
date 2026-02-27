import { useState } from "react";
import { Link } from "@tanstack/react-router";

// Icons
import IconOverview from "../../assets/images/icon-nav-overview.svg";
import IconTransaction from "../../assets/images/icon-nav-transactions.svg";
import IconBudgets from "../../assets/images/icon-nav-budgets.svg";
import IconPots from "../../assets/images/icon-nav-pots.svg";
import IconBills from "../../assets/images/icon-nav-recurring-bills.svg";
import IconMinimize from "../../assets/images/icon-minimize-menu.svg";


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
        <aside className={
            `bg-grey-900 transition-all duration-300 ease-in-out flex flex-col overflow-hidden z-100
            h-screen fixed lg:relative bottom-0 left-0 w-full lg:h-screen
            ${isMinimized ? "lg:w-22" : "lg:w-75"}
            max-lg:flex-row max-lg:h-auto    
        `}>
            <div className="p-500 px-400 max-lg:hidden">
                <h1 className={`text-white text-2xl font-bold transition-opacity duration-300`}>
                    {isMinimized ? 'F' : 'Finace'}
                </h1>
            </div>

            <nav className="flex-1 flex flex-row lg:flex-col gap-50 lg:pr-200 max-lg:w-full max-lg:justify-around">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        // TanStack's 'activeProps' replaces the manual className logic
                        activeProps={{
                            className: " bg-beige-100 text-grey-900 border-secondary-green",
                        }}
                        className={`
                            group flex items-center text-grey-500 transition-all duration-300 hover:text-white
                            /* Mobile/Tablet: Bottom Bar */
                            max-lg:flex-col max-lg:flex-1 max-lg:items-center max:lg:justify-center
                            max-lg:border-t-4 max-lg:border-transparent max-lg:pt-150 max-lg:pb-100
                            /* Desktop: Sidebar */
                            lg:py-200 lg:border-l-4 lg:border-transparent lg:rounded-r-xl
                            ${isMinimized ? "lg:justify-center lg:px-0" : "lg:px-400"}
                        `}
                    >
                        <img src={item.icon} alt="" className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                        <span className={`
                            font-medium whitespace-nowrap transition-all duration-300
                            /* Tablet: Show under icon */
                            max-lg:mt-100 max-lg:text-xs 
                            /* Mobile: Hide if screen is very small */
                            max-sm:hidden 
                            /* Desktop: Handle minimized state */
                            ${isMinimized ? "lg:hidden" : "lg:block lg:ml-250"}
                        `}>
                            {item.name}
                        </span>
                    </Link>
                ))}
            </nav>

            <button
                className="hidden lg:flex items-center p-400 text-grey-500 hover:text-white cursor-pointer transition-colors"
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? "Expand menu" : "Minimize menu"}
            >
                <img 
                    src={IconMinimize} 
                    alt=""
                    className={`w-5 h-5 transition-transform duration-300 ${isMinimized ? 'rotate-180' : ''}`} 
                />
                {!isMinimized && (
                    <span className="ml-250 whitespace-nowrap transition-opacity duration-300">
                        Minimize Menu
                    </span>
                )}
            </button>
        </aside>
    );
};

export default Sidebar;