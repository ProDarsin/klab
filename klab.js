const item = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000}
]

const cheapest=item.filter((item)=> item.price<10);
const expsive=item.filter((item)=> item.price>500);
const total= item.reduce((a,b)=> b.price+a ,0)
const under=item.filter((item)=> item.price<10);
const total1= under.reduce((a,b)=> b.price+a ,0)
const sum=total-total1
console.log(sum)

