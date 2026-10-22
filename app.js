/* .theMeal · Demo học tập v7. Không sử dụng để lưu thông tin nhạy cảm hoặc giao dịch thật. */
const KEY = 'themeal-nhom8-v4'; // giữ nguyên khóa dữ liệu để không làm mất thông tin cũ

function offset(days) {
  const date = new Date();
  date.setDate(date.getDate() + Number(days || 0));
  return date.toISOString().slice(0, 10);
}

const seed = {
  premium: false,
  goal: 'Giữ cân',
  name: 'Jessica',
  username: 'Jessica',
  noticeDays: 3,
  profileImage: 'assets/avatar-jessica.svg',
  session: { loggedIn: false, role: 'user' },
  specialty: '',
  learnerCount: 12,
  foods: [
    { id: 'f1', name: 'Ức gà', group: 'Thịt', qty: 600, unit: 'g', made: '', expiry: offset(4), warn: 3 },
    { id: 'f2', name: 'Cà rốt', group: 'Rau củ', qty: 300, unit: 'g', made: '', expiry: offset(2), warn: 3 },
    { id: 'f3', name: 'Bông cải xanh', group: 'Rau củ', qty: 250, unit: 'g', made: '', expiry: offset(1), warn: 3 },
    { id: 'f4', name: 'Trứng gà', group: 'Trứng', qty: 4, unit: 'quả', made: '', expiry: offset(8), warn: 3 },
    { id: 'f5', name: 'Gạo', group: 'Đồ khô', qty: 1000, unit: 'g', made: '', expiry: offset(40), warn: 3 }
  ],
  chosen: [],
  shopping: [],
  courses: [],
  posts: [],
  expertRequests: [],
  community: [],
  helpSeen: false,
  accountData: {},
  messageReads: {},
  healthProfiles: {},
  dailyPlans: {},
  dailyDiary: {},
  connectedDevices: {},
  transactions: [{ id: 'TX-MAU-001', buyer: 'Jessica', seller: 'Taeyeon', courseId: 'demo1', kind: 'course', title: 'Ăn uống cân bằng cho người bận rộn', amount: 299000, date: new Date(Date.now()-172800000).toISOString(), sample: true }],
  messages: [
    { id: 'm1', from: 'expert', text: 'Chào Jessica, mình là Taeyeon. Nếu bạn muốn mình gợi ý thực đơn hoặc điều chỉnh bữa ăn, cứ nhắn cho mình nhé.', time: new Date().toISOString() },
    { id: 'm2', from: 'user', text: 'Mình muốn ăn uống lành mạnh hơn nhưng vẫn dễ chuẩn bị trong tuần bận rộn.', time: new Date(Date.now()-60000).toISOString() }
  ]
};

const DEMO_USERS = {
  Jessica: { username: 'Jessica', password: '1234', displayName: 'Jessica', role: 'user', avatar: 'assets/avatar-jessica.svg', specialty: '' },
  Taeyeon: { username: 'Taeyeon', password: '1234', displayName: 'Taeyeon', role: 'expert', avatar: 'assets/avatar-taeyeon.svg', specialty: 'Dinh dưỡng & sức khỏe cá nhân' },
  Tiffany: { username: 'Tiffany', password: '1234', displayName: 'Tiffany', role: 'admin', avatar: 'assets/avatar-jessica.svg', specialty: 'Quản trị hệ thống' }
};

const defaultExpertPosts = [
  { id: 'p1', title: '5 mẹo ăn uống đều đặn trong ngày bận rộn', summary: 'Gợi ý sắp xếp bữa chính và bữa phụ để duy trì năng lượng.', date: offset(-2) },
  { id: 'p2', title: 'Tận dụng thực phẩm gần hết hạn để giảm lãng phí', summary: 'Một số nguyên tắc chọn món và bảo quản nguyên liệu trong tủ lạnh.', date: offset(-1) }
];

const defaultCourses = [
  { id: 'demo1', title: 'Ăn uống cân bằng cho người bận rộn', owner: 'Chuyên gia dinh dưỡng (mẫu)', price: 299000, desc: 'Kiến thức nền tảng về khẩu phần, thói quen ăn uống và kế hoạch bữa ăn.' },
  { id: 'demo2', title: 'Luyện tập và dinh dưỡng tăng cơ', owner: 'Chuyên gia huấn luyện (mẫu)', price: 459000, desc: 'Lịch tập cơ bản kết hợp bữa ăn đủ năng lượng.' }
];

