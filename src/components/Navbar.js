import React from "react";
import styled from "styled-components";
import logo from "../assets/images/LOGO_1.png";
const pages = [
  { name: "Home", href: "/" },
  { name: "About_HSIPL", href: "/#About_HSIPL" },
  { name: "News", href: "/#News" },
  { name: "Awards", href: "/#Awards" },
];

const MulitiplePages = [
  {
    name: "Lab Director",
    href: "Lab_Director",
    list: [
      "Lab_Director",
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
  {
    name: "Equipment",
    href: "",
    list: ["Overview", "Pushbroom", "SnapShot", "Protable"],
  },
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
    font-size:0.84rem;
}
  .dropdown-item:hover {
    background-image: url(https://template101386.motopreview.com/mt-demo/101300/101386/mt-content/uploads/2020/05/mt-2019-bg-main.jpg);
    color: orange;
}
`;

const LogoImg = styled.img`
  height: 7vh;
`;

const NavContain = `
  .navbar{
    background-image: url(https://template101386.motopreview.com/mt-demo/101300/101386/mt-content/uploads/2020/05/mt-2019-bg-main.jpg);
  font-size:0.84rem;
}
`;



const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg ">
      <style>{NavContain}</style>
      <a class="navbar-brand" href="/">
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
          {pages.map((page, index) => (
            <li class="nav-item ps-3 " key={index}>
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

          {MulitiplePages.map((multiple, index) => (
            <li class="nav-item dropdown px-3" key={index}>
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
                {multiple.list.map((listName, index) => (
                  <li key={index}>
                    {listName === "Overview" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"LearnMore#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "Pushbroom" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"LearnMore#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "SnapShot" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"LearnMore#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "Protable" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"LearnMore#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "Education" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"ProfessorDetail#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "Experience" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"ProfessorDetail#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "Publication" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"ProfessorDetail#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "Talks" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"ProfessorDetail#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "Service" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"ProfessorDetail#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "Conference" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"ProfessorDetail#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "Awards" ? (
                      <a
                        class="dropdown-item ps-4 "
                        href={"ProfessorDetail#" + listName}
                      >
                        {listName}
                      </a>
                    ) : listName === "Google" ? (
                      <a
                        class="dropdown-item ps-4 "
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://scholar.google.com/citations?user=0LxRRawAAAAJ&hl=zh-TW"
                      >
                        {listName}
                      </a>
                    ) : (
                      <a class="dropdown-item ps-4 " href={"/#" + listName}>
                        {listName}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li class="nav-item ps-3 " key="30">
            <style>{TextAndHover}</style>
            <a
              activeClass="active"
              smooth={true}
              class="nav-item nav-link "
              href="/Login"
              isDynamic={true}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
