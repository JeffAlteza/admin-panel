import axios from "axios";

const DOMAIN_API = process.env.NEXT_PUBLIC_PORTFOLIO_API;

export default class PRODUCTAPI {
    static async getProducts() {
        const res = await axios.get(DOMAIN_API + '/project');
        return res.data;
    }

    static async viewProduct(id) {
        const res = await axios.get(DOMAIN_API + `/project/${id}`);
        return res.data;
    }
  }