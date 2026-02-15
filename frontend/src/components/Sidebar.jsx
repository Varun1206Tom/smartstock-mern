import React from 'react';
import { Home, Package, ShoppingCart } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavItem from './NavigationItem';

const Sidebar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="w-64 bg-slate-900 border-r border-slate-800 p-5">
                <h1 className="text-2xl font-bold mb-10 text-blue-400">
                    SmartStock
                </h1>

                <nav className="space-y-3">
                    <NavItem
                        icon={<Home size={18} />}
                        label="Dashboard"
                        active={location.pathname === "/"}
                        onClick={() => navigate("/")}
                    />

                    <NavItem
                        icon={<Package size={18} />}
                        label="Products"
                        active={location.pathname === "/products"}
                        onClick={() => navigate("/products")}
                    />

                    <NavItem
                        icon={<ShoppingCart size={18} />}
                        label="Sales"
                        active={location.pathname === "/sales"}
                        onClick={() => navigate("/sales")}
                    />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Sidebar