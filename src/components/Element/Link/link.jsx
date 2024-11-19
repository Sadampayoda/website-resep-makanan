export const Link = (props) => {
    const {color_link, link, title_link } = props;
    return (
        <>
            <a href={link} className={`btn btn-${color_link} rounded-0`}>{title_link}</a>
        </>
    )
}