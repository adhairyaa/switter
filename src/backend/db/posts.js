import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: " taque earum riores repellat.",
    likes: 3,
    user: {
      _id: uuid(),
      name: "Tich",
      username: "Tichi",
      password: "adarshBalika123",
      userImage: "landing.jpg",
    },
  },
  {
    _id: uuid(),
    content: " Caio people.",
    likes: 3,
    user: {
      _id: uuid(),
      name: "dhairya",
      username: "weare",
      password: "adarshBalika123",
      userImage: "landing.jpg",
    },
  },
  {
    _id: uuid(),
    content: "Testing here",
    likes: 3,
    user: {
      _id: uuid(),
      name: "Test",
      username: "NPC",
      password: "adarshBalika123",
      userImage: "landing.jpg",
    },
  },
  {
    _id: uuid(),
    content: " what is up I am here",
    likes: 3,
    user: {
      _id: uuid(),
      name: "Kent",
      username: "dods",
      password: "adarshBalika123",
      userImage: "landing.jpg",
    },
  },
  {
    _id: uuid(),
    content: "mustang is here",
    likes: 3,
    user: {
      _id: uuid(),
      name: "Robin",
      username: "cars2",
      password: "adarshBalika123",
      userImage: "landing.jpg",
    },
  },
  {
    _id: uuid(),
    content: " sweeter is better",
    likes: 3,
    user: {
      _id: uuid(),
      name: "sweet",
      username: "sweet",
      password: "adarshBalika123",
      userImage: "landing.jpg",
    },
  },
];
