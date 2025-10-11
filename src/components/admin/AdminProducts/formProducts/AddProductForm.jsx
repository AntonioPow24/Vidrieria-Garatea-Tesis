import React, { useEffect, useState } from 'react'
import { useAdminProductsContext } from '../../../../context/ProductsContext/AdminProductsContext';
import { categoryProducts } from '../../../../data/categoryProducts';
import { useAddProductForm } from '../../../../hooks/adminFormProductHook/useAdminProductForm';
import SmallLoader from '../../../shared/AdminLoaders/SmallLoader';


const AddProductForm = ({ productId, methodForm, productStatus, closeModal }) => {
  const { addProduct, editProduct, getProductDetailsById, updateProductStatus } = useAdminProductsContext();

  const [isLoading, setIsLoading] = useState(false);
  const {
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
  } = useAddProductForm(methodForm, productId);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!productInfo.titleName || !productInfo.price || !productInfo.stock || !productInfo.categoryId || !productInfo.description || !imagePreview) {
      alert("Por favor complete los campos obligatorios: Título, Precio y Stock");
    return;
    }

    // const formData = {...productInfo}

    //   if (methodForm === "editar") {
    //   formData.id = productId;
    // }

    const formData = new FormData();

    formData.append("titleName", productInfo.titleName);
    formData.append("description", productInfo.description);
    formData.append("price", productInfo.price);
    formData.append("stock", productInfo.stock);
    formData.append("categoryId", productInfo.categoryId);
  
    if (productInfo.file.length > 0) {
      
      productInfo.file.forEach((file) => {
        formData.append("Photos", file);
      });
    }

    if (methodForm === "editar") {
      formData.append("id", productId);
    }
    
    setIsLoading(true);

    try {
        setIsLoading(true);
        if (methodForm === "editar") {
            
            const statusToUpdate = isDisabled ? 0 : 1;

            if (productStatus !== statusToUpdate) {
                await updateProductStatus(productId, statusToUpdate);
            }

            await editProduct(productId, formData);
        } else {
            await addProduct(formData);
        }
        if (closeModal) {
          closeModal();
        }
    } catch (error) {
        console.error("Error al enviar el formulario:", error);
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <section className='bg-adminBgWhite dark:bg-appBgBlack w-[584px] h-[630px] z-10 rounded-[20px] transition-all duration-300 overflow-hidden py-[16px] px-[22px]'>
      <form onSubmit={handleSubmit} className='flex flex-col h-full gap-[12px] justify-between'>
        <div className="flex justify-between items-center py-[16px] border-b  border-gray-300 dark:border-adminTextWhite ">
          <div className="flex-1 mr-4">
            <input
              id="titleName"
              name="titleName"
              value={productInfo.titleName}
              onChange={handleInputChange}
              className="text-xl font-medium text-adminTextDark dark:text-adminTextWhite border-none outline-none focus:outline-none px-0 h-auto w-full bg-transparent"
              placeholder="Título del producto"
              required
            />
          </div>

          {
            methodForm === "editar" && productId && 
            <div className="flex items-center gap-2 w-[170px] transition-all duration-300">
                    <div className={`w-[114px] px-[10px] py-[6px] flex justify-center items-center rounded-[6px]  ${isDisabled ? "bg-red-200" : "bg-green-200"}`}>
                          <span className={`text-sm ${isDisabled ? "text-red-500" : "text-green-500"}  transition-all duration-300`}>
                          {isDisabled ? "Deshabilitado" : "Habilitado"}
                          </span>      
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer transition-all duration-300">
                    <input 
                          type="checkbox" 
                          checked={!isDisabled} 
                          onChange={(e) => handleStatusChange(!e.target.checked)} 
                          className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purpleElectricBg after:duration-300"></div>
                    </label>
            </div>
          }
        </div>

        <div className=" flex flex-col gap-[12px]">
          <label className="text-lg font-medium text-adminTextDark dark:text-adminTextWhite block">Categoría</label>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
            {categoryProducts?.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`flex items-center gap-2 p-4 border rounded-[6px] transition-all duration-300 ${
                  productInfo.categoryId === cat.id ? "border-purple-500 bg-purpleElectricBg  border-none" : "border-[#07070760] hover:bg-[#cecece28] dark:border-adminTextWhite"
                }`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                  <div
                        className={`grid place-items-center w-6 h-6 ${
                        productInfo.categoryId === cat.id ? "text-white " : "text-gray-500 "
                        } rounded transition-all duration-300`}
                  >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                        </svg>
                  </div>
                  <span className={`capitalize text-sm font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300 ${ productInfo.categoryId === cat.id && "text-white"}`}>
                        {cat.nameCategory}
                  </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[12px] border-b  border-gray-300 dark:border-adminTextWhite pb-[16px]">
          <h3 className="text-lg font-medium text-adminTextDark dark:text-adminTextWhite">Información</h3>
          <div className="flex gap-[12px]">
            <div className='flex flex-col gap-[4px] w-[194px]'>
              <label htmlFor="image" className="text-adminTextDark dark:text-adminTextWhite">
                Imagen
              </label>
              <div className="relative rounded-lg overflow-hidden h-[200px] bg-adminInputBg dark:bg-[#353535] flex items-center justify-center">
                {imagePreview ? (
                  <div className="relative h-full">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Vista previa"
                      className="h-full w-full object-contain"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-purpleElectricBg rounded-full px-2 shadow-md"
                      onClick={handleDeleteImage}
                    >
                      <span className='text-[12px] text-white'>X</span>
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-full cursor-pointer">
                    <div className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-500">Subir imagen</span>
                    <input
                      id="image"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                )}
              </div>
            </div>
            
            <div className='flex flex-col gap-[12px] flex-1'>
              <div className='flex gap-[12px]'>
                <div className='flex flex-col gap-[4px] '>
                  <label htmlFor="price" className='text-adminTextDark dark:text-adminTextWhite'>
                    Precio
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    value={productInfo.price}
                    onChange={handleInputChange}
                    className="w-full border-none outline-none rounded-md p-2 bg-adminInputBg dark:bg-[#353535] dark:text-adminTextWhite"
                    required
                  />
                </div>

                <div className='flex flex-col gap-[4px]'>
                  <label htmlFor="stock" className='text-adminTextDark dark:text-adminTextWhite'>
                    Stock
                  </label>
                  <input
                    id="stock"
                    name="stock"
                    type="number"
                    value={productInfo.stock}
                    onChange={handleInputChange}
                    className="w-full bg-adminInputBg outline-none border-none rounded-md p-2 dark:bg-[#353535] dark:text-adminTextWhite"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[4px]">
                <label htmlFor="description" className="text-adminTextDark dark:text-adminTextWhite">
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={productInfo.description}
                  onChange={handleInputChange}
                  className="w-full min-h-[120px] rounded-md p-2 bg-adminInputBg dark:bg-[#353535] dark:text-adminTextWhite overflow-hidden outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            type="submit" 
            className={` text-text-white px-6 py-2 rounded-md ${
              isButtonDisabled || isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purpleElectricBg hover:bg-purple-600 transition-all duration-300"  
            }`}
            disabled={isButtonDisabled || isLoading}
          >
            {
              isLoading ? 
                <div className='flex items-center gap-2 w-full'>
                  <span className='text-text-white'>
                    {methodForm === "editar" ? "Actualizando" : "Creando producto"}
                  </span>
                  <div>
                    <SmallLoader />
                  </div>
                </div> 
              : 
                methodForm === "editar" ? "Actualizar producto" : "Crear producto"
            }
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProductForm;