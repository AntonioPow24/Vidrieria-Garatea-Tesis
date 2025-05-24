
export const bannerImages ={
    morning: "https://i.postimg.cc/qBmSQHyD/Banner-Morning.webp",
    afternoon: "https://i.postimg.cc/gkn5TtKz/Banner-Afternoon.webp",
    evening: "https://i.postimg.cc/Fzn6K0hX/Banner-Night.webp",
}

const getPeruHour = () => {
  const now = new Date()

  const utc = now.getTime() + (now.getTimezoneOffset() * 60000)
  return new Date(utc - (5 * 60 * 60 * 1000))
}

export const getBannerData = () => {
  const hour = getPeruHour().getHours()
  const minute = getPeruHour().getMinutes()
  // 5:00am - 11:59am
  if (hour >= 5 && hour < 12) {
    return {
      greeting: 'Buenos días',
      image: bannerImages.morning,
      message: 'Que tenga buen día',
    }
  }
  // 12:00pm - 6:29pm
  if ((hour === 12) || (hour > 12 && (hour < 18 || (hour === 18 && minute < 30)))) {
    return {
      greeting: 'Buenas tardes',
      image: bannerImages.afternoon,
      message: 'Que tenga buena tarde',
    }
  }
  // 6:30pm - 4:59am
  return {
    greeting: 'Buenas noches',
    image: bannerImages.evening,
    message: 'Que tenga buena noche',
  }
}