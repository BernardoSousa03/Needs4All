export type Profile = {name : string, email : string}
export type Needs = {name : string, category : string, profile : Profile, image : string, description? : string, user : boolean}
export type Message = {text : string, user : boolean};
export type MessageContainer = {deliveryUsername : string, deliveryEmail : string, messages : Message[]};
