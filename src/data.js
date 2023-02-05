import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'



export const pageLinks =[
    {id:1, href:'#home', text: 'home'},
    {id:2, href:'#about', text: 'about'},
    {id:3, href:'#services', text: 'services' } ,
    {id:4, href:'#tours', text: 'tours' },
];

export const socialLinks =[
    {id:1, href:'https://www.twitter.com', icon:'fab fa-facebook'},
    {id:1, href:'https://www.twitter.com', icon:'fab fa-twitter'},
    {id:1, href:'https://www.twitter.com', icon:'fab fa-squarespace'}
];

export const services = [
    { id:1, 
      icon: 'fas fa-wallet fa-fw',
      title:'saving money',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},

    { id:2, 
      icon: 'fas fa-wallet fa-fw',
      title:'saving money',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},

    { id:3, 
      icon: 'fas fa-wallet fa-fw',
      title:'saving money',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},

    { id:4, 
      icon: 'fas fa-wallet fa-fw',
      title:'saving money',
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'}
];

export const tours =[
    { id:1,
      image: tour1,
      date:'august 26th, 2020',
      title:'Tibet Adventure',
      info:'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod',
      location:'Tibet',
      duration:'4 days',
      cost:2100,
    },

    { id:2,
        image: tour2,
        date:'august 26th, 2020',
        title:'China Adventure',
        info:'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod',
        location:'China',
        duration:'6 days',
        cost:3256
      },

      { id:3,
        image: tour3,
        date:'august 26th, 2020',
        title:'Egypt Adventure',
        info:'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod',
        location:'Egypt',
        duration:'11 days',
        cost:6456
      },

      { id:4,
        image: tour4,
        date:'august 26th, 2020',
        title:'UK Adventure',
        info:'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod',
        location:'UK',
        duration:'9 days',
        cost:8734
      }


]