
// require("dotenv").config();
// const fetch = require("node-fetch");
require('dotenv').config()


const urls = [
    {
        url: 'https://tbxarkrrkxrmrsziuhri.supabase.co/rest/v1/computerEngineeringCourses?select=cid',
        anon_key: process.env.GO_STUDENT_ANON_KEY
    },

    {
        url: 'https://virfzdkjeysznsnmufen.supabase.co/rest/v1/gucciClothes?select=name',
        anon_key: process.env.ZECO_SHOPPING_ANON_KEY
    },

    {
        url: 'https://ihydizyhbzwvaidfdunn.supabase.co/rest/v1/restaurant_cuisines?select=restaurant_id',
        anon_key: process.env.ZECO_EATS_ANON_KEY
    },
];





(async () => {
  for (const url of urls) {
    try {
      const res = await fetch(url.url, {
        headers: {
          apiKey: url.anon_key,
          Authorization: `Bearer ${url.anon_key}`,
        },
      });

        
      console.log(`${url.url}:::: Status: ${res.status}`);
    } catch (error) {
      console.error(`${url.url}::: Error: ${error.message}`);
    }
  }
})();

