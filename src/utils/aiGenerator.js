/**
 * Client-Side Smart Generation Engine for Dukaanly
 * Uses local heuristics and dynamic templates — 100% offline, zero paid API dependencies.
 */

const TAGLINE_TEMPLATES = {
  handicrafts: [
    "Mitti Ki Mehak, Desi Kala Ki Pehchaan",
    "Handcrafted with Love, Rooted in Tradition",
    "Bring Timeless Indian Heritage to Your Living Room",
    "Where Earth Meets Artisan Mastery"
  ],
  bakery: [
    "Freshly Baked Daily, Melt-in-Mouth Happiness",
    "Pure Butter, Artisanal Flours, Zero Preservatives",
    "Sweet Moments Baked to Perfection",
    "The Soul of Good Baking in Every Bite"
  ],
  ethnic_wear: [
    "Tradition Meets Modern Elegance",
    "Royalty in Every Weave, Grace in Every Drape",
    "Handcrafted Silks & Chikankari for Every Celebration",
    "Apna Andaaz, Shandaar Libaas"
  ],
  chai_cafe: [
    "Chai, Charcha Aur Aapka Apna Thikana",
    "Real Spices, Slow Brews, Endless Conversations",
    "Kadak Swad Jo Dil Ko Chhoo Jaye",
    "More Than Chai — An Emotion"
  ],
  spices_kirana: [
    "Shuddh Desi Swad, Khet Se Seedhe Ghar",
    "100% Pure & Single-Origin Farm Fresh Goodness",
    "Chemical-Free Nutrition for a Healthier Family",
    "The True Aroma of Authentic Indian Kitchens"
  ],
  default: [
    "Apni Dukaan Digital Pehchaan",
    "Premium Quality, Honest Pricing, Delivered to You",
    "Crafted with Passion for Everyday Delight",
    "Your Trusted Local Destination Online"
  ]
};

export function suggestTagline(businessName, categoryId) {
  const list = TAGLINE_TEMPLATES[categoryId] || TAGLINE_TEMPLATES.default;
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

export function generateBrandStory(businessName, categoryId, city = "Jaipur") {
  const name = businessName || "Hamari Dukaan";
  const place = city || "India";

  const storyTemplates = {
    handicrafts: `Welcome to ${name}. Born in the heart of ${place}, our mission is to celebrate genuine Indian craftsmanship. Every terracotta vase, diya, and handloom piece in our store is shaped by master artisans whose families have nurtured these skills for generations. When you buy from us, you bring home an enduring legacy of handmade art.`,
    bakery: `At ${name}, we believe life is too short for mass-produced desserts. Operating from ${place}, we bake small batches every morning using unbleached flours, rich dairy butter, and Belgian chocolate. Whether it's our slow-fermented country sourdough or decadent truffle cakes, we bake each item with the same love we share at our own family table.`,
    ethnic_wear: `${name} is an ode to India's timeless weaving traditions. From our studio in ${place}, we bring you handpicked Chanderi silks, modal chikankari kurtas, and artisanal block prints. We work directly with weavers to guarantee authentic heritage fabrics and ethical artisan wages.`,
    chai_cafe: `At ${name}, tea is not just a drink — it's an emotion and an afternoon ritual. Sourced from pristine high-altitude tea gardens and blended in ${place} with freshly crushed cardamom, ginger, and cloves, our brews bring people together over warmth and unforgettable flavour.`,
    spices_kirana: `At ${name}, we bring the authentic purity of farm-fresh harvests straight to your doorstep. Located in ${place}, our spices are cold-ground and our oils are traditionally wood-pressed to retain every drop of aroma and health benefit. No additives, no adulteration — only honest Indian staples.`
  };

  return storyTemplates[categoryId] || `Welcome to ${name}, your trusted destination for quality and care in ${place}. We are dedicated to providing our customers with exceptional products, friendly local service, and fair prices. Thank you for supporting our digital dukaan!`;
}

/**
 * Generates a ready-to-click WhatsApp URL with pre-filled itemized cart details
 */
export function generateWhatsAppOrderUrl(phoneNumber, cartItems, totalAmount, storeName) {
  if (!cartItems || cartItems.length === 0) return "#";

  // Clean phone number (default Indian country code if missing)
  let cleanPhone = (phoneNumber || "").replace(/[^0-9]/g, "");
  if (cleanPhone.length === 10) {
    cleanPhone = "91" + cleanPhone;
  }
  if (!cleanPhone) {
    cleanPhone = "919876543210"; // Demo phone
  }

  let text = `Namaste *${storeName}*! 🙏\n\nI want to place an order from your Dukaanly store:\n\n`;

  cartItems.forEach((item, index) => {
    text += `${index + 1}. *${item.name}* (x${item.quantity}) - ₹${item.price * item.quantity}\n`;
  });

  text += `\n📦 *Total Amount:* ₹${totalAmount}\n`;
  text += `📍 *Delivery Address:* [Please enter your address here]\n`;
  text += `💳 *Preferred Payment:* UPI / Cash on Delivery\n\n`;
  text += `_Sent via Dukaanly - Apni Dukaan Digital Pehchaan_ 🚀`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Quick Category Finder
 */
export function getCategoryById(categories, id) {
  return categories.find((c) => c.id === id) || categories[0];
}
