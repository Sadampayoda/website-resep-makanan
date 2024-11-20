import Content from '../../Template/Content';
import { Nav } from '../../Fragment/Nav';
import { Search } from '../../Fragment/Search';
import { Card } from '../../Fragment/Card';

export const Menu = () => {
    return (
        <>
            <Nav section="Search">Tutorial Masak</Nav>
            <Content margin="5" padding='5'  >
                <div className="row mt-5 mb-5 pb-2 d-flex justify-content-center  border-bottom">
                    <div className="col-8">
                        <Search
                            name='search'
                            placeholder="Cari resep masakan favorit"
                            type="text"
                            padding='3'
                        >
                            Search
                        </Search>
                    </div>
                </div>
            </Content>

            <Content margin="5" padding='1'>
                <div className="row d-flex justify-content-center">
                    <div className="col-5">
                        <Card
                            title="Masak Nasi Goreng"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum ea placeat illo est itaque id odio perferendis eius consectetur?"
                            color_link="dark"
                            link="http://coding.com"
                            title_link="Lihat resep"
                        >
                        </Card>
                    </div>
                    <div className="col-5">
                        <Card
                            title="Masak Nasi Goreng"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum ea placeat illo est itaque id odio perferendis eius consectetur?"
                            color_link="dark"
                            link="http://coding.com"
                            title_link="Lihat resep"
                        >
                        </Card>
                    </div>
                </div>
            </Content>

        </>
    )
}


