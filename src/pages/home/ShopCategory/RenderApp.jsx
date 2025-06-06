import React, { useContext, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../../../App.jsx'
import Home from '../Homee.jsx'
import About from '../About.jsx'
import Reviews from '../Reviews.jsx'
import Contact from '../Contact.jsx'
import Custom from '../Custom.jsx'
import Akara from './Akara.jsx'
import Ashebi from './Ashebi.jsx'
import Coprate from './Coprate.jsx'
import Kaftn from './Kaftn.jsx'
// import Matchng from "./Matchng.jsx";
import AboutThia from '../AboutThia.jsx'
import SizeGuide from '../SizeGuide.jsx'
import Terms from '../Terms.jsx'
import Care from '../Care.jsx'
import Bridls from './Bridls.jsx'
import SearchPage from '../SearchPage.jsx'
import Shopp from '../../Shopp.jsx'
import Kidies from './Kidis.jsx'
import ShopAll from '../ShopAll.jsx'
import FAQs from '../FAQs.jsx'
import Allshops from '../../Allshops.jsx'
import { useState } from 'react'
import DataResolve from '../DataResolve.jsx'
import { DataContext } from '../../../Components/DataContext.jsx'
import Products from '../../../Admin/ProductsApp.jsx'
import AddProduct from '../../../Admin/AddProduct.jsx'
import AdminHome from '../../../Admin/AdminHome.jsx'
import ProductsApp from '../../../Admin/ProductsApp.jsx'
import AdminHome2 from '../../../Admin/AdminHome2.jsx'
import AdminHome3 from '../../../Admin/AdminHome3.jsx'
import AdminHome4 from '../../../Admin/AdminHome4.jsx'
import Login from '../../Login.jsx'
import Account from '../../../Components/Account.jsx'
import Signin from '../../Signup.jsx'
import Signup from '../../Signup.jsx'

import Matching from './Matchingg.jsx'
import Thankyou from '../../Thankyou.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCloths } from '../../../features/cloth/clothSlice.js'
import Bridals from './Bridls.jsx'
import VerifyEmail from '../../verifyEmail.jsx'
import Admission from '../../../Admin/Admission.jsx'
import Payment from '../Payment.jsx'
import AccountRecovery from '../../AccountRecovery.jsx'
import ResetPassword from '../../ResetPassword.jsx'

const RenderAppWithData = () => {
  // const [Data, setData] = useState()

  const { Data } = useContext(DataContext)
  //using redox below

  const AnkaraProducts = Data.filter(item => item.brand === 'Ankara')
  const AhebiProducts = Data.filter(item => item.brand === 'Ashoebi')
  const CoperateProducts = Data.filter(item => item.brand === 'coperate')


  const KaftanProducts = Data.filter(item => item.brand === 'kaftan')
  const MatchingProducts = Data.filter(item => item.brand === 'matching')

  const BridalProducts = Data.filter(item => item.brand === 'bridals')
  const KidiesProducts = Data.filter(item => item.brand === 'kidies')

  const [IsQuestionOpen, setIsQuestionOpen] = useState(false)

  const handleAnswerShow2 = () => {
    setIsQuestionOpen(prev => !prev)
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/About', element: <About /> },
        { path: '/Contact', element: <Contact /> },
        { path: '/Reviews', element: <Reviews /> },
        { path: '/Custom', element: <Custom /> },
        { path: '/Allshops', element: <Allshops /> },

        {
          path: '/FAQs',
          element: (
            <FAQs
              handleAnswerShow2={handleAnswerShow2}
              IsQuestionOpen={IsQuestionOpen}
            />
          )
        },
        {
          path: '/Akara',
          element: <Akara />
        },
        {
          path: '/Ashebi',
          element: <Ashebi />
        },
        {
          path: '/Coprate',
          element: <Coprate />
        },
        {
          path: '/Kaftn',
          element: <Kaftn />
        },
        {
          path: '/Bridls',
          element: <Bridals />
        },
        {
          path: '/Matchng',
          element: <Matching />
        },
        { path: '/Kidis', element: <Kidies /> },
        { path: '/AboutThia', element: <AboutThia /> },
        { path: '/SizeGuide', element: <SizeGuide /> },
        { path: '/Terms', element: <Terms /> },
        { path: '/Care', element: <Care /> },
        { path: '/SearchPage', element: <SearchPage /> },
        { path: '/ShopAll', element: <ShopAll /> },
        { path: '/Login', element: <Login /> },
        { path: '/Account', element: <Account /> },
        { path: '/Signup', element: <Signup /> },
        { path: '/thankyou', element: <Thankyou /> },
        { path: '/verifyEmail', element: <VerifyEmail /> },
        {
          path: '/Ankara/:id',
          element: <Shopp dataItems={AnkaraProducts} />
        },
        {
          path: '/Ashoebi/:id',
          element: <Shopp dataItems={AhebiProducts} />
        },
        {
          path: '/Coperate/:id',
          element: <Shopp dataItems={CoperateProducts} />
        },
        {
          path: '/Bridals/:id',
          element: <Shopp dataItems={BridalProducts} />
        },
        {
          path: '/Kaftan/:id',
          element: <Shopp dataItems={KaftanProducts} />
        },
        {
          path: '/Matching/:id',
          element: <Shopp dataItems={MatchingProducts} />
        },
        {
          path: '/Kidies/:id',
          element: <Shopp dataItems={KidiesProducts} />
        },
        {
          path: '/payment',
          element: <Payment />
        },
        {
          path: '/accountrecovery',
          element: <AccountRecovery />
        },
        {
          path: '/resetPassword/:token',
          element: <ResetPassword />
        }
      ]
    },

    {
      path: '/Admin',
      element: <ProductsApp />,
      children: [
        {
          path: '/Admin',
          element: <AdminHome />
        },
        {
          path: '/Admin/AddProduct',
          element: <AddProduct />
        },
        {
          path: '/Admin/AdminHome2',
          element: <AdminHome2 />
        },
        {
          path: '/Admin/AdminHome3',
          element: <AdminHome3 />
        },
        {
          path: '/Admin/AdminHome4',
          element: <AdminHome4 />
        },
        {
          path: '/Admin/applicants',
          element: <Admission />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default RenderAppWithData
