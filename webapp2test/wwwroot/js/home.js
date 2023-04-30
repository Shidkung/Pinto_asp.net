//All menu
const menuItems = [
  [
    {
      shopNumber: '1',
      name: 'สเต็กปลาแซลมอน',
      price: 65,
      shopName: 'ร้านเทคโนอินเตอร์',
      imgUrl: 'https://s359.kapook.com/pagebuilder/e9470868-6b96-4e19-9a27-1d9b4f7819b6.jpg'
    },
    {
      shopNumber: '1',
      name: 'ข้าวไก่ชีส',
      price: 45,
      shopName: 'ร้านเทคโนอินเตอร์',
      imgUrl: 'https://goohiw.com/wp-content/uploads/2020/09/KFC-Chizza-3.jpg'
    },
    {
      shopNumber: '1',
      name: 'ไข่กระทะ',
      price: 45,
      shopName: 'ร้านเทคโนอินเตอร์',
      imgUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BYPJqBl961hKjrEP3TPXmAhlGIfYgkAQtXPF7QCHIVWTamM4GN.jpg'
    },
    {
      shopNumber: '2',
      name: 'ตำหมูยอ',
      price: 35,
      shopName: 'ร้านป้าศรีส้มตำ',
      imgUrl: 'https://s.isanook.com/wo/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMzYvMTgyOTY1LzQuanBn.jpg'
    },
    {
      shopNumber: '2',
      name: 'น้ำตกหมู',
      price: 35,
      shopName: 'ร้านป้าศรีส้มตำ',
      imgUrl: 'https://r-han.com/wp-content/uploads/2019/05/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%AB%E0%B8%A1%E0%B8%B91-780x585.jpg'
    },
    {
      shopNumber: '2',
      name: 'ตำปูปลาร้า',
      price: 45,
      shopName: 'ร้านป้าศรีส้มตำ',
      imgUrl: 'https://sites.google.com/site/smtaxaharrsleis/_/rsrc/1493919763270/smta-pu-plara/images%20%281%29.jpg'
    }
  ],
  [
    {
      shopNumber: '3',
      name: 'ไข่พะโล้',
      price: 35,
      shopName: 'ร้านไอหนวด',
      imgUrl: 'https://i.ytimg.com/vi/vKeQOUqGkOQ/maxresdefault.jpg'
    },
    {
      shopNumber: '3',
      name: 'แกงผักกาดดอง',
      price: 35,
      shopName: 'ร้านไอหนวด',
      imgUrl: 'https://i.ytimg.com/vi/A-yJVn8Idr0/hqdefault.jpg'
    },
    {
      shopNumber: '3',
      name: 'ทอดมันปลากราย',
      price: 35,
      shopName: 'ร้านไอหนวด',
      imgUrl: 'https://img.wongnai.com/p/1920x0/2020/08/08/679c80ad67f54e02a7c4234b301ccac1.jpg'
    },
    {
      shopNumber: '4',
      name: 'ก๋วยเตี๋ยวเรือ',
      price: 45,
      shopName: 'ร้านมามา ก๋วยเตี๋ยวเรือ',
      imgUrl: 'https://images.deliveryhero.io/image/fd-th/LH/u8zp-hero.jpg'
    },
    {
      shopNumber: '4',
      name: 'ก๋วยเตี๋ยวหมูตุ๋น',
      price: 45,
      shopName: 'ร้านมามา ก๋วยเตี๋ยวเรือ',
      imgUrl: 'https://chefoldschool.com/wp-content/uploads/2020/08/p92.2.jpg'
    },
    {
      shopNumber: '4',
      name: 'ก๋วยเตี๋ยวน้ำตก',
      price: 45,
      shopName: 'ร้านมามา ก๋วยเตี๋ยวเรือ',
      imgUrl: 'https://4.bp.blogspot.com/--LnASagjGQE/V-RpHDLGDJI/AAAAAAAAGnE/c_QWyoxe4Nwi6ZLJAmJA_sy9vudcrHMQACLcB/s1600/13131448_278804262455001_3326822870490038683_o.jpg'
    }
  ],
  [
    {
      shopNumber: '5',
      name: 'ข้าวมันไก่ต้ม',
      price: 40,
      shopName: 'ร้านณรงค์ข้าวมันไก่',
      imgUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg'
    },
    {
      shopNumber: '5',
      name: 'ข้าวมันไก่ทอด',
      price: 40,
      shopName: 'ร้านณรงค์ข้าวมันไก่',
      imgUrl: 'https://www.ifit4health.com/wp-content/uploads/2015/07/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88.soccersuck.jpg'
    },
    {
      shopNumber: '5',
      name: 'ข้าวขาหมู',
      price: 45,
      shopName: 'ร้านณรงค์ข้าวมันไก่',
      imgUrl: 'https://img.wongnai.com/p/1920x0/2017/06/26/16b349df2d5b471bbca679e6117f1544.jpg'
    },
    {
      shopNumber: '6',
      name: 'กุ้งทอดกระเทียม',
      price: 55,
      shopName: 'ร้านมิลเลียน',
      imgUrl: 'https://www.bloggang.com/data/j/jazzy-bong/picture/1625038085.jpg'
    },
    {
      shopNumber: '6',
      name: 'หมูมะนาว',
      price: 45,
      shopName: 'ร้านมิลเลียน',
      imgUrl: 'https://s359.kapook.com/pagebuilder/24880945-5db1-4cc9-b6d0-03f657f46bf5.jpg'
    },
    {
      shopNumber: '6',
      name: 'ไก่ต้มโค้ก',
      price: 45,
      shopName: 'ร้านมิลเลียน',
      imgUrl: 'https://cdn.discordapp.com/attachments/933974489207832619/1100678068475015239/izewmbsafwefufefvauq1rlmjdhbh3ikjyecw1q5.png'
    }
  ],
  [
    {
      shopNumber: '7',
      name: 'แกงเเขียวหวาน',
      price: 40,
      shopName: 'ร้านอิดรีส',
      imgUrl: 'https://d21dsidbdoi5kv.cloudfront.net/wp-content/uploads/2022/05/3-27.jpg'
    },
    {
      shopNumber: '7',
      name: 'แกงมัสมั่น',
      price: 40,
      shopName: 'ร้านอิดรีส',
      imgUrl: 'https://d21dsidbdoi5kv.cloudfront.net/wp-content/uploads/2022/05/9-3.jpg'
    },
    {
      shopNumber: '7',
      name: 'แกงหน่อไม้ดอง',
      price: 40,
      shopName: 'ร้านอิดรีส',
      imgUrl: 'https://d21dsidbdoi5kv.cloudfront.net/wp-content/uploads/2022/05/8-3.jpg'
    },
    {
      shopNumber: '8',
      name: 'ฝอยทอง',
      price: 30,
      shopName: 'ร้านไอเย็น',
      imgUrl: 'https://img.wongnai.com/p/1920x0/2017/09/13/0e074ec175364b028bcb2cf30892e85b.jpg'
    },
    {
      shopNumber: '8',
      name: 'ดังโงะ',
      price: 40,
      shopName: 'ร้านไอเย็น',
      imgUrl: 'https://d21dsidbdoi5kv.cloudfront.net/wp-content/uploads/2022/08/7-32.jpg'
    },
    {
      shopNumber: '8',
      name: 'มาการอง',
      price: 50,
      shopName: 'ร้านไอเย็น',
      imgUrl: 'https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/desserts-&-bakery/lime-cream-cheese-macaron/main-header.jpg'
    }
  ],
  [
    {
      shopNumber: '9',
      name: 'โกโก้ปั่น',
      price: 35,
      shopName: 'ร้านพี่ฝน กาแฟสด&น้ำปั่น',
      imgUrl: 'https://cdn.discordapp.com/attachments/933974489207832619/1099769992251187230/image.png'
    },
    {
      shopNumber: '9',
      name: 'คาราเมลมัคคิอาโต้',
      price: 45,
      shopName: 'ร้านพี่ฝน กาแฟสด&น้ำปั่น',
      imgUrl: 'https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/nescafe-iced-caramel-macchiato-540x400%20%281%29.jpg?itok=u3jWdrDl'
    },
    {
      shopNumber: '9',
      name: 'มัทฉะลาเต้',
      price: 40,
      shopName: 'ร้านพี่ฝน กาแฟสด&น้ำปั่น',
      imgUrl: 'https://doithaicoffee.com/wp-content/uploads/2022/08/DF12FFB5-4160-4A6A-8F81-BEF7984DA70E.jpeg'
    },
    {
      shopNumber: '10',
      name: 'ราเมงมิโซะ',
      price: 45,
      shopName: 'ร้าน Curry Shop',
      imgUrl: 'https://www.japancheckin.com/wp-content/uploads/2018/12/6e77f83338bed52c0b59181fae994435_s.jpg'
    },
    {
      shopNumber: '10',
      name: 'ข้าวแกงกะหรี่',
      price: 45,
      shopName: 'ร้าน Curry Shop',
      imgUrl: 'https://www.japancheckin.com/wp-content/uploads/2018/12/844489c0b9ca85cb6ceaf880d96431f7_s.jpg'
    },
    {
      shopNumber: '10',
      name: 'โซบะเย็น',
      price: 45,
      shopName: 'ร้าน Curry Shop',
      imgUrl: 'https://th.anngle.org/wp-content/uploads/2022/01/soba-main.jpg'
    }
  ],
  [
    {
      shopNumber: '11',
      name: 'ข้าวหมูกรอบ',
      price: 45,
      shopName: 'ร้านโอชานะ',
      imgUrl: 'https://sls-prod.api-onscene.com/partner_files/trueidintrend/4567/111396344.jpg'
    },
    {
      shopNumber: '11',
      name: 'ข้าวหมูแดง',
      price: 45,
      shopName: 'ร้านโอชานะ',
      imgUrl: 'https://cdn.discordapp.com/attachments/933974489207832619/1099772368303439931/image.png'
    },
    {
      shopNumber: '11',
      name: 'ข้าวหน้าเป็ด',
      price: 50,
      shopName: 'ร้านโอชานะ',
      imgUrl: 'https://www.ryoiireview.com/upload/article/202106/1624435498_e89666feb714ab9c3946f28f00c5d8c4.jpg'
    },
    {
      shopNumber: '12',
      name: 'เลม่อนโซดา',
      price: 35,
      shopName: 'ร้านสดชื่น',
      imgUrl: 'https://cdn.discordapp.com/attachments/933974489207832619/1099773733717164183/image.png'
    },
    {
      shopNumber: '12',
      name: 'บลูฮาวาย',
      price: 35,
      shopName: 'ร้านสดชื่น',
      imgUrl: 'https://cdn.discordapp.com/attachments/933974489207832619/1099774030627749898/image.png'
    },
    {
      shopNumber: '12',
      name: 'ชามะนาว',
      price: 35,
      shopName: 'ร้านสดชื่น',
      imgUrl: 'https://www.tastingtable.com/img/gallery/simple-and-strong-long-island-iced-tea-recipe/l-intro-1658619881.jpg'
    }
  ],
  [
    {
      shopNumber: '9',
      name: 'โกโก้ปั่น',
      price: 35,
      shopName: 'ร้านพี่ฝน กาแฟสด&น้ำปั่น',
      imgUrl: 'https://cdn.discordapp.com/attachments/933974489207832619/1099769992251187230/image.png'
    },
    {
      shopNumber: '9',
      name: 'คาราเมลมัคคิอาโต้',
      price: 45,
      shopName: 'ร้านพี่ฝน กาแฟสด&น้ำปั่น',
      imgUrl: 'https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/nescafe-iced-caramel-macchiato-540x400%20%281%29.jpg?itok=u3jWdrDl'
    },
    {
      shopNumber: '9',
      name: 'มัทฉะลาเต้',
      price: 40,
      shopName: 'ร้านพี่ฝน กาแฟสด&น้ำปั่น',
      imgUrl: 'https://doithaicoffee.com/wp-content/uploads/2022/08/DF12FFB5-4160-4A6A-8F81-BEF7984DA70E.jpeg'
    },
    {
      shopNumber: '12',
      name: 'เลม่อนโซดา',
      price: 35,
      shopName: 'ร้านสดชื่น',
      imgUrl: 'https://cdn.discordapp.com/attachments/933974489207832619/1099773733717164183/image.png'
    },
    {
      shopNumber: '12',
      name: 'บลูฮาวาย',
      price: 35,
      shopName: 'ร้านสดชื่น',
      imgUrl: 'https://cdn.discordapp.com/attachments/933974489207832619/1099774030627749898/image.png'
    },
    {
      shopNumber: '12',
      name: 'ชามะนาว',
      price: 35,
      shopName: 'ร้านสดชื่น',
      imgUrl: 'https://www.tastingtable.com/img/gallery/simple-and-strong-long-island-iced-tea-recipe/l-intro-1658619881.jpg'
    }
  ],
  [
    {
      shopNumber: '1',
      name: 'สเต็กปลาแซลมอน',
      price: 65,
      shopName: 'ร้านเทคโนอินเตอร์',
      imgUrl: 'https://s359.kapook.com/pagebuilder/e9470868-6b96-4e19-9a27-1d9b4f7819b6.jpg'
    },
    {
      shopNumber: '1',
      name: 'ข้าวไก่ชีส',
      price: 45,
      shopName: 'ร้านเทคโนอินเตอร์',
      imgUrl: 'https://goohiw.com/wp-content/uploads/2020/09/KFC-Chizza-3.jpg'
    },
    {
      shopNumber: '1',
      name: 'ไข่กระทะ',
      price: 45,
      shopName: 'ร้านเทคโนอินเตอร์',
      imgUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BYPJqBl961hKjrEP3TPXmAhlGIfYgkAQtXPF7QCHIVWTamM4GN.jpg'
    },
    {
      shopNumber: '3',
      name: 'ไข่พะโล้',
      price: 35,
      shopName: 'ร้านไอหนวด',
      imgUrl: 'https://i.ytimg.com/vi/vKeQOUqGkOQ/maxresdefault.jpg'
    },
    {
      shopNumber: '3',
      name: 'แกงผักกาดดอง',
      price: 35,
      shopName: 'ร้านไอหนวด',
      imgUrl: 'https://i.ytimg.com/vi/A-yJVn8Idr0/hqdefault.jpg'
    },
    {
      shopNumber: '3',
      name: 'ทอดมันปลากราย',
      price: 35,
      shopName: 'ร้านไอหนวด',
      imgUrl: 'https://img.wongnai.com/p/1920x0/2020/08/08/679c80ad67f54e02a7c4234b301ccac1.jpg'
    }
  ],
  [
    {
      shopNumber: '5',
      name: 'ข้าวมันไก่ต้ม',
      price: 40,
      shopName: 'ร้านณรงค์ข้าวมันไก่',
      imgUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg'
    },
    {
      shopNumber: '5',
      name: 'ข้าวมันไก่ทอด',
      price: 40,
      shopName: 'ร้านณรงค์ข้าวมันไก่',
      imgUrl: 'https://www.ifit4health.com/wp-content/uploads/2015/07/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88.soccersuck.jpg'
    },
    {
      shopNumber: '5',
      name: 'ข้าวขาหมู',
      price: 45,
      shopName: 'ร้านณรงค์ข้าวมันไก่',
      imgUrl: 'https://img.wongnai.com/p/1920x0/2017/06/26/16b349df2d5b471bbca679e6117f1544.jpg'
    },
    {
      shopNumber: '6',
      name: 'กุ้งทอดกระเทียม',
      price: 55,
      shopName: 'ร้านมิลเลียน',
      imgUrl: 'https://www.bloggang.com/data/j/jazzy-bong/picture/1625038085.jpg'
    },
    {
      shopNumber: '6',
      name: 'หมูมะนาว',
      price: 45,
      shopName: 'ร้านมิลเลียน',
      imgUrl: 'https://s359.kapook.com/pagebuilder/24880945-5db1-4cc9-b6d0-03f657f46bf5.jpg'
    },
    {
      shopNumber: '6',
      name: 'ไก่ต้มโค้ก',
      price: 45,
      shopName: 'ร้านมิลเลียน',
      imgUrl: 'https://cdn.discordapp.com/attachments/933974489207832619/1100678068475015239/izewmbsafwefufefvauq1rlmjdhbh3ikjyecw1q5.png'
    }
  ],
  [
    {
      shopNumber: '7',
      name: 'แกงเเขียวหวาน',
      price: 40,
      shopName: 'ร้านอิดรีส',
      imgUrl: 'https://d21dsidbdoi5kv.cloudfront.net/wp-content/uploads/2022/05/3-27.jpg'
    },
    {
      shopNumber: '7',
      name: 'แกงมัสมั่น',
      price: 40,
      shopName: 'ร้านอิดรีส',
      imgUrl: 'https://d21dsidbdoi5kv.cloudfront.net/wp-content/uploads/2022/05/9-3.jpg'
    },
    {
      shopNumber: '7',
      name: 'แกงหน่อไม้ดอง',
      price: 40,
      shopName: 'ร้านอิดรีส',
      imgUrl: 'https://d21dsidbdoi5kv.cloudfront.net/wp-content/uploads/2022/05/8-3.jpg'
    },
    {
      shopNumber: '10',
      name: 'ราเมงมิโซะ',
      price: 45,
      shopName: 'ร้าน Curry Shop',
      imgUrl: 'https://www.japancheckin.com/wp-content/uploads/2018/12/6e77f83338bed52c0b59181fae994435_s.jpg'
    },
    {
      shopNumber: '10',
      name: 'ข้าวแกงกะหรี่',
      price: 45,
      shopName: 'ร้าน Curry Shop',
      imgUrl: 'https://www.japancheckin.com/wp-content/uploads/2018/12/844489c0b9ca85cb6ceaf880d96431f7_s.jpg'
    },
    {
      shopNumber: '10',
      name: 'โซบะเย็น',
      price: 45,
      shopName: 'ร้าน Curry Shop',
      imgUrl: 'https://th.anngle.org/wp-content/uploads/2022/01/soba-main.jpg'
    }
  ],
  [
    {
      shopNumber: '11',
      name: 'ข้าวหมูกรอบ',
      price: 45,
      shopName: 'ร้านโอชานะ',
      imgUrl: 'https://sls-prod.api-onscene.com/partner_files/trueidintrend/4567/111396344.jpg'
    },
    {
      shopNumber: '11',
      name: 'ข้าวหมูแดง',
      price: 45,
      shopName: 'ร้านโอชานะ',
      imgUrl: 'https://cdn.discordapp.com/attachments/933974489207832619/1099772368303439931/image.png'
    },
    {
      shopNumber: '11',
      name: 'ข้าวหน้าเป็ด',
      price: 50,
      shopName: 'ร้านโอชานะ',
      imgUrl: 'https://www.ryoiireview.com/upload/article/202106/1624435498_e89666feb714ab9c3946f28f00c5d8c4.jpg'
    }
  ]
];
//create menu card - fiterDiv
function generateMenuItemHtml(shopNumber, name, price, shopName, imgUrl) {
  return `
    <div class="filterDiv ${shopNumber}">
      <img class="menu-img" src="${imgUrl}" alt="${name}">
      <div class="card-content">
        <div class="card-top">
          <h5 class="card-title text">${name}</h5>
          <div id="baht">฿<p class="card-text text" id="price">${price}</p></div>
        </div>
        <p class="card-text text" id="shopName">${shopName}</p>
        <div class="input-group text">
          <button class="add-btn minus" type="button">-</button>
          <input type="number" class="quantity" value="1">
          <button class="add-btn plus" type="button">+</button>
          <button class="buy">ซื้อ</button>
        </div>
      </div>
    </div>
  `;
}
// Add the generated HTML to the menu grid
for (let i = 0; i < menuItems.length; i++){
  menuItems[i].forEach(menuItem => {
    const { shopNumber, name, price, shopName, imgUrl } = menuItem;
    const menuHtml = generateMenuItemHtml(shopNumber, name, price, shopName, imgUrl);
    $(`.grid.${i+1}`).append(menuHtml);
  });
}


