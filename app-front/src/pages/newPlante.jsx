import { React, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Button,
    Input,
    Textarea,
    Typography
} from "@material-tailwind/react";
import { PhotoIcon } from "@heroicons/react/24/outline";

export function NewPlante() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        //nom, descriptin et une image
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-evenly mt-10">
            <div className="w-96">
                <div>
                    <Input
                        id="name"
                        color="green"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Nom"
                    />
                </div>
                <div className="mt-10">
                    <Textarea
                        id="description"
                        color="green"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        label="Description"
                        rows={10}
                    />
                </div>
            </div>
            <div className="relative w-fit h-fit">
                <Button variant="gradient" className="flex items-center gap-3 absolute" color="green">
                    <PhotoIcon strokeWidth={2} className="h-5 w-5" /> Importer une image
                </Button>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="absolute top-0 h-full w-full"
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
        </form>
    )
}

export default NewPlante;