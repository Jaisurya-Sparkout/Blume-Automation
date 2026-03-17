export default class ScreeningPage {

    constructor(page) {
        this.page = page;
      
    }

    async gotoBlume(){
        await this.page.goto("https://dev-app.blumehealth.com",{waitUntil:'domcontentloaded'});
        await this.page.waitForTimeout(3000);
    }

    async clearStorage(){
        // Clear all local storage data
        await this.page.evaluate(() => {
            localStorage.clear();
            sessionStorage.clear();
        });
    }

    async clickContinue(){
        await this.page.locator('button:has-text("Continue")').click();
        await this.page.waitForTimeout(2000);
    }

    async screeningGender(gender){

    if(gender==="Male"){
       await this.page.getByText('Male', { exact: true }).click();
    }else{
        await this.page.getByText('Female', { exact: true }).click();
    }
    await this.page.waitForTimeout(3000);
}

async FemaleQuestion(res){
    switch(res){
        case "I am pregnant":
            await this.page.getByText('I am pregnant', { exact: true }).click();
            await this.page.waitForTimeout(2000);

        case "I plan on becoming pregnant in the next 2 months":
            await this.page.getByText('I plan on becoming pregnant in the next 2 months', { exact: true }).click();
            await this.page.waitForTimeout(2000);
            break;
        
        case "I am breastfeeding":
            await this.page.getByText('I am breastfeeding', { exact: true }).click();
            await this.page.waitForTimeout(2000);  
            break;
        
        default:
            await this.page.getByText('None of the above', { exact: true }).click();
            await this.page.waitForTimeout(2000);
    }
}

async screeningDisease(disease){
    switch(disease){
    case "I have cancer or had it in the past 5 years":   
    await this.page.getByText('I have cancer or had it in the past 5 years', { exact: true }).click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('button', { name: 'Continue' }).click();
    await this.page.waitForTimeout(2000);
    break;

    case "Cardiovascular diseases":
        await this.page.getByText('Cardiovascular diseases', { exact: true }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000);
        break;

    case "Kidney diseases":
        await this.page.getByText('Kidney diseases', { exact: true }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000);
        break;

    case "Liver diseases":
        await this.page.getByText('Liver diseases', { exact: true }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000);
        break;

    case "Diabetes":
        await this.page.getByText('Diabetes', { exact: true }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000);
        break;

    case "Pancreatitis":
        await this.page.getByText('Pancreatitis', { exact: true }).click();
         await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000);
        break;

    case "Mental disorders":
        await this.page.getByText('Mental disorders', { exact: true }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000);
        break;

    case "Thyroid disorders":
        await this.page.getByText('Thyroid disorders', { exact: true }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000);
        break;

    default:
        await this.page.getByText('None of the above', { exact: true }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000);

    }
}

async CancerDisease(res){
    if(res==="Yes"){
        await this.page.getByText('Yes', { exact: true }).click();
    }else{
        await this.page.getByText('No', { exact: true }).click();
    }
}

async calorieIntake(res){
    switch(res){

    case "I have tried to eat fewer calories":
         await this.page.getByText('I have tried to eat fewer calories', { exact: true }).click();
         await this.page.getByRole('button', { name: 'Continue' }).click();
         await this.page.waitForTimeout(2000);
         await this.page.getByRole('button', { name: 'Got it!' }).click();
         await this.page.waitForTimeout(2000);
         break;
    
    case "I have tried to be more active":
        await this.page.getByText('I have tried to be more active', { exact: true }).click();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Got it!' }).click();
        await this.page.waitForTimeout(2000);
        break;

    default:
        await this.page.getByText('None of the above', { exact: true }).click();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Got it!' }).click();
        await this.page.waitForTimeout(2000);
        break;
    }
}















}


