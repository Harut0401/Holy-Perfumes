/* ============================================================
   Holy Perfume — script.js
   ============================================================ */

/* ============================================================
   // ԱՅՍՏԵՂ ԽՄԲԱԳՐԻՐ ՔՈ ԱՊՐԱՆՔՆԵՐԸ
   Holy Perfume-ը բազմաբրենդ բուտիկ է. ամեն ապրանք ունի իր
   իրական "brand" տան անունը (ցուցադրվում է քարտի eyebrow-ում)։
   Սովորական բույրերն ունեն variants զանգված՝ { size, price }
   (գինը դրամով, առանց բացատների)։
   "gifts" կատեգորիայի ապրանքները՝ առանց variants-ի, մեկ ֆիքսված
   price-ով (ընտրովի note տեքստով)։
   image՝ images/products/<id>.<ext> (իրական ֆայլերը այդ պանակում են՝
   <id>.jpg / <id>.webp; ֆայլը չբեռնվելիս ցուցադրվում է շիշ-icon-ը)։
   category արժեքները՝ "women" | "men" | "unisex" | "gifts"
   ============================================================ */
const PRODUCTS = [
  /* ---------- Տղամարդու ---------- */
  {
    id: "amouage-beach-hut-man", brand: "Amouage", name: "Beach Hut Man", category: "men",
    image: "images/products/amouage-beach-hut-man.webp",
    variants: [
      { size: "5ml", price: 8000 },
      { size: "10ml", price: 13000 },
      { size: "50ml", price: 26500 },
      { size: "100ml", price: 42000 },
    ],
  },
  {
    id: "chanel-egoiste-platinum", brand: "Chanel", name: "Égoïste Platinum", category: "men",
    image: "images/products/chanel-egoiste-platinum.webp",
    variants: [
      { size: "5ml", price: 8500 },
      { size: "10ml", price: 14000 },
      { size: "50ml", price: 28500 },
      { size: "100ml", price: 45000 },
    ],
  },
  {
    id: "creed-aventus-absolu", brand: "Creed", name: "Aventus Absolu", category: "men",
    image: "images/products/creed-aventus-absolu.jpg",
    variants: [
      { size: "5ml", price: 13000 },
      { size: "10ml", price: 21000 },
      { size: "50ml", price: 43000 },
      { size: "100ml", price: 68000 },
    ],
  },
  {
    id: "creed-centaurus", brand: "Creed", name: "Centaurus", category: "men",
    image: "images/products/creed-centaurus.jpg",
    variants: [
      { size: "5ml", price: 13500 },
      { size: "10ml", price: 22000 },
      { size: "50ml", price: 44500 },
      { size: "100ml", price: 71000 },
    ],
  },
  {
    id: "lv-imagination", brand: "Louis Vuitton", name: "Imagination", category: "men",
    image: "images/products/lv-imagination.jpg",
    variants: [
      { size: "5ml", price: 17500 },
      { size: "10ml", price: 28500 },
      { size: "50ml", price: 58000 },
      { size: "100ml", price: 92000 },
    ],
  },
  {
    id: "pdm-oajan", brand: "Parfums de Marly", name: "Oajan", category: "men",
    image: "images/products/pdm-oajan.jpg",
    variants: [
      { size: "5ml", price: 8500 },
      { size: "10ml", price: 14500 },
      { size: "50ml", price: 29000 },
      { size: "100ml", price: 46000 },
    ],
  },
  {
    id: "amouage-interlude-man", brand: "Amouage", name: "Interlude Man", category: "men",
    image: "images/products/amouage-interlude-man.jpg",
    variants: [
      { size: "5ml", price: 8500 },
      { size: "10ml", price: 13500 },
      { size: "50ml", price: 27500 },
      { size: "100ml", price: 44000 },
    ],
  },
  {
    id: "chanel-bleu-edp", brand: "Chanel", name: "Bleu de Chanel EDP", category: "men",
    image: "images/products/chanel-bleu-edp.jpg",
    variants: [
      { size: "5ml", price: 6000 },
      { size: "10ml", price: 10000 },
      { size: "50ml", price: 20000 },
      { size: "100ml", price: 32000 },
    ],
  },
  {
    id: "armani-stronger-with-you-intensely", brand: "Emporio Armani", name: "Stronger With You Intensely", category: "men",
    image: "images/products/armani-stronger-with-you-intensely.jpg",
    variants: [
      { size: "5ml", price: 6500 },
      { size: "10ml", price: 11000 },
      { size: "50ml", price: 22000 },
      { size: "100ml", price: 35000 },
    ],
  },

  /* ---------- Unisex ---------- */
  {
    id: "amouage-purpose-50", brand: "Amouage", name: "Purpose", category: "unisex",
    image: "images/products/amouage-purpose-50.webp",
    variants: [
      { size: "5ml", price: 7500 },
      { size: "10ml", price: 12000 },
      { size: "50ml", price: 24500 },
      { size: "100ml", price: 39000 },
    ],
  },
  {
    id: "clive-christian-matsukita", brand: "Clive Christian", name: "Matsukita", category: "unisex",
    image: "images/products/clive-christian-matsukita.jpg",
    variants: [
      { size: "5ml", price: 16000 },
      { size: "10ml", price: 26500 },
      { size: "50ml", price: 53500 },
      { size: "100ml", price: 85000 },
    ],
  },
  {
    id: "kilian-black-phantom", brand: "Kilian", name: "Black Phantom", category: "unisex",
    image: "images/products/kilian-black-phantom.jpg",
    variants: [
      { size: "5ml", price: 11000 },
      { size: "10ml", price: 18000 },
      { size: "50ml", price: 36500 },
      { size: "100ml", price: 58000 },
    ],
  },
  {
    id: "kilian-straight-to-heaven", brand: "Kilian", name: "Straight to Heaven", category: "unisex",
    image: "images/products/kilian-straight-to-heaven.webp",
    variants: [
      { size: "5ml", price: 11500 },
      { size: "10ml", price: 19000 },
      { size: "50ml", price: 38500 },
      { size: "100ml", price: 61000 },
    ],
  },
  {
    id: "lv-ombre-nomade", brand: "Louis Vuitton", name: "Ombre Nomade", category: "unisex",
    image: "images/products/lv-ombre-nomade.jpg",
    variants: [
      { size: "5ml", price: 18500 },
      { size: "10ml", price: 30500 },
      { size: "50ml", price: 62000 },
      { size: "100ml", price: 98000 },
    ],
  },
  {
    id: "lv-symphony", brand: "Louis Vuitton", name: "Symphony", category: "unisex",
    image: "images/products/lv-symphony.webp",
    variants: [
      { size: "5ml", price: 18000 },
      { size: "10ml", price: 29500 },
      { size: "50ml", price: 60000 },
      { size: "100ml", price: 95000 },
    ],
  },
  {
    id: "crivelli-oud-maracuja", brand: "Maison Crivelli", name: "Oud Maracuja", category: "unisex",
    image: "images/products/crivelli-oud-maracuja.webp",
    variants: [
      { size: "5ml", price: 10500 },
      { size: "10ml", price: 17500 },
      { size: "50ml", price: 35000 },
      { size: "100ml", price: 56000 },
    ],
  },
  {
    id: "initio-oud-for-greatness", brand: "Initio Parfums Prives", name: "Oud for Greatness", category: "unisex",
    image: "images/products/initio-oud-for-greatness.webp",
    variants: [
      { size: "5ml", price: 12000 },
      { size: "10ml", price: 19500 },
      { size: "50ml", price: 39500 },
      { size: "100ml", price: 63000 },
    ],
  },

  /* ---------- Կանացի ---------- */
  {
    id: "clive-christian-blonde-amber", brand: "Clive Christian", name: "Blonde Amber", category: "women",
    image: "images/products/clive-christian-blonde-amber.jpg",
    variants: [
      { size: "5ml", price: 15500 },
      { size: "10ml", price: 25500 },
      { size: "50ml", price: 51500 },
      { size: "100ml", price: 82000 },
    ],
  },
  {
    id: "lv-stellar-times", brand: "Louis Vuitton", name: "Stellar Times", category: "women",
    image: "images/products/lv-stellar-times.jpg",
    variants: [
      { size: "5ml", price: 17000 },
      { size: "10ml", price: 28000 },
      { size: "50ml", price: 57000 },
      { size: "100ml", price: 90000 },
    ],
  },
  {
    id: "crivelli-hibiscus-mahajad", brand: "Maison Crivelli", name: "Hibiscus Mahajad", category: "women",
    image: "images/products/crivelli-hibiscus-mahajad.jpg",
    variants: [
      { size: "5ml", price: 10000 },
      { size: "10ml", price: 17000 },
      { size: "50ml", price: 34000 },
      { size: "100ml", price: 54000 },
    ],
  },

  /* ---------- Նվերների հավաքածուներ (ֆիքսված գին, առանց variants) ---------- */
  {
    id: "coffret-decouverte", brand: "Holy Perfume", name: "Coffret Découverte", category: "gifts",
    price: 19000,
    note: "5 × 5ml հավաքածու մեր ամենահայտնի բույրերից",
  },
  {
    id: "coffret-signature", brand: "Holy Perfume", name: "Coffret Signature", category: "gifts",
    price: 68000,
    note: "2 ամբողջական 100ml շիշ՝ նրբագեղ նվերի արկղում",
  },
  {
    id: "miniset-voyage", brand: "Holy Perfume", name: "Mini Set Voyage", category: "gifts",
    price: 24000,
    note: "3 × 10ml ճամփորդական հավաքածու, ամեն պայուսակի համար հարմար",
  },
];

