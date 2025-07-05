import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const Feedbacks = writable<FeedbackModel[]>([
  {
    id: 1,
    text: "I had a great experience using this product. The quality exceeded my expectations and the customer service team was very responsive and helpful throughout the process.",
    rating: 5,
  },
  {
    id: 2,
    text: "The service was good overall, but I felt the delivery could have been faster. I had to wait a few extra days, which was slightly inconvenient for my schedule.",
    rating: 4,
  },
  {
    id: 3,
    text: "It was an average experience for me. The product works as described but there’s nothing exceptional about it that would make me recommend it enthusiastically.",
    rating: 3,
  },
  {
    id: 4,
    text: "I am really impressed with the support team. They responded to my queries almost immediately and resolved my issues without any hassle. Highly appreciated!",
    rating: 5,
  },
  {
    id: 5,
    text: "Unfortunately, I am not very satisfied with the quality of the product. It did not match the description entirely and I faced some issues within the first week of use.",
    rating: 2,
  },
  {
    id: 6,
    text: "The team behind this product was very helpful and polite. They guided me step by step during installation and followed up to make sure everything was working fine.",
    rating: 4,
  },
  {
    id: 7,
    text: "The product did not meet my expectations at all. I was hoping for better durability and performance, but it fell short in several key areas that were important to me.",
    rating: 2,
  },
  {
    id: 8,
    text: "Superb quality and excellent experience overall! I would highly recommend this to anyone looking for a reliable solution. It’s definitely worth the investment.",
    rating: 5,
  },
  {
    id: 9,
    text: "The product itself is fine but the packaging could be improved. It arrived with minor dents which was disappointing. Thankfully, the product was not damaged.",
    rating: 3,
  },
  {
    id: 10,
    text: "Very happy with the purchase! The delivery was faster than I expected and the product quality is outstanding. I will definitely be buying from this company again.",
    rating: 5,
  },
]);
Feedbacks.subscribe((dd) =>
  browser ? localStorage?.setItem("dd", JSON.stringify(dd)) : "",
);
