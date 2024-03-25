window.addEventListener('DOMContentLoaded', function () {
    // Load the H5P content
    const h5pContainer = document.getElementById('h5p-container');
    const contentUrl = '../assets/h5p/interactive-video-2-618.h5p'; // Replace with the path to your H5P file

    // Load the H5P content
    H5P.loadContent(contentUrl, h5pContainer, {frameJs: 'path/to/h5p-standalone/js', frameCss: 'path/to/h5p-standalone/css'});
});