// এখানে আপনার সব ফোল্ডার ও ইমেজ লিস্ট দিন।
// root: মূল ফোল্ডারের নাম
// sub: সাব-ফোল্ডারের নাম
// images: সাব-ফোল্ডারের ভেতরের ইমেজের নাম (সোর্স পাথ সহ)

const sealData = [
    {
        name: "নোটারি পাবলিক",
        icon: "fa-solid fa-stamp",
        subfolders: [
            {
                name: "ঢাকা বিভাগ",
                icon: "fa-solid fa-folder-open",
                images: [
                    "images/seal1.png",
                    "images/seal2.png",
                    "images/seal3.png"
                ]
            },
            {
                name: "চট্টগ্রাম বিভাগ",
                icon: "fa-solid fa-folder-open",
                images: [
                    "images/seal4.png",
                    "images/seal5.png"
                ]
            }
        ]
    },
    {
        name: "সরকারি সিল",
        icon: "fa-solid fa-landmark",
        subfolders: [
            {
                name: "সাধারণ সিল",
                icon: "fa-solid fa-folder-open",
                images: [
                    "images/Government/gov1.png",
                    "images/Government/gov2.png"
                ]
            }
        ]
    },
    {
        name: "অন্যান্য সিল",
        icon: "fa-solid fa-circle-plus",
        subfolders: [
            {
                name: "বিশেষ সিল",
                icon: "fa-solid fa-folder-open",
                images: [
                    "images/Others/extra1.png",
                    "images/Others/extra2.png"
                ]
            }
        ]
    }
];
