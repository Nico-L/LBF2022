const cmsUrl = "https://cms.labonnefabrique.fr/"

export function imgProxyUrl(url, options) {
    const variables = {
        url: url,
        resizing_type: options.resizing_type,
        width: options.width.toString(),
        height: options.height.toString(),
        gravity: options.gravity
    }
    const urlQuery = cmsUrl + "imgproxy"
    var entetes = {"content-type": "application/json"}
    var options = { 
        method: 'POST',
        headers: entetes,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(variables)
    }
    return fetch(urlQuery, options)
        .then((leJSON)=> {return leJSON.json()})
        .then((retour)=> { return retour; })
}