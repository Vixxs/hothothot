
# HotHotHot

## Introduction
Site héberger [ici](http://vixx.alwaysdata.net/)

Si vous souhaitez modifier le site il vous est possible de changer les fichier JSON en concervant leur structures 


## Thème

Vous pouvez changer le theme en sombre en modifiant le champ du fichier settings.json 

```json
{
    "settings" : {
        "darkmode" : "false"
    }
}
```
En modifiant "false" en "true" cela activera le theme sombre 



## Capteurs

Vous pouvez ajouter ou modifier des capteurs en rajoutant dans le fichier data.json
pour cela il vous suffit de respecter la structure suivante et les rajouter à la suite dans le tableau "data".

```json
{
    "data": [{
        "name": "Nom de l'emplacement des capteurs",
        "id": "0",
        "location": "exterieur", //exterieur ou interieur
        "desc": "Description générale",
        "sensors": [{ // Ajouter le nombre de capteur souhaité dans la piece et leur valeurs selon l'heure
            "type": "Temperature",
            "valueHours": {
                "0": "45°C",
                "1": "22°C",
                "2": "21°C",
                "3": "24°C",
                "4": "29°C",
                "5": "32°C",
                "6": "36°C",
                "7": "23°C",
                "8": "21°C",
                "9": "24°C",
                "10": "21°C",
                "11": "23°C",
                "12": "21°C",
                "13": "49°C",
                "14": "55°C",
                "15": "45°C",
                "16": "49°C",
                "17": "44°C",
                "18": "18°C",
                "19": "42°C",
                "20": "32°C",
                "21": "21°C",
                "22": "24°C",
                "23": "32°C"
            }
        }, { //Optionnel 
            "type": "Humidité",
            "valueHours": {
                "0": "10%",
                "1": "30%",
                "2": "40%",
                "3": "20%",
                "4": "25%",
                "5": "10%",
                "6": "15%",
                "7": "50%",
                "8": "30%",
                "9": "60%",
                "10": "70%",
                "11": "50%",
                "12": "20%",
                "13": "23%",
                "14": "17%",
                "15": "21%",
                "16": "54%",
                "17": "78%",
                "18": "61%",
                "19": "33%",
                "20": "77%",
                "21": "53%",
                "22": "89%",
                "23": "100%"
            }
        }]
    }

```

Vous pouvez aussi simplement modifier les valeurs selon l'heure pour tester le système d'alerte. Les alertes s'affichent sur la page mes capteurs. 

## Partie HTML
Au début du cours je maitrisais les bases apprises au cours de mes deux années de DUT Informatique. J'ai déjà eu l'occasion d'utiliser le framework Bulma 
. J'ai donc préféré repartir sur la maitrise du HTML/CSS natif. 

## Partie CSS 
Pour le css je suis aussi resté sur du CSS natif pour le premier projet de cette année.

## Partie JS/JSON 
Pour cette partie j'ai eu recours à une librairie de graphe nommé Chart.js pour afficher mes données JSON 

## Bilan 
Je suis assez fière du rendu final en espérant que cela respecte l'ensemble des consignes. 
C'est un bon projet et j'hâte de le poursuivre prochainement.
