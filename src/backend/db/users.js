import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    name: "Tich",
    username: "Tichi",
    password: "adarshBalika123",
    userImage: "landing.jpg",
    followers: 2,
    following: 9,
  },
  {
    _id: uuid(),
    name: "dhairya",
    username: "weare",
    password: "adarshBalika123",
    userImage: "landing.jpg",
  },
  {
    _id: uuid(),
    name: "Test",
    username: "NPC",
    password: "adarshBalika123",
    userImage: "landing.jpg",
  },
  {
    _id: uuid(),
    name: "Kent",
    username: "dods",
    password: "adarshBalika123",
    userImage: "landing.jpg",
  },
  {
    _id: uuid(),
    name: "Robin",
    username: "cars2",
    password: "adarshBalika123",
    userImage: "landing.jpg",
  },
  {
    _id: uuid(),
    name: "sweet",
    username: "sweet",
    password: "adarshBalika123",
    userImage: "landing.jpg",
  },
];
