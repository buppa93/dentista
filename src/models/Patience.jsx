export class Patience {
    constructor(args) {
        if(args) {
            this._id = args._id ? args._id : null;
            this.name = args.name ? args.name : null;
            this.surname = args.surname ? args.surname : null;
            this.fiscalCode = args.fiscalCode ? args.fiscalCode : null;
            this.email = args.email ? args.email : null;
            this.phoneNumber = args.phoneNumber ? args.phoneNumber : null;
        }
    }
}

export default Patience;