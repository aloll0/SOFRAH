'use client';

import Link from 'next/link';
import Image from 'next/image';
import style from './page.module.css';

const WISHLIST_ITEMS = [
  {
    id: '2',
    name: 'Beef Steak',
    price: 18.99,
    image: 'https://via.placeholder.com/280x280?text=Beef+Steak',
    rating: 4.9,
  },
  {
    id: '7',
    name: 'Chocolate Cake',
    price: 9.99,
    image: 'https://via.placeholder.com/280x280?text=Chocolate+Cake',
    rating: 4.9,
  },
];

export default function WishlistPage() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>قائمة الرغبات</h1>

      {WISHLIST_ITEMS.length > 0 ? (
        <div className={style.grid}>
          {WISHLIST_ITEMS.map((item) => (
            <div key={item.id} className={style.card}>
              <div className={style.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={280}
                  height={280}
                  className={style.image}
                />
                <button className={style.removeBtn}> ❤</button>
              </div>
              <h3 className={style.name}>{item.name}</h3>
              <div className={style.footer}>
                <span className={style.price}>${item.price.toFixed(2)}</span>
                <span className={style.rating}>⭐ {item.rating}</span>
              </div>
              <Link href={`/store/products/${item.id}`} className={style.viewBtn}>
                عرض التفاصيل
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className={style.empty}>
          <div className={style.emptyIcon}>❤️</div>
          <p>قائمة الرغبات فارغة</p>
          <Link href="/store/products" className={style.browseBtn}>
            تصفح المنتجات
          </Link>
        </div>
      )}
    </div>
  );
}
