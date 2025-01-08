import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createProduct } from "../api/ProductApi";

const CreateProduct = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

}