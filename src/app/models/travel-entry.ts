export interface TravelEntry {
  id: number;
  title: string;
  country: string;
  googleMapsLink: string;
  dates: string;
  text: string;
  img: {
    src: string;
    alt: string;
  };
}
