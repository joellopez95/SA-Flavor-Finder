const db = require('./connection');
const { User, FoodTruck, Category, HiddenGem, Restaurant, Product } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('FoodTruck', 'foodtrucks');
  await cleanDB('HiddenGem', 'hiddengems');
  await cleanDB('Restaurant', 'restaurants');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Restaurants' },
    { name: 'Food Trucks' },
    { name: 'Hidden Gems' }
  ]);

  console.log('Categories seeded');
    const products = await Product.insertMany([
    {
      name: 'Pizza Italia',
      category: categories[0]._id,
      description:
        'in San Antonio, Texas, offers a delightful taste of Italy with its authentic pizza and warm hospitality. Explore Italian flavors!',
      image: 'pizzaItalia.jpg',
      WebSite: 'https://www.yelp.com/biz/pizza-italia-san-antonio',
      location:'3023 Thousand Oaks Dr Ste 101 San Antonio, TX 78247'
    },
    {
      name: 'Zaatar Lebanese Restaurant',
      category: categories[0]._id,  
      description:
        'Our food philosophy begins at the table. Sharing amazing dishes is a tradition our families continue to build upon year over year.',
      image: 'Zaatar.png',
      WebSite: 'https://gozaatar.com/',
      location:'9329 Wurzbach Rd Ste 101 San Antonio, TX 78240'
    },
    {
      name: 'Pollos Asados Los Nortenos',
      category: categories[0]._id,
      description:'Pollos Asados Los Norteños started back in 2006 as a fundraiser for a new church in the Mexican town of Nueva Rosita, Coahuila. The whole family got involved, sons and daughter, brothers, sisters-in-law and cousins.',
      image: 'pollosAsados.png',
      WebSite: 'https://www.polloslosnortenos.com/about/',
      location:'4642 Rigsby Ave San Antonio, TX 78222'
    },
    {
      name: 'The Box Street Social',
      category: categories[0]._id,
      description:'Start your day with coffee & donuts or END IT WITH A NIGHTCAP. Toast TO special moments with a glass of bubbleS or have Box Street all to yourself as a private event space.',
      image: 'BoxStreet.png',
      WebSite: 'https://boxstallday.com/',
      location:'623 Hemisfair Blvd Ste 108 San Antonio, TX 78205'
    },
    {
      name: 'The Art of Donut',
      category: categories[0]._id,
      description:'fresh handmade donuts, hot coffee, excellent service and comfortable environment. Our hearts and souls are dedicated to baking and serving in order to create a flavor that will leave everyone craving more.',
      image: 'artOfDonut.png',
      WebSite: 'https://www.artofdonut.com/',
      location:'3428 N Saint Marys St San Antonio, TX 78212'
    },
    {
      name: 'Tacos El Regio',
      category: categories[1]._id,
      description:
        'Tacos El Regio was founded in 2007 by Fernando Quintanilla, inspired by his love for the cuisine of Monterrey, Mexico.',
      image: 'TacosElRegio.png',
      WebSite: 'https://www.tacoselregiosatx.com/',
      location: '12757 Nacogdoches Rd, San Antonio, TX 78217'
    },
    {
      name: 'Masshole',
      category: categories[1]._id,
      description:'in San Antonio, Texas, is a local gem renowned for its delicious lobster rolls and New England flavors.',
      image: 'Masshole.jpg',
      WebSite: 'www.yelp.com/biz/masshole-lobster-truck-san-antonio?hrid=1XeM1k9qckMtzmyCrQg9NA',
      location:'511 E Grayson St San Antonio, TX 78215'
    },
    {
      name: 'Area 51 Food Park',
      category: categories[1]._id,
      description:'Food Trucks, Venues & Event Spaces, Beer Gardens',
      image: 'Area51.jpg',
      WebSite: 'https://www.facebook.com/area51foodpark/',
      location:'12275 Potranco Rd San Antonio, TX 78253'
    },
    {
      name: 'RJ Indian Street Food',
      category: categories[1]._id,
      description:'Authentic and tasty Indian street food is hard to find in San Antonio',
      image: 'RjIndian.jpg',
      WebSite: 'https://www.yelp.com/biz/rj-indian-street-food-san-antonio?osq=Food+Trucks',
      location:'6576 Babcock Rd San Antonio, TX 78249'
    },
    {
      name: 'The Doseum',
      category: categories[2]._id,
      description:'There’s a camp for every child at The DoSeum! Our camps will engage campers in STEM, the arts, and literacy, and inspire them to explore, discover, create, and learn. ',
      image: 'Dosuem.png',
      WebSite: 'https://www.thedoseum.org/',
      location:'2800 Broadway St San Antonio, TX 78209'
    },
    {
      name: 'Yanaguana Garden at Hemisfair',
      category: categories[2]._id,
      description:'The playground at Yanaguana Garden is designed to be an inclusive space for families and events. The playground is a place where children of all ages and abilities can play and learn together.',
      image: 'Hemisfair.png',
      WebSite: 'https://hemisfair.org/play/',
      location:'623 Hemisfair Blvd, San Antonio, TX 78205'
    },
    {
      name: 'The Great Outdoors',
      category: categories[2]._id,
      description:'On the north side of San Antonio lies a 12,000-acre wilderness that protects the citys drinking water. You will find your own “Recharge Zone” in this vast urban refuge.',
      image: 'Outdoors.jpg',
      WebSite: 'https://tpwd.texas.gov/state-parks/government-canyon',
      location:'12861 Galm Rd, San Antonio, TX 78254'
    },
    {
      name: 'The Alamo',
      category: categories[2]._id,
      description:'The Alamo is a historic destination for the entire family. Remember the Alamo!',
      image: 'Alamo.jpg',
      WebSite: 'https://www.thealamo.org/',
      location:'300 Alamo Plaza San Antonio, TX 78205'
    },
    {

      name: 'San Antonio River Walk',
      category: categories[2]._id,
      description:'The San Antonio River Walk is a city park and network of walkways along the banks of the San Antonio River, one story beneath the streets of San Antonio, Texas, United States.',
      image: 'riverWalk.jpg',
      WebSite: 'https://www.thesanantonioriverwalk.com/',
      location:'849 E Commerce St, San Antonio, TX 78205'
    },
    {
      name: 'San Antonio Zoo',
      category: categories[2]._id,
      description:'The San Antonio Zoo is an Association of Zoos and Aquariums-accredited zoo in Midtown San Antonio, Texas, United States. It is located in the citys Brackenridge Park.',
      image: 'Zoo.jpg',
      WebSite: 'https://sazoo.org/',
      location:'3903 N St Marys St, San Antonio, TX 78212'
    },
    {
      name: 'San Antonio Museum of Art',
      category: categories[2]._id,
      description:'The San Antonio Museum of Art is an art museum in Downtown San Antonio, Texas, USA. With a collection spanning 5,000 years of global culture, SAMA is the only encyclopedic museum of fine art in South Texas.',
      image: 'museum.jpg',
      WebSite: 'https://www.samuseum.org/',
      location:'200 W Jones Ave, San Antonio, TX 78215'
    },
    {
      name: 'Natural Bridge Caverns',
      category: categories[2]._id,
      description:'Natural Bridge Caverns is a collection of natural limestone caverns located in the Texas Hill Country near the city of San Antonio.',
      image: 'Caverns.jpg',
      WebSite: 'https://naturalbridgecaverns.com/',
      location:'26495 Natural Bridge Caverns Rd, San Antonio, TX 78266'
    },
    
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Anthony',
    lastName: 'Strickland',
    email: 'anthony@AOLOnline.com',
    password: 'password12345',
    admin: true,    
  });
  await User.create({
    firstName: 'Maribel',
    lastName: 'Calvario',
    email: 'mari@AOLOnline.com',
    password: 'password12345',
    admin: true,    
  });
  await User.create({
    firstName: 'Sebastian',
    lastName: 'Hoang',
    email: 'sebastian@AOLOnline.com',
    password: 'password12345',
    admin: true,    
  });
  await User.create({
    firstName: 'Joel',
    lastName: 'Lopez',
    email: 'joel@AOLOnline.com',
    password: 'password12345',
    admin: true,    
  });

  await User.create({
    firstName: 'Mike',
    lastName: 'Jones',
    email: 'Mike@AOLOnline.com',
    password: 'password12345'
  });

  console.log('users seeded');

  const restaurants = await Restaurant.insertMany([
    // restaurant data here
  ]);

  console.log('Restaurants seeded');

  const foodTrucks = await FoodTruck.insertMany([
    //  food truck data here
  ]);

  console.log('Food Trucks seeded');

  const hiddenGems = await HiddenGem.insertMany([
    //  hidden gem data here
  ]);

  console.log('Hidden Gems seeded');

  process.exit();
});
