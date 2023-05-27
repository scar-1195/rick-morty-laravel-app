import { TabMenu } from "primereact/tabmenu";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    const items = [
        {
            label: "Home",
            icon: "pi pi-fw pi-home",
            command: () => {
                navigate("/");
            },
        },
        {
            label: "Favorites",
            icon: "pi pi-fw pi-heart",
            command: () => {
                navigate("/favorites");
            },
        },
    ];
    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    );
};
