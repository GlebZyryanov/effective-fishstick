import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Электрогитары" },
      { id: 2, name: "Гитары" },
      { id: 3, name: "Укулеле" },
      { id: 4, name: "Духовые" },
      { id: 5, name: "Клавишные" },
    ];
    this._brands = [
      { id: 1, name: "Gibson" },
      { id: 2, name: "Fender" },
      { id: 3, name: "Yamaha" },
      { id: 4, name: "Ibanez" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666265817_39-mykaleidoscope-ru-p-shrek-chelovek-vkontakte-43.jpg",
      },
      {
        id: 2,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666265817_39-mykaleidoscope-ru-p-shrek-chelovek-vkontakte-43.jpg",
      },
      {
        id: 3,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666265817_39-mykaleidoscope-ru-p-shrek-chelovek-vkontakte-43.jpg",
      },
      {
        id: 4,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666265817_39-mykaleidoscope-ru-p-shrek-chelovek-vkontakte-43.jpg",
      },
      {
        id: 5,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666265817_39-mykaleidoscope-ru-p-shrek-chelovek-vkontakte-43.jpg",
      },
      {
        id: 6,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666265817_39-mykaleidoscope-ru-p-shrek-chelovek-vkontakte-43.jpg",
      },
      {
        id: 7,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666265817_39-mykaleidoscope-ru-p-shrek-chelovek-vkontakte-43.jpg",
      },
      {
        id: 8,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666265817_39-mykaleidoscope-ru-p-shrek-chelovek-vkontakte-43.jpg",
      },
      {
        id: 9,
        name: "Les Paul",
        price: 40000,
        rating: 5,
        img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666265817_39-mykaleidoscope-ru-p-shrek-chelovek-vkontakte-43.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
