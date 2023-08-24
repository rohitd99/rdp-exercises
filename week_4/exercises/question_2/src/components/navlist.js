function NavList(props)
{
    const {classes} = props;
    return(
        <nav className={classes}>
            <ul className="flex md:flex-row flex-col gap-9">
                <li><a href="/#">Fees</a></li>
                <li><a href="/#">Careers</a></li>
                <li><a href="/#">FAQ</a></li>
                <li><a href="/#">Contacts</a></li>
                <li><a href="/#">About</a></li>
            </ul>
        </nav>
    );
}

export default NavList;