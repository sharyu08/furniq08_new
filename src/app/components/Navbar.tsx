"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  User,
  Heart,
  Search,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

// 🔹 Define menu item types
interface SubMenuItem {
  name: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  children?: SubMenuItem[];
}

// Furniture menu
const furnitureMenu: MenuItem[] = [
  {
    title: "Living Room Furniture",
    href: "/furniture/living-room",
    children: [
      { name: "Sofas", href: "/furniture/living-room/sofas" },
      { name: "Loungers", href: "/furniture/living-room/loungers" },
      { name: "Recliners", href: "/furniture/living-room/recliners" },
      { name: "Accent Chairs", href: "/furniture/living-room/accent-chairs" },
      { name: "Center Tables", href: "/furniture/living-room/center-tables" },
      { name: "End Tables", href: "/furniture/living-room/end-tables" },
      { name: "TV Units", href: "/furniture/living-room/tv-units" },
      { name: "Storage Cabinets", href: "/furniture/living-room/storage-cabinets" },
    ],
  },
  { title: "Bar Furniture", href: "/furniture/bar" },
  { title: "Dining & Kitchen Furniture", href: "/furniture/dining-kitchen" },
  { title: "Study & Office Furniture", href: "/furniture/study-office" },
  { title: "Shoe Racks", href: "/furniture/shoe-racks" },
  { title: "Bedroom Furniture", href: "/furniture/bedroom" },
  { title: "Mattresses", href: "/furniture/mattresses" },
  { title: "Accent Furniture", href: "/furniture/accent" },
  { title: "Kids Furniture", href: "/furniture/kids" },
];

// Kitchen menu
const kitchenMenu: MenuItem[] = [
  {
    title: "Cookware",
    href: "/kitchen/cookware",
    children: [
      { name: "Pans", href: "/kitchen/cookware/pans" },
      { name: "Pots", href: "/kitchen/cookware/pots" },
      { name: "Pressure Cookers", href: "/kitchen/cookware/pressure-cookers" },
    ],
  },
  {
    title: "Storage & Organization",
    href: "/kitchen/storage",
    children: [
      { name: "Containers", href: "/kitchen/storage/containers" },
      { name: "Racks", href: "/kitchen/storage/racks" },
    ],
  },
  { title: "Kitchen Gadgets", href: "/kitchen/gadgets" },
  { title: "Dinnerware", href: "/kitchen/dinnerware" },
  { title: "Serveware", href: "/kitchen/serveware" },
  { title: "Drinkware", href: "/kitchen/drinkware" },
  { title: "Table Linen", href: "/kitchen/linen" },
];

// Home Decor menu
const decorMenu: MenuItem[] = [
  { title: "Room Decor", href: "/decor/room-decor" },
  { title: "Candle Holders", href: "/decor/candle-holders" },
  { title: "Garden", href: "/decor/garden" },
  { title: "Clocks", href: "/decor/clocks" },
  { title: "Candles & Fragrances", href: "/decor/candles-fragrances" },
];

// Home Furnishing menu
const furnishingMenu: MenuItem[] = [
  { title: "Cushions & Fillers", href: "/furnishing/cushions-fillers" },
  { title: "Curtains", href: "/furnishing/curtains" },
  { title: "Bed Linen", href: "/furnishing/bed-linen" },
  { title: "Pillows", href: "/furnishing/pillows" },
  { title: "Floor Coverings", href: "/furnishing/floor-coverings" },
  { title: "Bath", href: "/furnishing/bath" },
];

// Interiors menu
const interiorsMenu: MenuItem[] = [
  { title: "Modular Kitchen", href: "/interiors/kitchen" },
  { title: "Wardrobes", href: "/interiors/wardrobes" },
  { title: "Full Home Interiors", href: "/interiors/full-home" },
];

