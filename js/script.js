const isMobile = () => {
    return window.innerWidth <= 780;
};

const main = () => {
    const shareIconContainers = document.querySelectorAll(
        ".share-icon-outer-container"
    );

    const innerProfileContainer = document.querySelector(
        ".profile-container-mobile .inner-profile-container"
    );

    const shareBoxDesktop = document.querySelector(
        ".profile-container-desktop .share-box-outer-container"
    );

    const shareBoxMobile = document.querySelector(
        ".profile-container-mobile .share-box-outer-container"
    );

    shareIconContainers.forEach((container) => {
        container.addEventListener("click", () => {
            const innerProfileContainerShowing =
                window.getComputedStyle(innerProfileContainer, null).display ===
                "flex";
            if (!isMobile()) {
                shareBoxDesktop.classList.toggle("hidden");
            }
            if (innerProfileContainerShowing) {
                innerProfileContainer.style.display = "none";
                shareBoxMobile.style.display = "block";
            } else {
                innerProfileContainer.style.display = "flex";
                shareBoxMobile.style.display = "none";
            }
        });
    });
};

main();
