import { Title } from "../../Element/Title/title";
import { Link } from "../../Element/Link/link";
import { Descript } from "../../Element/Descript/descript";
export const Card = (props) => {
    const {title, description, color_link,link, title_link} = props;
    return (
        <>
            <div className="card" style={{width: "18rem;"}}>
                <Img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <Title title={title}></Title>
                        <Descript description={description}></Descript>
                        <Link link={link} title_link={title_link} color_link={color_link}></Link>
                    </div>
            </div>
        </>
    )
}