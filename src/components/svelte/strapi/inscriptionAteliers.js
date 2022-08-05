const cmsUrl = "https://cms.labonnefabrique.fr/"

export function nombreInscrits(atelierId) {
    const url = cmsUrl + "inscriptions-ateliers/count/?atelier_eq=" + atelierId
    var entetes = {"content-type": "application/json"}
    var options = { 
        method: 'GET',
        headers: entetes,
        mode: 'cors',
        cache: 'default'
    }
    return fetch(url, options)
            .then((leJSON) => {return leJSON.json()})
            .then((retour) => {return retour})
}

export function trouverInscrit(atelierId, email, token) {
    const url = cmsUrl + "inscriptions-ateliers?atelier_eq=" + atelierId + "&user.email_eq=" + email
    return verifJWT(token).then((retour)=> 
        {
            const auth = "Bearer " + token
            var entetes = new Headers({"content-type": "application/json", "Authorization": auth})
            var options = { 
                method: 'GET',
                headers: entetes,
                mode: 'cors',
                cache: 'default',
            }
            return fetch(url, options)
                .then((leJSON)=> {return leJSON.json()})
                .then((retour)=> {return retour})
        }
    )
}

export function trouverInscritByUuid(atelierId, email, uuid, token, urlRetour="") {
    const url = cmsUrl + "inscriptions-ateliers/?atelier_eq=" + atelierId + "&user.email_eq=" + email + "&uuid_eq=" + uuid
    return verifJWT(token, urlRetour).then((retour)=> 
        {
            const auth = "Bearer " + token
            var entetes = new Headers({"content-type": "application/json", "Authorization": auth})
            var options = { 
                method: 'GET',
                headers: entetes,
                mode: 'cors',
                cache: 'default',
            }
            return fetch(url, options)
                .then((leJSON)=> {return leJSON.json()})
                .then((retour)=> {return retour})
        }
    )
}

export function saveInscrits(tableInscrits) {
    const url = cmsUrl + "inscriptions-ateliers"
    return verifJWT(token).then((retour)=> 
        {
            const auth = "Bearer " + token
            var entetes = new Headers({"content-type": "application/json", "Authorization": auth})
            var tablesPromesses = []
            tableInscrits.forEach((inscrit)=> {
                var options = { 
                    method: 'POST',
                    headers: entetes,
                    mode: 'cors',
                    cache: 'default',
                    body: JSON.stringify(inscrit)
                }
                tablesPromesses.push(fetch(url, options).then((leJSON) => {return leJSON.json()}).then((retour) => {return retour}))
            })
            return Promise.all(tablesPromesses).then((retourAll) => {})
    })
}

export function deleteInscrit(idInscrit, token) {
    const url = cmsUrl + "inscriptions-ateliers/" + idInscrit
    return verifJWT(token).then((retour)=> 
        {
            const auth = "Bearer " + token
            var entetes = new Headers({"content-type": "application/json", "Authorization": auth})
            var options = { 
                method: 'DELETE',
                headers: entetes,
                mode: 'cors',
                cache: 'default',
            }
            return fetch(url, options)
                .then((leJSON)=> {return leJSON.json()})
                .then((retour)=> {console.log('retour delete', retour); return retour})
        }
    )
}