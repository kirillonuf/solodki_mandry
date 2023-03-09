import React from 'react';
import { PaginationList } from '../pagination/pagination.js';
import * as mock from "./mockProducts.json";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { hasFlag } from 'country-flag-icons';

import prod from './products.scss'
export const Products = () => {

    const [products, setProducts] = React.useState([]);
    const [countPages, setCountPages] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [limit] = React.useState(9);
    const [currentListProd, setCurrentListProd] = React.useState(currentPage * limit);

    console.log(prod);
    React.useEffect(() => {
        setProducts(mock.default)
        setCountPages(Math.ceil(products.length / limit));

        // console.log(currentListProd,currentListProd+9);
    }, [limit, products, countPages]);

    const chunkProdList = products.slice(currentListProd, currentListProd + 9)
    return (
        <Stack spacing={2}>
            <nav className='productList'>
                {
                    chunkProdList && chunkProdList.map((item) => {
                        console.log(item.codeFlag)
                        return (

                            <Link className='productList-item' to={`${item.id}`}>
                                <div className='flag'><img src={item.imageUrl} />
                                    {

                                        item.codeFlag && hasFlag(item.codeFlag.toLocaleUpperCase()) && <img
                                            title={`${item.country}`}
                                            className='flagPattern'
                                            alt="United States"
                                            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.codeFlag.toLocaleUpperCase()}.svg`} />

                                    }
                                </div>
                                <div>{item.nameProduct}</div>
                                <div className='description'>{item.description}</div>
                            </Link>)
                    })}
            </nav>
            <PaginationList className='pagination'
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                countPages={countPages}
            />
        </Stack>
    )
}