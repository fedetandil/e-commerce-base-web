import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function Celulares() {
    let cellphones = [
        {
            "name": "Celular Samsung S20",
            "precio": "65000",
            "description": "Descripcion del celular",
            "image": 'https://www.cetrogar.com.ar/media/catalog/product/s/m/sm-g780_g781_s20fe_front_zb.png?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:'
        },
        {
            "name": "Celular Samsung M23",
            "precio": "65000",
            "description": "Descripcion del celular",
            "image": 'https://www.cetrogar.com.ar/media/catalog/product/s/m/sm-m236_galaxy_m23_5g_lightblue_frontback_raw_rgb.png?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500'
        },
        {
            "name": "Celular Samsung A20",
            "precio": "65000",
            "description": "Descripcion del celular",
            "image": 'https://www.cetrogar.com.ar/media/catalog/product/a/2/a22_gris_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500'
        }
    ]
    let mypage = [];

    function loadProducts() {
        cellphones.map((cell, index) => {

            mypage.push(<Card key={index} style={{width: '18rem'}}>
                <Card.Img variant="top" src={cell.image}
                />
                <Card.Body>
                    <Card.Title>{cell.name}</Card.Title>
                    <Card.Text>
                        {cell.description}
                    </Card.Text>
                    <p>Precio : ${cell.precio}</p>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>);
        })
        return mypage;
    }

    return (
        <div className={'category-container'}>
        <div className={'category-filter'}></div>
        <div className={'container-products'}>
            {loadProducts()}
        </div>
        </div>
    );

}


export default Celulares;