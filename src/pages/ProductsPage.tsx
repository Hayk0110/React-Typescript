import { useContext } from "react"
import CreateProduct from "../components/CreateProduct";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Product from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { useProduct } from "../hooks/product"
import { IProduct } from "../model"


export default function ProductsPage() {

    const { products, loading, error, addProduct } = useProduct();
    const {modal,open,close} = useContext(ModalContext);

    const createHandler = (product: IProduct) =>{
        close();
        addProduct(product);
    }


    return (
        <div className="container mx-auto max-w-2xl">

            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}

            {
                products.map(product => <Product key={product.id} product={product} />)
            }

            {
                modal && <Modal title="Create New Product" onClose={close}>
                    <CreateProduct onCreate={createHandler} />
                </Modal>
            }

            <button onClick={open} className=" fixed bottom-5 right-5 rounded-full bg-red-700 text-white px-4 py-2 text-2xl">+</button>


        </div>
    )
}
