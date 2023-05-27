import { Card } from "primereact/card";
import { CharacterCardFooter, CharacterCardHeader } from "./";

export const CharacterCard = ({ id, name, image }) => {
    return (
        <div className="col-12 md:col-6 lg:col-3">
            <div className="card flex justify-content-center">
                <Card
                    title={name}
                    subTitle="Estatus del personaje"
                    header={<CharacterCardHeader img={image} />}
                    footer={<CharacterCardFooter />}
                    className="md:w-25rem"
                >
                    <p>{id}</p>
                </Card>
            </div>
        </div>
    );
};
