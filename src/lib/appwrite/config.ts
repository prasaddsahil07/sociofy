import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

export const client = new Client();     //an instance of the client

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);        //setting the client

export const account = new Account(client);             //an instance of the account
export const databases = new Databases(client);             //an instance of the databases
export const storage = new Storage(client);                 //an instance of the storage
export const avatars = new Avatars(client);             //an instance of the avatars