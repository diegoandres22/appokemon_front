const Validation = (newpokemon) => {

    const errors = {};

    if (!newpokemon.nombre) {
        errors.nombre = 'Colócale un nombre a tu pokemon'
    }
    if (!newpokemon.vida) {
        errors.vida = 'Colócale una cantidad de vida a tu pokemon'
    }
    if (!newpokemon.ataque) {
        errors.ataque = 'Colócale una cantidad de ataque a tu pokemon'
    }
    if (!newpokemon.defensa) {
        errors.defensa = 'Colócale una cantidad de defensa a tu pokemon'
    }
    if (!newpokemon.imagen) {
        errors.imagen = 'Colócale una imagen a tu pokemon'
    }

    if (newpokemon.nombre.length > 20) {
        errors.nombre = 'El nombre no puede superar los 20 caracteres'
    }
    if (newpokemon.vida.length > 5) {
        errors.vida = 'La vida no puede superar los 5 caracteres'
    }
    if (newpokemon.ataque.length > 5) {
        errors.ataque = 'El ataque no puede superar los 5 caracteres'
    }
    if (newpokemon.defensa.length > 5) {
        errors.defensa = 'La defensa no puede superar los 5 caracteres'
    }
    if (newpokemon.velocidad.length > 5) {
        errors.velocidad = 'La velocidad no puede superar los 5 caracteres'
    }
    if (newpokemon.altura.length > 5) {
        errors.altura = 'La altura no puede superar los 5 caracteres'
    }
    if (newpokemon.peso.length > 5) {
        errors.peso = 'El peso no puede superar los 5 caracteres'
    }
    if (newpokemon.tipos.length < 1  ) {
        errors.tipos = 'Debe contener al menos un tipo'
    }

    return errors;
}

export default Validation;