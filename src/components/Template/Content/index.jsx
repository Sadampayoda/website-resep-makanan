const Content = (props) => {
    const {children,margin='0',padding='0',background_color=''} = props;
    return (
        <>
            <section className={`bg-${background_color}`}>
                <div className={`container m-${margin}  p-${padding}`}>
                    {children}
                </div>
            </section>
        </>
    )
}

export default Content;