const recipes = [
    {
        "id": "r1",
        "name": "Ức gà áp chảo rau củ",
        "emoji": "🥗",
        "kcal": 385,
        "protein": 40,
        "carb": 18,
        "fat": 13,
        "mins": 25,
        "goals": [
            "Giữ cân",
            "Giảm cân",
            "Tăng cơ"
        ],
        "ingredients": [
            [
                "Ức gà",
                200,
                "g"
            ],
            [
                "Cà rốt",
                100,
                "g"
            ],
            [
                "Bông cải xanh",
                150,
                "g"
            ]
        ],
        "steps": [
            "Sơ chế gà và thái rau củ vừa ăn.",
            "Áp chảo thịt gà đến khi chín hoàn toàn.",
            "Hấp rau củ, nêm vừa phải rồi bày ra đĩa."
        ]
    },
    {
        "id": "r2",
        "name": "Cơm gà và trứng",
        "emoji": "🍛",
        "kcal": 560,
        "protein": 44,
        "carb": 58,
        "fat": 17,
        "mins": 30,
        "goals": [
            "Giữ cân",
            "Tăng cơ"
        ],
        "ingredients": [
            [
                "Ức gà",
                200,
                "g"
            ],
            [
                "Gạo",
                90,
                "g"
            ],
            [
                "Trứng gà",
                1,
                "quả"
            ]
        ],
        "steps": [
            "Nấu cơm từ gạo.",
            "Luộc trứng và áp chảo ức gà đến khi chín.",
            "Bày cơm cùng gà và trứng."
        ]
    },
    {
        "id": "r3",
        "name": "Salad trứng rau xanh",
        "emoji": "🥬",
        "kcal": 245,
        "protein": 16,
        "carb": 12,
        "fat": 15,
        "mins": 15,
        "goals": [
            "Giảm cân",
            "Giữ cân"
        ],
        "ingredients": [
            [
                "Trứng gà",
                2,
                "quả"
            ],
            [
                "Bông cải xanh",
                150,
                "g"
            ],
            [
                "Cà rốt",
                80,
                "g"
            ]
        ],
        "steps": [
            "Luộc trứng chín và cắt miếng.",
            "Chần bông cải, cà rốt rồi để ráo.",
            "Trộn rau và trứng với gia vị phù hợp."
        ]
    },
    {
        "id": "r4",
        "name": "Cơm cá hấp gừng",
        "emoji": "🐟",
        "kcal": 470,
        "protein": 34,
        "carb": 57,
        "fat": 10,
        "mins": 35,
        "goals": [
            "Giữ cân",
            "Giảm cân"
        ],
        "ingredients": [
            [
                "Cá",
                200,
                "g"
            ],
            [
                "Gạo",
                90,
                "g"
            ],
            [
                "Gừng",
                20,
                "g"
            ]
        ],
        "steps": [
            "Vo gạo và nấu cơm.",
            "Làm sạch cá, hấp cùng gừng đến khi chín.",
            "Ăn cùng cơm và rau nếu có."
        ]
    },
    {
        "id": "r5",
        "name": "Cháo gà cà rốt",
        "emoji": "🥣",
        "kcal": 360,
        "protein": 27,
        "carb": 49,
        "fat": 6,
        "mins": 40,
        "goals": [
            "Giảm cân",
            "Giữ cân"
        ],
        "ingredients": [
            [
                "Ức gà",
                130,
                "g"
            ],
            [
                "Gạo",
                80,
                "g"
            ],
            [
                "Cà rốt",
                100,
                "g"
            ]
        ],
        "steps": [
            "Ninh gạo với nước thành cháo.",
            "Cho ức gà đã sơ chế vào nấu chín.",
            "Thêm cà rốt, nêm và nấu đến khi mềm."
        ]
    },
    {
        "id": "r6",
        "name": "Bò xào bông cải",
        "emoji": "🥩",
        "kcal": 410,
        "protein": 39,
        "carb": 17,
        "fat": 19,
        "mins": 20,
        "goals": [
            "Tăng cơ",
            "Giữ cân"
        ],
        "ingredients": [
            [
                "Thịt bò",
                200,
                "g"
            ],
            [
                "Bông cải xanh",
                200,
                "g"
            ],
            [
                "Tỏi",
                15,
                "g"
            ]
        ],
        "steps": [
            "Thái mỏng thịt bò và bông cải.",
            "Xào thịt bò chín kỹ rồi cho rau vào.",
            "Nêm gia vị vừa ăn."
        ]
    }
];
// Bộ thực đơn Việt Nam: định lượng và macro ước tính cho một khẩu phần; không phải dữ liệu xét nghiệm.
const vietnameseRecipes = [
  {
    "id": "vn7",
    "name": "Phở bò tái chín",
    "emoji": "🍜",
    "kcal": 486,
    "protein": 36,
    "carb": 51,
    "fat": 15,
    "mins": 40,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Phở",
        180,
        "g"
      ],
      [
        "Thịt bò",
        120,
        "g"
      ],
      [
        "Hành tây",
        40,
        "g"
      ],
      [
        "Hành lá",
        10,
        "g"
      ],
      [
        "Gừng",
        10,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn8",
    "name": "Phở gà",
    "emoji": "🍜",
    "kcal": 448,
    "protein": 37,
    "carb": 50,
    "fat": 10,
    "mins": 40,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Phở",
        180,
        "g"
      ],
      [
        "Thịt gà",
        120,
        "g"
      ],
      [
        "Hành tây",
        40,
        "g"
      ],
      [
        "Gừng",
        8,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn9",
    "name": "Bún bò Huế",
    "emoji": "🍲",
    "kcal": 528,
    "protein": 38,
    "carb": 56,
    "fat": 16,
    "mins": 55,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bún",
        200,
        "g"
      ],
      [
        "Thịt bò",
        130,
        "g"
      ],
      [
        "Sả",
        12,
        "g"
      ],
      [
        "Hành tây",
        35,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn10",
    "name": "Bún riêu cua chay",
    "emoji": "🍲",
    "kcal": 339,
    "protein": 15,
    "carb": 58,
    "fat": 6,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bún",
        200,
        "g"
      ],
      [
        "Đậu hũ",
        120,
        "g"
      ],
      [
        "Cà chua",
        100,
        "g"
      ],
      [
        "Rau sống",
        50,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn11",
    "name": "Bún chả",
    "emoji": "🍜",
    "kcal": 565,
    "protein": 36,
    "carb": 51,
    "fat": 22,
    "mins": 45,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bún",
        180,
        "g"
      ],
      [
        "Thịt heo",
        120,
        "g"
      ],
      [
        "Rau sống",
        80,
        "g"
      ],
      [
        "Cà rốt",
        40,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Nướng đến khi thực phẩm chín kỹ, hạn chế làm cháy sém.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn12",
    "name": "Bún thịt nướng",
    "emoji": "🍜",
    "kcal": 553,
    "protein": 36,
    "carb": 49,
    "fat": 22,
    "mins": 40,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bún",
        180,
        "g"
      ],
      [
        "Thịt heo",
        120,
        "g"
      ],
      [
        "Dưa leo",
        70,
        "g"
      ],
      [
        "Rau sống",
        50,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Nướng đến khi thực phẩm chín kỹ, hạn chế làm cháy sém.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn13",
    "name": "Bún cá",
    "emoji": "🐟",
    "kcal": 383,
    "protein": 38,
    "carb": 49,
    "fat": 4,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bún",
        180,
        "g"
      ],
      [
        "Cá rô phi",
        130,
        "g"
      ],
      [
        "Cà chua",
        80,
        "g"
      ],
      [
        "Hành lá",
        12,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn14",
    "name": "Miến gà",
    "emoji": "🍜",
    "kcal": 476,
    "protein": 35,
    "carb": 59,
    "fat": 10,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Miến",
        65,
        "g"
      ],
      [
        "Thịt gà",
        120,
        "g"
      ],
      [
        "Nấm",
        80,
        "g"
      ],
      [
        "Hành lá",
        10,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn15",
    "name": "Miến xào tôm",
    "emoji": "🍤",
    "kcal": 442,
    "protein": 30,
    "carb": 68,
    "fat": 6,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Miến",
        70,
        "g"
      ],
      [
        "Tôm",
        120,
        "g"
      ],
      [
        "Cà rốt",
        60,
        "g"
      ],
      [
        "Cải thìa",
        70,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn16",
    "name": "Mì xào bò",
    "emoji": "🍜",
    "kcal": 581,
    "protein": 39,
    "carb": 54,
    "fat": 22,
    "mins": 30,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Mì",
        190,
        "g"
      ],
      [
        "Thịt bò",
        110,
        "g"
      ],
      [
        "Cải ngọt",
        90,
        "g"
      ],
      [
        "Hành tây",
        40,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn17",
    "name": "Mì xào hải sản",
    "emoji": "🍤",
    "kcal": 419,
    "protein": 39,
    "carb": 44,
    "fat": 10,
    "mins": 30,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Mì",
        160,
        "g"
      ],
      [
        "Tôm",
        80,
        "g"
      ],
      [
        "Mực",
        70,
        "g"
      ],
      [
        "Cải thìa",
        80,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn18",
    "name": "Cơm tấm sườn",
    "emoji": "🍛",
    "kcal": 685,
    "protein": 41,
    "carb": 72,
    "fat": 24,
    "mins": 45,
    "goals": [
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Gạo",
        85,
        "g"
      ],
      [
        "Thịt heo",
        130,
        "g"
      ],
      [
        "Dưa leo",
        60,
        "g"
      ],
      [
        "Cà chua",
        60,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Nướng đến khi thực phẩm chín kỹ, hạn chế làm cháy sém.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn19",
    "name": "Cơm gà xé",
    "emoji": "🍚",
    "kcal": 538,
    "protein": 39,
    "carb": 68,
    "fat": 10,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Gạo",
        80,
        "g"
      ],
      [
        "Thịt gà",
        120,
        "g"
      ],
      [
        "Dưa leo",
        70,
        "g"
      ],
      [
        "Hành tây",
        30,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm chín các thành phần cần nấu, để nguội bớt rồi trộn đều.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn20",
    "name": "Cơm chiên trứng",
    "emoji": "🍛",
    "kcal": 555,
    "protein": 21,
    "carb": 82,
    "fat": 15,
    "mins": 20,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Gạo",
        90,
        "g"
      ],
      [
        "Trứng gà",
        2,
        "quả"
      ],
      [
        "Cà rốt",
        60,
        "g"
      ],
      [
        "Đậu que",
        60,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn21",
    "name": "Cơm chiên tôm",
    "emoji": "🍛",
    "kcal": 512,
    "protein": 35,
    "carb": 79,
    "fat": 7,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Gạo",
        85,
        "g"
      ],
      [
        "Tôm",
        110,
        "g"
      ],
      [
        "Đậu que",
        60,
        "g"
      ],
      [
        "Ngô",
        40,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn22",
    "name": "Cơm gạo lứt ức gà",
    "emoji": "🍱",
    "kcal": 609,
    "protein": 49,
    "carb": 77,
    "fat": 11,
    "mins": 30,
    "goals": [
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Gạo",
        80,
        "g"
      ],
      [
        "Ức gà",
        130,
        "g"
      ],
      [
        "Bông cải xanh",
        100,
        "g"
      ],
      [
        "Cà rốt",
        70,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo, áp chảo từng mặt đến khi chín kỹ; dùng ít dầu.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn23",
    "name": "Cháo thịt bằm",
    "emoji": "🥣",
    "kcal": 502,
    "protein": 29,
    "carb": 63,
    "fat": 13,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Gạo",
        70,
        "g"
      ],
      [
        "Thịt heo",
        90,
        "g"
      ],
      [
        "Cà rốt",
        70,
        "g"
      ],
      [
        "Hành lá",
        10,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn24",
    "name": "Cháo cá",
    "emoji": "🥣",
    "kcal": 418,
    "protein": 31,
    "carb": 58,
    "fat": 6,
    "mins": 40,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Gạo",
        70,
        "g"
      ],
      [
        "Cá",
        130,
        "g"
      ],
      [
        "Gừng",
        8,
        "g"
      ],
      [
        "Hành lá",
        12,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn25",
    "name": "Cháo tôm bí đỏ",
    "emoji": "🥣",
    "kcal": 384,
    "protein": 35,
    "carb": 59,
    "fat": 1,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Gạo",
        65,
        "g"
      ],
      [
        "Tôm",
        120,
        "g"
      ],
      [
        "Bí đỏ",
        120,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn26",
    "name": "Cháo đậu xanh",
    "emoji": "🥣",
    "kcal": 385,
    "protein": 16,
    "carb": 74,
    "fat": 3,
    "mins": 40,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Gạo",
        55,
        "g"
      ],
      [
        "Đậu xanh",
        45,
        "g"
      ],
      [
        "Sữa",
        50,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn27",
    "name": "Canh chua cá",
    "emoji": "🍲",
    "kcal": 226,
    "protein": 33,
    "carb": 10,
    "fat": 6,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Cá",
        150,
        "g"
      ],
      [
        "Cà chua",
        100,
        "g"
      ],
      [
        "Bầu",
        100,
        "g"
      ],
      [
        "Rau muống",
        70,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn28",
    "name": "Canh bí đỏ thịt bằm",
    "emoji": "🥣",
    "kcal": 244,
    "protein": 23,
    "carb": 12,
    "fat": 11,
    "mins": 30,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bí đỏ",
        180,
        "g"
      ],
      [
        "Thịt heo",
        80,
        "g"
      ],
      [
        "Hành lá",
        10,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn29",
    "name": "Canh rau ngót thịt bằm",
    "emoji": "🥣",
    "kcal": 227,
    "protein": 25,
    "carb": 6,
    "fat": 12,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Rau muống",
        160,
        "g"
      ],
      [
        "Thịt heo",
        80,
        "g"
      ],
      [
        "Hành lá",
        10,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn30",
    "name": "Canh mướp nấu tôm",
    "emoji": "🥣",
    "kcal": 143,
    "protein": 27,
    "carb": 10,
    "fat": 1,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Mướp",
        200,
        "g"
      ],
      [
        "Tôm",
        100,
        "g"
      ],
      [
        "Hành lá",
        12,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn31",
    "name": "Canh bầu nấu tôm",
    "emoji": "🥣",
    "kcal": 133,
    "protein": 25,
    "carb": 8,
    "fat": 1,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bầu",
        200,
        "g"
      ],
      [
        "Tôm",
        100,
        "g"
      ],
      [
        "Hành lá",
        12,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn32",
    "name": "Canh khổ qua nhồi thịt",
    "emoji": "🥣",
    "kcal": 321,
    "protein": 33,
    "carb": 7,
    "fat": 17,
    "mins": 45,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Khổ qua",
        160,
        "g"
      ],
      [
        "Thịt heo",
        120,
        "g"
      ],
      [
        "Hành lá",
        10,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn33",
    "name": "Canh cải thảo đậu hũ",
    "emoji": "🥣",
    "kcal": 158,
    "protein": 16,
    "carb": 11,
    "fat": 8,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Cải thảo",
        180,
        "g"
      ],
      [
        "Đậu hũ",
        150,
        "g"
      ],
      [
        "Nấm",
        70,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn34",
    "name": "Canh nấm đậu phụ",
    "emoji": "🍄",
    "kcal": 150,
    "protein": 17,
    "carb": 9,
    "fat": 8,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Nấm",
        150,
        "g"
      ],
      [
        "Đậu hũ",
        150,
        "g"
      ],
      [
        "Hành lá",
        10,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn35",
    "name": "Cá hấp gừng hành",
    "emoji": "🐟",
    "kcal": 243,
    "protein": 38,
    "carb": 5,
    "fat": 8,
    "mins": 30,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Cá",
        180,
        "g"
      ],
      [
        "Gừng",
        12,
        "g"
      ],
      [
        "Hành lá",
        15,
        "g"
      ],
      [
        "Cải thìa",
        100,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Hấp hoặc luộc trong thời gian phù hợp đến khi thực phẩm chín hoàn toàn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn36",
    "name": "Cá rô phi áp chảo",
    "emoji": "🐟",
    "kcal": 302,
    "protein": 48,
    "carb": 6,
    "fat": 10,
    "mins": 30,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Cá rô phi",
        180,
        "g"
      ],
      [
        "Cà chua",
        100,
        "g"
      ],
      [
        "Dưa leo",
        60,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo, áp chảo từng mặt đến khi chín kỹ; dùng ít dầu.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn37",
    "name": "Cá thu sốt cà chua",
    "emoji": "🐟",
    "kcal": 378,
    "protein": 28,
    "carb": 10,
    "fat": 25,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Cá thu",
        140,
        "g"
      ],
      [
        "Cà chua",
        150,
        "g"
      ],
      [
        "Hành tây",
        50,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Ướp nhạt, đun nhỏ lửa với một ít nước đến khi chín kỹ và nước sánh.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn38",
    "name": "Cá hồi nướng rau củ",
    "emoji": "🐟",
    "kcal": 430,
    "protein": 34,
    "carb": 16,
    "fat": 25,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Cá hồi",
        150,
        "g"
      ],
      [
        "Bông cải xanh",
        120,
        "g"
      ],
      [
        "Cà rốt",
        80,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Nướng đến khi thực phẩm chín kỹ, hạn chế làm cháy sém.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn39",
    "name": "Cá kho tộ",
    "emoji": "🐟",
    "kcal": 253,
    "protein": 33,
    "carb": 3,
    "fat": 11,
    "mins": 45,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Cá",
        160,
        "g"
      ],
      [
        "Hành tây",
        30,
        "g"
      ],
      [
        "Nước mắm",
        10,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Ướp nhạt, đun nhỏ lửa với một ít nước đến khi chín kỹ và nước sánh.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn40",
    "name": "Thịt kho trứng",
    "emoji": "🥚",
    "kcal": 412,
    "protein": 38,
    "carb": 1,
    "fat": 27,
    "mins": 50,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Thịt heo",
        120,
        "g"
      ],
      [
        "Trứng gà",
        1,
        "quả"
      ],
      [
        "Nước mắm",
        10,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Ướp nhạt, đun nhỏ lửa với một ít nước đến khi chín kỹ và nước sánh.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn41",
    "name": "Thịt heo luộc rau sống",
    "emoji": "🍖",
    "kcal": 345,
    "protein": 36,
    "carb": 6,
    "fat": 18,
    "mins": 30,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Thịt heo",
        130,
        "g"
      ],
      [
        "Rau sống",
        100,
        "g"
      ],
      [
        "Dưa leo",
        70,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm chín các thành phần cần nấu, để nguội bớt rồi trộn đều.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn42",
    "name": "Thịt bò xào hành tây",
    "emoji": "🥩",
    "kcal": 417,
    "protein": 38,
    "carb": 16,
    "fat": 22,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Thịt bò",
        140,
        "g"
      ],
      [
        "Hành tây",
        100,
        "g"
      ],
      [
        "Cà rốt",
        70,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn43",
    "name": "Thịt bò xào đậu que",
    "emoji": "🥩",
    "kcal": 399,
    "protein": 39,
    "carb": 11,
    "fat": 22,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Thịt bò",
        140,
        "g"
      ],
      [
        "Đậu que",
        140,
        "g"
      ],
      [
        "Tỏi",
        5,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn44",
    "name": "Gà hấp gừng",
    "emoji": "🍗",
    "kcal": 317,
    "protein": 44,
    "carb": 3,
    "fat": 13,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Thịt gà",
        160,
        "g"
      ],
      [
        "Gừng",
        12,
        "g"
      ],
      [
        "Hành lá",
        12,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Hấp hoặc luộc trong thời gian phù hợp đến khi thực phẩm chín hoàn toàn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn45",
    "name": "Gà kho sả",
    "emoji": "🍗",
    "kcal": 348,
    "protein": 41,
    "carb": 4,
    "fat": 17,
    "mins": 40,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Thịt gà",
        150,
        "g"
      ],
      [
        "Sả",
        14,
        "g"
      ],
      [
        "Nước mắm",
        10,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Ướp nhạt, đun nhỏ lửa với một ít nước đến khi chín kỹ và nước sánh.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn46",
    "name": "Ức gà xào nấm",
    "emoji": "🍗",
    "kcal": 333,
    "protein": 52,
    "carb": 6,
    "fat": 11,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Ức gà",
        150,
        "g"
      ],
      [
        "Nấm",
        140,
        "g"
      ],
      [
        "Cải thìa",
        80,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn47",
    "name": "Tôm rang tỏi",
    "emoji": "🍤",
    "kcal": 237,
    "protein": 41,
    "carb": 7,
    "fat": 6,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Tôm",
        160,
        "g"
      ],
      [
        "Tỏi",
        10,
        "g"
      ],
      [
        "Cải ngọt",
        90,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn48",
    "name": "Tôm hấp sả",
    "emoji": "🍤",
    "kcal": 205,
    "protein": 44,
    "carb": 7,
    "fat": 1,
    "mins": 20,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Tôm",
        180,
        "g"
      ],
      [
        "Sả",
        15,
        "g"
      ],
      [
        "Dưa leo",
        80,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Hấp hoặc luộc trong thời gian phù hợp đến khi thực phẩm chín hoàn toàn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn49",
    "name": "Mực xào rau củ",
    "emoji": "🦑",
    "kcal": 249,
    "protein": 28,
    "carb": 19,
    "fat": 8,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Mực",
        150,
        "g"
      ],
      [
        "Cà rốt",
        80,
        "g"
      ],
      [
        "Bông cải xanh",
        100,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn50",
    "name": "Đậu hũ sốt cà chua",
    "emoji": "🥬",
    "kcal": 227,
    "protein": 18,
    "carb": 11,
    "fat": 15,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Đậu hũ",
        200,
        "g"
      ],
      [
        "Cà chua",
        150,
        "g"
      ],
      [
        "Hành lá",
        12,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Ướp nhạt, đun nhỏ lửa với một ít nước đến khi chín kỹ và nước sánh.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn51",
    "name": "Đậu hũ hấp nấm",
    "emoji": "🍄",
    "kcal": 194,
    "protein": 22,
    "carb": 10,
    "fat": 10,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Đậu hũ",
        200,
        "g"
      ],
      [
        "Nấm",
        130,
        "g"
      ],
      [
        "Cải thìa",
        100,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Hấp hoặc luộc trong thời gian phù hợp đến khi thực phẩm chín hoàn toàn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn52",
    "name": "Rau muống xào tỏi",
    "emoji": "🥬",
    "kcal": 110,
    "protein": 7,
    "carb": 12,
    "fat": 6,
    "mins": 15,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Rau muống",
        250,
        "g"
      ],
      [
        "Tỏi",
        12,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn53",
    "name": "Cải thìa xào nấm",
    "emoji": "🥬",
    "kcal": 92,
    "protein": 6,
    "carb": 8,
    "fat": 6,
    "mins": 15,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Cải thìa",
        200,
        "g"
      ],
      [
        "Nấm",
        100,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo với ít dầu, xào nguyên liệu theo độ chín; đảo đều, nấu chín kỹ.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn54",
    "name": "Bông cải luộc trứng",
    "emoji": "🥦",
    "kcal": 212,
    "protein": 18,
    "carb": 14,
    "fat": 10,
    "mins": 20,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bông cải xanh",
        200,
        "g"
      ],
      [
        "Trứng gà",
        2,
        "quả"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm chín các thành phần cần nấu, để nguội bớt rồi trộn đều.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn55",
    "name": "Salad ức gà bơ",
    "emoji": "🥗",
    "kcal": 316,
    "protein": 38,
    "carb": 12,
    "fat": 14,
    "mins": 20,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Ức gà",
        110,
        "g"
      ],
      [
        "Bơ",
        65,
        "g"
      ],
      [
        "Rau xà lách",
        120,
        "g"
      ],
      [
        "Dưa leo",
        80,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm chín các thành phần cần nấu, để nguội bớt rồi trộn đều.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn56",
    "name": "Gỏi cuốn tôm",
    "emoji": "🥙",
    "kcal": 410,
    "protein": 34,
    "carb": 68,
    "fat": 1,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bánh tráng",
        55,
        "g"
      ],
      [
        "Tôm",
        120,
        "g"
      ],
      [
        "Bún",
        80,
        "g"
      ],
      [
        "Rau sống",
        100,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm chín nguyên liệu cần nấu; cuốn với rau đã rửa kỹ và bánh tráng.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn57",
    "name": "Gỏi gà xé phay",
    "emoji": "🥗",
    "kcal": 329,
    "protein": 40,
    "carb": 16,
    "fat": 12,
    "mins": 30,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Thịt gà",
        140,
        "g"
      ],
      [
        "Bắp cải",
        120,
        "g"
      ],
      [
        "Cà rốt",
        70,
        "g"
      ],
      [
        "Chanh",
        15,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm chín các thành phần cần nấu, để nguội bớt rồi trộn đều.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn58",
    "name": "Gỏi đu đủ tôm",
    "emoji": "🥗",
    "kcal": 195,
    "protein": 35,
    "carb": 14,
    "fat": 1,
    "mins": 25,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Tôm",
        140,
        "g"
      ],
      [
        "Cà rốt",
        100,
        "g"
      ],
      [
        "Dưa leo",
        80,
        "g"
      ],
      [
        "Chanh",
        12,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm chín các thành phần cần nấu, để nguội bớt rồi trộn đều.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn59",
    "name": "Bánh mì trứng",
    "emoji": "🥖",
    "kcal": 450,
    "protein": 22,
    "carb": 50,
    "fat": 18,
    "mins": 15,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bánh mì",
        95,
        "g"
      ],
      [
        "Trứng gà",
        2,
        "quả"
      ],
      [
        "Dưa leo",
        70,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo, áp chảo từng mặt đến khi chín kỹ; dùng ít dầu.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn60",
    "name": "Bánh mì ức gà",
    "emoji": "🥖",
    "kcal": 490,
    "protein": 46,
    "carb": 46,
    "fat": 12,
    "mins": 20,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bánh mì",
        90,
        "g"
      ],
      [
        "Ức gà",
        120,
        "g"
      ],
      [
        "Rau xà lách",
        60,
        "g"
      ],
      [
        "Dầu ăn",
        5,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm nóng chảo, áp chảo từng mặt đến khi chín kỹ; dùng ít dầu.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn61",
    "name": "Khoai lang hấp sữa chua",
    "emoji": "🍠",
    "kcal": 233,
    "protein": 7,
    "carb": 45,
    "fat": 4,
    "mins": 20,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Khoai lang",
        200,
        "g"
      ],
      [
        "Sữa chua",
        100,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Hấp hoặc luộc trong thời gian phù hợp đến khi thực phẩm chín hoàn toàn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn62",
    "name": "Yến mạch chuối sữa",
    "emoji": "🥣",
    "kcal": 413,
    "protein": 16,
    "carb": 68,
    "fat": 10,
    "mins": 12,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Yến mạch",
        55,
        "g"
      ],
      [
        "Chuối",
        100,
        "g"
      ],
      [
        "Sữa",
        180,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn63",
    "name": "Sữa chua trái cây",
    "emoji": "🥝",
    "kcal": 225,
    "protein": 6,
    "carb": 42,
    "fat": 5,
    "mins": 10,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Sữa chua",
        150,
        "g"
      ],
      [
        "Táo",
        120,
        "g"
      ],
      [
        "Chuối",
        80,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm chín các thành phần cần nấu, để nguội bớt rồi trộn đều.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn64",
    "name": "Bún trộn đậu hũ",
    "emoji": "🥗",
    "kcal": 357,
    "protein": 18,
    "carb": 56,
    "fat": 8,
    "mins": 20,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Bún",
        170,
        "g"
      ],
      [
        "Đậu hũ",
        160,
        "g"
      ],
      [
        "Rau sống",
        100,
        "g"
      ],
      [
        "Cà rốt",
        70,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Làm chín các thành phần cần nấu, để nguội bớt rồi trộn đều.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn65",
    "name": "Lẩu nấm chay (1 suất)",
    "emoji": "🍲",
    "kcal": 200,
    "protein": 19,
    "carb": 21,
    "fat": 8,
    "mins": 35,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Nấm",
        180,
        "g"
      ],
      [
        "Đậu hũ",
        140,
        "g"
      ],
      [
        "Cải thảo",
        130,
        "g"
      ],
      [
        "Cà rốt",
        80,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  },
  {
    "id": "vn66",
    "name": "Cháo yến mạch trứng",
    "emoji": "🥣",
    "kcal": 334,
    "protein": 17,
    "carb": 47,
    "fat": 9,
    "mins": 18,
    "goals": [
      "Giảm cân",
      "Giữ cân",
      "Tăng cơ"
    ],
    "ingredients": [
      [
        "Yến mạch",
        60,
        "g"
      ],
      [
        "Trứng gà",
        1,
        "quả"
      ],
      [
        "Cà rốt",
        70,
        "g"
      ]
    ],
    "steps": [
      "Sơ chế sạch nguyên liệu, dùng riêng dụng cụ cho thực phẩm sống và chín.",
      "Đun nước, cho nguyên liệu lâu chín vào trước; thêm rau và nêm vừa ăn.",
      "Chia một khẩu phần, kiểm tra độ chín và điều chỉnh gia vị theo nhu cầu."
    ],
    "region": "Món Việt",
    "estimated": true
  }
];
recipes.push(...vietnameseRecipes);
const groups = ['Thịt', 'Hải sản', 'Rau củ', 'Trái cây', 'Trứng', 'Sữa', 'Đồ khô', 'Gia vị', 'Khác'];
const icons = { 'Thịt': '🍗', 'Hải sản': '🐟', 'Cá': '🐟', 'Rau củ': '🥦', 'Trái cây': '🍎', 'Trứng': '🥚', 'Sữa': '🥛', 'Đồ khô': '🌾', 'Gia vị': '🧄', 'Khác': '📦' };
const titles = { overview: 'Tổng quan', fridge: 'Tủ lạnh thông minh', recipes: 'Gợi ý thực đơn', shopping: 'Danh sách mua sắm', plans: 'Kế hoạch của tôi', diary: 'Nhật ký sức khỏe', devices: 'Thiết bị kết nối', messages: 'Trò chuyện', miu: 'AI Miu gợi ý món ăn', payments: 'Thanh toán & lịch sử', experts: 'Chuyên gia & khóa học', community: 'Cộng đồng', settings: 'Cài đặt cá nhân', workouts: 'Rèn luyện sức khỏe', admin: 'Trang quản trị', 'admin-experts': 'Duyệt chuyên gia', 'admin-posts': 'Kiểm duyệt bài viết', 'admin-comments': 'Kiểm duyệt bình luận', 'admin-courses': 'Quản lý khóa học', 'admin-users': 'Hồ sơ người dùng', 'admin-revenue': 'Quản lý doanh thu', 'admin-recipes':'Quản lý công thức', 'admin-contracts':'Quản lý hợp đồng', 'admin-support':'CSKH & phản hồi', 'admin-revenue-posting':'Phí đăng ký khóa', 'admin-revenue-enroll':'Chiết khấu đăng ký', 'admin-revenue-premium':'Doanh thu Premium', 'admin-revenue-total':'Tổng doanh thu', support:'CSKH hệ thống' };

let state = load();
let page = 'overview';
let recipeQuery = '';
let recipeGoal = 'Tất cả';
let fridgeQuery = '';
let fridgeFilter = 'Tất cả';
let courseTab = 'courses';
let miuQuery = '';
let miuGoal = '';
let miuHasRun = false;
let scanPreviewUrl = '';
let scanFileName = '';
let scanManualFood = '';
let scanAnalysed = false;

function deep(obj) { return JSON.parse(JSON.stringify(obj)); }
function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!raw || !Array.isArray(raw.foods)) return deep(seed);
    return {
      ...deep(seed),
      ...raw,
      session: { ...deep(seed).session, ...(raw.session || {}) },
      foods: Array.isArray(raw.foods) ? raw.foods : deep(seed).foods,
      chosen: Array.isArray(raw.chosen) ? raw.chosen : [],
      shopping: Array.isArray(raw.shopping) ? raw.shopping : [],
      courses: Array.isArray(raw.courses) ? raw.courses : [],
      posts: Array.isArray(raw.posts) ? raw.posts : [],
      expertRequests: Array.isArray(raw.expertRequests) ? raw.expertRequests : [],
      community: Array.isArray(raw.community) ? raw.community : [],
      messages: Array.isArray(raw.messages) ? raw.messages : deep(seed).messages,
      accountData: raw.accountData && typeof raw.accountData === 'object' && !Array.isArray(raw.accountData) ? raw.accountData : {},
      messageReads: raw.messageReads && typeof raw.messageReads === 'object' && !Array.isArray(raw.messageReads) ? raw.messageReads : {},
      healthProfiles: raw.healthProfiles && typeof raw.healthProfiles === 'object' ? raw.healthProfiles : {},
      dailyPlans: raw.dailyPlans && typeof raw.dailyPlans === 'object' && !Array.isArray(raw.dailyPlans) ? raw.dailyPlans : {},
      dailyDiary: raw.dailyDiary && typeof raw.dailyDiary === 'object' && !Array.isArray(raw.dailyDiary) ? raw.dailyDiary : {},
      connectedDevices: raw.connectedDevices && typeof raw.connectedDevices === 'object' && !Array.isArray(raw.connectedDevices) ? raw.connectedDevices : {},
      transactions: Array.isArray(raw.transactions) ? raw.transactions : deep(seed).transactions
    };
  } catch (e) {
    return deep(seed);
  }
}
// Thông tin riêng: tủ lạnh, kế hoạch món, gói và hồ sơ được tách theo tài khoản demo.
// Tin nhắn và giao dịch khóa học được chia sẻ trong cùng trình duyệt để kiểm thử liên vai trò.
const ACCOUNT_FIELDS = ['foods','chosen','shopping','premium','goal','name','profileImage','noticeDays','specialty','expertActivated','dob','bankLink'];
function freshAccount(user) {
  const defaults = deep(seed);
  if (state.registeredUsers?.[user]) {defaults.foods=[];defaults.chosen=[];defaults.shopping=[];defaults.premium=false;}
  return Object.fromEntries(ACCOUNT_FIELDS.map(k => [k, defaults[k] ?? (k==='expertActivated'? false : null)]).map(([k,v]) => {
    if (k==='name') v = user;
    if (k==='profileImage') v = DEMO_USERS[user]?.avatar || defaults.profileImage;
    if (k==='specialty') v = DEMO_USERS[user]?.specialty || '';
    return [k,v];
  }));
}
function snapshotAccount(user=state.username) {
  if (!DEMO_USERS[user]) return;
  if (!state.accountData || typeof state.accountData !== 'object') state.accountData = {};
  state.accountData[user] = Object.fromEntries(ACCOUNT_FIELDS.map(k=>[k,deep(state[k] ?? (k==='expertActivated'?false:null))]));
}
function restoreAccount(user) {
  const snapshot = state.accountData?.[user];
  const data = {...freshAccount(user), ...(snapshot && typeof snapshot==='object'?snapshot:{})};
  for(const k of ACCOUNT_FIELDS) state[k] = deep(data[k]);
  for(const f of state.foods||[]) if(f.group==='Cá') f.group='Hải sản';
}
function ensureAccountMigration() {
  const user = DEMO_USERS[state.username] ? state.username : 'Jessica';
  if (!state.accountData || typeof state.accountData !== 'object') state.accountData = {};
  if (!state.accountData[user]) snapshotAccount(user); // Giữ nguyên dữ liệu v6 đang lưu.
}
ensureAccountMigration();
for(const f of state.foods||[]) if(f.group==='Cá') f.group='Hải sản';
function save() {
  snapshotAccount();
  try {localStorage.setItem(KEY,JSON.stringify(state));return true;}
  catch(error){console.error('Unable to save demo data',error); toast('Không lưu được dữ liệu. Hãy giải phóng dung lượng lưu trữ của trình duyệt.');return false;}
}
function e(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]); }
function uid() { return globalThis.crypto?.randomUUID?.() || String(Date.now()) + Math.random().toString(36).slice(2); }
function money(n) { return Number(n || 0).toLocaleString('vi-VN') + 'đ'; }
function date(s) { return s ? new Date(s + 'T12:00:00').toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric'}) : '—'; }
function days(f) { return Math.round((new Date(f.expiry + 'T12:00:00') - new Date(offset(0) + 'T12:00:00')) / 86400000); }
function status(f) { const d = days(f); return d < 0 ? ['Đã hết hạn', 'expired'] : d <= Number(f.warn) ? [d === 0 ? 'Hết hạn hôm nay' : `Còn ${d} ngày`, 'warn'] : ['Còn hạn', '']; }
function activeFoods() { return state.foods.filter(f => Number(f.qty) > 0); }
function expiring() { return activeFoods().filter(f => days(f) <= Number(f.warn)); }
function roleLabel() { return state.session.role === 'admin' ? 'Quản trị viên' : state.session.role === 'expert' ? 'Chuyên gia' : 'Thành viên'; }
function isExpert() { return state.session.role === 'expert'; }
function isAdmin() { return state.session.role === 'admin'; }
function guessGroup(name) {
  const n = String(name || '').toLowerCase();
  if (/gà|heo|bò|thịt/.test(n)) return 'Thịt';
  if (/cá|tôm|mực|nghêu|sò|hải sản|ốc|hàu|cua|ghẹ/.test(n)) return 'Hải sản';
  if (/trứng/.test(n)) return 'Trứng';
  if (/sữa|yogurt|yaourt/.test(n)) return 'Sữa';
  if (/gạo|mì|bún|yến mạch|đậu|hạt/.test(n)) return 'Đồ khô';
  if (/táo|chuối|cam|xoài|bơ/.test(n)) return 'Trái cây';
  if (/muối|đường|tiêu|nước mắm|gia vị/.test(n)) return 'Gia vị';
  if (/rau|cải|cà rốt|bông cải|bí|dưa|khoai/.test(n)) return 'Rau củ';
  return 'Khác';
}
function care(f) {
  const opts = {
    'Thịt': 'Bảo quản lạnh ở 0–4°C nếu sẽ dùng sớm; đông lạnh khi cần lưu lâu. Nấu chín kỹ và tránh nhiễm chéo.',
    'Hải sản': 'Giữ lạnh 0–4°C và dùng sớm; đông lạnh nếu chưa chế biến. Không sử dụng khi có dấu hiệu hư hỏng.',
    'Rau củ': 'Loại bỏ lá hỏng, bảo quản phù hợp với từng loại trong ngăn rau và tránh làm dập nát.',
    'Trứng': 'Giữ trong ngăn mát và tránh thay đổi nhiệt độ liên tục; nấu chín trước khi ăn.',
    'Sữa': 'Tuân thủ nhiệt độ trên nhãn, giữ lạnh sau khi mở và dùng trong thời gian khuyến nghị.',
    'Đồ khô': 'Đựng trong hộp kín, giữ nơi khô thoáng, tránh ẩm và côn trùng.',
    'Gia vị': 'Đậy kín, bảo quản theo nhãn sản phẩm, tránh ẩm và ánh nắng trực tiếp.',
    'Trái cây': 'Loại bỏ quả dập, giữ riêng loại dễ chín và bảo quản theo đặc tính từng loại.',
    'Khác': 'Đọc nhãn bảo quản, theo dõi hạn sử dụng và dấu hiệu hư hỏng.'
  };
  return opts[f.group] || opts.Khác;
}

async function useAvatarFile(file) {
  if (!file || !['image/jpeg','image/png','image/webp'].includes(file.type) || file.size>2*1024*1024) { toast('Chỉ nhận ảnh JPG/PNG/WEBP dưới 2 MB.'); return; }
  try {
    const blobUrl=URL.createObjectURL(file);
    const img=new Image();
    await new Promise((resolve,reject)=>{ img.onload=resolve; img.onerror=reject; img.src=blobUrl; });
    const canvas=document.createElement('canvas');
    canvas.width=240;canvas.height=240;
    const context=canvas.getContext('2d');
    context.fillStyle='#edf4ed';context.fillRect(0,0,240,240);
    const scale=Math.max(240/img.width,240/img.height);
    const width=img.width*scale,height=img.height*scale;
    context.drawImage(img,(240-width)/2,(240-height)/2,width,height);
    URL.revokeObjectURL(blobUrl);
    state.profileImage=canvas.toDataURL('image/jpeg',.75);
    if(save()){updateShell();render();toast('Đã thay ảnh đại diện.');}
  } catch(error) { console.warn(error); toast('Không đọc được ảnh. Vui lòng thử tệp khác.'); }
}
function exportDemoData() {
  save();
  const backup=JSON.stringify({format:'themeal-demo-backup',version:7,exportedAt:new Date().toISOString(),data:state},null,2);
  const blob=new Blob([backup],{type:'application/json;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='themeal-demo-'+localDayKey()+'.json';
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),5000);
  toast('Đã tạo tệp sao lưu dữ liệu demo.');
}
async function importDemoData(file) {
  if(!file||file.size>2*1024*1024) return toast('Tệp sao lưu phải nhỏ hơn 2 MB.');
  try {
    const parsed=JSON.parse(await file.text());
    const raw=parsed?.format==='themeal-demo-backup'?parsed.data:null;
    if(!raw||typeof raw!=='object'||!Array.isArray(raw.foods)||!Array.isArray(raw.messages)||!Array.isArray(raw.transactions)||typeof raw.accountData!=='object') throw Error('Dữ liệu không đúng định dạng');
    if(!confirm('Nhập tệp sẽ thay thế dữ liệu demo đang có trên trình duyệt này. Bạn có muốn tiếp tục?'))return;
    const loggedIn=state.session.loggedIn,current=state.username;
    state={...deep(seed),...raw,session:{loggedIn,role:DEMO_USERS[current]?.role||'user'},username:current};
    if(!state.accountData||typeof state.accountData!=='object')state.accountData={};
    if(!state.accountData[current])state.accountData[current]=freshAccount(current);
    restoreAccount(current);
    state.session.role = DEMO_USERS[current]?.role === 'expert' || state.expertActivated ? 'expert' : 'user';
    if(save()){updateShell();nav('overview');toast('Đã khôi phục dữ liệu từ bản sao lưu.');}
  } catch(error){console.warn(error);toast('Không thể nhập: tệp không đúng định dạng sao lưu .theMeal.');}
}

function profileForCurrent() {
  return state.healthProfiles?.[state.username || 'Jessica'] || {};
}
function safeNum(value) {
  return value === '' || value === null || value === undefined ? null : Number(value);
}
function bmiFor(profile) {
  const h = Number(profile.height || 0), w = Number(profile.weight || 0);
  return h > 0 && w > 0 ? (w / (h / 100) ** 2).toFixed(1) : null;
}
function paidRecords(role) {
  return (state.transactions || []).filter(tx => role === 'seller' ? tx.seller === (state.username || 'Taeyeon') : tx.buyer === (state.username || 'Jessica')).slice().reverse();
}
function renderPaymentRecord(tx, role) {
  const other = role === 'seller' ? `Người mua: ${e(tx.buyer)}` : `Người bán: ${e(tx.seller)}`;
  return `<article class="transaction-item"><div class="transaction-icon">${tx.kind === 'premium' ? '✦' : '▧'}</div><div class="transaction-info"><strong>${e(tx.title)}</strong><small>${other} · ${new Date(tx.date).toLocaleDateString('vi-VN')} · ${e(tx.id)}</small>${tx.sample ? '<span class="sample-tag">Giao dịch mẫu</span>' : ''}</div><div class="transaction-value"><b>${role === 'seller' ? '+' : '−'}${money(tx.amount)}</b><small>Hoàn thành · mô phỏng</small></div></article>`;
}
function countStatus() {
  const badge = document.getElementById('fridgeCount');
  if (badge) badge.textContent = activeFoods().length;
  const messageBadge = document.getElementById('messageCount');
  if (messageBadge) {
    const readIndex = Number(state.messageReads?.[state.username] ?? -1);
    const unread = state.messages.slice(readIndex + 1).filter(m => m.from !== (isExpert() ? 'expert' : 'user')).length;
    messageBadge.textContent = unread || '';
    messageBadge.style.display = unread ? '' : 'none';
  }
}
function toast(message) {
  message=String(message).replace(/\b(?:demo)\b|mô phỏng|thử nghiệm/giu,'').replace(/\(\s*\)/g,'').replace(/ {2,}/g,' ').trim();
  const el = document.getElementById('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

function applyLogin(user) {
  snapshotAccount();
  restoreAccount(user.username);
  state.session.loggedIn = true;
  document.body.classList.toggle('admin-submenu-collapsed',user.role === 'admin');
  state.username = user.username;
  state.session.role = user.role === 'admin' ? 'admin' : (user.role === 'expert' || state.expertActivated) ? 'expert' : 'user';
  if (user.role === 'expert' && !state.posts.length) state.posts = deep(defaultExpertPosts);
  save();
  updateShell();
  nav(user.role === 'admin' ? 'admin' : 'overview');
}
function logout() {
  state.session.loggedIn = false;
  save();
  updateShell();
}
function updateShell() {
  document.body.classList.toggle('logged-in', !!state.session.loggedIn);
  document.body.classList.toggle('admin-mode', state.session.loggedIn && isAdmin());
  const topAvatar = document.getElementById('topAvatarImage');
  if (topAvatar) topAvatar.src = state.profileImage || 'assets/avatar-default.svg';
  const userName = document.getElementById('userChipName');
  if (userName) userName.textContent = state.name || 'Người dùng';
  const userRole = document.getElementById('userChipRole');
  if (userRole) userRole.textContent = roleLabel();
  if (isAdmin() && userName) userName.textContent='Quản trị viên';
  document.getElementById('today').textContent = new Date().toLocaleDateString('vi-VN', {day:'2-digit',month:'2-digit',year:'numeric'});
  countStatus();
  updatePremiumVisibilityV10();
  if (!state.session.loggedIn) {
    document.getElementById('loginError').textContent = '';
    const view = document.getElementById('view');
    if (view) view.innerHTML = '';
  }
}

function nav(p) {
  if (!state.session.loggedIn) return;
  page = titles[p] ? p : 'overview';
  if (isAdmin() && !page.startsWith('admin')) page = 'admin';
  if (!isAdmin() && page.startsWith('admin')) page = 'overview';
  if (page === 'messages') markChatReadV10();
  history.replaceState(null, '', '#' + page);
  if(document.getElementById('modalRoot'))closeModal();
  document.body.classList.toggle('revenue-expanded',page.startsWith('admin-revenue'));
  document.querySelectorAll('.nav button[data-page]').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  document.querySelectorAll('.mobile-nav button').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  const crumb = document.getElementById('crumb');
  if (crumb) crumb.textContent = titles[page];
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  render();
  window.scrollTo({ top: 0, behavior: 'instant' });
}
function title(t, description, btn = '') { return `<div class="page-head"><div><span class="eyebrow">.theMeal</span><h1>${t}</h1>${description?`<p>${description}</p>`:''}</div>${btn}</div>`; }
function stat(label, val, sub, icon) { return `<div class="stat"><div class="stat-top"><span>${label}</span><span class="stat-icon">${icon}</span></div><h2>${val}</h2>${sub ? `<small>${sub}</small>` : ''}</div>`; }
function inventory(name, unit) {
  const convert = (qty, from, to) => {
    if (from === to) return qty;
    if ((from === 'kg' && to === 'g') || (from === 'l' && to === 'ml')) return qty * 1000;
    if ((from === 'g' && to === 'kg') || (from === 'ml' && to === 'l')) return qty / 1000;
    return 0;
  };
  return activeFoods().filter(f => f.name.trim().toLowerCase() === name.trim().toLowerCase() && days(f) >= 0)
    .reduce((sum, f) => sum + convert(Number(f.qty), f.unit, unit), 0);
}
function recommend(r) {
  const has = r.ingredients.filter(([name, q, u]) => inventory(name, u) >= q).length;
  return {
    matched: has,
    total: r.ingredients.length,
    pct: Math.round((has / r.ingredients.length) * 100),
    urgent: r.ingredients.some(([n]) => activeFoods().some(f => f.name.toLowerCase() === n.toLowerCase() && days(f) >= 0 && days(f) <= f.warn))
  };
}
function sortedRecipes() {
  return [...recipes]
    .filter(r => recipeGoal === 'Tất cả' || r.goals.includes(recipeGoal))
    .filter(r => r.name.toLowerCase().includes(recipeQuery.toLowerCase()) || r.ingredients.some(i => i[0].toLowerCase().includes(recipeQuery.toLowerCase())))
    .sort((a, b) => {
      const aa = recommend(a), bb = recommend(b);
      return Number(bb.urgent) - Number(aa.urgent) || bb.pct - aa.pct || Number(b.goals.includes(state.goal)) - Number(a.goals.includes(state.goal));
    });
}
function required() {
  const map = new Map();
  state.chosen.forEach(id => {
    const r = recipes.find(x => x.id === id);
    if (!r) return;
    r.ingredients.forEach(([name, qty, unit]) => {
      const key = `${name}__${unit}`;
      if (!map.has(key)) map.set(key, { name, qty: 0, unit, group: guessGroup(name) });
      map.get(key).qty += Number(qty);
    });
  });
  return [...map.values()].map(item => {
    const have = inventory(item.name, item.unit);
    return { ...item, qty: Math.max(0, item.qty - have) };
  }).filter(item => item.qty > 0);
}

function foodTable(foods, limit = false) {
  if (!foods.length) return `<div class="empty"><div class="big">🥬</div><h3>Chưa có thực phẩm</h3><p>Thêm nguyên liệu để bắt đầu theo dõi.</p><button class="btn" data-action="add-food">+ Thêm thực phẩm</button></div>`;
  return `<div class="table-wrap"><table><thead><tr><th>THỰC PHẨM</th><th>SỐ LƯỢNG</th><th>HẠN SỬ DỤNG</th><th>TRẠNG THÁI</th><th>THAO TÁC</th></tr></thead><tbody>${foods.slice(0, limit ? 5 : undefined).map(f => `<tr><td><div class="food-cell"><span class="emoji">${icons[f.group] || '📦'}</span><div>${e(f.name)}<div class="tiny">${e(f.group)}</div></div></div></td><td>${f.qty} ${e(f.unit)}</td><td>${date(f.expiry)}</td><td><span class="status ${status(f)[1]}">${status(f)[0]}</span></td><td><div class="actions"><button class="mini-btn" data-action="edit-food" data-id="${e(f.id)}">✎</button><button class="mini-btn" data-action="use-food" data-id="${e(f.id)}">−</button><button class="mini-btn" data-action="remove-food" data-id="${e(f.id)}">×</button></div></td></tr>`).join('')}</tbody></table></div>`;
}
function recipeCard(r) {
  const m = recommend(r), selected = state.chosen.includes(r.id);
  return `<article class="panel recipe-card"><div class="recipe-cover"><span class="chip">${m.urgent ? '⏰ Ưu tiên dùng sớm' : '✓ ' + m.pct + '% nguyên liệu'}</span>${r.emoji}</div><div class="recipe-body"><h3>${r.name}</h3><div class="recipe-meta"><span>🔥 ${r.kcal} kcal · ${r.protein}g protein</span><span>◷ ${r.mins} phút</span></div><div class="progress" style="margin-bottom:8px"><i style="width:${m.pct}%"></i></div><p class="tiny" style="margin:0 0 14px">Đủ ${m.matched}/${m.total} nguyên liệu · Ước tính 1 khẩu phần</p><div style="display:flex;gap:8px"><button class="btn secondary small" style="flex:1" data-action="detail-recipe" data-id="${r.id}">Công thức</button><button class="btn small" style="flex:1" data-action="toggle-recipe" data-id="${r.id}">${selected ? '✓ Đã chọn' : '+ Chọn món'}</button></div>${pendingPlanSlot ? `<button class="btn soft small" style="width:100%;margin-top:10px" data-action="plan-use-recipe" data-id="${r.id}">↪ Dùng cho ${pendingPlanSlot === 'breakfast' ? 'bữa sáng' : pendingPlanSlot === 'lunch' ? 'bữa trưa' : 'bữa tối'}</button>` : ''}</div></article>`;
}


function partnerMeta() {
  return isExpert()
    ? { name: 'Jessica', role: 'Học viên', icon: 'assets/avatar-jessica.svg', from: 'user', self: 'expert' }
    : { name: 'Taeyeon', role: 'Chuyên gia', icon: 'assets/avatar-taeyeon.svg', from: 'expert', self: 'user' };
}
function formatMessageTime(value) {
  const d = new Date(value);
  return d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
}
function messagesPage() {
  const mate = partnerMeta();
  const conversation = state.messages || [];
  return `${title('Trò chuyện', 'Trao đổi trực tiếp giữa học viên và chuyên gia trong bản demo.', `<button class="btn" data-action="quick-chat">+ Tin nhắn mới</button>`)}
  <div class="chat-shell">
    <aside class="chat-sidebar-card">
      <div class="mini-profile"><img src="${e(mate.icon)}" alt="${e(mate.name)}" class="profile-photo" style="width:72px;height:72px;border-radius:20px"><div><span class="role-badge ${isExpert() ? '' : 'expert'}">${mate.role}</span><h2 style="margin:10px 0 4px">${e(mate.name)}</h2><p class="subtitle" style="margin:0">${isExpert() ? 'Tài khoản học viên đang dùng thử hệ thống' : 'Tư vấn dinh dưỡng & hướng dẫn thực hành'}</p></div></div>
      <div class="chat-quick">
        <div class="quick-card"><h3>Lưu ý</h3><p>Hội thoại hiện lưu trên trình duyệt này để mô phỏng tính năng chat.</p></div>
        <div class="quick-card"><h3>Gợi ý hỏi nhanh</h3><p>• Gợi ý thực đơn<br>• Cách bảo quản thực phẩm<br>• Tư vấn mục tiêu ăn uống</p></div>
        <button class="btn secondary" data-page="experts">Mở khu vực chuyên gia</button>
      </div>
    </aside>
    <section class="chat-main">
      <div class="chat-header"><div><h2>${e(mate.name)}</h2><p>${mate.role} · Phản hồi trong demo</p></div><span class="status">Đang hoạt động</span></div>
      <div class="chat-body" id="chatBody">
        ${conversation.length ? conversation.map(m => `<div class="bubble-wrap ${m.from === mate.self ? 'me' : 'other'}"><div class="bubble-name">${m.from === mate.self ? 'Bạn' : e(mate.name)}</div><div class="bubble">${e(m.text)}</div><div class="bubble-time">${formatMessageTime(m.time)}</div></div>`).join('') : '<div class="chat-empty"><div class="big">💬</div><p>Chưa có tin nhắn nào.</p></div>'}
      </div>
      <form id="chatForm" class="chat-form"><div class="chat-form-inner"><textarea name="text" maxlength="1000" placeholder="Nhập nội dung trò chuyện tại đây..." required></textarea><button class="btn" type="submit">Gửi</button></div></form>
    </section>
  </div>`;
}

// Tư vấn món ăn dựa trên quy tắc mẫu, không kết nối API AI.
function miuRecommendations() {
  const goal = miuGoal || state.goal;
  const q = miuQuery.trim().toLowerCase();
  let pool = recipes.filter(r => r.goals.includes(goal));
  if (q) {
    const words = q.split(/[ ,.;\n]+/).filter(w => w.length >= 3);
    const matched = pool.filter(r => words.some(w => r.name.toLowerCase().includes(w) || r.ingredients.some(([n]) => n.toLowerCase().includes(w))));
    if (matched.length) pool = matched;
  }
  return pool.map(r => ({ r, match: recommend(r), missing: r.ingredients.filter(([n, qty, unit]) => inventory(n, unit) < qty).map(([n]) => n) }))
    .sort((a,b) => Number(b.match.urgent)-Number(a.match.urgent) || b.match.pct-a.match.pct).slice(0,4);
}
function miuPage() {
  const recs = miuRecommendations();
  return `${title('AI Miu · Gợi ý món ăn', 'Trợ lý dinh dưỡng mô phỏng, kết hợp thực phẩm trong tủ lạnh và mục tiêu của bạn.', `<button class="btn secondary" data-page="fridge">🧊 Kiểm tra tủ lạnh</button>`)}
    <div class="notice info">${state.premium?'Premium: lượt gợi ý không giới hạn, ưu tiên phản hồi nhanh (mô phỏng).':'Free: tối đa 3 lần gợi ý/ngày với thời gian chờ mô phỏng. Đã dùng '+Number(state.miuUsage?.[state.username+'|'+localDayKey()]||0)+'/3 lượt hôm nay.'}</div>
    <div class="miu-header"><div class="miu-icon">✦</div><div><span class="eyebrow">.theMeal · MIU</span><h2>Miu có thể giúp bạn chọn bữa ăn hôm nay</h2><p>Gợi ý được tạo bằng thuật toán so khớp công thức, không phải tư vấn y khoa hay mô hình AI trực tuyến.</p></div></div>
    <div class="grid2"><section class="panel"><h2>Bạn muốn ăn gì hôm nay?</h2><p class="subtitle">Nhập tên món, nguyên liệu hoặc yêu cầu ngắn; hệ thống sẽ thử so khớp với công thức mẫu.</p>
      <form id="miuForm"><div class="field"><label>Yêu cầu</label><textarea name="query" rows="3" maxlength="220" placeholder="Ví dụ: Món có ức gà, nhanh, dễ làm...">${e(miuQuery)}</textarea></div>
      <div class="field"><label>Mục tiêu sức khỏe</label><select name="goal">${['Giảm cân','Giữ cân','Tăng cơ'].map(g=>`<option ${g===(miuGoal||state.goal)?'selected':''}>${g}</option>`).join('')}</select></div>
      <button type="submit" class="btn">✦ Nhờ Miu gợi ý món</button></form>
      <div class="notice info" style="margin-top:18px">Đang có <b>${activeFoods().length}</b> nguyên liệu trong tủ lạnh. Miu ưu tiên món tận dụng nguyên liệu hiện có và còn hạn.</div></section>
      <section class="panel"><h2>✦ Lời khuyên từ Miu</h2>${miuHasRun ? `<p>Với mục tiêu <b>${e(miuGoal||state.goal)}</b>, bạn có thể tham khảo các món bên dưới. ${miuQuery ? `Yêu cầu được nhập: “${e(miuQuery)}”.` : ''}</p><p class="muted">Hãy kiểm tra thành phần, dị ứng và khẩu phần phù hợp trước khi chế biến.</p><button class="btn soft" data-page="recipes">Xem toàn bộ công thức →</button>` : `<div class="miu-welcome"><span>🍀</span><h3>Bạn có thể bắt đầu ngay</h3><p>Miu sẽ đối chiếu mục tiêu sức khỏe với các món mẫu và số lượng nguyên liệu đang có.</p></div>`}</section></div>
    ${miuHasRun ? `<div class="section-title"><h2>Gợi ý dành cho bạn</h2><span class="status">${recs.length} công thức mẫu</span></div><div class="miu-suggestions">${recs.map(({r,match,missing})=>`<article class="miu-result"><div class="miu-dish">${r.emoji}</div><div class="miu-result-text"><h3>${e(r.name)}</h3><p>${r.kcal} kcal/khẩu phần (ước tính) · ${r.mins} phút · ${match.pct}% nguyên liệu hiện có</p><small>${missing.length ? 'Còn thiếu: '+e(missing.join(', ')) : '✓ Nguyên liệu hiện có đã đủ'}</small></div><button class="btn secondary small" data-action="detail-recipe" data-id="${r.id}">Xem món</button></article>`).join('')}</div>` : ''}`;
}
function scanPage() {
  return `${title('Quét ảnh món ăn', 'Chọn ảnh có sẵn trên máy tính hoặc mở camera trên điện thoại để chụp ảnh mô phỏng.')}
  <div class="grid2 scan-grid"><section class="panel"><div class="panel-head"><h2>📷 Tải ảnh / chụp món ăn</h2><span class="status">DEMO</span></div>
    <div class="scan-dropzone"><div class="scan-preview" id="scanPreview">${scanPreviewUrl ? `<img src="${scanPreviewUrl}" alt="Ảnh món ăn đã chọn">` : '<div class="scan-placeholder"><span>▧</span><strong>Chưa có ảnh nào</strong><small>Hỗ trợ JPG, PNG, WEBP</small></div>'}</div></div>
    <div class="scan-buttons"><label class="btn" for="scanUpload">↥ Tải ảnh từ thiết bị</label><label class="btn secondary" for="scanCamera">◎ Mở camera (điện thoại)</label></div>
    <input class="visually-hidden" type="file" id="scanUpload" accept="image/*" aria-label="Chọn ảnh món ăn">
    <input class="visually-hidden" type="file" id="scanCamera" accept="image/*" capture="environment" aria-label="Chụp ảnh bằng camera">
    <p class="tiny">${scanFileName ? `Đã chọn: ${e(scanFileName)}` : 'Trên máy tính, dùng Tải ảnh. Trên điện thoại, trình duyệt có thể yêu cầu quyền camera hoặc cho chọn ảnh.'}</p>
    <div class="notice info">Ảnh chỉ được xem trước trên máy của bạn và không được gửi lên máy chủ. Demo không tự phân tích nội dung ảnh.</div></section>
    <section class="panel"><h2>✦ Mô phỏng phân tích món ăn</h2><p class="subtitle">Bạn cần tự nhập tên món hoặc nguyên liệu nhìn thấy trong ảnh để tạo kết quả minh họa chính xác hơn.</p>
    <form id="scanForm"><div class="field"><label>Tên món / nguyên liệu trong ảnh</label><input type="text" name="food" maxlength="90" value="${e(scanManualFood)}" placeholder="Ví dụ: salad trứng, ức gà, cà rốt..." required></div>
      <button type="submit" class="btn">Phân tích mô phỏng</button></form>
    ${scanAnalysed ? scanResultHtml() : `<div class="miu-welcome"><span>🥗</span><h3>Kết quả sẽ xuất hiện ở đây</h3><p>Tải ảnh, ghi nhận món bằng tay, sau đó xem công thức liên quan.</p></div>`}
    </section></div>`;
}
function scanResultHtml() {
  const term=scanManualFood.trim().toLowerCase();
  const matches=recipes.filter(r => r.name.toLowerCase().includes(term) || r.ingredients.some(([n])=>n.toLowerCase().includes(term) || term.includes(n.toLowerCase()))).slice(0,3);
  return `<div class="scan-result"><span class="status">Kết quả mô phỏng</span><h3>${e(scanManualFood)}</h3><p>Bạn đã xác nhận tên nguyên liệu/món ăn. Đây không phải kết quả nhận diện AI thực tế.</p>${matches.length ? `<h4>Công thức liên quan</h4>${matches.map(r=>`<div class="scan-match"><span>${r.emoji} ${e(r.name)}</span><button class="btn soft small" data-action="detail-recipe" data-id="${r.id}">Xem công thức</button></div>`).join('')}` : '<p>Chưa tìm thấy công thức tương ứng trong kho dữ liệu mẫu. Hãy thử một tên món khác.</p>'}</div>`;
}
function paymentsPage() {
  const role=isExpert()?'seller':'buyer', records=paidRecords(role), total=records.reduce((sum,x)=>sum+Number(x.amount||0),0);
  const owned=new Set((state.transactions||[]).filter(x=>x.buyer===state.username && x.kind==='course').map(x=>x.courseId).filter(Boolean));
  return `${title('Thanh toán & lịch sử', isExpert() ? 'Quản lý lịch sử bán khóa học đã mô phỏng.' : 'Xem khóa học, tạo thanh toán mẫu và theo dõi lịch sử mua hàng.')}
    <div class="stats">${stat(isExpert()?'Giao dịch bán':'Giao dịch mua',records.length,'Chỉ là giao dịch demo','▤')}${stat(isExpert()?'Doanh thu mẫu':'Tổng chi mẫu',money(total),'Không phát sinh tiền thật','₫')}${stat('Trạng thái','Demo','Không kết nối ngân hàng','✓')}${stat('Vai trò',isExpert()?'Người bán':'Người mua','Theo tài khoản đã đăng nhập','◈')}</div>
    ${!isExpert()?`<section class="panel"><div class="panel-head"><h2>Khóa học có thể đăng ký</h2><span class="status">Thanh toán mô phỏng</span></div><div class="payment-products">${[...defaultCourses,...state.courses].map(c=>`<article class="payment-product"><div class="payment-product-icon">📘</div><div><h3>${e(c.title)}</h3><p>Chuyên gia Taeyeon · ${money(c.price)}</p></div><button class="btn small" data-action="pay-course" data-id="${e(c.id)}" ${owned.has(c.id)?'disabled':''}>${owned.has(c.id)?'Đã đăng ký':'Đăng ký'}</button></article>`).join('')}</div></section>`:'<div class="notice info">Lịch sử bán hiển thị các khóa học được Jessica mua thử trên cùng trình duyệt. Các giao dịch Premium là doanh thu mô phỏng của nền tảng, không tính vào doanh thu chuyên gia.</div>'}
    <section class="panel"><div class="panel-head"><h2>${isExpert()?'Lịch sử bán hàng':'Lịch sử mua hàng'}</h2><span class="status">${records.length} giao dịch</span></div>${records.length ? `<div class="transaction-list">${records.map(tx=>renderPaymentRecord(tx,role)).join('')}</div>` : '<div class="empty"><div class="big">🧾</div><h3>Chưa có giao dịch</h3><p>Giao dịch mô phỏng sẽ xuất hiện tại đây.</p></div>'}</section>
    <div class="notice">Chỉ phục vụ trình diễn: không thu tiền, không kết nối cổng thanh toán, không phát hành hóa đơn hoặc ghi nhận giao dịch thật.</div>`;
}
function paymentConfirm(id) {
  if (isExpert()) return toast('Chỉ tài khoản người học mới mua khóa học trong demo.');
  const c=[...defaultCourses,...state.courses].find(x=>x.id===id);
  if(!c) return;
  if(state.transactions.some(t=>t.buyer===state.username && t.courseId===id)) return toast('Bạn đã mua khóa học này trong bản demo.');
  showModal(`${modalHead('Xác nhận thanh toán mô phỏng')}<div class="payment-summary"><span>Khóa học</span><strong>${e(c.title)}</strong><span>Người bán</span><strong>Taeyeon · Chuyên gia</strong><span>Số tiền</span><b class="price">${money(c.price)}</b><span>Phương thức</span><strong>Ví mô phỏng · Không cần thông tin thẻ</strong></div><div class="notice info">Nhấn xác nhận sẽ ghi giao dịch vào lịch sử trên trình duyệt. Không trừ tiền và không chuyển khoản.</div><div class="form-actions"><button class="btn secondary modal-close" type="button">Hủy</button><button class="btn" data-action="confirm-payment" data-id="${e(c.id)}">Xác nhận thanh toán (demo)</button></div>`);
}
function confirmPayment(id) {
  if (isExpert()) return;
  const c=[...defaultCourses,...state.courses].find(x=>x.id===id);
  if (!c || state.transactions.some(t=>t.buyer===state.username && t.courseId===id)) { closeModal(); return; }
  state.transactions.unshift({ id:'TX-'+Date.now().toString(36).toUpperCase(), buyer:state.username, seller:'Taeyeon', courseId:c.id, kind:'course', title:c.title, amount:Number(c.price), date:new Date().toISOString(), sample:false });
  save();closeModal();nav('payments');toast('Đã ghi nhận thanh toán mô phỏng.');
}

// — Các tính năng bổ sung v6: lịch, kế hoạch và thiết bị kết nối —
let selectedDate = localDayKey();
let visibleMonth = selectedDate.slice(0, 7);
let pendingPlanSlot = null;
const activeBleDevices = new Map();

function localDayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function validDayKey(s) {
  return /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(`${s}T12:00:00`)) && localDayKey(new Date(s + 'T12:00:00')) === s;
}
function vnDay(s, full = true) {
  if (!validDayKey(s)) return '';
  return new Date(s + 'T12:00:00').toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric'});
}
function personalCollection(field) {
  if (!state[field] || typeof state[field] !== 'object' || Array.isArray(state[field])) state[field] = {};
  if (!state[field][state.username] || typeof state[field][state.username] !== 'object') state[field][state.username] = {};
  return state[field][state.username];
}
function planFor(day = selectedDate) { return personalCollection('dailyPlans')[day] || {}; }
function diaryFor(day = selectedDate) {
  return personalCollection('dailyDiary')[day] || {breakfast:'',lunch:'',dinner:'',snack:'',activities:[]};
}
function devicesForUser() {
  const map = personalCollection('connectedDevices');
  if (!Array.isArray(map.list)) map.list = [];
  return map.list;
}
function calendar(day = selectedDate) {
  const [year, month] = visibleMonth.split('-').map(Number);
  const start = (new Date(year,month-1,1).getDay() + 6) % 7;
  const numDays = new Date(year,month,0).getDate();
  const cells = Array.from({length:start}, () => '<span class="cal-spacer" aria-hidden="true"></span>');
  for (let i=1;i<=numDays;i++) {
    const key = `${visibleMonth}-${String(i).padStart(2,'0')}`;
    const planned = planFor(key);
    const logged = diaryFor(key);
    const diaryHas = ['breakfast','lunch','dinner','snack'].some(k => Boolean(logged[k])) || (logged.activities || []).length > 0;
    const planHas = ['kcal','carbs','protein','fat','breakfast','lunch','dinner'].some(k => planned[k] !== undefined && planned[k] !== '' && planned[k] !== null);
    cells.push(`<button type="button" class="cal-day ${key===day?'selected':''} ${key===localDayKey()?'today':''}" aria-label="${e(vnDay(key))}" aria-pressed="${key===day}" data-action="day-select" data-id="${key}"><span>${i}</span><i class="cal-dots">${planHas?'<b class="plan-dot"></b>':''}${diaryHas?'<b class="diary-dot"></b>':''}</i></button>`);
  }
  return `<div class="calendar-card"><div class="calendar-top"><div><span class="eyebrow">LỊCH SỨC KHỎE</span><h3>${String(month).padStart(2,'0')}/${year}</h3></div><div class="calendar-actions"><button type="button" class="mini-btn" data-action="change-month" data-id="-1" aria-label="Tháng trước">‹</button><button type="button" class="mini-btn" data-action="calendar-today">Hôm nay</button><button type="button" class="mini-btn" data-action="change-month" data-id="1" aria-label="Tháng sau">›</button></div></div><div class="calendar-week">${['T2','T3','T4','T5','T6','T7','CN'].map(d=>`<span>${d}</span>`).join('')}</div><div class="calendar-grid">${cells.join('')}</div><div class="calendar-legend"><span><i class="plan-dot"></i> Có kế hoạch</span><span><i class="diary-dot"></i> Có nhật ký</span></div></div>`;
}
function selectDay(day) {
  if (!validDayKey(day)) return;
  selectedDate = day;
  visibleMonth = day.slice(0, 7);
  render();
}
function monthShift(delta) {
  const [year,month] = visibleMonth.split('-').map(Number);
  const shifted = new Date(year, month-1+delta, 1);
  visibleMonth = localDayKey(shifted).slice(0,7);
  render();
}
function smartGoal(v, unit) { return v === undefined || v === '' || v === null ? 'Chưa đặt' : `${Number(v).toLocaleString('vi-VN')} ${unit}`; }
function planField(n, label, unit, val, max) {
  return `<div class="goal-field"><label for="goal_${n}">${label}</label><div class="goal-input"><input id="goal_${n}" name="${n}" inputmode="decimal" type="number" min="0" max="${max}" step="any" placeholder="Tự đặt mục tiêu" value="${val===undefined||val===null?'':e(val)}"><span>${unit}</span></div></div>`;
}
function planMealField(key, label, icon, value) {
  return `<div class="meal-field"><div class="meal-head"><label for="plan_${key}">${icon} ${label}</label><button type="button" class="text-link" data-action="plan-suggest" data-id="${key}">✦ Gợi ý thực đơn ↗</button></div><textarea name="${key}" id="plan_${key}" rows="3" maxlength="500" placeholder="Nhập món ăn dự kiến cho ${label.toLowerCase()}...">${e(value||'')}</textarea></div>`;
}
function plansPage() {
  const p = planFor();
  return `${title('Kế hoạch dinh dưỡng', 'Tự thiết lập mục tiêu năng lượng, dinh dưỡng và thực đơn theo từng ngày.')}
  <div class="date-ribbon"><div><span class="eyebrow">NGÀY ĐANG LẬP KẾ HOẠCH</span><h2>${e(vnDay(selectedDate))}</h2></div><label class="date-inline">Chuyển ngày <input id="dailyDatePicker" type="date" value="${selectedDate}"></label></div>
  <div class="planning-layout"><aside>${calendar()}</aside><div class="plan-main">
    <section class="panel"><div class="panel-head"><div><h2>🎯 Mục tiêu dinh dưỡng</h2><p class="subtitle">Bạn tự điền mục tiêu phù hợp; website không tự chỉ định chỉ tiêu y tế.</p></div><span class="role-badge">Theo ngày</span></div>
      <form id="dailyPlanForm"><div class="goal-fields">
      ${planField('kcal','Calories','kcal',p.kcal,10000)}${planField('carbs','Tinh bột','g',p.carbs,1500)}${planField('protein','Chất đạm','g',p.protein,1500)}${planField('fat','Chất béo','g',p.fat,1500)}
      </div><div class="form-heading"><h2>🍽 Thực đơn trong ngày</h2><p>Bạn có thể chọn gợi ý món ăn và quay lại kế hoạch để tiếp tục.</p></div>
      <div class="meal-list">${planMealField('breakfast','Bữa sáng','☀️',p.breakfast)}${planMealField('lunch','Bữa trưa','🌤',p.lunch)}${planMealField('dinner','Bữa tối','🌙',p.dinner)}</div>
      <div class="form-actions"><button type="button" class="btn secondary" data-page="diary">Mở nhật ký ngày này</button><button class="btn" type="submit">Lưu kế hoạch</button></div>
      </form></section>
    <section class="panel plan-summary"><div class="panel-head"><h2>📌 Tổng hợp mục tiêu đã đặt</h2><span class="status">${e(vnDay(selectedDate,false))}</span></div><div class="plan-summary-grid"><div><span>Calories</span><strong>${smartGoal(p.kcal,'kcal')}</strong></div><div><span>Tinh bột</span><strong>${smartGoal(p.carbs,'g')}</strong></div><div><span>Chất đạm</span><strong>${smartGoal(p.protein,'g')}</strong></div><div><span>Chất béo</span><strong>${smartGoal(p.fat,'g')}</strong></div></div></section>
  <section class="panel" id="exerciseInPlanV12"><div class="panel-head"><div><h2>🏃 Rèn luyện trong ngày</h2><p class="subtitle">Các bài tập bạn đã thêm sẽ hiển thị tại đây theo ngày đã chọn.</p></div><button class="btn secondary small" data-page="workouts">+ Thêm bài tập</button></div>${workoutPlanInlineV12()}</section>
  </div></div>`;
}
function storePlanData(data) {
  const targets = {};
  for(const key of ['kcal','carbs','protein','fat']) {
    const raw = String(data[key]||'').trim();
    if (raw === '') { targets[key]=''; continue; }
    const val = Number(raw);
    const max = key === 'kcal' ? 10000 : 1500;
    if (!Number.isFinite(val)||val<0||val>max) { toast('Hãy kiểm tra lại chỉ tiêu dinh dưỡng vừa nhập.'); return false; }
    targets[key] = val;
  }
  for (const key of ['breakfast','lunch','dinner']) targets[key] = String(data[key]||'').trim().slice(0,500);
  personalCollection('dailyPlans')[selectedDate] = targets;
  save();
  return true;
}
function diaryMealField(key,label,icon,value) {
  return `<div class="meal-field"><div class="meal-head"><label for="diary_${key}">${icon} ${label}</label></div><textarea id="diary_${key}" name="${key}" rows="2" maxlength="500" placeholder="Hôm nay bạn đã dùng gì?">${e(value||'')}</textarea></div>`;
}
function diaryPage() {
  const d = diaryFor();
  const activities = Array.isArray(d.activities) ? d.activities : [];
  const totalMinutes=activities.reduce((sum,a)=>sum+Number(a.minutes||0),0);
  const knownCalories=activities.reduce((sum,a)=>sum+(a.burned===null||a.burned===undefined?0:Number(a.burned)),0);
  const known=activities.some(a=>a.burned!==null&&a.burned!==undefined);
  return `${title('Nhật ký sức khỏe', 'Ghi lại bữa ăn đã dùng và quá trình vận động theo ngày; dữ liệu được lưu trên trình duyệt.')}
  <div class="date-ribbon"><div><span class="eyebrow">NHẬT KÝ NGÀY</span><h2>${e(vnDay(selectedDate))}</h2></div><label class="date-inline">Chọn ngày <input id="dailyDatePicker" type="date" value="${selectedDate}"></label></div>
  <div class="planning-layout"><aside>${calendar()}</aside><div class="plan-main"><section class="panel"><div class="panel-head"><div><h2>🥗 Nhật ký bữa ăn</h2><p class="subtitle">Lưu lại những món đã ăn thực tế, không đồng nhất với thực đơn dự kiến.</p></div><button type="button" class="btn soft small" data-page="plans">Xem kế hoạch ↗</button></div><form id="dailyDiaryForm"><div class="meal-list">${diaryMealField('breakfast','Bữa sáng','☀️',d.breakfast)}${diaryMealField('lunch','Bữa trưa','🌤',d.lunch)}${diaryMealField('dinner','Bữa tối','🌙',d.dinner)}${diaryMealField('snack','Bữa phụ','🍓',d.snack)}</div><div class="form-actions"><button type="submit" class="btn">Lưu bữa ăn</button></div></form></section>
  <section class="panel"><div class="panel-head"><div><h2>🏃 Nhật ký vận động</h2><p class="subtitle">Thêm từng hoạt động đã thực hiện trong ngày.</p></div><span class="status">${totalMinutes} phút</span></div><form id="activityForm" class="activity-form"><div class="activity-fields"><div class="field"><label>Hoạt động *</label><input name="name" required maxlength="80" placeholder="Đi bộ, chạy bộ, yoga..."></div><div class="field"><label>Thời lượng (phút) *</label><input name="minutes" type="number" min="1" max="1440" inputmode="numeric" required placeholder="30"></div><div class="field"><label>Calories tiêu hao (tự nhập)</label><input name="burned" type="number" min="0" max="10000" step="1" placeholder="Không bắt buộc"></div></div><div class="form-actions"><button class="btn" type="submit">+ Thêm hoạt động</button></div></form>
  ${activities.length?`<div class="activity-list">${activities.map(a=>`<div class="activity-row"><span class="activity-icon">↗</span><div><strong>${e(a.name)}</strong><small>${Number(a.minutes)} phút${a.burned!==null&&a.burned!==undefined?` · ${Number(a.burned)} kcal tự nhập`:''}</small></div><button type="button" data-action="activity-remove" data-id="${e(a.id)}" class="mini-btn" aria-label="Xóa hoạt động ${e(a.name)}">Xóa</button></div>`).join('')}</div>`:'<div class="empty diary-empty"><div class="big">🚶</div><p>Chưa có hoạt động nào được ghi.</p></div>'}
  <div class="notice info" style="margin-top:14px">Tổng thời gian: <b>${totalMinutes} phút</b>${known?` · Calories tự nhập: <b>${knownCalories} kcal</b>`:''}. Đây là số liệu do người dùng cung cấp, không phải đo từ thiết bị.</div></section></div></div>`;
}
function storeDiaryMeals(data) {
  const before = diaryFor();
  const entry = {...before, activities:Array.isArray(before.activities)?before.activities:[]};
  for (const key of ['breakfast','lunch','dinner','snack']) entry[key]=String(data[key]||'').trim().slice(0,500);
  personalCollection('dailyDiary')[selectedDate]=entry;
  save();
}
function addActivity(data) {
  const name=String(data.name||'').trim();
  const minutes=Number(data.minutes);
  const burned=String(data.burned||'').trim()===''?null:Number(data.burned);
  if (!name||!Number.isInteger(minutes)||minutes<1||minutes>1440||burned!==null&&(!Number.isFinite(burned)||burned<0||burned>10000)) {toast('Hãy kiểm tra tên hoạt động, số phút và calories (nếu có).');return false;}
  const old=diaryFor();
  const newEntry={...old, activities:[...(old.activities||[]),{id:uid(),name,minutes,burned}]};
  personalCollection('dailyDiary')[selectedDate]=newEntry;
  save();return true;
}
function devicesPage() {
  const devices=devicesForUser();
  const support=typeof navigator.bluetooth!=='undefined' && window.isSecureContext;
  const deviceIcons={watch:'⌚',scale:'⚖',band:'◉',other:'📡'};
  return `${title('Thiết bị kết nối','Quản lý đồng hồ, vòng tay và cân sức khỏe. Bluetooth thực tùy thiết bị, trình duyệt và quyền truy cập.')}
  <section class="device-hero"><div><span class="eyebrow">HỆ SINH THÁI .theMeal</span><h2>Kết nối thiết bị sức khỏe</h2><p>Chọn thiết bị Bluetooth Low Energy (BLE) hoặc thêm thiết bị mẫu để thử giao diện. Bản demo chưa đồng bộ chỉ số sức khỏe tự động.</p><div class="device-cta"><button class="btn light" data-action="bluetooth-connect">⌁ Tìm thiết bị Bluetooth</button><button class="btn ghost" data-action="device-help">Xem hướng dẫn</button></div></div><div class="device-illustration">⌚</div></section>
  <div class="notice ${support?'info':''}">${support?'✓ Trình duyệt có API Web Bluetooth và đang ở kết nối an toàn (HTTPS/localhost). Bạn có thể thử mở danh sách thiết bị BLE.':'ℹ Trình duyệt hiện tại không hỗ trợ Web Bluetooth hoặc website không ở kết nối an toàn. Bạn vẫn có thể trải nghiệm bằng thiết bị mẫu.'}</div>
  <div class="section-title"><h2>Thiết bị của bạn</h2><span class="status">${devices.length} thiết bị</span></div>
  ${devices.length?`<div class="device-grid">${devices.map(d=>{const active=!!activeBleDevices.get(d.id)?.gatt?.connected;const actual=!d.demo;return `<article class="device-card"><div class="device-icon">${deviceIcons[d.kind]||'📡'}</div><div class="device-details"><h3>${e(d.name)}</h3><p>${actual?'Thiết bị BLE':'Thiết bị mẫu'} · ${e(d.kind==='watch'?'Đồng hồ':d.kind==='scale'?'Cân sức khỏe':d.kind==='band'?'Vòng tay':'Thiết bị khác')}</p><span class="device-status ${active?'connected':d.demo?'demo-status':''}">${active?'● Đang kết nối BLE':d.demo?'● Đã thêm thiết bị mẫu':'○ Đã lưu, chưa kết nối'}</span></div><div class="device-actions">${actual&&active?`<button type="button" class="btn secondary small" data-action="bluetooth-disconnect" data-id="${e(d.id)}">Ngắt kết nối</button>`:''}<button type="button" class="mini-btn" data-action="device-remove" data-id="${e(d.id)}">Xóa</button></div></article>`;}).join('')}</div>`:'<div class="empty device-empty"><div class="big">⌚</div><h3>Chưa có thiết bị nào</h3><p>Hãy thử tìm thiết bị BLE hoặc thêm thiết bị mẫu bên dưới.</p></div>'}
  <div class="section-title"><h2>Trải nghiệm với thiết bị mẫu</h2></div><div class="device-presets"><button type="button" data-action="device-demo" data-id="watch"><span>⌚</span><strong>Đồng hồ thông minh</strong><small>Thêm thiết bị mẫu</small></button><button type="button" data-action="device-demo" data-id="scale"><span>⚖️</span><strong>Cân phân tích cơ thể</strong><small>Thêm thiết bị mẫu</small></button><button type="button" data-action="device-demo" data-id="band"><span>◉</span><strong>Vòng đeo sức khỏe</strong><small>Thêm thiết bị mẫu</small></button></div>
  <p class="muted" style="margin-top:18px;font-size:12px">Lưu ý: Thiết bị thật chỉ được ghi là “đang kết nối” sau khi bắt tay Bluetooth thành công. Chưa có driver chuyên biệt để đọc nhịp tim, cân nặng hoặc giấc ngủ từ từng hãng.</p>`;
}
function demoDevice(kind) {
  const dict={watch:['Đồng hồ sức khỏe (mẫu)','watch'],scale:['Cân thông minh (mẫu)','scale'],band:['Vòng tay sức khỏe (mẫu)','band']};
  if(!dict[kind])return;
  const devices=devicesForUser();
  if(devices.some(d=>d.demo&&d.kind===kind)){toast('Thiết bị mẫu này đã có trong danh sách.');return;}
  devices.push({id:'demo-'+uid(),name:dict[kind][0],kind,demo:true,created:new Date().toISOString()});
  save();render();toast('Đã thêm thiết bị mẫu (không kết nối Bluetooth).');
}
async function tryBluetoothConnect() {
  if (!window.isSecureContext||!navigator.bluetooth?.requestDevice) {
    toast('Trình duyệt này chưa hỗ trợ Web Bluetooth. Vui lòng thử Chrome trên Android hoặc dùng thiết bị mẫu.');
    return;
  }
  try {
    const device=await navigator.bluetooth.requestDevice({acceptAllDevices:true,optionalServices:['battery_service','heart_rate','weight_scale','device_information']});
    if (!device?.gatt) {toast('Thiết bị đã chọn không hỗ trợ kết nối GATT qua trình duyệt.');return;}
    await device.gatt.connect();
    activeBleDevices.set(device.id,device);
    const devices=devicesForUser();
    const existing=devices.find(d=>d.id===device.id);
    if(!existing) devices.push({id:device.id,name:device.name||'Thiết bị BLE không tên',kind:'other',demo:false,created:new Date().toISOString()});
    device.addEventListener('gattserverdisconnected',()=>{activeBleDevices.delete(device.id);if(state.session.loggedIn&&page==='devices')render();});
    save();render();toast('Đã kết nối BLE thành công. Chưa hỗ trợ đọc chỉ số tự động.');
  } catch(err) {
    if(err?.name==='NotFoundError') toast('Bạn chưa chọn thiết bị. Có thể thử lại bất cứ lúc nào.');
    else toast('Không thể kết nối BLE: '+(err?.message||'thiết bị hoặc trình duyệt không tương thích').slice(0,130));
  }
}
function removeDevice(id,disconn=false) {
  const devices=devicesForUser();
  const d=devices.find(x=>x.id===id);
  if(!d)return;
  const ble=activeBleDevices.get(id);
  if(ble?.gatt?.connected)ble.gatt.disconnect();
  activeBleDevices.delete(id);
  if(!disconn){const ix=devices.indexOf(d);devices.splice(ix,1);save();}
  render();toast(disconn?'Đã ngắt kết nối BLE.':'Đã xóa thiết bị khỏi danh sách.');
}

function overview() {
  const food = activeFoods();
  const warn = expiring();
  const todayPlan=planFor(localDayKey());
  const todayDiary=diaryFor(localDayKey());
  const plannedMeals=['breakfast','lunch','dinner'].filter(k=>todayPlan[k]).length;
  const loggedMeals=['breakfast','lunch','dinner','snack'].filter(k=>todayDiary[k]).length;
  return `${title('Chào mừng trở lại! 👋', 'Hôm nay bạn muốn ăn uống thông minh hơn như thế nào?')}
  <section class="hero"><div><span class="eyebrow" style="color:#aaf1d5">.theMeal · SMART LIVING</span><h1>Từ nguyên liệu trong tủ lạnh đến bữa ăn lành mạnh.</h1><p>Quản lý thực phẩm · Khám phá công thức phù hợp · Mua đúng những gì cần thiết.</p><button class="btn" data-page="miu">✦ Hỏi Miu hôm nay →</button></div><div class="hero-art">🥑</div></section>
  <section class="home-plan-banner"><div class="home-plan-icon">🗓</div><div><span class="eyebrow">KẾ HOẠCH CỦA BẠN</span><h2>Lên kế hoạch ăn uống mỗi ngày</h2><p>Hôm nay: <b>${plannedMeals}/3 bữa</b> đã lên kế hoạch · <b>${loggedMeals} bữa</b> đã ghi nhật ký. Đặt chỉ tiêu calories, tinh bột, chất đạm và chất béo.</p></div><button class="btn" type="button" data-page="plans">Lên kế hoạch →</button></section>
  <div class="stats">${stat('Thực phẩm đang có', food.length, 'Được quản lý trong tủ lạnh', '▤')}${stat('Cần chú ý', warn.length, 'Sắp hoặc đã hết hạn', '⏰')}${stat('Món trong kế hoạch', state.chosen.length, 'Đã chọn để chuẩn bị', '🍽')}${stat('Cần mua bổ sung', state.shopping.filter(x => !x.done).length, 'Mặt hàng chưa hoàn tất', '🛍')}</div>
  <div class="grid2"><section class="panel"><div class="panel-head"><h2>🧊 Tủ lạnh của bạn</h2><button class="btn soft small" data-page="fridge">Xem tất cả →</button></div>${foodTable([...food].sort((a, b) => days(a) - days(b)), true)}</section><section class="panel"><div class="panel-head"><h2>✨ Lời nhắc thông minh</h2></div>${warn.length ? `<div class="notice">⚠ Có <b>${warn.length} thực phẩm</b> cần chú ý hạn sử dụng. Ưu tiên sử dụng thực phẩm còn an toàn trước khi quá hạn.</div>` : '<div class="notice info">✓ Chưa có thực phẩm đến ngưỡng cảnh báo.</div>'}<div class="steps"><div class="step"><span>1</span><div><strong>Kiểm tra nguyên liệu</strong><p>Thêm thực phẩm mới và cập nhật lượng còn lại.</p></div></div><div class="step"><span>2</span><div><strong>Tìm món phù hợp</strong><p>Hệ thống so khớp món ăn với nguyên liệu, mục tiêu ${e(state.goal).toLowerCase()}.</p></div></div><div class="step"><span>3</span><div><strong>Mua sắm đủ dùng</strong><p>Tính đúng phần nguyên liệu còn thiếu từ kế hoạch.</p></div></div></div></section></div>
  <div class="section-title"><h2>Gợi ý dành cho bạn</h2><a href="#recipes" data-page="recipes">Xem thêm →</a></div><div class="card-grid">${sortedRecipes().slice(0, 3).map(recipeCard).join('')}</div>`;
}

function fridge() {
  const food = activeFoods().filter(f => f.name.toLowerCase().includes(fridgeQuery.toLowerCase()) && (fridgeFilter === 'Tất cả' || (fridgeFilter === 'Sắp hết hạn' ? days(f) <= f.warn : f.group === fridgeFilter)));
  return `${title('Tủ lạnh thông minh', 'Quản lý nguyên liệu, tránh lãng phí và theo dõi hạn sử dụng.', `<button class="btn" data-action="add-food">＋ Thêm thực phẩm</button>`)}
  <div class="stats">${stat('Đang lưu', activeFoods().length, state.premium ? 'Premium: không giới hạn' : 'Gói miễn phí: tối đa 7', '🧊')}${stat('Sắp hết hạn', expiring().filter(f => days(f) >= 0).length, 'Theo mức cảnh báo từng món', '⏰')}${stat('Đã hết hạn', expiring().filter(f => days(f) < 0).length, 'Không dùng thực phẩm quá hạn', '⚠')}${stat('Gói của bạn', state.premium ? 'Premium' : 'Free', 'Chọn gói bất kỳ lúc nào', '✦')}</div>
  <section class="panel"><div class="panel-head"><h2>Danh sách nguyên liệu</h2><span class="status">${activeFoods().length} sản phẩm</span></div><div class="filterbar"><input id="fridgeSearch" placeholder="⌕ Tìm theo tên thực phẩm..." value="${e(fridgeQuery)}"><select id="fridgeFilter">${['Tất cả','Sắp hết hạn',...groups].map(g => `<option ${g===fridgeFilter?'selected':''}>${g}</option>`).join('')}</select><button class="btn secondary" data-action="reset-fridge-filter">Bỏ lọc</button></div>${foodTable(food)}</section>`;
}

function recipesPage() {
  return `${title('Gợi ý thực đơn', 'Món Việt phù hợp mục tiêu, được so khớp với nguyên liệu trong tủ lạnh.', `<button class="btn" data-page="shopping">Xem kế hoạch (${state.chosen.length}) →</button>`)}
  <div class="notice info">✦ Đang ưu tiên công thức tận dụng thực phẩm sắp hết hạn và phù hợp mục tiêu <b>${e(state.goal)}</b>. Đây là thuật toán gợi ý minh họa, chưa sử dụng AI thật.</div>
  <div class="filterbar"><input id="recipeSearch" placeholder="⌕ Tìm món hoặc nguyên liệu..." value="${e(recipeQuery)}"><select id="recipeGoal">${['Tất cả','Giảm cân','Giữ cân','Tăng cơ'].map(g => `<option ${g===recipeGoal?'selected':''}>${g}</option>`).join('')}</select></div>
  <div class="card-grid">${sortedRecipes().map(recipeCard).join('')}</div>`;
}

function shoppingPage() {
  return `${title('Danh sách mua sắm', 'Lên kế hoạch đúng số lượng còn thiếu từ những món đã chọn.', `<button class="btn" data-action="generate-shopping">✦ Tạo danh sách tự động</button>`)}
  <div class="grid2"><section class="panel"><div class="panel-head"><h2>🍽 Món ăn đã chọn</h2><span class="status">${state.chosen.length} món</span></div>${state.chosen.length ? state.chosen.map(id => { const r = recipes.find(x => x.id === id); return r ? `<div class="shopping-line"><span style="font-size:28px">${r.emoji}</span><span class="name"><b>${r.name}</b><br><small class="muted">${r.kcal} kcal · ${r.ingredients.length} nguyên liệu</small></span><button class="mini-btn" data-action="toggle-recipe" data-id="${r.id}">Bỏ</button></div>` : ''; }).join('') : '<div class="empty"><div class="big">🍽</div><p>Chưa chọn món ăn nào.</p><button class="btn soft" data-page="recipes">Chọn món ngay →</button></div>'}<div style="margin-top:16px"><button class="btn secondary" data-page="recipes">+ Thêm món vào kế hoạch</button></div></section><section class="panel"><h2>🛍 Quy trình mua sắm</h2><p class="subtitle">Tính toán theo số lượng hiện có, không thêm thừa nguyên liệu.</p><div class="steps"><div class="step"><span>1</span><div><strong>Chọn công thức</strong><p>Chọn một hoặc nhiều món ăn.</p></div></div><div class="step"><span>2</span><div><strong>Đối chiếu tủ lạnh</strong><p>Trừ nguyên liệu còn đủ và gộp các nguyên liệu trùng.</p></div></div><div class="step"><span>3</span><div><strong>Cập nhật sau mua</strong><p>Đánh dấu, thêm thực phẩm mua được vào tủ lạnh.</p></div></div></div></section></div>
  <section class="panel"><div class="panel-head"><h2>Danh sách cần mua</h2><button class="btn soft small" data-action="add-shopping">+ Thêm thủ công</button></div>${state.shopping.length ? `${state.shopping.map(x => `<div class="shopping-line"><input type="checkbox" data-action="check-shopping" data-id="${e(x.id)}" ${x.done?'checked':''}><span class="emoji">${icons[x.group] || '📦'}</span><span class="name ${x.done?'done':''}"><b>${e(x.name)}</b><br><small class="muted">${e(x.group)}</small></span><input type="number" min="0" step="1" data-action="qty-shopping" data-id="${e(x.id)}" value="${Number(x.qty)}"><span class="muted">${e(x.unit)}</span><button data-action="remove-shopping" data-id="${e(x.id)}">✕</button></div>`).join('')}<div class="row" style="margin-top:22px"><span class="muted">Đã mua ${state.shopping.filter(x => x.done).length}/${state.shopping.length} mặt hàng</span><button class="btn" data-action="stock-shopping">✓ Nhập hàng đã mua vào tủ lạnh</button></div>` : '<div class="empty"><div class="big">🛒</div><h3>Danh sách đang trống</h3><p>Chọn món, sau đó bấm “Tạo danh sách tự động”.</p></div>'}</section>`;
}

function expertsPage() {
  const learnerCount = 4 + new Set(state.transactions.filter(tx=>tx.kind==='course' && tx.seller==='Taeyeon').map(tx=>tx.buyer).filter(name=>!['Jessica','Ngọc Anh','Minh Khoa','Khánh Linh'].includes(name))).size;
  const expertBtn = isExpert() ? `<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" data-action="create-post">Đăng bài →</button><button class="btn secondary" data-page="messages">Mở chat</button></div>` : `<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" data-action="expert-apply">Đăng ký chuyên gia →</button><button class="btn secondary" data-page="messages">Xem trò chuyện</button></div>`;
  const authoredPosts = state.community.filter(p=>p.username===state.username).length + myExpertPosts().length;
  const stats = isExpert()
    ? `${stat('Bài viết', authoredPosts, '', '📝')}${stat('Học viên', learnerCount, 'Học viên trong danh sách demo', '👥')}${stat('Khóa học', defaultCourses.length + myCourses().length, '', '📘')}${stat('Vai trò', 'Expert', 'Tài khoản chuyên gia đã kích hoạt', '✦')}`
    : `${stat('Khóa học mẫu', defaultCourses.length + myCourses().length, '', '📘')}${stat('Hồ sơ đã gửi', state.expertRequests.length, '', '◈')}${stat('Bài viết', authoredPosts, '', '📝')}${stat('Vai trò', 'Member', '', '✦')}`;
  const tabs = isExpert()
    ? `<div class="pill-tabs"><button data-action="expert-tab" data-tab="courses" class="${courseTab==='courses'?'selected':''}">Khám phá khóa học</button><button data-action="expert-tab" data-tab="dashboard" class="${courseTab==='dashboard'?'selected':''}">Không gian chuyên gia</button><button data-action="expert-tab" data-tab="posts" class="${courseTab==='posts'?'selected':''}">Bài viết của tôi</button></div>`
    : `<div class="pill-tabs"><button data-action="expert-tab" data-tab="courses" class="${courseTab==='courses'?'selected':''}">Khám phá khóa học</button><button data-action="expert-tab" data-tab="dashboard" class="${courseTab==='dashboard'?'selected':''}">Đăng ký chuyên gia</button></div>`;
  const coursesHtml = `<div class="expert-list">${[...defaultCourses, ...state.courses.filter(x=>!x.status||x.status==='approved').map(x => ({...x, owner: x.owner || state.name}))].map(c => `<div class="expert-item"><div class="row"><div class="mini-profile"><div class="profile-icon">📚</div><div><h3>${e(c.title)}</h3><span class="tiny">${e(c.owner)}</span></div></div><span class="price">${money(c.price)}</span></div><p>${e(c.desc)}</p><button class="btn small" data-action="enroll" data-id="${e(c.id)}">Xem đăng ký học →</button></div>`).join('')}</div>`;
  const dashboardHtml = isExpert()
    ? `<div class="grid2"><section class="panel"><div class="mini-profile"><img src="${e(state.profileImage)}" alt="${e(state.name)}" class="profile-photo" style="width:72px;height:72px;border-radius:20px"><div><span class="role-badge expert">◈ Chuyên gia</span><h2 style="margin-top:10px">${e(state.name)}</h2><p class="subtitle" style="margin:4px 0 0">${e(state.specialty || 'Dinh dưỡng & sức khỏe')}</p></div></div><div class="expert-actions" style="margin-top:18px"><div class="quick-card"><h3>Đăng bài</h3><p>Tạo nội dung tư vấn hoặc mẹo dinh dưỡng cho cộng đồng.</p><button class="btn small" data-action="create-post">Tạo bài viết</button></div><div class="quick-card"><h3>Quản lý bài viết</h3><p>Xem và cập nhật nội dung đã đăng trong prototype.</p><button class="btn secondary small" data-action="manage-posts">Mở quản lý</button></div><div class="quick-card"><h3>Quản lý học viên</h3><p>Theo dõi tình trạng tham gia, phản hồi và tiến độ học tập.</p><button class="btn secondary small" data-action="manage-learners">Xem danh sách</button></div><div class="quick-card"><h3>Trò chuyện</h3><p>Trao đổi trực tiếp với học viên ngay trong bản demo.</p><button class="btn secondary small" data-page="messages">Mở chat</button></div><div class="quick-card"><h3>Tạo khóa học</h3><p>Tạo một khóa học mẫu để hiển thị trong không gian chuyên gia.</p><button class="btn small" data-action="create-course">Tạo khóa học</button></div></div>${myCourses().length?`<div class="my-courses"><h3>Khóa học do bạn tạo</h3>${myCourses().map(c=>`<div class="shopping-line"><span class="name"><b>${e(c.title)}</b><br><small>${money(c.price)}</small></span><button class="mini-btn" data-action="edit-course" data-id="${e(c.id)}">Sửa</button><button class="mini-btn" data-action="remove-course" data-id="${e(c.id)}">Xóa</button></div>`).join('')}</div>`:''}</section><section class="panel"><h2>Trạng thái tài khoản chuyên gia</h2><div class="steps"><div class="step"><span>1</span><div><strong>Hồ sơ đã được kích hoạt</strong><p>Bạn đang ở chế độ chuyên gia và có thể đăng bài, quản lý học viên.</p></div></div><div class="step"><span>2</span><div><strong>Kết nối khóa học</strong><p>Khóa học bạn tạo sẽ xuất hiện trong danh sách bên trái để học viên xem.</p></div></div><div class="step"><span>3</span><div><strong>Quản trị nội dung</strong><p>Các bài viết và khóa học trong prototype chỉ lưu trên trình duyệt hiện tại.</p></div></div></div></section></div>`
    : `<div class="grid2"><section class="panel"><h2>Trở thành chuyên gia</h2><p class="subtitle">Mở không gian riêng để đăng bài, quản lý học viên và tạo khóa học mẫu.</p><div class="steps"><div class="step"><span>1</span><div><strong>Điền hồ sơ</strong><p>Cung cấp họ tên, chuyên môn và kinh nghiệm.</p></div></div><div class="step"><span>2</span><div><strong>Chờ quản trị viên xét duyệt</strong><p>Sau khi gửi hồ sơ, quản trị viên kiểm tra và duyệt mới kích hoạt quyền chuyên gia.</p></div></div><div class="step"><span>3</span><div><strong>Sử dụng giao diện chuyên gia</strong><p>Truy cập các công cụ quản lý bài viết, học viên và khóa học.</p></div></div></div><button class="btn" data-action="expert-apply">Mở biểu mẫu đăng ký</button></section><section class="panel"><h2>Quyền lợi sau khi được duyệt</h2><div class="expert-actions"><div class="quick-card"><h3>Đăng bài</h3><p>Chia sẻ kiến thức, lời khuyên và thực đơn.</p></div><div class="quick-card"><h3>Quản lý bài viết</h3><p>Chỉnh sửa nội dung đã tạo trong tài khoản của bạn.</p></div><div class="quick-card"><h3>Quản lý học viên</h3><p>Theo dõi danh sách người học và phản hồi.</p></div><div class="quick-card"><h3>Tạo khóa học</h3><p>Mở khóa học mới để học viên đăng ký.</p></div></div></section></div>`;
  const postsHtml = `<section class="panel"><div class="panel-head"><h2>Bài viết của tôi</h2><button class="btn soft small" data-action="create-post">+ Đăng bài</button></div>${myExpertPosts().length ? myExpertPosts().map(p => `<div class="expert-item"><div class="row"><div><h3>${e(p.title)}</h3><span class="tiny">Cập nhật ${date(p.date)}</span></div><div class="actions"><button class="mini-btn" data-action="edit-post" data-id="${e(p.id)}">Sửa</button><button class="mini-btn" data-action="remove-post" data-id="${e(p.id)}">Xóa</button></div></div><p>${e(p.summary)}</p></div>`).join('') : '<div class="empty"><div class="big">📝</div><p>Bạn chưa có bài viết nào.</p></div>'}</section>`;
  let body = coursesHtml;
  if (courseTab === 'dashboard') body = dashboardHtml;
  if (courseTab === 'posts' && isExpert()) body = postsHtml;
  return `${title('Chuyên gia & khóa học', isExpert() ? 'Không gian chuyên gia đã được kích hoạt cho tài khoản của bạn.' : 'Đăng ký trở thành chuyên gia để mở các công cụ quản lý riêng.', expertBtn)}<div class="stats">${stats}</div>${tabs}${body}`;
}

function communityPage() {
  return `${title('Cộng đồng & đóng góp món ăn', 'Chia sẻ công thức, giúp mở rộng dữ liệu món Việt có kiểm duyệt.', `<button class="btn" data-action="community-post">+ Đóng góp công thức</button>`)}
  <div class="grid2"><section class="panel"><h2>Bài viết của cộng đồng</h2><p class="subtitle">Nội dung người dùng gửi ở chế độ thử nghiệm; cần chuyên gia hoặc quản trị viên duyệt trước khi xuất bản chính thức.</p>${state.community.length ? state.community.map(x => `<div class="expert-item" style="margin-bottom:12px"><span class="status warn">Chờ kiểm duyệt</span><h3>${e(x.name)}</h3><p>${e(x.desc)}</p><span class="tiny">Gửi ngày ${date(x.date)}</span></div>`).join('') : '<div class="empty"><div class="big">🥗</div><h3>Đóng góp món ăn đầu tiên</h3><p>Công thức do cộng đồng tạo cần được kiểm duyệt trước khi bổ sung vào cơ sở dữ liệu.</p></div>'}</section><section class="panel"><h2>Quy trình chất lượng dữ liệu</h2><div class="steps"><div class="step"><span>1</span><div><strong>Người dùng gửi công thức</strong><p>Tên món, nguyên liệu, cách chế biến và thông tin mô tả.</p></div></div><div class="step"><span>2</span><div><strong>Kiểm duyệt chuyên môn</strong><p>Rà soát độ chính xác, tính phù hợp và an toàn.</p></div></div><div class="step"><span>3</span><div><strong>Thêm vào kho công thức</strong><p>Chỉ cập nhật chính thức sau khi được xét duyệt.</p></div></div></div></section></div>`;
}

function settingsPage() {
  const roleClass = isExpert() ? 'expert' : '';
  return `${title('Cài đặt cá nhân', 'Tùy chỉnh hồ sơ, mục tiêu sức khỏe và gói sử dụng trong bản demo.')}
  <div class="grid2"><section class="panel"><h2>Hồ sơ cá nhân</h2><div class="profile-card"><img class="profile-photo" src="${e(state.profileImage)}" alt="${e(state.name)}"><div><span class="role-badge ${roleClass}">${isExpert() ? '◈ Chuyên gia' : '• Thành viên'}</span><h2 style="margin:12px 0 6px">${e(state.name)}</h2><p class="subtitle" style="margin:0">@${e(state.username || 'Jessica')}</p>${isExpert() ? `<p class="tiny" style="font-size:12px;margin-top:8px">Chuyên môn: ${e(state.specialty || 'Dinh dưỡng')}</p>` : ''}</div></div><p class="subtitle" style="margin-top:18px">Thông tin được lưu cục bộ trên trình duyệt hiện tại.</p><form id="settingsForm"><div class="field"><label>Tên hiển thị</label><input name="name" value="${e(state.name)}" maxlength="60" required></div><div class="field"><label>Ảnh đại diện</label><select name="profileImage"><option value="assets/avatar-jessica.svg" ${state.profileImage==='assets/avatar-jessica.svg'?'selected':''}>Ảnh mặc định xanh lá</option><option value="assets/avatar-taeyeon.svg" ${state.profileImage==='assets/avatar-taeyeon.svg'?'selected':''}>Ảnh mặc định xanh dương</option>${String(state.profileImage||'').startsWith('data:image/')?'<option value="'+e(state.profileImage)+'" selected>Ảnh đã tải lên</option>':''}</select><label for="avatarUpload" class="upload-photo-link">↥ Tải ảnh đại diện từ máy</label><input id="avatarUpload" type="file" accept="image/png,image/jpeg,image/webp" class="visually-hidden"><small>Ảnh được thu nhỏ và lưu cục bộ, không gửi lên máy chủ.</small></div><div class="field"><label>Mục tiêu sức khỏe</label><select name="goal">${['Giảm cân','Giữ cân','Tăng cơ'].map(g => `<option ${g===state.goal?'selected':''}>${g}</option>`).join('')}</select></div><div class="field"><label>Cảnh báo mặc định trước hạn (ngày)</label><input type="number" name="noticeDays" min="0" max="30" value="${state.noticeDays}" required></div><button class="btn" type="submit">Lưu thay đổi</button></form>${isExpert() ? `<div class="panel" style="margin-top:20px;background:#f8fbff"><div class="panel-head"><h2>Tiện ích dành cho chuyên gia</h2></div><div class="expert-actions"><div class="quick-card"><h3>Đăng bài</h3><p>Tạo nội dung mới cho người dùng.</p><button class="btn small" data-action="create-post">Tạo bài</button></div><div class="quick-card"><h3>Quản lý học viên</h3><p>Xem danh sách học viên mẫu.</p><button class="btn secondary small" data-action="manage-learners">Xem học viên</button></div></div></div>`:''}</section>
  <section class="panel"><h2>Gói dịch vụ</h2><div class="callout"><span class="eyebrow">GÓI HIỆN TẠI</span><h2 style="font-size:25px;margin:10px 0">${state.premium ? 'Premium (demo)' : 'Miễn phí'}</h2><p>${state.premium ? 'Không giới hạn số lượng thực phẩm trong bản demo.' : 'Được quản lý tối đa 7 thực phẩm trong Tủ lạnh thông minh.'}</p><button class="btn" data-action="open-plan">Chọn gói đăng ký</button></div><button class="btn danger small" data-action="reset-demo">Khôi phục toàn bộ dữ liệu mẫu</button><div class="data-tools"><h3>Sao lưu dữ liệu thử nghiệm</h3><p class="tiny">Xuất dữ liệu để giữ lại thực đơn, nhật ký, hội thoại, hồ sơ và giao dịch mô phỏng. Tệp có thể chứa thông tin cá nhân bạn đã nhập, nên hãy cất giữ riêng.</p><div class="data-buttons"><button class="btn secondary small" data-action="backup-export">↓ Xuất dữ liệu .json</button><label class="btn secondary small" for="backupImport">↑ Nhập dữ liệu .json</label><input id="backupImport" class="visually-hidden" type="file" accept="application/json,.json"></div></div><div class="logout-row"><button class="btn secondary" data-action="logout">Đăng xuất</button></div></section></div>
  <section class="panel health-panel"><div class="panel-head"><div><span class="eyebrow">HỒ SƠ SỨC KHỎE</span><h2>Thiết lập chỉ số cơ thể</h2><p class="subtitle">Lưu riêng thông tin theo tài khoản đang đăng nhập. Đơn vị: cm, cân nặng: kg.</p></div><span class="role-badge">♧ Thông tin cá nhân</span></div>
    <form id="healthForm"><div class="health-grid">${[['height','Chiều cao','cm',70,240],['weight','Cân nặng','kg',10,350],['chest','Vòng ngực','cm',30,220],['waist','Vòng eo','cm',30,220],['hips','Vòng mông','cm',30,220],['arm','Vòng bắp tay','cm',10,100],['thigh','Vòng đùi','cm',15,130]].map(([key,label,unit,min,max])=>`<div class="field"><label>${label} (${unit})</label><input name="${key}" type="number" step="0.1" min="${min}" max="${max}" value="${e(profileForCurrent()[key]??'')}" placeholder="Nhập ${label.toLowerCase()}"></div>`).join('')}</div>
    <div class="health-bottom"><div class="bmi-mini"><span>BMI tham khảo</span><strong>${bmiFor(profileForCurrent())||'—'}</strong><small>Chỉ là phép tính từ chiều cao và cân nặng, không thay thế tư vấn y tế.</small></div><button class="btn" type="submit">Lưu hồ sơ sức khỏe</button></div></form>
  </section>`;
}

function render() {
  if (!state.session.loggedIn) return updateShell();
  countStatus();
  updatePremiumVisibilityV10();
  const views = { overview, fridge, recipes: recipesV9, shopping: shoppingPage, plans: plansPage, diary: diaryV9, devices: devicesPage, messages: messagesPage, support: supportV11, miu: miuV9, payments: paymentsV9, experts: expertsV11, community: communityV9, settings: settingsV11, workouts: workoutsV9, admin: adminV11, 'admin-experts': adminV11, 'admin-posts': adminV11, 'admin-comments': adminV11, 'admin-courses': adminV11, 'admin-users': adminV11, 'admin-revenue': adminV11, 'admin-recipes': adminV11, 'admin-contracts': adminV11, 'admin-support': adminV11, 'admin-revenue-posting': adminV11, 'admin-revenue-enroll': adminV11, 'admin-revenue-premium': adminV11, 'admin-revenue-total': adminV11 };
  document.getElementById('view').innerHTML = (views[page] || overview)();
  document.getElementById('noticeDot').style.display = isAdmin() ? (adminPendingV11().posts+adminPendingV11().comments+adminPendingV11().experts+adminPendingV11().support+adminPendingV11().contracts+adminPendingV11().newUsers ? 'block' : 'none') : expiring().length ? 'block' : 'none';
  scrubLabelsV10(document.getElementById('view'));
  updateShellV11();
  if (page === 'messages') { const body = document.getElementById('chatBody'); if (body) body.scrollTop = body.scrollHeight; }
}

function showModal(content, className = '') {
  closeModal();
  document.body.classList.add('modal-open');
  const root = document.createElement('div');
  root.className = 'modal-layer';
  root.id = 'modalRoot';
  root.innerHTML = `<div class="modal ${className}" role="dialog" aria-modal="true">${content}</div>`;
  document.body.append(root);
  scrubLabelsV10(root);
  root.addEventListener('click', ev => { if (ev.target === root || ev.target.closest('.modal-close')) closeModal(); });
  root.querySelector('input,button,select,textarea')?.focus();
}
function closeModal() { document.getElementById('modalRoot')?.remove(); document.body.classList.remove('modal-open'); }
function modalHead(title) { return `<div class="modal-top"><div><span class="eyebrow">.theMeal</span><h2>${title}</h2></div><button class="modal-close" type="button" aria-label="Đóng">×</button></div>`; }

function foodForm(id) {
  const f = state.foods.find(x => x.id === id) || { name: '', group: 'Rau củ', qty: 100, unit: 'g', made: '', expiry: offset(5), warn: state.noticeDays };
  showModal(`${modalHead(id ? 'Chỉnh sửa thực phẩm' : 'Thêm thực phẩm mới')}<form id="foodForm"><input type="hidden" name="id" value="${e(id || '')}"><div class="form-grid"><div class="field"><label>Tên thực phẩm *</label><input name="name" placeholder="Ví dụ: Ức gà" maxlength="70" required value="${e(f.name)}"></div><div class="field"><label>Nhóm thực phẩm</label><select name="group">${groups.map(g => `<option ${g === f.group ? 'selected' : ''}>${g}</option>`).join('')}</select></div><div class="field"><label>Số lượng *</label><input name="qty" type="number" min="1" max="999999" value="${f.qty}" required></div><div class="field"><label>Đơn vị</label><select name="unit">${['g','kg','ml','l','quả','hộp','gói','cái'].map(u => `<option ${u === f.unit ? 'selected' : ''}>${u}</option>`).join('')}</select></div><div class="field"><label>Ngày sản xuất (tùy chọn)</label><input name="made" type="date" value="${e(f.made)}"></div><div class="field"><label>Hạn sử dụng *</label><input name="expiry" type="date" value="${e(f.expiry)}" required></div><div class="field"><label>Cảnh báo trước hạn (ngày)</label><input name="warn" type="number" min="0" max="30" value="${f.warn}" required></div></div><div class="form-actions"><button type="button" class="btn secondary modal-close">Hủy</button><button class="btn" type="submit">${id ? 'Lưu chỉnh sửa' : 'Thêm vào tủ lạnh'}</button></div></form>`);
}
function recipeDetail(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;
  showModal(`${modalHead(r.emoji + ' ' + r.name)}<p class="subtitle">${r.kcal} kcal · ${r.protein}g protein · ${r.carb}g carb · ${r.fat}g fat · ${r.mins} phút</p><h3>Nguyên liệu (1 khẩu phần)</h3>${r.ingredients.map(([n, q, u]) => `<div class="shopping-line"><span class="name">${e(n)}</span><b>${q} ${u}</b><span class="status ${inventory(n, u) >= q ? '' : 'warn'}">${inventory(n, u) >= q ? 'Đã đủ' : 'Còn thiếu'}</span></div>`).join('')}<h3 style="margin-top:20px">Cách làm</h3><div class="steps">${r.steps.map((s, i) => `<div class="step"><span>${i + 1}</span><p>${e(s)}</p></div>`).join('')}</div><div class="notice" style="margin-top:16px">Thành phần và dinh dưỡng chỉ dùng để minh họa công thức. Kiểm tra nguyên liệu và an toàn thực phẩm khi chế biến.</div><div class="form-actions"><button class="btn secondary modal-close">Đóng</button><button class="btn" data-action="toggle-recipe" data-id="${r.id}">${state.chosen.includes(r.id) ? 'Bỏ khỏi kế hoạch' : '+ Chọn món này'}</button></div>`);
}
function useFood(id) {
  const f = state.foods.find(x => x.id === id);
  if (!f) return;
  showModal(`${modalHead('Sử dụng thực phẩm')}<p>Đang có <b>${e(f.name)}: ${f.qty} ${e(f.unit)}</b>.</p><div class="notice info">💡 ${e(care(f))}</div><form id="useFoodForm"><input type="hidden" name="id" value="${e(id)}"><div class="field"><label>Số lượng đã sử dụng (${e(f.unit)})</label><input name="qty" type="number" min="1" max="${f.qty}" step="any" value="${Math.min(f.qty, f.unit==='kg'||f.unit==='l'?0.1:100)}" required></div><div class="form-actions"><button class="btn secondary modal-close" type="button">Hủy</button><button class="btn" type="submit">Cập nhật số lượng</button></div></form>`);
}
function shoppingForm() {
  showModal(`${modalHead('Thêm mặt hàng cần mua')}<form id="shoppingForm"><div class="field"><label>Tên nguyên liệu</label><input name="name" required maxlength="70"></div><div class="form-grid"><div class="field"><label>Số lượng</label><input name="qty" type="number" min="1" value="100" required></div><div class="field"><label>Đơn vị</label><select name="unit">${['g','kg','ml','l','quả','hộp','gói','cái'].map(x => `<option>${x}</option>`).join('')}</select></div></div><div class="form-actions"><button type="button" class="btn secondary modal-close">Hủy</button><button class="btn">Thêm vào danh sách</button></div></form>`);
}
function applyForm() {
  showModal(`${modalHead('Đăng ký tài khoản chuyên gia')}<div class="notice">Sau khi gửi hồ sơ, prototype sẽ kích hoạt ngay vai trò chuyên gia cho tài khoản hiện tại để bạn trải nghiệm giao diện chuyên gia.</div><form id="expertForm"><div class="field"><label>Họ tên chuyên gia</label><input name="name" required maxlength="80" value="${e(state.name)}"></div><div class="field"><label>Chuyên môn</label><select name="field"><option>Dinh dưỡng</option><option>Huấn luyện thể chất</option><option>Chăm sóc sức khỏe cá nhân</option></select></div><div class="field"><label>Thông tin chứng chỉ và kinh nghiệm</label><textarea rows="3" name="cred" required maxlength="700" placeholder="Nêu chứng chỉ, đơn vị cấp, kinh nghiệm..."></textarea></div><label class="checkrow"><input type="checkbox" required> Tôi hiểu đây là đăng ký mô phỏng và hồ sơ được kích hoạt ngay trong demo.</label><div class="form-actions"><button class="btn" type="submit">Gửi hồ sơ</button></div></form>`);
}
function courseForm(id='') {
  if (!isExpert()) return toast('Chỉ tài khoản chuyên gia mới quản lý khóa học.');
  const c=state.courses.find(x=>x.id===id) || {id:'',title:'',desc:'',price:299000};
  showModal(`${modalHead(id?'Chỉnh sửa khóa học':'Tạo khóa học mẫu')}<form id="courseForm"><input type="hidden" name="id" value="${e(c.id)}"><div class="field"><label>Tên khóa học</label><input name="title" maxlength="90" value="${e(c.title)}" required></div><div class="field"><label>Mô tả</label><textarea name="desc" maxlength="500" rows="3" required>${e(c.desc)}</textarea></div><div class="field"><label>Học phí minh họa (VNĐ)</label><input name="price" type="number" min="0" max="100000000" value="${Number(c.price)}" required></div><div class="form-actions"><button class="btn secondary modal-close" type="button">Hủy</button><button class="btn">${id?'Lưu chỉnh sửa':'Tạo khóa học mẫu'}</button></div></form>`);
}
function postForm(id='') {
  if (!isExpert()) return toast('Chỉ tài khoản chuyên gia mới quản lý bài viết.');
  const post=state.posts.find(x=>x.id===id) || {id:'',title:'',summary:''};
  showModal(`${modalHead(id?'Chỉnh sửa bài viết':'Đăng bài viết mới')}<form id="postForm"><input type="hidden" name="id" value="${e(post.id)}"><div class="field"><label>Tiêu đề bài viết</label><input name="title" maxlength="120" value="${e(post.title)}" required></div><div class="field"><label>Nội dung bài viết</label><textarea name="summary" maxlength="1200" rows="5" required placeholder="Chia sẻ kiến thức, lưu ý dinh dưỡng, thực đơn...">${e(post.summary)}</textarea></div><div class="form-actions"><button type="button" class="btn secondary modal-close">Hủy</button><button class="btn">${id?'Lưu chỉnh sửa':'Đăng bài'}</button></div></form>`);
}
function communityForm() {
  showModal(`${modalHead('Đóng góp công thức')}<form id="communityForm"><div class="field"><label>Tên món ăn</label><input name="name" maxlength="90" required></div><div class="field"><label>Nguyên liệu và cách chế biến</label><textarea name="desc" maxlength="1200" rows="5" required></textarea></div><div class="notice">Công thức được lưu ở trạng thái chờ kiểm duyệt; chưa xuất bản công khai.</div><div class="form-actions"><button class="btn">Gửi đóng góp</button></div></form>`);
}
function enroll(id) {
  const c = [...defaultCourses, ...state.courses].find(x => x.id === id);
  if (!c) return;
  showModal(`${modalHead('Đăng ký khóa học')}<h3>${e(c.title)}</h3><p>Học phí dự kiến: <b class="price">${money(c.price)}</b></p><div class="notice">Bản prototype chưa kết nối cổng thanh toán và chưa hỗ trợ chữ ký số hợp lệ. Không nhập thông tin thẻ hoặc chuyển tiền.</div><div class="callout">Trước khi đăng ký thực tế, học viên cần xem các điều khoản khóa học, trách nhiệm của chuyên gia, nền tảng và học viên; hoàn thành ký hợp đồng điện tử phù hợp.</div><div class="form-actions"><button class="btn secondary modal-close">Đóng</button><button class="btn" data-action="pay-course" data-id="${e(c.id)}">Thanh toán thử →</button></div>`);
}
function planModal() {
  showModal(`${modalHead('Chọn gói đăng ký')}<div class="plan-grid"><div class="plan-card ${!state.premium ? 'active' : ''}"><span class="role-badge">Free</span><h3>Gói miễn phí</h3><div class="plan-price">0đ</div><div class="plan-list"><span>✓ Quản lý tối đa 7 thực phẩm</span><span>✓ Dùng tủ lạnh thông minh, thực đơn, mua sắm</span><span>✓ Phù hợp cho tài khoản trải nghiệm cơ bản</span></div><button class="btn secondary" data-action="choose-plan" data-id="free">Chọn Free</button></div><div class="plan-card ${state.premium ? 'active' : ''}"><span class="role-badge expert">Premium</span><h3>Gói Premium</h3><div class="plan-price">99.000đ/tháng</div><div class="plan-list"><span>✓ Không giới hạn số lượng thực phẩm</span><span>✓ Ưu tiên quản lý nguyên liệu và kế hoạch nâng cao</span><span>✓ Dùng trong prototype dưới dạng mô phỏng</span></div><button class="btn" data-action="choose-plan" data-id="premium">Chọn Premium</button></div></div><div class="notice info" style="margin-top:18px">Màn hình này chỉ mô phỏng lựa chọn gói, không phát sinh thanh toán thật.</div>`, 'plan-modal');
}
function managePostsModal() {
  showModal(`${modalHead('Quản lý bài viết')}${myExpertPosts().length ? myExpertPosts().map(p => `<div class="expert-item"><div class="row"><div><h3>${e(p.title)}</h3><span class="tiny">${date(p.date)}</span></div><div class="actions"><button class="mini-btn" data-action="edit-post" data-id="${e(p.id)}">Sửa</button><button class="mini-btn" data-action="remove-post" data-id="${e(p.id)}">Xóa</button></div></div><p>${e(p.summary)}</p></div>`).join('') : '<p>Chưa có bài viết nào.</p>'}<div class="form-actions"><button class="btn secondary modal-close">Đóng</button><button class="btn" data-action="create-post">Đăng bài mới</button></div>`);
}
function manageLearnersModal() {
  if(!isExpert()) return;
  const buyers=Array.from(new Set(state.transactions.filter(tx=>tx.kind==='course'&&tx.seller===state.username).map(tx=>tx.buyer)));
  const learners = [
    { name: 'Jessica', goal: state.accountData?.Jessica?.goal || 'Giữ cân', progress: buyers.includes('Jessica') ? 'Đã mua khóa học (demo)' : 'Học viên mẫu · Chưa có giao dịch mới' },
    { name: 'Ngọc Anh', goal: 'Giảm cân', progress: 'Học viên minh họa' },
    { name: 'Minh Khoa', goal: 'Tăng cơ', progress: 'Học viên minh họa' },
    { name: 'Khánh Linh', goal: 'Giữ cân', progress: 'Học viên minh họa' }
  ];
  for (const buyer of buyers) if(!learners.some(l=>l.name===buyer)) learners.unshift({name:buyer,goal:'Chưa khai báo',progress:'Đã mua khóa học (demo)'});
  showModal(`${modalHead('Quản lý học viên')}<div class="notice info">Danh sách minh họa. Trạng thái mua thử được cập nhật từ lịch sử thanh toán trên trình duyệt này.</div>${learners.map(x=>`<div class="shopping-line"><span class="emoji">👤</span><span class="name"><b>${e(x.name)}</b><br><small class="muted">Mục tiêu: ${e(x.goal)}</small></span><span class="status">${e(x.progress)}</span></div>`).join('')}<div class="form-actions"><button class="btn secondary modal-close">Đóng</button><button class="btn" data-page="messages">Trò chuyện với học viên</button></div>`);
}
function generateShopping() {
  if (!state.chosen.length) { toast('Hãy chọn ít nhất một món ăn trước.'); return; }
  const arr = required();
  const manual=state.shopping.filter(x=>x.source==='manual');
  const before=new Map(state.shopping.map(x=>[normalizeViV9(x.name)+'|'+x.unit,x]));
  state.shopping = [...arr.map(x => ({ id: before.get(normalizeViV9(x.name)+'|'+x.unit)?.id || uid(), ...x, source:'recipe', done: before.get(normalizeViV9(x.name)+'|'+x.unit)?.done || false })),...manual];
  save(); render();
  toast(arr.length ? `Đã tổng hợp ${arr.length} nguyên liệu còn thiếu.` : 'Nguyên liệu hiện có đã đủ cho các món đã chọn.');
}
function stockShopping() {
  const items = state.shopping.filter(x => x.done);
  if (!items.length) { toast('Hãy đánh dấu mặt hàng đã mua trước.'); return; }
  if (!state.premium && activeFoods().length + items.length > 7) { toast(`Gói miễn phí tối đa 7 mục. Hiện có ${activeFoods().length}; hãy cập nhật/xóa mục cũ hoặc chọn Premium.`); return; }
  const fields = items.map((x, i) => `<div class="stock-batch"><div class="row"><strong>${e(x.name)}</strong><span class="chip">${e(x.qty)} ${e(x.unit)}</span></div><div class="form-grid" style="margin-top:10px"><div class="field"><label for="stockDate${i}">Hạn sử dụng thực tế *</label><input id="stockDate${i}" type="date" name="expiry${i}" min="${offset(0)}" required></div><div class="field"><label for="stockMade${i}">Ngày sản xuất (nếu biết)</label><input id="stockMade${i}" type="date" name="made${i}"></div></div></div>`).join('');
  showModal(`${modalHead('Xác nhận thực phẩm vừa mua')}<div class="notice">Nhập hạn sử dụng ghi trên bao bì cho từng mặt hàng. Không tự suy đoán hạn dùng để tránh mất an toàn thực phẩm.</div><form id="stockConfirmForm">${fields}<div class="form-actions"><button type="button" class="btn secondary modal-close">Hủy</button><button type="submit" class="btn">Xác nhận nhập tủ lạnh</button></div></form>`);
}
function confirmStockShopping(data) {
  const items = state.shopping.filter(x => x.done);
  if (!items.length) return;
  if (!state.premium && activeFoods().length + items.length > 7) { toast('Không đủ số ô trống trong gói miễn phí.'); return; }
  const lots = items.map((x, i) => ({ id: uid(), name: x.name, group: x.group, qty: Number(x.qty), unit: x.unit, made: data['made' + i] || '', expiry: data['expiry' + i], warn: state.noticeDays }));
  if (lots.some(x => !x.expiry || x.expiry < offset(0) || (x.made && x.made > x.expiry) || !Number.isFinite(x.qty) || x.qty <= 0)) { toast('Hãy kiểm tra hạn sử dụng, ngày sản xuất và số lượng từng mặt hàng.'); return; }
  state.foods.push(...lots);
  const purchasedIds = new Set(items.map(x => x.id));
  state.shopping = state.shopping.filter(x => !purchasedIds.has(x.id));
  syncShoppingV9();save(); closeModal(); render(); toast(`Đã nhập ${lots.length} mặt hàng với hạn dùng bạn xác nhận.`);
}
function choosePlan(type) {
  if (type === 'free' && activeFoods().length > 7) { toast('Hãy giảm tồn kho xuống tối đa 7 sản phẩm trước khi về gói Free.'); return; }
  const wasPremium = state.premium;
  state.premium = type === 'premium';
  if (state.premium && !wasPremium) state.transactions.unshift({id:'TX-'+Date.now().toString(36).toUpperCase(),buyer:state.username,seller:'.theMeal',kind:'premium',title:'Gói Premium · 1 tháng (demo)',amount:109000,date:new Date().toISOString(),sample:false});
  save(); closeModal(); render(); toast(`Đã chọn gói ${state.premium ? 'Premium' : 'Free'} trong chế độ demo.`);
}

function clickAction(action, id, el) {
  switch (action) {
    case 'add-food': return foodForm();
    case 'edit-food': return foodForm(id);
    case 'use-food': return useFood(id);
    case 'remove-food':
      if (confirm('Xóa thực phẩm này khỏi tủ lạnh?')) { state.foods = state.foods.filter(x => x.id !== id); syncShoppingV9(); save(); render(); toast('Đã xóa thực phẩm.'); }
      return;
    case 'detail-recipe': return recipeDetail(id);
    case 'toggle-recipe':
      state.chosen = state.chosen.includes(id) ? state.chosen.filter(x => x !== id) : [...state.chosen, id];
      syncShoppingV9(); save(); closeModal(); render(); return toast('Đã cập nhật thực đơn và nguyên liệu cần mua.');
    case 'generate-shopping': return generateShopping();
    case 'view-shopping': return nav('shopping');
    case 'recipe-more': recipeLimitV9+=12;return render();
    case 'add-shopping': return shoppingForm();
    case 'check-shopping': {
      const x = state.shopping.find(x => x.id === id); if (x) x.done = el.checked; save(); return render();
    }
    case 'remove-shopping': state.shopping = state.shopping.filter(x => x.id !== id); save(); return render();
    case 'stock-shopping': return stockShopping();
    case 'reset-fridge-filter': fridgeQuery = ''; fridgeFilter = 'Tất cả'; return render();
    case 'expert-tab': courseTab = el.dataset.tab; return render();
    case 'expert-apply': return applyForm();
    case 'create-course': return courseForm();
    case 'edit-course': return courseForm(id);
    case 'remove-course': {
      if (!isExpert()) return;
      const owned=myCourses().find(c=>c.id===id);
      if(owned && confirm(`Xóa khóa học "${owned.title}" khỏi bản demo?`)){state.courses=state.courses.filter(c=>c.id!==id);save();render();toast('Đã xóa khóa học.');}
      return;
    }
    case 'create-post': return postFormV9();
    case 'edit-post': return postFormV9(id);
    case 'manage-posts': return managePostsModal();
    case 'manage-learners': return manageLearnersModal();
    case 'enroll': return enroll(id);
    case 'demo-enroll': closeModal(); return toast('Đây là bản demo; chưa thực hiện đăng ký hoặc thanh toán.');
    case 'plan-suggest': {
      const form=document.getElementById('dailyPlanForm');
      if (form && !storePlanData(Object.fromEntries(new FormData(form)))) return;
      pendingPlanSlot = id;
      nav('recipes');
      toast('Hãy chọn món phù hợp cho bữa ăn trong kế hoạch.');
      return;
    }
    case 'plan-use-recipe': {
      const r=recipes.find(x=>x.id===id);
      if (!r || !pendingPlanSlot) return;
      const p=planFor();
      personalCollection('dailyPlans')[selectedDate]={...p,[pendingPlanSlot]:r.name};
      pendingPlanSlot=null; save(); nav('plans'); toast('Đã thêm món vào kế hoạch của ngày đã chọn.');return;
    }
    case 'day-select':return selectDay(id);
    case 'calendar-today':return selectDay(localDayKey());
    case 'change-month':return monthShift(Number(id)||0);
    case 'activity-remove': {
      const d=diaryFor();
      personalCollection('dailyDiary')[selectedDate]={...d,activities:(d.activities||[]).filter(a=>a.id!==id)};
      save();render();toast('Đã xóa hoạt động.');return;
    }
    case 'device-demo':return demoDevice(id);
    case 'bluetooth-connect':return tryBluetoothConnect();
    case 'bluetooth-disconnect':return removeDevice(id,true);
    case 'device-remove':return removeDevice(id,false);
    case 'device-help':return showModal(`${modalHead('Hướng dẫn kết nối thiết bị')}<div class="steps"><div class="step"><span>1</span><div><strong>Bật Bluetooth</strong><p>Bật Bluetooth trên điện thoại/máy tính và đặt đồng hồ, cân hoặc vòng tay ở chế độ cho phép ghép nối.</p></div></div><div class="step"><span>2</span><div><strong>Mở qua Chrome hỗ trợ Web Bluetooth</strong><p>Trang web cần HTTPS. Nhấn “Tìm thiết bị Bluetooth” và chọn thiết bị BLE khi trình duyệt hỏi quyền.</p></div></div><div class="step"><span>3</span><div><strong>Xác nhận trạng thái</strong><p>Chỉ khi kết nối GATT thành công mới hiện “Đang kết nối BLE”. Thiết bị có thể cần ứng dụng hoặc giao thức hãng riêng để đọc số đo.</p></div></div></div><div class="form-actions"><button class="btn modal-close">Đã hiểu</button></div>`);
    case 'community-post': return communityForm();
    case 'storage-accept': return saveFoodV9();
    case 'storage-suggested':return saveSuggestedFoodV10();
    case 'send-otp':return sendOtpV10();
    case 'select-chat-buyer':activeChatBuyerV10=id;return nav('messages');
    case 'expert-recommendations':courseTab='recommended';return nav('experts');
    case 'storage-decline': return storageWarningV9();
    case 'storage-continue': return saveFoodV9();
    case 'storage-return': return storageChoiceV9();
    case 'expert-reply': return expertReplyV9(id);
    case 'admin-parent': return nav('admin');
    case 'admin-collapse': document.body.classList.toggle('admin-submenu-collapsed');return nav('admin');
    case 'admin-tab': adminTab = id; return nav(id==='overview'?'admin':id==='users'?'admin-users':id==='revenue'?'admin-revenue':'admin-'+id);
    case 'admin-review': return reviewEntity(id, el?.dataset?.decision);
    case 'post-comment': return nav('community');
    case 'workout-done': return toggleWorkout(id);
    case 'workout-remove': return removeWorkout(id);
    case 'auth-begin': return setAuthStage('register');
    case 'register-open': return setAuthStage('register');
    case 'register-back': return setAuthStage('login');
    case 'link-bank': return bankLinkForm();
    case 'unlink-bank': state.bankLink = null; save(); render(); toast('Đã ngắt ngân hàng mẫu.'); return;
    case 'quick-chat': closeModal(); return nav('messages');
    case 'pay-course': return paymentConfirm(id);
    case 'confirm-payment': return confirmPayment(id);
    case 'open-plan': return planModal();
    case 'choose-plan': return choosePlan(id);
    case 'remove-post':
      if(!isExpert()||!myExpertPosts().some(p=>p.id===id)) return;
      if(!confirm('Xóa bài viết này?')) return;
      state.posts = state.posts.filter(x => x.id !== id); save(); closeModal(); render(); return toast('Đã xóa bài viết.');
    case 'reset-demo':
      if (confirm('Khôi phục trạng thái ban đầu? Tất cả nội dung đã nhập trên trình duyệt này sẽ bị mất.')) {
        const loggedIn = state.session.loggedIn;
        const role = state.session.role;
        const username = state.username;
        state = deep(seed);
        state.username = username || 'Jessica';
        state.accountData = {};
        state.session.loggedIn = loggedIn;
        state.session.role = role;
        if (username && DEMO_USERS[username]) {
          const user = DEMO_USERS[username];
          state.name = user.displayName;
          state.profileImage = user.avatar;
          state.specialty = user.specialty || '';
          if (user.role === 'expert') state.posts = deep(defaultExpertPosts);
          state.expertActivated = role === 'expert' && user.role !== 'expert';
        }
        save();
        nav('overview');
        toast('Đã khôi phục dữ liệu mẫu.');
      }
      return;
    case 'backup-export': return exportDemoData();
    case 'logout': logout(); return;
  }
}

/* =========================================================
   .theMeal · V8: onboarding, content moderation, courses,
   demo finance, exercise plans. Client-side demonstration.
   No actual authentication, OAuth, bank API, e-contract or server.
   ========================================================= */
let adminTab = 'overview';
let registrationStage = 'login';
let pendingNewUser = '';
function initializeV8() {
  // Require a fresh login on every page load; retain user data separately.
  state.session.loggedIn = false;
  state.registeredUsers ||= {};
  state.exercisePlans ||= {};
  state.miuUsage ||= {};
  state.expertRequests ||= [];
  state.community ||= [];
  state.posts ||= [];
  state.courses ||= [];
  for (const [username, account] of Object.entries(state.registeredUsers)) {
    DEMO_USERS[username] = {username, displayName:account.fullName, role:'user', avatar:'assets/avatar-jessica.svg', password:null};
  }
  // Preserve older applicant submissions without silently approving them.
  for (const req of state.expertRequests) if (!req.status) req.status='pending';
  if (state.session?.role === 'admin' && state.username !== 'Tiffany') state.session.role='user';
  toggleRegisterMethod();
}
function setAuthStage(stage) {
  registrationStage = stage;
  const auth = document.getElementById('authScreen');
  for(const [id, key] of [['loginForm','login'],['registerForm','register'],['onboardingForm','onboarding']]) {
    const el = document.getElementById(id); if(el) el.hidden = key!==stage;
  }
  auth.classList.toggle('auth-extended', stage !== 'login');
}
function toggleRegisterMethod() {
  const method=document.getElementById('registerMethod')?.value || 'email';
  const label=document.getElementById('registerContactLabel');
  const input=document.getElementById('registerContact');
  if(!label||!input)return;
  label.textContent=method==='phone'?'Số điện thoại':method==='google'?'Email Google (demo)':'Email';
  input.type=method==='phone'?'tel':'email';
  input.inputMode=method==='phone'?'tel':'email';
  input.placeholder=method==='phone'?'09xx xxx xxx':'ten@example.com';
}
async function sha256(text) {
  if(!globalThis.crypto?.subtle) { let h=2166136261;for(const c of text){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return 'local-demo-'+(h>>>0).toString(16); } // Offline-only demo fallback, not secure authentication.
  const buffer=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text));
  return [...new Uint8Array(buffer)].map(x=>x.toString(16).padStart(2,'0')).join('');
}
async function handleLogin(data) {
 if((state.deletedAccountsV12||[]).includes(String(data.username||'').trim())) {document.getElementById('loginError').textContent='Tài khoản đã bị xóa khỏi hệ thống.';return;} 
  const id=String(data.username||'').trim();
  const raw=String(data.password||'');
  const error=document.getElementById('loginError');
  const predefined=DEMO_USERS[id];
  const custom=state.registeredUsers?.[id];
  let valid=Boolean(predefined?.password && raw===predefined.password);
  if(custom) valid=await sha256(raw)===custom.pwdHash;
  if(!valid){error.textContent='Tài khoản hoặc mật khẩu không chính xác.';return;}
  error.textContent='';
  if(custom && !custom.onboarded) {pendingNewUser=id;setAuthStage('onboarding');return;}
  setAuthStage('login');applyLogin(predefined);
}
async function handleRegister(data) {
  const method=data.method;
  const contact=String(data.contact||'').trim().toLowerCase();
  const fullName=String(data.fullName||'').trim() || 'Thành viên mới';
  const dob=String(data.dob||'');
  const password=String(data.password||'') || '1234';
  const error=document.getElementById('registerError');
  if((dob && new Date(dob)>new Date()) || password.length<4) {error.textContent='Vui lòng kiểm tra ngày sinh hoặc mật khẩu.';return;}
  if(contact && method==='phone' && !/^0[0-9]{9}$/.test(contact.replace(/\s/g,''))) {error.textContent='Số điện thoại mẫu cần 10 chữ số, bắt đầu bằng 0.';return;}
  if(contact && method!=='phone' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {error.textContent='Địa chỉ email chưa hợp lệ.';return;}
  const username=contact ? (method==='phone'?contact.replace(/\s/g,''):contact) : 'khach'+Date.now().toString(36); 
  if(DEMO_USERS[username] || state.registeredUsers[username]) {error.textContent='Tài khoản này đã tồn tại trong bản demo.';return;}
  const user={username,fullName,dob,method,contact, pwdHash:await sha256(password),onboarded:false,createdAt:new Date().toISOString()};
  state.registeredUsers[username]=user;
  DEMO_USERS[username]={username,displayName:fullName,role:'user',avatar:'assets/avatar-jessica.svg',password:null};
  pendingNewUser=username;
  error.textContent='';
  save();setAuthStage('onboarding');const receipt=document.getElementById('newAccountCredentials');if(receipt)receipt.textContent='Tài khoản đã tạo: '+username+'. Bạn có thể bổ sung thông tin sức khỏe hoặc hoàn tất ngay.';toast('Đã tạo tài khoản, hãy tiếp tục hoặc bỏ qua số đo.');
}
function handleOnboard(data) {
  const username=pendingNewUser;
  const user=state.registeredUsers?.[username];
  const h=Number(data.height),w=Number(data.weight);
  if(!user || (data.height && !(h>=70&&h<=240)) || (data.weight && !(w>=10&&w<=350)) || (data.targetDate && data.targetDate<localDayKey())) return toast('Vui lòng kiểm tra số đo và thời hạn mục tiêu.');
  user.onboarded=true;
  user.target=String(data.target||'').trim().slice(0,110);
  user.targetDate=data.targetDate;
  state.healthProfiles[username]={height:data.height?h:null,weight:data.weight?w:null};
  state.accountData[username]={...freshAccount(username),foods:[],chosen:[],shopping:[],name:user.fullName, dob:user.dob, goal:data.goal};
  save();setAuthStage('login');pendingNewUser='';
  applyLogin(DEMO_USERS[username]);
  toast('Đăng ký thành công! Chào mừng bạn đến với .theMeal.');
}

function workoutsFor() {
  state.exercisePlans ||= {};
  state.exercisePlans[state.username] ||= {};
  state.exercisePlans[state.username][selectedDate] ||= [];
  return state.exercisePlans[state.username][selectedDate];
}
const basicExercises=[
  {id:'walk',name:'Đi bộ nhanh',detail:'Khởi động 5 phút, đi bộ nhanh 15–30 phút, thả lỏng 5 phút.',icon:'🚶',duration:25,level:'Dễ'},
  {id:'squat',name:'Squat cơ bản',detail:'3 hiệp × 10–12 lần, giữ lưng tự nhiên, nghỉ giữa hiệp.',icon:'🏋️',duration:15,level:'Dễ'},
  {id:'stretch',name:'Giãn cơ toàn thân',detail:'Giãn cơ tay, vai, chân và lưng nhẹ nhàng, không ép quá sức.',icon:'🧘',duration:15,level:'Dễ'},
  {id:'plank',name:'Plank',detail:'3 hiệp × 20–40 giây, nghỉ 30 giây giữa các hiệp.',icon:'💪',duration:10,level:'Vừa'},
  {id:'cycle',name:'Đạp xe',detail:'Đạp xe ở cường độ vừa phải và duy trì nhịp thở ổn định.',icon:'🚴',duration:30,level:'Vừa'},
  {id:'yoga',name:'Yoga thư giãn',detail:'Kết hợp nhịp thở, kéo giãn và các tư thế cơ bản.',icon:'🌱',duration:20,level:'Dễ'}
];
function workoutsPage() {
  const exercises=workoutsFor(), completed=exercises.filter(x=>x.done).length;
  return `${title('Rèn luyện sức khỏe','Lập kế hoạch luyện tập theo ngày và theo dõi tiến độ cá nhân.')}
    <div class="date-ribbon"><div><span class="eyebrow">LỊCH VẬN ĐỘNG</span><h2>${vnDay(selectedDate)}</h2></div><label class="date-inline">Chọn ngày<input id="dailyDatePicker" type="date" value="${selectedDate}"></label></div>
    <div class="stats">${stat('Bài đã chọn',exercises.length,'Bài trong kế hoạch ngày','♧')}${stat('Đã hoàn thành',completed,'Đánh dấu sau khi tập','✓')}${stat('Thời lượng',exercises.reduce((n,x)=>n+x.duration,0)+' phút','Tổng thời gian dự kiến','◷')}${stat('Tiến độ',exercises.length?Math.round(completed*100/exercises.length)+'%':'0%','Theo kế hoạch trong ngày','↗')}${stat('Calories tiêu hao',workoutEnergySummaryV12().total+' kcal','Ước tính theo bài đã tập','🔥')}</div>
    <div class="workout-builder-v12"><section class="panel"><h2>Thêm bài tập vào kế hoạch</h2><form id="workoutForm"><div class="field"><label>Bài tập</label><select name="exercise">${basicExercises.map(x=>`<option value="${x.id}">${x.icon} ${x.name}</option>`).join('')}</select></div><div class="field"><label>Thời lượng (phút)</label><input type="number" name="duration" min="5" max="240" value="20" required></div><div class="field"><label>Ghi chú cá nhân</label><textarea name="note" rows="2" maxlength="150" placeholder="Ví dụ: sau giờ học, tập cường độ vừa..."></textarea></div><button class="btn" type="submit">+ Thêm bài tập</button></form><div class="notice info" style="margin-top:16px">Bài tập đã thêm sẽ xuất hiện trong Kế hoạch của tôi theo ngày tương ứng.</div></section></div>
    <div class="section-title"><h2>Thư viện bài tập cơ bản</h2></div><div class="card-grid">${basicExercises.map(x=>`<article class="panel"><div class="workout-icon">${x.icon}</div><h2>${x.name}</h2><p class="muted">${x.detail}</p><span class="status">${x.level} · ${x.duration} phút</span></article>`).join('')}</div><div class="notice info" style="margin-top:20px">Các bài tập chỉ mang tính minh họa; tự điều chỉnh theo thể trạng và tư vấn chuyên môn.</div>`;
}
function saveWorkout(d){
 const x=basicExercises.find(v=>v.id===d.exercise),duration=Number(d.duration);
 if(!x||duration<5||duration>240)return toast('Thời lượng cần từ 5 đến 240 phút.');
 workoutsFor().push({id:uid(),name:x.name,icon:x.icon,duration,note:String(d.note||'').trim(),done:false});
 save();render();toast('Đã thêm vào kế hoạch tập luyện.');
}
function toggleWorkout(id){const x=workoutsFor().find(a=>a.id===id);if(x){x.done=!x.done;save();render();}}
function removeWorkout(id){const plans=workoutsFor();const i=plans.findIndex(x=>x.id===id);if(i>=0){plans.splice(i,1);save();render();}}

function bankLinkForm() {
 showModal(`${modalHead('Liên kết ngân hàng (mô phỏng)')}<div class="notice info">Không nhập thông tin ngân hàng thật. Chỉ lưu tên ngân hàng và 4 số cuối để trình diễn giao diện, không xác thực tài khoản.</div><form id="bankForm"><div class="field"><label>Ngân hàng mẫu</label><select name="bank"><option>Vietcombank</option><option>MB Bank</option><option>Techcombank</option><option>BIDV</option><option>ACB</option></select></div><div class="field"><label>4 số cuối tài khoản giả định</label><input name="last4" maxlength="4" inputmode="numeric" pattern="[0-9]{4}" placeholder="1234" required></div><div class="form-actions"><button class="btn" type="submit">Liên kết ngân hàng mẫu</button></div></form>`);
}
function saveBank(d) {
 if(!/^[0-9]{4}$/.test(String(d.last4||'')))return toast('Chỉ nhập bốn chữ số giả định.');
 state.bankLink={bank:d.bank,last4:d.last4};save();closeModal();render();toast('Đã liên kết ngân hàng mẫu.');
}
function bankInfo(){return state.bankLink?e(state.bankLink.bank)+' •••• '+e(state.bankLink.last4):'Chưa liên kết';}
function approvedCourses(){return [...defaultCourses,...state.courses.filter(c=>!c.status||c.status==='approved')];}
function paymentsPage() {
 const role=isExpert()?'seller':'buyer',records=paidRecords(role),total=records.reduce((sum,x)=>sum+Number(x.amount||0),0);
 const owned=new Set((state.transactions||[]).filter(x=>x.buyer===state.username&&x.kind==='course').map(x=>x.courseId).filter(Boolean));
 return `${title('Thanh toán & lịch sử',isExpert()?'Quản lý lịch sử bán khóa học mô phỏng.':'Đăng ký khóa học mẫu và theo dõi lịch sử mua.')}
 <div class="stats">${stat(isExpert()?'Giao dịch bán':'Giao dịch mua',records.length,'Tổng số giao dịch mẫu','▤')}${stat(isExpert()?'Doanh thu mẫu':'Tổng chi mẫu',money(total),'Không phát sinh tiền thật','₫')}${stat('Ngân hàng liên kết',state.bankLink?'Đã liên kết':'Chưa có','Chỉ hiển thị ngân hàng mẫu','▣')}${stat('Vai trò',isExpert()?'Người bán':'Người mua','Theo tài khoản đã đăng nhập','◈')}</div>
 <section class="panel"><div class="panel-head"><div><h2>Ngân hàng liên kết</h2><p class="subtitle" style="margin:3px 0">${bankInfo()} · Trạng thái mô phỏng</p></div><div class="row"><button class="btn secondary small" data-action="link-bank">${state.bankLink?'Đổi ngân hàng':'Liên kết ngân hàng'}</button>${state.bankLink?'<button class="btn secondary small" data-action="unlink-bank">Ngắt liên kết</button>':''}</div></div><div class="notice info">Chưa hỗ trợ Open Banking hoặc giao dịch thật. Không nhập số tài khoản thực tế.</div></section>
 ${!isExpert()?`<section class="panel"><div class="panel-head"><h2>Khóa học có thể đăng ký</h2><span class="status">Thanh toán mô phỏng</span></div><div class="payment-products">${approvedCourses().map(c=>`<article class="payment-product"><div class="payment-product-icon">📘</div><div><h3>${e(c.title)}</h3><p>Chuyên gia ${e(c.owner==='Chuyên gia dinh dưỡng (mẫu)'||c.owner==='Chuyên gia huấn luyện (mẫu)'?'Taeyeon':(c.owner||'Taeyeon'))} · ${money(c.price)}</p></div><button class="btn small" data-action="pay-course" data-id="${e(c.id)}" ${owned.has(c.id)?'disabled':''}>${owned.has(c.id)?'Đã đăng ký':'Đăng ký'}</button></article>`).join('')}</div></section>`:'<div class="notice info">Lịch sử bán được tạo khi người học mua thử khóa học của bạn trong cùng trình duyệt. Không chuyển tiền thật.</div>'}
 <section class="panel"><div class="panel-head"><h2>${isExpert()?'Lịch sử bán':'Lịch sử mua'}</h2><span class="status">${records.length} giao dịch</span></div>${records.length?`<div class="transaction-list">${records.map(tx=>renderPaymentRecord(tx,role)).join('')}</div>`:'<div class="empty"><h3>Chưa có giao dịch</h3></div>'}</section>`;
}
function planModal() {
 showModal(`${modalHead('Chọn gói đăng ký')}<div class="plan-grid"><div class="plan-card ${!state.premium?'active':''}"><span class="role-badge">FREE</span><h3>Gói miễn phí</h3><div class="plan-price">0đ</div><div class="plan-list"><span>✓ Tủ lạnh thông minh: tối đa 7 sản phẩm</span><span>✓ AI Miu gợi ý giới hạn về lượt dùng và tốc độ (mô phỏng)</span><span>✓ Lên kế hoạch dinh dưỡng cơ bản</span></div><button class="btn secondary" data-action="choose-plan" data-id="free">Chọn Free</button></div><div class="plan-card ${state.premium?'active':''}"><span class="role-badge expert">PREMIUM</span><h3>Gói Premium</h3><div class="plan-price">109.000đ/tháng</div><div class="plan-list"><span>✓ Thêm không giới hạn sản phẩm vào tủ lạnh</span><span>✓ AI Miu gợi ý món không giới hạn, ưu tiên phản hồi nhanh (mô phỏng)</span><span>✓ Gợi ý thực đơn và bài tập với tốc độ cao (mô phỏng)</span></div><button class="btn" data-action="choose-plan" data-id="premium">Chọn Premium</button></div></div><div class="notice info" style="margin-top:18px">Bảng giá và giới hạn xử lý này là thiết kế mô phỏng của nhóm, không phải giá hoặc cam kết dịch vụ chính thức. Không có thanh toán thật.</div>`,'plan-modal');
}

function myExpertPosts() {return state.posts.filter(x=>x.username===state.username||(!x.username&&state.username==='Taeyeon'));}
function myCourses(){return state.courses.filter(x=>x.username===state.username||(!x.username&&state.username==='Taeyeon'));}
function allCommunityPosts() {
 const standard=state.community.map(p=>({...p,kind:'community',title:p.title||p.name,body:p.body||p.desc,author:p.author||'Jessica',role:p.role||'user',status:p.status||'pending',comments:p.comments||[]}));
 const expert=state.posts.map(p=>({...p,kind:'expert',title:p.title,body:p.summary,author:p.author||'Taeyeon',role:'expert',status:p.status||'approved',comments:p.comments||[]}));
 return [...standard,...expert].sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
}
function actualPost(id,kind) {return (kind==='expert'?state.posts:state.community).find(p=>p.id===id);}
function commentFormFor(id,kind) {
 return `<form class="comment-compose" id="commentForm"><input type="hidden" name="postId" value="${e(id)}"><input type="hidden" name="postKind" value="${e(kind)}"><input name="message" placeholder="Viết bình luận về bài viết..." maxlength="450" required><button class="btn small" type="submit">Bình luận</button></form>`;
}
function communityPage() {
 const posts=allCommunityPosts().filter(p=>p.status==='approved');
 return `${title('Cộng đồng & chia sẻ bài viết','Cộng đồng sức khỏe, bài viết của học viên và chuyên gia đã được quản trị viên kiểm duyệt.',`<button class="btn" data-action="community-post">+ Đóng góp bài viết</button>`)}
 <section class="panel"><div class="panel-head"><h2>Bảng tin cộng đồng</h2><span class="status">${posts.length} bài viết</span></div>
 ${posts.length?posts.map(p=>`<article class="community-post"><div class="row"><span class="mini-profile"><span class="community-avatar">${p.role==='expert'?'✦':'♡'}</span><span><strong>${e(p.author)}</strong><span class="tiny" style="display:block">${date(p.date)} ${p.role==='expert'?'· Chuyên gia':''}</span></span></span><span class="role-badge ${p.role==='expert'?'expert':''}">${p.role==='expert'?'✦ Chuyên gia':'Thành viên'}</span></div><h2>${e(p.title)}</h2><p>${e(p.body)}</p><div class="comment-area"><h3>Bình luận</h3>${(p.comments||[]).filter(c=>c.status==='approved').map(c=>`<div class="comment-line"><b>${e(c.author)}:</b> ${e(c.text)}</div>`).join('')||'<p class="tiny">Chưa có bình luận được duyệt.</p>'}${commentFormFor(p.id,p.kind)}<p class="tiny">Bình luận mới sẽ hiển thị sau khi quản trị viên duyệt.</p></div></article>`).join(''):'<div class="empty"><div class="big">💬</div><h3>Chưa có bài viết được duyệt</h3><p>Nhấn “Đóng góp bài viết” để gửi nội dung đầu tiên.</p></div>'}</section>
 ${allCommunityPosts().filter(p=>p.author===state.username && p.status==='pending').length?'<div class="notice info">Bạn có bài viết đang chờ Tiffany kiểm duyệt trong bản demo.</div>':''}`;
}
function communityForm() {
 showModal(`${modalHead('Đóng góp bài viết')}<div class="notice info">Bạn có thể đăng bài chia sẻ trải nghiệm ăn uống, dinh dưỡng hoặc rèn luyện. Bài viết sẽ được gửi đến quản trị viên để duyệt.</div><form id="communityForm"><div class="field"><label>Tiêu đề bài viết *</label><input name="name" required maxlength="110" placeholder="Ví dụ: Kinh nghiệm chuẩn bị bữa sáng"></div><div class="field"><label>Nội dung bài viết *</label><textarea name="desc" required maxlength="2500" rows="6" placeholder="Chia sẻ kinh nghiệm, câu hỏi hoặc hướng dẫn..."></textarea></div><div class="form-actions"><button class="btn" type="submit">Gửi bài viết</button></div></form>`);
}
function submitCommunityPost(data) {
 const name=String(data.name||'').trim(),desc=String(data.desc||'').trim();
 if(!name||!desc)return toast('Vui lòng điền nội dung.');
 state.community.unshift({id:uid(),name,desc,author:state.name,username:state.username,role:isExpert()?'expert':'user',status:'pending',comments:[],date:localDayKey()});
 save();closeModal();render();toast('Đã gửi bài viết, đang chờ kiểm duyệt.');
}
function submitComment(data) {
 const post=actualPost(data.postId,data.postKind);
 if(!post|| (post.status && post.status!=='approved')) return toast('Không tìm thấy bài viết đang hiển thị.');
 const text=String(data.message||'').trim();if(!text)return;
 post.comments ||= [];
 post.comments.push({id:uid(),author:state.name,username:state.username,text,status:'pending',date:new Date().toISOString()});
 save();render();toast('Bình luận đã gửi, đang chờ kiểm duyệt.');
}
function postForm(id='') {
 if(!isExpert())return toast('Chỉ chuyên gia đã duyệt mới quản lý bài viết chuyên gia.');
 const post=myExpertPosts().find(p=>p.id===id)||{id:'',title:'',summary:''};
 showModal(`${modalHead(id?'Chỉnh sửa bài viết':'Đăng bài chuyên gia')}<div class="notice info">Bài viết mới hoặc được chỉnh sửa cần được quản trị viên Tiffany xét duyệt lại.</div><form id="postForm"><input type="hidden" name="id" value="${e(post.id)}"><div class="field"><label>Tiêu đề</label><input name="title" required maxlength="120" value="${e(post.title)}"></div><div class="field"><label>Nội dung bài viết</label><textarea name="summary" required maxlength="2400" rows="5">${e(post.summary)}</textarea></div><div class="form-actions"><button class="btn" type="submit">Gửi kiểm duyệt</button></div></form>`);
}
function submitExpertPost(data) {
 if(!isExpert())return;
 const title=String(data.title||'').trim(),summary=String(data.summary||'').trim();
 if(!title||!summary)return;
 const existing=myExpertPosts().find(p=>p.id===data.id);
 if(existing){existing.title=title;existing.summary=summary;existing.status='pending';existing.date=localDayKey();}
 else state.posts.unshift({id:uid(),title,summary,author:state.name,username:state.username,role:'expert',status:'pending',comments:[],date:localDayKey()});
 save();closeModal();render();toast('Bài viết chuyên gia đã gửi chờ duyệt.');
}
function courseForm(id=''){
 if(!isExpert())return toast('Bạn cần quyền chuyên gia đã duyệt.');
 const c=myCourses().find(x=>x.id===id)||{id:'',title:'',desc:'',price:299000};
 showModal(`${modalHead(id?'Chỉnh sửa khóa học':'Tạo khóa học mới')}<div class="notice info">Khóa học mới cần Tiffany kiểm duyệt. Phí đăng khóa minh họa là 10% giá khóa học, chỉ được ghi nhận khi quản trị viên duyệt.</div><form id="courseForm"><input type="hidden" name="id" value="${e(c.id)}"><div class="field"><label>Tên khóa học *</label><input name="title" required maxlength="90" value="${e(c.title)}"></div><div class="field"><label>Mô tả *</label><textarea name="desc" rows="4" maxlength="800" required>${e(c.desc)}</textarea></div><div class="field"><label>Học phí dự kiến (VNĐ)</label><input name="price" type="number" min="0" max="100000000" required value="${Number(c.price)}"></div><div class="field"><label>Thời hạn khóa học</label><input name="duration" maxlength="90" value="${e(c.duration||'')}" placeholder="Ví dụ: 8 tuần"></div><div class="form-actions"><button type="submit" class="btn">Gửi duyệt khóa học</button></div></form>`);
}
function submitCourse(data) {
 if(!isExpert())return;
 const title=String(data.title||'').trim(),desc=String(data.desc||'').trim(),price=Number(data.price);
 if(!title||!desc||!Number.isFinite(price)||price<0)return toast('Vui lòng nhập thông tin khóa học hợp lệ.');
 const existing=myCourses().find(x=>x.id===data.id);
 if(existing)Object.assign(existing,{title,desc,price,duration:String(data.duration||'').slice(0,90),status:'pending',owner:state.name});
 else state.courses.push({id:uid(),title,desc,price,duration:String(data.duration||'').slice(0,90),owner:state.name,username:state.username,status:'pending',postingFee:0});
 save();closeModal();render();toast('Khóa học đã gửi Tiffany kiểm duyệt.');
}
function submitExpertApplication(data) {
 if(isAdmin()||isExpert())return toast('Tài khoản hiện tại không cần đăng ký chuyên gia.');
 const fullName=String(data.name||'').trim();
 const dob=String(data.dob||'');
 const citizenId=String(data.citizenId||'').trim();
 const bankAccount=String(data.bankAccount||'').trim();
 const signature=String(data.signature||'').trim();
 const cred=String(data.cred||'').trim();
 if(!fullName||!dob||new Date(dob)>new Date()|| !/^[0-9]{12}$/.test(citizenId)|| !/^[0-9]{8,19}$/.test(bankAccount)|| !cred||signature.toLocaleLowerCase('vi-VN')!==fullName.toLocaleLowerCase('vi-VN')){toast('Kiểm tra họ tên, ngày sinh, số định danh mẫu, thông tin bằng cấp và chữ ký.');return;}
 if(data.agree!=='yes'||data.read!=='yes')return toast('Bạn cần đọc hợp đồng và đồng ý điều khoản trước khi ký.');
 const previous=state.expertRequests.find(r=>r.username===state.username&&r.status==='pending');
 if(previous)return toast('Bạn đã có hồ sơ chuyên gia đang chờ duyệt.');
 state.expertRequests.push({id:uid(),username:state.username,name:fullName,dob,field:data.field,cred, citizenMasked:'•••• •••• '+citizenId.slice(-4),bank:data.bank,bankMasked:'••••'+bankAccount.slice(-4), signatureConfirmed:true,acceptedAt:new Date().toISOString(),status:'pending',date:localDayKey()});
 save();closeModal();render();toast('Đã nộp hồ sơ. Tiffany sẽ xem xét và duyệt trên bản demo.');
}
function applyForm() {
 if(isAdmin()||isExpert())return;
 const existing=state.expertRequests.find(x=>x.username===state.username&&x.status==='pending');
 if(existing)return showModal(`${modalHead('Hồ sơ đang chờ duyệt')}<p>Hồ sơ ngày ${date(existing.date)} đã được gửi. Hãy đăng nhập tài khoản quản trị Tiffany để duyệt thử.</p>`);
 showModal(`${modalHead('Đăng ký trở thành chuyên gia')}<div class="notice">Chỉ dùng CCCD và tài khoản ngân hàng <strong>giả định</strong>. Website demo chỉ giữ 4 số cuối, không gửi dữ liệu đến cơ quan định danh hoặc ngân hàng.</div><form id="expertForm">
  <div class="form-grid"><div class="field"><label>Họ và tên *</label><input name="name" required maxlength="80" value="${e(state.name)}"></div><div class="field"><label>Ngày tháng năm sinh *</label><input type="date" name="dob" required value="${e(state.dob||'')}"></div></div>
  <div class="field"><label>CCCD mẫu (12 chữ số, không nhập CCCD thật) *</label><input name="citizenId" inputmode="numeric" pattern="[0-9]{12}" maxlength="12" required placeholder="000000000123"></div>
  <div class="form-grid"><div class="field"><label>Ngân hàng liên kết mẫu *</label><select name="bank"><option>MB Bank</option><option>Vietcombank</option><option>BIDV</option><option>Techcombank</option><option>ACB</option></select></div><div class="field"><label>Tài khoản giả định (8–19 số) *</label><input name="bankAccount" inputmode="numeric" pattern="[0-9]{8,19}" maxlength="19" required placeholder="000012345678"></div></div>
  <div class="field"><label>Chuyên môn</label><select name="field"><option>Dinh dưỡng</option><option>Huấn luyện thể chất</option><option>Chăm sóc sức khỏe cá nhân</option></select></div>
  <div class="field"><label>Văn bằng, chứng chỉ và kinh nghiệm *</label><textarea name="cred" maxlength="1200" rows="4" required placeholder="Tên bằng, đơn vị cấp, thời gian, kinh nghiệm..."></textarea></div>
  <div class="agreement-document"><h3>Điều khoản & hợp đồng hợp tác</h3><div class="agreement-scroll" tabindex="0"><p><b>Điều 1 – Vai trò.</b> Chuyên gia có trách nhiệm cung cấp nội dung đúng chuyên môn, trung thực về văn bằng, bảo vệ thông tin học viên và phản hồi phù hợp.</p><p><b>Điều 2 – Phí nền tảng.</b> Phí đăng một khóa học là 10% học phí niêm yết; nền tảng nhận chiết khấu 2% từ một đăng ký khóa học thành công. Mọi số liệu là giả định và không phát sinh nghĩa vụ thanh toán thực tế.</p><p><b>Điều 3 – Kiểm duyệt.</b> Bài viết, bình luận và khóa học cần được quản trị viên duyệt trước khi hiển thị công khai.</p><p><b>Điều 4 – Dữ liệu.</b> Không nhập thông tin định danh hoặc ngân hàng thật trên phiên bản chưa kết nối xác minh. Việc ký xác nhận trên trình duyệt chưa sử dụng chứng thư số do đơn vị chứng thực cấp và không thay thế chữ ký số hợp lệ.</p><p><b>Điều 5 – Cam kết.</b> Người nộp đồng ý để hồ sơ mô phỏng được quản trị viên quản trị viên kiểm tra và xét duyệt trên cùng trình duyệt.</p></div>
  <label class="checkrow"><input type="checkbox" name="read" value="yes" required> Tôi đã đọc các điều khoản và hợp đồng</label>
  <label class="checkrow"><input type="checkbox" name="agree" value="yes" required> Tôi đồng ý các điều khoản và xác nhận thông tin đã khai báo</label>
  <div class="field"><label>Xác nhận họ tên trước khi ký mật mã xác nhận điện tử *</label><input name="signature" required maxlength="80" placeholder="Nhập đúng họ tên để ký xác nhận"></div></div>
  <div class="form-actions"><button class="btn secondary modal-close" type="button">Hủy</button><button type="submit" class="btn">Ký xác nhận và gửi hồ sơ</button></div></form>`,'expert-apply-modal');
}

function adminProfiles() {
 const ids=new Set(['Jessica','Taeyeon','Tiffany',...Object.keys(state.registeredUsers||{}),...Object.keys(state.accountData||{})]);
 return [...ids].filter(username=>!(state.deletedAccountsV12||[]).includes(username)).map(username=>{
  const registered=state.registeredUsers?.[username]||{};
  const a=state.accountData?.[username]||{};
  const role=username==='Tiffany'?'Quản trị viên':username==='Taeyeon'||a.expertActivated?'Chuyên gia':'Người dùng';
  return {username,name:a.name||registered.fullName||DEMO_USERS[username]?.displayName||username,dob:registered.dob||a.dob||'—',role,goal:a.goal||'Chưa đặt',premium:a.premium||false};
 });
}
function adminFees() {
 const posting=[...defaultCourses.map(c=>({...c, status:'approved',sample:true})),...state.courses].filter(c=>!c.status||c.status==='approved');
 const feesPost=posting.reduce((sum,c)=>sum+(c.sample?Math.round(c.price*.1):Number(c.postingFee??Math.round(c.price*.1))),0);
 const tx=(state.transactions||[]);
 const course=tx.filter(x=>x.kind==='course');
 const enrollFee=course.reduce((sum,t)=>sum+Math.round(Number(t.amount||0)*.02),0);
 const premiumFee=tx.filter(x=>x.kind==='premium').reduce((sum,t)=>sum+Number(t.amount||0),0);
 return {posting,course,feesPost,enrollFee,premiumFee,total:feesPost+enrollFee+premiumFee};
}
function adminCardActions(type,id,status,allowRemove=false) {
 return `<div class="actions">${status==='pending'?`<button class="btn small" data-action="admin-review" data-decision="approve" data-id="${e(type+':'+id)}">Duyệt</button><button class="btn secondary small" data-action="admin-review" data-decision="reject" data-id="${e(type+':'+id)}">Từ chối</button>`:`<span class="status ${status==='rejected'?'expired':''}">${status==='approved'?'Đã duyệt':status==='rejected'?'Từ chối':e(status)}</span>`}${allowRemove?`<button class="mini-btn" data-action="admin-review" data-decision="delete" data-id="${e(type+':'+id)}">Xóa</button>`:''}</div>`;
}
function adminPage() {
 if(!isAdmin()) return '<div class="notice">Chỉ tài khoản quản trị được truy cập.</div>';
 const users=adminProfiles(), pendingApps=state.expertRequests.filter(r=>r.status==='pending');
 const posts=allCommunityPosts(),pendingPosts=posts.filter(p=>p.status==='pending');
 const pendingComments=posts.flatMap(p=>(p.comments||[]).filter(c=>c.status==='pending').map(c=>({...c,postId:p.id,postKind:p.kind,postTitle:p.title})));
 const courseQueue=state.courses.filter(c=>c.status==='pending');
 const fees=adminFees();
 const tabs=[['overview','Tổng quan'],['users','Hồ sơ người dùng'],['experts','Duyệt chuyên gia'],['posts','Kiểm duyệt bài viết'],['comments','Kiểm duyệt bình luận'],['courses','Quản lý khóa học'],['revenue','Quản lý doanh thu']];
 const tabbar=`<div class="pill-tabs admin-tabs">${tabs.map(([key,text])=>`<button data-action="admin-tab" data-id="${key}" class="${adminTab===key?'selected':''}">${text}</button>`).join('')}</div>`;
 const totals=`<div class="stats">${stat('Tài khoản',users.length,'Gồm thành viên & chuyên gia','👥')}${stat('Hồ sơ cần duyệt',pendingApps.length,'Chuyên gia đăng ký mới','◈')}${stat('Nội dung chờ duyệt',pendingPosts.length+pendingComments.length+courseQueue.length,'Bài viết, bình luận, khóa học','▤')}${stat('Doanh thu nền tảng (mẫu)',money(fees.total),'Giả định theo tỷ lệ phí','₫')}</div>`;
 let body='';
 if(adminTab==='overview')body=`<div class="grid2"><section class="panel"><h2>Hàng đợi kiểm duyệt</h2><div class="admin-quick"><button class="quick-card" data-action="admin-tab" data-id="experts"><strong>${pendingApps.length}</strong><span>Hồ sơ chuyên gia</span></button><button class="quick-card" data-action="admin-tab" data-id="posts"><strong>${pendingPosts.length}</strong><span>Bài viết chờ duyệt</span></button><button class="quick-card" data-action="admin-tab" data-id="comments"><strong>${pendingComments.length}</strong><span>Bình luận chờ duyệt</span></button><button class="quick-card" data-action="admin-tab" data-id="courses"><strong>${courseQueue.length}</strong><span>Khóa học chờ duyệt</span></button></div></section></div>`;
 if(adminTab==='users')body=`<section class="panel"><div class="panel-head"><h2>Hồ sơ trên hệ thống demo</h2><span class="status">${users.length} tài khoản</span></div><div class="table-wrap"><table><thead><tr><th>TÀI KHOẢN</th><th>HỌ TÊN</th><th>NGÀY SINH</th><th>VAI TRÒ</th><th>MỤC TIÊU</th><th>GÓI</th></tr></thead><tbody>${users.map(u=>`<tr><td><b>${e(u.username)}</b></td><td>${e(u.name)}</td><td>${e(u.dob)}</td><td><span class="role-badge ${u.role==='Chuyên gia'?'expert':''}">${u.role}</span></td><td>${e(u.goal)}</td><td>${u.premium?'Premium':'Free'}</td></tr>`).join('')}</tbody></table></div><p class="tiny">Danh sách tài khoản và số liệu đều thuộc môi trường thử nghiệm cục bộ.</p></section>`;
 if(adminTab==='experts')body=`<section class="panel"><div class="panel-head"><h2>Duyệt hồ sơ chuyên gia</h2><span class="status">${pendingApps.length} đang chờ</span></div>${state.expertRequests.length?state.expertRequests.slice().reverse().map(r=>`<article class="admin-review-card"><div><h3>${e(r.name)}</h3><p>Ứng viên: ${e(r.username||r.name)} · Sinh: ${e(r.dob||'Chưa có')} · ${e(r.field||'Chưa rõ chuyên môn')}</p><p><b>Văn bằng / kinh nghiệm:</b> ${e(r.cred||'')}</p><p><b>CCCD mẫu:</b> ${e(r.citizenMasked||'Định danh demo chưa khai báo')} · <b>Ngân hàng:</b> ${e(r.bank||'—')} ${e(r.bankMasked||'')}</p><p class="tiny">${r.signatureConfirmed?r.digitalSignature?.type==='ECDSA'?'Đã xác nhận điện tử (chưa có chứng thư số).':'Đã ký xác nhận văn bản thử nghiệm.':'Hồ sơ cũ chưa có chữ ký.'}</p></div>${adminCardActions('expert',r.id,r.status||'pending')}</article>`).join(''):'<div class="empty"><p>Chưa có hồ sơ chuyên gia mới.</p></div>'}</section>`;
 if(adminTab==='posts')body=`<section class="panel"><div class="panel-head"><h2>Kiểm duyệt bài viết</h2><span class="status">${posts.length} bài</span></div>${posts.length?posts.map(p=>`<article class="admin-review-card"><div><h3>${e(p.title)} ${p.role==='expert'?'<span class="role-badge expert">✦ Chuyên gia</span>':''}</h3><p><strong>${e(p.author)}</strong> · ${date(p.date)}</p><p>${e(p.body)}</p></div>${adminCardActions('post-'+p.kind,p.id,p.status,true)}</article>`).join(''):'<div class="empty"><p>Chưa có bài viết được gửi.</p></div>'}</section>`;
 if(adminTab==='comments')body=`<section class="panel"><div class="panel-head"><h2>Kiểm duyệt bình luận</h2><span class="status">${posts.reduce((n,p)=>n+(p.comments?.length||0),0)} bình luận</span></div>${posts.flatMap(p=>(p.comments||[]).map(c=>({...c,postId:p.id,postKind:p.kind,postTitle:p.title}))).length?posts.flatMap(p=>(p.comments||[]).map(c=>({...c,postId:p.id,postKind:p.kind,postTitle:p.title}))).map(c=>`<article class="admin-review-card"><div><h3>${e(c.author)} <span class="tiny">trong “${e(c.postTitle)}”</span></h3><p>${e(c.text)}</p></div>${adminCardActions('comment-'+c.postKind+'-'+c.postId,c.id,c.status,true)}</article>`).join(''):'<div class="empty"><p>Chưa có bình luận.</p></div>'}</section>`;
 if(adminTab==='courses')body=`<section class="panel"><div class="panel-head"><h2>Quản lý và duyệt khóa học</h2><span class="status">${defaultCourses.length+state.courses.length} khóa học</span></div>${defaultCourses.map(c=>`<article class="admin-review-card"><div><h3>${e(c.title)}</h3><p>Khóa học mẫu · Taeyeon · ${money(c.price)}</p></div><span class="role-badge">Có sẵn (demo)</span></article>`).join('')}${state.courses.map(c=>`<article class="admin-review-card"><div><h3>${e(c.title)}</h3><p>${e(c.owner||'Chuyên gia')} · Giá ${money(c.price)}</p><p>${e(c.desc)}</p><p class="tiny">Phí đăng khóa khi duyệt: ${money(Math.round(c.price*.10))} (10% học phí)</p></div>${adminCardActions('course',c.id,c.status||'approved',true)}</article>`).join('')}</section>`;
 if(adminTab==='revenue')body=`${`<div class="stats">${stat('Phí đăng khóa 10%',money(fees.feesPost),'Theo học phí niêm yết mẫu','◈')}${stat('Chiết khấu đăng ký 2%',money(fees.enrollFee),'Theo giao dịch đăng ký thử','↗')}${stat('Phí gói Premium',money(fees.premiumFee),'109.000đ/lượt mua mẫu','✦')}${stat('Tổng phí ghi nhận',money(fees.total),'Doanh thu mô phỏng','₫')}</div>`}<section class="panel"><h2>Chi tiết nguồn thu</h2><div class="table-wrap"><table><thead><tr><th>NGUỒN THU</th><th>CÁCH TÍNH</th><th>SỐ TIỀN</th></tr></thead><tbody><tr><td>Phí đăng khóa chuyên gia</td><td>10% × học phí khóa được duyệt</td><td>${money(fees.feesPost)}</td></tr><tr><td>Chiết khấu đăng ký học viên</td><td>2% × giao dịch đăng ký thành công</td><td>${money(fees.enrollFee)}</td></tr><tr><td>Đăng ký Premium</td><td>109.000đ × lượt kích hoạt</td><td>${money(fees.premiumFee)}</td></tr><tr><td><b>Tổng (demo)</b></td><td>Không có giao dịch thật</td><td><b>${money(fees.total)}</b></td></tr></tbody></table></div><div class="notice info">Bao gồm dữ liệu mẫu và giao dịch thử. Mức phí là giả định của nhóm, không phải phí đã thu thực tế.</div></section>`;
 return `${title('Trung tâm quản trị .theMeal',' quản lý người dùng, chuyên gia, nội dung, khóa học và doanh thu mô phỏng.')}${totals}${tabbar}${body}`;
}
function reviewEntity(key,decision) {
 if(!isAdmin())return toast('Bạn không có quyền kiểm duyệt.');
 if(!['approve','reject','delete'].includes(decision))return;
 const [kind,...rest]=String(key||'').split(':');
 const id=rest.join(':');
 const review=status=>status;
 if(kind==='expert') {
  const r=state.expertRequests.find(x=>x.id===id);if(!r)return;
  if(decision==='delete')return;
  r.status=decision==='approve'?'approved':'rejected';
  if(decision==='approve') {
    state.accountData[r.username] ||= freshAccount(r.username);
    state.accountData[r.username].expertActivated=true;
    state.accountData[r.username].specialty=r.field;
    state.accountData[r.username].bankLink={bank:r.bank,last4:r.bankMasked?.slice(-4)||'0000'};
  }
 }else if(kind==='course'){
  const c=state.courses.find(x=>x.id===id);if(!c)return;
  if(decision==='delete'){state.courses=state.courses.filter(x=>x.id!==id);}
  else {c.status=decision==='approve'?'approved':'rejected'; if(decision==='approve'&&!c.postingFee){c.postingFee=Math.round(c.price*.1);c.approvedAt=new Date().toISOString();}}
 } else if(kind==='post-community'||kind==='post-expert'){
  const source=kind==='post-community'?state.community:state.posts;
  const p=source.find(x=>x.id===id);if(!p)return;
  if(decision==='delete')source.splice(source.indexOf(p),1);else p.status=decision==='approve'?'approved':'rejected';
 } else if(kind.startsWith('comment-')) {
  const postKind=kind.startsWith('comment-expert-')?'expert':'community';
  const postId=kind.slice(('comment-'+postKind+'-').length);
  const p=actualPost(postId,postKind);if(!p)return;
  const c=(p.comments||[]).find(x=>x.id===id);if(!c)return;
  if(decision==='delete')p.comments.splice(p.comments.indexOf(c),1);else c.status=decision==='approve'?'approved':'rejected';
 }
 save();render();toast('Đã cập nhật trạng thái kiểm duyệt (demo).');
}
// Override default payment verification: newly approved courses are buyable.
function paymentConfirm(id) {
 if(isAdmin()||isExpert())return toast('Chỉ tài khoản học viên mới đăng ký khóa học.');
 const c=approvedCourses().find(x=>x.id===id);
 if(!c)return toast('Khóa học chưa được duyệt.');
 if(state.transactions.some(t=>t.buyer===state.username&&t.courseId===id))return toast('Bạn đã đăng ký khóa học này.');
 showModal(`${modalHead('Thanh toán khóa học – demo')}<div class="payment-summary"><span>Khóa học</span><strong>${e(c.title)}</strong><span>Chuyên gia</span><strong>${e(c.owner||'Taeyeon')}</strong><span>Số tiền</span><strong>${money(c.price)}</strong><span>Ngân hàng liên kết</span><strong>${bankInfo()}</strong></div><div class="notice info">Không cần thông tin thẻ, không chuyển khoản. Giao dịch chỉ được ghi vào lịch sử mô phỏng.</div><div class="form-actions"><button class="btn secondary modal-close" type="button">Hủy</button><button class="btn" data-action="confirm-payment" data-id="${e(c.id)}">Xác nhận mua thử</button></div>`);
}
function confirmPayment(id) {
 if(isExpert()||isAdmin())return;
 const c=approvedCourses().find(x=>x.id===id);
 if(!c||state.transactions.some(t=>t.buyer===state.username&&t.courseId===id))return closeModal();
 const seller=c.username||'Taeyeon';
 state.transactions.unshift({id:'TX-'+uid().slice(-8).toUpperCase(),buyer:state.username,seller,courseId:id,kind:'course',title:c.title,amount:Number(c.price),date:new Date().toISOString(),sample:false});
 save();closeModal();nav('payments');toast('Đã ghi nhận đơn hàng mô phỏng.');
}

/* =============================================================
   .theMeal v9: bản thiết kế học tập. Dinh dưỡng ước tính, dữ liệu
   cục bộ; không có AI/nhận diện y khoa, thanh toán hoặc ký CA thật.
   ============================================================= */
let pendingFoodV9=null;
let recipeLimitV9=12;
const adminFiltersV9={adminRoleFilter:'Tất cả',adminGoalFilter:'Tất cả',adminPlanFilter:'Tất cả'};

function normalizeViV9(v){return String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase().trim();}
function recipeMatchesV9(r,q){const w=normalizeViV9(q);return !w || normalizeViV9(r.name).includes(w) || r.ingredients.some(i=>normalizeViV9(i[0]).includes(w));}
function missingIngredientsV9(){return required();}
function syncShoppingV9(){
  const old=new Map(state.shopping.filter(x=>x.source!=='manual').map(x=>[normalizeViV9(x.name)+'|'+x.unit,x]));
  const shortageKeys=new Set(missingIngredientsV9().map(x=>normalizeViV9(x.name)+'|'+x.unit));
  const manual=state.shopping.filter(x=>x.source==='manual'||(x.source!=='recipe'&&!shortageKeys.has(normalizeViV9(x.name)+'|'+x.unit)));
  const fromMenu=missingIngredientsV9().map(x=>{
    const oldOne=old.get(normalizeViV9(x.name)+'|'+x.unit);
    return {...x,id:oldOne?.id||uid(),source:'recipe',done:oldOne?.done||false};
  });
  state.shopping=[...fromMenu,...manual];
}
function shoppingSummaryV9(){
  const shortage=missingIngredientsV9();
  return `<section class="panel shopping-integrated" id="shoppingIntegrated">
    <div class="panel-head"><div><h2>🛒 Nguyên liệu cần mua theo thực đơn đã chọn</h2><p class="subtitle">Tự động đối chiếu với số lượng thực phẩm còn hạn trong tủ lạnh. Nguyên liệu trùng giữa các món được cộng gộp.</p></div><button class="btn secondary small" data-page="shopping">Mở danh sách mua sắm</button></div>
    ${state.chosen.length?`<div class="selected-dishes">${state.chosen.map(id=>recipes.find(r=>r.id===id)).filter(Boolean).map(r=>`<span class="chosen-dish">${r.emoji} ${e(r.name)} <button aria-label="Bỏ ${e(r.name)}" data-action="toggle-recipe" data-id="${r.id}">×</button></span>`).join('')}</div>`:'<div class="notice info">Hãy bấm “Chọn món” trong các thẻ bên dưới. Hệ thống sẽ tính ngay phần nguyên liệu cần mua.</div>'}
    ${shortage.length?`<div class="shortage-list">${shortage.map(i=>`<div class="shortage-item"><span>• ${e(i.name)}</span><b>${Number(i.qty).toLocaleString('vi-VN')} ${e(i.unit)}</b></div>`).join('')}</div>`:state.chosen.length?'<div class="notice info">✓ Nguyên liệu đang có đủ cho thực đơn này. Kiểm tra hạn dùng và chất lượng trước khi nấu.</div>':''}
    <div class="form-actions"><span class="tiny">${state.chosen.length} món đã chọn · ${shortage.length} loại nguyên liệu cần bổ sung</span><button class="btn" data-action="generate-shopping" ${state.chosen.length?'':'disabled'}>Cập nhật</button></div>
  </section>`;
}
function recipesV9(){
 const pool=sortedRecipes(); const visible=pool.slice(0,recipeLimitV9);
 return `${title('Gợi ý thực đơn','66 món ăn, chủ yếu là món Việt. Chọn món để tự động đối chiếu nguyên liệu trong tủ lạnh.',`<button class="btn secondary" data-page="miu">✦ Có gì, Miu nấu nấy</button>`)}
 <div class="notice info">Mỗi công thức có định lượng một khẩu phần, calo và đạm–tinh bột–béo <b>ước tính</b>. Kết quả thay đổi theo thực phẩm và cách chế biến; không dùng làm chỉ định điều trị.</div>
 ${shoppingSummaryV9()}
 <div class="filterbar"><input id="recipeSearch" placeholder="⌕ Tìm món Việt hoặc nguyên liệu..." value="${e(recipeQuery)}"><select id="recipeGoal">${['Tất cả','Giảm cân','Giữ cân','Tăng cơ'].map(g=>`<option ${g===recipeGoal?'selected':''}>${g}</option>`).join('')}</select><span class="status">${pool.length} món phù hợp</span></div>
 <div class="card-grid">${visible.length?visible.map(recipeCard).join(''):'<div class="empty">Không tìm thấy món khớp với tìm kiếm. Bạn hãy thử tên khác.</div>'}</div>
 ${visible.length<pool.length?`<div class="load-more"><button class="btn secondary" data-action="recipe-more">Xem thêm ${Math.min(12,pool.length-visible.length)} món ↓</button></div>`:''}`;
}
function miuMatchesV9(){
 const q=miuQuery.trim(); const goal=miuGoal||state.goal;
 const pool=recipes.filter(r=>r.goals.includes(goal));
 const match=q?pool.filter(r=>recipeMatchesV9(r,q)):pool;
 return match.map(r=>({r,m:recommend(r)})).sort((a,b)=>Number(b.m.urgent)-Number(a.m.urgent)||b.m.pct-a.m.pct).slice(0,5);
}
function miuV9(){
 const recommendations=miuHasRun?miuMatchesV9():[];
 return `${title('Có gì, Miu nấu nấy','Gợi ý món Việt và hướng dẫn nấu dựa trên nguyên liệu còn hạn trong tủ lạnh.',`<button class="btn secondary" data-page="fridge">🧊 Xem tủ lạnh</button>`)}
 <div class="miu-header"><div class="miu-icon">✦</div><div><span class="eyebrow">.theMeal · MIU</span><h2>Miu gợi ý món ăn từ những gì bạn có</h2><p></p></div></div>
 <div class="grid2"><section class="panel"><h2>Có gì, Miu nấu nấy</h2><form id="miuForm"><div class="field"><label>Tên món hoặc nguyên liệu bạn muốn nấu</label><textarea name="query" rows="3" maxlength="220" placeholder="Ví dụ: phở gà, cà rốt, cá kho, món từ ức gà...">${e(miuQuery)}</textarea></div><div class="field"><label>Mục tiêu</label><select name="goal">${['Giảm cân','Giữ cân','Tăng cơ'].map(g=>`<option ${g===(miuGoal||state.goal)?'selected':''}>${g}</option>`).join('')}</select></div><button class="btn" type="submit">✦ Miu gợi ý và hướng dẫn nấu</button></form><div class="notice info" style="margin-top:16px">Tủ lạnh hiện có ${activeFoods().length} mặt hàng. ${state.premium?'Premium: không giới hạn lượt gợi ý':'Free: tối đa 3 lượt gợi ý/ngày'}</div></section></div>
 ${miuHasRun?`<section class="panel"><div class="panel-head"><h2>${recommendations.length?'Món Miu tìm được':'Chưa tìm thấy món phù hợp'}</h2><button class="btn soft small" data-page="recipes">Xem 66 công thức</button></div>${recommendations.length?recommendations.map(({r,m})=>`<article class="miu-cooking"><div class="row"><h3>${r.emoji} ${e(r.name)}</h3><span class="status">${r.kcal} kcal · ${m.pct}% nguyên liệu</span></div><div class="macro-pills"><span>Đạm ${r.protein}g</span><span>Tinh bột ${r.carb}g</span><span>Béo ${r.fat}g</span><span>~${r.mins} phút</span></div><h4>Nguyên liệu cho 1 phần</h4><p>${r.ingredients.map(([n,q,u])=>`${e(n)} ${q}${e(u)}`).join(' · ')}</p><h4>Hướng dẫn nấu</h4><ol>${r.steps.map(x=>`<li>${e(x)}</li>`).join('')}</ol><div class="row"><span class="tiny">Ước tính dinh dưỡng, không thay thế tư vấn chuyên gia.</span><button class="btn small" data-action="toggle-recipe" data-id="${r.id}">${state.chosen.includes(r.id)?'✓ Bỏ món':'Chọn món & tính nguyên liệu thiếu'}</button></div></article>`).join(''):'<p>Không tìm được món theo yêu cầu này. Thử nhập tên nguyên liệu khác hoặc mở tất cả công thức.</p>'}</section>`:''}`;
}
function storageEstimateV9(food){
 const k=food.group;
 const approx={Thịt:[1,2,'thịt tươi'],Cá:[1,2,'cá/hải sản tươi'],'Rau củ':[3,5,'rau củ tươi'],'Trái cây':[3,7,'trái cây'],'Trứng':[21,35,'trứng nguyên vỏ'],Sữa:[1,3,'sản phẩm sữa đã mở nắp']};
 const x=approx[k];return x?`khoảng ${x[0]}–${x[1]} ngày với ${x[2]} trong điều kiện làm lạnh phù hợp (0–4°C khi áp dụng)`: 'theo hướng dẫn trên nhãn; thời hạn có thể khác nhau tùy loại và bao bì';
}
function storageChoiceV9(){
 if(!pendingFoodV9)return;
 const f=pendingFoodV9;
 showModal(`${modalHead('Xác nhận cách bảo quản')}<h3>${e(f.name)}</h3><div class="callout">🌿 ${e(care(f))}</div><p>Mốc kiểm tra: <b>${e(storageEstimateV9(f))}</b>. Đây không phải hạn sử dụng mới do hệ thống tự đặt.</p><div class="option-cards"><button class="option-card" data-action="storage-accept"><strong>✓ Đồng ý với gợi ý của .theMeal</strong><span>Lưu thực phẩm với hạn sử dụng bạn đã nhập.</span></button><button class="option-card" data-action="storage-decline"><strong>Không đồng ý với gợi ý</strong><span>Xem cảnh báo bảo quản trước khi tiếp tục.</span></button></div><p class="tiny">Luôn ưu tiên ngày trên bao bì và dấu hiệu an toàn thực phẩm.</p>`);
}
function storageWarningV9(){
 if(!pendingFoodV9)return;
 showModal(`${modalHead('Lưu ý về thời gian bảo quản')}<div class="notice">Thời hạn bảo quản của <b>${e(pendingFoodV9.name)}</b> thường chỉ <b>${e(storageEstimateV9(pendingFoodV9))}</b>. Bạn có muốn bảo quản theo gợi ý của .theMeal không?</div><p>Bấm “Tiếp tục” để giữ lựa chọn và hạn sử dụng do bạn nhập, hoặc “Quay trở lại” để xem lại gợi ý. Trang này không tự thay đổi hạn dùng.</p><div class="form-actions"><button class="btn secondary" data-action="storage-return">Quay trở lại</button><button class="btn" data-action="storage-continue">Tiếp tục</button></div>`);
}
function saveFoodV9(){
 if(!pendingFoodV9)return;
 const f=pendingFoodV9;pendingFoodV9=null;
 const index=state.foods.findIndex(a=>a.id===f.id);
 if(index>=0)state.foods[index]=f;else state.foods.push(f);
 syncShoppingV9(); save();closeModal();render();toast('Đã lưu '+f.name+' vào tủ lạnh.');
}
function estimateDiaryV9(entry){
 const texts=['breakfast','lunch','dinner','snack'].map(k=>String(entry[k]||'').trim());
 const totals={kcal:0,protein:0,carb:0,fat:0,count:0,missing:0,matches:[]};
 for(const text of texts){
   if(!text)continue;
   const parts=text.split(/[\n;,]+/).map(x=>x.trim()).filter(Boolean);
   for(const part of parts){
      const normalized=normalizeViV9(part);
      const hit=[...recipes].sort((a,b)=>b.name.length-a.name.length).find(r=>normalized.includes(normalizeViV9(r.name)) || normalizeViV9(r.name).includes(normalized) && normalized.length>5);
      if(hit){for(const k of ['kcal','protein','carb','fat']) totals[k]+=hit[k];totals.count++;totals.matches.push(hit.name);}
      else totals.missing++;
   }
 }
 return totals;
}
function exerciseKcalV9(d){
 const weight=Number(profileForCurrent().weight);
 const metOf=s=>{const n=normalizeViV9(s);if(n.includes('chay'))return 8;if(n.includes('dap xe'))return 6;if(n.includes('squat'))return 5;if(n.includes('plank'))return 3.7;if(n.includes('di bo'))return 4;if(n.includes('yoga')||n.includes('gian co'))return 2.5;return 3.5;};
 const activities=d.activities||[];
 return {kcal:Math.round(activities.reduce((n,a)=>n+(a.burned!=null?Number(a.burned):weight>0?metOf(a.name)*weight*Number(a.minutes)/60:0),0)),estimated:activities.filter(a=>a.burned==null).length,canEstimate:weight>0};
}
function diaryV9(){
 const d=diaryFor(), n=estimateDiaryV9(d), burn=exerciseKcalV9(d);
 const summary=`<section class="panel nutrition-diary"><div class="panel-head"><div><h2>Ước tính dinh dưỡng và vận động</h2><p class="subtitle">Chỉ nhận diện chính xác khi bạn ghi đúng tên món có trong kho công thức; hoạt động dùng MET và cân nặng đã nhập để ước tính.</p></div><button class="btn soft small" data-page="recipes">Tra cứu tên món</button></div>
 <div class="stats nutrition-stats">${stat('Năng lượng ăn vào',n.count?n.kcal+' kcal':'Chưa tính',n.count+' món nhận diện','🔥')}${stat('Đạm',n.count?n.protein+' g':'—','Theo món ghi nhận','🥚')}${stat('Tinh bột',n.count?n.carb+' g':'—','Theo món ghi nhận','🌾')}${stat('Chất béo',n.count?n.fat+' g':'—','Theo món ghi nhận','🥑')}</div>
 <div class="row"><span>🏃 Hoạt động tiêu hao: <b>${burn.canEstimate||!(d.activities||[]).some(a=>a.burned==null)?burn.kcal+' kcal (ước tính)':'Cần nhập cân nặng để ước tính'}</b></span><span>✅ Đã nhận diện ${n.count} món ${n.missing?'· '+n.missing+' mục chưa xác định':''}</span></div>
 <div class="notice info" style="margin-top:15px">Các giá trị chỉ mang tính tham khảo, dễ sai khác theo khẩu phần và cường độ vận động. Không tự suy đoán dinh dưỡng của những món chưa nhận diện.</div></section>`;
 return diaryPage().replace('Ghi lại bữa ăn đã dùng và quá trình vận động theo ngày; dữ liệu được lưu trên trình duyệt.','Ghi lại bữa ăn trong ngày và quá trình vận động')+summary;
}
function courseRecommendationV9(){
 const goal=normalizeViV9(state.goal);const all=approvedCourses();
 const scored=all.map(c=>{
  const txt=normalizeViV9(c.title+' '+c.desc);let score=0;
  if(goal.includes('tang co')&&/(co|tập|luyện|protein|dinh dưỡng)/.test(txt))score+=2;
  if(goal.includes('giam can')&&/(an|bữa|cân bằng|dinh dưỡng)/.test(txt))score+=2;
  if(goal.includes('giu can')&&/(an|can bang|bữa|dinh dưỡng)/.test(txt))score+=2;
  return {c,score};
 }).sort((a,b)=>b.score-a.score).slice(0,3);
 return scored.map(({c})=>`<div class="suggested-course"><div><strong>${e(c.title)}</strong><small> ${money(c.price)} · Mục tiêu: ${e(state.goal)}</small></div><button class="btn small" data-action="pay-course" data-id="${e(c.id)}">Xem khóa học</button></div>`).join('');
}
function expertsV9(){
 return expertsPage()+`<section class="panel course-reco"><div class="panel-head"><div><span class="eyebrow">DÀNH CHO BẠN</span><h2>Khóa học được gợi ý theo mục tiêu</h2><p class="subtitle">Phù hợp theo mục tiêu đã chọn và nội dung khóa học, không dùng BMI để kết luận bệnh lý.</p></div></div>${courseRecommendationV9()}</section>`;
}
function settingsV9(){
 return settingsPage()+`<section class="panel course-reco"><span class="eyebrow">GỢI Ý TỪ HỒ SƠ SỨC KHỎE</span><h2>Khóa học bạn có thể quan tâm</h2><p class="subtitle">BMI ${bmiFor(profileForCurrent())||'chưa đủ dữ liệu'} · Mục tiêu: ${e(state.goal)}. Các khóa học được gợi ý theo mục tiêu, không chẩn đoán sức khỏe.</p>${courseRecommendationV9()}</section>`;
}
function workoutsV9(){
 const goal=state.goal;
 const suggestions=normalizeViV9(goal).includes('tang co')?['Squat cơ bản 15–20 phút','Plank 10 phút','Đi bộ hồi phục 20 phút']:normalizeViV9(goal).includes('giam can')?['Đi bộ nhanh 30 phút','Đạp xe 20–30 phút','Giãn cơ toàn thân 15 phút']:['Đi bộ nhanh 20 phút','Yoga thư giãn 20 phút','Giãn cơ 10 phút'];
 return workoutsPage()+`<section class="panel"><span class="eyebrow">GỢI Ý THEO MỤC TIÊU</span><h2>Mục tiêu luyện tập của bạn: ${e(goal)}</h2><p class="subtitle">Bạn có thể chọn hoạt động tùy thể lực và thời gian. Các bài tập dưới đây là gợi ý chung.</p><div class="workout-suggestions">${suggestions.map((x,i)=>`<div class="quick-card"><span class="role-badge">0${i+1}</span><h3>${e(x)}</h3><p>Hãy thêm bài tập phù hợp vào lịch phía trên và điều chỉnh cường độ an toàn.</p></div>`).join('')}</div></section>`;
}
function paymentsV9(){
 const role=isExpert()?'seller':'buyer',records=paidRecords(role),total=records.reduce((sum,t)=>sum+Number(t.amount||0),0);
 const owned=new Set((state.transactions||[]).filter(t=>t.buyer===state.username&&t.kind==='course').map(t=>t.courseId));
 return `${title('Thanh toán & lịch sử',isExpert()?'Theo dõi giao dịch bán khóa học.':'Đăng ký khóa học và theo dõi lịch sử mua.')}
 <div class="stats stats-three">${stat(isExpert()?'Giao dịch bán':'Giao dịch mua',records.length,'Số giao dịch đã ghi nhận','▤')}${stat(isExpert()?'Tổng bán':'Tổng mua',money(total),'Theo dữ liệu trên trình duyệt','₫')}${stat('Ngân hàng liên kết',state.bankLink?'Đã liên kết':'Chưa có','Tùy chọn cập nhật bên dưới','▣')}</div>
 <section class="panel"><div class="panel-head"><div><h2>Ngân hàng liên kết</h2><p class="subtitle">${bankInfo()}</p></div><div class="actions"><button class="btn secondary small" data-action="link-bank">${state.bankLink?'Đổi ngân hàng':'Liên kết ngân hàng'}</button>${state.bankLink?'<button class="btn secondary small" data-action="unlink-bank">Ngắt liên kết</button>':''}</div></div><div class="notice info">Chưa kết nối ngân hàng để thực hiện thanh toán thực tế.</div></section>
 ${!isExpert()?`<section class="panel"><h2>Khóa học dành cho bạn</h2><div class="payment-products">${approvedCourses().map(c=>`<div class="payment-product"><div class="payment-product-icon">📘</div><div><h3>${e(c.title)}</h3><p>${money(c.price)} · ${e(c.owner||'Taeyeon')}</p></div><button class="btn small" data-action="pay-course" data-id="${e(c.id)}" ${owned.has(c.id)?'disabled':''}>${owned.has(c.id)?'Đã đăng ký':'Đăng ký khóa học'}</button></div>`).join('')}</div></section>`:''}
 <section class="panel"><h2>${isExpert()?'Lịch sử bán':'Lịch sử mua'}</h2>${records.length?`<div class="transaction-list">${records.map(t=>renderPaymentRecordV9(t,role)).join('')}</div>`:'<div class="empty"><p>Chưa có giao dịch nào.</p></div>'}</section>`;
}
function renderPaymentRecordV9(t,role){
 return `<div class="transaction-row"><div><strong>${e(t.title||'Giao dịch khóa học')}</strong><p class="tiny">${new Date(t.date).toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric'})} · ${e(t.id||'')}</p></div><div><b>${money(t.amount)}</b><div class="tiny">${t.kind==='premium'?'Gói dịch vụ .theMeal':role==='seller'?'Học viên: '+e(t.buyer):'Chuyên gia: '+e(t.seller)}</div></div></div>`;
}
function postFormV9(id=''){
 if(!isExpert())return toast('Chỉ chuyên gia mới được đăng bài trong mục này.');
 const post=myExpertPosts().find(p=>p.id===id)||{id:'',title:'',summary:'',target:'community'};
 const locked=Boolean(id);
 showModal(`${modalHead(locked?'Chỉnh sửa bài viết':'Đăng nội dung chuyên gia')}<form id="postForm"><input type="hidden" name="id" value="${e(post.id)}"><div class="field"><label>Hình thức đăng</label><select name="target" id="expertPostType" ${locked?'disabled':''}><option value="community" ${post.target!=='course'?'selected':''}>Đăng công khai lên Cộng đồng</option><option value="course" ${post.target==='course'?'selected':''}>Đăng trong phần Khóa học</option></select>${locked?'<small>Bài viết đã đăng chỉ có thể sửa nội dung, không đổi hình thức.</small>':''}</div>
 <div class="field"><label>Tiêu đề *</label><input name="title" required maxlength="120" value="${e(post.title)}"></div><div class="field"><label>Nội dung chuyên gia *</label><textarea name="summary" required rows="6" maxlength="3500">${e(post.summary)}</textarea></div>
 <div class="field" id="expertPostPriceRow" ${post.target==='course'?'':'hidden'}><label>Học phí khóa học (VNĐ)</label><input name="price" type="number" min="0" max="100000000" value="299000"><label style="margin-top:10px">Thời hạn khóa học</label><input name="duration" maxlength="90" placeholder="Ví dụ: 8 tuần hoặc 3 tháng"><small>Khóa học cần quản trị viên duyệt trước khi học viên đăng ký.</small></div>
 <div class="notice info">Bài viết công khai và khóa học mới cần Tiffany kiểm duyệt trước khi xuất hiện.</div><div class="form-actions"><button class="btn secondary modal-close" type="button">Hủy</button><button class="btn" type="submit">Gửi bài viết</button></div></form>`);
}
function submitExpertPostV9(data){
 if(!isExpert())return;
 const name=String(data.title||'').trim(),text=String(data.summary||'').trim();
 if(!name||!text)return toast('Hãy nhập tiêu đề và nội dung.');
 const existing=myExpertPosts().find(p=>p.id===data.id);
 if(existing){Object.assign(existing,{title:name,summary:text,status:'pending',date:localDayKey()});}
 else if(data.target==='course'){
   const price=Number(data.price);
   if(!Number.isFinite(price)||price<0||price>100000000)return toast('Học phí chưa hợp lệ.');
   state.courses.push({id:uid(),title:name,desc:text,price,duration:String(data.duration||'').slice(0,90),owner:state.name,username:state.username,status:'pending',postingFee:0,article:true});
 }else{
   state.posts.unshift({id:uid(),title:name,summary:text,author:state.name,username:state.username,role:'expert',target:'community',status:'pending',comments:[],date:localDayKey()});
 }
 save();closeModal();render();toast('Nội dung đã được gửi để kiểm duyệt.');
}
function communityV9(){
 const feed=allCommunityPosts().filter(p=>p.status==='approved' && p.target!=='course');
 return `${title('Cộng đồng','Chia sẻ bài viết và thảo luận với chuyên gia.',`<button class="btn" data-action="community-post">+ Đóng góp bài viết</button>`)}
 <section class="panel community-feed"><div class="panel-head"><h2>Bảng tin</h2><span class="status">${feed.length} bài viết</span></div>
 ${feed.length?feed.map(p=>`<article class="community-post"><div class="row"><div class="mini-profile"><span class="community-avatar">${p.role==='expert'?'✦':'♡'}</span><div><strong>${e(p.author)}</strong><p class="tiny">${date(p.date)}</p></div></div><span class="role-badge ${p.role==='expert'?'expert':''}">${p.role==='expert'?'Chuyên gia':'Thành viên'}</span></div><h2>${e(p.title)}</h2><p class="post-content">${e(p.body)}</p>
 <div class="post-actions-v12"><button class="btn secondary small" data-action="post-like-v12" data-id="${e(p.kind+':'+p.id)}" aria-pressed="${likedPostV12(p)}">${likedPostV12(p)?'♥ Đã thích':'♡ Thích'} <span>${postLikeCountV12(p)}</span></button><button class="btn secondary small" data-action="post-save-v12" data-id="${e(p.kind+':'+p.id)}" aria-pressed="${savedPostV12(p)}">${savedPostV12(p)?'✓ Đã lưu':'▣ Lưu bài viết'}</button></div>
 <div class="comment-area"><h3>Bình luận · ${(p.comments||[]).filter(c=>c.status==='approved').length}</h3>
 ${(p.comments||[]).filter(c=>c.status==='approved').map(c=>`<div class="comment-line ${c.parentId?'is-reply':''}"><span class="role-badge ${c.role==='expert'?'expert':''}">${c.role==='expert'?'✦ Chuyên gia':'Người dùng'}</span><div><strong>${e(c.author)}</strong><p>${e(c.text)}</p>${isExpert()?`<button class="text-link" data-action="expert-reply" data-id="${e(p.kind+':'+p.id+':'+c.id)}">Trả lời</button>`:''}</div></div>`).join('')||'<p class="tiny">Chưa có bình luận.</p>'}
 ${commentFormFor(p.id,p.kind)}<p class="tiny">Bình luận mới cần được duyệt để hiển thị.</p></div></article>`).join(''):'<div class="empty"><p>Chưa có bài viết được duyệt. Hãy là người chia sẻ đầu tiên.</p></div>'}</section>`;
}
function expertReplyV9(encoded){
 if(!isExpert())return toast('Tính năng dành cho chuyên gia.');
 const [kind,postId,parentId]=String(encoded).split(':');
 const post=actualPost(postId,kind);
 if(!post||!(post.comments||[]).some(c=>c.id===parentId))return toast('Không tìm thấy bình luận cần trả lời.');
 showModal(`${modalHead('Chuyên gia trả lời bình luận')}<p>Trong bài viết: <strong>${e(post.title||post.name)}</strong></p><form id="expertReplyForm"><input type="hidden" name="kind" value="${e(kind)}"><input type="hidden" name="postId" value="${e(postId)}"><input type="hidden" name="parentId" value="${e(parentId)}"><div class="field"><label>Nội dung trả lời</label><textarea name="text" maxlength="700" rows="4" required></textarea></div><div class="form-actions"><button class="btn" type="submit">Gửi trả lời</button></div></form>`);
}
function submitExpertReplyV9(data){
 if(!isExpert())return;
 const post=actualPost(data.postId,data.kind),txt=String(data.text||'').trim();
 if(!post||!txt)return;
 post.comments ||= [];
 post.comments.push({id:uid(),parentId:data.parentId,role:'expert',username:state.username,author:state.name,text:txt,status:'pending',date:new Date().toISOString()});
 save();closeModal();render();toast('Đã gửi phản hồi chuyên gia để kiểm duyệt.');
}
function adminUsersV9(){
 const profiles=adminProfiles();
 const lists=(key,field)=>['Tất cả',...new Set(profiles.map(u=>u[field]).filter(Boolean))];
 const goalOptions=lists('goal','goal'),roleOptions=lists('role','role');
 const selected=profiles.filter(x=>(adminFiltersV9.adminRoleFilter==='Tất cả'||x.role===adminFiltersV9.adminRoleFilter)&&(adminFiltersV9.adminGoalFilter==='Tất cả'||x.goal===adminFiltersV9.adminGoalFilter)&&(adminFiltersV9.adminPlanFilter==='Tất cả'||(x.premium?'Premium':'Free')===adminFiltersV9.adminPlanFilter));
 const dropdown=(id,label,options)=>`<label class="admin-filter">${label}<select id="${id}">${options.map(v=>`<option ${adminFiltersV9[id]===v?'selected':''}>${e(v)}</option>`).join('')}</select></label>`;
 return `${title('Hồ sơ người dùng','Tra cứu và lọc hồ sơ theo mục tiêu sức khỏe, vai trò và gói dịch vụ.')}
 <section class="panel"><div class="admin-filter-row">${dropdown('adminGoalFilter','Mục tiêu',goalOptions)}${dropdown('adminRoleFilter','Vai trò',roleOptions)}${dropdown('adminPlanFilter','Gói',['Tất cả','Free','Premium'])}</div><p class="tiny">Đang hiển thị ${selected.length}/${profiles.length} tài khoản.</p><div class="table-wrap"><table><thead><tr><th>TÀI KHOẢN</th><th>TÊN</th><th>NGÀY SINH</th><th>VAI TRÒ</th><th>MỤC TIÊU</th><th>GÓI</th></tr></thead><tbody>${selected.map(x=>`<tr><td>${e(x.username)}</td><td>${e(x.name)}</td><td>${e(x.dob)}</td><td>${e(x.role)}</td><td>${e(x.goal)}</td><td>${x.premium?'Premium':'Free'}</td></tr>`).join('')}</tbody></table></div></section>`;
}
function adminCommentsV9(){
 const all=allCommunityPosts().filter(p=>(p.comments||[]).length);
 return `${title('Kiểm duyệt bình luận','Mỗi bài viết có danh sách bình luận riêng, bao gồm phản hồi của chuyên gia.')}
 ${all.length?all.map(post=>`<section class="panel"><div class="panel-head"><div><h2>${e(post.title)}</h2><p class="tiny">${e(post.author)} · ${(post.comments||[]).length} bình luận</p></div><span class="status">${(post.comments||[]).filter(c=>c.status==='pending').length} chờ duyệt</span></div>${(post.comments||[]).map(c=>`<div class="admin-review-card"><div><strong>${e(c.author)} ${c.role==='expert'?'✦ Chuyên gia':''}</strong>${c.parentId?'<span class="tiny"> · Trả lời bình luận</span>':''}<p>${e(c.text)}</p></div>${adminCardActions('comment-'+post.kind+'-'+post.id,c.id,c.status||'pending',true)}</div>`).join('')}</section>`).join(''):'<section class="panel empty"><p>Chưa có bình luận nào để kiểm duyệt.</p></section>'}`;
}
function adminV9(){
 if(!isAdmin())return '<section class="panel"><p>Không có quyền truy cập.</p></section>';
 if(page==='admin-users')return adminUsersV9();
 if(page==='admin-comments')return adminCommentsV9();
 const section={admin:'overview','admin-experts':'experts','admin-posts':'posts','admin-courses':'courses','admin-revenue':'revenue'}[page]||'overview';
 adminTab=section;
 return adminPage();
}
const AGREEMENT_V9='Hợp đồng hợp tác .theMeal bản thử nghiệm. Chuyên gia cam kết cung cấp thông tin đúng sự thật; mọi bài viết và khóa học cần kiểm duyệt; phí đăng khóa 10%, chiết khấu đăng ký 2% là mô phỏng. Không xác lập hợp đồng điện tử có hiệu lực pháp lý.';
async function signAgreementV9(fullName,username){
 if(!globalThis.crypto?.subtle)return {type:'confirmation',algorithm:'Nhập tên xác nhận — không có chữ ký mật mã',signedAt:new Date().toISOString()};
 const data=new TextEncoder().encode(AGREEMENT_V9+'|'+fullName+'|'+username);
 const keys=await crypto.subtle.generateKey({name:'ECDSA',namedCurve:'P-256'},true,['sign','verify']);
 const signature=await crypto.subtle.sign({name:'ECDSA',hash:'SHA-256'},keys.privateKey,data);
 const pub=await crypto.subtle.exportKey('jwk',keys.publicKey);
 const bytes=new Uint8Array(signature);
 return {type:'ECDSA',algorithm:'xác nhận điện tử / SHA-256 — kiểm thử trình duyệt',publicKey:pub,signature:btoa(String.fromCharCode(...bytes)),contractHash:await sha256(AGREEMENT_V9),signedAt:new Date().toISOString()};
}
async function submitExpertApplicationV9(data){
 const username=state.username;
 if(!String(data.signature||'').trim())return toast('Bạn cần nhập tên xác nhận hợp đồng.');
 const exists=state.expertRequests.find(x=>x.username===username&&x.status==='pending');
 if(exists)return toast('Hồ sơ đã gửi đang chờ duyệt.');
 let signature;
 try{signature=await signAgreementV9(String(data.name||'').trim(),username);}catch(ex){return toast('Không thể thực hiện thao tác ký xác nhận trên trình duyệt này.');}
 submitExpertApplication(data);
 const req=state.expertRequests.find(x=>x.username===username&&x.status==='pending');
 if(req){req.digitalSignature=signature;save();}
}

/* .theMeal v10 – cải tiến quản lý hạn dùng, tài khoản, hội thoại và trải nghiệm. */
const expiryInputGroupsV10 = new Set(['Đồ khô','Gia vị','Sữa']);
let pendingOtpV10 = null;
let registrationOtpV10 = null;
let activeChatBuyerV10 = 'Jessica';

function estimatedDaysV10(group) {
  return ({ 'Thịt':2, 'Hải sản':1, 'Cá':1, 'Rau củ':3, 'Trái cây':3, 'Trứng':14,
    'Sữa':3, 'Đồ khô':30, 'Gia vị':30, 'Khác':2 })[group] || 2;
}
function explicitExpiryV10(group) { return expiryInputGroupsV10.has(group); }
function dateSuggestionV10(food) { return offset(estimatedDaysV10(food.group)); }
function updatePremiumVisibilityV10() {
  const up = document.getElementById('upgradeBtn');
  if (up) up.hidden = !!state.premium || isAdmin();
}
function toggleFoodExpiryV10(){
  const group=document.getElementById('foodGroupV10')?.value || 'Khác';
  const row=document.getElementById('foodExpiryRowV10');
  const input=document.getElementById('foodExpiryInputV10');
  const note=document.getElementById('foodSuggestionNoteV10');
  if(row)row.hidden=!explicitExpiryV10(group);
  if(input)input.required=explicitExpiryV10(group);
  if(note)note.textContent=explicitExpiryV10(group)
    ? 'Hạn sử dụng lấy theo bao bì. .theMeal cũng có thể gợi ý mốc kiểm tra lại; không thay thế nhãn sản phẩm.'
    : `Không cần tự nhập hạn sử dụng. .theMeal đề xuất kiểm tra lại sau ${estimatedDaysV10(group)} ngày kể từ khi thêm sản phẩm.`;
}
function foodForm(id) {
  const f=state.foods.find(x=>x.id===id) || {name:'',group:'Rau củ',qty:100,unit:'g',expiry:'',warn:state.noticeDays};
  const group=f.group==='Cá'?'Hải sản':f.group;
  showModal(`${modalHead(id?'Chỉnh sửa thực phẩm':'Thêm thực phẩm mới')}<form id="foodForm">
    <input type="hidden" name="id" value="${e(id||'')}">
    <div class="form-grid"><div class="field"><label>Tên thực phẩm *</label><input id="foodNameV10" name="name" maxlength="70" value="${e(f.name)}" placeholder="Ví dụ: Tôm tươi" required></div>
    <div class="field"><label>Nhóm thực phẩm</label><select id="foodGroupV10" name="group">${groups.map(g=>`<option ${g===group?'selected':''}>${g}</option>`).join('')}</select></div>
    <div class="field"><label>Số lượng *</label><input name="qty" type="number" step="any" min="0.001" value="${f.qty}" required></div>
    <div class="field"><label>Đơn vị</label><select name="unit">${['g','kg','ml','l','quả','hộp','gói','cái'].map(u=>`<option ${u===f.unit?'selected':''}>${u}</option>`).join('')}</select></div>
    <div class="field" id="foodExpiryRowV10" ${!explicitExpiryV10(group)?'hidden':''}><label>Hạn sử dụng trên bao bì *</label><input id="foodExpiryInputV10" name="expiry" type="date" value="${e(f.expiry)}" ${explicitExpiryV10(group)?'required':''}></div>
    <div class="field"><label>Cảnh báo trước hạn (ngày)</label><input type="number" name="warn" min="0" max="30" value="${f.warn??3}" required></div></div>
    <div class="notice info" id="foodSuggestionNoteV10">${explicitExpiryV10(group)?'Nhập hạn sử dụng trên bao bì. Các hướng dẫn .theMeal chỉ để tham khảo.':`Ngày nhắc kiểm tra được đề xuất sau ${estimatedDaysV10(group)} ngày.`}</div>
    <div class="form-actions"><button type="button" class="btn secondary modal-close">Hủy</button><button class="btn" type="submit">Tiếp tục</button></div></form>`);
}
function handleFoodFormV10(data) {
  const q=Number(data.qty),w=Number(data.warn);
  const detectedGroup=guessGroup(data.name);
  const group = data.group==='Cá'?'Hải sản':(data.group==='Khác'||(data.group==='Rau củ'&&detectedGroup!=='Rau củ'))&&detectedGroup!=='Khác'?detectedGroup:data.group;
  if(!String(data.name||'').trim()||!(q>0)||!Number.isFinite(q)||w<0||w>30) return toast('Kiểm tra tên, số lượng và số ngày cảnh báo.');
  if(!data.id&&!state.premium&&activeFoods().length>=7)return toast('Gói Free đang có đủ 7 sản phẩm.');
  if(explicitExpiryV10(group)&&!data.expiry)return toast('Nhập hạn sử dụng trên nhãn sản phẩm.');
  const existing=state.foods.find(x=>x.id===data.id);
  const suggestedDate=dateSuggestionV10({group});
  const expiry=explicitExpiryV10(group)?data.expiry:existing?.group===group?existing.expiry:suggestedDate;
  pendingFoodV9={id:data.id||uid(),name:String(data.name).trim(),group,qty:q,unit:data.unit,
    expiry, warn:w,made:'',expirySource:explicitExpiryV10(group)?'label':'suggested',
    note:explicitExpiryV10(group)?'HSD theo nhãn':'Ngày kiểm tra lại do hệ thống đề xuất',
    suggestedExpiry:suggestedDate};
  storageChoiceV9();
}
function storageChoiceV9(){
  if(!pendingFoodV9)return;
  const f=pendingFoodV9,explicit=explicitExpiryV10(f.group);
  showModal(`${modalHead('Xác nhận cách bảo quản')}<h3>${e(f.name)}</h3>
    <div class="callout">🌿 ${e(care(f))}</div>
    <p>${explicit?`HSD bạn đã nhập: <b>${date(f.expiry)}</b>. `:''}.theMeal gợi ý <b>mốc kiểm tra lại khoảng ${date(f.suggestedExpiry)}</b> theo nhóm thực phẩm. Mốc này không thay thế thông tin trên bao bì hoặc đánh giá an toàn thực phẩm.</p>
    <div class="option-cards"><button class="option-card" data-action="storage-accept"><strong>✓ ${explicit?'Lưu thực phẩm với HSD bạn đã nhập':'Lưu với ngày kiểm tra đã đề xuất'}</strong><span>${explicit?'Giữ nguyên HSD bạn xác nhận trên bao bì.':'Lưu mốc kiểm tra lại, không coi đây là HSD chính thức.'}</span></button>
    <button class="option-card" data-action="storage-suggested"><strong>✦ .theMeal gợi ý</strong><span>Xem và chọn mốc kiểm tra lại theo nhóm thực phẩm.</span></button></div>
    <div class="row" style="margin-top:14px"><button class="btn secondary small" data-action="storage-decline">Không đồng ý với gợi ý</button></div>`);
}
function saveSuggestedFoodV10(){
  if(!pendingFoodV9)return;
  pendingFoodV9.expiry=pendingFoodV9.suggestedExpiry;
  pendingFoodV9.expirySource='suggested';
  pendingFoodV9.note='Ngày kiểm tra lại theo .theMeal, không phải hạn sử dụng được bảo đảm';
  saveFoodV9();
}
function storageWarningV9(){
 if(!pendingFoodV9)return;
 const f=pendingFoodV9;
 showModal(`${modalHead('Cảnh báo thời gian bảo quản')}<div class="notice">Thời gian bảo quản tham khảo của <b>${e(f.name)}</b> có thể chỉ khoảng <b>${estimatedDaysV10(f.group)} ngày</b>, tùy điều kiện và trạng thái thực phẩm. Bạn có muốn tiếp tục lưu theo cách hiện tại không?</div>
 <p>Ưu tiên nhãn sản phẩm, nhiệt độ bảo quản và dấu hiệu hư hỏng. Hệ thống không bảo đảm thực phẩm còn an toàn chỉ dựa trên số ngày.</p><div class="form-actions"><button class="btn secondary" data-action="storage-return">Quay lại</button><button class="btn" data-action="storage-continue">Tiếp tục</button></div>`);
}
function status(f){
 const d=days(f);if(f.expirySource==='suggested')return d<0?['Quá mốc kiểm tra','warn']:d===0?['Kiểm tra hôm nay','warn']:['Kiểm tra sau '+d+' ngày',d<=Number(f.warn)?'warn':''];
 return d<0?['Đã quá HSD','expired']:d===0?['Hết hạn hôm nay','warn']:d<=Number(f.warn)?['Còn '+d+' ngày','warn']:['Còn hạn',''];
}
function foodTable(foods,limit=false){
 if(!foods.length)return `<div class="empty"><h3>Chưa có thực phẩm</h3><p>Hãy thêm nguyên liệu đầu tiên vào tủ lạnh.</p><button class="btn" data-action="add-food">+ Thêm thực phẩm</button></div>`;
 return `<div class="table-wrap"><table><thead><tr><th>THỰC PHẨM</th><th>SỐ LƯỢNG</th><th>HSD</th><th>TRẠNG THÁI</th><th>THAO TÁC</th></tr></thead><tbody>${foods.slice(0,limit?5:undefined).map(f=>`<tr><td><div class="food-cell"><span class="emoji">${icons[f.group]||'📦'}</span><div>${e(f.name)}<div class="tiny">${e(f.group==='Cá'?'Hải sản':f.group)}</div></div></div></td><td>${f.qty} ${e(f.unit)}</td><td>${date(f.expiry)}<div class="tiny">${f.expirySource==='suggested'?'Đề xuất kiểm tra lại':'Theo hạn sử dụng trên nhãn'}</div></td><td><span class="status ${status(f)[1]}">${status(f)[0]}</span></td><td><div class="actions"><button class="mini-btn" title="Sửa" data-action="edit-food" data-id="${e(f.id)}">✎</button><button class="mini-btn" title="Sử dụng" data-action="use-food" data-id="${e(f.id)}">−</button><button class="mini-btn" title="Xóa" data-action="remove-food" data-id="${e(f.id)}">×</button></div></td></tr>`).join('')}</tbody></table></div>`;
}
function sendOtpV10(){
 const method=document.getElementById('registerMethod')?.value||'email';
 const contact=String(document.getElementById('registerContact')?.value||'').trim().toLowerCase();
 const out=document.getElementById('registerOtpNotice');
 if(!contact){out.textContent='Hãy nhập email hoặc số điện thoại nếu muốn xác nhận bằng OTP.';return;}
 if(method==='phone'&&!/^0[0-9]{9}$/.test(contact.replace(/\s/g,''))){out.textContent='Số điện thoại phải có 10 chữ số, bắt đầu bằng 0.';return;}
 if(method!=='phone'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)){out.textContent='Địa chỉ email chưa hợp lệ.';return;}
 let code;
 if(globalThis.crypto?.getRandomValues){const bytes=new Uint32Array(1);globalThis.crypto.getRandomValues(bytes);code=String(100000+bytes[0]%900000);}else code=String(Math.floor(100000+Math.random()*900000));
 registrationOtpV10={method,contact,code,issued:Date.now()};
 out.innerHTML=`<strong>Mã OTP để kiểm tra: ${code}</strong><br>Chưa kết nối gửi SMS/email; mã chỉ hiển thị trên màn hình này và có hiệu lực 5 phút.`;
 document.getElementById('registerOtpInput')?.focus();
}
async function registerWithOtpV10(data){
 const contact=String(data.contact||'').trim().toLowerCase();
 const error=document.getElementById('registerError');
 if(contact){const tok=registrationOtpV10;if(!tok||tok.contact!==contact||tok.method!==data.method||Date.now()-tok.issued>300000||String(data.otp||'').trim()!==tok.code){error.textContent='Cần xác nhận mã OTP hợp lệ trước khi tạo tài khoản.';return;}}
 error.textContent='';await handleRegister(data);
 registrationOtpV10=null;
}

function registeredChatPairsV10(){
 const tx=(state.transactions||[]).filter(t=>t.kind==='course'&&t.buyer&&t.seller&&t.courseId);
 const pairs=new Map();
 for(const t of tx){const key=t.buyer+'|'+t.seller;if(!pairs.has(key))pairs.set(key,{buyer:t.buyer,seller:t.seller,course:t.title});}
 return [...pairs.values()];
}
function availableChatPairsV10(){return registeredChatPairsV10().filter(p=>isExpert()?p.seller===state.username:p.buyer===state.username);}
function chatContextV10(){
 const pairs=availableChatPairsV10();
 return isExpert()?(pairs.find(p=>p.buyer===activeChatBuyerV10)||pairs[0]||null):(pairs[0]||null);
}
function messagesForV10(pair){
 if(!pair)return [];
 return (state.messages||[]).filter(m=>(m.buyer||'Jessica')===pair.buyer && (m.seller||'Taeyeon')===pair.seller);
}
function markChatReadV10(){
 const pair=chatContextV10();if(!pair)return;
 state.messageReads ||= {};
 state.messageReads[state.username+'|'+pair.buyer+'|'+pair.seller]=messagesForV10(pair).length;
 save();
}
function countStatus(){
 const b=document.getElementById('fridgeCount');if(b)b.textContent=activeFoods().length;
 const badge=document.getElementById('messageCount');if(!badge)return;
 const unread=availableChatPairsV10().reduce((n,p)=>{
   const msgs=messagesForV10(p),last=Number(state.messageReads?.[state.username+'|'+p.buyer+'|'+p.seller]||0);
   return n+msgs.slice(last).filter(m=>(m.from==='expert')!==isExpert()).length;
 },0);
 badge.textContent=unread||'';badge.hidden=!unread;
}
function messagesPage(){
 const pair=chatContextV10(),pairs=availableChatPairsV10();
 if(!pair)return `${title('Trò chuyện với chuyên gia','Trò chuyện chỉ mở khi bạn đã đăng ký một khóa học.')}<section class="panel empty"><div class="big">🔒</div><h3>Chưa có khóa học đã đăng ký</h3><p>Đăng ký một khóa học trong mục Chuyên gia & khóa học để bắt đầu trao đổi với giảng viên. Nội dung trò chuyện không được chia sẻ giữa các tài khoản không liên quan.</p><button class="btn" data-page="experts">Khám phá khóa học</button></section>`;
 const mate=isExpert()?pair.buyer:pair.seller;
 const icon=DEMO_USERS[mate]?.avatar||'assets/avatar-default.svg';
 const history=messagesForV10(pair);
 const tabs=isExpert()&&pairs.length>1?`<div class="chat-participants">${pairs.map(p=>`<button type="button" class="btn ${p.buyer===pair.buyer?'':'secondary'} small" data-action="select-chat-buyer" data-id="${e(p.buyer)}">${e(p.buyer)}</button>`).join('')}</div>`:'';
 return `${title('Trò chuyện','Trao đổi giữa học viên và chuyên gia của khóa học đã đăng ký.')}
 <div class="chat-shell"><aside class="chat-sidebar-card"><div class="mini-profile"><img src="${e(icon)}" class="profile-photo" style="width:70px;height:70px;border-radius:18px" alt="Ảnh đại diện"><div><span class="role-badge">${isExpert()?'Học viên':'Chuyên gia'}</span><h2>${e(mate)}</h2></div></div><p class="subtitle" style="margin-top:14px">Khóa học: ${e(pair.course)}</p>${tabs}<button class="btn secondary" data-page="experts">Xem khóa học</button></aside>
 <section class="chat-main"><header class="chat-header"><div><h2>${e(mate)}</h2><p>Hội thoại riêng theo đăng ký khóa học</p></div></header>
 <div class="chat-body" id="chatBody">${history.length?history.map(m=>`<div class="bubble-wrap ${m.from===(isExpert()?'expert':'user')?'me':'other'}"><div class="bubble-name">${m.from===(isExpert()?'expert':'user')?'Bạn':e(mate)}</div><div class="bubble">${e(m.text)}</div><div class="bubble-time">${formatMessageTime(m.time)}</div></div>`).join(''):'<div class="chat-empty">Chưa có tin nhắn trong hội thoại này.</div>'}</div>
 <form id="chatForm" class="chat-form"><div class="chat-form-inner"><textarea name="text" maxlength="1000" rows="2" placeholder="Nhập tin nhắn ..." required></textarea><button class="btn">Gửi</button></div></form></section></div>`;
}
function submitChatV10(data){
 const pair=chatContextV10();if(!pair)return toast('Bạn cần đăng ký khóa học để trò chuyện.');
 const t=String(data.text||'').trim();if(!t)return toast('Vui lòng nhập nội dung tin nhắn.');
 state.messages.push({id:uid(),buyer:pair.buyer,seller:pair.seller,from:isExpert()?'expert':'user',text:t,time:new Date().toISOString()});
 markChatReadV10();save();render();
}
function expertsV10(){
 if(courseTab==='recommended')return `${title('Dành cho bạn','Khóa học được chọn dựa trên mục tiêu sức khỏe bạn đã khai báo.')}
 <div class="pill-tabs"><button class="btn secondary" data-action="expert-tab" data-tab="courses">Khám phá khóa học</button><button class="btn secondary" data-action="expert-tab" data-tab="dashboard">${isExpert()?'Không gian chuyên gia':'Đăng ký chuyên gia'}</button><button class="btn" data-action="expert-tab" data-tab="recommended">Dành cho bạn</button></div><section class="panel"><h2>Gợi ý từ hồ sơ sức khỏe</h2><p class="subtitle">Mục tiêu: ${e(state.goal)}. Gợi ý theo nội dung khóa học, không dùng BMI để chẩn đoán.</p>${courseRecommendationV9()}</section>`;
 const base=expertsPage();
 return base.replace('</div></div>', '</div></div>')
  .replace(/(<div class="pill-tabs">)/,`$1<button data-action="expert-tab" data-tab="recommended">Dành cho bạn</button>`);
}
function settingsV10(){
 return settingsV9().replace('<section class="panel course-reco">','<section class="panel course-reco"><button class="btn" data-action="expert-recommendations">Xem khóa học dành cho bạn →</button>');
}
function adminV10(){
 return adminV9().replaceAll('','').replaceAll('quản trị viên Tiffany','quản trị viên');
}
function scrubLabelsV10(root){
 if(!root)return;
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;
 while((node=walker.nextNode())){
  const current=node.textContent;
  if(!/mô phỏng|\bdemo\b|thử nghiệm|Tiffany/iu.test(current))continue;
  node.textContent=current.replace(/mô phỏng|\bdemo\b|thử nghiệm/giu,'').replace(/\bTiffany\b/g,'quản trị viên').replace(/[ ]{2,}/g,' ').replace(/\(\s*\)/g,'').trim();
 }
}

// Global listeners
document.addEventListener('keydown',ev=>{
  if(ev.key==='Escape' && document.getElementById('modalRoot')){ev.preventDefault();closeModal();}
  if(ev.key==='Enter' && ev.target.matches('#chatForm textarea') && !ev.shiftKey){ev.preventDefault();document.getElementById('chatForm')?.requestSubmit();}
});

document.addEventListener('click', ev => {
  const p = ev.target.closest('[data-page]');
  if (p) { ev.preventDefault(); return nav(p.dataset.page); }
  const a = ev.target.closest('[data-action]');
  if (a && a.tagName !== 'INPUT') { ev.preventDefault(); return clickAction(a.dataset.action, a.dataset.id, a); }
  if (ev.target.closest('.modal-close')) return closeModal();
});

document.addEventListener('change', ev => {
  const el = ev.target;
  if (el.id === 'adminRoleFilter' || el.id === 'adminGoalFilter' || el.id === 'adminPlanFilter') {adminFiltersV9[el.id]=el.value;render();return;}
  if (el.id === 'expertPostType') { const row=document.getElementById('expertPostPriceRow'); if(row) row.hidden=el.value!=='course';return;}
  if (el.id === 'registerMethod') { registrationOtpV10=null;toggleRegisterMethod();return; }
  if (el.id==='avatarUpload') {void useAvatarFile(el.files?.[0]);return;}
  if (el.id==='backupImport') {void importDemoData(el.files?.[0]);return;}
  if (el.id === 'dailyDatePicker') { selectDay(el.value); return; }
  if (el.id === 'foodGroupV10') {toggleFoodExpiryV10();return;}
  if (el.id === 'fridgeFilter') { fridgeFilter = el.value; render(); }
  if (el.id === 'recipeGoal') { recipeGoal = el.value; render(); }
  if (false && (el.id === 'scanUpload' || el.id === 'scanCamera')) {
    const file=el.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) { toast('Vui lòng chọn tệp hình ảnh.'); return; }
      if (file.size>8*1024*1024) { toast('Ảnh phải nhỏ hơn 8 MB.'); return; }
      if (scanPreviewUrl) URL.revokeObjectURL(scanPreviewUrl);
      scanPreviewUrl=URL.createObjectURL(file);
      scanFileName=file.name;
      scanAnalysed=false;
      render();
      toast('Đã chọn ảnh. Hãy nhập tên món để phân tích mô phỏng.');
    }
  }

  if (el.dataset.action === 'check-shopping') clickAction('check-shopping', el.dataset.id, el);
  if (el.dataset.action === 'qty-shopping') {
    const x = state.shopping.find(x => x.id === el.dataset.id);
    if (x) { x.qty = Math.max(0, Number(el.value) || 0); save(); render(); }
  }
});