// get the dropdown button element
var dropdownBtn = document.getElementById("dropdownMenuTypeButton");

// add event listener to dropdown menu items
var dropdownItems = document.querySelectorAll("#dropdown-item-type");
dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
        // get the text of the clicked item
        var text = item.textContent.trim();

        // set the dropdown button text to the clicked item text
        dropdownBtn.textContent = text;
    });
});

//filter each shop
function filterSelection(c) {
    var x, i, j;
    x = document.getElementsByClassName("filterDiv");

    c = c.split(" ");

    //Page number fit food type content
    if (Math.ceil(c.length / 2) == 4) {
        currentIndex = 8;
        maxIndex = currentIndex + Math.ceil(c.length / 2) - 1;
    }
    else {
        currentIndex = 1;
        maxIndex = Math.ceil(c.length / 2);
    }

    updateProgressBar();

    for (i = 0; i < x.length; i++) {
        AddClass(x[i], "hide");
        var temp = x[i].className.split(' ');
        for (j = 0; j < c.length; j++) {
            //console.log(temp[1]);
            if (temp[1] === c[j])
                RemoveClass(x[i], "hide");
        }
    }
}

//filter each page
pageSelection('all');
function pageSelection(c) {
    x = document.getElementsByClassName("grid");
    if (c == 'all') {
        c = '1';
        maxIndex = 6;
    }
    else if (c == '8') {
        currentIndex = 8;
        maxIndex = 11;
    }

    c = c.split(" ");

    for (i = 0; i < x.length; i++) {
        AddClass(x[i], "hide");
        var temp = x[i].className.split(' ');
        for (j = 0; j < c.length; j++) {
            if (temp[1] === c[j]) {
                //console.log(temp[1], c[j]);
                RemoveClass(x[i], "hide");
            }
        }
    }
}

