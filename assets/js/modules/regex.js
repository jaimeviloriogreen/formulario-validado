export class Regexp{
    get names(){
        return new RegExp("^[a-zA-ZÀ-ÿ]+[\\s]?[a-zA-ZÀ-ÿ]+$", "g");
    }

    get email(){
        return new RegExp("^([a-z-_]([0-9]+)?)+@[a-z]+\\.([a-z]{2,3})(\\.[a-z]{2,3})?$", "g");
    }

}