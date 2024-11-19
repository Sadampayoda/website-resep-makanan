export const Link_Nav = (props) => {
    const {children, href, active} = props;
    return (
        <>
            <a className={`nav-link ${active}`} aria-current="page" href={href}>{children}</a>
        </>
    )
}