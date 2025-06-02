/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text-white': '#EDEDED',
        'text-blueClient': '#505AB6',
        'textDark':'#272727',
        'textInputForm':'#636363',
        'textWhiteTransparent':'#F9F9F9A8',
        
        'adminTextDark':'#404040',
        'adminTextWhite':'#b8b7b7',
        'adminTextPurple':'#9D78E5',
        'adminTextPending':'#EEBD10',

        'adminInputBg':'#ECECEC',
        'userDetailBg':'#10101099',



        'popUpDropDown':'#171717B3',
        'categorySelected':'#54BFE1B2',
        'logOut':'#F17777',
        'success':'#2EBE45',
        'skyBlueApp':'#54BFE1',


        'appBgWhite':'#EEE',
        'appBgBlack':'#232323',
        'adminBgWhite' : '#F5F5F5',
        'adminBgContrast':'#DADDEB',

        'footerBg':'#131313',
        'bgContactHeader':'#4E57A6',
        'formContactBg':'#DDE1E2',
        'projectBg':'#43424256',
        'productCardBg':'#B5BFC9',
        'purpleElectricBg' :'#7040F9',
        'dashboardPurpleBg' :'#6445BC',
        'userDarkContrast' :'#363636',
      },
    },
    screens: {
      'smallPhone':{'max':'350px'} ,
      // => @media (min-width: 640px) { ... }

      '390':{'max':'390px'},

      '430':{'max':'430px'},

      '442':{'max': '442px'},

      '455':{'max':'455px'},

      'bigPhone':{'max':'520px'} ,
      // => @media (min-width: 768px) { ... }

      '500':{'max':'500px'},
      '580':{'max':'580px'},


      '648':{'max':'648px'},
      '685':{'max':'685px'},

      'smallTablet':{'max':'620px'} ,


      '700':{'max':'700px'} ,
      
      '720':{'max':'720px'} ,

      '722':{'max':'722px'} ,

      '730':{'max':'730px'} ,

      '770':{'max':'770px'} ,

      '849':{'max':'849px'} ,

      'tablet':{'max':'820px'} ,

      'bigTablet':{'max':'950px'},

      '1000':{'max':'1000px'},
      
      'ipad':{'max':'1050px'} ,
      
      '1070':{'max':'1070px'},
      
      '1300':{'max':'1300px'},

      '1320':{'max':'1320px'},
      
      '1360':{'max':'1360px'},

      '1400':{'max':'1400px'},

      '1442':{'max':'1442px'},

      '1450':{'max':'1450px'},
      
      '1500':{'max':'1500px'},

      '1520':{'max':'1520px'},

      '1710':{'max':'1710px'},
      '1780':{'max':'1780px'},

      '1880':{'max':'1880px'},

      'laptop':{'max':'1480px'} ,
      // => @media (min-width: 1280px) { ... }


      'bigLaptop':{'max':'1480px'} ,
      // => @media (min-width: 1280px) { ... }
      
      'smallDesktop':{'max':'1550px'} ,
      // => @media (min-width: 1280px) { ... }

      '1570':{'max':'1570px'} ,

      '1700':{'max':'1700px'} ,
      // => @media (min-width: 1280px) { ... }

      

      'laptopMin':'1460px',
      'tabletMin':'850px',



      '1880tomax': {'min': '1880px', 'max': '1920px'},
      '1520to1300': {'min': '1300px', 'max': '1520px'},
      '1300to1442': {'min': '1300px', 'max': '1442px'},
      '1300to1780': {'min': '1300px', 'max': '1780px'},
      '1580to1880': {'min': '1500px', 'max': '1880px'},
      '1500to1650': {'min': '1500px', 'max': '1650px'},
      '849to1480': {'min': '849px', 'max': '1480px'},
      '770to1480': {'min': '770px', 'max': '1480px'},
      '730to1500': {'min': '730px', 'max': '1500px'},
      '850to1500': {'min': '850px', 'max': '1500px'},
      '730to849': {'min': '730px', 'max': '849px'},
      '730to1070': {'min': '730px', 'max': '1070px'},
      '455to1920': {'min': '455px', 'max': '1920px'},
      '1650to1700': {'min': '1650px', 'max': '1700px'},

      //para ProductDetail
      '1480to1920': {'min': '1481px', 'max': '1920px'},
      '850to1480': {'min': '850px', 'max': '1480px'},
    }
  },
  darkMode:'class',
  plugins: [],
}