document.addEventListener('input', ev => {
  const el = ev.target;
  if(el.id==='foodNameV10'){const group=document.getElementById('foodGroupV10');if(group){const g=guessGroup(el.value);if(g!=='Khác'){group.value=g;toggleFoodExpiryV10();}}}
  if (el.id === 'fridgeSearch') { fridgeQuery = el.value; const pos = el.selectionStart; render(); const current = document.getElementById('fridgeSearch'); current.focus(); current.setSelectionRange(pos, pos); }
  if (el.id === 'recipeSearch') { recipeQuery = el.value; const pos = el.selectionStart; render(); const current = document.getElementById('recipeSearch'); current.focus(); current.setSelectionRange(pos, pos); }
});

document.addEventListener('submit', ev => {
  ev.preventDefault();
  const form = ev.target;
  const data = Object.fromEntries(new FormData(form));
  if (form.getAttribute('id') === 'loginForm') { void handleLogin(data); return; }
  if (form.getAttribute('id') === 'registerForm') { void registerWithOtpV10(data); return; }
  if (form.getAttribute('id') === 'onboardingForm') { handleOnboard(data); return; }
  if (form.getAttribute('id') === 'workoutForm') { saveWorkout(data); return; }
  if (form.getAttribute('id') === 'bankForm') { saveBank(data); return; }
  if (form.getAttribute('id') === 'commentForm') { submitComment(data); return; }
  if (form.getAttribute('id') === 'expertReplyForm') { submitExpertReplyV9(data); return; }
  if (form.getAttribute('id') === 'dailyPlanForm') { if(storePlanData(data)){render();toast('Đã lưu kế hoạch cho '+vnDay(selectedDate,false)+'.');}return; }
  if (form.getAttribute('id') === 'dailyDiaryForm') { storeDiaryMeals(data);render();toast('Đã lưu nhật ký bữa ăn.');return; }
  if (form.getAttribute('id') === 'activityForm') { if(addActivity(data)){render();toast('Đã thêm hoạt động vận động.');}return; }
  if (form.getAttribute('id') === 'foodForm') { handleFoodFormV10(data); return; }
  if (form.getAttribute('id') === 'useFoodForm') {
    const x = state.foods.find(y => y.id === data.id); if (!x) return;
    const q = Number(data.qty);
    if (q <= 0 || q > x.qty) { toast('Số lượng sử dụng không hợp lệ.'); return; }
    x.qty -= q; syncShoppingV9();save(); closeModal(); render(); toast('Đã trừ lượng thực phẩm đã sử dụng.'); return;
  }
  if (form.getAttribute('id') === 'stockConfirmForm') { confirmStockShopping(data); return; }
  if (form.getAttribute('id') === 'shoppingForm') { state.shopping.push({ id: uid(), name: data.name.trim(), group: guessGroup(data.name), qty: Number(data.qty), unit: data.unit, source:'manual', done: false }); save(); closeModal(); render(); toast('Đã thêm mặt hàng.'); return; }
  if (form.getAttribute('id') === 'expertForm') { void submitExpertApplicationV9(data); return; }
  if (form.getAttribute('id') === 'courseForm') { submitCourse(data); return; }
  if (form.getAttribute('id') === 'postForm') { submitExpertPostV9(data); return; }
  if (form.getAttribute('id') === 'communityForm') { submitCommunityPost(data); return; }
  if (form.getAttribute('id') === 'chatForm') { return submitChatV10(data); }
  if (form.getAttribute('id') === 'miuForm') {
    state.miuUsage ||= {};
    const usageKey=state.username+'|'+localDayKey(),used=Number(state.miuUsage[usageKey]||0);
    if (!state.premium && used>=3) {toast('Gói Free đã dùng hết 3 lượt gợi ý hôm nay. Hãy thử vào ngày khác hoặc chọn Premium.');return;}
    miuQuery=String(data.query||'').trim();miuGoal=data.goal;
    if(!state.premium)state.miuUsage[usageKey]=used+1;
    save();
    if(state.premium){miuHasRun=true;render();toast('Miu đã gợi ý theo kho công thức mẫu.');}
    else {toast('Miu đang xử lý trong chế độ Free...');setTimeout(()=>{miuHasRun=true; if(page==='miu')render();toast('Miu đã hoàn tất gợi ý (demo).');},700);}
    return;
  }
  if (false && form.getAttribute('id') === 'scanForm') {
    if (!scanPreviewUrl) {toast('Hãy tải ảnh hoặc chụp ảnh trước.');return;}
    scanManualFood=String(data.food||'').trim();
    if (!scanManualFood) {toast('Bạn hãy nhập tên món hoặc nguyên liệu.');return;}
    scanAnalysed=true;render();return;
  }
  if (form.getAttribute('id') === 'healthForm') {
    const profile={};
    for (const key of ['height','weight','chest','waist','hips','arm','thigh']) {
      const v=safeNum(data[key]);
      if (v!==null && (!Number.isFinite(v) || v<=0)) {toast('Vui lòng nhập số đo hợp lệ.');return;}
      profile[key]=v;
    }
    if ((profile.height!==null && (profile.height<70||profile.height>240)) || (profile.weight!==null && (profile.weight<10||profile.weight>350))) {toast('Kiểm tra lại chiều cao và cân nặng.');return;}
    state.healthProfiles[state.username]=profile;save();render();toast('Đã lưu hồ sơ sức khỏe cho tài khoản này.');return;
  }
  if (form.getAttribute('id') === 'settingsForm') {
    state.name = data.name.trim();
    state.goal = data.goal;
    state.noticeDays = Number(data.noticeDays);
    state.profileImage = data.profileImage;
    save(); updateShell(); render(); toast('Đã cập nhật hồ sơ và mục tiêu.'); return;
  }
});

