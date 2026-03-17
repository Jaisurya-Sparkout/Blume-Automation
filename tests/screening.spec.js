import ScreeningPage from "../pages/screening";
import {test} from '@playwright/test';

test('Self-Screening',async({page})=>{
    const screeningPage=new ScreeningPage(page);

    await screeningPage.gotoBlume();
    await screeningPage.clickContinue();
    await screeningPage.screeningGender("Male");
    // await screeningPage.FemaleQuestion(); //If female is the gender
    await screeningPage.screeningDisease("I have cancer or had it in the past 5 years");
    await screeningPage.CancerDisease("No");
    await screeningPage.calorieIntake();

})