//#region  info
const tecClasses = [['candidatos', 'wow', 'fadeInUp'],
    'parcial',
    'info',
    'nome',
    'progressBar', 'percentagem', 'percentagem-num'];

const technologys = [{
    tec: "Javascript & TypesCript",
    proggress: "90%"
},
{
    tec: "SQL",
    proggress: "95%"
},
{
    tec: "NOSQL",
    proggress: "95%"
},
{
    tec: "C#",
    proggress: "100%"
},
{
    tec: "C++",
    proggress: "70%"
},
{
    tec: "R",
    proggress: "65%"
},
{
    tec: "Python",
    proggress: "95%"
},
{
    tec: "Html & Css",
    proggress: "95%"
}];


const frameworks = [
    {
        tec: "Express",
        proggress: "95%"
    },
    {
        tec: "Nesjts",
        proggress: "90%"
    },
    {
        tec: "Asp.Net Core & Framework",
        proggress: "95%"
    },
    {
        tec: "Flask",
        proggress: "80%"
    },
    {
        tec: "FastApi",
        proggress: "70%"
    },
    {
        tec: "Pytorch",
        proggress: "70%"
    },
    {
        tec: "Angular",
        proggress: "95%"
    }];

//#endregion
/*************************************  Generate HTML**************************** */
const techSkill = document.getElementById('techSkill');
const fSkills = document.getElementById('frameworkSkills')

const showSkills = () => {
    initElements(technologys, techSkill);
    initElements(frameworks, fSkills);
}

const initElements = (content,superElement) => {
    content.forEach(c => {
        const { tec, proggress } = c;
        let elements = classDistributor(tecClasses,divGenerator(7));
        const candidate = elements.find(e => e.class == 'candidatos').element;
        const parcial = elements.find(e => e.class == 'parcial').element;
        const info = elements.find(e => e.class == 'info').element;
        const progressBar = elements.find(e => e.class == 'progressBar').element;
        const percentagem = elements.find(e => e.class == 'percentagem').element;
        const percentagem_num = elements.find(e => e.class == 'percentagem-num').element; 
        const nome = elements.find(e => e.class == 'nome').element;
        /** INNER VALUES */
        nome.innerText = tec;
        percentagem.style =`width: ${proggress};`;
        percentagem_num.innerText = proggress;
        /** APPEND ELEMENTS */
        info.appendChild(nome);
        progressBar.appendChild(percentagem);
        percentagem.appendChild(percentagem_num);
        parcial.append(info, progressBar);
        candidate.appendChild(parcial);
        superElement.appendChild(candidate);
    })
}

// CANDIDATO > PARCIAL
// 	PARCIAL > INFO > NOME, PROGGRESSBAR > PERCENTAGEM > PERCENTAGEM-NUM
/**
 * 
 * @METODOS_GENERADORES
 * @returns 
 */
const divGenerator = (number) => {
    const divArray = [];
    for (let index = 0; index < number; index++) {
        let div = document.createElement('div');
        divArray.push(div);
    }
    return divArray;
}

const classDistributor = (classes, htmlElements) => {
    const divArray = [];
    if (htmlElements.length === classes.length) {
        for (const [index, element] of classes.entries()) {

            if(Array.isArray(element))
                 htmlElements[index].classList.add(...element);
            htmlElements[index].classList.add(element);
            divArray.push({
                class: (Array.isArray(element)) ? element[0] : element,
                element: htmlElements[index]
            })
        }
        return divArray;
    }
    else {
        console.error(`los dos arreglos no son iguales,
                  problemas para asignar clases a los atributos`);
        return divArray;
    }
}

showSkills()