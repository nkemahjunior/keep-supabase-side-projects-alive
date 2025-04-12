
require('dotenv').config()


const urls = [
  {
    url: "https://tbxarkrrkxrmrsziuhri.supabase.co/rest/v1/computerEngineeringCourses?select=cid",
    anon_key: process.env.GO_STUDENT_ANON_KEY,
  },
  {
    url: "https://virfzdkjeysznsnmufen.supabase.co/rest/v1/gucciClothes?select=name",
    anon_key: process.env.ZECO_SHOPPING_ANON_KEY,
  },
  {
    url: "https://ihydizyhbzwvaidfdunn.supabase.co/rest/v1/restaurant_cuisines?select=restaurant_id",
    anon_key: process.env.ZECO_EATS_ANON_KEY,
  },
];

export default async function GET(req, res) {
  const results = [];

  for (const url of urls) {
    try {
      const response = await fetch(url.url, {
        headers: {
          apiKey: url.anon_key,
          Authorization: `Bearer ${url.anon_key}`,
        },
      });
      results.push(`${url.url}:::: Status: ${response.status}`);
    } catch (error) {
      results.push(`${url.url}::: Error: ${error.message}`);
    }
  }

  res.status(200).json({ message: "Keep-alive executed", results });
}