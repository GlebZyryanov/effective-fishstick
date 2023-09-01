import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Электрогитары" },
      { id: 2, name: "Гитары" },
    ];
    this._brands = [
      { id: 1, name: "Gibson" },
      { id: 2, name: "Fender" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "2f01baf9-b890-4417-8e92-4f324a913563.jpg",
      },
      {
        id: 2,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "2f01baf9-b890-4417-8e92-4f324a913563.jpg",
      },
      {
        id: 3,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "2f01baf9-b890-4417-8e92-4f324a913563.jpg",
      },
      {
        id: 4,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "2f01baf9-b890-4417-8e92-4f324a913563.jpg",
      },
    ];
    makeAutoObservable(this);
  }
  setTypes(types){
    this._types = types
  }
  setBrands(brands){
    this._brands=brands
  }
  setDevices(devices){
    this._devices=devices
  }

  
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices(){
    return this._devices;
  }
}