function AddClass(element, name) {
    var arr1;
    arr1 = element.className.split(" ");
    if (arr1.indexOf(name) == -1) {
        element.className += " " + name;
        //console.log('add : ',element.className);
    }
}

function RemoveClass(element, name) {
    var arr1;
    arr1 = element.className.split(" ");
    while (arr1.indexOf(name) > -1) {
        arr1.splice(arr1.indexOf(name), 1);
    }
    element.className = arr1.join(" ");
    //console.log('remove : ',element.className);
}

//log in
/*$('#categoryFilter').on('change', function () {
    var selectedCategory = $(this).val();
    if (selectedCategory == 'all') {
        $('#cardContainer').children().show();
    } else {
        $('#cardContainer').children().hide();
        $('#cardContainer').children('.' + selectedCategory).show();
    }
});*/

$(document).ready(function(){
  $('#signInModal').modal({
    backdrop: 'static',
    keyboard: false
  });
  $('#signUpModal').modal({
    backdrop: 'static',
    keyboard: false
  });
  $('#signInModal').modal('show');
});


//button page number
let currentIndex = 1;
var maxIndex = 6;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
    if (currentIndex > 1 && currentIndex != 8) {
        currentIndex--;
        displayContent();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        displayContent();
    }
});

function displayContent() {
    updateProgressBar();
    pageSelection(currentIndex.toString());
}
//progress bar page number
const progressBar = document.getElementById('progressBarPage');
function updateProgressBar() {
    //for single dish grid 8-11
    if (currentIndex >= 8) {
        progressBar.value = currentIndex - 7;
        progressBar.max = maxIndex - 7;
    }
    //all other grid
    else {
        progressBar.value = currentIndex;
        progressBar.max = maxIndex;
    }
    //console.log(currentIndex, maxIndex);
}

