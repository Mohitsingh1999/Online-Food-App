import { Avatar, IconButton, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { pink } from "@mui/material/colors";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="lg-mr-10">
        <li className="logo font-semibold text-gray-300 text-2xl ">
          Zosh Food
        </li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }}></SearchIcon>
          </IconButton>
        </div>
        <div>
          <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>M</Avatar>
        </div>
        <div>
          <IconButton>
            <Badge badgeContent={3} color="primary">
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
