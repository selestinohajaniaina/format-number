// fonction de formatage du text
function format_text(text, separat) {

    // couper le text par un element, rendre en tableau et assigner a une variable new_text_list
    let new_text_list = text.split('');

    // parcourir decrement par 3 decalage les elements du tableau new_text_list
    for (let i = new_text_list.length; i > 0; i -= 3) {
        // ajouter a l'index i du tableau le separat
        new_text_list.splice(i, 0, separat);
    }

    // supprimer le dernier element du tableau, cela doit etre le separat
    new_text_list.pop();
    // retourner la valeur du new_text_list en string
    return new_text_list.join('');
}

// fonction pose
function formatNumber(number, format_chiffre = "fr", chiffres_apres_virgule = 2, arrondi = false) {

    // declarer une nouvel variable vide
    let new_nbr;

    // si la variable arrondi est true
    if(arrondi) {
        // assigner number a new_nbr et arrondisser a chiffres_apres_virgule apres la virgule
        new_nbr = number.toFixed(chiffres_apres_virgule);
    } else {
        // sinon juste assigner number a new_nbr
        new_nbr = number;
    }

    // rendre new_nbr en string
    // separer new_nbr par point et rendre en tableau
    // assigner new_nbr a la nouvel variable new_nbr_list
    let new_nbr_list = new_nbr.toString().split('.');

    // declarer result a vide;
    let result;

    // ajouter au 1er parametre du format_text() le 1er element du new_nbr_list[0]
    // si format_chiffre == 'fr' 2eme parametre du format_text() est '.'
    // sinon 2eme parametre du format_text() est ','
    // assigner format_text() a nbr_before
    let nbr_before = format_text(new_nbr_list[0], format_chiffre == 'fr' ? '.' : ',');

    // declarer nbr_after a vide;
    let nbr_after;

    // s'il existe 2eme element du new_nbr_list
    if(new_nbr_list.length > 1) {

        // couper cette 2eme element du zero a chiffres_apres_virgule
        // si la longueur chiffres_apres_virgule > new_nbr_list[1].lenght, completer le rest par '0'
        // assigner-le a nbr_after
        nbr_after = new_nbr_list[1].slice(0, chiffres_apres_virgule);
        nbr_after = nbr_after.padEnd(chiffres_apres_virgule, '0');

    }

    // additionner nbr_before par
    // si format_chiffre = fr, on reste le ','
    // sinon, on reste le '.'
    // additionner aussi a nbr_after
    // assigner tous a la variable result et retourner au fonction, la valeur
    result = nbr_before + (format_chiffre == 'fr' ? ',' : '.') + nbr_after;
    return result;
}

// console.log(formatNumber(2747612.87, 'fr', 4, false));