import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: '1',
    name: 'One Life Graphic T-shirt',
    price: 100,
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    img_urls: [
      'https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S4pw28uCpgEspXRZu5bxXyTPo3Ajo941wuW-6gAS7dSGPEV9kcEKS1YIqM4dCXPizHPo8HMc9lv9EKV2R2NTeaNyAJCZ59y4l3vRI0w4Ja-tISpwyjRmieaLeblcg9bHZzArl12txKYwf-2UXqwNi20QjbB9kkaKs1-Ot9ev8oIe72eoTg5Y9GmTJ-3RzYsRype5P4IJ~hluRH60mJY0cSmVQ60Olk6Z5AvQgoNq5UiQ2P-MewOUe18oG0Ebhd3trQM0zmoYBCxTUMGtEyBm-YooXTNeu2WcEM0ZYvf89Zvk98W0vlofioepDTI86KYkH1wK~UVgYbSTIG7EA~zQ4Q__',
      'https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c3kI0yyYSdqyt5NgBQr7OYZgUcYmhBOgrEsbtqXwIm2rN1zH8bLqq~45QUii9AIIBeLBrSKNVYnB7M7rV~T4wDlTidkcF-V-U3v03iOk979ajDZGH2SXJuYWrV2tSskHDVUYI47Ojtp0z7nXGe6f65Eq7n8mU99Ij1WfDusSDSkxhwBYREp~8f-R8kNhVMHtIyRQ5m06XEm4OuxFIYcuLGXGoniYLlYRnl9wccMJ7qXJdCg2ozn--xQ6omXROJFxZKUBT5Xc5ptLtTBVQ5nAZhU6Z~b8WAmT-VLu1q2Sj7XMjBBoLR9Hot6DZ50TlVey3aV8QRWddJ0cY~AXyoeOTg__',
      'https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c3kI0yyYSdqyt5NgBQr7OYZgUcYmhBOgrEsbtqXwIm2rN1zH8bLqq~45QUii9AIIBeLBrSKNVYnB7M7rV~T4wDlTidkcF-V-U3v03iOk979ajDZGH2SXJuYWrV2tSskHDVUYI47Ojtp0z7nXGe6f65Eq7n8mU99Ij1WfDusSDSkxhwBYREp~8f-R8kNhVMHtIyRQ5m06XEm4OuxFIYcuLGXGoniYLlYRnl9wccMJ7qXJdCg2ozn--xQ6omXROJFxZKUBT5Xc5ptLtTBVQ5nAZhU6Z~b8WAmT-VLu1q2Sj7XMjBBoLR9Hot6DZ50TlVey3aV8QRWddJ0cY~AXyoeOTg__',
      'https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c3kI0yyYSdqyt5NgBQr7OYZgUcYmhBOgrEsbtqXwIm2rN1zH8bLqq~45QUii9AIIBeLBrSKNVYnB7M7rV~T4wDlTidkcF-V-U3v03iOk979ajDZGH2SXJuYWrV2tSskHDVUYI47Ojtp0z7nXGe6f65Eq7n8mU99Ij1WfDusSDSkxhwBYREp~8f-R8kNhVMHtIyRQ5m06XEm4OuxFIYcuLGXGoniYLlYRnl9wccMJ7qXJdCg2ozn--xQ6omXROJFxZKUBT5Xc5ptLtTBVQ5nAZhU6Z~b8WAmT-VLu1q2Sj7XMjBBoLR9Hot6DZ50TlVey3aV8QRWddJ0cY~AXyoeOTg__'
    ],
    star_mean: 4.5,
    specs: {
      color: ['Black', 'White'],
      size: ['S', 'M', 'L', 'XL'],
      style: ['Casual', 'Formal'],
      discount: 40
    },
    reviews: [
      {
        id: '1',
        user_id: '1',
        content:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        star: 5,
        datetime: new Date()
      },
      {
        id: '2',
        user_id: '2',
        content:
          'The quality of the fabric is top-notch. I love the design and the fit is perfect. I would definitely recommend this to anyone looking for a stylish and comfortable t-shirt.',
        star: 4,
        datetime: new Date()
      },
      {
        id: '3',
        user_id: '3',
        content:
          'I bought this t-shirt for my husband and he absolutely loves it. The fabric is soft and comfortable and the fit is perfect. The design is also very unique and stylish.',
        star: 5,
        datetime: new Date()
      },
      {
        id: '4',
        user_id: '4',
        content:
          'I bought this t-shirt for my son and he loves it. The fabric is soft and comfortable and the fit is perfect. The design is also very unique and stylish.',
        star: 4,
        datetime: new Date()
      }
    ]
  }
]
