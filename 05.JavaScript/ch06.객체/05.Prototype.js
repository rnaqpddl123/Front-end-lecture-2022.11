/*
 * Prototype - 옛날 JavaScript에서 제공하는 방법
 *           - 객체를 찍어내는 틀
 *           - 권장하는 방법은 아님
 */

function product(name, price){
    this.name=name;
    this.price=price;
    product.prototype.print = function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
}

const apple = new product('사과', 1500)
const grape = new product('포도', 3000)
const fruits = [apple, grape];

for (let fruit of fruits)
    fruit.print();