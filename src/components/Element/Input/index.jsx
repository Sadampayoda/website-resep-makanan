export const Input = (props) => {
    const {type,name,placeholder='',padding='0'} = props; 
    return (
        <>
            <input type={type} name={name} id={name} className={`form-control p-${padding} rounded-3`} placeholder={placeholder} />
        </>
    )
}