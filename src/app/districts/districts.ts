import { Component } from '@angular/core';
import { Card } from "../pages/card/card";

@Component({
  selector: 'app-districts',
  imports: [Card],
  templateUrl: './districts.html',
  styleUrl: './districts.css'
})
export class Districts {
  districts = [
    {
      id: 1,
      Name: "Thiruvananthapuram",
      Description: "Capital city of Kerala, known for Padmanabhaswamy Temple, beaches like Kovalam, and vibrant culture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Kanakakkunnu-palace-trivandrum.jpg"
    },
    {
      id: 2,
      Name: "Kollam",
      Description: "A coastal district known for Ashtamudi Lake, backwaters, and its legacy as a trading port.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/jatayuppara-sree-kodanda-rama-temple-kollam-kerala-1-attr-hero?qlt=82&ts=1742154785858"
    },
    {
      id: 3,
      Name: "Pathanamthitta",
      Description: "Spiritual heart of Kerala, home to Sabarimala and surrounded by rivers, forests, and hills.",
      image: "https://www.trawell.in/admin/images/upload/148645731AranmulaRace_Main.jpg"
    },
    {
      id: 4,
      Name: "Alappuzha",
      Description: "Famed for its houseboat cruises through scenic backwaters and lush paddy fields.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Alleppey_beach.jpg/1920px-Alleppey_beach.jpg"
    },
    {
      id: 5,
      Name: "Kottayam",
      Description: "Known for its rubber plantations, literacy, and proximity to Kumarakom backwaters.",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/07/Kottayam-church-edited.jpg"
    },
    {
      id: 6,
      Name: "Idukki",
      Description: "Mountainous district home to hill stations like Munnar, spice gardens, and the Idukki Dam.",
      image: "https://keralatourism.travel/images/destinations/places-to-visit/idukki/munnar-idukki-kerala-tourism-entry-fee-timings-holidays-reviews-small.jpg" 
    },
    {
      id: 7,
      Name: "Ernakulam",
      Description: "Hub of modern Kerala with Kochi's colonial history, shopping, and sea-facing promenades.",
      image: "https://mediaim.expedia.com/destination/1/e154ecd49bdc77a39aa47f5e3593d16b.jpg"
    },
    {
      id: 8,
      Name: "Thrissur",
      Description: "Cultural capital of Kerala, famous for Pooram festival, Vadakkumnathan Temple, and art centers.",
      image: "https://www.authenticindiatours.com/app/uploads/2022/06/Thrissur-Pooram-1400x550-c-default.jpg"
    },
    {
      
      id: 9,
      Name: "Palakkad",
      Description: "Land of paddy fields and Palakkad Fort, known as the gateway to Kerala from Tamil Nadu.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Palakkad_Fort_5.jpg"
    },
    {
      id: 10,
      Name: "Malappuram",
      Description: "Historic region with strong cultural and Islamic heritage, and beautiful hills and valleys.",
      image: "https://www.keralatourism.org/images/enchanting_kerala/large/thirunavaya_malappuram20230105140626_1260_1.jpg"
    },
    {
      id: 11,
      Name: "Kozhikode",
      Description: "Historic port where Vasco da Gama landed, now known for its beaches and food culture.",
      image: "https://b3681537.smushcdn.com/3681537/wp-content/uploads/2024/09/kozhikode-beach-1024x576.jpg?lossy=2&strip=1&webp=1"
    },
    {
      id: 12,
      Name: "Wayanad",
      Description: "Hill district with dense forests, waterfalls, wildlife, and ancient Edakkal caves.",
      image: "https://assets.cntraveller.in/photos/64a80fe81e94724098a8021d/4:3/w_960,c_limit/mountain%20shadows.jpeg"
    },
    {
      id: 13,
      Name: "Kannur",
      Description: "Cultural hub with handloom industry, traditional Theyyam rituals, and pristine beaches.",
      image: "https://assets-news.housing.com/news/wp-content/uploads/2022/09/02150351/Places-to-visit-in-Kannur-for-an-amazing-vacation2.png"
    },
    {
      id: 14,
      Name: "Kasaragod",
      Description: "Northernmost district, home to Bekal Fort, serene beaches, and multilingual heritage.",
      image: "https://www.konkan.me/wp-content/uploads/2024/05/8-Kasaragod.jpg"
    }
  ]

}
