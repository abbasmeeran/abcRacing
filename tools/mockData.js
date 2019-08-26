const users = [
  {
    id: 1,
    username: 'abbas',
    password: 'abbas',
    firstName: 'abbas',
    lastName: 'k'
  },
  {
    id: 2,
    username: 'test',
    password: 'abbas',
    firstName: 'test',
    lastName: 't'
  }
];

const drivers = [
  {
    id: 1,
    name: "Max Verstappen",
    dob: "09/30/1997",
    country: "Belgium",
    place: "Hasslet",
    photo: "/images/mv_driverprofile-v2.jpg"
  },
  {
    id: 2,
    name: "Alexander Albon",
    dob: "03/23/1996",
    country: "England",
    place: "London",
    photo: "/images/athlete_profile.jpg"
  },
  {
    id: 3,
    name: "Sebastien Buemi",
    dob: "10/31/1998",
    country: "Switzerland",
    place: "Aigle",
    photo: "/images/web_buemi.jpg"
  }
];

const races = [
  {
    id: 1,
    heading: "AUSTRALIAN GRAND PRIX",
    eventDate: "1997-09-30T09:00:00Z",
    location: "Albert Park, Melbourne",
    photo: "/images/australia_1.jpg"
  },
  {
    id: 2,
    heading: "BAHRAIN GRAND PRIX",
    eventDate: "2007-09-30T09:00:00Z",
    location: "Bahrain International Circuit, Sakhir",
    photo: "/images/bahrain_1.jpg"
  },
  {
    id: 3,
    heading: "CHINESE GRAND PRIX",
    eventDate: "2000-09-30T09:00:00Z",
    location: "Shangai International Circuit, Shangai",
    photo: "/images/china.jpg"
  },
];

const bookmarks = [];

const newBookmark = {
  id: null,
  url: "",
  user: null
}

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newBookmark,
  drivers,
  races,
  users,
  bookmarks
};