//Plus-Minus Button
const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');
const quantityInputs = document.querySelectorAll('.quantity');
minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (quantityInputs[index].value > 1) {
            quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
        }
    });
});
plusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (quantityInputs[index].value < 10) {
            quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
        }
    });
});
// Checkout Button Click Event
$('.checkout-btn').on('click', function () {
    
   /* fetch('https://localhost:7171/api/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // handle response data here
        })
        .catch(error => {
            console.error(error);
            // handle error here
        });*/
    alert('Your order has been submitted!');
    cart = [];
    subtotal = 0;
    $('.cart-list').empty();
    $('.subtotal').text('0.00');
});

//Add to cart
var cart = [];
var subtotal = 0;
const buyButtons = document.querySelectorAll('.buy');
const priceText = document.querySelectorAll('#price');
const shpName = document.querySelectorAll('#shopName');
buyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        var shpname = shpName[index].innerHTML; // get shop name from the card text shop name
        var name = $('.card-title').eq(index).text(); // get product name from the card title
        var qty = parseInt($('.quantity').eq(index).val()); // get product quantity from the input field
        var price = parseFloat(priceText[index].textContent); // get product price from the card text price
        var item = {
            shpname: shpname,
            name: name,
            qty: qty,
            price: price
        };
        cart.push(item);
        //console.log(item);
        updateCart();
    });
});

