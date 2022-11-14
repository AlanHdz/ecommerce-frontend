import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'

export default {
    path: '',
    children: [
        {
            path: '',
            name: 'home',
            component: HomeView
        },
        {
            path: '/shop',
            name: 'shop',
            component: ShopView 
        }
    ]
}