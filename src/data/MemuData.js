import { FaBars, FaHome, FaShoppingBag, FaUserAlt } from "react-icons/fa";

const MemuData = [
    {
        title: "หน้าแรก",
        path: "/",
        icon: <FaHome />
    },
    {
        title: "สมาชิก",
        path: "/member",
        icon: <FaUserAlt />
    },
    {
        title: "สินค้า",
        path: "/product",
        icon: <FaShoppingBag />
    }
];

export default MemuData