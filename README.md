# Holy Perfume

Holy Perfume-ի կայքը՝ բազմաբրենդ պրեմիում օծանելիքների բուտիկի համար Երևանում։ Կանացի, տղամարդու, unisex բույրեր և նվերների հավաքածուներ՝ կատեգորիաներով ֆիլտր, զամբյուղ ու checkout հոսքով։

> **Սա demo/թեստային տարբերակ է։** Checkout-ը, newsletter-ը և կոնտակտի ձևը իրական backend կամ վճարային համակարգ չունեն — տվյալները միայն երևակայական են, պատվերները ոչ մի տեղ իրականում չեն ուղարկվում։ Զամբյուղի պարունակությունը պահվում է միայն բրաուզերի `localStorage`-ում։

## Էջեր

- `index.html` — գլխավոր էջ, ապրանքների ցանց, ֆիլտրեր, զամբյուղ
- `about.html` — Մեր մասին
- `contact.html` — Կապ

## Tech stack

- HTML5 + CSS3 (առանց framework-ի)
- Vanilla JavaScript, առանց build-քայլի կամ npm dependency-ների
- Google Fonts (Cormorant Garamond, Jost)

Backend, database կամ build tooling պետք չէ։

## Ինչպես բացել լոկալ

Կայքը զուտ static ֆայլեր են.

1. Ամենապարզը՝ բացիր `index.html`-ը ուղիղ բրաուզերում։
2. Եթե ուզում ես աշխատացնել local server-ով (ավելի մոտ իրական hosting-ի պայմաններին), գործարկիր նախագծի պանակում ցանկացած static server, օրինակ՝ `npx serve` կամ Python-ի `python -m http.server`։

## Կառուցվածք

- `script.js` — ամբողջ ֆունկցիոնալությունը՝ ապրանքների տվյալները (`PRODUCTS` array), ֆիլտրում, զամբյուղ/checkout logic
- `style.css` — ամբողջ ոճավորումը
- `images/products/` — ապրանքների լուսանկարներ (ֆայլերի անվանման կանոնները՝ այդ պանակի README-ում)
