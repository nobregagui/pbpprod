import create from "zustand";

interface StoreState {
  isActiveMobile: boolean;
  toggleActiveMobile: (value: boolean) => void;
  isActive: boolean;
  toggleActive: (value: boolean) => void;
  croppedImage: string | null;
  setCroppedImage: (croppedImage: string | null) => void;
  imageSrc: string | null;
  setImageSrc: (imageSrc: string | null) => void;
  step: "profile" | "notification" | "historic" | null;
  setStep: (step: "profile" | "notification" | "historic" | null) => void;
}

const useStore = create<StoreState>((set) => {
  // Tente recuperar imageSrc e step do localStorage quando a store é inicializada
  const storedImageSrc = localStorage.getItem("imageSrc");

  return {
    isActiveMobile: false,
    toggleActiveMobile: (value: any) => set({ isActiveMobile: value }),
    isActive: true,
    toggleActive: (value: any) => set({ isActive: value }),
    croppedImage: null,
    setCroppedImage: (croppedImage: any) => set({ croppedImage }),
    // Use storedImageSrc como valor inicial de imageSrc ou null se não estiver armazenado no localStorage
    imageSrc: storedImageSrc || null,
    setImageSrc: (imageSrc: any) => {
      // Atualize imageSrc na store
      set({ imageSrc });
      // Armazene imageSrc no localStorage para persistência
      if (imageSrc) {
        localStorage.setItem("imageSrc", imageSrc);
      } else {
        // Remova imageSrc do localStorage se for null
        localStorage.removeItem("imageSrc");
      }
    },
    step: "profile",
    setStep: (step: any) => {
      set({ step });
    },
  };
});

export default useStore;
