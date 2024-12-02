//modul med alla dom-element, objekt och arrayer
export const elements = {
    startSite: document.querySelector('.site-wrapper__start'),
    planetsSite: document.querySelector('.site-wrapper__planets'),
    exitBtn: document.querySelector('.exit-btn'),
    
    planetName: document.querySelector('.planet__name'),
    planetNameLatin: document.querySelector('.planet__name-latin'),
    planetText: document.querySelector('.planet__text'),
    dataCircumference: document.querySelector('.data__circumference'),
    dataMaxTemp: document.querySelector('.data__temp-max'),
    dataMinTemp: document.querySelector('.data__temp-min'),
    dataKmSun: document.querySelector('.data__km-sun'),
    moonList: document.querySelector('.moons'),

    bigPlanetOne: document.querySelector('.fig-1'),
    bigPlanetTwo: document.querySelector('.fig-2'),
    bigPlanetThree: document.querySelector('.fig-3')
}

export const bodiesElement = [
    document.querySelector('.sun'),
    document.querySelector('.mercury'),
    document.querySelector('.venus'),
    document.querySelector('.earth'),
    document.querySelector('.mars'),
    document.querySelector('.jupiter'),
    document.querySelector('.saturn'),
    document.querySelector('.uranus'),
    document.querySelector('.neptune')
]

export const planetColors = [
    {
      fig1: 'rgba(255, 208, 41, 0.08)',
      fig2: 'rgba(255, 208, 41, 0.1)',
      fig3: 'rgba(255, 208, 41, 1)'
    },
    {
      fig1: 'rgba(136, 136, 136, 0.08)',
      fig2: 'rgba(136, 136, 136, 0.1)',
      fig3: 'rgba(136, 136, 136, 1)'
    },
    {
      fig1: 'rgba(231, 205, 205, 0.08)',
      fig2: 'rgba(231, 205, 205, 0.1)',
      fig3: 'rgba(231, 205, 205, 1)'
    },
    {
      fig1: 'rgba(66, 142, 212, 0.08)',
      fig2: 'rgba(66, 142, 212, 0.1)',
      fig3: 'rgba(66, 142, 212, 1)'
    },
    {
      fig1: 'rgba(239, 95, 95, 0.08)',
      fig2: 'rgba(239, 95, 95, 0.1)',
      fig3: 'rgba(239, 95, 95, 1)'
    },
    {
      fig1: 'rgba(226, 148, 104, 0.08)',
      fig2: 'rgba(226, 148, 104, 0.1)',
      fig3: 'rgba(226, 148, 104, 1)'
    },
    {
      fig1: 'rgba(199, 170, 114, 0.08)',
      fig2: 'rgba(199, 170, 114, 0.1)',
      fig3: 'rgba(199, 170, 114, 1)'
    },
    {
      fig1: 'rgba(201, 212, 241, 0.08)',
      fig2: 'rgba(201, 212, 241, 0.1)',
      fig3: 'rgba(201, 212, 241, 1)'
    },
    {
      fig1: 'rgba(122, 145, 167, 0.08)',
      fig2: 'rgba(122, 145, 167, 0.1)',
      fig3: 'rgba(122, 145, 167, 1)'
    }
] 
