export const preloadImages = (
  urls: string[],
  onProgress: (progress: number) => void
): Promise<HTMLImageElement[]> => {
  return new Promise((resolve) => {
    let loadedCount = 0;
    const total = urls.length;

    if (total === 0) {
      resolve([]);
      return;
    }

    let skipInterval = 1;
    // Simple low-end device detection (fallback)
    if (typeof navigator !== 'undefined' && 'hardwareConcurrency' in navigator) {
      if ((navigator as any).hardwareConcurrency <= 4) {
        skipInterval = 2; // Load every other frame for low-end
      }
    }

    const loadedImages: HTMLImageElement[] = new Array(total).fill(null);
    let framesToLoad = 0;

    for (let i = 0; i < total; i++) {
      // Load if it matches the skip interval OR if it's the very last frame.
      if (i % skipInterval !== 0 && i !== total - 1) {
        continue;
      }
      framesToLoad++;
      const img = new Image();
      img.src = urls[i];
      
      img.onload = () => {
        loadedImages[i] = img;
        loadedCount++;
        onProgress(Math.round((loadedCount / framesToLoad) * 100));
        
        if (loadedCount === framesToLoad) {
          fillInterpolation(loadedImages, total);
          resolve(loadedImages); // Return dense array (maintaining length)
        }
      };
      
      img.onerror = () => {
        loadedCount++;
        onProgress(Math.round((loadedCount / framesToLoad) * 100));
        if (loadedCount === framesToLoad) {
          fillInterpolation(loadedImages, total);
          resolve(loadedImages);
        }
      };
    }
  });

  function fillInterpolation(loadedImages: HTMLImageElement[], total: number) {
    // Always interpolate just in case any network errors left gaps (nulls)
    let lastValid: HTMLImageElement | null = null;
    
    // Find first valid image to prevent crashes if index 0 failed
    for(let k = 0; k < total; k++) {
      if (loadedImages[k]) {
        lastValid = loadedImages[k];
        break;
      }
    }

    if (!lastValid) return; // Completely failed to load any frames

    for(let j = 0; j < total; j++) {
      if (!loadedImages[j]) {
        loadedImages[j] = lastValid; // duplicate previous frame's reference
      } else {
        lastValid = loadedImages[j];
      }
    }
  }
};
