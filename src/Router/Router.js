import AddDoctors from '../pages/Dashbord/AddDoctors/AddDoctors'
import AllUser from '../pages/Dashbord/AllUser/AllUser'
import ManezDoctoe from '../pages/Dashbord/ManegDoctoe/ManezDoctoe'
import MyAppoinment from '../pages/Dashbord/MyAppoinment/MyAppoinment'
import Payment from '../pages/Dashbord/Payment/Payment'
import AdminRoutes from './AdminRout/AdminRoutes'
import Privateroute from './Privateroute'

const { createBrowserRouter } = require('react-router-dom')
const { default: Layout } = require('../Layout/Layout')
const { default: Home } = require('../pages/Home/Home')
const { default: Login } = require('../pages/Login/Login')
const {
  default: Appoinment,
} = require('../pages/Appoinment/Appoinment/Appoinment')
const { default: About } = require('../pages/About/About')
const { default: Review } = require('../pages/Review/Review')
const { default: Regester } = require('../pages/Regester/Regester')
const { default: DashbordLayout } = require('../DashbordLayout/DashbordLayout')

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/appoinment',
        element: <Appoinment></Appoinment>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/review',
        element: <Review></Review>,
      },

      {
        path: '/signUp',
        element: <Regester></Regester>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
  {
    path: '/dashbord',
    element: (
      <Privateroute>
        <DashbordLayout></DashbordLayout>
      </Privateroute>
    ),
    children: [
      {
        path: '/dashbord',
        element: <MyAppoinment></MyAppoinment>,
      },
      {
        path: '/dashbord/alluser',
        element: (
          <AdminRoutes>
            <AllUser></AllUser>
          </AdminRoutes>
        ),
      },
      {
        path: '/dashbord/adddoctors',
        element: (
          <AdminRoutes>
            <AddDoctors></AddDoctors>
          </AdminRoutes>
        ),
      },
      {
        path: '/dashbord/manezdoctor',
        element: (
          <AdminRoutes>
            <ManezDoctoe></ManezDoctoe>
          </AdminRoutes>
        ),
      },
      {
        path: '/dashbord/payment/:id',
        element: (
          <AdminRoutes>
            <Payment></Payment>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://dentist-server-side.vercel.app/booking/${params.id}`),
      },
    ],
  },
])

export default router
