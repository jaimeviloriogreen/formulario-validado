export class Regexp{
    names(){
        return new RegExp("^[a-zA-ZÀ-ÿ]+[\\s]?[a-zA-ZÀ-ÿ]+$", "g");
    }
}