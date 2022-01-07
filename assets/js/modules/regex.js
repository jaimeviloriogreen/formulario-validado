export class Regexp{
    get names(){
        return new RegExp("^[a-zA-ZÀ-ÿ]+[\\s]?[a-zA-ZÀ-ÿ]+$", "g");
    }

    get email(){
        return new RegExp("^([a-zA-Z-_]([0-9]+)?)+@[a-zA-Z._-]+\\.([a-zA-Z]{2,3})(\\.[a-zA-Z]{2,3})?$", "g");
    }

    get phone(){
        return new RegExp("^([1])?[-(]?(809|829|849)[)]?[-\s]?([0-9]{3})[-\s]?([0-9]{4})$", "g");
    }

    get message(){
        return new RegExp("[a-zA-ZÀ-ÿ,.:;¡!¿?]+", "gm");
    }
}