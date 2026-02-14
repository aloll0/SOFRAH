'use client';

import Link from 'next/link';
import Image from 'next/image';
import style from './page.module.css';

const CART_ITEMS = [
  {
    id: '1',
    name: 'Grilled Chicken',
    price: 12.99,
    quantity: 2,
    image: 'https://via.placeholder.com/100x100?text=Chicken',
  },
  {
    id: '2',
    name: 'Beef Steak',
    price: 18.99,
    quantity: 1,
    image: 'https://via.placeholder.com/100x100?text=Steak',
  },
];

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className={style.container}>
      <h1 className={style.title}>السلة</h1>

      {CART_ITEMS.length > 0 ? (
        <div className={style.wrapper}>
          <div className={style.items}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>المنتج</th>
                  <th>السعر</th>
                  <th>الكمية</th>
                  <th>المجموع</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {CART_ITEMS.map((item) => (
                  <tr key={item.id}>
                    <td className={style.productCol}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                      />
                      <span>{item.name}</span>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td className={style.subtotal}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td>
                      <button className={style.removeBtn}>✕</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={style.summary}>
            <h3 className={style.summaryTitle}>ملخص الطلب</h3>
            <div className={style.summaryRow}>
              <span>المجموع الفرعي</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={style.summaryRow}>
              <span>الشحن</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className={style.summaryRow}>
              <span>الضريبة (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className={style.summaryTotal}>
              <span>المجموع</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link href="/store/checkout" className={style.checkoutBtn}>
              متابعة الدفع
            </Link>
            <Link href="/store/products" className={style.continueBtn}>
              متابعة التسوق
            </Link>
          </div>
        </div>
      ) : (
        <div className={style.empty}>
          <p>السلة فارغة</p>
          <Link href="/store/products">تسوق الآن</Link>
        </div>
      )}
    </div>
  );
}
