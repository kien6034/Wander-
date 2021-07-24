import React from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { nanoid } from 'nanoid';
import ContentHeader from '../container/content_header/content_header';
import CardContainer from '../container/card_container/card_container';
import CustomButton from '../components/Buttons/button';
import { FetchProducts } from '../redux/actions/homeAction';
import About from '../template/about/about';
import CarouselWithTab from '../container/tab_carousel/tab_carousel';
import DashBoard from '../container/dashboard/dashboard'

const DataBrand = [
  {
    id: nanoid(),
    productName: 'JORDAN',
    imageurl:
      'https://cdn.huongnghiepaau.com/wp-content/uploads/2017/12/851a3e9c866bd8216df247b9d7bec9b3.jpg',
    imgBrandSrc:
      'https://stockx-assets.imgix.net/png/brand-tiles/img-jordan.png?auto=compress,format',
    urlKey: 'brand/sneakers/jordan',
  },
  {
    id: nanoid(),
    productName: 'NIKE',
    imageurl:
      'https://stockx-assets.imgix.net/png/brand-tiles/sneakers/homepage-tiles-nike-v2.png?auto=compress,format',
    imgBrandSrc:
      'https://stockx-assets.imgix.net/png/brand-tiles/img-nike.png?auto=compress,format',
    urlKey: 'brand/sneakers/nike',
  },
  {
    id: nanoid(),
    productName: 'ADIDAS',
    imageurl:
      'https://stockx-assets.imgix.net/png/brand-tiles/sneakers/homepage-tiles-adidas.png?auto=compress,format',
    imgBrandSrc:
      'https://stockx-assets.imgix.net/png/brand-tiles/img-adidas.png?auto=compress,format',
    urlKey: 'brand/sneakers/adidas',
  },
];

const DataDashBoard = [
  {
    id: 1,
    name: 'Wander',
    completion: 89,
    total_transaction: 35,
    location: '34 Dinh Cong, Hanoi',
    imgUrl: 
    'https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png',
  },
  {
    id: 2,
    name: 'Watson',
    completion: 80,
    total_transaction: 5,
    location: '84 Hoan Kien, Hanoi',
    imgUrl: 
    'https://cdn.dribbble.com/users/25200/screenshots/1759526/gfpp-logo-dribble.png?compress=1&resize=400x300',
  },
  {
    id: 3,
    name: 'Lig',
    completion: 80,
    total_transaction: 5,
    location: '84 Hoan Kien, Hanoi',
    imgUrl: 
    'https://cdn.dribbble.com/users/25200/screenshots/1759526/gfpp-logo-dribble.png?compress=1&resize=400x300',
  },
  {
    id: 4,
    name: 'AW',
    completion: 80,
    total_transaction: 5,
    location: '84 Hoan Kien, Hanoi',
    imgUrl: 
    'https://cdn.dribbble.com/users/25200/screenshots/1759526/gfpp-logo-dribble.png?compress=1&resize=400x300',
  }
]

function Home()
{
  const homeState = useSelector((state) => state.homeState);

  const dispatch = useDispatch();
  React.useEffect(() =>
  {
    if (homeState.homeData !== {}) dispatch(FetchProducts());
  }, []);

  if (homeState.loading)
  {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress size={80} />
      </div>
    );
  }
  return (
    <React.Fragment key="main">
      <ContentHeader />
      <CarouselWithTab />
      <Container maxWidth="md">
        <CardContainer type="brand" title="Popular Brands" data={DataBrand} />
        <CardContainer
          title="Most Popular"
          data={homeState.homeData.mostPopular}
        />
        <CardContainer
          title="What's trending"
          data={homeState.homeData.trending}
        />
        <div style={{
          textAlign: 'center',
          margin: '20px 0',
        }}
        >
          <Link to="/brand/sneakers" style={{ textDecoration: 'none' }}>
            <CustomButton backgroundColor="primary" buttonSize="btn--large">
              Browse Thousands of Sneakers on our Live Marketplace
            </CustomButton>
          </Link>
        </div>
      </Container>
      {/* <PosterHome /> */}
      <About />
      <Container>
        <DashBoard data={DataDashBoard}/>
      </Container>
    </React.Fragment>
  );
}

export default Home;
