import { addProductToCartQuery } from "../queries/transactionQuery";

const addProductToCartService = async ( id: number ) => {
  try {
    const res = await addProductToCartQuery( id );
    return res;

  } catch (err) {
    throw err
  }
}


export { addProductToCartService }