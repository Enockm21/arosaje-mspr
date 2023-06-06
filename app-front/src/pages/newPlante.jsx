import { React, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Button,
    Input,
    Textarea,
    Typography
} from "@material-tailwind/react";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";

export function NewPlante() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [showImagePopup, setShowImagePopup] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleViewImage = () => {
        if (image) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
                setShowImagePopup(true);
            };
            reader.readAsDataURL(image);
        }
    };

    const handleCloseImage = () => {
        setShowImagePopup(false);
        setImageUrl('');
    };

    const handlePriceChange = (e) => {
        console.log("test");
        const value = e.target.value;
        // Vérifier si la valeur est un nombre et supérieure ou égale à zéro
        if (!isNaN(value) && value >= 0) {
          setPrice(value);
        } else{
            alert("Prix n'est pas conforme");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-evenly mt-10">
                <div className="w-96">
                    <Input
                        id="name"
                        color="green"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Nom"
                    />
                    <div className="mt-10 mb-10">
                        <Textarea
                            id="description"
                            color="green"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            label="Description"
                            rows={10}
                        />
                    </div>
                    <Input
                        type="number"
                        value={price}
                        onChange={handlePriceChange}
                        color="green"
                        label="Prix"
                        min="0"
                    />
                </div>
                <div>
                    <div className="h-20">
                        <div className="relative w-64">
                            <Button variant="gradient" className="flex items-center gap-3 absolute w-full" color="green">
                                <PhotoIcon strokeWidth={2} className="h-5 w-5" /> Importer une image
                            </Button>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                className="ursor-pointer absolute block py-2 px-4 w-full opacity-0"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div className="">
                        {image && <Typography variant="lead">Nom du fichier : {image.name}</Typography>}
                        {image && <Button onClick={handleViewImage}>Voir l'image</Button>}
                    </div>
                </div>
            </form>

            {showImagePopup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="max-w-lg max-h-lg bg-green-700 p-1 rounded-lg">
                        <button className="absolute top-2 right-2 bg-red-900 p-2 rounded-lg" onClick={handleCloseImage}>
                            <XMarkIcon className="h-6 w-6" color="white" />
                        </button>
                        <img src={imageUrl} alt="Image sélectionnée" className="w-full h-auto" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default NewPlante;