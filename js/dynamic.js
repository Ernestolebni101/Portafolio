const about = ["I am a Systems Engineer passionate about technology and the development of multipurpose systems",
               "Enthusiast of the world of data science and machine learning",
               "Currently I offer...", 
               "web development services",
               "information systems according to the business model",
               "technical or administrative advice for the profile of my career"]
const decorators = ["<strong>","</strong>"];

const typed = new Typed('.typed',{
    strings: [`${about[0]}`, 
              `${about[1]}`,
              `${decorators[0]}${about[2]}${decorators[1]}`,
               about[3],
               about[4],
               about[5]],
               typeSpeed: 75,
               startDelay: 400,
               backSpeed: 75,
               loop: true,
               loopCount:5,
               showCursor: true
});


