import React from 'react'
import { MdHealthAndSafety, MdTv, MdHouse, MdSell } from "react-icons/md";
import storyTeller1 from "./assets/story-teller-01.png";
import storyTeller2 from "./assets/story-teller-02.png";
import storyTeller3 from "./assets/story-teller-03.png";
import storyTeller4 from "./assets/story-teller-04.png";

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'service',
    url: '/service',
  },
  {
    id: 3,
    text: 'accessories',
    url: '/accessories',
  },
  {
    id: 4,
    text: 'contact',
    url: '/contact',
  }
]

export const features = [
  {
    id: 1,
    icon: <MdHealthAndSafety />,
    title: 'safety first',
    text: "We have certified counselors ready to put your pets health and happiness first."
  },
  {
    id: 2,
    icon: <MdTv />,
    title: 'safety first',
    text: "Access our live webcams on your computer or mobile phone and see how your pet is doing."
  },
  {
    id: 3,
    icon: <MdHouse />,
    title: 'play yards',
    text: "We have large climate controlled play yards for pets to wag their tails around."
  },
  {
    id: 4,
    icon: <MdSell />,
    title: 'All in one pricing',
    text: "Treat your pet to all inclusive fun at one convenient rate, check in and out anytime. Socializing with other dogs."
  }
]

export const services = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/yorkshire-terrier-getting-procedure-groomer-salon-young-woman-white-tshirt-trimming-little-dog-yorkshire-terrier-puppy-getting-haircut-with-shaving-machine_1157-51401.jpg?w=1060&t=st=1674306736~exp=1674307336~hmac=c08b6997ce45980ac0a7137d5f6371eab4e367b4a27695664d369d24aa0e8ec1",
    title: 'dog grooming',
    text:
      "We use case-free drying techniques with industrial dryers and our groomers are both qualified on all breeds of dogs. This can include brushing and cutting fur, trimming nails, cleaning ears, and brushing teeth. Regular grooming can help prevent skin problems, improve a dog's overall health, and ensure they look and smell their best.",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/woman-walking-with-her-dog-walkway-park_23-2147902104.jpg?w=1060&t=st=1674306865~exp=1674307465~hmac=7873b230b0a90f525715b9d1067a92fdfc41a9b88b18b5c063d59a90fa03279a",
    title: 'dog walking',
    text:
      "We provide dog walking when you are unable to. Whether you're a busy professional who can't always be home to walk your dog during the day, or you're looking for a way to keep your dog active and engaged while you're away, we pick them up and drop them off in our fully equipped pet taxi",
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/excited-girl-with-sniny-black-hair-holding-beagle-dog-which-looking-vase-with-white-flowers-portrait-smiling-woman-sitting-round-chair-with-puppy-enjoying-good-day_197531-25336.jpg?w=1060&t=st=1674306919~exp=1674307519~hmac=33406305900d6d2198269d45cce8b6e10c1fc7d566cdebb98d2a67fd9195710a",
    title: 'dog sitters',
    text:
      'We provide certified dog sitters to stay at your home with your dogs when you are away. Our experienced and loving pet sitters will ensure that your dog is well-fed, exercised, and given plenty of love and affection.',
  },
]


export const stories = [
  {
    id: 1,
    name: 'Sarah',
    age: 50,
    image: storyTeller1,
    text: "“I have been using services of paw care for over two years and I am extremely satisfied with their service. The staff are loving and attentive to my dog's needs and I always feel confident leaving my furry friend in their care. The facility is clean and well-maintained, and I appreciate the daily updates and photos I receive while I am away. I highly recommend paw care to anyone looking for trust worthy dog care givers."
  },
  {
    id: 2,
    name: 'Dele',
    age: 50,
    image: storyTeller2,
    text: "“I can't say enough good things about Paw Care! I've been using their services for my dog for over a year now, and they always go above and beyond to make sure my furry friend is happy and healthy. The team is incredibly knowledgeable and caring, and I feel confident leaving my dog in their capable hands."
  },
  {
    id: 3,
    name: 'Segun',
    age: 50,
    image: storyTeller3,
    text: "“Paw Care is the best pet care service out there. I love that they offer personalized care plans for each animal, and their attention to detail is unmatched. Whether it's a quick check-in or a longer stay, I know my pets are in great hands with Paw Care."
  },
  {
    id: 4,
    name: 'Fela',
    age: 50,
    image: storyTeller4,
    text: "“I can't thank Paw Care enough for their exceptional service. My dog has some special needs, and the team at Paw Care always makes sure to accommodate them. They're flexible, friendly, and truly care about their clients. I feel lucky to have found such a wonderful pet care service!"
  }
]
