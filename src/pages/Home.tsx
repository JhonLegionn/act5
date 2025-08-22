
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonCard, IonCardContent, IonText } from '@ionic/react';
import { useState } from 'react';
import './Home.css';


const API_KEY = '55ca5d30e73369e36f1ca02fe9c638b5'; // Clave real de OpenWeatherMap

const Home: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<{ temp: number; desc: string } | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    setLoading(true);
    setError('');
    setWeather(null);
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`);
      const data = await res.json();
      if (data.cod !== 200) {
        throw new Error('Ciudad no encontrada');
      }
      setWeather({
        temp: data.main.temp,
        desc: data.weather[0].description
      });
    } catch (err: any) {
      setError(err.message || 'Error al consultar el clima');
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Clima por Ciudad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="weather-container">
          <div className="weather-title">Consulta el clima</div>
          <IonItem className="weather-input">
            <IonLabel position="floating">Ciudad</IonLabel>
            <IonInput value={city} onIonChange={e => setCity(e.detail.value!)} placeholder="Ejemplo: Madrid" />
          </IonItem>
          <IonButton expand="block" className="weather-btn" onClick={getWeather} disabled={loading || !city}>
            {loading ? 'Consultando...' : 'Consultar Clima'}
          </IonButton>
          {error && (
            <div className="weather-error">{error}</div>
          )}
          {weather && (
            <IonCard className="weather-card">
              <IonCardContent>
                <div className="weather-temp">{weather.temp}°C</div>
                <div className="weather-desc">{weather.desc}</div>
              </IonCardContent>
            </IonCard>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
