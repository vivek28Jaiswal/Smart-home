import axios from 'axios';

function getWeatherData() {
  const apiKey = '16a38d83af836c90ee6837bcc746a9d6';

  return new Promise((resolve, reject) => {
    // Step 1: Get user location (Geolocation API)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;

            // Step 2: Call weather API with lat/lon
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
            const response = await axios.get(apiUrl);

            if (response.status === 200) {
              const data = response.data;
              resolve({
                temperature: data.main.temp,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                city: data.name,
              });
            } else {
              reject(new Error("Weather data not found"));
            }
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
          reject(new Error("Location access denied"));
        }
      );
    } else {
      reject(new Error("Geolocation not supported in this browser"));
    }
  });
}

export default getWeatherData;
