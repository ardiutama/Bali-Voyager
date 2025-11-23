export interface TourPackage {
  title: string;
  duration: string;
  price: string;
  accommodation: string;
  inclusions: string[];
  description: string;
}

export interface Area {
  id: string;
  name: string;
  description: string;
  regencyId: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  tourPackage?: TourPackage;
}

export interface Regency {
  id: string;
  name: string;
}

export interface GeminiResponse {
  text: string;
  groundingChunks?: Array<{
    web?: {
      uri: string;
      title: string;
    };
    maps?: {
      uri: string;
      title: string;
      placeAnswerSources?: Array<{
        reviewSnippets?: Array<{
          content: string;
        }>
      }>
    }
  }>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  groundingMetadata?: GeminiResponse['groundingChunks'];
}