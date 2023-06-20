import { React, useState, useEffect ,useContext} from "react";
import ApiService from "../service/Apiservice";
import { store } from "../reducer/store";

import {
    Button,
    Input,
    Textarea,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { PhotoIcon, XMarkIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export function NewPlante() {
    const { dispatch, state } = useContext(store);

    let date = new Date();
    const DateToday = date.toISOString().split('T')[0];
    let checkLocation = null;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [showImagePopup, setShowImagePopup] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [startDate, setStartDate] = useState(DateToday);
    const [endDate, setEndDate] = useState(null);
    const [location, setLocation] = useState('');
    const [locationInvalide, setLocationInvalide] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
    console.log(state,"state")
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
        } else {
            alert("Prix n'est pas conforme");
        }
    }
    console.log(startDate,endDate,"&za")
    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer le formulaire
        if (isFormValid) {
            console.log('Formulaire envoyé');
          ///  console.log(convertToBase64(image),"convertToBase64(image)")
            ApiService.request(
                {
                specie:name,
                user:"/api/users/1",
                description:description,
                image:image,
                amount:price,
                location:location,
                startDate: startDate,
                endDate: endDate
            },
                 "plantes", "post").then((res)=>{

                console.log(res,"asasa")
            })
            
        }
    }

    function getPosition() {
        navigator.geolocation.getCurrentPosition(succesLocation);
    };

    const succesLocation = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const url = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;

        fetch(url).then(res => res.json()).then(data => {
            const houseNumber = data.address.house_number;
            const road = data.address.road;
            const postcode = data.address.postcode;
            const city = data.address.city;
            setLocation(`${houseNumber} ${road} ${postcode} ${city}`);
        }).catch((error) => {
            alert("Une erreur est survenue. Impossible d'utiliser votre localisation...")
        });
    };

    const handleLocationChange = (location) => {
        setLocation(location);
        
        clearTimeout(checkLocation);

        const url = `https://geocode.maps.co/search?q=${location}`;
        
        checkLocation = setTimeout(() => {
            // fetch(url).then(res => res.json()).then(data => {
            //     debugger
            //     if(data.lenght == 1)
            //     else
            //         throw new Error();
            // }).catch((error) => {
            //     setLocationInvalide(true);
            // });
        }, 1000);
    };
    const convertToBase64 = (file) => {
        if(file instanceof Blob){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
            let base64String= reader.result
            console.log(base64String,"base64String")
            setImage(base64String)
            
            };
        reader.onerror = (error) => {
          console.log("Erreur lors de la conversion en base64 :", error);
        };
        }
        
      };
      useEffect(() => {
       if(image) convertToBase64(image);
      }, [image]);

    useEffect(() => {
        // Vérifier la validité du formulaire
        if (name && description && image && price && startDate && endDate) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [name, description, image, price, startDate, endDate]);

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
                    <div className="mt-10 mb-10 flex ">
                        <Input
                            id="startDate"
                            type="date"
                            label="Du"
                            color="green"
                            min={DateToday}
                            max={endDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <Input
                            id="endDate"
                            type="date"
                            label="Au"
                            color="green"
                            min={startDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="h-20">
                        <div className="flex w-96">
                            <Input
                                id="location"
                                type="text"
                                label="Localisation"
                                value={location}
                                color="green"
                                onChange={(e) => handleLocationChange(e.target.value)}
                                error={locationInvalide}
                            />
                            <Tooltip content="Utiliser votre localisation" placement="top">
                                <Button className="rounded-full ml-5" onClick={getPosition}>
                                    <GlobeAltIcon className="h-5" />
                                </Button>
                            </Tooltip>


                        </div>
                        <div className="relative w-64 mt-10">
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
                    <div className="text-center mt-20">
                        <Button ripple={true} color="green" type="submit" disabled={!isFormValid}>Ajouter</Button>
                    </div>
                </div>
            </form >

            {showImagePopup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="max-w-lg max-h-lg bg-green-700 p-1 rounded-lg">
                        <button className="absolute top-2 right-2 bg-red-900 p-2 rounded-lg" onClick={handleCloseImage}>
                            <XMarkIcon className="h-6 w-6" color="white" />
                        </button>
                        <img src={imageUrl} alt="Image sélectionnée" className="w-full h-auto" />
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default NewPlante;
