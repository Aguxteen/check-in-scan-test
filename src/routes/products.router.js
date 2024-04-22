import { Router } from "express";
import { createProductController } from "../controllers/products/create.products.js";
import { getAllProductsController } from "../controllers/products/get.all.products.js";
import { getProductController } from "../controllers/products/get.product.js";
import { deleteProductController } from "../controllers/products/delete.product.js";
import { patchProductController } from "../controllers/products/patch.product.js";

export const productsRouter = Router();

/*
==========================================================
url --location 'http://localhost:3001/products' \
--header 'Authorization: (login token) \
--header 'Content-Type: application/json' \
--data '{
    "title": string,
    "description": string,
    "status": "stock" or "sin stock"
}'
RESPONSES: 
{
    "message": "Product created",
    "data": [
        {
            "id": "bfc2a39f-d56d-417e-ae9c-74703a113745",
            "title": "producto455",
            "description": "es un producto",
            "status": "stock",
            "createdAt": "2024-04-22T16:02:01.000Z"
        }
    ]
}
{
    "message": "Not authorized"
}
==========================================================
*/
productsRouter.post("/", createProductController);

/* 
==========================================================
url --location --request GET 'http://localhost:3001/products' \
--header 'Authorization: (login token) \
RESPONSES: 
{
    "data": [
        {
            "id": UUID,
            "title": string,
            "description": string,
            "status": "stock" or "sin stock",
            "createdAt": "2024-04-22T13:19:49.000Z"
        },
        {
            "id": UUID,
            "title": string,
            "description": string,
            "status": "stock" or "sin stock",
            "createdAt": "2024-04-22T13:19:56.000Z"
        },
    ]
}
{
    "message": "Not authorized"
}

==========================================================  

*/
productsRouter.get("/", getAllProductsController);
/*
==========================================================  
url --location --request GET 'http://localhost:3001/products/:id' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1N2I1ZjdjLTYwM2ItNDgyMy04YmNhLTA1NDdhNDU5MGZmMiIsImlhdCI6MTcxMzc4Nzc5MCwiZXhwIjoxNzEzNzk0OTkwfQ.8st2k-dQQwKF4jV8gSNAx1vza5IvR9lABDFetDPKYY4' \
RESPONSES: 
{
    "data": [
        {
            "id": UUID,
            "title": string,
            "description": string,
            "status": "stock" or "sin stock",
            "createdAt": "2024-04-22T13:19:49.000Z"
        },
}
{ 
    message: "Product not found"
}
{
    "message": "Not authorized"
}
==========================================================  
*/
productsRouter.get("/:id", getProductController);

/*
==========================================================  
url --location --request DELETE 'http://localhost:3001/products/3acdb707-a1f1-4f55-9d4a-5728f15942b4' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1N2I1ZjdjLTYwM2ItNDgyMy04YmNhLTA1NDdhNDU5MGZmMiIsImlhdCI6MTcxMzc4Nzc5MCwiZXhwIjoxNzEzNzk0OTkwfQ.8st2k-dQQwKF4jV8gSNAx1vza5IvR9lABDFetDPKYY4' \
--header 'Content-Type: application/json' \
RESPONSES: 
{
    "message": "Product eliminated",
    "data": {
         "id": UUID,
         "title": string,
         "description": string,
         "status": "stock" or "sin stock",
        "createdAt": "2024-04-22T13:19:49.000Z"
    }
}
{ 
    message: "Product not found"
}
{
    "message": "Not authorized"
}
==========================================================  
*/
productsRouter.delete("/:id", deleteProductController);

/*
==========================================================
url --location --request PATCH 'http://localhost:3001/products/82bf511e-e32b-4e34-b559-a96247109b73' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRiMWNhMmUzLTMwMGMtNDQ3ZC04YzY3LWU5ODFiOTEwMDcwNCIsImlhdCI6MTcxMzc5NjEzNywiZXhwIjoxNzEzODAzMzM3fQ.Y2FKPPEH1yiSehnkB2U7p0Y3s3lIsImJdsRJPbf2HQs' \
--header 'Content-Type: application/json' \
--data '{
    "title": string,, (optionals)
    "description": "string", (optionals)
    "status": string (optionals)
}'
RESPONSES: 
{
    "message": "Product patched",
    "data": {
        "id": UUID,
        "title": string,
        "description": string,
        "status": "stock" or "sin stock",
        "createdAt": "2024-04-22T13:19:56.000Z"
    }
}
{ 
    message: "Product not found"
}
{
    "message": "Not authorized"
}
==========================================================
*/
productsRouter.patch("/:id", patchProductController);
