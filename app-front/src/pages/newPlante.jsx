import { React, useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
    Button,
    Input,
    Textarea,
    Typography,
    Tooltip,
    IconButton
} from "@material-tailwind/react";
import { PhotoIcon, XMarkIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export function NewPlante() {

    let date = new Date();
    const DateToday = date.toISOString().split('T')[0];

    const [imageUrl, setImageUrl] = useState('');

    const [champs, setChamps] = useState({
        name: '',
        description: '',
        image: null,
        price: '',
        startDate: '',
        endDate: null,
        location: ''
    });

    const [champsInvalides, setChampsInvalides] = useState({
        name: false,
        description: false,
        image: false,
        price: false,
        startDate: false,
        endDate: false,
        location: false
    });

    const [showImagePopup, setShowImagePopup] = useState(false);

    const validerChamps = () => {
        let estValide = true;

        // Vérifier si les champs sont vides ou null
        Object.keys(champs).forEach((champ) => {
          if (champs[champ] == null || (champ != "image" && champs[champ]?.trim() === '')) {
            setChampsInvalides((prevState) => ({
                ...prevState,
                [champ]: true
            }));
            estValide = false;
          } else  {
            setChampsInvalides((prevState) => ({
                ...prevState,
                [champ]: false
            }));
          }
        });

        if(isNaN(champs["price"]) || champs["price"] < 0) {
            setChampsInvalides((prevState) => ({
                ...prevState,
                ["price"]: true
            }));
            estValide = false;
        }

        if(champs["startDate"] > champs["endDate"]) {
            setChampsInvalides((prevState) => ({
                ...prevState,
                ["startDate"]: true,
                ["endDate"]: true
            }));
            estValide = false;
        }
    
        return estValide;
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validerChamps()) {
            // Soumettre le formulaire
        }
    }

    const handleViewImage = () => {
        if (champs.image) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
                setShowImagePopup(true);
            };
            reader.readAsDataURL(champs.image);
        }
    };

    const handleCloseImage = () => {
        setShowImagePopup(false);
        setImageUrl('');
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;
        // Vérifier si la valeur est un nombre et supérieure ou égale à zéro
        if (!isNaN(value) && value >= 0) {
            setChamps((prevState) => ({
                ...prevState,
                ["price"]: value
            }));
        } else {
            alert("Prix n'est pas conforme");
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

            if (road == undefined && postcode == undefined && city == undefined)
                new Error();
            setChamps((prevState) => ({
                ...prevState,
                ["location"]: `${houseNumber ?? ""} ${road} ${postcode} ${city}`
            }));
        }).catch((error) => {
            alert("Une erreur est survenue. Impossible d'utiliser votre localisation...")
        });
    };

    useEffect(() => {
        if (champs.location.length > 8) {
            const url = `https://geocode.maps.co/search?q=${champs.location}`;
            const timeoutID = setTimeout(() => {

                fetch(url).then(res => res.json()).then(data => {
                    let result = data.length;
                    if (result == 1)
                        setChampsInvalides((prevState) => ({
                            ...prevState,
                            ["location"]: false
                        }));
                    else
                        setChampsInvalides((prevState) => ({
                            ...prevState,
                            ["location"]: false
                        }));
                }).catch((error) => {
                    setChampsInvalides((prevState) => ({
                        ...prevState,
                        ["location"]: false
                    }));
                    console.log(error);
                });
            }, 1000);

            return () => {
                // 👇️ clear timeout when the component unmounts
                clearTimeout(timeoutID);
            };
        }
    }, [champs.location]);


    const handleChangeChamp = (champ, valeur) => {
        setChamps((prevState) => ({
            ...prevState,
            [champ]: valeur
        }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-evenly mt-10">
                <div className="w-96">
                    <Input
                        id="name"
                        color="green"
                        value={champs.name}
                        onChange={(e) => handleChangeChamp('name', e.target.value.trim())}
                        label="Nom"
                        error={champsInvalides.name}
                    />
                    <div className="mt-10 mb-10">
                        <Textarea
                            id="description"
                            color="green"
                            value={champs.description}
                            onChange={(e) => handleChangeChamp('description', e.target.value.trim())}
                            label="Description"
                            rows={10}
                            error={champsInvalides.description}
                        />
                    </div>
                    <Input
                        type="number"
                        value={champs.price}
                        onChange={handlePriceChange}
                        color="green"
                        label="Prix"
                        min="0"
                        error={champsInvalides.price}
                    />
                    <div className="mt-10 mb-10 flex ">
                        <Input
                            id="startDate"
                            type="date"
                            label="Du"
                            color="green"
                            min={DateToday}
                            max={champs.endDate}
                            onChange={(e) => handleChangeChamp('startDate', e.target.value)}
                            error={champsInvalides.startDate}
                        />
                        <Input
                            id="endDate"
                            type="date"
                            label="Au"
                            color="green"
                            min={champs.startDate}
                            onChange={(e) => handleChangeChamp('endDate', e.target.value)}
                            error={champsInvalides.endDate}
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
                                value={champs.location}
                                color="green"
                                onChange={(e) => handleChangeChamp('location', e.target.value)}
                                error={champsInvalides.location}
                            />
                            <Tooltip content="Utiliser votre localisation" placement="top">
                                <IconButton className="ml-5 h-10" onClick={getPosition} variant="text">
                                    <GlobeAltIcon className="h-8" />
                                </IconButton >
                            </Tooltip>
                        </div>
                        <div className="relative w-64 mt-10">
                            <Button variant="gradient" className="flex items-center gap-3 absolute w-full" color={champsInvalides.image == true ? "red" : "green"}>
                                <PhotoIcon strokeWidth={2} className="h-5 w-5" /> Importer une image
                            </Button>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                className="ursor-pointer absolute block py-2 px-4 w-full opacity-0"
                                onChange={(e) => handleChangeChamp('image', e.target.files[0])}
                            />
                        </div>
                    </div>
                    <div className="mt-14">
                        {champs.image && <Typography variant="lead">Nom du fichier : {champs.image.name}</Typography>}
                        {champs.image && <Button onClick={handleViewImage}>Voir l'image</Button>}
                    </div>
                    <div className="mt-20">
                        <Button type="submit" ripple={true} color="green">Ajouter</Button>
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
