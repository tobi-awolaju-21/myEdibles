    function nextPage(pageName) {
        // You can customize the navigation logic here
        // For example, you can use window.location.href to navigate to a specific page
        window.history.back();
        window.location.href = pageName+'.html';
    }




    // change color
    function changeThemeColor(newColor) {
        const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color');

        // Convert the colors to RGB values
        const currentRGB = currentColor.match(/\d+/g).map(Number);
        const newRGB = newColor.match(/\d+/g).map(Number);

        // Calculate the difference between the current and new colors
        const deltaRGB = newRGB.map((value, index) => value - currentRGB[index]);

        // Duration of the transition in milliseconds
        const duration = 500; // Adjust as needed

        // Get the current time
        const startTime = performance.now();

        // Update the theme color and related styles in the transition
        function updateThemeColor() {
            const currentTime = performance.now();
            const progress = Math.min(1, (currentTime - startTime) / duration);

            // Calculate the intermediate color
            const intermediateRGB = currentRGB.map((value, index) =>
                Math.round(value + progress * deltaRGB[index])
            );

            // Set the new color as a CSS variable
            document.documentElement.style.setProperty('--theme-color', `rgb(${intermediateRGB.join(',')})`);

            // Update topbar background color with gradient alpha
            const alpha = 1 - (1 - 0.83) * progress;
            document.querySelector('.topbar').style.background = `rgba(${intermediateRGB.join(',')}, ${alpha})`;

            // Update topbar box shadow color
            document.querySelector('.topbar').style.boxShadow = `8px 8px 100px rgb(${intermediateRGB.join(',')})`;

            // Continue the transition if not completed
            if (progress < 1) {
                requestAnimationFrame(updateThemeColor);
            }
        }

        // Start the transition
        updateThemeColor();
    }