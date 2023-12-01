import tour1 from './assets/images/tour-1.jpeg'
import tour2 from './assets/images/tour-2.jpeg'
import tour3 from './assets/images/tour-3.jpeg'
import tour4 from './assets/images/tour-4.jpeg'

export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' },

]

export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },

]

export const serviceDetails = [
    { id: 1, icon: 'fas fa-wallet fa-fw', title: 'Saving Money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
    { id: 2, icon: 'fas fa-tree fa-fw', title: 'Endless Hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
    { id: 3, icon: 'fas fa-socks fa-fw', title: 'Amazing Comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' }

]

const Desc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`;
export const ToursList = [
    { id: 1, img: tour1, date: 'august 26th, 2020', title: 'Tibet Adventure', text: Desc, location: 'China', duration: '6 Days', amount: '$2100' },
    { id: 2, img: tour2, date: 'october 11th, 2020', title: 'Best Of Java', text: Desc, location: 'Indonesia', duration: '11 Days', amount: '$1400' },
    { id: 3, img: tour3, date: 'september 15th, 2020', title: 'Explore Hong Kong', text: Desc, location: 'Hong Kong', duration: '8 Days', amount: '$5000' },
    { id: 4, img: tour4, date: 'december 5th, 2020', title: 'Kenya Highlights', text: Desc, location: 'kenya', duration: '20 Days', amount: '$3300' },

]