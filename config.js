var config = {
    style: 'mapbox://styles/shaowj/clsjr0shm00i901pf71viajvg',
    accessToken: 'pk.eyJ1Ijoic2hhb3dqIiwiYSI6ImNsczE3aG1mazA4aWsyanFud3IwdW13dmwifQ.vPxlbGjTLVSRkagnlM523g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Story of McDonald\'s in Singapore ',
    subtitle: 'the history of fast-food in Singapore',
    byline: 'By Wenjia',
    footer: 'Source: Open Street Map. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The First McDonald\'s Restaurant in Singapore',
            image: 'https://www.mcdonalds.com.sg/sites/default/files/2021-09/hello-singapore_1.png',
            description: 'This webpage will take you through the history of fast food hamburgers in Singapore, represented by McDonald\'s.<p>In 1979, McDonald\'s made its debut in Singapore with its first restaurant opening at Liat Towers on Orchard Road. This event marked the beginning of the fast-food giant\'s journey in Singapore, setting a world record for the most hamburgers served in a single day during its launch. The opening of this outlet introduced Singaporeans to the concept of self-service in fast food, a shift from the traditional table service they were accustomed to.',
            location: {
                center: [103.83059398025475, 1.3052048658194375],
                zoom: 17,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'mcd-in-singapore',
                     opacity: 0, 
                     duration: 10
                 },
                 {
                    layer: 'isochrones',
                    opacity: 0, 
                 },
                 {
                    layer: 'buger',
                    opacity: 0, 
                 },
                 {
                     layer: 'liat-towers',
                     opacity: 1, 
                     duration: 0
                 }
            ],
            onChapterExit: [
                {
                     layer: 'mcd-in-singapore',
                     opacity: 1,
                     duration: 5000
                },
                {
                   layer: 'isochrones',
                   opacity: 0, 
                   duration: 5000
                },
                {
                 layer: 'buger',
                 opacity: 0, 
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Current Distribution of All Mcdonald\'s in Singapore',
            image: 'https://www.mcdonalds.com.sg/sites/default/files/2021-09/we-deliver-247.png',
            description: 'After 40 years, more than 135 McDonald\'s restaurants island-wide serve 6.5 million customers every month.',
            location: {
                center: [103.90584, 1.35435],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcd-in-singapore',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'liat-towers',
                    opacity: 0, 
                    duration: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mcd-in-singapore',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'isochrones',
                    opacity: 0.5,
                    duration: 300
                },
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Occupancy of McDonald\'s',
            image: '',
            description: `We based our analysis on the existing data from 135 McDonald's outlets. Utilizing the road network data from OpenStreetMap, we calculated the 5-10 minute walking coverage area from each McDonald's outlet. The calculation revealed that these areas almost cover 30% of residences across Singapore.
            <br><br>
            <video width="240" height="320" controls>
            <source src="./images/I_eat_Mcd.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video>`,
            location: {
                center: [103.80584, 1.36435],
                zoom: 12,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'isochrones',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'buger',
                    opacity: 0.8,
                    duration: 300
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Other Buger-brands in Singapore',
            image: './images/legend.png',
            description: 'With the development of time, more and more burger fast food brands have entered Singapore, such as Buger King, MOS Buger and so on. In contrast, McDonald\'s still occupies the position as the number one burger fast food brand in Singapore. Geographically, McDonald\'s and Buger King are not only located in commercial districts, but also in many HDB estates. Emerging brands such as Shake Shack and MOS Buger are mainly located in large shopping centres.',
            location: {
                center: [103.80584, 1.37435],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'buger',
                    opacity: 0,
                    duration: 300
                }
            ]
        }
    ]
};