document.getElementById('menuBtn').onclick = () => { document.getElementById('sidebar').classList.add('open'); document.getElementById('overlay').classList.add('show'); };
document.getElementById('overlay').onclick = () => { document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); };
document.getElementById('upgradeBtn').onclick = () => planModal();
document.getElementById('avatarBtn').onclick = () => nav('settings');
document.getElementById('notificationsBtn').onclick = showNotificationsV11;
window.addEventListener('hashchange', () => nav(location.hash.slice(1)));


/* ======================== .theMeal v11 ========================
   Môi trường tương tác cục bộ. Không có xác thực/OTP, thanh toán,
   hoặc chữ ký số có chứng thư CA trên máy chủ. Không nhập dữ liệu thật.
================================================================ */
function initStoreV11(){
 state.agreementsV11 ||= [];
 state.supportTicketsV11 ||= [];
 state.noticesV11 ||= [];
 state.customRecipesV11 ||= [];
 state.removedRecipesV11 ||= [];
 state.lastAdminNewUsersV11 ||= 0;
}
function initializeV11(){
 initStoreV11();
 const gone=new Set(state.removedRecipesV11);
 for(let i=recipes.length-1;i>=0;i--)if(gone.has(recipes[i].id))recipes.splice(i,1);
 for(const item of state.customRecipesV11) {if(gone.has(item.id))continue; const ix=recipes.findIndex(r=>r.id===item.id);if(ix>=0)recipes.splice(ix,1,item);else recipes.push(item);}
 // Giữ 3 tài khoản thiết lập sẵn để trình diễn phân quyền.
 save();
}
function newNoticeV11(recipient,text,kind='general'){
 initStoreV11();
 state.noticesV11.unshift({id:uid(),recipient,kind,text,createdAt:new Date().toISOString(),seen:false});
}
function ownNoticesV11(){return (state.noticesV11||[]).filter(n=>n.recipient===state.username);}
function adminPendingV11(){
 const posts=allCommunityPosts();
 return {
   experts:state.expertRequests.filter(r=>r.status==='pending').length,
   posts:posts.filter(p=>p.status==='pending').length,
   comments:posts.reduce((sum,p)=>sum+(p.comments||[]).filter(c=>c.status==='pending').length,0),
   courses:state.courses.filter(c=>c.status==='pending').length,
   newUsers:Object.keys(state.registeredUsers||{}).length,
   support:(state.supportTicketsV11||[]).filter(t=>t.status!=='closed').length,
   contracts:(state.agreementsV11||[]).filter(a=>a.stage==='awaiting-admin').length
 };
}
function countStatus(){
 const fc=document.getElementById('fridgeCount');if(fc)fc.textContent=activeFoods().length;
 const mc=document.getElementById('messageCount');
 if(mc){const pairs=availableChatPairsV10(); const count=pairs.reduce((n,p)=>n+messagesForV10(p).filter(m=>m.from!==(isExpert()?'expert':'user')&&Date.parse(m.time||0)>Number(state.messageReads?.[state.username]||0)).length,0);mc.textContent=count||'';mc.hidden=!count;}
 const support=document.getElementById('supportCountV11');
 if(support){const n=(state.supportTicketsV11||[]).filter(t=>t.username===state.username&&t.messages.some(m=>m.sender==='admin'&&!m.readByUser)).length; support.textContent=n||'';support.hidden=!n;}
}
function showNotificationsV11(){
 if(isAdmin()){
  const n=adminPendingV11();
  return showModal(`${modalHead('Thông báo quản trị')}<div class="admin-notice-grid">${[
    ['Bài viết cần kiểm duyệt',n.posts,'admin-posts'],['Bình luận cần kiểm duyệt',n.comments,'admin-comments'],['Hồ sơ chuyên gia',n.experts,'admin-experts'],['Khóa học chờ duyệt',n.courses,'admin-courses'],['Người tham gia mới',n.newUsers,'admin-users'],['Yêu cầu CSKH',n.support,'admin-support'],['Hợp đồng chờ xác nhận',n.contracts,'admin-contracts']
  ].map(([x,v,p])=>`<button class="notice-item" data-page="${p}"><strong>${v}</strong><span>${x}</span></button>`).join('')}</div>`);
 }
 const notices=ownNoticesV11();
 const warning=expiring();
 state.noticesV11.forEach(n=>{if(n.recipient===state.username)n.seen=true;});save();
 showModal(`${modalHead('Thông báo của bạn')}${notices.map(n=>`<div class="notice-line"><strong>${e(n.text)}</strong><small>${new Date(n.createdAt).toLocaleString('vi-VN')}</small></div>`).join('')||'<p>Chưa có thông báo cá nhân.</p>'}${warning.length?`<div class="notice">Có ${warning.length} thực phẩm cần kiểm tra.</div>`:''}`);
}
function updateShellV11(){
 document.body.classList.toggle('admin-mode-v12',isAdmin());
 const avatar=document.getElementById('topAvatarImage');
 if(avatar && isAdmin())avatar.src='assets/avatar-jessica.svg';
 if(avatar&&!avatar.getAttribute('src')?.startsWith('data:')){
   const src=avatar.getAttribute('src')||'';
   if(src.startsWith('assets/'))avatar.onerror=()=>{avatar.onerror=null;avatar.src='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="#d6f3df"/><circle cx="40" cy="30" r="15" fill="#3a9870"/><path d="M14 73c1-24 13-30 26-30s25 6 26 30" fill="#3a9870"/></svg>')};
 }
 const badge=document.getElementById('noticeDot');
 if(badge){const c=isAdmin()?Object.values(adminPendingV11()).reduce((a,b)=>a+b,0):ownNoticesV11().filter(n=>!n.seen).length+expiring().length;badge.style.display=c?'block':'none';}
 countStatus();
}
function registerOtpNoticeV11(){
 const el=document.getElementById('registerOtpNotice');
 if(el)el.textContent='Mã OTP là bước kiểm tra giao diện; bạn có thể nhập bất kỳ ký tự nào. Hệ thống không gửi mã xác thực thật.';
 const inp=document.getElementById('registerOtpInput');if(inp)inp.removeAttribute('pattern');
}
function sendOtpV10(){registerOtpNoticeV11();document.getElementById('registerOtpInput')?.focus();}
async function registerWithOtpV10(data){
 const pass=String(data.password||'');
 const error=document.getElementById('registerError');
 if(!pass||pass.length<4){error.textContent='Mật khẩu cần có ít nhất 4 ký tự.';return;}
 if(pass!==String(data.passwordConfirm||'')){error.textContent='Mật khẩu nhập lại chưa trùng khớp.';return;}
 // OTP giả định: bất kỳ nội dung nào đều được chấp nhận, không xác minh sở hữu email/số điện thoại.
 error.textContent='';
 await handleRegister(data);
 registrationOtpV10=null;
}
function supportV11(){
 const tickets=(state.supportTicketsV11||[]).filter(t=>t.username===state.username).slice().reverse();
 for(const t of tickets)for(const m of t.messages)if(m.sender==='admin')m.readByUser=true;
 save();
 return `${title('CSKH hệ thống','Gửi phản ánh, câu hỏi hoặc yêu cầu hỗ trợ tới bộ phận quản trị.',`<button class="btn" data-action="support-new">+ Gửi yêu cầu</button>`)}
 <section class="panel"><h2>Yêu cầu của bạn</h2><p class="subtitle">Bộ phận CSKH tiếp nhận và phản hồi trong môi trường hiện tại.</p>
 ${tickets.length?tickets.map(t=>`<article class="ticket"><div class="row"><h3>${e(t.subject)}</h3><span class="status ${t.status==='closed'?'':'warn'}">${t.status==='closed'?'Đã xử lý':'Đang tiếp nhận'}</span></div><p class="tiny">Mã: ${e(t.id.slice(0,8))} · ${new Date(t.createdAt).toLocaleString('vi-VN')}</p>${t.messages.map(m=>`<div class="ticket-message ${m.sender==='admin'?'agent':''}"><b>${m.sender==='admin'?'CSKH hệ thống':'Bạn'}</b><p>${e(m.text)}</p></div>`).join('')}<button class="btn secondary small" data-action="support-reply" data-id="${e(t.id)}" ${t.status==='closed'?'disabled':''}>Phản hồi</button></article>`).join(''):'<div class="empty">Bạn chưa gửi yêu cầu hỗ trợ nào.</div>'}</section>`;
}
function supportFormV11(ticketId=''){
 const ticket=(state.supportTicketsV11||[]).find(t=>t.id===ticketId);
 if(ticket&&ticket.username!==state.username&&!isAdmin())return;
 showModal(`${modalHead(ticket?'Phản hồi yêu cầu CSKH':'Gửi yêu cầu hỗ trợ')}<form id="supportFormV11"><input type="hidden" name="ticketId" value="${e(ticketId)}">
 ${!ticket?'<div class="field"><label>Chủ đề *</label><input name="subject" required maxlength="120" placeholder="Ví dụ: Khóa học hoặc tài khoản"></div>':''}
 <div class="field"><label>Nội dung *</label><textarea name="message" required rows="5" maxlength="1800" placeholder="Mô tả vấn đề bạn gặp phải..."></textarea></div><div class="form-actions"><button class="btn secondary modal-close" type="button">Hủy</button><button class="btn" type="submit">Gửi yêu cầu</button></div></form>`);
}
function submitSupportV11(d){
 const text=String(d.message||'').trim();if(!text)return;
 initStoreV11();let t=state.supportTicketsV11.find(x=>x.id===d.ticketId);
 if(t){if(t.username!==state.username||t.status==='closed')return;t.messages.push({sender:'user',text,time:new Date().toISOString()});}
 else {const subject=String(d.subject||'').trim();if(!subject)return;t={id:uid(),username:state.username,name:state.name,subject,status:'open',createdAt:new Date().toISOString(),messages:[{sender:'user',text,time:new Date().toISOString()}]};state.supportTicketsV11.push(t);}
 save();closeModal();render();toast('Yêu cầu đã được chuyển tới CSKH hệ thống.');
}
function supportReplyAdminV11(d){
 if(!isAdmin())return;
 const t=state.supportTicketsV11.find(x=>x.id===d.ticketId);if(!t)return;
 const text=String(d.message||'').trim();if(!text)return;
 t.messages.push({sender:'admin',text,time:new Date().toISOString(),readByUser:false});
 if(d.resolve==='yes')t.status='closed';
 newNoticeV11(t.username,'CSKH đã phản hồi yêu cầu “'+t.subject+'”.','support');
 save();closeModal();render();toast('Đã gửi phản hồi CSKH.');
}
function supportReplyFormAdminV11(id){
 const t=state.supportTicketsV11.find(x=>x.id===id);if(!t)return;
 showModal(`${modalHead('Trả lời yêu cầu CSKH')}<p><b>${e(t.name)}</b> · ${e(t.subject)}</p><form id="supportAdminFormV11"><input type="hidden" name="ticketId" value="${e(id)}"><div class="field"><label>Nội dung phản hồi</label><textarea name="message" maxlength="1800" rows="5" required></textarea></div><label class="checkrow"><input type="checkbox" name="resolve" value="yes"> Đánh dấu đã xử lý sau khi gửi</label><button class="btn" type="submit">Gửi phản hồi</button></form>`);
}
function contractsForUserV11(){return (state.agreementsV11||[]).filter(a=>a.buyer===state.username||a.seller===state.username);}
function contractStatusV11(a){return a.stage==='completed'?'Ba bên đã xác nhận':a.stage==='awaiting-expert'?'Chờ chuyên gia xác nhận':a.stage==='awaiting-admin'?'Chờ nền tảng xác nhận':'Chưa hoàn tất';}
function contractCardV11(a){
 const isBuyer=a.buyer===state.username, expert=a.seller===state.username;
 return `<article class="contract-card"><div class="row"><div><h3>${e(a.title)}</h3><p class="tiny">Mã ${e(a.id)} · Học viên: ${e(a.buyer)} · Chuyên gia: ${e(a.seller)} · ${money(a.amount)}</p></div><span class="status ${a.stage==='completed'?'':'warn'}">${contractStatusV11(a)}</span></div>
 <div class="contract-signers"><span class="${a.signatures.buyer?'signed':''}">✓ Học viên</span><span class="${a.signatures.expert?'signed':''}">✓ Chuyên gia</span><span class="${a.signatures.platform?'signed':''}">✓ Nền tảng</span></div>
 <div class="actions"><button class="btn secondary small" data-action="contract-view-v11" data-id="${e(a.id)}">Xem hợp đồng</button>${expert&&a.stage==='awaiting-expert'?`<button class="btn small" data-action="contract-expert-v11" data-id="${e(a.id)}">Ký xác nhận</button>`:''}</div></article>`;
}
function contractArchiveV11(role){
 const items=role==='admin'?(state.agreementsV11||[]):contractsForUserV11();
 return `<section class="panel"><div class="panel-head"><div><h2>Hợp đồng khóa học</h2><p class="subtitle">Hồ sơ xác nhận ba bên được lưu tại tài khoản học viên, chuyên gia và quản trị.</p></div><span class="status">${items.length} hợp đồng</span></div>${items.length?items.slice().reverse().map(contractCardV11).join(''):'<div class="empty">Chưa có hợp đồng khóa học.</div>'}</section>`;
}
function contractTermsV11(a){return `<div class="agreement-document"><h3>Thỏa thuận tham gia khóa học .theMeal</h3><p><strong>Khóa học:</strong> ${e(a.title)}. <strong>Học phí:</strong> ${money(a.amount)}.</p><p><strong>Học viên:</strong> ${e(a.buyer)} · <strong>Chuyên gia:</strong> ${e(a.seller)} · <strong>Nền tảng:</strong> .theMeal.</p>
 <p>1. Chuyên gia cam kết cung cấp nội dung và thời hạn theo khóa học đã công bố.</p><p>2. Học viên xác nhận đã đọc nội dung, học phí, quyền và trách nhiệm của các bên.</p><p>3. Nền tảng ghi nhận quyền truy cập sau khi đủ ba xác nhận.</p><p>4. Chữ ký ở đây là <b>xác nhận điện tử trên trình duyệt</b>, không phải chữ ký số được cấp chứng thư CA; không làm phát sinh nghĩa vụ thanh toán thật.</p></div>`;}