// Update Cart Function
function updateCart() {
    $('.cart-list').empty();
    var subtotal = 0;
    var shopItems = {}; // object to store items by shop name

    // Group the items by shop name
    $.each(cart, function (i, item) {
        if (!shopItems[item.shpname]) {
            shopItems[item.shpname] = [];
        }
        shopItems[item.shpname].push(item);
    });

    // Loop through the groups and display them in the cart
    $.each(shopItems, function (shpname, items) {


        var newList = $('<ul class="list-group">' +
            '<li class="list-group-item list-group-item-secondary">' +
            shpname +
            '</li>' +
            '</ul>');
        var shopTotal = 0;
        var getq = 0;
        var orderList = [];
        $.each(items, function (i, item) {
            var existingItem = newList.find('.cart-item-name:contains(' + item.name + ')');
            if (existingItem.length) {
                
                var existingQty = parseInt(existingItem.siblings('.cart-item-qty').text());
                var oldTotal = parseFloat(existingItem.siblings('.cart-item-price').text());
                var newTotal = (existingQty + item.qty) * item.price;
                existingItem.siblings('.cart-item-qty').text(existingQty + item.qty);
                existingItem.siblings('.cart-item-price').text(newTotal.toFixed(2));
                shopTotal += (newTotal - oldTotal);
                getq = newTotal;
            }
            else {
                var total = item.qty * item.price;
                shopTotal += total;
                var t = total.toFixed(2);
                newList.append('<li class="list-group-item">' +
                    '<button class="add-btn minus-cart">-</button>' +
                    '<span class="cart-item-qty">' + item.qty + '</span>' +
                    '<span class="cart-item-name">' + item.name + '</span>' +
                    '<span class="cart-baht">฿</span>' +
                    '<span class="cart-item-price">' + total + '</span>' +
                    '<button class="add-btn delete-cart"><i class="fa">&#xf014;</i></button>' +
                    '</li>');

  

            }

          
            

            // orderList.append(test)
           
        });
        subtotal += shopTotal;
        /*newList.append('<li class="list-group-item list-group-item-secondary">' +
          'Subtotal: <span class="shop-subtotal">' + shopTotal.toFixed(2) + '</span>' +
          '</li>');*/
        $('.cart-list').append(newList);
        var test = $('.cart-list')
        var order = test.text().split('')
       
    });
   
    $('.subtotal').text(subtotal.toFixed(2));
    

    //minus buttons cart
    $('.minus-cart').click(function () {
        var itemName = $(this).siblings('.cart-item-name').text().trim();
        var existingItem = $('.cart-list').find('.cart-item-name:contains(' + itemName + ')');
        var existingQty = parseInt(existingItem.siblings('.cart-item-qty').text());

        // get item price from cart array
        var itemPrice;
        $.each(cart, function (i, item) {
            if (item.name === itemName) {
                itemPrice = item.price;
                return false;
            }
        });

        if (existingQty > 1) {
            var newQty = existingQty - 1;
            var newTotal = newQty * itemPrice;
            console.log(newTotal)
            existingItem.siblings('.cart-item-qty').text(newQty);
            existingItem.siblings('.cart-item-price').text(newTotal.toFixed(2));
            subtotal -= itemPrice;
            $('.subtotal').text(subtotal.toFixed(2));
            console.log(subtotal);
            // update item in cart array
            $.each(cart, function (i, item) {
                if (item.name === itemName) {
                    item.qty -= 1;
                    return false;
                }
            });
        }
        return false;
    });

    //delete button cart
    $('.delete-cart').click(function () {
        var itemName = $(this).siblings('.cart-item-name').text();
        cart = cart.filter(function (item) {
            return item.name !== itemName;
        });
        updateCart();
    });

}

//Cart form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


//1st floor 2nd floor
function switchTo2ndFloor() {
    var firstFloorImg = document.querySelector('#firstfloor');
    var secondFloorImg = document.querySelector('#secondfloor');
    var firstFloorMap = document.querySelector('map[name="firstfloor"]');
    var secondFloorMap = document.querySelector('map[name="secondfloor"]');

    firstFloorImg.style.display = 'none';
    secondFloorImg.style.display = 'block';
    firstFloorMap.style.display = 'none';
    secondFloorMap.style.display = 'block';
}

function switchTo1stFloor() {
    var firstFloorImg = document.querySelector('#firstfloor');
    var secondFloorImg = document.querySelector('#secondfloor');
    var firstFloorMap = document.querySelector('map[name="firstfloor"]');
    var secondFloorMap = document.querySelector('map[name="secondfloor"]');

    secondFloorImg.style.display = 'none';
    firstFloorImg.style.display = 'block';
    secondFloorMap.style.display = 'none';
    firstFloorMap.style.display = 'block';
}