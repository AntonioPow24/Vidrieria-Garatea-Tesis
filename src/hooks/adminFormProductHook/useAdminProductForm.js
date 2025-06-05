import { useEffect, useState } from "react"
import { useAdminProductsContext } from "../../context/ProductsContext/AdminProductsContext";

export const useAddProductForm = (methodForm, productId) => {
    
    const { getProductDetailsById } = useAdminProductsContext()

    const [productInfo, setProductInfo] = useState({
        titleName: "",
        description: "",
        price: 0,
        stock: 0,
        categoryId: 0,
        file: null,
    })

    const [imagePreview, setImagePreview] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
    useEffect(() => {
        const fetchProductDetails = async () => {
            
            if (methodForm === "editar" && productId) {
                try{
                    const product = await getProductDetailsById(productId)
                    
                    if (!product) return

                    const logicDisabled = product.status === 0 ? true : false
    
                    setProductInfo({
                        titleName: product.titleName || "",
                        description: product.description || "",
                        price: product.price || 0,
                        stock: product.stock || 0,
                        categoryId: product.categoryId || 0,
                        file: null,
                    })
                    setImagePreview(product.images?.[0]?.url || null,)
                    setIsDisabled(logicDisabled)

                    const rawUrl = product.images?.[0]?.url || ""
                    const secureUrl = rawUrl.startsWith("https")
                    ? rawUrl
                    : rawUrl.replace(/^http:\/\//, "https://")

                    if (secureUrl) {
                        const file = await convertUrlToFile(secureUrl, "image.jpg");
                        if(file) {
                            setProductInfo((prevState) => ({
                                ...prevState,
                                file: [file],
                            }));
                        }
                    }
                } catch (error) {
                    console.error("Error al obtener los detalles del producto:", error);
                }
            }
        };

        fetchProductDetails();
    }, [methodForm, productId, getProductDetailsById])

    useEffect(() => {
        const { titleName, description, price, stock, categoryId, file } = productInfo
        const baseValid = 
        !!titleName &&
        !!description &&
        price > 0 &&
        stock > 0 &&
        categoryId > 0

        const hasImage =
        (Array.isArray(file) && file.length > 0) ||
        (methodForm === "editar" && !!imagePreview)

        setIsButtonDisabled(!(baseValid && hasImage))
    }, [productInfo]);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setProductInfo((prevState) => ({
            ...prevState,
            [name]: type === "number" ? (value === "" ? "" : parseFloat(value)) : value,
        }));
    };

    const handleStatusChange = (checked) => {
        setIsDisabled(checked)
    }

    const handleCategoryChange = (categoryId) => {
        setProductInfo((prevState) => ({
            ...prevState,
            categoryId: categoryId,
        }));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProductInfo((prevState) => ({
            ...prevState,
            file: [file],
        }));

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleDeleteImage = () => {
        setImagePreview(null);
        setProductInfo((prevState) => ({
            ...prevState,
            file: null,
        }));
    };

    const convertUrlToFile = async (url, fileName) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const file = new File([blob], fileName, { type: blob.type });
        return file;
    };

    return {
        productInfo,
        setProductInfo,
        imagePreview,
        isDisabled,
        isButtonDisabled,
        handleInputChange,
        handleStatusChange,
        handleCategoryChange,
        handleFileChange,
        handleDeleteImage
    }
}