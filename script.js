    function nextPage(pageName) {
        // You can customize the navigation logic here
        // For example, you can use window.location.href to navigate to a specific page
        window.history.back();
        window.location.href = pageName+'.html';
    }




    // change color
    function changeThemeColor(newColor) {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', newColor);

        var topbar = document.querySelector('.topbar');
        topbar.style.backgroundColor = newColor;
    }
