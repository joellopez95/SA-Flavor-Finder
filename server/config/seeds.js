const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Restaurants' },
    { name: 'Food Trucks' },
    { name: 'Hidden Gems' }
  ]);

  console.log('categories seeded');
    const products = await Product.insertMany([
    {
      name: 'Pizza Italia',
     
      category: categories[0]._id,
      description:
        'in San Antonio, Texas, offers a delightful taste of Italy with its authentic pizza and warm hospitality. Explore Italian flavors!',
      image: 'https://www.yelp.com/biz/pizza-italia-san-antonio',
      WebSite: www.yelp.com/biz/pizza-italia-san-antonio,
      location:
    },
    {
      name: 'Tacos El Regio',
      category: categories[0]._id,
      description:
        'in San Antonio, Texas, is a local gem renowned for its delicious tacos and Mexican flavors.',
      image: 'https://www.yelp.com/biz/tacos-el-regio-san-antonio',
      WebSite: www.yelp.com/biz/tacos-el-regio-san-antonio,
      location: '8030 S Zarzamora St San Antonio, TX 78224'
    },
    {
      name: 'Zaatar Lebanese Restaurant',
      category: categories[0]._id,  
      description:
        'in San Antonio, Texas, offers a delightful taste of Lebanon with its authentic cuisine and warm hospitality. Explore Lebanese flavors!',
      image: 'https://www.yelp.com/biz/zaatar-lebanese-grill-san-antonio',
      WebSite: www.yelp.com/biz/zaatar-lebanese-grill-san-antonio,
      location:
    },
    {
      name: 'Simis Indian Cuisine',
      category: categories[0]._id,
      description:
        'in San Antonio, Texas, invites you on a flavorful journey through Indian cuisine. Explore the rich flavors of India!',
      image: 'https://www.yelp.com/biz/simis-india-cuisine-san-antonio',
      WebSite: www.yelp.com/biz/simis-india-cuisine-san-antonio,
      location:
    },
    {
      name: 'Pollos Asados Los Nortenos',
      category: categories[0]._id,
      description:
        'in San Antonio, Texas, is a local gem renowned for its delicious grilled chicken and Mexican flavors.',
      image: 'https://www.yelp.com/biz/pollos-asados-los-norte%C3%B1os-san-antonio',
      WebSite: www.yelp.com/biz/pollos-asados-los-norte%C3%B1os-san-antonio,
      location:
    },
    {
    name: 'Masshole',
      category: categories[1]._id,
      // Add description
      description:'in San Antonio, Texas, is a local gem renowned for its delicious lobster rolls and New England flavors.',
      image: 'https://www.yelp.com/biz/masshole-lobster-truck-san-antonio?hrid=1XeM1k9qckMtzmyCrQg9NA',
      WebSite: www.yelp.com/biz/masshole-lobster-truck-san-antonio?hrid=1XeM1k9qckMtzmyCrQg9NA,
      location:
    },
      {
      name: 'The Gypsy Diner',
      category: categories[1]._id,
      // Add description
      description:'in San Antonio, Texas, offers a delightful taste of America with its authentic diner food and warm hospitality. Explore American flavors!',
      image: 'https://www.yelp.com/biz/the-gypsy-diner-san-antonio',
      WebSite: www.yelp.com/biz/the-gypsy-diner-san-antonio,
      location:
    },
    {
      name: 'The Rolling Pig',
      category: categories[1]._id,
      // Add description
      description:'in San Antonio, Texas, is a local gem renowned for its delicious pork dishes and American flavors.',
      image: 'https://www.yelp.com/biz/the-rolling-pig-san-antonio',
      WebSite: www.yelp.com/biz/the-rolling-pig-san-antonio,
      location:
    },
    {
      name: 'The Box Street Social',
      category: categories[1]._id,
      // Add description
      description:'in San Antonio, Texas, offers a delightful taste of America with its authentic street food and warm hospitality. Explore American flavors!',
      image: 'https://www.yelp.com/biz/the-box-street-social-san-antonio',
      WebSite: www.yelp.com/biz/the-box-street-social-san-antonio,
      location:
    },
    {
      name: 'The Art of Donut',
      category: categories[1]._id,
      // Add description
      description:'in San Antonio, Texas, offers a delightful taste of America with its authentic donuts and warm hospitality. Explore American flavors!',
      image: 'https://www.yelp.com/biz/the-art-of-donut-san-antonio',
      WebSite: www.yelp.com/biz/the-art-of-donut-san-antonio,
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
