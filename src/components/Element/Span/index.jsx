export const Span = (props) => {
    const {children} = props;
    return (
        <>
            <span className="input-group-text">{children}</span>
        </>
    )
}