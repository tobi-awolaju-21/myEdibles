    // Function to generate a unique identifier based on device information
    async function generateUniqueId() {
        // Use device information to create a unique identifier (this is a simplistic example)
        const deviceInfo = navigator.userAgent;
        const hashedInfo = await hashFunction(deviceInfo);
        return hashedInfo;
      }
  
      // Function to generate hash using SHA-256 algorithm
      async function hashFunction(input) {
        // Use the SubtleCrypto API for better security (available in modern browsers)
        if (window.crypto && window.crypto.subtle) {
          const encoder = new TextEncoder();
          const data = encoder.encode(input);
      
          const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        } else {
          // Fallback for browsers that do not support SubtleCrypto
          const hash = CryptoJS.SHA256(input);
          return hash.toString(CryptoJS.enc.Hex);
        }
      }
  
      // Generate a new user ID and show the pop-up
      async function showUserIdPopup() {
        const userId = await generateUniqueId();
        localStorage.setItem('userId', userId);
    
        // Show the pop-up with the new user ID
        const popup = document.getElementById('popup');
        const userIdSpan = document.getElementById('userId');
        userIdSpan.textContent = "Track my Orders";
        popup.style.display = 'block';
    
        // Hide the pop-up after a few seconds (adjust the timeout as needed)
        setTimeout(() => {
          //popup.style.display = 'none';
        }, 5000); // 5000 milliseconds = 5 seconds
      }
  
      // Call the function to show the pop-up
      showUserIdPopup();
  