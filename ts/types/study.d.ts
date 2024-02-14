declare global {
    interface Window {
      gName: string;
    }
    
    interface Array<T> {
      first(): T;
    }
  }
  