function contractViewV11(id){const a=state.agreementsV11.find(x=>x.id===id);if(!a)return;if(!isAdmin()&&a.buyer!==state.username&&a.seller!==state.username)return;
 showModal(`${modalHead('Hợp đồng ba bên')}${contractTermsV11(a)}<div class="contract-signers"><span class="${a.signatures.buyer?'signed':''}">Học viên: ${e(a.signatures.buyer?.name||'Chưa ký')}</span><span class="${a.signatures.expert?'signed':''}">Chuyên gia: ${e(a.signatures.expert?.name||'Chưa ký')}</span><span class="${a.signatures.platform?'signed':''}">Nền tảng: ${e(a.signatures.platform?.name||'Chưa ký')}</span></div><p class="tiny">${contractStatusV11(a)}. Mỗi xác nhận ghi thời gian theo đồng hồ thiết bị.</p>`);
}
function paymentConfirm(id){
 if(isAdmin()||isExpert())return toast('Chỉ học viên có thể đăng ký khóa học.');
 const c=approvedCourses().find(x=>x.id===id);if(!c)return toast('Khóa học chưa được duyệt.');
 if(state.transactions.some(t=>t.buyer===state.username&&t.courseId===id)||state.agreementsV11?.some(a=>a.buyer===state.username&&a.courseId===id))return toast('Bạn đã đăng ký hoặc đang chờ xác nhận hợp đồng.');
 const a={id:'HD-'+uid().slice(-8).toUpperCase(),courseId:c.id,title:c.title,amount:Number(c.price),buyer:state.username,seller:c.username||'Taeyeon',stage:'draft',createdAt:new Date().toISOString(),signatures:{}};
 showModal(`${modalHead('Đăng ký khóa học và ký hợp đồng')}${contractTermsV11(a)}<form id="enrollContractFormV11"><input type="hidden" name="courseId" value="${e(id)}"><label class="checkrow"><input type="checkbox" name="read" value="yes" required> Tôi đã đọc và đồng ý với nội dung hợp đồng</label><div class="field"><label>Ký xác nhận bằng tên học viên *</label><input name="signature" maxlength="90" placeholder="Xác nhận" required></div><p class="tiny">Sau khi học viên xác nhận, chuyên gia và quản trị viên sẽ ký duyệt. Quyền học và trò chuyện được mở khi hợp đồng hoàn tất.</p><button class="btn" type="submit">Ký và gửi hợp đồng</button></form>`,'plan-modal');
}
function signBuyerV11(d){
 if(isAdmin()||isExpert())return;
 const c=approvedCourses().find(x=>x.id===d.courseId);if(!c)return;
 if(!String(d.signature||'').trim()||d.read!=='yes')return toast('Hãy đọc và ký xác nhận hợp đồng.');
 if(state.agreementsV11.some(a=>a.courseId===c.id&&a.buyer===state.username))return toast('Hợp đồng này đang được xử lý.');
 const a={id:'HD-'+uid().slice(-8).toUpperCase(),courseId:c.id,title:c.title,amount:Number(c.price),buyer:state.username,seller:c.username||'Taeyeon',stage:'awaiting-expert',createdAt:new Date().toISOString(),signatures:{buyer:{name:d.signature.trim(),time:new Date().toISOString()}}};
 state.agreementsV11.push(a);newNoticeV11(a.seller,'Học viên '+a.buyer+' đã gửi hợp đồng khóa học “'+a.title+'” để ký xác nhận.','contract');save();closeModal();nav('settings');toast('Đã ký xác nhận. Hợp đồng được chuyển đến chuyên gia.');
}
function signExpertV11(id){
 if(!isExpert())return;
 const a=state.agreementsV11.find(x=>x.id===id&&x.seller===state.username&&x.stage==='awaiting-expert');if(!a)return;
 showModal(`${modalHead('Chuyên gia xác nhận hợp đồng')}${contractTermsV11(a)}<form id="expertContractFormV11"><input type="hidden" name="id" value="${e(a.id)}"><label class="checkrow"><input type="checkbox" name="read" value="yes" required> Tôi đã đọc hợp đồng và cam kết cung cấp khóa học</label><div class="field"><label>Ký xác nhận bằng họ tên</label><input name="signature" required maxlength="90" placeholder="${e(state.name)}"></div><button type="submit" class="btn">Ký và chuyển quản trị duyệt</button></form>`);
}
function confirmExpertV11(d){
 const a=state.agreementsV11.find(x=>x.id===d.id&&x.seller===state.username&&x.stage==='awaiting-expert');if(!a||d.read!=='yes'||!String(d.signature||'').trim())return;
 a.signatures.expert={name:String(d.signature).trim(),time:new Date().toISOString()};a.stage='awaiting-admin';save();closeModal();render();toast('Đã chuyển hợp đồng đến quản trị viên xác nhận.');
}
function adminFinalizeV11(id){
 if(!isAdmin())return;
 const a=state.agreementsV11.find(x=>x.id===id&&x.stage==='awaiting-admin');if(!a)return;
 showModal(`${modalHead('Nền tảng xác nhận hợp đồng')}${contractTermsV11(a)}<form id="adminContractFormV11"><input type="hidden" name="id" value="${e(a.id)}"><label class="checkrow"><input type="checkbox" name="read" value="yes" required> Tôi đã kiểm tra xác nhận của học viên và chuyên gia</label><div class="field"><label>Chữ ký đại diện nền tảng</label><input name="signature" value="Quản trị .theMeal" maxlength="90" required></div><button class="btn" type="submit">Xác nhận hoàn tất hợp đồng</button></form>`);
}
function confirmAdminV11(d){
 if(!isAdmin()||d.read!=='yes'||!String(d.signature||'').trim())return;
 const a=state.agreementsV11.find(x=>x.id===d.id&&x.stage==='awaiting-admin');if(!a)return;
 a.signatures.platform={name:d.signature.trim(),time:new Date().toISOString()};a.stage='completed';a.completedAt=new Date().toISOString();
 if(!state.transactions.some(t=>t.courseId===a.courseId&&t.buyer===a.buyer))state.transactions.unshift({id:'TX-'+uid().slice(-8).toUpperCase(),buyer:a.buyer,seller:a.seller,courseId:a.courseId,kind:'course',title:a.title,amount:a.amount,date:new Date().toISOString(),agreementId:a.id,sample:true});
 newNoticeV11(a.buyer,'Hợp đồng khóa học “'+a.title+'” đã được ba bên xác nhận.','contract');newNoticeV11(a.seller,'Hợp đồng với học viên '+a.buyer+' đã hoàn tất.','contract');
 save();closeModal();render();toast('Hợp đồng đã được ba bên xác nhận.');
}
function settingsV11(){
 let original=settingsV10();
 original=original.replace(/<section class="panel course-reco">[\s\S]*?<\/section>/,`<section class="panel course-reco"><button class="btn" data-action="expert-recommendations">Xem khóa học dành cho bạn →</button></section>`);
 return original+savedPostsPanelV12()+contractArchiveV11('user');
}
function expertsV11(){
 let base=expertsV10();
 if(isExpert()){
  base=base.replace(/<div class="quick-card"><h3>Tạo khóa học<\/h3>[\s\S]*?<\/div>/,'');
  base=base.replaceAll('Đăng bài →','Đăng bài viết / Tạo khóa →').replaceAll('Tạo bài viết','Đăng bài viết / Tạo khóa');
  if(courseTab==='dashboard')base+=contractArchiveV11('expert');
 }
 return base;
}
function adminUserListV11(){
 const users=adminProfiles().filter(x=>x.username!=='Tiffany');
 return `<section class="panel"><div class="panel-head"><h2>Danh sách người dùng</h2><span class="status">${users.length} tài khoản</span></div>
 <div class="admin-filterbar"><div class="field"><label>Mục tiêu</label><select id="adminGoalFilter">${['Tất cả','Giữ cân','Giảm cân','Tăng cơ','Cải thiện sức bền'].map(v=>`<option ${adminFiltersV9.adminGoalFilter===v?'selected':''}>${v}</option>`).join('')}</select></div><div class="field"><label>Vai trò</label><select id="adminRoleFilter">${['Tất cả','Người dùng','Chuyên gia'].map(v=>`<option ${adminFiltersV9.adminRoleFilter===v?'selected':''}>${v}</option>`).join('')}</select></div><div class="field"><label>Gói</label><select id="adminPlanFilter">${['Tất cả','Free','Premium'].map(v=>`<option ${adminFiltersV9.adminPlanFilter===v?'selected':''}>${v}</option>`).join('')}</select></div></div>
 <div class="table-wrap"><table><thead><tr><th>TÀI KHOẢN</th><th>HỌ TÊN</th><th>VAI TRÒ</th><th>MỤC TIÊU</th><th>GÓI</th><th>THAO TÁC</th></tr></thead><tbody>${users.filter(u=>(adminFiltersV9.adminGoalFilter==='Tất cả'||u.goal===adminFiltersV9.adminGoalFilter)&&(adminFiltersV9.adminRoleFilter==='Tất cả'||u.role===adminFiltersV9.adminRoleFilter)&&(adminFiltersV9.adminPlanFilter==='Tất cả'||(u.premium?'Premium':'Free')===adminFiltersV9.adminPlanFilter)).map(u=>`<tr><td>${e(u.username)}</td><td>${e(u.name)}</td><td>${e(u.role)}</td><td>${e(u.goal)}</td><td>${u.premium?'Premium':'Free'}</td><td><button class="btn danger small" data-action="admin-remove-user-v11" data-id="${e(u.username)}">Xóa tài khoản</button></td></tr>`).join('')}</tbody></table></div></section>`;
}
function removeUserV11(username){
 if(!isAdmin()||username==='Tiffany')return toast('Không thể xóa tài khoản quản trị đang hoạt động.');
 if(!state.registeredUsers?.[username]&&!['Jessica','Taeyeon'].includes(username))return;
 if(!confirm('Xóa tài khoản '+username+' và dữ liệu cá nhân liên quan khỏi trình duyệt? Không thể hoàn tác.'))return;
 state.deletedAccountsV12 ||= [];if(!state.deletedAccountsV12.includes(username))state.deletedAccountsV12.push(username);
 delete state.registeredUsers[username];delete DEMO_USERS[username];delete state.accountData[username];delete state.healthProfiles[username];
 for(const col of ['dailyPlans','dailyDiary','connectedDevices','exercisePlans'])if(state[col])delete state[col][username];
 state.messages=state.messages.filter(m=>m.buyer!==username&&m.seller!==username);
 state.agreementsV11=state.agreementsV11.filter(a=>a.buyer!==username&&a.seller!==username);
 state.transactions=state.transactions.filter(t=>t.buyer!==username&&t.seller!==username);
 state.supportTicketsV11=state.supportTicketsV11.filter(t=>t.username!==username);
 state.expertRequests=state.expertRequests.filter(r=>r.username!==username);
 state.posts=state.posts.filter(p=>p.username!==username);
 state.community=state.community.filter(p=>p.username!==username);
 state.courses=state.courses.filter(c=>c.username!==username);
 if(state.noticesV11)state.noticesV11=state.noticesV11.filter(n=>n.recipient!==username);
 if(state.savedPostsV12)delete state.savedPostsV12[username];
 if(state.postLikesV12)for(const list of Object.values(state.postLikesV12)){const i=list.indexOf(username);if(i>=0)list.splice(i,1);}
 save();render();toast('Đã xóa tài khoản '+username+'.');
}
function adminRecipePageV11(){
 return `<section class="panel"><div class="panel-head"><div><h2>Kho công thức hệ thống</h2><p class="subtitle">Có ${recipes.length} công thức đang hiển thị trong ứng dụng.</p></div><button class="btn" data-action="admin-recipe-add-v11">+ Thêm công thức</button></div>
 <div class="filterbar"><input id="adminRecipeSearchV11" placeholder="Tìm tên món ăn..." value="${e(state.recipeQueryV11||'')}"></div>
 <div class="recipe-admin-list">${recipes.filter(r=>normalizeViV9(r.name).includes(normalizeViV9(state.recipeQueryV11||''))).map(r=>`<div class="recipe-admin-row"><span class="emoji">${r.emoji||'🍽️'}</span><div><b>${e(r.name)}</b><p class="tiny">${Number(r.kcal)} kcal · ${(r.ingredients||[]).length} nguyên liệu · ${e(r.region||'Món ăn')}</p></div><div class="actions"><button class="btn secondary small" data-action="admin-recipe-edit-v11" data-id="${e(r.id)}">Sửa</button><button class="btn danger small" data-action="admin-recipe-delete-v11" data-id="${e(r.id)}">Xóa</button></div></div>`).join('')}</div></section>`;
}
function recipeFormV11(id=''){
 if(!isAdmin())return;
 const r=recipes.find(x=>x.id===id)||{name:'',kcal:'',protein:'',carb:'',fat:'',mins:25,goals:['Giữ cân'],emoji:'🍲',ingredients:[],steps:[]};
 showModal(`${modalHead(id?'Sửa công thức':'Thêm công thức')}<form id="adminRecipeFormV11"><input name="id" type="hidden" value="${e(id)}"><div class="field"><label>Tên món ăn *</label><input name="name" required maxlength="110" value="${e(r.name)}"></div><div class="form-grid"><div class="field"><label>Calories (kcal) *</label><input name="kcal" required type="number" min="1" value="${e(r.kcal)}"></div><div class="field"><label>Thời gian (phút)</label><input name="mins" type="number" min="1" value="${e(r.mins)}"></div><div class="field"><label>Protein (g)</label><input name="protein" type="number" min="0" value="${e(r.protein)}"></div><div class="field"><label>Tinh bột (g)</label><input name="carb" type="number" min="0" value="${e(r.carb)}"></div><div class="field"><label>Chất béo (g)</label><input name="fat" type="number" min="0" value="${e(r.fat)}"></div><div class="field"><label>Biểu tượng</label><input name="emoji" maxlength="6" value="${e(r.emoji)}"></div></div>
 <div class="field"><label>Nguyên liệu – mỗi dòng: Tên | Số lượng | Đơn vị *</label><textarea name="ingredients" required rows="5">${e((r.ingredients||[]).map(x=>x.join(' | ')).join('\n'))}</textarea></div>
 <div class="field"><label>Cách chế biến – mỗi bước một dòng *</label><textarea name="steps" rows="5" required>${e((r.steps||[]).join('\n'))}</textarea></div><button class="btn" type="submit">Lưu công thức</button></form>`);
}
function saveRecipeV11(d){
 if(!isAdmin())return;
 const name=String(d.name||'').trim(),kcal=Number(d.kcal);
 const lines=String(d.ingredients||'').split('\n').map(s=>s.trim()).filter(Boolean);
 const ingredients=lines.map(line=>line.split('|').map(x=>x.trim()));
 const steps=String(d.steps||'').split('\n').map(x=>x.trim()).filter(Boolean);
 if(!name||!(kcal>0)||!ingredients.length||!steps.length||ingredients.some(x=>x.length!==3||!(Number(x[1])>0)||!x[2]))return toast('Kiểm tra tên món, kcal, nguyên liệu và cách nấu.');
 const recipe={id:d.id||'custom-'+uid(),name,emoji:String(d.emoji||'🍲'),kcal,protein:Number(d.protein||0),carb:Number(d.carb||0),fat:Number(d.fat||0),mins:Number(d.mins||25),goals:['Giữ cân','Giảm cân','Tăng cơ'],ingredients:ingredients.map(x=>[x[0],Number(x[1]),x[2]]),steps,region:'Món Việt',estimated:true};
 const index=recipes.findIndex(r=>r.id===recipe.id);if(index>=0)recipes.splice(index,1,recipe);else recipes.push(recipe);
 state.customRecipesV11=state.customRecipesV11.filter(r=>r.id!==recipe.id);state.customRecipesV11.push(recipe);state.removedRecipesV11=state.removedRecipesV11.filter(id=>id!==recipe.id);
 save();closeModal();render();toast('Đã lưu công thức.');
}
function deleteRecipeV11(id){
 if(!isAdmin())return;
 const r=recipes.find(x=>x.id===id);if(!r||!confirm('Xóa công thức “'+r.name+'” khỏi kho món ăn?'))return;
 recipes.splice(recipes.indexOf(r),1);state.removedRecipesV11.push(id);state.customRecipesV11=state.customRecipesV11.filter(x=>x.id!==id);
 state.chosen=state.chosen.filter(x=>x!==id);syncShoppingV9();save();render();toast('Đã xóa công thức.');
}
function reviewV11(key,decision){
 if(!isAdmin())return;
 const [kind,...parts]=String(key||'').split(':');const id=parts.join(':');
 const allowed=['approve','reject'];if(!allowed.includes(decision))return;
 let item,owner=null;
 if(kind==='expert'){
  item=state.expertRequests.find(x=>x.id===id);if(!item)return;owner=item.username;
  item.status=decision==='approve'?'approved':'rejected';
  if(decision==='approve'){
   state.accountData[owner] ||= freshAccount(owner);state.accountData[owner].expertActivated=true;
   state.accountData[owner].specialty=item.field;
  }
 }else if(kind==='course'){
  item=state.courses.find(x=>x.id===id);if(!item)return;owner=item.username;
  item.status=decision==='approve'?'approved':'rejected';
  if(decision==='approve'&&!item.postingFee){item.postingFee=Math.round(Number(item.price)*.1);item.approvedAt=new Date().toISOString();}
 }else if(kind.startsWith('post-')){
  const source=kind==='post-expert'?state.posts:state.community;item=source.find(x=>x.id===id);if(!item)return;owner=item.username;item.status=decision==='approve'?'approved':'rejected';
 }else if(kind.startsWith('comment-')){
  const k=kind.startsWith('comment-expert-')?'expert':'community';const postId=kind.slice(('comment-'+k+'-').length);
  const p=actualPost(postId,k);item=p?.comments?.find(x=>x.id===id);if(!item)return;owner=item.username;item.status=decision==='approve'?'approved':'rejected';
 }
 if(owner){
  const targetLabel=kind.startsWith('post-')?'bài đăng':kind.startsWith('comment-')?'comment':kind==='course'?'khóa học':kind==='expert'?'hồ sơ chuyên gia':'nội dung';
  newNoticeV11(owner,`${decision==='reject'?'Đã từ chối':'Đã kiểm duyệt'} ${targetLabel}.`,'moderation');
 }
 save();render();toast(decision==='reject'?'Đã từ chối và gửi thông báo.':'Đã kiểm duyệt thành công.');
}
function adminRevenueV11(which='overview'){
 const fees=adminFees();
 const summaries=[['posting','Phí đăng ký khóa',fees.feesPost,'10% học phí khóa được duyệt','◈'],['enroll','Chiết khấu đăng ký',fees.enrollFee,'2% giao dịch đăng ký','↗'],['premium','Doanh thu Premium',fees.premiumFee,'Phí đăng ký Premium','✦'],['total','Tổng doanh thu',fees.total,'Tổng ba nguồn thu','₫']];
 if(which==='overview')return `<div class="stats revenue-summary">${summaries.map(([k,title,n,sub,ico])=>`<button class="stat interactive-stat" data-page="admin-revenue-${k}"><div class="stat-top"><span>${title}</span><span class="stat-icon">${ico}</span></div><h2>${money(n)}</h2><small>${sub}</small><span class="mini-link">Xem chi tiết →</span></button>`).join('')}</div><section class="panel"><h2>Quản lý doanh thu</h2><p class="subtitle">Chọn một thẻ hoặc mục con ở menu trái để xem từng nguồn thu và giao dịch ghi nhận.</p></section>`;
 const x=summaries.find(t=>t[0]===which)||summaries[3];
 let headers=['NGUỒN THU','CÁCH TÍNH','SỐ TIỀN'];
 let rows=[];
 if(which==='posting'){
   rows=fees.posting.map(c=>[c.title,'10% × '+money(c.price),money(c.postingFee??Math.round(c.price*.1))]);
 }else if(which==='enroll'){
   rows=fees.course.map(t=>[t.title,'2% × '+money(t.amount),money(Math.round(t.amount*.02))]);
 }else if(which==='premium'){
   headers=['NGUỒN THU','TÀI KHOẢN','SỐ TIỀN'];
   rows=(state.transactions||[]).filter(t=>t.kind==='premium').map(t=>[t.title||'Gói Premium',t.buyerName||t.buyer||'',money(t.amount)]);
 }else {
   rows=summaries.slice(0,3).map(t=>[t[1],t[3],money(t[2])]);
 }
 return `<section class="panel"><div class="panel-head"><h2>${x[1]}</h2><span class="price">${money(x[2])}</span></div><div class="table-wrap"><table><thead><tr><th>${headers[0]}</th><th>${headers[1]}</th><th>${headers[2]}</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${e(r[0])}</td><td>${e(r[1])}</td><td><b>${e(r[2])}</b></td></tr>`).join('')||'<tr><td colspan="3">Chưa có giao dịch trong hạng mục này.</td></tr>'}</tbody></table></div></section>`;
}
function adminV11(){
 if(!isAdmin())return '<div class="notice">Bạn không có quyền truy cập.</div>';
 const current=page;
 const posted=allCommunityPosts(),q={experts:state.expertRequests.filter(x=>x.status==='pending'),posts:posted.filter(x=>x.status==='pending'),comments:posted.flatMap(p=>(p.comments||[]).filter(c=>c.status==='pending').map(c=>({...c,postTitle:p.title,postKind:p.kind,postId:p.id}))),courses:state.courses.filter(c=>c.status==='pending')};
 let body='';
 if(current==='admin'){
  const fees=adminFees();
  body=`<div class="stats">${stat('Tài khoản',adminProfiles().filter(x=>x.username!=='Tiffany').length,'Người dùng & chuyên gia','♙')}${stat('Hồ sơ cần duyệt',q.experts.length,'Đăng ký chuyên gia mới','◈')}${stat('Nội dung chờ duyệt',q.posts.length+q.comments.length+q.courses.length,'Bài viết, bình luận, khóa học','▤')}${stat('Doanh thu nền tảng',money(fees.total),'Tổng nguồn thu được ghi nhận','₫')}</div><section class="panel"><h2>Hàng đợi cần xử lý</h2><div class="admin-quick">${[['admin-experts',q.experts.length,'Hồ sơ chuyên gia'],['admin-posts',q.posts.length,'Bài viết'],['admin-comments',q.comments.length,'Bình luận'],['admin-courses',q.courses.length,'Khóa học'],['admin-support',adminPendingV11().support,'Yêu cầu CSKH'],['admin-contracts',adminPendingV11().contracts,'Hợp đồng']].map(([p,n,t])=>`<button class="quick-card" data-page="${p}"><strong>${n}</strong><span>${t} →</span></button>`).join('')}</div></section>`;
 }else if(current==='admin-users')body=adminUserListV11();
 else if(current==='admin-experts')body=`<section class="panel"><h2>Duyệt chuyên gia · ${q.experts.length} chờ duyệt</h2>${state.expertRequests.slice().reverse().map(x=>`<article class="admin-review-card"><div><h3>${e(x.name)}</h3><p>${e(x.username||'')} · ${e(x.field||'')} · ${e(x.cred||'')}</p><p class="tiny">Hồ sơ và chữ ký xác nhận: ${x.signatureConfirmed?'Đã tiếp nhận':'Chưa có'}</p></div>${adminActionsV11('expert',x)}</article>`).join('')||'<p>Chưa có hồ sơ.</p>'}</section>`;
 else if(current==='admin-posts')body=`<section class="panel"><h2>Kiểm duyệt bài viết · ${q.posts.length} chờ duyệt</h2>${posted.map(x=>`<article class="admin-review-card"><div><h3>${e(x.title)} ${x.role==='expert'?'<span class="role-badge expert">Chuyên gia</span>':''}</h3><p>${e(x.author)} · ${e(x.body).slice(0,400)}</p></div>${adminActionsV11('post-'+x.kind,x)}</article>`).join('')||'<p>Chưa có bài viết.</p>'}</section>`;
 else if(current==='admin-comments')body=`<section class="panel"><h2>Kiểm duyệt bình luận theo bài viết</h2>${posted.filter(p=>(p.comments||[]).length).map(p=>`<div class="admin-post-group"><h3>${e(p.title)} <span class="tiny">${p.comments.length} bình luận</span></h3>${p.comments.map(c=>`<article class="admin-review-card"><div><strong>${e(c.author)}</strong><p>${e(c.text)}</p></div>${adminActionsV11('comment-'+p.kind+'-'+p.id,c)}</article>`).join('')}</div>`).join('')||'<p>Chưa có bình luận.</p>'}</section>`;
 else if(current==='admin-courses')body=`<section class="panel"><h2>Quản lý khóa học · ${q.courses.length} cần duyệt</h2>${[...defaultCourses.map(c=>({...c,status:'approved',builtin:true})),...state.courses].map(c=>`<article class="admin-review-card"><div><h3>${e(c.title)}</h3><p>${e(c.owner||'Taeyeon')} · ${money(c.price)} · ${e(c.duration||'Thời hạn chưa khai báo')}</p></div>${c.builtin?'<span class="role-badge">Đang hoạt động</span>':adminActionsV11('course',c)}</article>`).join('')}</section>`;
 else if(current==='admin-recipes')body=adminRecipePageV11();
 else if(current==='admin-contracts')body=contractArchiveV11('admin').replace(/<\/section>$/,`<div class="notice info">Bên quản trị ký xác nhận khi học viên và chuyên gia đã hoàn tất phần của mình.</div></section>`).replace(/<button class="btn secondary small" data-action="contract-view-v11"/g,'<button class="btn secondary small" data-action="contract-view-v11"')+(state.agreementsV11.some(a=>a.stage==='awaiting-admin')?`<section class="panel"><h2>Hợp đồng chờ nền tảng ký</h2>${state.agreementsV11.filter(a=>a.stage==='awaiting-admin').map(a=>`<div class="row contract-pending"><span>${e(a.title)} · ${e(a.buyer)} / ${e(a.seller)}</span><button class="btn" data-action="contract-admin-v11" data-id="${e(a.id)}">Ký xác nhận</button></div>`).join('')}</section>`:'');
 else if(current==='admin-support')body=`<section class="panel"><h2>Yêu cầu CSKH · ${state.supportTicketsV11.length}</h2>${state.supportTicketsV11.slice().reverse().map(t=>`<article class="ticket"><div class="row"><h3>${e(t.subject)} · ${e(t.name)}</h3><span class="status">${t.status==='closed'?'Đã xử lý':'Chờ hỗ trợ'}</span></div>${t.messages.map(m=>`<div class="ticket-message"><b>${m.sender==='admin'?'CSKH':e(t.name)}</b><p>${e(m.text)}</p></div>`).join('')}<button class="btn small" data-action="support-admin-reply-v11" data-id="${e(t.id)}">${t.status==='closed'?'Phản hồi thêm':'Tiếp nhận & phản hồi'}</button></article>`).join('')||'<p>Chưa có phản ánh nào.</p>'}</section>`;
 else if(current==='admin-revenue-net')body=adminRevenueV11('overview');
 else if(current.startsWith('admin-revenue'))body=adminRevenueV11(current==='admin-revenue'?'overview':current.slice('admin-revenue-'.length));
 return `${title(current==='admin'?'Trung tâm quản trị .theMeal':titles[current],'')}${body}`;
}
function adminActionsV11(kind,item){
 return `<div class="actions">${item.status==='pending'?`<button class="btn small" data-action="review-v11" data-id="${e(kind+':'+item.id)}" data-decision="approve">Kiểm duyệt</button><button class="btn secondary small" data-action="review-v11" data-id="${e(kind+':'+item.id)}" data-decision="reject">Từ chối</button>`:`<span class="status ${item.status==='rejected'?'expired':''}">${item.status==='approved'?'Đã duyệt':'Đã từ chối'}</span>`}</div>`;
}

// Capture handlers run ahead of earlier delegated handlers; only new actions are intercepted.
const v11Actions=new Set(['support-new','support-reply','support-admin-reply-v11','contract-view-v11','contract-expert-v11','contract-admin-v11','admin-recipe-add-v11','admin-recipe-edit-v11','admin-recipe-delete-v11','admin-remove-user-v11','review-v11','revenue-parent']);
document.addEventListener('click',ev=>{
 const btn=ev.target.closest('[data-action]');if(!btn||!v11Actions.has(btn.dataset.action))return;
 ev.preventDefault();ev.stopImmediatePropagation();
 const id=btn.dataset.id||'';
 switch(btn.dataset.action){
 case 'support-new':supportFormV11();break;
 case 'support-reply':supportFormV11(id);break;
 case 'support-admin-reply-v11':supportReplyFormAdminV11(id);break;
 case 'contract-view-v11':contractViewV11(id);break;
 case 'contract-expert-v11':signExpertV11(id);break;
 case 'contract-admin-v11':adminFinalizeV11(id);break;
 case 'admin-recipe-add-v11':recipeFormV11();break;
 case 'admin-recipe-edit-v11':recipeFormV11(id);break;
 case 'admin-recipe-delete-v11':deleteRecipeV11(id);break;
 case 'admin-remove-user-v11':removeUserV11(id);break;
 case 'review-v11':reviewV11(id,btn.dataset.decision);break;
 case 'revenue-parent':nav('admin-revenue');break;
 }
},true);
const v11Forms=new Set(['supportFormV11','supportAdminFormV11','enrollContractFormV11','expertContractFormV11','adminContractFormV11','adminRecipeFormV11']);
document.addEventListener('submit',ev=>{
 const form=ev.target;const formId=form.getAttribute('id');if(!v11Forms.has(formId))return;
 ev.preventDefault();ev.stopImmediatePropagation();
 const d=Object.fromEntries(new FormData(form));
 if(formId==='supportFormV11')submitSupportV11(d);
 if(formId==='supportAdminFormV11')supportReplyAdminV11(d);
 if(formId==='enrollContractFormV11')signBuyerV11(d);
 if(formId==='expertContractFormV11')confirmExpertV11(d);
 if(formId==='adminContractFormV11')confirmAdminV11(d);
 if(formId==='adminRecipeFormV11')saveRecipeV11(d);
},true);
// Filter recipes without losing focus on a typed query.
document.addEventListener('input',ev=>{
 if(ev.target.id!=='adminRecipeSearchV11')return;
 state.recipeQueryV11=ev.target.value;
 const field=ev.target;
 const list=document.querySelector('.recipe-admin-list');
 if(list){list.querySelectorAll('.recipe-admin-row').forEach(row=>{row.hidden=!normalizeViV9(row.querySelector('b')?.textContent).includes(normalizeViV9(field.value));});}
},true);
const oldV11NavigateHooks=()=>updateShellV11();


/* .theMeal v12: bài viết yêu thích, kế hoạch vận động và danh mục doanh thu sau phí. */
function postKeyV12(post){ return `${post.kind}:${post.id}`; }
function savedPostV12(post){return (state.savedPostsV12?.[state.username]||[]).includes(postKeyV12(post));}
function likedPostV12(post){return (state.postLikesV12?.[postKeyV12(post)]||[]).includes(state.username);}
function postLikeCountV12(post){return (state.postLikesV12?.[postKeyV12(post)]||[]).length;}
function togglePostV12(key,type){
  if(isAdmin()){toast('Quản trị viên chỉ kiểm duyệt nội dung.');return;}
  const [kind,id]=String(key||'').split(':');
  const post=allCommunityPosts().find(p=>p.kind===kind&&p.id===id&&p.status==='approved');
  if(!post)return toast('Bài viết không còn khả dụng.');
  let list;
  if(type==='save'){
    state.savedPostsV12 ||= {};
    list=state.savedPostsV12[state.username] ||= [];
  }else{
    state.postLikesV12 ||= {};
    list=state.postLikesV12[key] ||= [];
  }
  const member=type==='save'?key:state.username;
  const i=list.indexOf(member);
  if(i>=0)list.splice(i,1);else list.push(member);
  save();render();toast(type==='save'?(i>=0?'Đã bỏ lưu bài viết.':'Đã lưu bài viết vào hồ sơ cá nhân.'):(i>=0?'Đã bỏ thích.':'Đã thích bài viết.'));
}
function savedPostsPanelV12(){
  if(isAdmin())return '';
  const keys=state.savedPostsV12?.[state.username]||[];
  const posts=keys.map(key=>allCommunityPosts().find(p=>postKeyV12(p)===key&&p.status==='approved')).filter(Boolean);
  return `<section class="panel" id="savedPostsV12"><div class="panel-head"><div><h2>♡ Bài viết đã lưu</h2><p class="subtitle">Nội dung bạn lưu từ Cộng đồng để đọc lại khi cần.</p></div><button class="btn soft small" data-page="community">Mở cộng đồng →</button></div>
  ${posts.length?posts.map(p=>`<div class="saved-post-row-v12"><div><strong>${e(p.title)}</strong><p class="tiny">${e(p.author)} · ${date(p.date)} · ${postLikeCountV12(p)} lượt thích</p></div><div class="actions"><button class="btn secondary small" data-action="post-open-v12" data-id="${e(postKeyV12(p))}">Xem bài viết</button><button class="btn secondary small" data-action="post-save-v12" data-id="${e(postKeyV12(p))}">Bỏ lưu</button></div></div>`).join(''):'<p class="muted">Bạn chưa lưu bài viết nào.</p>'}</section>`;
}
function showSavedPostV12(key){
  const [kind,id]=String(key||'').split(':');
  const post=allCommunityPosts().find(p=>p.kind===kind&&p.id===id&&p.status==='approved');
  if(!post)return toast('Bài viết không còn trên Cộng đồng.');
  showModal(`${modalHead(post.title)}<p class="tiny">${e(post.author)} · ${date(post.date)}</p><div class="saved-post-content-v12">${e(post.body)}</div><div class="form-actions"><button class="btn secondary" data-action="post-save-v12" data-id="${e(key)}">${savedPostV12(post)?'Bỏ lưu':'Lưu bài viết'}</button><button class="btn" data-page="community">Đến Cộng đồng</button></div>`);
}
function workoutMETV12(name){
  const text=normalizeViV9(name);
  if(text.includes('dap xe'))return 6;
  if(text.includes('squat'))return 5;
  if(text.includes('di bo'))return 4.3;
  if(text.includes('plank'))return 3.5;
  if(text.includes('yoga'))return 2.5;
  if(text.includes('gian co'))return 2.3;
  return 3.5;
}
function workoutCaloriesV12(item){
 const w=Number(profileForCurrent().weight)||60;
 return Math.round(workoutMETV12(item.name)*w*Number(item.duration||0)/60);
}
function workoutEnergySummaryV12(){
 const all=workoutsFor();
 return {total:all.filter(x=>x.done).reduce((n,x)=>n+workoutCaloriesV12(x),0),projected:all.reduce((n,x)=>n+workoutCaloriesV12(x),0),count:all.length,done:all.filter(x=>x.done).length,assumed:!(Number(profileForCurrent().weight)>0)};
}
function workoutPlanInlineV12(){
 const workouts=workoutsFor(),summary=workoutEnergySummaryV12();
 return `${workouts.length?`<div class="workout-items-v12">${workouts.map(x=>`<div class="workout-item-v12"><span class="emoji">${e(x.icon||'🏃')}</span><div><strong>${e(x.name)}</strong><p class="tiny">${Number(x.duration)} phút · ${workoutCaloriesV12(x)} kcal dự kiến · ${e(x.note||'')}</p></div><div class="actions"><button class="btn ${x.done?'soft':'secondary'} small" data-action="workout-done" data-id="${e(x.id)}">${x.done?'✓ Đã tập':'Đánh dấu đã tập'}</button><button class="mini-btn" aria-label="Xóa bài tập" data-action="workout-remove" data-id="${e(x.id)}">×</button></div></div>`).join('')}</div>`:'<p class="muted">Ngày này chưa có bài tập nào. Chọn “Thêm bài tập” để bắt đầu.</p>'}
 <div class="workout-totals-v12"><span>${summary.done}/${summary.count} bài hoàn thành</span><span>🔥 Đã tiêu hao khoảng <strong>${summary.total} kcal</strong></span><span>Dự kiến ${summary.projected} kcal</span></div>
 <p class="tiny">Năng lượng được ước tính theo thời lượng, loại vận động và ${summary.assumed?'cân nặng tham khảo 60 kg':'cân nặng trong hồ sơ sức khỏe'}, có thể khác thực tế.</p>`;
}
// V12 acts before legacy delegated listener so a saved-post click never double-invokes.
const v12Actions=new Set(['post-save-v12','post-like-v12','post-open-v12']);
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-action]');
 if(!button||!v12Actions.has(button.dataset.action))return;
 event.preventDefault();event.stopImmediatePropagation();
 if(button.dataset.action==='post-open-v12')return showSavedPostV12(button.dataset.id);
 togglePostV12(button.dataset.id,button.dataset.action==='post-save-v12'?'save':'like');
},true);

initializeV8();
initializeV11();
scrubLabelsV10(document.getElementById('authScreen'));
updateShell();
registerOtpNoticeV11();
if (state.session.loggedIn) nav(isAdmin() ? 'admin' : (location.hash.slice(1) || 'overview'));
