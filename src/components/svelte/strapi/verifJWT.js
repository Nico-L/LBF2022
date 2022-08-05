export function verifJWT (jwt, redirect="") {
    const url = "https://cms.labonnefabrique.fr/token/decrypt"
    var entetes = new Headers({"content-type": "application/json"})
    var options = { 
        method: 'POST',
        headers: entetes,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({
            token: jwt
        })
    }
    return fetch(url, options)
        .then((leJSON) => {return leJSON.json()})
        .then((retourJWT)=> {
            if (retourJWT.message === "Error: Invalid token.") {
                localStorage.removeItem('userStrapi')
                window.location.assign(window.location.origin + '/login/?' + redirect)
            } else {
                return jwt
            }
        })
        .catch((erreur) => console.log('erreur', erreur))
}