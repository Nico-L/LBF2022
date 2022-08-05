const cmsUrl = "https://cms.labonnefabrique.fr/"
import {verifJWT} from "./verifJWT.js"

export function envoyerEmail(variables, token) {
    return verifJWT(token).then((retour)=> 
    {
        const url = cmsUrl + "email"
        const auth = "Bearer " + token
        var entetes = new Headers({"content-type": "application/json", "Authorization": auth})
        var options = { 
            method: 'POST',
            headers: entetes,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(variables)
        }
        return fetch(url, options)
            .then((leJSON)=> {return leJSON.json()})
        .then((retour)=> {return retour})
    })
}