/* ============================================================
   Ներքևում ֆունկցիոնալ կոդն է — սովորաբար պետք չէ փոխել
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "holyperfume_cart_v2";

  // Քարտում լռելյայն ընտրված ծավալը (եթե չկա՝ առաջին variant-ը)
  var DEFAULT_SIZE = "50ml";

  var CATEGORY_LABELS = {
    women: "Կանացի",
    men: "Տղամարդու",
    unisex: "Unisex",
    gifts: "Նվերների հավաքածու",
  };

  // Ապրանքն ունի՞ ծավալի տարբերակներ (թե՞ ֆիքսված գին — gift)
  function hasVariants(product) {
    return !!(product && product.variants && product.variants.length);
  }

  // HTML-ի հատուկ նիշերի escape (alt / src ատրիբուտների համար)
  function escAttr(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // Ապրանքի պատկեր՝ plate-ի ներսում։
  // Միշտ գեներացվում է <img>; շիշ-icon SVG-ն մնում է որպես ֆոն/fallback.
  // Նկարը չբեռնվելիս (404) onerror-ը հեռացնում է <img>-ը → երևում է SVG-ն։
  function productMediaHtml(product) {
    var img = product.image
      ? '<img class="card-photo" src="' + escAttr(product.image) + '" alt="' +
        escAttr(product.brand + " — " + product.name) +
        '" loading="lazy" onerror="this.remove()" />'
      : "";
    var icon = product.category === "gifts" ? giftBoxSvg() : bottleSvg();
    return img + icon;
  }

  // Backup fallback՝ եթե inline onerror-ը չաշխատի (sanitizer և այլն)
  function wireImageFallbacks(container) {
    if (!container) return;
    container.querySelectorAll("img.card-photo").forEach(function (img) {
      img.addEventListener("error", function () {
        img.remove();
      });
      // արդեն ձախողված (cache-ից) նկարներ
      if (img.complete && img.naturalWidth === 0) img.remove();
    });
  }

  // Գնի ֆորմատավորում՝ 45000 -> "45,000 ֏"
  function formatPrice(value) {
    return String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ֏";
  }

  function getProduct(id) {
    return PRODUCTS.find(function (p) {
      return p.id === id;
    });
  }

  function getVariant(product, size) {
    if (!product || !product.variants) return null;
    return (
      product.variants.find(function (v) {
        return v.size === size;
      }) || null
    );
  }

  function defaultVariant(product) {
    return getVariant(product, DEFAULT_SIZE) || product.variants[0];
  }

  // Շիշ-icon (placeholder, ոչ իրական նկար)
  function bottleSvg() {
    return (
      '<svg class="bottle" viewBox="0 0 48 72" fill="none" stroke="currentColor" ' +
      'stroke-width="1.6" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="18" y="2" width="12" height="4" rx="1" />' +
      '<path d="M19 6h10v7h-10z" />' +
      '<path d="M17 13h14l3 8v43a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V21z" />' +
      '<line x1="14" y1="34" x2="34" y2="34" />' +
      "</svg>"
    );
  }

  // Նվերի արկղ-icon (placeholder՝ "gifts" կատեգորիայի ապրանքների համար,
  // քանի որ դրանք կոնկրետ մեկ շշի նկար չունեն)
  function giftBoxSvg() {
    return (
      '<svg class="gift-box" viewBox="0 0 48 48" fill="none" stroke="currentColor" ' +
      'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="6" y="18" width="36" height="24" rx="1.5" />' +
      '<path d="M6 27h36" />' +
      '<path d="M24 18v24" />' +
      '<path d="M24 18c-3-8-16-9-16-2.5 0 3.5 5.5 2.5 16 2.5z" />' +
      '<path d="M24 18c3-8 16-9 16-2.5 0 3.5-5.5 2.5-16 2.5z" />' +
      '<rect x="4" y="12" width="40" height="6" rx="1.2" />' +
      "</svg>"
    );
  }

  /* ============================================================
     Ապրանքների ցանց + ֆիլտր
     ============================================================ */
  function cardHtml(product) {
    var catLabel = CATEGORY_LABELS[product.category] || product.category;

    var middle;
    var priceValue;

    if (hasVariants(product)) {
      var selected = defaultVariant(product);
      priceValue = selected.price;
      middle =
        '<div class="size-pills" role="group" aria-label="Ծավալ">' +
        product.variants
          .map(function (v) {
            var active = v.size === selected.size;
            return (
              '<button type="button" class="size-pill' +
              (active ? " is-active" : "") +
              '" data-size="' + v.size + '" aria-pressed="' +
              (active ? "true" : "false") + '">' + v.size + "</button>"
            );
          })
          .join("") +
        "</div>";
    } else {
      // Նվերների հավաքածու — առանց ծավալի ընտրիչի
      priceValue = product.price;
      middle = product.note
        ? '<p class="card-note">' + product.note + "</p>"
        : "";
    }

    return (
      '<article class="card" data-cat="' + product.category + '" data-id="' + product.id + '">' +
        '<div class="card-plate">' + productMediaHtml(product) + "</div>" +
        '<div class="card-body">' +
          '<p class="card-brand">' + product.brand + "</p>" +
          '<h3 class="card-name">' + product.name + "</h3>" +
          '<p class="card-meta"><span class="card-cat">' + catLabel + "</span></p>" +
          middle +
          '<p class="card-price" data-price>' + formatPrice(priceValue) + "</p>" +
          '<button type="button" class="btn btn-primary card-add">Ավելացնել զամբյուղում</button>' +
        "</div>" +
      "</article>"
    );
  }

  var grid = document.getElementById("product-grid");
  var emptyMsg = document.getElementById("grid-empty");
  var chips = Array.prototype.slice.call(
    document.querySelectorAll(".filter-chip")
  );

  function renderGrid(cat) {
    if (!grid) return;
    var active = cat || "all";
    var list =
      active === "all"
        ? PRODUCTS
        : PRODUCTS.filter(function (p) {
            return p.category === active;
          });
    grid.innerHTML = list.map(cardHtml).join("");
    if (emptyMsg) emptyMsg.hidden = list.length > 0;
    wireImageFallbacks(grid);
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) {
        c.classList.remove("is-active");
      });
      chip.classList.add("is-active");
      renderGrid(chip.getAttribute("data-cat"));
    });
  });

  renderGrid("all");

  /* ============================================================
     Զամբյուղ (cart)
     state: cart = [{ id: "<productId>-<size>", productId, size, qty }]
     ============================================================ */
  var cart = loadCart();

  var drawer = document.getElementById("cart-drawer");
  var backdrop = document.getElementById("cart-backdrop");
  var cartToggle = document.querySelector("[data-cart-toggle]");
  var cartClose = document.getElementById("cart-close");
  var cartTitleEl = document.getElementById("cart-title");
  var cartItemsEl = document.getElementById("cart-items");
  var cartEmptyEl = document.getElementById("cart-empty");
  var cartFootEl = document.getElementById("cart-foot");
  var cartSubtotalEl = document.getElementById("cart-subtotal");
  var cartCheckoutBtn = document.getElementById("cart-checkout");
  var countBadge = document.querySelector("[data-cart-count]");
  var toastStack = document.getElementById("toast-stack");

  // Checkout / success տեսքեր
  var cartView = document.getElementById("cart-view");
  var checkoutView = document.getElementById("checkout-view");
  var successView = document.getElementById("success-view");
  var checkoutBackBtn = document.getElementById("checkout-back");
  var checkoutForm = document.getElementById("checkout-form");
  var orderSummaryEl = document.getElementById("order-summary");
  var successTextEl = document.getElementById("success-text");
  var successOrderIdEl = document.getElementById("success-order-id");
  var successSummaryEl = document.getElementById("success-summary");
  var successCloseBtn = document.getElementById("success-close");

  var VIEW_TITLES = {
    cart: "Զամբյուղ",
    checkout: "Ձևակերպում",
    success: "Պատվերն ընդունված է",
  };

  /* ---- localStorage ---- */
  function loadCart() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      // զտում ենք վավեր տողերը (գոյություն ունեցող ապրանք + variant/gift, qty > 0)
      return parsed
        .filter(function (row) {
          if (!row || !(Number(row.qty) > 0)) return false;
          var p = getProduct(row.productId);
          if (!p) return false;
          if (row.size) return !!getVariant(p, row.size); // variant տող
          return !hasVariants(p); // gift տող՝ ֆիքսված գնով
        })
        .map(function (row) {
          var size = row.size || null;
          return {
            id: size ? row.productId + "-" + size : row.productId,
            productId: row.productId,
            size: size,
            qty: Math.floor(Number(row.qty)),
          };
        });
    } catch (e) {
      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      /* localStorage անհասանելի է — անտեսում ենք */
    }
  }

  /* ---- Cart գործողություններ ---- */
  function findRow(id) {
    return cart.find(function (row) {
      return row.id === id;
    });
  }

  function addToCart(productId, size) {
    var product = getProduct(productId);
    if (!product) return;

    var rowId, label;
    if (hasVariants(product)) {
      if (!getVariant(product, size)) return;
      rowId = productId + "-" + size;
      label = product.name + " · " + size;
    } else {
      // Նվերների հավաքածու — size չկա
      size = null;
      rowId = productId;
      label = product.name;
    }

    var row = findRow(rowId);
    if (row) {
      row.qty += 1;
    } else {
      cart.push({ id: rowId, productId: productId, size: size, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(label + " — ավելացվեց");
  }

  function setQty(id, qty) {
    var row = findRow(id);
    if (!row) return;
    row.qty = qty;
    if (row.qty <= 0) {
      cart = cart.filter(function (r) {
        return r.id !== id;
      });
    }
    saveCart();
    updateCartUI();
  }

  function removeFromCart(id) {
    cart = cart.filter(function (r) {
      return r.id !== id;
    });
    saveCart();
    updateCartUI();
  }

  function cartCount() {
    return cart.reduce(function (sum, row) {
      return sum + row.qty;
    }, 0);
  }

  // Տողի միավոր գին՝ variant-ի կամ ֆիքսված (gift) գին
  function rowUnitPrice(row) {
    var p = getProduct(row.productId);
    if (!p) return 0;
    if (row.size) {
      var v = getVariant(p, row.size);
      return v ? v.price : 0;
    }
    return p.price || 0;
  }

  function cartSubtotal() {
    return cart.reduce(function (sum, row) {
      return sum + rowUnitPrice(row) * row.qty;
    }, 0);
  }

  /* ---- Render ---- */
  function cartRowHtml(row) {
    var p = getProduct(row.productId);
    if (!p) return "";
    if (row.size && !getVariant(p, row.size)) return "";

    var unit = rowUnitPrice(row);
    var title = row.size ? p.name + " — " + row.size : p.name;

    return (
      '<div class="cart-item" data-id="' + row.id + '">' +
        '<div class="cart-item-plate">' + productMediaHtml(p) + "</div>" +
        '<div class="cart-item-info">' +
          '<p class="cart-item-name">' + title + "</p>" +
          '<p class="cart-item-price">' + formatPrice(unit) + "</p>" +
          '<div class="qty">' +
            '<button type="button" class="qty-btn" data-act="dec" aria-label="Պակասեցնել">−</button>' +
            '<span class="qty-val">' + row.qty + "</span>" +
            '<button type="button" class="qty-btn" data-act="inc" aria-label="Ավելացնել">+</button>' +
          "</div>" +
        "</div>" +
        '<div class="cart-item-end">' +
          '<span class="cart-item-line">' + formatPrice(unit * row.qty) + "</span>" +
          '<button type="button" class="cart-item-remove" data-act="remove">Հեռացնել</button>' +
        "</div>" +
      "</div>"
    );
  }

  function updateCartUI() {
    var count = cartCount();

    if (countBadge) {
      countBadge.textContent = count;
      countBadge.hidden = count === 0;
    }

    if (cartItemsEl) {
      cartItemsEl.innerHTML = cart.map(cartRowHtml).join("");
      wireImageFallbacks(cartItemsEl);
    }
    if (cartEmptyEl) cartEmptyEl.hidden = count > 0;
    // Դատարկ զամբյուղ → footer-ը (և "Ձևակերպել պատվեր" կոճակը) թաքցվում է
    if (cartFootEl) cartFootEl.hidden = count === 0;
    if (cartCheckoutBtn) cartCheckoutBtn.disabled = count === 0;
    if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(cartSubtotal());
  }

  // Պատվերի ամփոփում (կարճ ցանկ + վերջնական գումար)
  function orderSummaryHtml() {
    var rows = cart
      .map(function (row) {
        var p = getProduct(row.productId);
        if (!p) return "";
        if (row.size && !getVariant(p, row.size)) return "";
        var unit = rowUnitPrice(row);
        var meta = (row.size ? row.size + " · " : "") + "×" + row.qty;
        return (
          '<li class="os-row"><span class="os-name">' +
          p.name +
          ' <span class="os-qty">' +
          meta +
          "</span></span><span class=\"os-line\">" +
          formatPrice(unit * row.qty) +
          "</span></li>"
        );
      })
      .join("");
    return (
      '<ul class="os-list">' +
      rows +
      "</ul>" +
      '<div class="os-total"><span>Ընդհանուր</span><span>' +
      formatPrice(cartSubtotal()) +
      "</span></div>"
    );
  }

  /* ---- Drawer-ի տեսքերի փոխարկում ---- */
  function showView(name) {
    if (cartView) cartView.hidden = name !== "cart";
    if (checkoutView) checkoutView.hidden = name !== "checkout";
    if (successView) successView.hidden = name !== "success";
    if (cartTitleEl) cartTitleEl.textContent = VIEW_TITLES[name] || VIEW_TITLES.cart;
  }

  /* ---- Drawer բացում / փակում ---- */
  function openCart() {
    if (!drawer) return;
    showView("cart"); // ամեն բացման ժամանակ վերադառնում ենք զամբյուղի տեսքին
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    if (backdrop) backdrop.hidden = false;
    document.body.classList.add("no-scroll");
    if (cartClose) cartClose.focus();
  }

  function closeCart() {
    if (!drawer) return;
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    if (backdrop) backdrop.hidden = true;
    document.body.classList.remove("no-scroll");
    if (cartToggle) cartToggle.focus();
  }

  function isCartOpen() {
    return drawer && drawer.classList.contains("is-open");
  }

  if (cartToggle) {
    cartToggle.addEventListener("click", function () {
      isCartOpen() ? closeCart() : openCart();
    });
  }
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (backdrop) backdrop.addEventListener("click", closeCart);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isCartOpen()) closeCart();
  });

  /* ---- Ապրանքի քարտ՝ ծավալի ընտրիչ + "Ավելացնել զամբյուղում" ---- */
  if (grid) {
    grid.addEventListener("click", function (e) {
      // 1. Ծավալի pill
      var pill = e.target.closest(".size-pill");
      if (pill) {
        var card = pill.closest(".card");
        if (!card) return;
        card.querySelectorAll(".size-pill").forEach(function (x) {
          x.classList.remove("is-active");
          x.setAttribute("aria-pressed", "false");
        });
        pill.classList.add("is-active");
        pill.setAttribute("aria-pressed", "true");

        var variant = getVariant(getProduct(card.getAttribute("data-id")), pill.getAttribute("data-size"));
        var priceEl = card.querySelector("[data-price]");
        if (variant && priceEl) priceEl.textContent = formatPrice(variant.price);
        return;
      }

      // 2. Ավելացնել զամբյուղում՝ ընտրված ծավալով (gift-երի դեպքում՝ առանց)
      var btn = e.target.closest(".card-add");
      if (!btn) return;
      var addCard = btn.closest(".card");
      if (!addCard) return;
      var pills = addCard.querySelectorAll(".size-pill");
      var size = null;
      if (pills.length) {
        var activePill = addCard.querySelector(".size-pill.is-active") || pills[0];
        size = activePill.getAttribute("data-size");
      }
      addToCart(addCard.getAttribute("data-id"), size);
    });
  }

  /* ---- Զամբյուղի ներսի +/− /հեռացնել ---- */
  if (cartItemsEl) {
    cartItemsEl.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-act]");
      if (!btn) return;
      var itemEl = btn.closest(".cart-item");
      if (!itemEl) return;
      var id = itemEl.getAttribute("data-id");
      var row = findRow(id);
      if (!row) return;

      var act = btn.getAttribute("data-act");
      if (act === "inc") setQty(id, row.qty + 1);
      else if (act === "dec") setQty(id, row.qty - 1);
      else if (act === "remove") removeFromCart(id);
    });
  }

  /* ---- Checkout հոսք ---- */
  function generateOrderId() {
    return "#HP-" + Math.floor(1000 + Math.random() * 9000);
  }

  // "Ձևակերպել պատվեր" → ձևի տեսք
  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener("click", function () {
      if (cartCount() === 0) return;
      if (orderSummaryEl) orderSummaryEl.innerHTML = orderSummaryHtml();
      showView("checkout");
      var first = checkoutForm && checkoutForm.querySelector("input, textarea");
      if (first) first.focus();
    });
  }

  // "← Հետ" → զամբյուղի ցուցակ
  if (checkoutBackBtn) {
    checkoutBackBtn.addEventListener("click", function () {
      showView("cart");
    });
  }

  // Submit → validate (native HTML5), հաջողության էկրան, cart-ի մաքրում
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!checkoutForm.checkValidity()) {
        checkoutForm.reportValidity();
        return;
      }

      var data = new FormData(checkoutForm);
      var name = String(data.get("name") || "").trim();
      var orderId = generateOrderId();
      var summary = orderSummaryHtml();

      if (successTextEl) {
        successTextEl.textContent =
          "Շնորհակալություն, " + name + "։ Ձեր պատվերը ընդունված է։";
      }
      if (successOrderIdEl) successOrderIdEl.textContent = orderId;
      if (successSummaryEl) successSummaryEl.innerHTML = summary;

      // cart-ի մաքրում (state + localStorage) + badge = 0
      cart = [];
      saveCart();
      updateCartUI();
      checkoutForm.reset();

      showView("success");
      if (successCloseBtn) successCloseBtn.focus();
    });
  }

  // "Փակել" → drawer-ը փակվում է, հաջորդ բացումը՝ նորմալ (զամբյուղի) վիճակում
  if (successCloseBtn) {
    successCloseBtn.addEventListener("click", function () {
      closeCart();
      showView("cart");
    });
  }

  /* ---- Toast ---- */
  function showToast(message) {
    if (!toastStack) return;
    var el = document.createElement("div");
    el.className = "toast";
    el.textContent = message;
    toastStack.appendChild(el);
    // մուտքի անիմացիա
    requestAnimationFrame(function () {
      el.classList.add("is-visible");
    });
    setTimeout(function () {
      el.classList.remove("is-visible");
      setTimeout(function () {
        el.remove();
      }, 250);
    }, 2200);
  }

  updateCartUI();

  /* ============================================================
     Այլ UI
     ============================================================ */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var navToggle = document.querySelector("[data-nav-toggle]");
  var mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    var setNav = function (open) {
      mainNav.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Փակել մենյուն" : "Բացել մենյուն");
    };
    navToggle.addEventListener("click", function () {
      setNav(!mainNav.classList.contains("is-open"));
    });
    mainNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
  }

  // Placeholder հղումներ (դեռ իրական էջ չունեն) — կանխում ենք անցումը
  document.querySelectorAll("a[data-soon]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  /* ---- Newsletter (placeholder, առանց backend-ի) ---- */
  var newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!newsletterForm.checkValidity()) {
        newsletterForm.reportValidity();
        return;
      }
      newsletterForm.innerHTML =
        '<p class="newsletter-done">Շնորհակալություն։ Դու ցուցակում ես — ստուգիր փոստդ։</p>';
      showToast("Բաժանորդագրությունը հաստատված է");
    });
  }

  /* ---- Contact ձև (contact.html, placeholder՝ առանց backend-ի) ---- */
  var contactForm = document.getElementById("contact-form");
  var contactNote = document.getElementById("contact-note");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      contactForm.reset();
      if (contactNote) contactNote.hidden = false;
      showToast("Հաղորդագրությունն ուղարկված է");
    });
  }
})();
