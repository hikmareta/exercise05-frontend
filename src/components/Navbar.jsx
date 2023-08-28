import style from "../style/Navbar.module.css";

export const Navbar = () => {
  return (
    <>
    <nav className = {style.navbar}>
      <div className = {style.title}> Exercise 5 </div>
      <div className = {style.menu}>
        <p> Counter App </p>
        <p> Stopwatch App </p>
        <p> Search Filter App </p>
        <p> Fetch API and JSON App</p>
        <p> Search App </p>
      </div>
    </nav>
    </>
  )
}