import LoadImage from "@/components/shared/image/LoadImage";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import {
  MdFavoriteBorder,
  MdOutlineAddHomeWork,
  MdOutlineRateReview,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { PiCreditCardLight, PiCubeTransparent } from "react-icons/pi";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { TbUserEdit, TbUserShare } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs";

const Sidebar = () => {
  const router = useRouter();
  const user = useSelector((state) => state?.auth);

  const isActive = (href) =>
    router.pathname === href ? "bg-primary text-white" : "";

  // Define routes based on roles
  const routes = {
    user: [
      {
        name: "My Profile",
        path: "/dashboard/my-profile",
        icon: <TbUserEdit className="w-5 h-5" />,
      },
      {
        name: "View Favorites",
        path: "/dashboard/view-favorites",
        icon: <MdFavoriteBorder className="w-5 h-5" />,
      },
      {
        name: "View Cart",
        path: "/dashboard/view-cart",
        icon: <BsCartCheck className="w-5 h-5" />,
      },
      {
        name: "View Purchases",
        path: "/dashboard/view-purchases",
        icon: <PiCreditCardLight className="w-5 h-5" />,
      },
    ],
    admin: [
      {
        name: "Add Rent",
        path: "/dashboard/add-rent",
        icon: <MdOutlineAddHomeWork className="w-5 h-5" />,
      },
      {
        name: "List Rents",
        path: "/dashboard/list-rents",
        icon: <PiCubeTransparent className="w-5 h-5" />,
      },
      {
        name: "List Buyers",
        path: "/dashboard/list-buyers",
        icon: <AiOutlineUserSwitch className="w-5 h-5" />,
      },
      {
        name: "View Reviews",
        path: "/dashboard/view-reviews",
        icon: <MdOutlineRateReview className="w-5 h-5" />,
      },
      {
        name: "List Users",
        path: "/dashboard/list-users",
        icon: <FiUsers className="w-5 h-5" />,
      },
      {
        name: "List Sellers",
        path: "/dashboard/list-sellers",
        icon: <TbUserShare className="w-5 h-5" />,
      },
    ],
  };

  // Determine which routes to display based on user role
  let userRoutes = [];
  if (user?.role === "admin") {
    userRoutes = [...routes.user, ...routes.admin];
  } else if (user?.role === "user") {
    userRoutes = [...routes.user];
  }

  return (
    <div className="w-full h-full flex flex-col gap-y-2">
      {/* Routes Section */}
      <div className="flex flex-col gap-y-1 overflow-y-auto scrollbar-hide">
        {userRoutes.map((route, index) => (
          <Link
            key={index}
            href={route.path}
            className={
              `flex flex-row gap-x-2 items-center px-4 py-2 hover:bg-primary hover:text-white transition-colors rounded text-sm ` +
              isActive(route.path)
            }
          >
            {route.icon}
            <span>{route.name}</span>
          </Link>
        ))}
      </div>

      {/* User Profile and Logout Section */}
      <div className="flex flex-col gap-y-2 mt-auto">
        <div
          className="px-4 py-2 flex flex-row gap-x-2 hover:bg-primary hover:text-white transition-colors rounded cursor-pointer"
          onClick={() => {
            localStorage.removeItem("accessToken");
            window.open("/", "_self");
          }}
        >
          <LoadImage
            src={user?.avatar?.url}
            alt={user?.avatar?.public_id}
            height={30}
            width={30}
            className="rounded-secondary object-cover w-[30px] h-[30px]"
          />
          <article className="flex flex-col gap-y-0.5">
            <h2 className="line-clamp-1 text-base">{user?.name}</h2>
            <span className="text-xs">Logout</span>
          </article>
        </div>

        {/* Home Link */}
        <Link
          href="/"
          className="flex flex-row gap-x-2 items-center px-4 py-2 hover:bg-primary hover:text-white transition-colors rounded text-sm"
        >
          <IoHomeOutline className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
