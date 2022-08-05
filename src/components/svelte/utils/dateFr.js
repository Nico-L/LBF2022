export const dateFr = {
    mois: [
    ["janvier", "jan."],
    ["février", "fév."],
    ["mars", "mars"],
    ["avril", "avr."],
    ["mai", "mai"],
    ["juin", "juin"],
    ["juillet", "juil."],
    ["août", "août"],
    ["septembre", "sept."],
    ["octobre", "oct."],
    ["novembre", "nov."],
    ["décembre", "déc."]
],
jours: [
    ["dimanche", "dim."],
    ["lundi", "lun."],
    ["mardi", "mar."],
    ["mercredi", "mer."],
    ["jeudi", "jeu."],
    ["vendredi", "ven."],
    ["samedi", "sam."]
]
}

export function getHoraire(value){
    var d = new Date(value)
    var minute = d.getMinutes() == 0 ? '00': d.getMinutes();
    return d.getHours() + "h" + minute;
}

export function getJour(value){
    var d = new Date(value)
    return d.getDate();
}

export function getJourSemaine(value) {
    var d = new Date(value)
    return d.getDay()
}

export function getMoisShort(value) {
    var d = (new Date(value)).getMonth();
    return dateFr.mois[d][1];
}

export function dateInscription(debut, fin) {
    var leDebut = new Date(debut)
    var laFin = new Date(fin)
    var leJour = (new Date(debut)).getDate();
    var leJourSemaine = dateFr.jours[(new Date(debut)).getDay()][0];
    var leMois = dateFr.mois[(new Date(debut)).getMonth()][0]
    var minuteDebut = leDebut.getMinutes() == 0 ? '00': leDebut.getMinutes();
    var minuteFin = laFin.getMinutes() == 0 ? '00': laFin.getMinutes();
    return 'le ' + leJourSemaine + ' ' + leJour + ' ' + leMois + ' de ' + leDebut.getHours() + 'h' + minuteDebut + ' à ' + laFin.getHours() + 'h' + minuteFin;
}

export function dateFormatFr(date)  {
    const leJour = (new Date(date)).getDate();
    const leJourSemaine = dateFr.jours[(new Date(date)).getDay()][0];
    const leMois = dateFr.mois[(new Date(date)).getMonth()][0]
    return 'le ' + leJourSemaine + ' ' + leJour + ' ' + leMois
}

export function dateDebutFin(date, horaireDebut, horaireFin) {
    var leDebut = new Date(date)
    const horaireD = horaireDebut.split(':')
    const horaireF = horaireFin.split(':')
    leDebut.setHours(horaireD[0])
    leDebut.setMinutes(horaireD[1])
    var laFin = new Date(date)
    laFin.setHours(horaireF[0])
    laFin.setMinutes(horaireF[1])
    var leJour = leDebut.getDate();
    var leJourSemaine = dateFr.jours[leDebut.getDay()][0];
    var leMois = dateFr.mois[leDebut.getMonth()][0]
    var minuteDebut = leDebut.getMinutes() == 0 ? '00': leDebut.getMinutes();
    var minuteFin = laFin.getMinutes() == 0 ? '00': laFin.getMinutes();
    return leJourSemaine.charAt(0).toUpperCase() + leJourSemaine.slice(1) + ' ' + leJour + ' ' + leMois + ' de ' + leDebut.getHours() + 'h' + minuteDebut + ' à ' + laFin.getHours() + 'h' + minuteFin;
}

export function horaireFr(horaire) {
    let h = horaire.split(":")
    return h[0] + 'h' + h[1]
}

export function dateMoisAnnee(date){
    const laDate = new Date(date);
    const leJour = (new Date(date)).getDate();
    const leMois = dateFr.mois[laDate.getMonth()][0];
    const lAnnee = laDate.getFullYear();
    return  'le ' + leJour + ' ' + leMois + ' ' + lAnnee
}