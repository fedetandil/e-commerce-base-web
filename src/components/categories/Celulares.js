import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Celulares() {
    let cellphones = [
        {
            "name" : "Celular Samsung S20",
            "description" :"Descripcion del celular",
            "image" :'SamsungS20'
        },
        {
            "name" : "Celular Samsung S20",
            "description" :"Descripcion del celular",
            "image" :'SamsungS20'
        },
        {
            "name" : "Celular Samsung S20",
            "description" :"Descripcion del celular",
            "image" :'SamsungS20'
        }
    ]
    let mypage = [];
    let keyCount = 1;
    function loadProducts(){
        cellphones.map((cell,index) => {
            mypage.push( <Card key={keyCount} style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={`../../images/categories/celulares/${cell.image}.png`}
                 />
                <Card.Body>
                    <Card.Title>{cell.name}</Card.Title>
                    <Card.Text>
                        {cell.description}
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>);

            keyCount++;
        })
        return mypage;
    }

    return (
        loadProducts()
    );

}



export default Celulares;