// Clearance Sale menu
const clearanceMenu: MenuItem[] = [
  { title: "Furniture", href: "/clearance/furniture" },
  { title: "Homeware", href: "/clearance/homeware" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<number | null>(null);

  // Reusable dropdown renderer
  const renderDropdown = (menu: MenuItem[], menuKey: string) => (
    <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-64 z-50">
      <ul className="py-2">
        {menu.map((item, idx) => (
          <li key={item.title} className="relative group">
            <div
              className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50"
              onClick={() =>
                item.children && openSub === idx
                  ? setOpenSub(null)
                  : item.children
                  ? setOpenSub(idx)
                  : null
              }
            >
              <Link href={item.href} className="hover:text-red-600 flex-1">
                {item.title}
              </Link>
              {item.children && (
                <ChevronRight size={16} className="ml-2 text-gray-500" />
              )}
            </div>

            {/* Side Submenu */}
            {item.children && openSub === idx && (
              <ul className="absolute top-0 left-full bg-white border rounded-lg shadow-lg w-64">
                {item.children.map((sub) => (
                  <li key={sub.name}>
                    <Link
                      href={sub.href}
                      className="block px-6 py-2 text-sm hover:text-red-600 hover:bg-gray-100"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Row */}
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logoanimatio.gif"
            alt="HomeTown Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Search */}
        <div className="flex-1 mx-6 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded-full border border-gray-300 pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-gray-700">
          <User className="cursor-pointer hover:text-red-600" size={22} />
          <div className="relative">
            <Heart className="cursor-pointer hover:text-red-600" size={22} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
          <ShoppingCart className="cursor-pointer hover:text-red-600" size={22} />
        </div>
      </div>

      {/* Nav Links */}
      <div className="border-t">
        <div className="container mx-auto flex justify-center gap-8 px-6 py-2 text-sm font-medium text-gray-700">
          {/* Furniture dropdown */}
          <div className="relative">
            <button
              className="inline-flex items-center gap-1 hover:text-red-600"
              onClick={() =>
                setOpenMenu(openMenu === "furniture" ? null : "furniture")
              }
            >
              Furniture
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openMenu === "furniture" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openMenu === "furniture" && renderDropdown(furnitureMenu, "furniture")}
          </div>

          {/* Kitchen & Dining dropdown */}
          <div className="relative">
            <button
              className="inline-flex items-center gap-1 hover:text-red-600"
              onClick={() =>
                setOpenMenu(openMenu === "kitchen" ? null : "kitchen")
              }
            >
              Kitchen & Dining
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openMenu === "kitchen" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openMenu === "kitchen" && renderDropdown(kitchenMenu, "kitchen")}
          </div>

          {/* Home Decor dropdown */}
          <div className="relative">
            <button
              className="inline-flex items-center gap-1 hover:text-red-600"
              onClick={() =>
                setOpenMenu(openMenu === "decor" ? null : "decor")
              }
            >
              Home Decor
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openMenu === "decor" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openMenu === "decor" && renderDropdown(decorMenu, "decor")}
          </div>

          {/* Home Furnishing dropdown */}
          <div className="relative">
            <button
              className="inline-flex items-center gap-1 hover:text-red-600"
              onClick={() =>
                setOpenMenu(openMenu === "furnishing" ? null : "furnishing")
              }
            >
              Home Furnishing
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openMenu === "furnishing" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openMenu === "furnishing" && renderDropdown(furnishingMenu, "furnishing")}
          </div>

          {/* Interiors dropdown */}
          <div className="relative">
            <button
              className="inline-flex items-center gap-1 hover:text-red-600"
              onClick={() =>
                setOpenMenu(openMenu === "interiors" ? null : "interiors")
              }
            >
              Interiors
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openMenu === "interiors" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openMenu === "interiors" && renderDropdown(interiorsMenu, "interiors")}
          </div>

          {/* Clearance Sale dropdown */}
          <div className="relative">
            <button
              className="inline-flex items-center gap-1 hover:text-red-600"
              onClick={() =>
                setOpenMenu(openMenu === "clearance" ? null : "clearance")
              }
            >
              Clearance Sale
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openMenu === "clearance" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openMenu === "clearance" && renderDropdown(clearanceMenu, "clearance")}
          </div>
        </div>
      </div>
    </nav>
  );
}
