import { getHoursMinutes, requestFormatDate } from "./formatDate";

export const buildRequestPDFPayload = (request, users, products) => {
    const {
        id: orderCode,
        orderItems,
        quantity: totalProducts,
        subtotal: subTotalOrder,
        totalOrder,
        deliveryMethod,
        cityId,
        nameCity,
        priceDelivery,
        createdDate,
        userId,
        address,
        phoneNumber,
        dni
    } = request;

    const items = orderItems.map(item => {
        const product = products.find(p => p.id === item.productId);
        return {
            itemCode: String(product.id),
            productName: product.titleName,
            quantity: item.quantity,
            price: item.price,
        };
    })

    const user = users.find(u => u.id === userId) || {};

    const clientData = {
        clientCode: user.id,
        clientPhone: phoneNumber,
        clientAddress: address,
        clientDocumentNumber: dni,
        clientName: user.userName,
        clientLastName: user.lastName,
        clientEmail: user.email
    };

    const orderDetailData = {
        orderDate: requestFormatDate(createdDate),
        orderTime: getHoursMinutes(createdDate),
        delivery: {
            deliveryMethod,
            deliveryCode: cityId,
            deliveryUbication: nameCity,
            deliveryCost: priceDelivery
        }
    };

    return {
        orderCode: String(orderCode),
        productsData: {
            items,
            totalProducts,
            subTotalOrder,
            totalOrder
        },
        clientData,
        orderDetailData
    };
}