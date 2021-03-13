import * as firebase from "firebase/app";

export module User {
  export class Class {
    constructor(private _uid: string, private _data: User.Schema) {}

    uid(): string {
      return this._uid;
    }

    get displayName() {
      return this._data.display_name;
    }
  }

  export interface Schema {
    display_name: string;
    //full_name?: string;
    birthday?: firebase.default.firestore.Timestamp;
    nationality?: string;
    profile_picture?: string;
    verified_email: boolean;
  }

  export interface ReferenceSchema {
    uid: string;
    display_name: string;
    profile_picture?: string;
    ref: firebase.default.firestore.DocumentReference;
  }
}
