// এখানে আপনার সব ফোল্ডার ও ইমেজ লিস্ট দিন।
const sealData = [
    {
        id: "notary",
        name_bn: "নোটারি পাবলিক",
        name_en: "Notary Public",
        icon: "fa-solid fa-stamp",
        subfolders: [
            {
                id: "dhaka",
                name_bn: "ঢাকা",
                name_en: "Dhaka",
                icon: "fa-solid fa-location-dot",
                subfolders: [
                    {
                        id: "adv-mukbul",
                        name_bn: "অ্যাডভোকেট মুকবুল হোসেন",
                        name_en: "Adv. Mukbul Hossain",
                        icon: "fa-solid fa-user-tie",
                        // এখানে সেই ব্যক্তির সিলগুলো থাকবে
                        images: [
                            "images/seal1.png",
                            "images/seal2.png"
                        ]
                    }
                ]
            },
            {
                id: "chattogram",
                name_bn: "চট্টগ্রাম",
                name_en: "Chattogram",
                icon: "fa-solid fa-location-dot",
                subfolders: []
            }
        ]
    },
    {
        id: "govt",
        name_bn: "সরকারি সিল",
        name_en: "Government",
        icon: "fa-solid fa-landmark",
        subfolders: []
    }
];
