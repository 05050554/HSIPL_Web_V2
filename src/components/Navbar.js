import React from "react";
import styled from "styled-components";
import logo from "../assets/images/LOGO_1.png";
const pages = [
  { name: "Home", href: "/" },
  { name: "About_HSIPL", href: "#About_HSIPL" },
  { name: "News", href: "#News" },
  { name: "Awards", href: "#Awards" },
];

const MulitiplePages = [
  {
    name: "Lab Director",
    href: "Lab_Director",
    list: [
      "Education",
      "Experience",
      "Publication",
      "Talks",
      "Service",
      "Conference",
      "Awards",
      "Google",
    ],
  },
  { name: "Members", href: "Members", list: ["Senior", "Junior", "Alumnus"] },
  { name: "Research", href: "", list: ["Interests", "Posters", "Projects"] },
  { name: "Equipment", href: "", list: ["Pushbroom", "SnapShot", "Protable"] },
];

const PageContain = `
    .dropdown-menu{
      background-image: url(https://template101386.motopreview.com/mt-demo/101300/101386/mt-content/uploads/2020/05/mt-2019-bg-main.jpg);
    }

`;

const TextAndHover = `
  .navbar .navbar-nav .nav-link{
    color :white;
}
  .navbar .navbar-nav .nav-link:hover{
    color:orange;
  }
`;

const DroupDown = `
  .dropdown-item{
    color: white;
    text-align: center;
}
  .dropdown-item:hover {
    background-image: url(https://template101386.motopreview.com/mt-demo/101300/101386/mt-content/uploads/2020/05/mt-2019-bg-main.jpg);
    color: orange;
}
`;

const LogoImg = styled.img`
  height: 10vh;
`;

const NavContain = `
  .navbar{
    background-image: url(https://template101386.motopreview.com/mt-demo/101300/101386/mt-content/uploads/2020/05/mt-2019-bg-main.jpg);
   
}
 
`;

const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg ">
      <style>{NavContain}</style>
      <a class="navbar-brand" href="#">
        <LogoImg className="logo_HP" src={logo}></LogoImg>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ps-4">
          {pages.map((page) => (
            <li class="nav-item ps-3 ">
              <style>{TextAndHover}</style>
              <a
                activeClass="active"
                smooth={true}
                class="nav-item nav-link "
                href={page.href}
                isDynamic={true}
              >
                {page.name}
              </a>
            </li>
          ))}

          {MulitiplePages.map((multiple) => (
            <li class="nav-item dropdown px-3">
              <a
                class="nav-link dropdown-toggle text-white"
                href={multiple.href}
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {multiple.name}
              </a>
              <ul
                class="dropdown-menu "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <style>{PageContain}</style>
                <style>{DroupDown}</style>
                {multiple.list.map((listName) => (
                  <li>
                    <a class="dropdown-item ps-4 " href="#">
                      {listName}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
