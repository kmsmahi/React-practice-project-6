const Navbar = () => {

    const navigationLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Projects",
    path: "/projects"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
    return (
        <nav className="flex justify-between gap-12 mt-12 bg-blue-200 p-8">

        <h1 className="text-2xl">Pricing</h1>
        <ul className="flex">

             {
                navigationLinks.map(link=><li className="mr-10 text-2xl"><a href={link.path}>{link.name}</a></li>)
             }


            
        </ul>

        <button className="text-2xl">Add items</button>
            
        </nav>
    );
};

export default Navbar;