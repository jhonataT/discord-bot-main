const puppeteer = require('puppeteer');

const translating = async (finalLanguage, word) => {
    
    let sourceLanguage;
    
    finalLanguage === "en" ? sourceLanguage = "pt" :  sourceLanguage = "en"; 

    const translateUrl = `https://www.deepl.com/pt-BR/translator#${sourceLanguage}/${finalLanguage}/${word}`
    const browser = await puppeteer.launch( {headless: false} );
    const page = await browser.newPage();
    await page.goto(translateUrl);
    
    const finalWord = await page.evaluate( () => {
        document.querySelector('.switchOption--2o-9u.variant_light--1OFSH.active--WFN-c[button]').click();
        
        const test = document.querySelector("#target-dummydiv.lmt__textarea.lmt__textarea_dummydiv").textContent

        console.log(`test = ${test}`);
        return test
    });
    // console.log("finalWord = " + finalWord);
    // await page.screenshot({path: './src/commands/img.png'});
    // await browser.close();
    
}


translating("en", "traduz ae");

module.exports = translating;


