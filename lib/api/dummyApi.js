import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_DUMMY_API_URL;
export default class DUMMYAPI {
  static async fetchDummy() {
    // console.log('API_URL', API_URL);
      const dummy = await axios.get(API_URL);
      return dummy.data;
  }
}