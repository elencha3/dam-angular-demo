export class ContactForm {

    private _nombre: string;
    private _apellidos: string;
    private _telefono: string;
    private _email: string;
    private _direccion: string;
    private _localidad: string;
    private _provincia: string;
    private _pass: string;
    private _passConfirm: string;
    private _conditionCheck: boolean;

    constructor(nombre: string, apellidos: string, telefono: string, email: string, direccion: string, localidad: string, provincia: string,
        pass: string, passConfirm: string, conditionCheck: boolean) {
            this._nombre = nombre;
            this._apellidos = apellidos;
            this._telefono = telefono;
            this._email = email;
            this._direccion = direccion;
            this._localidad = localidad;
            this._provincia = provincia;
            this._pass = pass;
            this._passConfirm = passConfirm;
            this._conditionCheck = conditionCheck;

        }

        //Getters y Setters
        get nombre(): string {
            return this._nombre;
        }
        set nombre(value: string) {
            this._nombre = value;
        }
        
        get apellidos(): string {
            return this._apellidos;
        }
        set apellidos(value: string) {
            this._apellidos = value;
        }
        
        get telefono(): string {
            return this._telefono;
        }
        set telefono(value: string) {
            this._telefono = value;
        }
        get email(): string {
            return this._email;
        }
        set email(value: string) {
            this._email = value;
        }

        get direccion(): string {
            return this._direccion;
        }
        set direccion(value: string) {
            this._direccion = value;
        }

        get localidad(): string {
            return this._localidad;
        }
        set localidad(value: string) {
            this._localidad = value;
        }

        get provincia(): string {
            return this._provincia;
        }
        set provincia(value: string) {
            this._provincia = value;
        }

        get pass(): string {
            return this._pass;
        }
        set pass(value: string) {
            this._pass = value;
        }

        get passConfirm(): string {
            return this._passConfirm;
        }
        set passConfirm(value: string) {
            this._passConfirm = value;
        }

        get conditionCheck(): boolean {
            return this._conditionCheck;
        }
        set conditionCheck(value: boolean) {
            this._conditionCheck = value;
        }
    
}