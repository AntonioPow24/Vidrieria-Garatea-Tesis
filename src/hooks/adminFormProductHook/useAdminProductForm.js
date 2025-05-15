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
                    
                    if( product ) {
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
                    }

                    if (product.images?.[0]?.url && !productInfo.file) {
                        const file = await convertUrlToFile(product.images[0].url, "image.jpg");
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
        const isFormValid = titleName && description && price > 0 && stock > 0 && categoryId > 0 && file
        
        setIsButtonDisabled(!isFormValid);
    }, [productInfo]);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setProductInfo((prevState) => ({
            ...prevState,
            [name]: type === "number" ? (value === "" ? "" : parseFloat(value)) : value,
        }));
    };

    const handleStatusChange = (checked) => {
        // Usar api que cambia directamente el estado y localmente cambiar el estado de isDisabled
        const stateToChange = checked ? 1 : 0

        // await updateProductStatus(productId, stateToChange)
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

//       const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       if (file.type !== "image/jpeg" && file.type !== "image/png") {
//         alert("Solo se permiten archivos JPG o PNG");
//         return;
//       }

//       // TODO: CONVERTIR Y MANDAR LA IAMGEN EN FILE Y NO EN BASE64
//       // const reader = new FileReader();
//       // reader.onloadend = () => {
//       //   setImagePreview(reader.result);
//       //   setProductInfo((prev) => ({ ...prev, imageUrl: reader.result })); 
//       //   console.log(reader.result);
        
//       // };
//       // reader.readAsDataURL(file);

      
//       // Establecemos el archivo como 'file' en el estado
//       setProductInfo((prev) => ({ ...prev, file }));
//       console.log(file);
      
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };
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

    useEffect(() =>{
        console.log("Producto ha sido cambiado de estado a ", isDisabled);
    },[isDisabled])
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