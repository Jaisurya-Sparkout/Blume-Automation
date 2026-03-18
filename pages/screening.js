import { expect } from '@playwright/test';

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

async currentMedSelect(currmed){
    switch(currmed){
        case "Ozempic":
            await this.page.getByText('Ozempic (Semaglutide)', { exact: true }).click();
            break;

        case "Wegovy":
            await this.page.getByText('Wegovy (Semaglutide)', { exact: true }).click();
            break;
        
        case "Mounjaro":
            await this.page.getByText('Mounjaro (Tirzepatide)', { exact: true }).click();
            break;
        
        case "Saxenda":
            await this.page.getByText('Saxenda (Liraglutide)', { exact: true }).click();
            break;
        
        default:
            await this.page.getByText('None of the above', { exact: true }).click();
            break;
    }
}

    async OzMg(mg){
        switch(mg){
            case "0.25":
                await this.page.getByText('0.25 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;

            case "0.5":
                await this.page.getByText('0.5 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;
            
            case "1":
                await this.page.getByText('1.0 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;
            
            default:
                console.log("No matching dosage found or don't enter mg after the dosage number");
                break;

        }
        
    }

    async wgMg(mg){
        switch(mg){
            case "0.25":
                await this.page.getByText('0.25 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;
            
            case "0.5":
                await this.page.getByText('0.5 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;

            case "1":
                await this.page.getByText('1.0 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;

            case "1.7":
                await this.page.getByText('1.7 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;
            
            case "2.4":
                await this.page.getByText('2.4 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;

            default:
                console.log("No matching dosage found or don't enter mg after the dosage number");
                break;
        }

    }
    async mjMg(mg){
        switch(mg){
            case "2.5":
                await this.page.getByText('2.5 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;

            case "5":
                await this.page.getByText('5.0 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;
            
            case "7.5":
                await this.page.getByText('7.5 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;
            
            case "10":
                await this.page.getByText('10.0 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;

            case "12.5":
                await this.page.getByText('12.5 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;
            
            case "15":
                await this.page.getByText('15.0 mg', { exact: true }).click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('button', { name: 'I understand' }).click();
                break;

             default:
                console.log("No matching dosage found or don't enter mg after the dosage number");
                break;

            }
    }


async continueCurr(medKey){
    if(medKey==="Ozempic"||medKey==="Wegovy"||medKey==="Saxenda"||medKey==="Mounjaro"){
        await this.page.locator('div.space-y-4').locator('div').nth(0).click();
        await this.page.waitForTimeout(2000);
    }else{
        await this.page.getByText('No, I want to switch to a different medication', { exact: true }).click();
        await this.page.waitForTimeout(2000);
    }
}

async continuePlan(res){
    if(res==="Yes"){
        await this.page.getByText('I plan to continue using my current medication until switching over to Blume', { exact: true }).click();
    }else{
        await this.page.getByText('More than 2 weeks ago', { exact: true }).click();
        await this.page.getByRole('button', { name: 'I understand' }).click();
    }
}

async dob(dobVal){
    await this.page.getByRole('textbox').fill(dobVal);
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Continue' }).click();
    await this.page.waitForTimeout(1000);
    
}

async height(hVal) {
  const input = this.page.getByRole('textbox');
  const continueBtn = this.page.getByRole('button', { name: 'Continue' });

  await input.fill(hVal);
  await input.blur(); 

  await expect(continueBtn).toBeEnabled(); 
  await continueBtn.click();
}

async weight(wVal) {
  const input = this.page.getByRole('textbox'); // better than generic CSS
  const continueBtn = this.page.getByRole('button', { name: 'Continue' });

  await input.fill(wVal);
  await input.blur(); 

  await expect(continueBtn).toBeEnabled(); 
  await continueBtn.click();
}


async jointComplaints(comp){
    switch(comp){
        case "Knee":
            await this.page.getByText('Knee complaints', { exact: true }).click();
            await this.page.getByRole('button', { name: 'Continue' }).click();
            break;
        
        case "Hip":
            await this.page.getByText('Hip complaints', { exact: true }).click();
            await this.page.getByRole('button', { name: 'Continue' }).click();
            break;
        
        case "Ankle":
            await this.page.getByText('Ankle complaints', { exact: true }).click();
            await this.page.getByRole('button', { name: 'Continue' }).click();
            break;

        default:
            await this.page.getByText('None of the above', { exact: true }).click();
            await this.page.getByRole('button', { name: 'Continue' }).click();
            await this.page.waitForTimeout(2000);
            await this.page.getByText('None of the above', { exact: true }).click();
            await this.page.getByRole('button', { name: 'Continue' }).click();
            await this.page.waitForTimeout(2000);
            await this.page.getByRole('button', { name: 'I understand' }).click();
            break;
    }
}

async targetWeight(twVal){
    await this.page.getByRole('textbox').fill(twVal);
    await this.page.getByRole('button', { name: 'Continue' }).click();
}

// async allergiesScreen(){

// }














}


