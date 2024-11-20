import { Children } from "react";
import { Input } from "../../Element/Input";
import { Span } from "../../Element/Span";
export const Search = (props) => {
    const {name,placeholder,type,padding,children} = props;
    return (
        <>
            <div className="input-group mb-3 p-3">
                <Input
                name={name}
                placeholder={placeholder}
                type={type}
                padding={padding}
                ></Input>
                <Span>{children}</Span>
            </div>
        </>
    )
}
