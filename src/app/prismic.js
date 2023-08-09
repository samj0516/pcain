import * as prismic from "@prismicio/client";
import fetch from 'node-fetch'

// export default async ({ params, searchParams }) => {
//   const repositoryName = "pcainportfolio";
 
//   // const routes = [
//   //   // Update to match your website's URL structure
//   //   { type: 'home', path: '/' },
//   // ]

//   const client = prismic.createClient(repositoryName, {
//     fetchOptions: { next: { tags: ["prismic"] }, cache: "no-cache" },
//   });
//   const filmCredits = await client.getAllByType("film_credit");
//   console.log(filmCredits)
//   return filmCredits
// };
const repositoryName = "pcainportfolio";
const client = prismic.createClient(repositoryName, {fetch});
const init = async () => {
    const credits= await client.getAllByType('film_credit')
    console.log(credits)
  
    const firstPageDescriptionAsHTML = prismic.asHTML(credits[0].data.title)
  }
  
  init()